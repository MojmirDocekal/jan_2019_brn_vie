var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("exp"), startsWith("f"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
         },
    "AcceptabilityJudgment", { as: [["a", "Ano"], ["n", "Ne"]],
                               randomOrder: false,
                               showNumbers: false,
                               },
    "Message", { hideProgressBar: true, transfer: "click" }
];

var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

          ["practice", aj, {s: {html: "<div style=\"text-align: center\";\"width: 30em;\"><img src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/boys_girls.png?raw=true\" height="200"</div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku mluví tři dívky se dvěma chlapci.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 0}],
["practice", aj, {s: {html: "<div style=\"text-align: center\; \"width: 30em;\"><img src=\"https://raw.githubusercontent.com/MojmirDocekal/jan_2019_exp_ibex_bv/master/dancers_1.png?raw=true\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku tančí každá žena s jedním mužem.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 1}],
["practice", aj, {s: {html: "<div style=\"text-align: center\; \"width: 30em;\"><img src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/girls_flowers.png?raw=true\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku se každá ze dvou dívek dívá pouze na jednu květinu.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 1}],

          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["exp-item2-overlap-dvoje", 2], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/karta-overlap.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">V horních rozích jsou dvoje karty.</font></p><i>Je věta pravdivá?</i></div>"}}],
[["exp-item2-overlap-skupiny", 2], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/karta-overlap.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">V horních rozích jsou dvě skupiny karet.</font></p><i>Je věta pravdivá?</i></div>"}}],
    [["exp-item2-spread-dvoje", 2], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/karta-spread.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Podél levého a pravého okraje jsou dvoje karty.</font></p><i>Je věta pravdivá?</i></div>"}}],
    [["exp-item2-spread-skupiny", 2], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/karta-spread.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Podél levého a pravého okraje jsou dvě skupiny karet.</font></p><i>Je věta pravdivá?</i></div>"}}],
[["exp-item3-overlap-dvoje", 3], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/hranolky-overlap.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">V horních rozích jsou dvoje hranolky.</font></p><i>Je věta pravdivá?</i></div>"}}],
[["exp-item3-overlap-skupiny", 3], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/hranolky-overlap.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">V horních rozích jsou dvě skupiny hranolků.</font></p><i>Je věta pravdivá?</i></div>"}}],
    [["exp-item3-spread-dvoje", 3], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/hranolky-spread.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Podél levého a pravého okraje jsou dvoje hranolky.</font></p><i>Je věta pravdivá?</i></div>"}}],
    [["exp-item3-spread-skupiny", 3], aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/hranolky-spread.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Podél levého a pravého okraje jsou dvě skupiny hranolků.</font></p><i>Je věta pravdivá?</i></div>"}}],
    
["filler1", aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/filler_A.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku je nejvíc klíčů.</font></p><i>Je věta pravdivá?</i></div>"}}],
["filler2", aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/filler_A.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Všechny objekty na obrázku jsou karty.</font></p><i>Je věta pravdivá?</i></div>"}}],


];
