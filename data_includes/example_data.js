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

          ["practice", aj, {s: {html: "<div style=\"text-align: center\";\"width: 30em;\"><table><table cellspacing=100><tr><td><img src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/boys_girls.png?raw=true\"></td><td><img src=\"https://raw.githubusercontent.com/MojmirDocekal/jan_2019_exp_ibex_bv/master/dancers_1.png?raw=true\"></td></table></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku mluví tři dívky se dvěma chlapci.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 0}],
["practice", aj, {s: {html: "<div style=\"text-align: center\; \"width: 30em;\"><img src=\"https://raw.githubusercontent.com/MojmirDocekal/jan_2019_exp_ibex_bv/master/dancers_1.png?raw=true\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku tančí každá žena s jedním mužem.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 1}],
["practice", aj, {s: {html: "<div style=\"text-align: center\; \"width: 30em;\"><img src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/girls_flowers.png?raw=true\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku se každá ze dvou dívek dívá pouze na jednu květinu.</font></p><i>Je věta pravdivá?</i></div>"}, hasCorrect: 1}],

          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-neg-ani", 1], aj, {s: {html: "<p>Kontext: Petr se už od dětství toužil stát vojákem. Jak dospíval, zjišťoval si o armádě více informací. Například zjistil, že nejmenší hodnost je vojín a nejvyšší generál, hodnost majora je někde mezi. Po vystudování gymnázia se definitivně rozhodl.</p><p>Věta: Petr se nakonec nestal ani vojínem.</p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],

[["first-item1-ant-ani", 1], aj, {s: {html: "<p>Kontext: Petr se už od dětství toužil stát vojákem. Jak dospíval, zjišťoval si o armádě více informací. Například zjistil, že nejmenší hodnost je vojín a nejvyšší generál, hodnost majora je někde mezi. Po vystudování gymnázia se definitivně rozhodl.</p><p>Věta: Jestli se Petr stane ani vojínem, bude muset nosit zelené oblečení.</p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],

[["first-item1-nr-ani", 1], aj, {s: {html: "<p>Kontext: Petr se už od dětství toužil stát vojákem. Jak dospíval, zjišťoval si o armádě více informací. Například zjistil, že nejmenší hodnost je vojín a nejvyšší generál, hodnost majora je někde mezi. Po vystudování gymnázia se definitivně rozhodl.</p><p>Věta: Petr nechce, aby se z něho stal ani vojín.</p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],

[["first-item1-neg-ani-top", 1], aj, {s: {html: "<p>Kontext: Petr se už od dětství toužil stát vojákem. Jak dospíval, zjišťoval si o armádě více informací. Například zjistil, že nejmenší hodnost je vojín a nejvyšší generál, hodnost majora je někde mezi. Po vystudování gymnázia se definitivně rozhodl.</p><p>Věta: Petr se nakonec nestal ani nejvyšším generálem.</p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],


["filler1", aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/filler_A.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Na obrázku je nejvíc klíčů.</font></p><i>Je věta pravdivá?</i></div>"}}],
["filler2", aj, {s: {html: "<div style=\"text-align: center\;\"width: 40em;\"><img src=\"http://www.jakubdotlacil.com/cl-brno/A_dvoje/filler_A.png\"></div><div style=\"text-align: center\"; font-size=\"+3\"><p><font size=\"+2\">Všechny objekty na obrázku jsou karty.</font></p><i>Je věta pravdivá?</i></div>"}}],


];
