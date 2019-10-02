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
    "AcceptabilityJudgment", { as: ["levý", "pravý", "ani jeden"],
                              presentAsScale: false,
                              leftComment: "(věta v kontextu odpovídá levému obrázku)",
                              rightComment: "(věta v kontextu odpovídá pravému obrázku)",
                               randomOrder: false,
                               showNumbers: false,
                               },
    "Message", { hideProgressBar: true, transfer: "click" }
];

var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

          ["practice", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_d_wrong.jpeg?raw=true\"></td></table></center>Kontext: Practice kontext 1<center><p>Věta: <i>Practice věta 1.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}, hasCorrect: 0}],
["practice", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_d_wrong.jpeg?raw=true\"></td></table></center>Kontext: Practice kontext 2.</p><center><p>Věta: <i>Practice věta 2.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}, hasCorrect: 1}],

          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item2-nd-ref", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>[DEBUG: first-item2-nd-ref]Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Muž i žena vyrobili dva dřevěné výrobky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-nd-svo", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>[DEBUG: first-item2-nd-svo]Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Dva soutěžící vyrobili židli i ptačí budku.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-nd-move-a", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>[DEBUG: first-item2-nd-move-a]Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Na veletrhu byly židle i ptačí budka vyrobeny dvěma soutěžícími.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-nd-move-abar", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>[DEBUG: first-item2-nd-move-abar]Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Židle i ptačí budku dva soutěžící vyrobili během daného limitu.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item12-d-ref", 12], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_d_wrong.jpeg?raw=true\"></td></table></center>[DEBUG: first-item12-d-ref]Kontext: Na středověký jarmark se sjeli příznivci z celého okolí. Prodavači byli oblečeni do typických středověkých kostýmů a prodávali ručně vyrobené výrobky. Mezi oblíbené patřily stánky kovářů, kteří na přání zákazníků ukovali ozdobné železné předměty.</p><center><p>Věta: <i>Kovář i kovářka ukovali dva železné předměty.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item12-d-svo", 12], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_d_wrong.jpeg?raw=true\"></td></table></center>[DEBUG: first-item12-d-svo]Kontext: Na středověký jarmark se sjeli příznivci z celého okolí. Prodavači byli oblečeni do typických středověkých kostýmů a prodávali ručně vyrobené výrobky. Mezi oblíbené patřily stánky kovářů, kteří na přání zákazníků ukovali ozdobné železné předměty.</p><center><p>Věta: <i>Dva kováři ukovali želežnou podkovu i železný meč.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item12-d-move-a", 12], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_d_wrong.jpeg?raw=true\"></td></table></center>[DEBUG: first-item12-d-move-a]Kontext: Na středověký jarmark se sjeli příznivci z celého okolí. Prodavači byli oblečeni do typických středověkých kostýmů a prodávali ručně vyrobené výrobky. Mezi oblíbené patřily stánky kovářů, kteří na přání zákazníků ukovali ozdobné železné předměty.</p><center><p>Věta: <i>Na jarmarku byly železná podkova i železný meč ukovány dvěma kováři.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item12-d-move-abar", 12], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_d_wrong.jpeg?raw=true\"></td></table></center>[DEBUG: first-item12-d-move-abar]Kontext: Na středověký jarmark se sjeli příznivci z celého okolí. Prodavači byli oblečeni do typických středověkých kostýmů a prodávali ručně vyrobené výrobky. Mezi oblíbené patřily stánky kovářů, kteří na přání zákazníků ukovali ozdobné železné předměty.</p><center><p>Věta: <i>Železnou podkovu i železý meč dva kováři ukovali na jarmarku.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],


["filler1", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_non-distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/12_nd_wrong.jpeg?raw=true\"></td></table></center>Kontext: Filler kontext 1.</p><center><p>Věta: <i>Dva vesničané vyrobili dva předměty ze železa.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

["filler2", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td></table></center>Kontext: Filler kontext 2.</p><center><p>Věta: <i>Dva soutěžící vyrobili každý dva dřevěné výrobky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],


];
