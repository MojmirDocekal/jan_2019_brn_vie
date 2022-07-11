#' ---
#' output: 
#'    pdf_document:
#'        keep_tex: yes
#' ---

#We create readable column names
y <- paste("V", 1:12, sep="")
y

data1 <- read.csv("results.csv", sep=",", header=FALSE, fill=TRUE, col.names=y, colClasses="character", blank.lines.skip=TRUE, comment.char="#", strip.white=TRUE)

str(data1)
head(data1)

data2 <- data1

data1.fin <- data.frame(Subj=data1$V1, Controller=data1$V3, ItemNo=data1$V4, Scenario=data1$V6, Text=data1$V8, Answer=data1$V9, NullOrCorrect=data1$V10, AnswerTimes=data1$V11)
str(data1.fin)
head(data1.fin,n=10)

# we replace the "%2C" sequence (the comma) with "c" (not an actual comma because we are storing data in csv format) so that we get correct character counts for all words

summary(data1.fin$Answer)
length(data1.fin$Answer)
levels(data1.fin$Answer)

data1.fin <- data1.fin[-which(data1.fin$Scenario=="practice"),]

write.csv(data1.fin, "results_with_fillers.csv", row.names=FALSE, fileEncoding="utf-8")

###################################
###################################

data1 <- data1.fin

data1$Subj <- as.factor(data1$Subj)

levels(data1$Subj) <- paste("subj", 1:length(levels(data1$Subj)), sep="")

str(data1)

data1$Subj <- as.character(data1$Subj)

data1$Subj[which(data1$Subj=="subj1")] <- "subj01"
data1$Subj[which(data1$Subj=="subj2")] <- "subj02"
data1$Subj[which(data1$Subj=="subj3")] <- "subj03"
data1$Subj[which(data1$Subj=="subj4")] <- "subj04"
data1$Subj[which(data1$Subj=="subj5")] <- "subj05"
data1$Subj[which(data1$Subj=="subj6")] <- "subj06"
data1$Subj[which(data1$Subj=="subj7")] <- "subj07"
data1$Subj[which(data1$Subj=="subj8")] <- "subj08"
data1$Subj[which(data1$Subj=="subj9")] <- "subj09"

data1$Subj <- as.factor(data1$Subj)

library(plyr)
ddply(data1, .(Subj), summarise, len = length(ItemNo))

#data1 <- data1[-which(data1$V2=="subj29"),]

str(data1)

test <- data1[which(grepl("^filler", data1$Scenario)),]

test2 <- test[which(grepl("NULL", test$Text)),]

str(test2)

test <- test2

str(test)

str(test$Scenario)
test$Answer <- as.factor(test$Answer)
str(test$Answer)

test$Scenario <- as.character(test$Scenario)
test$Answer <- as.character(test$Answer)

test$MeasuredAnswer <- 0
test$MeasuredAnswer <- as.numeric(test$MeasuredAnswer)

test$Subj[which(grepl("left", test$Scenario))]

test$MeasuredAnswer[which(grepl("left", test$Scenario) & grepl("levý", test$Answer))] <- 1
test$MeasuredAnswer[which(grepl("right", test$Scenario) & grepl("pravý", test$Answer))] <- 1
test$MeasuredAnswer[which(grepl("bad", test$Scenario) & grepl("jeden", test$Answer))] <- 1

library(dplyr)

test_results <- test %>%
  group_by(Subj) %>%
  dplyr::summarize(Mean = mean(MeasuredAnswer, na.rm=TRUE))

test_results

hist(test_results$Mean)

mean(test_results$Mean)

min(test_results$Mean)

test_results[which(test_results$Mean < 0.75),]

# four subjects: 15, 16, 28, 34, 35

data1 <- data1[-which(data1$Subj %in% c("subj15","subj16","subj28","subj34","subj35")),]

str(data1)

test <- data1[which(grepl("^filler", data1$Scenario)),]

test2 <- test[which(grepl("NULL", test$Text)),]

str(test2)

test <- test2

str(test)

test$MeasuredAnswer <- 0
test$MeasuredAnswer <- as.numeric(test$MeasuredAnswer)

test$Subj[which(grepl("left", test$Scenario))]

test$MeasuredAnswer[which(grepl("left", test$Scenario) & grepl("levý", test$Answer))] <- 1
test$MeasuredAnswer[which(grepl("right", test$Scenario) & grepl("pravý", test$Answer))] <- 1
test$MeasuredAnswer[which(grepl("bad", test$Scenario) & grepl("jeden", test$Answer))] <- 1

library(plyr)

test_results <- test %>%
  group_by(Subj) %>%
  dplyr::summarize(Mean = mean(MeasuredAnswer, na.rm=TRUE))

test_results

hist(test_results$Mean)

mean(test_results$Mean)

min(test_results$Mean)

data1 <- data1[-which(grepl("^filler", data1$Scenario)),]

str(data1)

data1.fin <- data.frame(Subj=data1$Subj, ItemNo=as.numeric(as.character(data1$ItemNo)), Scenario=as.character(data1$Scenario), Answer=data1$Answer, AnswerTimes=data1$AnswerTimes)
str(data1.fin)

head(data1.fin)
levels(data1.fin$Subj)

#data1.fin <- data1.fin[-which(data1.fin$Scenario=="practice"),]
data1.fin <- data1.fin[-which(data1.fin$Scenario=="intro"),]

data1.fin <- data1.fin[which(!is.na(data1.fin$AnswerTimes)),]


# ? maybe not
data1.fin <- data1.fin[which(data1.fin$Answer == "levý" | data1.fin$Answer == "pravý"| data1.fin$Answer == "ani jeden"),]

write.csv(data1.fin, "results_with_fillers2.csv", row.names=FALSE)

###################################
###################################

dataf <- read.csv("results_with_fillers2.csv")

str(dataf)

levels(as.factor(dataf$ItemNo))
length(table(subset(dataf, Subj=="subj01")$ItemNo))


# Generate the fixed effects

dataf$Scenario <- as.character(dataf$Scenario)

strsplit(dataf$Scenario[1], "-")[[1]]

library(plyr)

dataf <- ddply(dataf, .(Scenario), transform, Item = strsplit(Scenario[1], "-")[[1]][2])

dataf <- ddply(dataf, .(Scenario), transform, Condition = strsplit(Scenario[1], "-")[[1]][3])

str(dataf)

ddply(dataf, .(Scenario), summarise, Len = length(Answer))
52

ddply(dataf, .(Condition), summarise, Len = length(Answer))
416

ddply(dataf, .(Condition), summarise, Means = mean(Answer, na.rm=TRUE))

ddply(dataf, .(Condition), summarise, Medians = median(Answer, na.rm=TRUE))

tail(dataf)

dataf[1200:1210,]

write.csv(dataf, "results_final.csv", row.names=FALSE)


