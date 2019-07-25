var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("exp"), startsWith("f"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [
  normalMessage: "Počkejte prosím na další položku v experimentu.",
    "Separator", { transfer: 800,
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu."
         },
    "AcceptabilityJudgment", { as: [["l", "Vlevo"], ["p", "Vpravo"]],
                               randomOrder: false,
                               showNumbers: false,
                               },
    "Message", { hideProgressBar: true, transfer: "click" }
];

var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

          ["practice", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_d_wrong.jpeg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Holčička Lenka si na narozeniny přála ručně ušité třičko. Maminka a babička se rozhodly, že holčičce udělají radost, nakoupily látku a po nocích šily.</p><center><p>Věta: <i>Maminka i babička ušily Lence k narozeninám dvě trička.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}, hasCorrect: 0}],
["practice", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/13_d_wrong.jpeg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Holčička Lenka si na narozeniny přála ručně ušité třičko. Maminka a babička se rozhodly, že holčičce udělají radost, nakoupily látku a po nocích šily.</p><center><p>Věta: <i>Maminka i babička ušily Lence k narozeninám dvě trička.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}, hasCorrect: 1}],

          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item2-ref", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Muž i žena vyrobili dva dřevěné výrobky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-svo", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Dva soutěžící vyrobili židli i ptačí budku.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-move-a", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Na veletrhu byly židle i ptačí budka vyrobeny dvěma soutěžícími.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["first-item2-move-abar", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Židle i ptačí budku dva soutěžící vyrobili během daného limitu.</i></p></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],


["filler1", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/16_non-distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/16_d_wrong.jpeg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: O víkendu se syn a otec vydali na zahradu za domem, aby pokáceli staré duby a smrky a místo nich vysadili nové.</p><center><p>Věta: <i>Syn i otec pokáceli dva stromy.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],
["filler2", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/16_non-distributive.jpeg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/16_d_wrong.jpeg?raw=true\"></td></table></center></div><div style=\"text-align: justify\"<p>Kontext: O víkendu se syn a otec vydali na zahradu za domem, aby pokáceli staré duby a smrky a místo nich vysadili nové.</p><center><p>Věta: <i>Syn i otec pokáceli dva stromy.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],


];
