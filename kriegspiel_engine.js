"use strict";

// =======================================================
// KRIEGSPIEL INTERACTIVE ENGINE (V.Systémique)
// =======================================================

// -------------------------------------------------------
// SECTION 0: DÉCLARATIONS GLOBALES & CONSTANTES
// -------------------------------------------------------

// L'objet FACTIONS_DATA sera peuplé par la fonction d'initialisation
// à partir de vos données brutes.
let FACTIONS_DATA = {};

// COLLEZ VOTRE OBJET 'FACTIONS_DATA_RAW' CI-DESSOUS
// (Le très gros objet JSON de votre fichier d'origine)
const FACTIONS_DATA_RAW = {    
        "Napoléon": {
        "nom": "Napoléon",
        "RAW_DATA": {
            "Population": "32 756 800", "Population des conquêtes": "", "Population des colonies": "2 509 650", "Dont colons blancs": "245 450", "Indigènes": "1 783 000", "Esclaves": "481 200",
            "Total population métropolitaine": "38 756 800", "Superficie métropole (km²)": "1 602 000", "Densité de population": "20.447",
            "Recettes fiscales (en livres tournois)": "490 450 323", "Impôts directs": "139 175 005", "Impôt foncier": "79 926 566", "Impôt sur le mobilier": "38 999 030", "Patente": "20 249 409",
            "Impôts indirects": "351 275 317", "Gabelle": "1 937 840", "Aides/autres impôts indirects": "118 208 240", "Enregistrement/successions": "101 736 600", "Douanes": "118 411 544", "Lotteries": "10 981 093",
            "Revenu national brut": "9 903 137 536", "Revenu moyen par hab": "255,52", "Dépenses militaires": "382 834 008", "Soldes": "135 221 434", "Salaires soldats": "90 650 085", "Salaires officiers": "44 571 350",
            "Salaires annuels soldats réguliers": "161,50", "Salaires conscrits": "150,45", "Salaires annuels sous-officiers": "285,55", "Salaires lieutenants": "1 000,00", "Salaires capitaines": "1 700,00",
            "Salaires lieutenants-colonels": "3 250,00", "Salaires colonels": "5 250,00", "Salaires généraux de brigade": "12 500,00", "Salaires généraux de division": "20 000,00",
            "Coût administration de la Guerre": "214 138 612", "Entretien des places": "17 775 000", "Budget de construction de places": "3 952 500", "Besoin en rations quotidiennes": "108 871 248", "Coût achat uniforme": "6 367 189",
            "Domaine de l’État (fermes en H ou bois)": "7 281 818", "Revenus des domaines": "50 972 727", "Coût fonctionnement Etat": "77 686 933", "Nombre d'administrateurs totaux": "34 067",
            "Secrétaires et administrations des ministères": "2 160", "Secrétaires et administrations des provinces/départements": "7 875", "Percepteurs d’impôts/douaniers/etc": "13 221", "Juges/chancellerie/etc": "2 375",
            "Préfets / gouverneurs": "125", "Sous-préfets/etc": "375", "Parlementaires": "469", "Personnels parlement": "1 172", "Personnel des armées": "6 296",
            "Nombre de départements / provinces": "125", "Secrétaires d'Etat": "10", "Gouverneurs / intendants / préfets": "125", "Coût des ministres et gouverneurs / préfets / intendants": "2 875 000",
            "Nombre de bâtiments à construire": "18", "Construction kilomètres de routes": "245", "Construction de ponts": "11", "Construction de canaux": "1", "Total longueur des routes principales et secondaires en kilomètres": "4 580",
            "Coûts travaux et entretiens infrastructures": "11 071 000", "Nombre de villes (+ 100 000)": "5", "Nombre de ville (100 000 – 20 000)": "21", "Nombre de villes (20 000- 5000)": "143",
            "Nombre de maires choisis par l’État": "169", "nombre de conseillers municipaux": "1 352", "Coûts fonctionnements villes": "18 053 900", "Revenus des villes": "2 087 625", "Coût éducation": "4 710 000",
            "Nombre d’Universités": "26", "Nombre de lycées": "446", "Nombre d’élèves au lycée": "28 990", "Nombre d’écoles primaires": "5 633", "Nombre d’élèves au primaire": "281 650",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "276 834", "Années de service": "4", "Recrues « maximum » sur les années de service": "1 107 337", "Engagés réels": "394 839",
            "Nombre de soldats totaux": "394 839", "Pensionnaires, retraités ou demi-soldes": "31 119", "Entraînement par mois(manœuvres, tirs)": "17", "Coût": "11 746 461",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2", "Nombre de canons par compagnie": "8", "Nombre de canons de 8 livres": "6", "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "20", "Nombre de canons par compagnie (Art. Cheval)": "6", "Nombre d’obusiers de 6 pouces (Art. Cheval)": "2", "Nombre de canons de 8 livres (Art. Cheval)": "4",
            "Nombre de compagnies d’artillerie totale": "145", "Nombre régiments artillerie": "19,0", "Nombre de canons de l’armée de campagne": "1378",
            "Garde (Infanterie) régiment": "4,00", "Dont vélites": "1,00", "Grenadiers": "2,00", "Tirailleurs-grenadiers": "1,00", "Garde (Cavalerie)": "5,50", "dont chasseurs à cheval": "3,00", "Dragons": "0,50",
            "Grenadiers à cheval": "1,00", "Lanciers": "1,00", "Artillerie de la garde": "2,00", "Compagnies d’artilleries de la garde": "16,00", "Nombre de canons par compagnie (Garde)": "8,00",
            "Nombre de canons de 8 livres (Garde)": "2,00", "Nombre de canons de 12 livres par compagnie": "6,00", "Nombre soldats Garde": "17 350", "Infanterie de la Garde": "9 600", "Cavalerie de la garde": "4 950",
            "Artillerie de la garde (canons)": "240", "Soldats dans une compagnie": "120,0", "Sous-officiers et caporaux dans une compagnie": "20,0", "Total": "140,0", "Soldats dans un bataillon": "720,0",
            "Sous-officiers et caporaux": "120,0", "Soldats dans un régiment (pied de paix)": "1 440,0", "Sous-officiers et caporaux (Régiment Paix)": "600,0", "Soldats dans un régiment (pied de guerre)": "3 600,0",
            "Soldats dans une division": "4 320,0", "Sous-officiers et caporaux (Division)": "1 800,0", "Division sur pied de guerre": "12 600,0", "Nombre de Régiments de ligne": "71,0",
            "Régiments de grenadiers": "6,0", "Régiments de génie": "11,0", "Régiments d’infanterie légère": "15,0", "Régiments étrangers": "2,0", "Nombre de régiments": "94,0", "Nombre de bataillons": "470,0", "Nombre de divisions": "47,0",
            "Fantassins (dont sous-officiers)": "191 760", "Fantassins recrutés (conscription)": "55 367", "(Soldats manquants pour le pied de guerre )": "-98 473",
            "Cavaliers dans un escadron": "180,0", "Sous-officiers et caporaux dans un escadron": "30,0", "Cavaliers dans un régiment": "840,0", "Régiments de hussards": "15,0",
            "Régiments de Uhlans/chevau-légers": "8,0", "Régiments de chasseurs à cheval": "26,0", "Régiments de dragons": "22,0", "Régiments de cuirassiers": "8,0", "Régiments de carabiniers": "2,0",
            "Nombre total de régiments": "81,0", "Régiments de cavalerie légère": "41,0", "Régiments de cavalerie polyvalente": "30,0", "Régiments de cavalerie lourde": "10,0",
            "Cavaliers dans une division de cavalerie": "3 360,0", "Nombre de divisions (Cavalerie)": "20,3", "Cavaliers": "68 040,0", "Armée permanente et garnison": "311 193",
            "Conscription": "55 367", "Canons": "12 466", "Rappel Dont canons de campagne": "1 162", "Infanterie": "247 127", "Proportion Cavalerie/infanterie": "27,53 %",
            "Artilleurs": "46 248", "Corps du génie (nombre de soldats)": "13 024", "Levée pour cette année (appelés de conscription)": "55 367", "Part sur les 1/140e": "20,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "50 500", "Besoin militaire": "140 009", "Excédent ou déficit": "260 491", "Achat chevaux": "36 954 711",
            "Chevaux officiers": "26 213", "Chevaux pour l’artillerie": "15 889", "Chevaux cavalerie": "97 907", "Forteresses": "105",
            "Forteresses de 1ère classe": "7", "Forteresses 2e classe": "17",
            "Forteresses 3e et 4e classe": "81", "Forteresses de 5e classe": "0", "Forts – Poste militaire": "214",
            "Construction de places de premier rang": "1", "Construction de places de second rang": "1", "Construction de places de troisième rang": "0", "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "748", "Capacité de casernement": "199 200", "Soldats non logés (logement chez l’habitant)": "162 215", "Coût du logement": "8 921 835",
            "Construction de casernes": "48", "Coût (construction + entretien )": "3 070 000", "Artillerie des côtes": "210", "Constructions petites fortifications/fortifications côtières": "55",
            "Lieutenants": "16 696", "Capitaines": "6 216", "Lieutenants-colonels, chef d’escadrons et majors": "2 008", "Colonels": "843", "Généraux de brigade": "484", "Généraux de division": "259",
            "Total officiers": "25 356", "Nombre d'écoles militaires (armée)": "3", "Nombre d'élèves": "840", "Milices/garde nationale": "77 514", "Proportion par rapport à la population": "1/500e",
            "Nombre de cohortes de Milices": "155", "Fusils disponibles": "15 000", "Milices coloniales": "24 545", "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "49", "Fusils disponibles (Milices Col.)": "2 500", "Divisions militaires": "32", "Pensions (familles, récompenses des généraux, etc)": "4 069", "Pensions": "13 876 872",
            "Maréchaussée/gendarmerie/police": "29 867", "Coût maréchaussée": "13 007 079", "Messagers/personnels des postes": "7 117", "Coût (Poste)": "3 451 971", "Budget naval": "120 056 098",
            "Personnel administratif de la marine": "2 414", "Nombre de marins": "23 644", "Nombre de troupes de marines dans les navires": "4 635", "Salaires des marins": "287,21",
            "Salaires et pensions pour des marins": "11 665 118", "Salaires des officiers (Marine)": "3 917 100", "Nombre de marins dans la marine marchande": "90 915", "Pêcheurs": "12 288",
            "Navires de transport": "53", "Colons envoyés aux colonies": "6 940", "Coût colonisation": "2 342 592", "Population proche du littoral (-80km) et sur les fleuves": "10 240 000",
            "Réservoir de marins": "157 333", "Marins effectifs": "126 847", "Marins encore disponibles": "30 485", "Navires de ligne": "69", "+ de 80 canons": "3", "80 canons": "8", "74 canons": "45", "64 canons": "3",
            "Navires de ligne actifs/armés": "26", "+ de 80 canons (Actifs)": "1", "80 canons (Actifs)": "4", "74 canons (Actifs)": "21", "64 canons (Actifs)": "0",
            "Navires d’escortes": "187", "Frégates": "47", "Corvettes-Brig-Sloops-chébeqs": "32", "Sloops-Goelettes-shooners": "18", "Navires d’escortes actifs": "49", "Frégates (Actifs)": "21",
            "Corvettes- (Actifs)": "20", "Sloops-Goelettes-shooners (Actifs)": "8", "Enseignes de vaisseaux": "592", "Capitaine de frégate": "173", "Lieutenants de vaisseaux": "428",
            "Capitaines de vaisseaux": "138", "Contre-amiraux": "28", "Vice-amiraux": "14", "Ecoles navales": "2", "Elèves": "162", "Construction de vaisseaux": "12",
            "Constructions navales (+80 canons)": "2", "Constructions navales 80 canons": "3", "Constructions navales 74 canons": "7", "Constructions navales (64-50 canons)": "0",
            "Construction de navires légers": "22", "Constructions navales (frégates)": "10", "Constructions navales Bricks-Corvettes": "8", "Constructions navales (Sloops-Goëlettes-Shooners)": "4",
            "Prix navires + 80 canons": "2 800 000", "Prix navires 80 canons": "2 000 000", "Prix navires 74 canons": "1 700 000", "Prix navires 64-50 canons": "1 250 000",
            "Prix navires Frégates": "650 000", "Prix navires Bricks - corvettes": "325 000", "Prix navires Sloops-Goelettes-shooners": "120 000", "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "3", "Bâtiments de la Marine": "40", "Nombre de grands arsenaux maritimes": "5", "Petits arsenaux": "5",
            "Cales de radoubs (pour vaisseaux)": "7", "Nombre d’ouvriers": "19 750", "Coût construction navires": "33 080 000", "Entretien et approvisionnement des navires": "4 314 269",
            "Entretien et approvisionnement des arsenaux": "3 368 500", "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "5 170 000", "Travaux dans les colonies": "344 000",
            "Forts dans les colonies": "30", "Constructions forts colonies": "4", "Navires de pêche": "2 048", "Navires marchands totaux": "5 795", "Cabotage (5 à 50 tonneaux)": "2 610",
            "Grand cabotage (50-100 tonneaux)": "1 650", "Commerce de haute mer (100-250 tonneaux)": "895", "Grand commerce (+ 250 tonneaux)": "640", "production navires marchands": "113",
            "Cabotage (5 à 50 tonneaux) (Prod)": "21", "Grand cabotage (50-100 tonneaux) (Prod)": "43", "Commerce de haute mer (100-200 tonneaux)": "38", "Grand commerce (+ 200 tonneaux)": "11",
            "Sucre (en Kg)": "49 310 000", "Café (Kg)": "17 230 000", "Epices (en Kg)": "8 340 000", "Fourrures (en pièces)": "89 100", "Tabac (en kg)": "734 000", "Coton (en kg)": "100 340",
            "Indigo (en kg)": "248 000", "Thé (en Kg)": "12 284 230", "Commerce estimé en livres tournois": "549 871 553", "Taxes": "68 733 944", "Droits de mouillage": "49 677 600",
            "Manufactures (textiles verreries imprimeries etc)": "201", "Production de fer (T)": "81 200", "Production de Fonte (T)": "8 700", "Production de cuivre (quintaux)": "8 340",
            "Production d'argent (Kg)": "8 580", "Production fusils": "48 000", "Production de canons": "1 305", "Production de canons navals": "1 334", "Production de poudre (T)": "290 000",
            "Industrie production en valeur": "152 599 500", "Taxe industrie": "20 249 409", "Nombre de manufactures d’armes ou arsenaux": "29", "Ouvriers": "4 959",
            "Reste après besoin en fusils (dans l’armée et marine)": "162 708", "Fusils (dans l'armée ou en réserve)": "162 708", "Besoin de canons navals": "1 602", "Réserve de canons navals": "0",
            "Superficie du territoire en forêt": "30,35 %", "Production bois (Mcube)": "43 811 200", "Consommation de bois": "39 014 550", "Si excédent, vente ou achat si quantité insuffisante": "47 966 500",
            "Taxes sur les excédents": "4 796 650", "Nombre d’hectares de blé": "12 175 200", "production blé par an (en quintaux)": "87 661 440", "Consommation": "77 356 300",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "143 327 100", "Taxes sur les excédents (Blé)": "2 508 224",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "4 485 600", "Production légumes:etc": "33 642 000", "Consommation (Légumes)": "34 881 120",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-7 434 720", "Taxes sur les excédents (Légumes)": "-148 694", "Nombre d’hectares de vigne": "1 887 156",
            "Production vin (hectolitres)": "46 235 322", "Consommation (Vin)": "32 943 280", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "513 904 638",
            "Taxes sur les excédents (Vin)": "7 708 570", "Nombre d’hectares pour l’élevage": "11 214 000",
            "Recettes totales Pays": "556 436 494", "Dépenses totales": "644 462 961", "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "-6 000 000",
            "Coût maison du roi": "35 675 000", "Trésor": "12 500 000", "Dette": "0", "Excédent": "0", "Dette ou excédent en pourcentage des recettes": "-16,90 %", "Charge de la dette": "-1 130 437,0"
        }
    },
    "Charles XII": {
        "nom": "Charles XII",
        "RAW_DATA": {
            "Population": "5 767 000", "Population des conquêtes": "", "Population des colonies": "48 730", "Dont colons blancs": "39 230", "Indigènes": "2 100", "Esclaves": "7 400",
            "Total population métropolitaine": "5 767 000", "Superficie métropole (km²)": "845 000", "Densité de population": "6,82",
            "Recettes fiscales (en livres tournois)": "57 374 393", "Impôts directs": "34 768 676", "Impôt foncier": "7 815 438", "Impôt sur le mobilier": "1 758 935", "Patente": "25 194 302",
            "Impôts indirects": "22 605 718", "Gabelle": "1 441 750", "Aides/autres impôts indirects": "7 208 750", "Enregistrement/successions": "7 929 625", "Douanes": "4 391 609", "Lotteries": "1 633 983",
            "Revenu national brut": "1 420 988 800", "Revenu moyen par hab": "246,40", "Dépenses militaires": "43 724 668", "Soldes": "20 948 192", "Salaires soldats": "13 897 973", "Salaires officiers": "7 050 219",
            "Salaires annuels soldats réguliers": "144,65", "Salaires conscrits": "134,55", "Salaires annuels sous-officiers": "234,00", "Salaires lieutenants": "850,00", "Salaires capitaines": "1 400,00",
            "Salaires lieutenants-colonels": "2 850,00", "Salaires colonels": "4 700,00", "Salaires généraux de brigade": "10 150,00", "Salaires généraux de division": "16 500,00",
            "Coût administration de la Guerre": "20 590 450", "Entretien des places": "1 115 400", "Budget de construction de places": "26 250", "Besoin en rations quotidiennes": "14 418 841", "Coût achat uniforme": "315 812",
            "Domaine de l’État (fermes en H ou bois)": "2 112 500", "Revenus des domaines": "8 450 000", "Coût fonctionnement Etat": "6 118 382", "Nombre d'administrateurs totaux": "4 644",
            "Secrétaires et administrations des ministères": "917", "Secrétaires et administrations des provinces/départements": "460", "Percepteurs d’impôts/douaniers/etc": "839", "Juges/chancellerie/etc": "380",
            "Préfets / gouverneurs": "20", "Sous-préfets/etc": "0", "Parlementaires": "80", "Personnels parlement": "560", "Personnel des armées": "1 389",
            "Nombre de départements / provinces": "20", "Secrétaires d'Etat": "7", "Gouverneurs / intendants / préfets": "20", "Coût des ministres et gouverneurs / préfets / intendants": "340 000",
            "Nombre de bâtiments à construire": "4", "Construction kilomètres de routes": "72", "Construction de ponts": "1", "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "931 000", "Nombre de villes (+ 100 000)": "0", "Nombre de ville (100 000 – 20 000)": "6", "Nombre de villes (20 000- 5000)": "31",
            "Nombre de maires choisis par l’État": "37", "nombre de conseillers municipaux": "296", "Coûts fonctionnements villes": "233 100", "Revenus des villes": "173 843", "Coût éducation": "",
            "Nombre d’Universités": "6", "Nombre de lycées": "49", "Nombre d’écoles primaires": "332",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "41 193", "Années de service": "3", "Recrues « maximum » sur les années de service": "123 579", "Engagés réels": "52 746",
            "Nombre de soldats totaux": "52 746", "Pensionnaires, retraités ou demi-soldes": "5 000", "Entraînement par mois(manœuvres, tirs)": "12", "Coût": "1 044 376",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2", "Nombre de canons par compagnie": "8", "Nombre de canons de 4 livres": "2", "Nombre de canons de 6 livres": "4", "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "3", "Nombre de canons par compagnie (Art. Cheval)": "6", "Nombre de canons de 4 livres (Art. Cheval)": "4", "Nombre d’obusiers de 6 pouces (Art. Cheval)": "2",
            "Nombre de compagnies d’artillerie totale": "13", "Nombre régiments artillerie": "2,1", "Nombre de canons de l’armée de campagne": "111",
            "Garde (Infanterie) régiment": "1,50", "Dont vélites": "0,50", "Grenadiers": "1,00", "Tirailleurs-grenadiers": "0,00", "Garde (Cavalerie)": "0,50", "dont chasseurs à cheval": "0,00", "Dragons": "0,00",
            "Grenadiers à cheval": "0,50", "Lanciers": "0,00", "Artillerie de la garde": "0,50", "Compagnies d’artilleries de la garde": "4,00", "Nombre de canons par compagnie : (Garde)": "8,00",
            "Nombre de canons de 8 livres (Garde)": "6,00", "Nombre de canons de 12 livres par compagnie": "2,00", "Nombre soldats Garde": "4 750", "Infanterie de la Garde": "3 600", "Cavalerie de la garde": "450",
            "Artillerie de la garde (canons)": "60", "Soldats dans une compagnie": "150,0", "Sous-officiers et caporaux dans une compagnie": "11,0", "Total": "161,0", "Soldats dans un bataillon": "750,0",
            "Sous-officiers et caporaux": "44,0", "Soldats dans un régiment (pied de paix)": "1 500,0", "Sous-officiers et caporaux : (Régiment Paix)": "176,0", "Soldats dans un régiment (pied de guerre)": "3 000,0",
            "Soldats dans une division": "4 500,0", "Sous-officiers et caporaux : (Division)": "528,0", "Division sur pied de guerre": "9 528,0", "Nombre de Régiments de ligne": "10,0",
            "Régiments de grenadiers": "2,5", "Régiments de génie": "1,5", "Régiments d’infanterie légère": "4,0", "Régiments étrangers": "3,0", "Nombre de régiments": "19,5", "Nombre de bataillons": "97,5", "Nombre de divisions": "0,0",
            "Fantassins (dont sous-officiers)": "32 682", "Fantassins recrutés (conscription)": "2 746", "(Soldats manquants pour le pied de guerre )": "-32 072",
            "Cavaliers dans un escadron": "150,0", "Sous-officiers et caporaux dans un escadron": "15,0", "Cavaliers dans un régiment": "660,0", "Régiments de hussards": "0,0",
            "Régiments de Uhlans/chevau-légers": "0,0", "Régiments de chasseurs à cheval": "4,0", "Régiments de dragons": "6,5", "Régiments de cuirassiers": "1,0", "Régiments de carabiniers": "",
            "Nombre total de régiments": "11,5", "Régiments de cavalerie légère": "4,0", "Régiments de cavalerie polyvalente": "6,5", "Régiments de cavalerie lourde": "1,0",
            "Cavaliers dans une division de cavalerie": "2 640,0", "Nombre de divisions : (Cavalerie)": "2,9", "Cavaliers": "7 590,0", "Armée permanente et garnison": "50 000",
            "Conscription": "2 746", "Canons": "1 484", "Rappel : Dont canons de campagne": "101", "Infanterie": "35 428", "Proportion Cavalerie/infanterie": "21,42 %",
            "Artilleurs": "5 605", "Corps du génie (nombre de soldats)": "1 776", "Levée pour cette année (appelés de conscription)": "2 746", "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "105 625", "Besoin militaire": "15 260", "Excédent ou déficit": "90 365", "Achat chevaux": "-2 169 353",
            "Chevaux officiers": "3 209", "Chevaux pour l’artillerie": "1 488", "Chevaux cavalerie": "7 590", "Forteresses": "16",
            "Forteresses de 1ère classe": "0", "Forteresses 2e classe": "2",
            "Forteresses 3e et 4e classe": "14", "Forteresses de 4e": "9", "Forts – Poste militaire": "25",
            "Construction de places de premier rang": "0", "Construction de places de second rang": "0", "Construction de places de troisième rang": "0", "Construction de places de quatrième rang": "0",
            "Nombre de casernes (1 caserne = 250 logements)": "87", "Capacité de casernement": "23 200", "Soldats non logés (logement chez l’habitant)": "25 424", "Coût du logement": "1 398 296",
            "Construction de casernes": "0", "Coût (construction + entretien )": "217 500", "Artillerie des côtes": "34", "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "3 346", "Capitaines": "1 115", "Lieutenants-colonels, chef d’escadrons et majors": "432", "Colonels": "155", "Généraux de brigade": "54", "Généraux de division": "8",
            "Total officiers": "5 110", "Nombre d'écoles militaires (armée)": "2", "Nombre d'élèves": "84", "Milices/garde nationale": "57 670", "Proportion par rapport à la population": "1/100",
            "Nombre de cohortes de Milices": "115", "Fusils disponibles": "17 500", "Milices coloniales": "3 923", "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "8", "Fusils disponibles (Milices Col.)": "1 500", "Divisions militaires": "7", "Pensions (familles, récompenses des généraux, etc)": "1 153", "Pensions": "2 306 800",
            "Maréchaussée/gendarmerie/police": "3 604", "Coût maréchaussée": "1 441 750", "Messagers/personnels des postes": "1 148", "Coût (Poste)": "545 379", "Budget naval": "10 126 452",
            "Personnel administratif de la marine": "116", "Nombre de marins": "1 039", "Nombre de troupes de marines dans les navires": "145", "Salaires des marins": "165,25",
            "Salaires et pensions pour des marins": "367 648", "Salaires des officiers : (Marine)": "694 450", "Nombre de marins dans la marine marchande": "5 787", "Pêcheurs": "2 559",
            "Navires de transport": "3", "Colons envoyés aux colonies": "213", "Coût colonisation": "137 818", "Population proche du littoral (-80km) et sur les fleuves": "3 412 000",
            "Réservoir de marins": "34 120", "Marins effectifs": "9 385", "Marins encore disponibles": "24 735", "Navires de ligne": "17", "+ de 80 canons": "0", "80 canons": "0", "74 canons": "6", "64 canons": "6", "50 canons": "3",
            "Navires de ligne actifs/armés": "1", "+ de 80 canons (Actifs)": "0", "80 canons (Actifs)": "0", "74 canons (Actifs)": "0", "64 canons (Actifs)": "1", "50 canons (Actifs)": "0",
            "Navires d’escortes": "27", "Frégates": "9", "Corvettes-Brig-Sloops-chébeqs": "5", "Sloops-Goelettes-shooners": "7", "Navires d’escortes actifs": "4", "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "2", "Sloops-Goelettes-shooners (Actifs)": "0", "Enseignes de vaisseaux": "89", "Capitaine de frégate": "26", "Lieutenants de vaisseaux": "68",
            "Capitaines de vaisseaux": "31", "Contre-amiraux": "6", "Vice-amiraux": "3", "Ecoles navales": "1", "Elèves": "11", "Construction de vaisseaux": "2",
            "Constructions navales (+80 canons)": "0", "Constructions navales 80 canons": "0", "Constructions navales 74 canons": "0", "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "2", "Constructions navales (frégates)": "1", "Constructions navales Bricks-Corvettes": "0", "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Prix navires + 80 canons": "2 800 000", "Prix navires 80 canons": "2 000 000", "Prix navires 74 canons": "1 700 000", "Prix navires 64-50 canons": "1 250 000",
            "Prix navires Frégates": "650 000", "Prix navires Bricks - corvettes": "325 000", "Prix navires Sloops-Goelettes-shooners": "120 000", "Navires de ligne en radoub": "0",
            "Frégates ou navires d’escorte en radoub": "1", "Bâtiments de la Marine": "4", "Nombre de grands arsenaux maritimes": "0", "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "1", "Nombre d’ouvriers": "1 020", "Coût construction navires": "770 000", "Entretien et approvisionnement des navires": "437 051",
            "Entretien et approvisionnement des arsenaux": "249 800", "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "341 500", "Travaux dans les colonies": "401 320",
            "Forts dans les colonies": "4", "Constructions forts colonies": "0", "Navires de pêche": "427", "Navires marchands totaux": "325", "Cabotage (5 à 50 tonneaux)": "108",
            "Grand cabotage (50-100 tonneaux)": "98", "Commerce de haute mer (100-250 tonneaux)": "84", "Grand commerce (+ 250 tonneaux)": "35", "production navires marchands": "20",
            "Cabotage (5 à 50 tonneaux) (Prod)": "10", "Grand cabotage (50-100 tonneaux) (Prod)": "4", "Commerce de haute mer (100-200 tonneaux)": "3", "Grand commerce (+ 200 tonneaux)": "3",
            "Sucre (en Kg)": "402 800", "Café (Kg)": "84 100", "Epices (en Kg)": "48 200", "Fourrures (en pièces)": "34 700", "Tabac (en kg)": "102 100", "Coton (en kg)": "83 100",
            "Indigo (en kg)": "2 100", "Thé (en Kg)": "203 400", "Commerce estimé en livres tournois": "27 377 184", "Taxes": "1 368 859", "Droits de mouillage": "3 022 750",
            "Manufactures (textiles verreries imprimeries etc)": "14", "Production de fer (T)": "50 200", "Production de Fonte (T)": "1 176", "Production de cuivre (quintaux)": "85 900",
            "Production d'argent (Kg)": "19 500", "Production fusils": "44 000", "Production de canons": "240", "Production de canons navals": "90", "Production de poudre (T)": "48 000",
            "Industrie production en valeur": "123 171 000", "Taxe industrie": "25 194 302", "Nombre de manufactures d’armes ou arsenaux": "6", "Ouvriers": "426",
            "Reste après besoin en fusils (dans l’armée et marine)": "-4 085", "Fusils (dans l'armée ou en réserve)": "-4 085", "Besoin de canons navals": "180", "Réserve de canons navals": "-90",
            "Superficie du territoire en forêt": "61,75 %", "Production bois (Mcube)": "18 240 000", "Consommation de bois": "5 801 000", "Si excédent, vente ou achat si quantité insuffisante": "124 390 000",
            "Taxes sur les excédents": "12 439 000", "Nombre d’hectares de blé": "3 549 000", "production blé par an (en quintaux)": "17 212 650", "Consommation": "15 696 700",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "11 489 250", "Taxes sur les excédents : (Blé)": "114 893",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 267 500", "Production légumes:etc": "8 872 500", "Consommation : (Légumes)": "5 478 650",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "20 363 100", "Taxes sur les excédents : (Légumes)": "203 631", "Nombre d’hectares de vigne": "59 150",
            "Production vin (hectolitres)": "887 250", "Consommation : (Vin)": "1 153 400", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-11 976 750",
            "Taxes sur les excédents : (Vin)": "-598 838", "Nombre d’hectares pour l’élevage": "5 915 000",
            "Recettes totales Pays": "78 581 917", "Dépenses totales": "68 935 899", "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "",
            "Coût maison du roi": "3 530 000", "Trésor": "9 646 017", "Dette": "0", "Excédent": "9 646 017", "Dette ou excédent en pourcentage des recettes": "12,28 %", "Charge de la dette": "0,0"
        }
    },
    "Lannes": {
        "nom": "Lannes",
        "RAW_DATA": {
            "Population": "7 510 000", "Population des conquêtes": "", "Population des colonies": "611 730", "Dont colons blancs": "97 230", "Indigènes": "514 500", "Esclaves": "0",
            "Total population métropolitaine": "7 410 000", "Superficie métropole (km²)": "655 000", "Densité de population": "11,31",
            "Recettes fiscales (en livres tournois)": "114 734 009", "Impôts directs": "35 516 884", "Impôt foncier": "22 060 385", "Impôt sur le mobilier": "3 816 150", "Patente": "9 640 349",
            "Impôts indirects": "79 217 124", "Gabelle": "1 852 500", "Aides/autres impôts indirects": "22 230 000", "Enregistrement/successions": "28 713 750", "Douanes": "21 480 874", "Lotteries": "4 940 000",
            "Revenu national brut": "2 322 145 800", "Revenu moyen par hab": "313,38", "Dépenses militaires": "72 114 357", "Soldes": "28 546 174", "Salaires soldats": "17 181 254", "Salaires officiers": "11 364 919",
            "Salaires annuels soldats réguliers": "173,25", "Salaires conscrits": "165,10", "Salaires annuels sous-officiers": "302,60", "Salaires lieutenants": "1 050,00", "Salaires capitaines": "1 750,00",
            "Salaires lieutenants-colonels": "3 300,00", "Salaires colonels": "5 250,00", "Salaires généraux de brigade": "12 500,00", "Salaires généraux de division": "20 000,00",
            "Coût administration de la Guerre": "37 950 027", "Entretien des places": "1 871 400", "Budget de construction de places": "1 190 000", "Besoin en rations quotidiennes": "20 240 827", "Coût achat uniforme": "1 014 464",
            "Domaine de l’État (fermes en H ou bois)": "2 183 333", "Revenus des domaines": "13 100 000", "Coût fonctionnement Etat": "11 397 416", "Nombre d'administrateurs totaux": "7 314",
            "Secrétaires et administrations des ministères": "1 888", "Secrétaires et administrations des provinces/départements": "513", "Percepteurs d’impôts/douaniers/etc": "1 521", "Juges/chancellerie/etc": "513",
            "Préfets / gouverneurs": "27", "Sous-préfets/etc": "81", "Parlementaires": "189", "Personnels parlement": "756", "Personnel des armées": "1 826",
            "Nombre de départements / provinces": "27", "Secrétaires d'Etat": "8", "Gouverneurs / intendants / préfets": "27", "Coût des ministres et gouverneurs / préfets / intendants": "430 000",
            "Nombre de bâtiments à construire": "3", "Construction kilomètres de routes": "204", "Construction de ponts": "2", "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 917 000", "Nombre de villes (+ 100 000)": "1", "Nombre de ville (100 000 – 20 000)": "8", "Nombre de villes (20 000- 5000)": "48",
            "Nombre de maires choisis par l’État": "57", "nombre de conseillers municipaux": "456", "Coûts fonctionnements villes": "359 100", "Revenus des villes": "177 584", "Coût éducation": "",
            "Nombre d’Universités": "9", "Nombre de lycées": "146", "Nombre d’écoles primaires": "897",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "52 929", "Années de service": "3", "Recrues « maximum » sur les années de service": "158 786", "Engagés réels": "72 842",
            "Nombre de soldats totaux": "72 842", "Pensionnaires, retraités ou demi-soldes": "6 402", "Entraînement par mois(manœuvres, tirs)": "18", "Coût": "2 556 756",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2", "Nombre de canons par compagnie": "8", "Nombre de canons de 6 livres": "4", "Nombre d’obusiers de 6 pouces": "2", "Nombre de canons de 8 livres": "2",
            "Nombre de compagnies d’artillerie à cheval": "4", "Nombre de canons par compagnie (Art. Cheval)": "6", "Nombre d’obusiers de 6 pouces (Art. Cheval)": "2", "Nombre de canons de 8 livres (Art. Cheval)": "4",
            "Nombre de compagnies d’artillerie totale": "14", "Nombre régiments artillerie": "2,6", "Nombre de canons de l’armée de campagne": "140",
            "Garde (Infanterie) régiment": "1,50", "Dont vélites": "0,50", "Grenadiers": "1,00", "Garde (Cavalerie)": "2,00", "dont chasseurs à cheval": "0,50", "Dragons": "0,50",
            "Grenadiers à cheval": "0,50", "Lanciers": "0,50", "Artillerie de la garde": "0,75", "Compagnies d’artilleries de la garde": "6,00", "Nombre de canons par compagnie : (Garde)": "8,00",
            "Nombre de canons de 8 livres (Garde)": "4,00", "Nombre de canons de 12 livres par compagnie": "4,00", "Nombre soldats Garde": "6 450", "Infanterie de la Garde": "3 600", "Cavalerie de la garde": "1 800",
            "Artillerie de la garde (canons)": "90", "Soldats dans une compagnie": "200,0", "Sous-officiers et caporaux dans une compagnie": "20,0", "Total": "220,0", "Soldats dans un bataillon": "800,0",
            "Sous-officiers et caporaux": "80,0", "Soldats dans un régiment (pied de paix)": "1 600,0", "Sous-officiers et caporaux : (Régiment Paix)": "320,0", "Soldats dans un régiment (pied de guerre)": "3 200,0",
            "Soldats dans une division": "4 800,0", "Sous-officiers et caporaux : (Division)": "960,0", "Division sur pied de guerre": "10 560,0", "Nombre de Régiments de ligne": "12,0",
            "Régiments de grenadiers": "4,0", "Régiments de génie": "2,0", "Régiments d’infanterie légère": "4,0", "Nombre de régiments": "20,0", "Nombre de bataillons": "80,0", "Nombre de divisions": "6,7",
            "Fantassins (dont sous-officiers)": "38 400", "Fantassins recrutés (conscription)": "8 821", "(Soldats manquants pour le pied de guerre )": "-16 779",
            "Cavaliers dans un escadron": "175,0", "Sous-officiers et caporaux dans un escadron": "25,0", "Cavaliers dans un régiment": "800,0", "Régiments de hussards": "5,0",
            "Régiments de chasseurs à cheval": "3,0", "Régiments de dragons": "6,0", "Régiments de cuirassiers": "2,0", "Nombre total de régiments": "16,0", "Régiments de cavalerie légère": "8,0",
            "Régiments de cavalerie polyvalente": "6,0", "Régiments de cavalerie lourde": "2,0", "Cavaliers dans une division de cavalerie": "3 200,0", "Nombre de divisions : (Cavalerie)": "4,0",
            "Cavaliers": "12 800,0", "Armée permanente et garnison": "64 021", "Conscription": "8 821", "Canons": "1 900", "Rappel : Dont canons de campagne": "112", "Infanterie": "47 221",
            "Proportion Cavalerie/infanterie": "27,11 %", "Artilleurs": "7 091", "Corps du génie (nombre de soldats)": "2 368", "Levée pour cette année (appelés de conscription)": "8 821",
            "Part sur les 1/140e": "16,67 %", "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "93 571", "Besoin militaire": "22 475", "Excédent ou déficit": "71 096",
            "Achat chevaux": "3 004 295", "Forteresses 1ère classe": "1", "Forteresses 2e classe": "3",
            "Forteresses 3e et 4e classe": "17", "Forteresses de 4e classe": "0", "Forts – Poste militaire": "24",
            "Construction de places de second rang": "1", "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "123", "Capacité de casernement": "32 150", "Soldats non logés (logement chez l’habitant)": "34 962", "Coût du logement": "1 922 934",
            "Construction de casernes": "24", "Coût (construction + entretien )": "907 500", "Artillerie des côtes": "54", "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "4 165", "Capitaines": "1 388", "Lieutenants-colonels, chef d’escadrons et majors": "563", "Colonels": "212", "Généraux de brigade": "97", "Généraux de division": "19",
            "Total officiers": "6 444", "Nombre d'écoles militaires (armée)": "2", "Nombre d'élèves": "148", "Milices/garde nationale": "92 625", "Proportion par rapport à la population": "1/80e",
            "Nombre de cohortes de Milices": "185", "Fusils disponibles": "25 000", "Milices coloniales": "9 723", "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "19", "Fusils disponibles (Milices Col.)": "2 000", "Divisions militaires": "9", "Pensions (familles, récompenses des généraux, etc)": "1 371", "Pensions": "4 249 635",
            "Maréchaussée/gendarmerie/police": "5 110", "Coût maréchaussée": "1 865 276", "Messagers/personnels des postes": "1 466", "Coût (Poste)": "696 350", "Budget naval": "29 393 643",
            "Personnel administratif de la marine": "857", "Nombre de marins": "4 534", "Nombre de troupes de marines dans les navires": "815", "Salaires des marins": "278,21",
            "Salaires et pensions pour des marins": "1 537 397", "Salaires des officiers : (Marine)": "914 200", "Nombre de marins dans la marine marchande": "14 236", "Pêcheurs": "4 513",
            "Navires de transport": "29", "Colons envoyés aux colonies": "3 837", "Coût colonisation": "1 262 013", "Population proche du littoral (-80km) et sur les fleuves": "3 761 000",
            "Réservoir de marins": "50 147", "Marins effectifs": "23 283", "Marins encore disponibles": "26 864", "Navires de ligne": "17", "80 canons": "2", "74 canons": "13", "64 canons": "2",
            "Navires de ligne actifs/armés": "5", "80 canons (Actifs)": "1", "74 canons (Actifs)": "3", "64 canons (Actifs)": "1",
            "Navires d’escortes": "43", "Frégates": "11", "Corvettes-Brig-Sloops-chébeqs": "14", "Sloops-Goelettes-shooners": "10", "Navires d’escortes actifs": "10", "Frégates (Actifs)": "3",
            "Corvettes- (Actifs)": "3", "Sloops-Goelettes-shooners (Actifs)": "4", "Enseignes de vaisseaux": "135", "Capitaine de frégate": "36", "Lieutenants de vaisseaux": "100",
            "Capitaines de vaisseaux": "34", "Contre-amiraux": "7", "Vice-amiraux": "3", "Ecoles navales": "1", "Elèves": "45", "Construction de vaisseaux": "3",
            "Constructions navales 80 canons": "1", "Constructions navales 74 canons": "2", "Construction de navires légers": "5", "Constructions navales (frégates)": "1",
            "Constructions navales Bricks-Corvettes": "2", "Constructions navales (Sloops-Goëlettes-Shooners)": "2", "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "2", "Bâtiments de la Marine": "10", "Nombre de grands arsenaux maritimes": "1", "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "1", "Nombre d’ouvriers": "3 150", "Coût construction navires": "6 940 000", "Entretien et approvisionnement des navires": "1 185 154",
            "Entretien et approvisionnement des arsenaux": "830 600", "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "2 250 000", "Travaux dans les colonies": "1 460 000",
            "Forts dans les colonies": "4", "Constructions forts colonies": "2", "Navires de pêche": "752", "Navires marchands totaux": "878", "Cabotage (5 à 50 tonneaux)": "344",
            "Grand cabotage (50-100 tonneaux)": "302", "Commerce de haute mer (100-250 tonneaux)": "131", "Grand commerce (+ 250 tonneaux)": "101", "production navires marchands": "40",
            "Cabotage (5 à 50 tonneaux) (Prod)": "19", "Grand cabotage (50-100 tonneaux) (Prod)": "8", "Commerce de haute mer (100-200 tonneaux)": "6", "Grand commerce (+ 200 tonneaux)": "7",
            "Sucre (en Kg)": "2 801 200", "Café (Kg)": "841 000", "Epices (en Kg)": "901 001", "Fourrures (en pièces)": "9 834", "Tabac (en kg)": "581 600", "Coton (en kg)": "63 410",
            "Indigo (en kg)": "37 800", "Thé (en Kg)": "5 012 530", "Commerce estimé en livres tournois": "75 387 493", "Taxes": "7 538 749", "Droits de mouillage": "13 942 125",
            "Manufactures (textiles verreries imprimeries etc)": "37", "Production de fer (T)": "27 340", "Production de Fonte (T)": "1 810", "Production de cuivre (quintaux)": "43 500",
            "Production d'argent (Kg)": "34 780", "Production fusils": "104 000", "Production de canons": "320", "Production de canons navals": "250", "Production de poudre (T)": "80 000",
            "Industrie production en valeur": "80 483 000", "Taxe industrie": "9 640 349", "Nombre de manufactures d’armes ou arsenaux": "8", "Ouvriers": "856",
            "Reste après besoin en fusils (dans l’armée et marine)": "11 009", "Fusils (dans l'armée ou en réserve)": "11 009", "Besoin de canons navals": "342", "Réserve de canons navals": "0",
            "Superficie du territoire en forêt": "29,71 %", "Production bois (Mcube)": "9 024 140", "Consommation de bois": "7 482 000", "Si excédent, vente ou achat si quantité insuffisante": "15 421 400",
            "Taxes sur les excédents": "1 542 140", "Nombre d’hectares de blé": "3 995 500", "production blé par an (en quintaux)": "27 968 500", "Consommation": "17 605 750",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "144 191 250", "Taxes sur les excédents : (Blé)": "1 802 391",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 310 000", "Production légumes:etc": "8 056 500", "Consommation : (Légumes)": "7 039 500",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "6 102 000", "Taxes sur les excédents : (Légumes)": "122 040", "Nombre d’hectares de vigne": "352 063",
            "Production vin (hectolitres)": "8 361 484", "Consommation : (Vin)": "7 039 500", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "54 314 297",
            "Taxes sur les excédents : (Vin)": "814 714", "Nombre d’hectares pour l’élevage": "4 585 000",
            "Recettes totales Pays": "132 115 294", "Dépenses totales": "125 002 716", "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "",
            "Coût maison du roi": "4 734 000", "Trésor": "9 112 578", "Dette": "0", "Excédent": "7 112 578", "Dette ou excédent en pourcentage des recettes": "5,38 %", "Charge de la dette": "0,0"
        }
    },
    "Davout": {
        "nom": "Davout",
        "RAW_DATA": {
            "Population": "8 357 000", "Population des conquêtes": "", "Population des colonies": "33 980", "Dont colons blancs": "4 040", "Indigènes": "29 100", "Esclaves": "840",
            "Total population métropolitaine": "8 357 000", "Superficie métropole (km²)": "472 000", "Densité de population": "17,71",
            "Recettes fiscales (en livres tournois)": "140 667 193", "Impôts directs": "48 939 374", "Impôt foncier": "36 204 906", "Impôt sur le mobilier": "4 751 372", "Patente": "7 983 095",
            "Impôts indirects": "91 727 819", "Gabelle": "18 803 250", "Aides/autres impôts indirects": "25 071 000", "Enregistrement/successions": "24 026 375", "Douanes": "17 559 444", "Lotteries": "6 267 750",
            "Revenu national brut": "2 681 844 870", "Revenu moyen par hab": "320,91", "Dépenses militaires": "84 283 483", "Soldes": "31 483 797", "Salaires soldats": "19 734 855", "Salaires officiers": "11 748 942",
            "Salaires annuels soldats réguliers": "169,25", "Salaires conscrits": "164,35", "Salaires annuels sous-officiers": "290,05", "Salaires lieutenants": "1 050,00", "Salaires capitaines": "1 725,00",
            "Salaires lieutenants-colonels": "3 300,00", "Salaires colonels": "5 300,00", "Salaires généraux de brigade": "12 500,00", "Salaires généraux de division": "20 000,00",
            "Coût administration de la Guerre": "46 242 536", "Entretien des places": "3 627 600", "Budget de construction de places": "26 250", "Besoin en rations quotidiennes": "27 816 833", "Coût achat uniforme": "1 372 936",
            "Domaine de l’État (fermes en H ou bois)": "1 180 000", "Revenus des domaines": "9 440 000", "Coût fonctionnement Etat": "10 505 769", "Nombre d'administrateurs totaux": "8 063",
            "Secrétaires et administrations des ministères": "1 652", "Secrétaires et administrations des provinces/départements": "713", "Percepteurs d’impôts/douaniers/etc": "1 674", "Juges/chancellerie/etc": "589",
            "Préfets / gouverneurs": "31", "Sous-préfets/etc": "93", "Parlementaires": "248", "Personnels parlement": "992", "Personnel des armées": "2 071",
            "Nombre de départements / provinces": "31", "Secrétaires d'Etat": "7", "Gouverneurs / intendants / préfets": "31", "Coût des ministres et gouverneurs / préfets / intendants": "450 000",
            "Nombre de bâtiments à construire": "4", "Construction kilomètres de routes": "103", "Construction de ponts": "2", "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 194 000", "Nombre de villes (+ 100 000)": "1", "Nombre de ville (100 000 – 20 000)": "4", "Nombre de villes (20 000- 5000)": "68",
            "Nombre de maires choisis par l’État": "73", "nombre de conseillers municipaux": "584", "Coûts fonctionnements villes": "459 900", "Revenus des villes": "244 697", "Coût éducation": "",
            "Nombre d’Universités": "5", "Nombre de lycées": "167", "Nombre d’écoles primaires": "1 051",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "59 693", "Années de service": "5", "Recrues « maximum » sur les années de service": "298 464", "Engagés réels": "104 061",
            "Nombre de soldats totaux": "104 061", "Pensionnaires, retraités ou demi-soldes": "9 212", "Entraînement par mois(manœuvres, tirs)": "18", "Coût": "2 903 300",
            "Nombre de compagnies d’artillerie par division d’infanterie": "3", "Nombre de canons par compagnie": "8", "Nombre de canons de 6 livres": "4", "Nombre d’obusiers de 6 pouces": "2", "Nombre de canons de 8 livres": "2",
            "Nombre de compagnies d’artillerie à cheval": "5", "Nombre de canons par compagnie (Art. Cheval)": "6", "Nombre d’obusiers de 6 pouces (Art. Cheval)": "2", "Nombre de canons de 8 livres (Art. Cheval)": "4",
            "Nombre de compagnies d’artillerie totale": "22", "Nombre régiments artillerie": "4,4", "Nombre de canons de l’armée de campagne": "203",
            "Garde (Infanterie) régiment": "2,50", "Dont vélites": "0,50", "Grenadiers": "1,50", "Tirailleurs-grenadiers": "0,50", "Garde (Cavalerie)": "4,00", "dont chasseurs à cheval": "1,00", "Dragons": "1,50",
            "Grenadiers à cheval": "0,50", "Lanciers": "1,00", "Artillerie de la garde": "0,75", "Compagnies d’artilleries de la garde": "6,00", "Nombre de canons par compagnie : (Garde)": "8,00",
            "Nombre de canons de 8 livres (Garde)": "4,00", "Nombre de canons de 12 livres par compagnie": "4,00", "Nombre soldats Garde": "10 650", "Infanterie de la Garde": "6 000", "Cavalerie de la garde": "3 600",
            "Artillerie de la garde (canons)": "90", "Soldats dans une compagnie": "185,0", "Sous-officiers et caporaux dans une compagnie": "22,0", "Total": "207,0", "Soldats dans un bataillon": "740,0",
            "Sous-officiers et caporaux": "88,0", "Soldats dans un régiment (pied de paix)": "2 220,0", "Sous-officiers et caporaux : (Régiment Paix)": "352,0", "Soldats dans un régiment (pied de guerre)": "2 960,0",
            "Soldats dans une division": "6 660,0", "Sous-officiers et caporaux : (Division)": "1 056,0", "Division sur pied de guerre": "9 936,0", "Nombre de Régiments de ligne": "15,0",
            "Régiments de grenadiers": "4,0", "Régiments de génie": "0,5", "Régiments d’infanterie légère": "4,0", "Nombre de régiments": "23,0", "Nombre de bataillons": "92,0", "Nombre de divisions": "7,7",
            "Fantassins (dont sous-officiers)": "59 156", "Fantassins recrutés (conscription)": "11 939", "(Soldats manquants pour le pied de guerre )": "3 015",
            "Cavaliers dans un escadron": "190,0", "Sous-officiers et caporaux dans un escadron": "30,0", "Cavaliers dans un régiment": "880,0", "Régiments de hussards": "6,0",
            "Régiments de chasseurs à cheval": "6,0", "Régiments de dragons": "6,0", "Régiments de cuirassiers": "1,0", "Nombre total de régiments": "19,0", "Régiments de cavalerie légère": "12,0",
            "Régiments de cavalerie polyvalente": "6,0", "Régiments de cavalerie lourde": "1,0", "Cavaliers dans une division de cavalerie": "3 520,0", "Nombre de divisions : (Cavalerie)": "4,8",
            "Cavaliers": "16 720,0", "Armée permanente et garnison": "92 122", "Conscription": "11 939", "Canons": "2 880", "Rappel : Dont canons de campagne": "176", "Infanterie": "71 095",
            "Proportion Cavalerie/infanterie": "23,52 %", "Artilleurs": "10 309", "Corps du génie (nombre de soldats)": "592", "Levée pour cette année (appelés de conscription)": "11 939",
            "Part sur les 1/140e": "20,00 %", "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "94 400", "Besoin militaire": "27 511", "Excédent ou déficit": "66 889",
            "Achat chevaux": "5 690 987", "Forteresses": "25", "Forteresses 1ère classe": "1",
            "Forteresses 2e classe": "4", "Forteresses 3e et 4e classe": "20",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "10", "Forts – Poste militaire": "46",
            "Nombre de casernes (1 caserne = 250 logements)": "172", "Capacité de casernement": "45 350", "Soldats non logés (logement chez l’habitant)": "52 774", "Coût du logement": "2 902 546",
            "Construction de casernes": "0", "Coût (construction + entretien )": "430 000", "Artillerie des côtes": "46", "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "4 208", "Capitaines": "1 403", "Lieutenants-colonels, chef d’escadrons et majors": "584", "Colonels": "228", "Généraux de brigade": "103", "Généraux de division": "24",
            "Total officiers": "6 549", "Nombre d'écoles militaires (armée)": "2", "Nombre d'élèves": "130", "Milices/garde nationale": "83 570", "Proportion par rapport à la population": "1/100",
            "Nombre de cohortes de Milices": "167", "Fusils disponibles": "35 000", "Milices coloniales": "404", "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "1", "Fusils disponibles (Milices Col.)": "400", "Divisions militaires": "9", "Pensions (familles, récompenses des généraux, etc)": "1 254", "Pensions": "3 133 875",
            "Maréchaussée/gendarmerie/police": "4 398", "Coût maréchaussée": "2 221 203", "Messagers/personnels des postes": "1 620", "Coût (Poste)": "769 421", "Budget naval": "34 313 994",
            "Personnel administratif de la marine": "682", "Nombre de marins": "3 452", "Nombre de troupes de marines dans les navires": "590", "Salaires des marins": "234,55",
            "Salaires et pensions pour des marins": "1 020 523", "Salaires des officiers : (Marine)": "710 600", "Nombre de marins dans la marine marchande": "9 765", "Pêcheurs": "4 111",
            "Navires de transport": "18", "Colons envoyés aux colonies": "2 751", "Coût colonisation": "807 795", "Population proche du littoral (-80km) et sur les fleuves": "3 425 800",
            "Réservoir de marins": "45 677", "Marins effectifs": "17 328", "Marins encore disponibles": "28 349", "Navires de ligne": "13", "74 canons": "8", "64 canons": "5",
            "Navires de ligne actifs/armés": "4", "74 canons (Actifs)": "2", "64 canons (Actifs)": "2",
            "Navires d’escortes": "36", "Frégates": "10", "Corvettes-Brig-Sloops-chébeqs": "16", "Sloops-Goelettes-shooners": "10", "Navires d’escortes actifs": "11", "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "3", "Sloops-Goelettes-shooners (Actifs)": "6", "Enseignes de vaisseaux": "108", "Capitaine de frégate": "29", "Lieutenants de vaisseaux": "77",
            "Capitaines de vaisseaux": "26", "Contre-amiraux": "5", "Vice-amiraux": "3", "Ecoles navales": "1", "Elèves": "40", "Construction de vaisseaux": "5",
            "Constructions navales 80 canons": "1", "Constructions navales 74 canons": "2", "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "8", "Constructions navales (frégates)": "2", "Constructions navales Bricks-Corvettes": "4", "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "1", "Frégates ou navires d’escorte en radoub": "2", "Bâtiments de la Marine": "8", "Nombre de grands arsenaux maritimes": "1", "Petits arsenaux": "1",
            "Cales de radoubs (pour vaisseaux)": "2", "Nombre d’ouvriers": "3 950", "Coût construction navires": "8 240 000", "Entretien et approvisionnement des navires": "1 054 154",
            "Entretien et approvisionnement des arsenaux": "721 700", "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "4 654 000", "Travaux dans les colonies": "1 656 000",
            "Forts dans les colonies": "1", "Constructions forts colonies": "0", "Navires de pêche": "685", "Navires marchands totaux": "870", "Cabotage (5 à 50 tonneaux)": "295",
            "Grand cabotage (50-100 tonneaux)": "450", "Commerce de haute mer (100-250 tonneaux)": "101", "Grand commerce (+ 250 tonneaux)": "24", "production navires marchands": "41",
            "Cabotage (5 à 50 tonneaux) (Prod)": "20", "Grand cabotage (50-100 tonneaux) (Prod)": "4", "Commerce de haute mer (100-200 tonneaux)": "6", "Grand commerce (+ 200 tonneaux)": "11",
            "Sucre (en Kg)": "679 000", "Café (Kg)": "368 540", "Epices (en Kg)": "178 000", "Fourrures (en pièces)": "0", "Tabac (en kg)": "267 450", "Coton (en kg)": "0",
            "Indigo (en kg)": "0", "Thé (en Kg)": "88 643", "Commerce estimé en livres tournois": "53 114 440", "Taxes": "5 311 444", "Droits de mouillage": "12 248 000",
            "Manufactures (textiles verreries imprimeries etc)": "55", "Production de fer (T)": "11 700", "Production de Fonte (T)": "1 310", "Production de cuivre (quintaux)": "20 870",
            "Production d'argent (Kg)": "25 400", "Production fusils": "70 000", "Production de canons": "280", "Production de canons navals": "219", "Production de poudre (T)": "70 000",
            "Industrie production en valeur": "48 450 500", "Taxe industrie": "7 983 095", "Nombre de manufactures d’armes ou arsenaux": "7", "Ouvriers": "588",
            "Reste après besoin en fusils (dans l’armée et marine)": "-2 451", "Fusils (dans l'armée ou en réserve)": "-2 451", "Besoin de canons navals": "556", "Réserve de canons navals": "-337",
            "Superficie du territoire en forêt": "30,18 %", "Production bois (Mcube)": "10 482 670", "Consommation de bois": "8 453 750", "Si excédent, vente ou achat si quantité insuffisante": "20 289 200",
            "Taxes sur les excédents": "2 028 920", "Nombre d’hectares de blé": "2 832 000", "production blé par an (en quintaux)": "19 824 000", "Consommation": "18 268 850",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "12 077 250", "Taxes sur les excédents : (Blé)": "211 352",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 416 000", "Production légumes:etc": "10 620 000", "Consommation : (Légumes)": "7 939 150",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "16 085 100", "Taxes sur les excédents : (Légumes)": "321 702", "Nombre d’hectares de vigne": "479 080",
            "Production vin (hectolitres)": "11 737 460", "Consommation : (Vin)": "7 939 150", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "165 748 950",
            "Taxes sur les excédents : (Vin)": "2 486 234", "Nombre d’hectares pour l’élevage": "3 304 000",
            "Recettes totales Pays": "155 155 401", "Dépenses totales": "140 969 446", "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "",
            "Coût maison du roi": "4 970 000", "Trésor": "8 185 955", "Dette": "0", "Excédent": "14 185 955", "Dette ou excédent en pourcentage des recettes": "9,14 %", "Charge de la dette": "0,0"
        }
    },
        "Philippe II d'Esp": {
        "nom": "Philippe II d'Esp",
        "RAW_DATA": {
            "Population": "12 658 000", "Population des colonies": "3 854 620", "Dont colons blancs": "375 020", "Indigènes": "2 904 600", "Esclaves": "575 000",
            "Total population métropolitaine": "12 658 000", "Superficie métropole (km²)": "610 000", "Densité de population": "20,75",
            "Recettes fiscales (en livres tournois)": "69 988 115", "Impôts directs": "30 114 439", "Impôt foncier": "15 112 695", "Impôt sur le mobilier": "1 961 990", "Patente": "13 039 754",
            "Impôts indirects": "39 873 676", "Gabelle": "1 898 700", "Aides/autres impôts indirects": "8 227 700", "Enregistrement/successions": "6 281 800", "Douanes": "18 824 209", "Lotteries": "4 641 267",
            "Revenu national brut": "2 462 613 900", "Revenu moyen par hab": "194,55", "Dépenses militaires": "33 457 150", "Soldes": "12 556 490", "Salaires soldats": "6 012 786", "Salaires officiers": "6 543 704",
            "Salaires annuels soldats réguliers": "91,45", "Salaires conscrits": "84,35", "Salaires annuels sous-officiers": "160,85", "Salaires lieutenants": "750,00", "Salaires capitaines": "1 000,00",
            "Salaires lieutenants-colonels": "2 000,00", "Salaires colonels": "3 200,00", "Salaires généraux de brigade": "7 250,00", "Salaires généraux de division": "13 000,00",
            "Coût administration de la Guerre": "15 900 821", "Entretien des places": "3 885 000", "Budget de construction de places": "368 750", "Besoin en rations quotidiennes": "6 617 591", "Coût achat uniforme": "1 732 940",
            "Domaine de l’État (fermes en H ou bois)": "1 525 000", "Revenus des domaines": "9 302 500", "Coût fonctionnement Etat": "6 602 276", "Nombre d'administrateurs totaux": "5 894",
            "Secrétaires et administrations des ministères": "1 048", "Secrétaires et administrations des provinces/départements": "342", "Percepteurs d’impôts/douaniers/etc": "1 218", "Juges/chancellerie/etc": "342",
            "Préfets / gouverneurs": "18", "Sous-préfets/etc": "54", "Parlementaires": "72", "Personnels parlement": "720", "Personnel des armées": "2 080",
            "Nombre de départements / provinces": "18", "Secrétaires d'Etat": "8", "Gouverneurs / intendants / préfets": "18", "Coût des ministres et gouverneurs / préfets / intendants": "340 000",
            "Nombre de bâtiments à construire": "3", "Construction kilomètres de routes": "57", "Construction de ponts": "0", "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "711 000", "Nombre de villes (+ 100 000)": "1", "Nombre de ville (100 000 – 20 000)": "6", "Nombre de villes (20 000- 5000)": "40",
            "Nombre de maires choisis par l’État": "47", "nombre de conseillers municipaux": "376", "Coûts fonctionnements villes": "296 100", "Revenus des villes": "150 572",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "90 414", "Années de service": "3", "Recrues « maximum » sur les années de service": "271 243", "Engagés réels": "68 764",
            "Nombre de soldats totaux": "68 764", "Pensionnaires, retraités ou demi-soldes": "5 369", "Entraînement par mois(manœuvres, tirs)": "7", "Coût": "746 089",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2", "Nombre de canons par compagnie": "6", "Nombre de canons de 4 livres": "4", "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "0", "Nombre de compagnies d’artillerie totale": "11", "Nombre régiments artillerie": "2,9", "Nombre de canons de l’armée de campagne": "65",
            "Garde (Infanterie) régiment": "3,00", "Dont vélites": "2,00", "Grenadiers": "0,50", "Tirailleurs-grenadiers": "0,50", "Garde (Cavalerie)": "3,50", "dont chasseurs à cheval": "2,00", "Dragons": "0,50", "Lanciers": "1,00",
            "Artillerie de la garde": "0,25", "Compagnies d’artilleries de la garde": "2,00", "Nombre de canons par compagnie (Garde)": "4,00", "Nombre de canons de 8 livres (Garde)": "4,00",
            "Nombre soldats Garde": "10 700", "Infanterie de la Garde": "7 200", "Cavalerie de la garde": "3 150", "Artillerie de la garde (canons)": "30",
            "Soldats dans une compagnie": "100,0", "Sous-officiers et caporaux dans une compagnie": "5,0", "Total": "105,0", "Soldats dans un bataillon": "500,0", "Sous-officiers et caporaux": "20,0",
            "Soldats dans un régiment (pied de paix)": "1 000,0", "Sous-officiers et caporaux (Régiment Paix)": "80,0", "Soldats dans un régiment (pied de guerre)": "1 500,0",
            "Soldats dans une division": "3 000,0", "Sous-officiers et caporaux (Division)": "240,0", "Division sur pied de guerre": "4 740,0",
            "Nombre de Régiments de ligne": "18,0", "Régiments de grenadiers": "2,0", "Régiments de génie": "0,5", "Régiments d’infanterie légère": "1,0", "Nombre de régiments": "21,0", "Nombre de bataillons": "63,0",
            "Fantassins (dont sous-officiers)": "22 680", "Fantassins recrutés (conscription)": "15 069", "(Soldats manquants pour le pied de guerre )": "6 249",
            "Cavaliers dans un escadron": "130,0", "Sous-officiers et caporaux dans un escadron": "10,0", "Cavaliers dans un régiment": "560,0",
            "Régiments de hussards": "6,0", "Régiments de Uhlans/chevau-légers": "10,0", "Régiments de dragons": "4,0", "Régiments de cuirassiers": "2,0",
            "Nombre total de régiments": "22,0", "Cavaliers": "12 320,0",
            "Armée permanente et garnison": "53 695", "Conscription": "15 069", "Canons": "3 405", "Rappel Dont canons de campagne": "63",
            "Infanterie": "37 749", "Proportion Cavalerie/infanterie": "32,64 %", "Artilleurs": "10 133", "Corps du génie (nombre de soldats)": "592",
            "Levée pour cette année (appelés de conscription)": "15 069", "Part sur les 1/140e": "16,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "122 000", "Besoin militaire": "20 010", "Excédent ou déficit": "101 990", "Achat chevaux": "-1 194 575",
            "Forteresses": "37", "Forteresses 1ère classe": "1", "Forteresses 2e classe": "5", "Forteresses 3e et 4e classe": "31", "Forteresses de 4e classe": "23", "Forts – Poste militaire": "20",
            "Construction de places de troisième rang": "2", "Construction de places de quatrième rang": "2",
            "Nombre de casernes (1 caserne = 250 logements)": "97", "Capacité de casernement": "27 100", "Soldats non logés (logement chez l’habitant)": "33 102", "Coût du logement": "1 820 585",
            "Construction de casernes": "8", "Coût (construction + entretien )": "442 500",
            "Artillerie des côtes": "25", "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "2 770", "Capitaines": "1 385", "Lieutenants-colonels, chef d’escadrons et majors": "565", "Colonels": "222", "Généraux de brigade": "72", "Généraux de division": "55", "Total officiers": "5 068",
            "Nombre d'écoles militaires (armée)": "2", "Nombre d'élèves": "94",
            "Milices/garde nationale": "63 290", "Proportion par rapport à la population": "1/200", "Nombre de cohortes de Milices": "127", "Fusils disponibles": "12 000",
            "Milices coloniales": "37 502", "Proportion par rapport aux colons blancs": "1/10e", "Nombre de bataillons de miliciens": "75", "Fusils disponibles (Milices Col.)": "15 000",
            "Divisions militaires": "10", "Pensions (familles, récompenses des généraux, etc)": "1 266", "Pensions": "3 164 500",
            "Maréchaussée/gendarmerie/police": "6 329", "Coût maréchaussée": "1 329 090", "Messagers/personnels des postes": "2 332", "Coût (Poste)": "641 208",
            "Budget naval": "23 721 104", "Personnel administratif de la marine": "438", "Nombre de marins": "3 471", "Nombre de troupes de marines dans les navires": "490", "Salaires des marins": "131,75",
            "Salaires et pensions pour des marins": "880 142", "Salaires des officiers (Marine)": "1 344 650", "Nombre de marins dans la marine marchande": "16 145", "Pêcheurs": "3 035",
            "Navires de transport": "38", "Colons envoyés aux colonies": "4 342", "Coût colonisation": "1 509 130",
            "Population proche du littoral (-80km) et sur les fleuves": "3 034 800", "Réservoir de marins": "40 464", "Marins effectifs": "22 651", "Marins encore disponibles": "17 813",
            "Navires de ligne": "34", "+ de 80 canons": "2", "80 canons": "2", "74 canons": "8", "64 canons": "16", "50 canons": "5",
            "Navires de ligne actifs/armés": "5", "74 canons (Actifs)": "2", "64 canons (Actifs)": "3",
            "Navires d’escortes": "38", "Frégates": "10", "Corvettes-Brig-Sloops-chébeqs": "6", "Sloops-Goelettes-shooners": "4",
            "Navires d’escortes actifs": "8", "Frégates (Actifs)": "2", "Corvettes- (Actifs)": "3", "Sloops-Goelettes-shooners (Actifs)": "3",
            "Enseignes de vaisseaux": "165", "Capitaine de frégate": "46", "Lieutenants de vaisseaux": "130", "Capitaines de vaisseaux": "63", "Contre-amiraux": "13", "Vice-amiraux": "6",
            "Ecoles navales": "1", "Elèves": "55",
            "Construction de vaisseaux": "3", "Constructions navales 74 canons": "1", "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "6", "Constructions navales (frégates)": "2", "Constructions navales Bricks-Corvettes": "1", "Constructions navales (Sloops-Goëlettes-Shooners)": "3",
            "Navires de ligne en radoub": "0", "Frégates ou navires d’escorte en radoub": "2",
            "Bâtiments de la Marine": "16", "Nombre de grands arsenaux maritimes": "2", "Petits arsenaux": "2", "Cales de radoubs (pour vaisseaux)": "2", "Nombre d’ouvriers": "7 900",
            "Coût construction navires": "3 685 000", "Entretien et approvisionnement des navires": "1 055 533", "Entretien et approvisionnement des arsenaux": "945 400",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "610 000", "Travaux dans les colonies": "875 000", "Forts dans les colonies": "37", "Constructions forts colonies": "2",
            "Navires de pêche": "506", "Navires marchands totaux": "950", "Cabotage (5 à 50 tonneaux)": "475", "Grand cabotage (50-100 tonneaux)": "154", "Commerce de haute mer (100-250 tonneaux)": "204", "Grand commerce (+ 250 tonneaux)": "117",
            "production navires marchands": "28", "Cabotage (5 à 50 tonneaux) (Prod)": "8", "Grand cabotage (50-100 tonneaux) (Prod)": "6", "Commerce de haute mer (100-200 tonneaux)": "10", "Grand commerce (+ 200 tonneaux)": "4",
            "Sucre (en Kg)": "11 125 000", "Café (Kg)": "5 450 000", "Epices (en Kg)": "285 000", "Fourrures (en pièces)": "5 450", "Tabac (en kg)": "7 121 000", "Coton (en kg)": "645 800", "Indigo (en kg)": "24 800", "Thé (en Kg)": "587 000",
            "Commerce estimé en livres tournois": "99 530 510", "Taxes": "8 294 209", "Droits de mouillage": "10 530 000",
            "Manufactures (textiles verreries imprimeries etc)": "14", "Production de fer (T)": "10 718", "Production de cuivre (quintaux)": "14 670", "Production d'argent (Kg)": "405 850",
            "Production fusils": "52 500", "Production de canons": "200", "Production de canons navals": "94", "Production de poudre (T)": "50 000",
            "Industrie production en valeur": "32 535 600", "Taxe industrie": "13 039 754",
            "Nombre de manufactures d’armes ou arsenaux": "5", "Ouvriers": "535", "Reste après besoin en fusils (dans l’armée et marine)": "-51 430", "Fusils (dans l'armée ou en réserve)": "-51 430", "Besoin de canons navals": "344", "Réserve de canons navals": "-250",
            "Superficie du territoire en forêt": "23,52 %", "Production bois (Mcube)": "12 001 000", "Consommation de bois": "12 726 000", "Si excédent, vente ou achat si quantité insuffisante": "-7 250 000", "Taxes sur les excédents": "-725 000",
            "Nombre d’hectares de blé": "4 026 000", "production blé par an (en quintaux)": "25 363 800", "Consommation": "27 046 800", "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-27 769 500", "Taxes sur les excédents (Blé)": "-416 543",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 525 000", "Production légumes:etc": "11 437 500", "Consommation (Légumes)": "12 025 100", "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-3 525 600", "Taxes sur les excédents (Légumes)": "-70 512",
            "Nombre d’hectares de vigne": "402 600", "Production vin (hectolitres)": "13 688 400", "Consommation (Vin)": "12 025 100", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "69 673 500", "Taxes sur les excédents (Vin)": "1 045 103",
            "Nombre d’hectares pour l’élevage": "4 270 000",
            "Recettes totales Pays": "80 335 718", "Dépenses totales": "76 716 871", "Coût maison du roi": "7 045 000",
            "Trésor": "12 618 846", "Dette": "0", "Excédent": "3 618 846", "Dette ou excédent en pourcentage des recettes": "4,50 %", "Charge de la dette": "0,0"
        }
    }, 

        "Maurice de Saxe": {
        "nom": "Maurice de Saxe",
        "RAW_DATA": {
            "Population": "9 821 000",
            "Population des colonies": "15 495",
            "Dont colons blancs": "4 090",
            "Indigènes": "11 405",
            "Esclaves": "0",
            "Total population métropolitaine": "9 821 000",
            "Superficie métropole (km²)": "374 700",
            "Densité de population": "26.21",
            "Recettes fiscales (en livres tournois)": "83 203 404",
            "Impôts directs": "31 893 103",
            "Impôt foncier": "25 735 595",
            "Impôt sur le mobilier": "2 995 405",
            "Patente": "3 162 103",
            "Impôts indirects": "51 310 301",
            "Gabelle": "4 910 500",
            "Aides/autres impôts indirects": "19 642 000",
            "Enregistrement/successions": "22 477 814",
            "Douanes": "2 233 945",
            "Lotteries": "2 046 042",
            "Revenu national brut": "2 057 990 550",
            "Revenu moyen par hab": "209,55",
            "Dépenses militaires": "74 157 451",
            "Soldes": "26 294 404",
            "Salaires soldats": "14 764 023",
            "Salaires officiers": "11 530 382",
            "Salaires annuels soldats réguliers": "135,85",
            "Salaires conscrits": "130,05",
            "Salaires annuels sous-officiers": "220,55",
            "Salaires lieutenants": "800,00",
            "Salaires capitaines": "1 475,00",
            "Salaires lieutenants-colonels": "2 750,00",
            "Salaires colonels": "4 250,00",
            "Salaires généraux de brigade": "9 250,00",
            "Salaires généraux de division": "18 500,00",
            "Coût administration de la Guerre": "40 629 208",
            "Entretien des places": "2 320 200",
            "Budget de construction de places": "1 173 750",
            "Besoin en rations quotidiennes": "23 651 252",
            "Coût achat uniforme": "2 016 813",
            "Domaine de l’État (fermes en H ou bois)": "1 182 333",
            "Revenus des domaines": "12 414 500",
            "Coût fonctionnement Etat": "5 494 058",
            "Nombre d'administrateurs totaux": "5 132",
            "Secrétaires et administrations des ministères": "2 772",
            "Secrétaires et administrations des provinces/départements": "322",
            "Percepteurs d’impôts/douaniers/etc": "616",
            "Juges/chancellerie/etc": "266",
            "Préfets / gouverneurs": "14",
            "Sous-préfets/etc": "0",
            "Parlementaires": "56",
            "Personnels parlement": "168",
            "Personnel des armées": "918",
            "Nombre de départements / provinces": "14",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "14",
            "Coût des ministres et gouverneurs / préfets / intendants": "280 000",
            "Nombre de bâtiments à construire": "1",
            "Construction kilomètres de routes": "125",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 130 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "1",
            "Nombre de villes (20 000- 5000)": "12",
            "Nombre de maires choisis par l’État": "14",
            "nombre de conseillers municipaux": "112",
            "Coûts fonctionnements villes": "88 200",
            "Revenus des villes": "159 466",
            "Nombre d’Universités": "2",
            "Nombre de lycées": "25",
            "Nombre d’écoles primaires": "240",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "70 150",
            "Années de service": "4",
            "Recrues « maximum » sur les années de service": "280 600",
            "Engagés réels": "83 109",
            "Nombre de soldats totaux": "83 109",
            "Pensionnaires, retraités ou demi-soldes": "6 557",
            "Entraînement par mois(manœuvres, tirs)": "20",
            "Coût": "3 739 888",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "8",
            "Nombre de canons de 4 livres": "4",
            "Nombre de canons de 6 livres": "2",
            "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "0",
            "Nombre de canons par compagnie (Art. Cheval)": "6",
            "Nombre de canons de 4 livres (Art. Cheval)": "2",
            "Nombre de canons de 6 livres (Art. Cheval)": "2",
            "Nombre d’obusiers de 6 pouces (Art. Cheval)": "2",
            "Nombre de compagnies d’artillerie totale": "50",
            "Nombre régiments artillerie": "7,1",
            "Nombre de canons de l’armée de campagne": "400",
            "Garde (Infanterie) régiment": "2,00",
            "Dont vélites": "1,00",
            "Grenadiers": "0,50",
            "Tirailleurs-grenadiers": "0,50",
            "Garde (Cavalerie)": "1,50",
            "dont chasseurs à cheval": "1,00",
            "Dragons": "0,50",
            "Artillerie de la garde": "0,25",
            "Compagnies d’artilleries de la garde": "2,00",
            "Nombre de canons par compagnie (Garde)": "0,00",
            "Nombre soldats Garde": "6 500",
            "Infanterie de la Garde": "4 800",
            "Cavalerie de la garde": "1 350",
            "Artillerie de la garde (canons)": "30",
            "Soldats dans une compagnie": "15,0",
            "Sous-officiers et caporaux dans une compagnie": "2,0",
            "Total": "17,0",
            "Soldats dans un bataillon": "150,0",
            "Sous-officiers et caporaux": "20,0",
            "Soldats dans un régiment (pied de paix)": "290,0",
            "Sous-officiers et caporaux (Régiment Paix)": "80,0",
            "Soldats dans un régiment (pied de guerre)": "815,0",
            "Soldats dans une division": "1 160,0",
            "Sous-officiers et caporaux (Division)": "320,0",
            "Division sur pied de guerre": "3 260,0",
            "Nombre de Régiments de ligne": "80,0",
            "Régiments de génie": "1,5",
            "Régiments d’infanterie légère": "20,0",
            "Nombre de régiments": "100,0",
            "Nombre de bataillons": "400,0",
            "Nombre de divisions": "25,0",
            "Fantassins (dont sous-officiers)": "37 000",
            "Fantassins recrutés (conscription)": "17 538",
            "(Soldats manquants pour le pied de guerre )": "-26 963",
            "Cavaliers dans un escadron": "100,0",
            "Sous-officiers et caporaux dans un escadron": "24,0",
            "Cavaliers dans un régiment": "496,0",
            "Régiments de Uhlans/chevau-légers": "12,0",
            "Régiments de chasseurs à cheval": "8,0",
            "Régiments de dragons": "6,0",
            "Régiments de cuirassiers": "2,0",
            "Nombre total de régiments": "28,0",
            "Régiments de cavalerie légère": "8,0",
            "Régiments de cavalerie polyvalente": "18,0",
            "Régiments de cavalerie lourde": "2,0",
            "Cavaliers": "13 888,0",
            "Armée permanente et garnison": "65 571",
            "Conscription": "17 538",
            "Canons": "2 712",
            "Rappel Dont canons de campagne": "400",
            "Infanterie": "54 538",
            "Proportion Cavalerie/infanterie": "25,47 %",
            "Artilleurs": "15 215",
            "Corps du génie (nombre de soldats)": "1 776",
            "Levée pour cette année (appelés de conscription)": "17 538",
            "Part sur les 1/140e": "25,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "78 822",
            "Besoin militaire": "29 244",
            "Excédent ou déficit": "49 578",
            "Achat chevaux": "8 202 138",
            "Chevaux officiers": "9 488",
            "Chevaux pour l’artillerie": "4 800",
            "Chevaux cavalerie": "13 888",
            "Forteresses": "32",
            "Forteresses 2e classe": "3",
            "Forteresses 3e et 4e classe": "29",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "19",
            "Forts – Poste militaire": "33",
            "Construction de places de troisième rang": "2",
            "Construction de places de quatrième rang": "2",
            "Nombre de casernes (1 caserne = 250 logements)": "72",
            "Capacité de casernement": "19 700",
            "Soldats non logés (logement chez l’habitant)": "63 941",
            "Coût du logement": "3 516 728",
            "Construction de casernes": "24",
            "Coût (construction + entretien )": "780 000",
            "Artillerie des côtes": "30",
            "Constructions petites fortifications/fortifications côtières": "5",
            "Lieutenants": "3 912",
            "Capitaines": "1 956",
            "Lieutenants-colonels, chef d’escadrons et majors": "899",
            "Colonels": "364",
            "Généraux de brigade": "92",
            "Généraux de division": "35",
            "Total officiers": "7 258",
            "Nombre d'écoles militaires (armée)": "1",
            "Nombre d'élèves": "85",
            "Milices/garde nationale": "39 284",
            "Proportion par rapport à la population": "1/250",
            "Nombre de cohortes de Milices": "79",
            "Fusils disponibles": "22 000",
            "Milices coloniales": "409",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "1",
            "Fusils disponibles (Milices Col.)": "250",
            "Divisions militaires": "7",
            "Pensions (familles, récompenses des généraux, etc)": "982",
            "Pensions": "2 749 880",
            "Maréchaussée/gendarmerie/police": "3 274",
            "Coût maréchaussée": "1 113 047",
            "Messagers/personnels des postes": "1 812",
            "Coût (Poste)": "860 621",
            "Budget naval": "7 758 551",
            "Personnel administratif de la marine": "61",
            "Nombre de marins": "313",
            "Nombre de troupes de marines dans les navires": "30",
            "Salaires des marins": "165,54",
            "Salaires et pensions pour des marins": "57 448",
            "Salaires des officiers (Marine)": "62 300",
            "Nombre de marins dans la marine marchande": "2 596",
            "Pêcheurs": "2 544",
            "Navires de transport": "9",
            "Colons envoyés aux colonies": "1 033",
            "Coût colonisation": "388 485",
            "Population proche du littoral (-80km) et sur les fleuves": "2 120 300",
            "Réservoir de marins": "28 271",
            "Marins effectifs": "5 453",
            "Marins encore disponibles": "21 686",
            "Navires de ligne": "0",
            "Navires d’escortes": "18",
            "Frégates": "3",
            "Corvettes-Brig-Sloops-chébeqs": "5",
            "Sloops-Goelettes-shooners": "10",
            "Navires d’escortes actifs": "2",
            "Corvettes- (Actifs)": "1",
            "Sloops-Goelettes-shooners (Actifs)": "1",
            "Enseignes de vaisseaux": "23",
            "Capitaine de frégate": "3",
            "Lieutenants de vaisseaux": "8",
            "Capitaines de vaisseaux": "0",
            "Contre-amiraux": "0",
            "Vice-amiraux": "0",
            "Ecoles navales": "1",
            "Elèves": "18",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "4",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Frégates ou navires d’escorte en radoub": "0",
            "Bâtiments de la Marine": "2",
            "Petits arsenaux": "1",
            "Cales de radoubs (pour vaisseaux)": "1",
            "Nombre d’ouvriers": "400",
            "Coût construction navires": "1 745 000",
            "Entretien et approvisionnement des navires": "57 621",
            "Entretien et approvisionnement des arsenaux": "159 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "87 000",
            "Travaux dans les colonies": "345 000",
            "Forts dans les colonies": "1",
            "Constructions forts colonies": "0",
            "Navires de pêche": "424",
            "Navires marchands totaux": "215",
            "Cabotage (5 à 50 tonneaux)": "114",
            "Grand cabotage (50-100 tonneaux)": "55",
            "Commerce de haute mer (100-250 tonneaux)": "35",
            "Grand commerce (+ 250 tonneaux)": "11",
            "production navires marchands": "9",
            "Cabotage (5 à 50 tonneaux) (Prod)": "2",
            "Grand cabotage (50-100 tonneaux) (Prod)": "1",
            "Commerce de haute mer (100-200 tonneaux)": "1",
            "Grand commerce (+ 200 tonneaux)": "5",
            "Sucre (en Kg)": "80 200",
            "Café (Kg)": "890",
            "Epices (en Kg)": "1 357",
            "Fourrures (en pièces)": "0",
            "Tabac (en kg)": "476",
            "Coton (en kg)": "880",
            "Indigo (en kg)": "0",
            "Thé (en Kg)": "0",
            "Commerce estimé en livres tournois": "14 181 118",
            "Taxes": "945 408",
            "Droits de mouillage": "1 288 538",
            "Manufactures (textiles verreries imprimeries etc)": "22",
            "Production de fer (T)": "1 840",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "7 780",
            "Production d'argent (Kg)": "35 800",
            "Production fusils": "50 000",
            "Production de canons": "160",
            "Production de canons navals": "75",
            "Production de poudre (T)": "40 000",
            "Industrie production en valeur": "17 505 000",
            "Taxe industrie": "3 162 103",
            "Nombre de manufactures d’armes ou arsenaux": "4",
            "Ouvriers": "428",
            "Reste après besoin en fusils (dans l’armée et marine)": "-2 518",
            "Fusils (dans l'armée ou en réserve)": "-2 518",
            "Besoin de canons navals": "114",
            "Réserve de canons navals": "-39",
            "Superficie du territoire en forêt": "22,10 %",
            "Production bois (Mcube)": "10 421 000",
            "Consommation de bois": "9 851 750",
            "Si excédent, vente ou achat si quantité insuffisante": "5 692 500",
            "Taxes sur les excédents": "569 250",
            "Nombre d’hectares de blé": "3 085 890",
            "production blé par an (en quintaux)": "23 144 175",
            "Consommation": "19 297 215",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "46 454 400",
            "Taxes sur les excédents (Blé)": "696 816",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "984 293",
            "Production légumes:etc": "9 350 779",
            "Consommation (Légumes)": "9 329 950",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "124 973",
            "Taxes sur les excédents (Légumes)": "2 499",
            "Nombre d’hectares de vigne": "212 820",
            "Production vin (hectolitres)": "6 012 165",
            "Consommation (Vin)": "6 874 700",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-38 814 075",
            "Taxes sur les excédents (Vin)": "-776 282",
            "Nombre d’hectares pour l’élevage": "2 482 900",
            "Recettes totales Pays": "96 886 469",
            "Dépenses totales": "97 337 389",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "0",
            "Coût maison du roi": "5 145 001",
            "Trésor": "8 549 080",
            "Dette": "0",
            "Excédent": "1 549 080",
            "Dette ou excédent en pourcentage des recettes": "1,60 %",
            "Charge de la dette": "0,0"
        }
    }, 
          
        "Philippe d’Orléans": {
        "nom": "Philippe d’Orléans",
        "RAW_DATA": {
            "Population": "19 646 100",
            "Population des colonies": "219 400",
            "Dont colons blancs": "71 400",
            "Indigènes": "46 000",
            "Esclaves": "102 000",
            "Total population métropolitaine": "19 646 100",
            "Superficie métropole (km²)": "547 200",
            "Densité de population": "35,90",
            "Recettes fiscales (en livres tournois)": "228 300 616",
            "Impôts directs": "91 955 321",
            "Impôt foncier": "76 925 876",
            "Impôt sur le mobilier": "8 742 515",
            "Patente": "6 286 931",
            "Impôts indirects": "136 345 295",
            "Gabelle": "28 486 845",
            "Aides/autres impôts indirects": "58 938 300",
            "Enregistrement/successions": "12 278 813",
            "Douanes": "23 871 372",
            "Lotteries": "12 769 965",
            "Revenu national brut": "4 899 737 340",
            "Revenu moyen par hab": "249,40",
            "Dépenses militaires": "123 135 316",
            "Soldes": "42 232 509",
            "Salaires soldats": "24 876 674",
            "Salaires officiers": "17 355 835",
            "Salaires annuels soldats réguliers": "130,15",
            "Salaires conscrits": "110,25",
            "Salaires annuels sous-officiers": "245,25",
            "Salaires lieutenants": "950,00",
            "Salaires capitaines": "1 475,00",
            "Salaires lieutenants-colonels": "3 050,00",
            "Salaires colonels": "4 400,00",
            "Salaires généraux de brigade": "9 000,00",
            "Salaires généraux de division": "14 000,00",
            "Coût administration de la Guerre": "68 966 581",
            "Entretien des places": "8 206 200",
            "Budget de construction de places": "871 250",
            "Besoin en rations quotidiennes": "38 422 782",
            "Coût achat uniforme": "3 227 574",
            "Domaine de l’État (fermes en H ou bois)": "1 368 000",
            "Revenus des domaines": "15 390 000",
            "Coût fonctionnement Etat": "14 991 669",
            "Nombre d'administrateurs totaux": "12 719",
            "Secrétaires et administrations des ministères": "1 944",
            "Secrétaires et administrations des provinces/départements": "1 380",
            "Percepteurs d’impôts/douaniers/etc": "2 964",
            "Juges/chancellerie/etc": "1 140",
            "Préfets / gouverneurs": "60",
            "Sous-préfets/etc": "0",
            "Parlementaires": "240",
            "Personnels parlement": "1 200",
            "Personnel des armées": "3 791",
            "Nombre de départements / provinces": "60",
            "Secrétaires d'Etat": "9",
            "Gouverneurs / intendants / préfets": "60",
            "Coût des ministres et gouverneurs / préfets / intendants": "615 000",
            "Nombre de bâtiments à construire": "10",
            "Construction kilomètres de routes": "115",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 815 000",
            "Nombre de villes (+ 100 000)": "2",
            "Nombre de ville (100 000 – 20 000)": "11",
            "Nombre de villes (20 000- 5000)": "71",
            "Nombre de maires choisis par l’État": "84",
            "nombre de conseillers municipaux": "840",
            "Coûts fonctionnements villes": "462 000",
            "Revenus des villes": "459 777",
            "Nombre d’Universités": "13",
            "Nombre de lycées": "219",
            "Nombre d’écoles primaires": "1 526",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "140 329",
            "Années de service": "10",
            "Recrues « maximum » sur les années de service": "1 403 293",
            "Engagés réels": "167 670",
            "Nombre de soldats totaux": "167 670",
            "Pensionnaires, retraités ou demi-soldes": "13 960",
            "Entraînement par mois(manœuvres, tirs)": "11",
            "Coût": "2 858 776",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "8",
            "Nombre de canons de 4 livres": "4",
            "Nombre de canons de 6 livres": "2",
            "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "0",
            "Nombre de compagnies d’artillerie totale": "32",
            "Nombre régiments artillerie": "5,3",
            "Nombre de canons de l’armée de campagne": "252",
            "Garde (Infanterie) régiment": "2,50",
            "Dont vélites": "0,50",
            "Grenadiers": "1,00",
            "Tirailleurs-grenadiers": "1,00",
            "Garde (Cavalerie)": "3,00",
            "dont chasseurs à cheval": "1,50",
            "Dragons": "0,50",
            "Grenadiers à cheval": "0,50",
            "Lanciers": "0,50",
            "Artillerie de la garde": "0,50",
            "Compagnies d’artilleries de la garde": "4,00",
            "Nombre de canons par compagnie (Garde)": "0,00",
            "Nombre soldats Garde": "9 400",
            "Infanterie de la Garde": "6 000",
            "Cavalerie de la garde": "2 700",
            "Artillerie de la garde (canons)": "60",
            "Soldats dans une compagnie": "120,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "135,0",
            "Soldats dans un bataillon": "600,0",
            "Sous-officiers et caporaux": "75,0",
            "Soldats dans un régiment (pied de paix)": "1 200,0",
            "Sous-officiers et caporaux (Régiment Paix)": "225,0",
            "Soldats dans un régiment (pied de guerre)": "2 025,0",
            "Soldats dans une division": "3 600,0",
            "Sous-officiers et caporaux (Division)": "675,0",
            "Division sur pied de guerre": "6 075,0",
            "Nombre de Régiments de ligne": "45,0",
            "Régiments de grenadiers": "8,0",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "10,0",
            "Nombre de régiments": "63,0",
            "Nombre de bataillons": "189,0",
            "Nombre de divisions": "21,0",
            "Fantassins (dont sous-officiers)": "89 775",
            "Fantassins recrutés (conscription)": "28 066",
            "(Soldats manquants pour le pied de guerre )": "-9 734",
            "Cavaliers dans un escadron": "165,0",
            "Sous-officiers et caporaux dans un escadron": "20,0",
            "Cavaliers dans un régiment": "740,0",
            "Régiments de hussards": "8,0",
            "Régiments de chasseurs à cheval": "15,0",
            "Régiments de dragons": "8,0",
            "Régiments de cuirassiers": "5,0",
            "Nombre total de régiments": "36,0",
            "Régiments de cavalerie légère": "23,0",
            "Régiments de cavalerie polyvalente": "8,0",
            "Régiments de cavalerie lourde": "5,0",
            "Cavaliers": "26 640,0",
            "Armée permanente et garnison": "139 604",
            "Conscription": "28 066",
            "Canons": "6 494",
            "Rappel Dont canons de campagne": "394",
            "Infanterie": "117 841",
            "Proportion Cavalerie/infanterie": "22,61 %",
            "Artilleurs": "17 854",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "28 066",
            "Part sur les 1/140e": "20,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "136 800",
            "Besoin militaire": "45 352",
            "Excédent ou déficit": "91 448",
            "Achat chevaux": "11 263 637",
            "Chevaux officiers": "10 945",
            "Chevaux pour l’artillerie": "3 024",
            "Chevaux cavalerie": "26 640",
            "Forteresses": "63",
            "Forteresses 1ère classe": "3",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "54",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "34",
            "Forts – Poste militaire": "40",
            "Construction de places de troisième rang": "2",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "188",
            "Capacité de casernement": "49 700",
            "Soldats non logés (logement chez l’habitant)": "112 634",
            "Coût du logement": "6 194 890",
            "Construction de casernes": "20",
            "Coût (construction + entretien )": "970 000",
            "Artillerie des côtes": "84",
            "Constructions petites fortifications/fortifications côtières": "0",
            "Lieutenants": "5 178",
            "Capitaines": "2 589",
            "Lieutenants-colonels, chef d’escadrons et majors": "1 057",
            "Colonels": "435",
            "Généraux de brigade": "188",
            "Généraux de division": "128",
            "Total officiers": "9 575",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "160",
            "Milices/garde nationale": "130 974",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "262",
            "Fusils disponibles": "34 000",
            "Milices coloniales": "7 140",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "14",
            "Fusils disponibles (Milices Col.)": "3 100",
            "Divisions militaires": "19",
            "Pensions (familles, récompenses des généraux, etc)": "4 912",
            "Pensions": "13 359 348",
            "Maréchaussée/gendarmerie/police": "12 675",
            "Coût maréchaussée": "4 341 788",
            "Messagers/personnels des postes": "3 673",
            "Coût (Poste)": "1 573 847",
            "Budget naval": "54 455 143",
            "Personnel administratif de la marine": "502",
            "Nombre de marins": "8 082",
            "Nombre de troupes de marines dans les navires": "1 485",
            "Salaires des marins": "200,25",
            "Salaires et pensions pour des marins": "2 318 737",
            "Salaires des officiers (Marine)": "2 274 350",
            "Nombre de marins dans la marine marchande": "17 931",
            "Pêcheurs": "8 585",
            "Navires de transport": "25",
            "Colons envoyés aux colonies": "2 857",
            "Coût colonisation": "1 078 565",
            "Population proche du littoral (-80km) et sur les fleuves": "5 723 000",
            "Réservoir de marins": "77 587",
            "Marins effectifs": "34 598",
            "Marins encore disponibles": "42 989",
            "Navires de ligne": "52",
            "+ de 80 canons": "1",
            "80 canons": "4",
            "74 canons": "29",
            "64 canons": "11",
            "50 canons": "7",
            "Navires de ligne actifs/armés": "11",
            "80 canons (Actifs)": "2",
            "74 canons (Actifs)": "5",
            "64 canons (Actifs)": "3",
            "50 canons (Actifs)": "1",
            "Navires d’escortes": "75",
            "Frégates": "24",
            "Corvettes-Brig-Sloops-chébeqs": "31",
            "Sloops-Goelettes-shooners": "20",
            "Navires d’escortes actifs": "11",
            "Frégates (Actifs)": "5",
            "Corvettes- (Actifs)": "4",
            "Sloops-Goelettes-shooners (Actifs)": "2",
            "Enseignes de vaisseaux": "290",
            "Capitaine de frégate": "85",
            "Lieutenants de vaisseaux": "235",
            "Capitaines de vaisseaux": "97",
            "Contre-amiraux": "19",
            "Vice-amiraux": "10",
            "Ecoles navales": "1",
            "Elèves": "95",
            "Construction de vaisseaux": "8",
            "Constructions navales 80 canons": "3",
            "Constructions navales 74 canons": "4",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "15",
            "Constructions navales (frégates)": "4",
            "Constructions navales Bricks-Corvettes": "7",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "4",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "18",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "3",
            "Cales de radoubs (pour vaisseaux)": "3",
            "Nombre d’ouvriers": "5 900",
            "Coût construction navires": "18 155 000",
            "Entretien et approvisionnement des navires": "2 341 826",
            "Entretien et approvisionnement des arsenaux": "1 472 300",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "2 915 600",
            "Travaux dans les colonies": "1 423 000",
            "Forts dans les colonies": "14",
            "Constructions forts colonies": "3",
            "Navires de pêche": "1 431",
            "Navires marchands totaux": "1 081",
            "Cabotage (5 à 50 tonneaux)": "484",
            "Grand cabotage (50-100 tonneaux)": "286",
            "Commerce de haute mer (100-250 tonneaux)": "177",
            "Grand commerce (+ 250 tonneaux)": "134",
            "production navires marchands": "28",
            "Cabotage (5 à 50 tonneaux) (Prod)": "11",
            "Grand cabotage (50-100 tonneaux) (Prod)": "8",
            "Commerce de haute mer (100-200 tonneaux)": "4",
            "Grand commerce (+ 200 tonneaux)": "5",
            "Sucre (en Kg)": "11 547 000",
            "Café (Kg)": "4 080 200",
            "Epices (en Kg)": "1 756 000",
            "Fourrures (en pièces)": "11 780",
            "Tabac (en kg)": "556 300",
            "Coton (en kg)": "801 000",
            "Indigo (en kg)": "204 500",
            "Thé (en Kg)": "8 756 000",
            "Commerce estimé en livres tournois": "119 972 018",
            "Taxes": "10 906 547",
            "Droits de mouillage": "12 964 825",
            "Manufactures (textiles verreries imprimeries etc)": "94",
            "Production de fer (T)": "16 270",
            "Production de Fonte (T)": "1 021",
            "Production de cuivre (quintaux)": "17 300",
            "Production d'argent (Kg)": "51 500",
            "Production fusils": "120 000",
            "Production de canons": "400",
            "Production de canons navals": "188",
            "Production de poudre (T)": "70 000",
            "Industrie production en valeur": "54 040 000",
            "Taxe industrie": "6 286 931",
            "Nombre de manufactures d’armes ou arsenaux": "10",
            "Ouvriers": "540",
            "Reste après besoin en fusils (dans l’armée et marine)": "-37 146",
            "Fusils (dans l'armée ou en réserve)": "-37 146",
            "Besoin de canons navals": "976",
            "Réserve de canons navals": "-789",
            "Superficie du territoire en forêt": "20,91 %",
            "Production bois (Mcube)": "20 001 000",
            "Consommation de bois": "19 784 100",
            "Si excédent, vente ou achat si quantité insuffisante": "2 169 000",
            "Taxes sur les excédents": "216 900",
            "Nombre d’hectares de blé": "5 253 120",
            "production blé par an (en quintaux)": "36 771 840",
            "Consommation": "35 671 905",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "5 249 025",
            "Taxes sur les excédents (Blé)": "104 981",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 532 160",
            "Production légumes:etc": "11 491 200",
            "Consommation (Légumes)": "10 805 355",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "4 115 070",
            "Taxes sur les excédents (Légumes)": "82 301",
            "Nombre d’hectares de vigne": "632 837",
            "Production vin (hectolitres)": "17 719 430",
            "Consommation (Vin)": "14 734 575",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "129 143 493",
            "Taxes sur les excédents (Vin)": "1 937 152",
            "Nombre d’hectares pour l’élevage": "3 830 400",
            "Recettes totales Pays": "246 031 950",
            "Dépenses totales": "223 004 434",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "2 000 000",
            "Coût maison du roi": "12 450 021",
            "Trésor": "13 027 517",
            "Dette": "0",
            "Excédent": "23 027 517",
            "Dette ou excédent en pourcentage des recettes": "9,36 %",
            "Charge de la dette": "0,0"
        }
    },
    "Gaston de Foix": {
        "nom": "Gaston de Foix",
        "RAW_DATA": {
            "Population": "5 671 400",
            "Population des colonies": "33 080",
            "Dont colons blancs": "18 450",
            "Indigènes": "4 485",
            "Esclaves": "10 145",
            "Total population métropolitaine": "5 671 400",
            "Superficie métropole (km²)": "273 500",
            "Densité de population": "20,74",
            "Recettes fiscales (en livres tournois)": "62 195 679",
            "Impôts directs": "18 633 618",
            "Impôt foncier": "8 497 334",
            "Impôt sur le mobilier": "2 886 743",
            "Patente": "7 249 542",
            "Impôts indirects": "43 562 061",
            "Gabelle": "12 760 650",
            "Aides/autres impôts indirects": "14 178 500",
            "Enregistrement/successions": "8 010 853",
            "Douanes": "6 532 545",
            "Lotteries": "2 079 513",
            "Revenu national brut": "1 666 143 892",
            "Revenu moyen par hab": "293,78",
            "Dépenses militaires": "48 898 893",
            "Soldes": "17 975 506",
            "Salaires soldats": "11 107 437",
            "Salaires officiers": "6 868 069",
            "Salaires annuels soldats réguliers": "130,00",
            "Salaires conscrits": "125,75",
            "Salaires annuels sous-officiers": "236,15",
            "Salaires lieutenants": "950,00",
            "Salaires capitaines": "1 325,00",
            "Salaires lieutenants-colonels": "3 345,00",
            "Salaires colonels": "4 850,00",
            "Salaires généraux de brigade": "8 000,00",
            "Salaires généraux de division": "14 500,00",
            "Coût administration de la Guerre": "27 167 544",
            "Entretien des places": "1 335 600",
            "Budget de construction de places": "600 000",
            "Besoin en rations quotidiennes": "15 415 847",
            "Coût achat uniforme": "776 442",
            "Domaine de l’État (fermes en H ou bois)": "781 429",
            "Revenus des domaines": "6 915 643",
            "Coût fonctionnement Etat": "3 918 523",
            "Nombre d'administrateurs totaux": "2 763",
            "Secrétaires et administrations des ministères": "606",
            "Secrétaires et administrations des provinces/départements": "322",
            "Percepteurs d’impôts/douaniers/etc": "754",
            "Juges/chancellerie/etc": "266",
            "Préfets / gouverneurs": "14",
            "Sous-préfets/etc": "0",
            "Parlementaires": "56",
            "Personnels parlement": "168",
            "Personnel des armées": "577",
            "Nombre de départements / provinces": "14",
            "Secrétaires d'Etat": "6",
            "Gouverneurs / intendants / préfets": "14",
            "Coût des ministres et gouverneurs / préfets / intendants": "170 000",
            "Nombre de bâtiments à construire": "4",
            "Construction kilomètres de routes": "75",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "985 000",
            "Nombre de villes (+ 100 000)": "0",
            "Nombre de ville (100 000 – 20 000)": "5",
            "Nombre de villes (20 000- 5000)": "22",
            "Nombre de maires choisis par l’État": "27",
            "nombre de conseillers municipaux": "135",
            "Coûts fonctionnements villes": "113 400",
            "Revenus des villes": "93 168",
            "Nombre d’Universités": "5",
            "Nombre de lycées": "69",
            "Nombre d’écoles primaires": "421",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "40 510",
            "Années de service": "6",
            "Recrues « maximum » sur les années de service": "243 060",
            "Engagés réels": "69 079",
            "Nombre de soldats totaux": "69 079",
            "Pensionnaires, retraités ou demi-soldes": "6 233",
            "Entraînement par mois(manœuvres, tirs)": "17",
            "Coût": "1 820 243",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "8",
            "Nombre de canons de 4 livres": "4",
            "Nombre de canons de 6 livres": "2",
            "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "6",
            "Nombre de compagnies d’artillerie totale": "17",
            "Nombre régiments artillerie": "2,8",
            "Nombre de canons de l’armée de campagne": "88",
            "Garde (Infanterie) régiment": "1,00",
            "Grenadiers": "0,50",
            "Tirailleurs-grenadiers": "0,50",
            "Garde (Cavalerie)": "1,75",
            "dont chasseurs à cheval": "0,75",
            "Dragons": "0,50",
            "Grenadiers à cheval": "0,50",
            "Artillerie de la garde": "0,25",
            "Compagnies d’artilleries de la garde": "2,00",
            "Nombre soldats Garde": "4 325",
            "Infanterie de la Garde": "2 400",
            "Cavalerie de la garde": "1 575",
            "Artillerie de la garde (canons)": "30",
            "Soldats dans une compagnie": "100,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "115,0",
            "Soldats dans un bataillon": "800,0",
            "Sous-officiers et caporaux": "120,0",
            "Soldats dans un régiment (pied de paix)": "1 600,0",
            "Sous-officiers et caporaux (Régiment Paix)": "360,0",
            "Soldats dans un régiment (pied de guerre)": "2 760,0",
            "Soldats dans une division": "4 800,0",
            "Sous-officiers et caporaux (Division)": "1 080,0",
            "Division sur pied de guerre": "8 280,0",
            "Nombre de Régiments de ligne": "16,0",
            "Régiments de grenadiers": "2,0",
            "Régiments de génie": "0,50",
            "Régiments d’infanterie légère": "4,0",
            "Nombre de régiments": "22,0",
            "Nombre de bataillons": "66,0",
            "Nombre de divisions": "7,3",
            "Fantassins (dont sous-officiers)": "43 120",
            "Fantassins recrutés (conscription)": "6 752",
            "(Soldats manquants pour le pied de guerre )": "-10 848",
            "Cavaliers dans un escadron": "140,0",
            "Sous-officiers et caporaux dans un escadron": "28,0",
            "Cavaliers dans un régiment": "672,0",
            "Régiments de Uhlans/chevau-légers": "3,0",
            "Régiments de chasseurs à cheval": "8,0",
            "Régiments de dragons": "3,0",
            "Régiments de cuirassiers": "2,5",
            "Nombre total de régiments": "16,5",
            "Régiments de cavalerie légère": "8,0",
            "Régiments de cavalerie polyvalente": "6,0",
            "Régiments de cavalerie lourde": "2,5",
            "Cavaliers dans une division de cavalerie": "2 688,0",
            "Nombre de divisions": "5,5",
            "Cavaliers": "11 088,0",
            "Armée permanente et garnison": "62 328",
            "Conscription": "6 752",
            "Canons": "1 417",
            "Rappel Dont canons de campagne": "207",
            "Infanterie": "49 872",
            "Proportion Cavalerie/infanterie": "22,23 %",
            "Artilleurs": "6 558",
            "Corps du génie (nombre de soldats)": "592",
            "Levée pour cette année (appelés de conscription)": "6 752",
            "Part sur les 1/140e": "16,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "68 375",
            "Besoin militaire": "19 156",
            "Excédent ou déficit": "49 219",
            "Achat chevaux": "3 698 524",
            "Chevaux officiers": "5 073",
            "Chevaux pour l’artillerie": "2 112",
            "Chevaux cavalerie": "11 088",
            "Forteresses": "16",
            "Forteresses 2e classe": "2",
            "Forteresses 3e et 4e classe": "14",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "10",
            "Forts – Poste militaire": "20",
            "Construction de places de troisième rang": "1",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "39",
            "Capacité de casernement": "10 850",
            "Soldats non logés (logement chez l’habitant)": "56 668",
            "Coût du logement": "3 116 722",
            "Construction de casernes": "12",
            "Coût (construction + entretien )": "397 500",
            "Artillerie des côtes": "37",
            "Constructions petites fortifications/fortifications côtières": "3",
            "Lieutenants": "1 997",
            "Capitaines": "998",
            "Lieutenants-colonels, chef d’escadrons et majors": "407",
            "Colonels": "165",
            "Généraux de brigade": "84",
            "Généraux de division": "57",
            "Total officiers": "3 707",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "123",
            "Milices/garde nationale": "56 714",
            "Proportion par rapport à la population": "1/100",
            "Nombre de cohortes de Milices": "113",
            "Fusils disponibles": "28 000",
            "Milices coloniales": "1 845",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "4",
            "Fusils disponibles (Milices Col.)": "1 200",
            "Divisions militaires": "5",
            "Pensions (familles, récompenses des généraux, etc)": "737",
            "Pensions": "1 142 787",
            "Maréchaussée/gendarmerie/police": "4 051",
            "Coût maréchaussée": "1 132 052",
            "Messagers/personnels des postes": "1 090",
            "Coût (Poste)": "320 529",
            "Budget naval": "12 007 579",
            "Personnel administratif de la marine": "367",
            "Nombre de marins": "1 932",
            "Nombre de troupes de marines dans les navires": "245",
            "Salaires des marins": "171,45",
            "Salaires et pensions pour des marins": "417 535",
            "Salaires des officiers (Marine)": "288 050",
            "Nombre de marins dans la marine marchande": "4 764",
            "Pêcheurs": "3 588",
            "Navires de transport": "11",
            "Colons envoyés aux colonies": "1 296",
            "Coût colonisation": "468 720",
            "Population proche du littoral (-80km) et sur les fleuves": "2 990 400",
            "Réservoir de marins": "39 872",
            "Marins effectifs": "10 285",
            "Marins encore disponibles": "25 600",
            "Navires de ligne": "6",
            "74 canons": "2",
            "64 canons": "1",
            "50 canons": "3",
            "Navires de ligne actifs/armés": "3",
            "74 canons (Actifs)": "1",
            "50 canons (Actifs)": "2",
            "Navires d’escortes": "27",
            "Frégates": "7",
            "Corvettes-Brig-Sloops-chébeqs": "10",
            "Sloops-Goelettes-shooners": "10",
            "Navires d’escortes actifs": "3",
            "Frégates (Actifs)": "1",
            "Corvettes- (Actifs)": "1",
            "Sloops-Goelettes-shooners (Actifs)": "1",
            "Enseignes de vaisseaux": "51",
            "Capitaine de frégate": "14",
            "Lieutenants de vaisseaux": "31",
            "Capitaines de vaisseaux": "9",
            "Contre-amiraux": "2",
            "Vice-amiraux": "1",
            "Ecoles navales": "1",
            "Elèves": "25",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "5",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "0",
            "Frégates ou navires d’escorte en radoub": "0",
            "Bâtiments de la Marine": "4",
            "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "1",
            "Nombre d’ouvriers": "1 300",
            "Coût construction navires": "1 865 000",
            "Entretien et approvisionnement des navires": "376 862",
            "Entretien et approvisionnement des arsenaux": "297 800",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 705 200",
            "Travaux dans les colonies": "201 000",
            "Forts dans les colonies": "2",
            "Constructions forts colonies": "0",
            "Navires de pêche": "598",
            "Navires marchands totaux": "361",
            "Cabotage (5 à 50 tonneaux)": "201",
            "Grand cabotage (50-100 tonneaux)": "88",
            "Commerce de haute mer (100-250 tonneaux)": "40",
            "Grand commerce (+ 250 tonneaux)": "32",
            "production navires marchands": "20",
            "Cabotage (5 à 50 tonneaux) (Prod)": "3",
            "Grand cabotage (50-100 tonneaux) (Prod)": "7",
            "Commerce de haute mer (100-200 tonneaux)": "3",
            "Grand commerce (+ 200 tonneaux)": "7",
            "Sucre (en Kg)": "164 530",
            "Café (Kg)": "140 480",
            "Epices (en Kg)": "62 710",
            "Fourrures (en pièces)": "0",
            "Tabac (en kg)": "211 400",
            "Coton (en kg)": "0",
            "Indigo (en kg)": "87 500",
            "Thé (en Kg)": "347 000",
            "Commerce estimé en livres tournois": "24 690 454",
            "Taxes": "2 469 045",
            "Droits de mouillage": "4 063 500",
            "Manufactures (textiles verreries imprimeries etc)": "28",
            "Production de fer (T)": "15 010",
            "Production de Fonte (T)": "840",
            "Production de cuivre (quintaux)": "33 520",
            "Production d'argent (Kg)": "71 500",
            "Production fusils": "47 500",
            "Production de canons": "200",
            "Production de canons navals": "94",
            "Production de poudre (T)": "50 000",
            "Industrie production en valeur": "53 125 000",
            "Taxe industrie": "7 249 542",
            "Nombre de manufactures d’armes ou arsenaux": "8",
            "Ouvriers": "405",
            "Reste après besoin en fusils (dans l’armée et marine)": "4 638",
            "Fusils (dans l'armée ou en réserve)": "4 638",
            "Besoin de canons navals": "128",
            "Réserve de canons navals": "-34",
            "Superficie du territoire en forêt": "34,87 %",
            "Production bois (Mcube)": "6 046 700",
            "Consommation de bois": "5 716 400",
            "Si excédent, vente ou achat si quantité insuffisante": "3 303 000",
            "Taxes sur les excédents": "330 300",
            "Nombre d’hectares de blé": "1 846 125",
            "production blé par an (en quintaux)": "13 661 325",
            "Consommation": "12 119 415",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "11 878 650",
            "Taxes sur les excédents (Blé)": "237 573",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 039 300",
            "Production légumes:etc": "7 794 750",
            "Consommation (Légumes)": "5 387 830",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "14 441 520",
            "Taxes sur les excédents (Légumes)": "361 038",
            "Nombre d’hectares de vigne": "252 714",
            "Production vin (hectolitres)": "7 075 992",
            "Consommation (Vin)": "5 387 830",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "70 792 290",
            "Taxes sur les excédents (Vin)": "1 769 807",
            "Nombre d’hectares pour l’élevage": "1 914 500",
            "Recettes totales Pays": "71 810 040",
            "Dépenses totales": "70 805 401",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "2 000 000",
            "Coût maison du roi": "2 854 000",
            "Trésor": "3 004 639",
            "Dette": "0",
            "Excédent": "3 004 639",
            "Dette ou excédent en pourcentage des recettes": "4,18 %",
            "Charge de la dette": "0,0"
        }
    },
    "Poniatowski": {
        "nom": "Poniatowski",
        "RAW_DATA": {
            "Population": "6 801 000",
            "Total population métropolitaine": "6 801 000",
            "Superficie métropole (km²)": "351 800",
            "Densité de population": "19,33",
            "Recettes fiscales (en livres tournois)": "53 834 260",
            "Impôts directs": "14 832 975",
            "Impôt foncier": "11 708 302",
            "Impôt sur le mobilier": "986 145",
            "Patente": "2 138 527",
            "Impôts indirects": "39 001 286",
            "Gabelle": "8 501 250",
            "Aides/autres impôts indirects": "22 103 250",
            "Enregistrement/successions": "5 780 850",
            "Douanes": "575 636",
            "Lotteries": "2 040 300",
            "Revenu national brut": "1 147 872 780",
            "Revenu moyen par hab": "168,78",
            "Dépenses militaires": "40 819 057",
            "Soldes": "14 543 011",
            "Salaires soldats": "8 464 494",
            "Salaires officiers": "6 078 516",
            "Salaires annuels soldats réguliers": "100,25",
            "Salaires conscrits": "97,50",
            "Salaires annuels sous-officiers": "194,25",
            "Salaires lieutenants": "650,00",
            "Salaires capitaines": "945,50",
            "Salaires lieutenants-colonels": "2 100,00",
            "Salaires colonels": "3 000,00",
            "Salaires généraux de brigade": "6 250,00",
            "Salaires généraux de division": "9 500,00",
            "Coût administration de la Guerre": "21 514 980",
            "Entretien des places": "2 617 800",
            "Budget de construction de places": "1 487 500",
            "Besoin en rations quotidiennes": "12 889 442",
            "Coût achat uniforme": "1 396 634",
            "Domaine de l’État (fermes en H ou bois)": "879 500",
            "Revenus des domaines": "5 936 625",
            "Coût fonctionnement Etat": "4 401 670",
            "Nombre d'administrateurs totaux": "3 972",
            "Secrétaires et administrations des ministères": "558",
            "Secrétaires et administrations des provinces/départements": "414",
            "Percepteurs d’impôts/douaniers/etc": "1 543",
            "Juges/chancellerie/etc": "342",
            "Préfets / gouverneurs": "18",
            "Sous-préfets/etc": "72",
            "Parlementaires": "72",
            "Personnels parlement": "216",
            "Personnel des armées": "737",
            "Nombre de départements / provinces": "18",
            "Secrétaires d'Etat": "6",
            "Gouverneurs / intendants / préfets": "18",
            "Coût des ministres et gouverneurs / préfets / intendants": "198 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "24",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "392 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "4",
            "Nombre de villes (20 000- 5000)": "28",
            "Nombre de maires choisis par l’État": "33",
            "nombre de conseillers municipaux": "165",
            "Coûts fonctionnements villes": "118 800",
            "Revenus des villes": "148 330",
            "Nombre d’Universités": "5",
            "Nombre de lycées": "87",
            "Nombre d’écoles primaires": "535",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "48 579",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "145 736",
            "Engagés réels": "60 439",
            "Nombre de soldats totaux": "60 439",
            "Pensionnaires, retraités ou demi-soldes": "4 829",
            "Entraînement par mois(manœuvres, tirs)": "7",
            "Coût": "655 766",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "8",
            "Nombre de canons de 4 livres": "4",
            "Nombre de canons de 6 livres": "2",
            "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie à cheval": "4",
            "Nombre de compagnies d’artillerie totale": "14",
            "Nombre régiments artillerie": "2,6",
            "Nombre de canons de l’armée de campagne": "80",
            "Garde (Infanterie) régiment": "1,00",
            "Dont vélites": "0,50",
            "Grenadiers": "0,50",
            "Garde (Cavalerie)": "2,50",
            "Dragons": "0,50",
            "Grenadiers à cheval": "0,50",
            "Lanciers": "1,50",
            "Artillerie de la garde": "0,25",
            "Compagnies d’artilleries de la garde": "2,00",
            "Nombre soldats Garde": "5 000",
            "Infanterie de la Garde": "2 400",
            "Cavalerie de la garde": "2 250",
            "Artillerie de la garde (canons)": "30",
            "Soldats dans une compagnie": "160,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "175,0",
            "Soldats dans un bataillon": "640,0",
            "Sous-officiers et caporaux": "60,0",
            "Soldats dans un régiment (pied de paix)": "1 280,0",
            "Sous-officiers et caporaux (Régiment Paix)": "180,0",
            "Soldats dans un régiment (pied de guerre)": "2 100,0",
            "Soldats dans une division": "3 840,0",
            "Sous-officiers et caporaux (Division)": "540,0",
            "Division sur pied de guerre": "6 300,0",
            "Nombre de Régiments de ligne": "15,0",
            "Régiments de grenadiers": "3,0",
            "Régiments de génie": "0,5",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "20,0",
            "Nombre de bataillons": "80,0",
            "Nombre de divisions": "6,7",
            "Fantassins (dont sous-officiers)": "29 200",
            "Fantassins recrutés (conscription)": "12 145",
            "(Soldats manquants pour le pied de guerre )": "-655",
            "Cavaliers dans un escadron": "120,0",
            "Sous-officiers et caporaux dans un escadron": "15,0",
            "Cavaliers dans un régiment": "540,0",
            "Régiments de hussards": "3,0",
            "Régiments de Uhlans/chevau-légers": "8,0",
            "Régiments de dragons": "4,0",
            "Nombre total de régiments": "15,0",
            "Régiments de cavalerie légère": "3,0",
            "Régiments de cavalerie polyvalente": "12,0",
            "Cavaliers": "8 100,0",
            "Armée permanente et garnison": "48 295",
            "Conscription": "12 145",
            "Canons": "2 429",
            "Rappel Dont canons de campagne": "197",
            "Infanterie": "41 345",
            "Proportion Cavalerie/infanterie": "19,59 %",
            "Artilleurs": "7 987",
            "Corps du génie (nombre de soldats)": "592",
            "Levée pour cette année (appelés de conscription)": "12 145",
            "Part sur les 1/140e": "25,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "87 950",
            "Besoin militaire": "18 254",
            "Excédent ou déficit": "69 696",
            "Achat chevaux": "1 244 444",
            "Chevaux officiers": "4 961",
            "Chevaux pour l’artillerie": "1 680",
            "Chevaux cavalerie": "8 100",
            "Forteresses": "27",
            "Forteresses 2e classe": "4",
            "Forteresses 3e et 4e classe": "20",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "18",
            "Forts – Poste militaire": "25",
            "Construction de places de second rang": "1",
            "Construction de places de troisième rang": "2",
            "Nombre de casernes (1 caserne = 250 logements)": "65",
            "Capacité de casernement": "19 000",
            "Soldats non logés (logement chez l’habitant)": "38 432",
            "Coût du logement": "2 113 754",
            "Construction de casernes": "32",
            "Coût (construction + entretien )": "962 500",
            "Artillerie des côtes": "9",
            "Constructions petites fortifications/fortifications côtières": "0",
            "Lieutenants": "4 154",
            "Capitaines": "1 038",
            "Lieutenants-colonels, chef d’escadrons et majors": "439",
            "Colonels": "168",
            "Généraux de brigade": "80",
            "Généraux de division": "50",
            "Total officiers": "5 929",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "160",
            "Milices/garde nationale": "45 340",
            "Proportion par rapport à la population": "1/150e",
            "Nombre de cohortes de Milices": "91",
            "Fusils disponibles": "14 000",
            "Milices coloniales": "0",
            "Nombre de bataillons de miliciens": "0",
            "Fusils disponibles (Milices Col.)": "0",
            "Divisions militaires": "10",
            "Pensions (familles, récompenses des généraux, etc)": "1 428",
            "Pensions": "2 785 010",
            "Maréchaussée/gendarmerie/police": "4 534",
            "Coût maréchaussée": "1 138 034",
            "Messagers/personnels des postes": "1 332",
            "Coût (Poste)": "632 463",
            "Budget naval": "5 010 204",
            "Personnel administratif de la marine": "42",
            "Nombre de marins": "48",
            "Nombre de troupes de marines dans les navires": "10",
            "Salaires des marins": "101,14",
            "Salaires et pensions pour des marins": "5 659",
            "Salaires des officiers (Marine)": "13 600",
            "Nombre de marins dans la marine marchande": "808",
            "Pêcheurs": "881",
            "Navires de transport": "1",
            "Colons envoyés aux colonies": "0",
            "Coût colonisation": "19 000",
            "Population proche du littoral (-80km) et sur les fleuves": "734 000",
            "Réservoir de marins": "9 787",
            "Marins effectifs": "1 736",
            "Marins encore disponibles": "7 072",
            "Navires de ligne": "0",
            "Navires d’escortes": "5",
            "Corvettes-Brig-Sloops-chébeqs": "2",
            "Sloops-Goelettes-shooners": "3",
            "Navires d’escortes actifs": "1",
            "Sloops-Goelettes-shooners (Actifs)": "1",
            "Enseignes de vaisseaux": "6",
            "Capitaine de frégate": "0",
            "Lieutenants de vaisseaux": "2",
            "Capitaines de vaisseaux": "0",
            "Contre-amiraux": "0",
            "Vice-amiraux": "0",
            "Ecoles navales": "1",
            "Elèves": "9",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "3",
            "Constructions navales Bricks-Corvettes": "2",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Navires de ligne en radoub": "0",
            "Frégates ou navires d’escorte en radoub": "0",
            "Bâtiments de la Marine": "0",
            "Petits arsenaux": "1",
            "Cales de radoubs (pour vaisseaux)": "0",
            "Nombre d’ouvriers": "300",
            "Coût construction navires": "770 000",
            "Entretien et approvisionnement des navires": "18 810",
            "Entretien et approvisionnement des arsenaux": "89 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "75 000",
            "Navires de pêche": "147",
            "Navires marchands totaux": "125",
            "Cabotage (5 à 50 tonneaux)": "102",
            "Grand cabotage (50-100 tonneaux)": "17",
            "Commerce de haute mer (100-250 tonneaux)": "4",
            "Grand commerce (+ 250 tonneaux)": "2",
            "production navires marchands": "5",
            "Cabotage (5 à 50 tonneaux) (Prod)": "3",
            "Grand cabotage (50-100 tonneaux) (Prod)": "2",
            "Fourrures (en pièces)": "4 500",
            "Commerce estimé en livres tournois": "4 818 855",
            "Taxes": "481 886",
            "Droits de mouillage": "93 750",
            "Manufactures (textiles verreries imprimeries etc)": "5",
            "Production de fer (T)": "8 700",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "7 150",
            "Production d'argent (Kg)": "6 450",
            "Production fusils": "36 000",
            "Production de canons": "160",
            "Production de canons navals": "75",
            "Production de poudre (T)": "40 000",
            "Industrie production en valeur": "19 420 000",
            "Taxe industrie": "2 138 527",
            "Nombre de manufactures d’armes ou arsenaux": "4",
            "Ouvriers": "428",
            "Reste après besoin en fusils (dans l’armée et marine)": "-19 629",
            "Fusils (dans l'armée ou en réserve)": "-19 629",
            "Besoin de canons navals": "62",
            "Réserve de canons navals": "13",
            "Superficie du territoire en forêt": "30,57 %",
            "Production bois (Mcube)": "7 198 000",
            "Consommation de bois": "6 822 750",
            "Si excédent, vente ou achat si quantité insuffisante": "3 752 500",
            "Taxes sur les excédents": "375 250",
            "Nombre d’hectares de blé": "2 462 600",
            "production blé par an (en quintaux)": "20 932 100",
            "Consommation": "14 675 060",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "82 605 600",
            "Taxes sur les excédents (Blé)": "1 239 084",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "703 600",
            "Production légumes:etc": "5 277 000",
            "Consommation (Légumes)": "6 460 950",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-7 103 700",
            "Taxes sur les excédents (Légumes)": "-142 074",
            "Nombre d’hectares de vigne": "211 080",
            "Production vin (hectolitres)": "4 274 370",
            "Consommation (Vin)": "4 760 700",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-21 884 850",
            "Taxes sur les excédents (Vin)": "-1 094 243",
            "Nombre d’hectares pour l’élevage": "2 462 600",
            "Recettes totales Pays": "61 385 219",
            "Dépenses totales": "58 479 679",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "2 000 000",
            "Coût maison du roi": "2 401 000",
            "Trésor": "8 905 540",
            "Dette": "0",
            "Excédent": "4 905 540",
            "Dette ou excédent en pourcentage des recettes": "7,99 %",
            "Charge de la dette": "0,0"
        }
    },  

    "Alexandre Ier": {
        "nom": "Alexandre Ier",
        "RAW_DATA": {
            "Population": "35 250 000",
            "Total population métropolitaine": "35 250 000",
            "Superficie métropole (km²)": "7 720 000",
            "Densité de population": "4.57",
            "Recettes fiscales (en livres tournois)": "166 956 728",
            "Impôts directs": "36 089 642",
            "Impôt foncier": "16 984 673",
            "Impôt sur le mobilier": "0",
            "Patente": "19 104 969",
            "Impôts indirects": "130 867 085",
            "Gabelle": "39 695 000",
            "Aides/autres impôts indirects": "51 370 000",
            "Enregistrement/successions": "4 670 000",
            "Douanes": "26 181 252",
            "Lotteries": "8 950 833",
            "Revenu national brut": "4 784 415 000",
            "Revenu moyen par hab": "102,45",
            "Dépenses militaires": "131 155 954",
            "Soldes": "46 513 107",
            "Salaires soldats": "31 986 302",
            "Salaires officiers": "14 526 805",
            "Salaires annuels soldats réguliers": "115,50",
            "Salaires conscrits": "111,45",
            "Salaires annuels sous-officiers": "212,25",
            "Salaires lieutenants": "625,00",
            "Salaires capitaines": "1 000,00",
            "Salaires lieutenants-colonels": "2 500,00",
            "Salaires colonels": "3 500,00",
            "Salaires généraux de brigade": "7 000,00",
            "Salaires généraux de division": "11 250,00",
            "Coût administration de la Guerre": "71 557 266",
            "Entretien des places": "8 778 600",
            "Budget de construction de places": "428 750",
            "Besoin en rations quotidiennes": "63 800 112",
            "Coût achat uniforme": "2 557 381",
            "Domaine de l’État (fermes en H ou bois)": "9 650 000",
            "Revenus des domaines": "39 565 000",
            "Coût fonctionnement Etat": "21 763 188",
            "Nombre d'administrateurs totaux": "15 344",
            "Secrétaires et administrations des ministères": "1 360",
            "Secrétaires et administrations des provinces/départements": "966",
            "Percepteurs d’impôts/douaniers/etc": "2 285",
            "Juges/chancellerie/etc": "2 310",
            "Préfets / gouverneurs": "42",
            "Sous-préfets/etc": "0",
            "Parlementaires": "168",
            "Personnels parlement": "1 680",
            "Personnel des armées": "6 533",
            "Nombre de départements / provinces": "42",
            "Secrétaires d'Etat": "10",
            "Gouverneurs / intendants / préfets": "42",
            "Coût des ministres et gouverneurs / préfets / intendants": "682 000",
            "Nombre de bâtiments à construire": "11",
            "Construction kilomètres de routes": "231",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "2 828 000",
            "Nombre de villes (+ 100 000)": "2",
            "Nombre de ville (100 000 – 20 000)": "8",
            "Nombre de villes (20 000- 5000)": "117",
            "Nombre de maires choisis par l’État": "127",
            "nombre de conseillers municipaux": "1 016",
            "Coûts fonctionnements villes": "800 100",
            "Revenus des villes": "180 448",
            "Nombre d’Universités": "10",
            "Nombre de lycées": "296",
            "Nombre d’écoles primaires": "1 691",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "333 571",
            "Années de service": "15",
            "Recrues « maximum » sur les années de service": "5 003 571",
            "Engagés réels": "278 009",
            "Nombre de soldats totaux": "278 009",
            "Pensionnaires, retraités ou demi-soldes": "25 577",
            "Entraînement par mois(manœuvres, tirs)": "9",
            "Coût": "3 878 231",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de compagnies d’artillerie à cheval": "16",
            "Nombre de compagnies d’artillerie totale": "52",
            "Nombre régiments artillerie": "8,3",
            "Garde (Infanterie) régiment": "2,50",
            "Grenadiers": "2,00",
            "Tirailleurs-grenadiers": "0,50",
            "Garde (Cavalerie)": "5,00",
            "dont chasseurs à cheval": "2,00",
            "Dragons": "2,00",
            "Lanciers": "1,00",
            "Artillerie de la garde": "1,50",
            "Compagnies d’artilleries de la garde": "12,00",
            "Nombre soldats Garde": "12 600",
            "Infanterie de la Garde": "6 000",
            "Cavalerie de la garde": "4 500",
            "Artillerie de la garde (canons)": "180",
            "Soldats dans une compagnie": "145,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "160,0",
            "Soldats dans un bataillon": "870,0",
            "Sous-officiers et caporaux": "90,0",
            "Soldats dans un régiment (pied de paix)": "2 175,0",
            "Sous-officiers et caporaux (Régiment Paix)": "270,0",
            "Soldats dans un régiment (pied de guerre)": "2 880,0",
            "Soldats dans une division": "10 875,0",
            "Sous-officiers et caporaux (Division)": "1 350,0",
            "Division sur pied de guerre": "14 400,0",
            "Nombre de Régiments de ligne": "55,0",
            "Régiments de grenadiers": "8,0",
            "Régiments de génie": "2,0",
            "Régiments d’infanterie légère": "8,0",
            "Nombre de régiments": "71,0",
            "Nombre de bataillons": "213,0",
            "Nombre de divisions": "23,7",
            "Fantassins (dont sous-officiers)": "173 595",
            "Fantassins recrutés (conscription)": "22 238",
            "(Soldats manquants pour le pied de guerre )": "-8 647",
            "Cavaliers dans un escadron": "150,0",
            "Sous-officiers et caporaux dans un escadron": "20,0",
            "Cavaliers dans un régiment": "850,0",
            "Régiments de Uhlans/chevau-légers": "20,0",
            "Régiments de chasseurs à cheval": "16,0",
            "Régiments de dragons": "20,0",
            "Régiments de cuirassiers": "8,0",
            "Nombre total de régiments": "64,0",
            "Régiments de cavalerie légère": "16,0",
            "Régiments de cavalerie polyvalente": "40,0",
            "Régiments de cavalerie lourde": "8,0",
            "Cavaliers dans une division de cavalerie": "3 400,0",
            "Nombre de divisions": "16,0",
            "Cavaliers": "54 400,0",
            "Armée permanente et garnison": "255 771",
            "Conscription": "22 238",
            "Canons": "6 850",
            "Rappel Dont canons de campagne": "623",
            "Infanterie": "195 833",
            "Proportion Cavalerie/infanterie": "27,78 %",
            "Artilleurs": "22 078",
            "Corps du génie (nombre de soldats)": "2 368",
            "Levée pour cette année (appelés de conscription)": "22 238",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "643 333",
            "Besoin militaire": "78 019",
            "Excédent ou déficit": "565 314",
            "Achat chevaux": "-21 422 927",
            "Chevaux officiers": "15 167",
            "Chevaux cavalerie": "54 400",
            "Forteresses": "64",
            "Forteresses 1ère classe": "3",
            "Forteresses 2e classe": "10",
            "Forteresses 3e et 4e classe": "51",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "31",
            "Forts – Poste militaire": "50",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "197",
            "Capacité de casernement": "51 750",
            "Soldats non logés (logement chez l’habitant)": "220 561",
            "Coût du logement": "12 130 833",
            "Construction de casernes": "8",
            "Coût (construction + entretien )": "692 500",
            "Artillerie des côtes": "50",
            "Constructions petites fortifications/fortifications côtières": "3",
            "Lieutenants": "5 634",
            "Capitaines": "2 817",
            "Lieutenants-colonels, chef d’escadrons et majors": "1 198",
            "Colonels": "514",
            "Généraux de brigade": "256",
            "Généraux de division": "143",
            "Total officiers": "10 562",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "273",
            "Milices/garde nationale": "116 750",
            "Proportion par rapport à la population": "1/400",
            "Nombre de cohortes de Milices": "234",
            "Fusils disponibles": "11 000",
            "Milices coloniales": "0",
            "Divisions militaires": "25",
            "Pensions (familles, récompenses des généraux, etc)": "2 102",
            "Pensions": "6 514 650",
            "Maréchaussée/gendarmerie/police": "11 675",
            "Coût maréchaussée": "2 451 750",
            "Messagers/personnels des postes": "5 381",
            "Coût (Poste)": "2 179 260",
            "Budget naval": "37 341 108",
            "Personnel administratif de la marine": "627",
            "Nombre de marins": "4 318",
            "Nombre de troupes de marines dans les navires": "705",
            "Salaires des marins": "108,74",
            "Salaires et pensions pour des marins": "981 920",
            "Salaires des officiers (Marine)": "1 752 400",
            "Nombre de marins dans la marine marchande": "16 797",
            "Pêcheurs": "3 136",
            "Navires de transport": "16",
            "Coût colonisation": "589 000",
            "Population proche du littoral (-80km) et sur les fleuves": "4 180 900",
            "Réservoir de marins": "55 745",
            "Marins effectifs": "24 250",
            "Marins encore disponibles": "31 495",
            "Navires de ligne": "42",
            "80 canons": "3",
            "74 canons": "27",
            "64 canons": "4",
            "50 canons": "8",
            "Navires de ligne actifs/armés": "5",
            "80 canons (Actifs)": "1",
            "74 canons (Actifs)": "1",
            "64 canons (Actifs)": "1",
            "50 canons (Actifs)": "2",
            "Navires d’escortes": "62",
            "Frégates": "22",
            "Corvettes-Brig-Sloops-chébeqs": "16",
            "Sloops-Goelettes-shooners": "24",
            "Navires d’escortes actifs": "10",
            "Frégates (Actifs)": "5",
            "Corvettes- (Actifs)": "3",
            "Sloops-Goelettes-shooners (Actifs)": "2",
            "Enseignes de vaisseaux": "231",
            "Capitaine de frégate": "66",
            "Lieutenants de vaisseaux": "175",
            "Capitaines de vaisseaux": "76",
            "Contre-amiraux": "15",
            "Vice-amiraux": "8",
            "Ecoles navales": "1",
            "Elèves": "95",
            "Construction de vaisseaux": "5",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "2",
            "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "6",
            "Constructions navales (frégates)": "3",
            "Constructions navales Bricks-Corvettes": "2",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "16",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "3",
            "Nombre d’ouvriers": "6 720",
            "Coût construction navires": "8 120 000",
            "Entretien et approvisionnement des navires": "1 745 154",
            "Entretien et approvisionnement des arsenaux": "1 363 400",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 030 500",
            "Navires de pêche": "523",
            "Navires marchands totaux": "1 092",
            "Cabotage (5 à 50 tonneaux)": "508",
            "Grand cabotage (50-100 tonneaux)": "317",
            "Commerce de haute mer (100-250 tonneaux)": "144",
            "Grand commerce (+ 250 tonneaux)": "123",
            "production navires marchands": "51",
            "Cabotage (5 à 50 tonneaux) (Prod)": "28",
            "Grand cabotage (50-100 tonneaux) (Prod)": "14",
            "Commerce de haute mer (100-200 tonneaux)": "5",
            "Grand commerce (+ 200 tonneaux)": "4",
            "Fourrures (en pièces)": "48 450",
            "Coton (en kg)": "1 875 400",
            "Commerce estimé en livres tournois": "73 323 146",
            "Taxes": "7 332 315",
            "Droits de mouillage": "18 848 938",
            "Manufactures (textiles verreries imprimeries etc)": "118",
            "Production de fer (T)": "98 230",
            "Production de Fonte (T)": "4 340",
            "Production de cuivre (quintaux)": "34 620",
            "Production d'argent (Kg)": "51 840",
            "Production fusils": "165 000",
            "Production de canons": "600",
            "Production de canons navals": "450",
            "Production de poudre (T)": "150 000",
            "Industrie production en valeur": "142 856 500",
            "Taxe industrie": "19 104 969",
            "Nombre de manufactures d’armes ou arsenaux": "15",
            "Ouvriers": "1 020",
            "Reste après besoin en fusils (dans l’armée et marine)": "14 774",
            "Fusils (dans l'armée ou en réserve)": "14 774",
            "Besoin de canons navals": "532",
            "Réserve de canons navals": "-82",
            "Superficie du territoire en forêt": "48,12 %",
            "Production bois (Mcube)": "54 101 000",
            "Consommation de bois": "46 792 250",
            "Si excédent, vente ou achat si quantité insuffisante": "73 087 500",
            "Taxes sur les excédents": "3 654 375",
            "Nombre d’hectares de blé": "23 932 000",
            "production blé par an (en quintaux)": "171 113 800",
            "Consommation": "132 329 000",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "570 522 000",
            "Taxes sur les excédents (Blé)": "11 410 440",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "7 720 000",
            "Production légumes:etc": "57 900 000",
            "Consommation (Légumes)": "44 365 000",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "81 210 000",
            "Taxes sur les excédents (Légumes)": "1 624 200",
            "Nombre d’hectares de vigne": "1 544 000",
            "Production vin (hectolitres)": "21 616 000",
            "Consommation (Vin)": "21 015 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "21 870 000",
            "Taxes sur les excédents (Vin)": "546 750",
            "Nombre d’hectares pour l’élevage": "54 040 000",
            "Recettes totales Pays": "223 757 493",
            "Dépenses totales": "224 782 910",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "12 000 000",
            "Coût maison du roi": "21 070 800",
            "Trésor": "8 974 582",
            "Dette": "0",
            "Excédent": "10 974 582",
            "Dette ou excédent en pourcentage des recettes": "4,90 %",
            "Charge de la dette": "0,0"
        }
    },
    "Arch Charles": {
        "nom": "Arch Charles",
        "RAW_DATA": {
            "Population": "20 537 000",
            "Total population métropolitaine": "20 537 000",
            "Superficie métropole (km²)": "734 000",
            "Densité de population": "27,98",
            "Recettes fiscales (en livres tournois)": "184 860 978",
            "Impôts directs": "55 016 326",
            "Impôt foncier": "30 590 067",
            "Impôt sur le mobilier": "9 960 445",
            "Patente": "14 465 814",
            "Impôts indirects": "129 844 652",
            "Gabelle": "11 295 350",
            "Aides/autres impôts indirects": "44 154 550",
            "Enregistrement/successions": "56 476 750",
            "Douanes": "12 544 154",
            "Lotteries": "5 373 848",
            "Revenu national brut": "5 561 830 340",
            "Revenu moyen par hab": "270,82",
            "Dépenses militaires": "160 232 215",
            "Soldes": "52 944 577",
            "Salaires soldats": "33 993 244",
            "Salaires officiers": "18 951 333",
            "Salaires annuels soldats réguliers": "125,00",
            "Salaires conscrits": "117,00",
            "Salaires annuels sous-officiers": "228,50",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 150,00",
            "Salaires lieutenants-colonels": "2 550,00",
            "Salaires colonels": "3 500,00",
            "Salaires généraux de brigade": "9 000,00",
            "Salaires généraux de division": "14 500,00",
            "Coût administration de la Guerre": "91 718 543",
            "Entretien des places": "7 393 200",
            "Budget de construction de places": "3 527 500",
            "Besoin en rations quotidiennes": "46 004 295",
            "Coût achat uniforme": "3 373 936",
            "Domaine de l’État (fermes en H ou bois)": "1 835 000",
            "Revenus des domaines": "14 588 250",
            "Coût fonctionnement Etat": "12 350 886",
            "Nombre d'administrateurs totaux": "10 223",
            "Secrétaires et administrations des ministères": "1 408",
            "Secrétaires et administrations des provinces/départements": "703",
            "Percepteurs d’impôts/douaniers/etc": "2 876",
            "Juges/chancellerie/etc": "703",
            "Préfets / gouverneurs": "37",
            "Sous-préfets/etc": "0",
            "Parlementaires": "185",
            "Personnels parlement": "648",
            "Personnel des armées": "3 664",
            "Nombre de départements / provinces": "37",
            "Secrétaires d'Etat": "8",
            "Gouverneurs / intendants / préfets": "37",
            "Coût des ministres et gouverneurs / préfets / intendants": "501 000",
            "Nombre de bâtiments à construire": "3",
            "Construction kilomètres de routes": "174",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 677 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "15",
            "Nombre de villes (20 000- 5000)": "64",
            "Nombre de maires choisis par l’État": "80",
            "nombre de conseillers municipaux": "480",
            "Coûts fonctionnements villes": "392 000",
            "Revenus des villes": "275 082",
            "Nombre d’Universités": "16",
            "Nombre de lycées": "214",
            "Nombre d’écoles primaires": "1 208",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "146 693",
            "Années de service": "6",
            "Recrues « maximum » sur les années de service": "880 157",
            "Engagés réels": "199 931",
            "Nombre de soldats totaux": "199 931",
            "Pensionnaires, retraités ou demi-soldes": "17 059",
            "Entraînement par mois(manœuvres, tirs)": "15",
            "Coût": "4 648 395",
            "Nombre de compagnies d’artillerie par division d’infanterie": "3",
            "Nombre de compagnies d’artillerie à cheval": "13",
            "Nombre de compagnies d’artillerie totale": "58",
            "Nombre régiments artillerie": "8,4",
            "Nombre de canons de l’armée de campagne": "596",
            "Garde (Infanterie) régiment": "2,50",
            "Grenadiers": "1,50",
            "Tirailleurs-grenadiers": "1,00",
            "Garde (Cavalerie)": "2,00",
            "Dragons": "1,00",
            "Grenadiers à cheval": "1,00",
            "Artillerie de la garde": "1,00",
            "Compagnies d’artilleries de la garde": "8,00",
            "Nombre soldats Garde": "9 200",
            "Infanterie de la Garde": "6 000",
            "Cavalerie de la garde": "1 800",
            "Artillerie de la garde (canons)": "120",
            "Soldats dans une compagnie": "180,0",
            "Sous-officiers et caporaux dans une compagnie": "20,0",
            "Total": "200,0",
            "Soldats dans un bataillon": "720,0",
            "Sous-officiers et caporaux": "80,0",
            "Soldats dans un régiment (pied de paix)": "1 440,0",
            "Sous-officiers et caporaux (Régiment Paix)": "320,0",
            "Soldats dans un régiment (pied de guerre)": "3 200,0",
            "Soldats dans une division": "4 320,0",
            "Sous-officiers et caporaux (Division)": "960,0",
            "Division sur pied de guerre": "9 600,0",
            "Nombre de Régiments de ligne": "42,0",
            "Régiments de grenadiers": "8,0",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "10,0",
            "Nombre de régiments": "60,0",
            "Nombre de bataillons": "240,0",
            "Nombre de divisions": "20,0",
            "Fantassins (dont sous-officiers)": "105 600",
            "Fantassins recrutés (conscription)": "29 339",
            "(Soldats manquants pour le pied de guerre )": "-57 061",
            "Cavaliers dans un escadron": "175,0",
            "Sous-officiers et caporaux dans un escadron": "25,0",
            "Cavaliers dans un régiment": "800,0",
            "Régiments de hussards": "20,0",
            "Régiments de Uhlans/chevau-légers": "8,0",
            "Régiments de dragons": "16,0",
            "Régiments de cuirassiers": "8,0",
            "Nombre total de régiments": "52,0",
            "Régiments de cavalerie légère": "20,0",
            "Régiments de cavalerie polyvalente": "24,0",
            "Régiments de cavalerie lourde": "8,0",
            "Cavaliers dans une division de cavalerie": "3 200,0",
            "Nombre de divisions": "13,0",
            "Cavaliers": "41 600,0",
            "Armée permanente et garnison": "170 592",
            "Conscription": "29 339",
            "Canons": "6 281",
            "Rappel Dont canons de campagne": "596",
            "Infanterie": "134 939",
            "Proportion Cavalerie/infanterie": "30,83 %",
            "Artilleurs": "22 369",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "29 339",
            "Part sur les 1/140e": "20,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "163 111",
            "Besoin militaire": "68 006",
            "Excédent ou déficit": "95 105",
            "Achat chevaux": "21 092 433",
            "Chevaux officiers": "14 493",
            "Chevaux cavalerie": "41 600",
            "Forteresses": "65",
            "Forteresses 1ère classe": "2",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "54",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "38",
            "Forts – Poste militaire": "55",
            "Construction de places de premier rang": "1",
            "Construction de places de second rang": "2",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "179",
            "Capacité de casernement": "47 500",
            "Soldats non logés (logement chez l’habitant)": "151 408",
            "Coût du logement": "8 327 416",
            "Construction de casernes": "68",
            "Coût (construction + entretien )": "2 147 500",
            "Artillerie des côtes": "61",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "8 935",
            "Capitaines": "2 978",
            "Lieutenants-colonels, chef d’escadrons et majors": "1 213",
            "Colonels": "476",
            "Généraux de brigade": "224",
            "Généraux de division": "141",
            "Total officiers": "13 968",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "321",
            "Milices/garde nationale": "136 913",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "274",
            "Fusils disponibles": "45 000",
            "Divisions militaires": "17",
            "Pensions (familles, récompenses des généraux, etc)": "1 643",
            "Pensions": "4 189 548",
            "Maréchaussée/gendarmerie/police": "9 335",
            "Coût maréchaussée": "2 987 200",
            "Messagers/personnels des postes": "3 746",
            "Coût (Poste)": "1 779 271",
            "Budget naval": "11 745 788",
            "Personnel administratif de la marine": "167",
            "Nombre de marins": "115",
            "Nombre de troupes de marines dans les navires": "20",
            "Salaires des marins": "100,25",
            "Salaires et pensions pour des marins": "13 646",
            "Salaires des officiers (Marine)": "18 200",
            "Nombre de marins dans la marine marchande": "6 453",
            "Pêcheurs": "2 004",
            "Navires de transport": "1",
            "Coût colonisation": "22 800",
            "Population proche du littoral (-80km) et sur les fleuves": "1 836 800",
            "Réservoir de marins": "24 491",
            "Marins effectifs": "8 572",
            "Marins encore disponibles": "15 918",
            "Navires de ligne": "0",
            "Navires d’escortes": "6",
            "Corvettes-Brig-Sloops-chébeqs": "3",
            "Sloops-Goelettes-shooners": "3",
            "Navires d’escortes actifs": "1",
            "Corvettes- (Actifs)": "1",
            "Enseignes de vaisseaux": "7",
            "Lieutenants de vaisseaux": "3",
            "Ecoles navales": "1",
            "Elèves": "7",
            "Construction de navires légers": "2",
            "Constructions navales (frégates)": "1",
            "Constructions navales Bricks-Corvettes": "1",
            "Bâtiments de la Marine": "4",
            "Petits arsenaux": "2",
            "Nombre d’ouvriers": "400",
            "Coût construction navires": "975 000",
            "Entretien et approvisionnement des navires": "21 310",
            "Entretien et approvisionnement des arsenaux": "217 800",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "370 000",
            "Navires de pêche": "334",
            "Navires marchands totaux": "523",
            "Cabotage (5 à 50 tonneaux)": "327",
            "Grand cabotage (50-100 tonneaux)": "101",
            "Commerce de haute mer (100-250 tonneaux)": "51",
            "Grand commerce (+ 250 tonneaux)": "44",
            "production navires marchands": "25",
            "Cabotage (5 à 50 tonneaux) (Prod)": "11",
            "Grand cabotage (50-100 tonneaux) (Prod)": "6",
            "Commerce de haute mer (100-200 tonneaux)": "4",
            "Grand commerce (+ 200 tonneaux)": "4",
            "Coton (en kg)": "354 000",
            "Commerce estimé en livres tournois": "28 939 661",
            "Taxes": "2 893 966",
            "Droits de mouillage": "9 650 188",
            "Manufactures (textiles verreries imprimeries etc)": "95",
            "Production de fer (T)": "20 450",
            "Production de cuivre (quintaux)": "19 710",
            "Production d'argent (Kg)": "76 140",
            "Production fusils": "135 000",
            "Production de canons": "600",
            "Production de canons navals": "120",
            "Production de poudre (T)": "120 000",
            "Industrie production en valeur": "60 214 000",
            "Taxe industrie": "14 465 814",
            "Nombre de manufactures d’armes ou arsenaux": "14",
            "Ouvriers": "768",
            "Reste après besoin en fusils (dans l’armée et marine)": "-15 590",
            "Fusils (dans l'armée ou en réserve)": "-15 590",
            "Besoin de canons navals": "62",
            "Réserve de canons navals": "58",
            "Superficie du territoire en forêt": "33,76 %",
            "Production bois (Mcube)": "32 810 300",
            "Consommation de bois": "20 567 750",
            "Si excédent, vente ou achat si quantité insuffisante": "122 425 500",
            "Taxes sur les excédents": "6 733 403",
            "Nombre d’hectares de blé": "7 064 750",
            "production blé par an (en quintaux)": "52 985 625",
            "Consommation": "42 360 750",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "148 123 125",
            "Taxes sur les excédents (Blé)": "1 481 231",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "2 789 200",
            "Production légumes:etc": "20 919 000",
            "Consommation (Légumes)": "19 510 150",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "8 453 100",
            "Taxes sur les excédents (Légumes)": "169 062",
            "Nombre d’hectares de vigne": "629 772",
            "Production vin (hectolitres)": "16 059 186",
            "Consommation (Vin)": "15 402 750",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "24 364 620",
            "Taxes sur les excédents (Vin)": "609 116",
            "Nombre d’hectares pour l’élevage": "5 138 000",
            "Recettes totales Pays": "208 442 039",
            "Dépenses totales": "201 999 970",
            "Coût maison du roi": "8 045 000",
            "Trésor": "10 442 069",
            "Dette": "0",
            "Excédent": "6 442 069",
            "Dette ou excédent en pourcentage des recettes": "3,09 %",
            "Charge de la dette": "0,0"
        }
    },
    "Eugène de Savoie": {
        "nom": "Eugène de Savoie",
        "RAW_DATA": {
            "Population": "11 609 000",
            "Total population métropolitaine": "11 609 000",
            "Superficie métropole (km²)": "711 000",
            "Densité de population": "16,33",
            "Recettes fiscales (en livres tournois)": "74 374 684",
            "Impôts directs": "21 550 944",
            "Impôt foncier": "12 949 956",
            "Impôt sur le mobilier": "3 192 475",
            "Patente": "5 408 514",
            "Impôts indirects": "52 823 739",
            "Gabelle": "11 609 000",
            "Aides/autres impôts indirects": "26 120 250",
            "Enregistrement/successions": "8 779 306",
            "Douanes": "4 186 866",
            "Lotteries": "2 128 317",
            "Revenu national brut": "2 354 537 380",
            "Revenu moyen par hab": "202,82",
            "Dépenses militaires": "60 153 609",
            "Soldes": "18 727 197",
            "Salaires soldats": "11 402 229",
            "Salaires officiers": "7 324 968",
            "Salaires annuels soldats réguliers": "105,50",
            "Salaires conscrits": "100,25",
            "Salaires annuels sous-officiers": "197,40",
            "Salaires lieutenants": "550,00",
            "Salaires capitaines": "975,55",
            "Salaires lieutenants-colonels": "2 200,00",
            "Salaires colonels": "3 050,00",
            "Salaires généraux de brigade": "7 000,00",
            "Salaires généraux de division": "10 500,00",
            "Coût administration de la Guerre": "33 953 128",
            "Entretien des places": "6 190 800",
            "Budget de construction de places": "26 250",
            "Besoin en rations quotidiennes": "17 017 723",
            "Coût achat uniforme": "953 596",
            "Domaine de l’État (fermes en H ou bois)": "1 580 000",
            "Revenus des domaines": "9 875 000",
            "Coût fonctionnement Etat": "5 858 170",
            "Nombre d'administrateurs totaux": "6 216",
            "Secrétaires et administrations des ministères": "1 060",
            "Secrétaires et administrations des provinces/départements": "540",
            "Percepteurs d’impôts/douaniers/etc": "1 352",
            "Juges/chancellerie/etc": "513",
            "Préfets / gouverneurs": "27",
            "Sous-préfets/etc": "0",
            "Parlementaires": "108",
            "Personnels parlement": "540",
            "Personnel des armées": "2 076",
            "Nombre de départements / provinces": "27",
            "Secrétaires d'Etat": "10",
            "Gouverneurs / intendants / préfets": "27",
            "Coût des ministres et gouverneurs / préfets / intendants": "498 400",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "124",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 192 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "4",
            "Nombre de villes (20 000- 5000)": "48",
            "Nombre de maires choisis par l’État": "53",
            "nombre de conseillers municipaux": "424",
            "Coûts fonctionnements villes": "333 900",
            "Revenus des villes": "107 755",
            "Nombre d’Universités": "5",
            "Nombre de lycées": "127",
            "Nombre d’écoles primaires": "823",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "82 921",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "248 764",
            "Engagés réels": "81 047",
            "Nombre de soldats totaux": "81 047",
            "Pensionnaires, retraités ou demi-soldes": "7 276",
            "Entraînement par mois(manœuvres, tirs)": "10",
            "Coût": "1 256 233",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de compagnies d’artillerie à cheval": "5",
            "Nombre de compagnies d’artillerie totale": "26",
            "Nombre régiments artillerie": "4,7",
            "Nombre de canons de l’armée de campagne": "324",
            "Garde (Infanterie) régiment": "2,00",
            "Dont vélites": "0,50",
            "Grenadiers": "1,50",
            "Garde (Cavalerie)": "3,75",
            "dont chasseurs à cheval": "1,00",
            "Dragons": "1,50",
            "Grenadiers à cheval": "0,50",
            "Lanciers": "0,75",
            "Artillerie de la garde": "1,00",
            "Compagnies d’artilleries de la garde": "8,00",
            "Nombre soldats Garde": "9 575",
            "Infanterie de la Garde": "4 800",
            "Cavalerie de la garde": "3 375",
            "Artillerie de la garde (canons)": "120",
            "Soldats dans une compagnie": "125,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "140,0",
            "Soldats dans un bataillon": "500,0",
            "Sous-officiers et caporaux": "60,0",
            "Soldats dans un régiment (pied de paix)": "750,0",
            "Sous-officiers et caporaux (Régiment Paix)": "180,0",
            "Soldats dans un régiment (pied de guerre)": "1 680,0",
            "Soldats dans une division": "2 250,0",
            "Sous-officiers et caporaux (Division)": "540,0",
            "Division sur pied de guerre": "5 040,0",
            "Nombre de Régiments de ligne": "32,0",
            "Régiments de grenadiers": "6,5",
            "Régiments de génie": "0,75",
            "Régiments d’infanterie légère": "4,0",
            "Nombre de régiments": "42,5",
            "Nombre de bataillons": "127,5",
            "Fantassins (dont sous-officiers)": "39 525",
            "Fantassins recrutés (conscription)": "8 292",
            "(Soldats manquants pour le pied de guerre )": "-23 583",
            "Cavaliers dans un escadron": "105,0",
            "Sous-officiers et caporaux dans un escadron": "20,0",
            "Cavaliers dans un régiment": "625,0",
            "Régiments de hussards": "10,0",
            "Régiments de dragons": "6,0",
            "Régiments de cuirassiers": "2,5",
            "Nombre total de régiments": "18,5",
            "Régiments de cavalerie légère": "10,0",
            "Régiments de cavalerie polyvalente": "6,0",
            "Régiments de cavalerie lourde": "2,5",
            "Cavaliers dans une division de cavalerie": "2 500,0",
            "Nombre de divisions": "4,6",
            "Cavaliers": "11 562,5",
            "Armée permanente et garnison": "72 755",
            "Conscription": "8 292",
            "Canons": "5 421",
            "Rappel Dont canons de campagne": "324",
            "Infanterie": "47 817",
            "Proportion Cavalerie/infanterie": "24,18 %",
            "Artilleurs": "15 721",
            "Corps du génie (nombre de soldats)": "888",
            "Levée pour cette année (appelés de conscription)": "8 292",
            "Part sur les 1/140e": "10,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "142 200",
            "Besoin militaire": "24 507",
            "Excédent ou déficit": "117 693",
            "Achat chevaux": "-740 961",
            "Chevaux officiers": "7 893",
            "Chevaux cavalerie": "11 563",
            "Forteresses": "56",
            "Forteresses 1ère classe": "2",
            "Forteresses 2e classe": "6",
            "Forteresses 3e et 4e classe": "48",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "31",
            "Forts – Poste militaire": "54",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "146",
            "Capacité de casernement": "39 200",
            "Soldats non logés (logement chez l’habitant)": "35 900",
            "Coût du logement": "1 974 515",
            "Coût (construction + entretien )": "365 000",
            "Artillerie des côtes": "55",
            "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "3 368",
            "Capitaines": "1 684",
            "Lieutenants-colonels, chef d’escadrons et majors": "696",
            "Colonels": "278",
            "Généraux de brigade": "97",
            "Généraux de division": "74",
            "Total officiers": "6 196",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "345",
            "Milices/garde nationale": "77 393",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "155",
            "Fusils disponibles": "4 000",
            "Divisions militaires": "17",
            "Pensions (familles, récompenses des généraux, etc)": "1 277",
            "Pensions": "2 579 520",
            "Maréchaussée/gendarmerie/police": "5 277",
            "Coût maréchaussée": "1 638 716",
            "Messagers/personnels des postes": "2 262",
            "Coût (Poste)": "1 074 371",
            "Budget naval": "8 378 895",
            "Personnel administratif de la marine": "175",
            "Nombre de marins": "76",
            "Nombre de troupes de marines dans les navires": "10",
            "Salaires des marins": "102,25",
            "Salaires et pensions pour des marins": "9 139",
            "Salaires des officiers (Marine)": "12 500",
            "Nombre de marins dans la marine marchande": "2 079",
            "Pêcheurs": "1 174",
            "Navires de transport": "2",
            "Coût colonisation": "76 000",
            "Population proche du littoral (-80km) et sur les fleuves": "1 565 800",
            "Réservoir de marins": "20 877",
            "Marins effectifs": "7 505",
            "Marins encore disponibles": "13 373",
            "Navires de ligne": "0",
            "Navires d’escortes": "4",
            "Corvettes-Brig-Sloops-chébeqs": "2",
            "Sloops-Goelettes-shooners": "2",
            "Navires d’escortes actifs": "1",
            "Sloops-Goelettes-shooners (Actifs)": "1",
            "Enseignes de vaisseaux": "5",
            "Lieutenants de vaisseaux": "2",
            "Ecoles navales": "0",
            "Elèves": "0",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Frégates ou navires d’escorte en radoub": "0",
            "Bâtiments de la Marine": "2",
            "Petits arsenaux": "1",
            "Nombre d’ouvriers": "180",
            "Coût construction navires": "120 000",
            "Entretien et approvisionnement des navires": "16 310",
            "Entretien et approvisionnement des arsenaux": "108 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "151 000",
            "Navires de pêche": "196",
            "Navires marchands totaux": "132",
            "Cabotage (5 à 50 tonneaux)": "81",
            "Grand cabotage (50-100 tonneaux)": "24",
            "Commerce de haute mer (100-250 tonneaux)": "6",
            "Grand commerce (+ 250 tonneaux)": "21",
            "production navires marchands": "8",
            "Cabotage (5 à 50 tonneaux) (Prod)": "5",
            "Grand cabotage (50-100 tonneaux) (Prod)": "3",
            "Commerce estimé en livres tournois": "9 129 903",
            "Taxes": "829 991",
            "Droits de mouillage": "3 356 875",
            "Manufactures (textiles verreries imprimeries etc)": "48",
            "Production de fer (T)": "5 880",
            "Production de cuivre (quintaux)": "6 430",
            "Production d'argent (Kg)": "15 350",
            "Production fusils": "125 000",
            "Production de canons": "400",
            "Production de canons navals": "50",
            "Production de poudre (T)": "100 000",
            "Industrie production en valeur": "29 538 000",
            "Taxe industrie": "5 408 514",
            "Nombre de manufactures d’armes ou arsenaux": "10",
            "Ouvriers": "1 070",
            "Reste après besoin en fusils (dans l’armée et marine)": "75 022",
            "Fusils (dans l'armée ou en réserve)": "75 022",
            "Besoin de canons navals": "14",
            "Réserve de canons navals": "36",
            "Superficie du territoire en forêt": "31,10 %",
            "Production bois (Mcube)": "14 715 370",
            "Consommation de bois": "11 621 000",
            "Si excédent, vente ou achat si quantité insuffisante": "30 943 700",
            "Taxes sur les excédents": "3 094 370",
            "Nombre d’hectares de blé": "5 430 618",
            "production blé par an (en quintaux)": "27 967 683",
            "Consommation": "25 707 100",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "22 658 741",
            "Taxes sur les excédents (Blé)": "339 881",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "2 559 600",
            "Production légumes:etc": "14 717 700",
            "Consommation (Légumes)": "11 028 550",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "22 134 900",
            "Taxes sur les excédents (Légumes)": "442 698",
            "Nombre d’hectares de vigne": "639 900",
            "Production vin (hectolitres)": "8 030 745",
            "Consommation (Vin)": "8 126 300",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-4 299 975",
            "Taxes sur les excédents (Vin)": "-107 499",
            "Nombre d’hectares pour l’élevage": "4 977 000",
            "Recettes totales Pays": "88 126 633",
            "Dépenses totales": "87 271 878",
            "Coût maison du roi": "6 540 000",
            "Trésor": "10 854 754",
            "Dette": "0",
            "Excédent": "4 854 754",
            "Dette ou excédent en pourcentage des recettes": "5,51 %",
            "Charge de la dette": "0,0"
        }
    }, 

    "Soliman": {
        "nom": "Soliman",
        "RAW_DATA": {
            "Population": "14 920 000",
            "Population des colonies": "0",
            "Total population métropolitaine": "14 920 000",
            "Superficie métropole (km²)": "1 920 000",
            "Densité de population": "7,77",
            "Recettes fiscales (en livres tournois)": "68 553 694",
            "Impôts directs": "16 914 845",
            "Impôt foncier": "11 965 989",
            "Impôt sur le mobilier": "746 000",
            "Patente": "4 202 856",
            "Impôts indirects": "51 638 850",
            "Gabelle": "18 650 000",
            "Aides/autres impôts indirects": "12 682 000",
            "Enregistrement/successions": "13 055 000",
            "Douanes": "7 127 516",
            "Lotteries": "124 333",
            "Revenu national brut": "2 175 634 400",
            "Revenu moyen par hab": "145,82",
            "Dépenses militaires": "51 690 850",
            "Soldes": "13 048 331",
            "Salaires soldats": "9 289 970",
            "Salaires officiers": "3 758 361",
            "Salaires annuels soldats réguliers": "80,00",
            "Salaires conscrits": "55,00",
            "Salaires annuels sous-officiers": "148,50",
            "Salaires lieutenants": "450,00",
            "Salaires capitaines": "675,00",
            "Salaires lieutenants-colonels": "1 350,00",
            "Salaires colonels": "2 100,00",
            "Salaires généraux de brigade": "4 250,00",
            "Salaires généraux de division": "7 000,00",
            "Coût administration de la Guerre": "33 170 952",
            "Entretien des places": "4 956 000",
            "Budget de construction de places": "105 000",
            "Besoin en rations quotidiennes": "19 505 422",
            "Coût achat uniforme": "1 021 310",
            "Domaine de l’État (fermes en H ou bois)": "4 800 000",
            "Revenus des domaines": "28 800 000",
            "Coût fonctionnement Etat": "10 265 166",
            "Nombre d'administrateurs totaux": "15 074",
            "Secrétaires et administrations des ministères": "3 924",
            "Secrétaires et administrations des provinces/départements": "989",
            "Percepteurs d’impôts/douaniers/etc": "4 187",
            "Juges/chancellerie/etc": "817",
            "Préfets / gouverneurs": "43",
            "Sous-préfets/etc": "0",
            "Parlementaires": "172",
            "Personnels parlement": "1 720",
            "Personnel des armées": "3 222",
            "Nombre de départements / provinces": "43",
            "Secrétaires d'Etat": "9",
            "Gouverneurs / intendants / préfets": "43",
            "Coût des ministres et gouverneurs / préfets / intendants": "698 000",
            "Nombre de bâtiments à construire": "3",
            "Construction kilomètres de routes": "181",
            "Construction de ponts": "0",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 703 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "9",
            "Nombre de villes (20 000- 5000)": "83",
            "Nombre de maires choisis par l’État": "93",
            "nombre de conseillers municipaux": "744",
            "Coûts fonctionnements villes": "585 900",
            "Revenus des villes": "84 574",
            "Nombre d’Universités": "10",
            "Nombre de lycées": "222",
            "Nombre d’écoles primaires": "1 385",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "106 571",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "319 714",
            "Engagés réels": "88 294",
            "Nombre de soldats totaux": "88 294",
            "Pensionnaires, retraités ou demi-soldes": "7 941",
            "Entraînement par mois(manœuvres, tirs)": "3",
            "Coût": "410 567",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de compagnies d’artillerie à cheval": "4",
            "Nombre de compagnies d’artillerie totale": "19",
            "Nombre régiments artillerie": "5,1",
            "Garde (Infanterie) régiment": "5,00",
            "Dont vélites": "5,00",
            "Garde (Cavalerie)": "6,00",
            "Lanciers": "6,00",
            "Nombre soldats Garde": "17 400",
            "Infanterie de la Garde": "12 000",
            "Cavalerie de la garde": "5 400",
            "Soldats dans une compagnie": "250,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "265,0",
            "Soldats dans un bataillon": "750,0",
            "Sous-officiers et caporaux": "45,0",
            "Soldats dans un régiment (pied de paix)": "750,0",
            "Sous-officiers et caporaux (Régiment Paix)": "90,0",
            "Soldats dans un régiment (pied de guerre)": "2 385,0",
            "Soldats dans une division": "2 250,0",
            "Sous-officiers et caporaux (Division)": "270,0",
            "Division sur pied de guerre": "7 155,0",
            "Nombre de Régiments de ligne": "20,0",
            "Régiments de grenadiers": "8,0",
            "Régiments de génie": "0,75",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "30,0",
            "Nombre de bataillons": "90,0",
            "Fantassins (dont sous-officiers)": "25 200",
            "Fantassins recrutés (conscription)": "8 881",
            "(Soldats manquants pour le pied de guerre )": "-37 469",
            "Cavaliers dans un escadron": "65,0",
            "Sous-officiers et caporaux dans un escadron": "7,0",
            "Cavaliers dans un régiment": "576,0",
            "Régiments de Uhlans/chevau-légers": "35,0",
            "Régiments de cuirassiers": "10,0",
            "Nombre total de régiments": "45,0",
            "Régiments de cavalerie polyvalente": "35,0",
            "Régiments de cavalerie lourde": "10,0",
            "Cavaliers dans une division de cavalerie": "2 304,0",
            "Nombre de divisions": "11,3",
            "Cavaliers": "25 920,0",
            "Armée permanente et garnison": "79 413",
            "Conscription": "8 881",
            "Canons": "4 712",
            "Rappel Dont canons de campagne": "394",
            "Infanterie": "34 081",
            "Proportion Cavalerie/infanterie": "76,05 %",
            "Artilleurs": "15 483",
            "Corps du génie (nombre de soldats)": "888",
            "Levée pour cette année (appelés de conscription)": "8 881",
            "Part sur les 1/140e": "8,33 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "320 000",
            "Besoin militaire": "37 289",
            "Excédent ou déficit": "282 711",
            "Achat chevaux": "2 644 270",
            "Chevaux officiers": "8 506",
            "Chevaux cavalerie": "25 920",
            "Forteresses": "50",
            "Forteresses 1ère classe": "1",
            "Forteresses 2e classe": "5",
            "Forteresses 3e et 4e classe": "44",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "29",
            "Forts – Poste militaire": "81",
            "Nombre de casernes (1 caserne = 250 logements)": "127",
            "Capacité de casernement": "35 800",
            "Soldats non logés (logement chez l’habitant)": "39 684",
            "Coût du logement": "2 182 631",
            "Coût (construction + entretien )": "317 500",
            "Artillerie des côtes": "88",
            "Constructions petites fortifications/fortifications côtières": "4",
            "Lieutenants": "1 431",
            "Capitaines": "1 431",
            "Lieutenants-colonels, chef d’escadrons et majors": "602",
            "Colonels": "257",
            "Généraux de brigade": "96",
            "Généraux de division": "55",
            "Total officiers": "3 872",
            "Nombre d'écoles militaires (armée)": "1",
            "Nombre d'élèves": "135",
            "Milices/garde nationale": "37 300",
            "Proportion par rapport à la population": "1/200",
            "Nombre de cohortes de Milices": "75",
            "Fusils disponibles": "5 000",
            "Divisions militaires": "12",
            "Pensions (familles, récompenses des généraux, etc)": "1 492",
            "Pensions": "2 297 680",
            "Maréchaussée/gendarmerie/police": "7 460",
            "Coût maréchaussée": "1 506 920",
            "Messagers/personnels des postes": "2 789",
            "Coût (Poste)": "560 522",
            "Budget naval": "20 714 914",
            "Personnel administratif de la marine": "317",
            "Nombre de marins": "3 050",
            "Nombre de troupes de marines dans les navires": "300",
            "Salaires des marins": "80,25",
            "Salaires et pensions pour des marins": "400 203",
            "Salaires des officiers (Marine)": "1 094 800",
            "Nombre de marins dans la marine marchande": "6 755",
            "Pêcheurs": "5 712",
            "Navires de transport": "0",
            "Coût colonisation": "0",
            "Population proche du littoral (-80km) et sur les fleuves": "4 760 100",
            "Réservoir de marins": "63 468",
            "Marins effectifs": "15 517",
            "Marins encore disponibles": "47 951",
            "Navires de ligne": "23",
            "80 canons": "2",
            "74 canons": "6",
            "64 canons": "11",
            "50 canons": "4",
            "Navires de ligne actifs/armés": "2",
            "50 canons (Actifs)": "2",
            "Navires d’escortes": "89",
            "Frégates": "14",
            "Corvettes-Brig-Sloops-chébeqs": "28",
            "Sloops-Goelettes-shooners": "47",
            "Navires d’escortes actifs": "32",
            "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "10",
            "Sloops-Goelettes-shooners (Actifs)": "20",
            "Enseignes de vaisseaux": "202",
            "Capitaine de frégate": "37",
            "Lieutenants de vaisseaux": "109",
            "Capitaines de vaisseaux": "42",
            "Contre-amiraux": "8",
            "Vice-amiraux": "4",
            "Ecoles navales": "1",
            "Elèves": "40",
            "Construction de vaisseaux": "5",
            "Constructions navales (64-50 canons)": "5",
            "Construction de navires légers": "12",
            "Constructions navales (frégates)": "3",
            "Constructions navales Bricks-Corvettes": "3",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "6",
            "Navires de ligne en radoub": "0",
            "Frégates ou navires d’escorte en radoub": "0",
            "Bâtiments de la Marine": "8",
            "Petits arsenaux": "4",
            "Nombre d’ouvriers": "3 600",
            "Coût construction navires": "3 645 000",
            "Entretien et approvisionnement des navires": "836 549",
            "Entretien et approvisionnement des arsenaux": "435 600",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "134 000",
            "Navires de pêche": "952",
            "Navires marchands totaux": "559",
            "Cabotage (5 à 50 tonneaux)": "410",
            "Grand cabotage (50-100 tonneaux)": "54",
            "Commerce de haute mer (100-250 tonneaux)": "40",
            "Grand commerce (+ 250 tonneaux)": "55",
            "production navires marchands": "24",
            "Cabotage (5 à 50 tonneaux) (Prod)": "10",
            "Grand cabotage (50-100 tonneaux) (Prod)": "7",
            "Commerce de haute mer (100-200 tonneaux)": "7",
            "Sucre (en Kg)": "256 900",
            "Epices (en Kg)": "81 930",
            "Tabac (en kg)": "2 130",
            "Coton (en kg)": "742 000",
            "Indigo (en kg)": "123 100",
            "Commerce estimé en livres tournois": "35 008 369",
            "Taxes": "2 333 891",
            "Droits de mouillage": "4 793 625",
            "Manufactures (textiles verreries imprimeries etc)": "44",
            "Production de fer (T)": "2 900",
            "Production de cuivre (quintaux)": "3 500",
            "Production fusils": "62 500",
            "Production de canons": "200",
            "Production de canons navals": "94",
            "Production de poudre (T)": "50 000",
            "Industrie production en valeur": "17 960 000",
            "Taxe industrie": "4 202 856",
            "Nombre de manufactures d’armes ou arsenaux": "8",
            "Ouvriers": "190",
            "Reste après besoin en fusils (dans l’armée et marine)": "12 438",
            "Fusils (dans l'armée ou en réserve)": "12 438",
            "Besoin de canons navals": "590",
            "Réserve de canons navals": "-496",
            "Superficie du territoire en forêt": "28,71 %",
            "Production bois (Mcube)": "17 232 300",
            "Consommation de bois": "15 025 000",
            "Si excédent, vente ou achat si quantité insuffisante": "22 073 000",
            "Taxes sur les excédents": "2 207 300",
            "Nombre d’hectares de blé": "5 760 000",
            "production blé par an (en quintaux)": "34 560 000",
            "Consommation": "39 026 000",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-73 689 000",
            "Taxes sur les excédents (Blé)": "-736 890",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 920 000",
            "Production légumes:etc": "13 440 000",
            "Consommation (Légumes)": "14 174 000",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-4 404 000",
            "Taxes sur les excédents (Légumes)": "-88 080",
            "Nombre d’hectares de vigne": "288 000",
            "Production vin (hectolitres)": "4 896 000",
            "Consommation (Vin)": "5 222 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-14 670 000",
            "Taxes sur les excédents (Vin)": "-220 050",
            "Nombre d’hectares pour l’élevage": "13 440 000",
            "Recettes totales Pays": "99 560 994",
            "Dépenses totales": "97 857 992",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "4 000 000",
            "Coût maison du roi": "9 167 000",
            "Trésor": "8 703 003",
            "Dette": "0",
            "Excédent": "1 703 003",
            "Dette ou excédent en pourcentage des recettes": "1,71 %",
            "Charge de la dette": "0,0"
        }
    },
    "Nader Shah": {
        "nom": "Nader Shah",
        "RAW_DATA": {
            "Population": "7 070 000",
            "Total population métropolitaine": "7 070 000",
            "Superficie métropole (km²)": "825 000",
            "Densité de population": "8,57",
            "Recettes fiscales (en livres tournois)": "32 570 298",
            "Impôts directs": "6 900 939",
            "Impôt foncier": "3 686 015",
            "Impôt sur le mobilier": "2 014 950",
            "Patente": "1 199 974",
            "Impôts indirects": "25 669 359",
            "Gabelle": "15 200 500",
            "Aides/autres impôts indirects": "4 949 000",
            "Enregistrement/successions": "4 418 750",
            "Douanes": "1 077 542",
            "Lotteries": "23 567",
            "Revenu national brut": "921 503 800",
            "Revenu moyen par hab": "130,34",
            "Dépenses militaires": "20 426 003",
            "Soldes": "6 702 938",
            "Salaires soldats": "4 203 823",
            "Salaires officiers": "2 499 115",
            "Salaires annuels soldats réguliers": "90,15",
            "Salaires conscrits": "85,55",
            "Salaires annuels sous-officiers": "154,00",
            "Salaires lieutenants": "400,00",
            "Salaires capitaines": "750,00",
            "Salaires lieutenants-colonels": "1 700,00",
            "Salaires colonels": "2 850,00",
            "Salaires généraux de brigade": "5 000,00",
            "Salaires généraux de division": "8 000,00",
            "Coût administration de la Guerre": "12 555 402",
            "Besoin en rations quotidiennes": "12 525 273",
            "Coût achat uniforme": "967 917",
            "Domaine de l’État (fermes en H ou bois)": "1 650 000",
            "Revenus des domaines": "4 125 000",
            "Coût fonctionnement Etat": "2 809 965",
            "Nombre d'administrateurs totaux": "4 707",
            "Secrétaires et administrations des ministères": "1 744",
            "Secrétaires et administrations des provinces/départements": "230",
            "Percepteurs d’impôts/douaniers/etc": "1 147",
            "Juges/chancellerie/etc": "190",
            "Préfets / gouverneurs": "10",
            "Sous-préfets/etc": "0",
            "Parlementaires": "40",
            "Personnels parlement": "200",
            "Personnel des armées": "1 146",
            "Nombre de départements / provinces": "10",
            "Secrétaires d'Etat": "4",
            "Gouverneurs / intendants / préfets": "10",
            "Coût des ministres et gouverneurs / préfets / intendants": "230 000",
            "Nombre de bâtiments à construire": "1",
            "Construction kilomètres de routes": "57",
            "Construction de ponts": "0",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "370 000",
            "Nombre de villes (+ 100 000)": "0",
            "Nombre de ville (100 000 – 20 000)": "3",
            "Nombre de villes (20 000- 5000)": "40",
            "Nombre de maires choisis par l’État": "43",
            "nombre de conseillers municipaux": "172",
            "Coûts fonctionnements villes": "150 500",
            "Revenus des villes": "34 505",
            "Nombre d’Universités": "3",
            "Nombre de lycées": "95",
            "Nombre d’écoles primaires": "513",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "50 500",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "151 500",
            "Engagés réels": "51 891",
            "Nombre de soldats totaux": "51 891",
            "Pensionnaires, retraités ou demi-soldes": "4 347",
            "Entraînement par mois(manœuvres, tirs)": "2",
            "Coût": "160 863",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de compagnies d’artillerie à cheval": "6",
            "Nombre de compagnies d’artillerie totale": "13",
            "Nombre régiments artillerie": "2,6",
            "Nombre de canons de l’armée de campagne": "194",
            "Garde (Infanterie) régiment": "1,00",
            "Dont vélites": "1,00",
            "Garde (Cavalerie)": "3,00",
            "Lanciers": "3,00",
            "Nombre soldats Garde": "5 100",
            "Infanterie de la Garde": "2 400",
            "Cavalerie de la garde": "2 700",
            "Soldats dans une compagnie": "150,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "165,0",
            "Soldats dans un bataillon": "600,0",
            "Sous-officiers et caporaux": "60,0",
            "Soldats dans un régiment (pied de paix)": "1 200,0",
            "Sous-officiers et caporaux (Régiment Paix)": "180,0",
            "Soldats dans un régiment (pied de guerre)": "1 980,0",
            "Soldats dans une division": "3 600,0",
            "Sous-officiers et caporaux (Division)": "540,0",
            "Division sur pied de guerre": "5 940,0",
            "Nombre de Régiments de ligne": "10,0",
            "Régiments de grenadiers": "1,5",
            "Régiments de génie": "0,5",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "13,5",
            "Nombre de bataillons": "40,5",
            "Fantassins (dont sous-officiers)": "18 630",
            "Fantassins recrutés (conscription)": "8 417",
            "(Soldats manquants pour le pied de guerre )": "317",
            "Cavaliers dans un escadron": "95,0",
            "Sous-officiers et caporaux dans un escadron": "10,0",
            "Cavaliers dans un régiment": "630,0",
            "Régiments de Uhlans/chevau-légers": "25,0",
            "Nombre total de régiments": "25,0",
            "Régiments de cavalerie polyvalente": "25,0",
            "Cavaliers dans une division de cavalerie": "2 520,0",
            "Nombre de divisions": "6,3",
            "Cavaliers": "15 750,0",
            "Armée permanente et garnison": "43 475",
            "Conscription": "8 417",
            "Canons": "1 325",
            "Rappel Dont canons de campagne": "194",
            "Infanterie": "27 047",
            "Proportion Cavalerie/infanterie": "58,23 %",
            "Artilleurs": "6 423",
            "Corps du génie (nombre de soldats)": "592",
            "Levée pour cette année (appelés de conscription)": "8 417",
            "Part sur les 1/140e": "16,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "275 000",
            "Besoin militaire": "21 756",
            "Excédent ou déficit": "253 244",
            "Achat chevaux": "-2 871 998",
            "Chevaux officiers": "4 440",
            "Chevaux cavalerie": "15 750",
            "Forteresses": "17",
            "Forteresses 2e classe": "1",
            "Forteresses 3e et 4e classe": "5",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "11",
            "Forts – Poste militaire": "17",
            "Nombre de casernes (1 caserne = 250 logements)": "35",
            "Capacité de casernement": "9 600",
            "Soldats non logés (logement chez l’habitant)": "39 620",
            "Coût du logement": "2 179 082",
            "Coût (construction + entretien )": "87 500",
            "Artillerie des côtes": "7",
            "Lieutenants": "783",
            "Capitaines": "783",
            "Lieutenants-colonels, chef d’escadrons et majors": "336",
            "Colonels": "138",
            "Généraux de brigade": "55",
            "Généraux de division": "45",
            "Total officiers": "2 140",
            "Nombre d'écoles militaires (armée)": "1",
            "Nombre d'élèves": "50",
            "Milices/garde nationale": "47 133",
            "Proportion par rapport à la population": "1/150e",
            "Nombre de cohortes de Milices": "94",
            "Fusils disponibles": "2 000",
            "Divisions militaires": "5",
            "Pensions (familles, récompenses des généraux, etc)": "2 121",
            "Pensions": "4 263 210",
            "Maréchaussée/gendarmerie/police": "3 535",
            "Coût maréchaussée": "1 237 250",
            "Messagers/personnels des postes": "1 291",
            "Coût (Poste)": "368 030",
            "Budget naval": "2 047 084",
            "Personnel administratif de la marine": "105",
            "Nombre de marins": "204",
            "Nombre de troupes de marines dans les navires": "30",
            "Salaires des marins": "110,10",
            "Salaires et pensions pour des marins": "26 100",
            "Salaires des officiers (Marine)": "64 400",
            "Nombre de marins dans la marine marchande": "1 522",
            "Pêcheurs": "1 254",
            "Navires de transport": "3",
            "Coût colonisation": "123 500",
            "Population proche du littoral (-80km) et sur les fleuves": "1 045 000",
            "Réservoir de marins": "13 933",
            "Marins effectifs": "2 980",
            "Marins encore disponibles": "10 954",
            "Navires de ligne": "0",
            "Navires d’escortes": "13",
            "Frégates": "4",
            "Corvettes-Brig-Sloops-chébeqs": "5",
            "Sloops-Goelettes-shooners": "8",
            "Navires d’escortes actifs": "2",
            "Corvettes- (Actifs)": "1",
            "Sloops-Goelettes-shooners (Actifs)": "1",
            "Enseignes de vaisseaux": "19",
            "Capitaine de frégate": "4",
            "Lieutenants de vaisseaux": "9",
            "Capitaines de vaisseaux": "0",
            "Contre-amiraux": "0",
            "Vice-amiraux": "0",
            "Ecoles navales": "0",
            "Elèves": "0",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "1",
            "Constructions navales Bricks-Corvettes": "1",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "2",
            "Petits arsenaux": "1",
            "Nombre d’ouvriers": "900",
            "Coût construction navires": "325 000",
            "Entretien et approvisionnement des navires": "120 121",
            "Entretien et approvisionnement des arsenaux": "108 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "130 000",
            "Navires de pêche": "209",
            "Navires marchands totaux": "141",
            "Cabotage (5 à 50 tonneaux)": "108",
            "Grand cabotage (50-100 tonneaux)": "9",
            "Commerce de haute mer (100-250 tonneaux)": "14",
            "Grand commerce (+ 250 tonneaux)": "10",
            "production navires marchands": "6",
            "Cabotage (5 à 50 tonneaux) (Prod)": "4",
            "Grand cabotage (50-100 tonneaux) (Prod)": "2",
            "Coton (en kg)": "441 000",
            "Commerce estimé en livres tournois": "8 434 386",
            "Taxes": "562 292",
            "Droits de mouillage": "515 250",
            "Manufactures (textiles verreries imprimeries etc)": "2",
            "Production fusils": "5 000",
            "Production de canons": "50",
            "Production de canons navals": "38",
            "Production de poudre (T)": "5 000",
            "Industrie production en valeur": "23 284 000",
            "Taxe industrie": "1 199 974",
            "Nombre de manufactures d’armes ou arsenaux": "2",
            "Ouvriers": "214",
            "Reste après besoin en fusils (dans l’armée et marine)": "-56 967",
            "Fusils (dans l'armée ou en réserve)": "-1 967",
            "Besoin de canons navals": "24",
            "Réserve de canons navals": "14",
            "Superficie du territoire en forêt": "38,45 %",
            "Production bois (Mcube)": "7 056 000",
            "Consommation de bois": "7 081 500",
            "Si excédent, vente ou achat si quantité insuffisante": "-255 000",
            "Taxes sur les excédents": "-25 500",
            "Nombre d’hectares de blé": "4 950 000",
            "production blé par an (en quintaux)": "19 800 000",
            "Consommation": "17 988 250",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "15 926 250",
            "Taxes sur les excédents (Blé)": "159 263",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 650 000",
            "Production légumes:etc": "12 375 000",
            "Consommation (Légumes)": "6 716 500",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "33 951 000",
            "Taxes sur les excédents (Légumes)": "679 020",
            "Nombre d’hectares de vigne": "247 500",
            "Production vin (hectolitres)": "2 475 000",
            "Consommation (Vin)": "2 474 500",
            "Taxes sur les excédents (Vin)": "0",
            "Nombre d’hectares pour l’élevage": "5 775 000",
            "Recettes totales Pays": "37 533 580",
            "Dépenses totales": "36 860 563",
            "Coût maison du roi": "5 570 000",
            "Trésor": "9 673 018",
            "Dette": "0",
            "Excédent": "673 018",
            "Dette ou excédent en pourcentage des recettes": "1,79 %",
            "Charge de la dette": "0,0"
        }
    },
    "Maurice de Nassau": {
        "nom": "Maurice de Nassau",
        "RAW_DATA": {
            "Population": "4 850 000",
            "Population des colonies": "4 080 610",
            "Dont colons blancs": "111 200",
            "Indigènes": "3 902 000",
            "Esclaves": "67 410",
            "Total population métropolitaine": "4 850 000",
            "Superficie métropole (km²)": "161 000",
            "Densité de population": "30.12",
            "Recettes fiscales (en livres tournois)": "110 940 408",
            "Impôts directs": "23 112 715",
            "Impôt foncier": "21 257 092",
            "Impôt sur le mobilier": "557 813",
            "Patente": "1 297 810",
            "Impôts indirects": "87 827 693",
            "Gabelle": "2 125 000",
            "Aides/autres impôts indirects": "23 375 000",
            "Enregistrement/successions": "1 540 625",
            "Douanes": "58 662 068",
            "Lotteries": "2 125 000",
            "Revenu national brut": "1 664 172 500",
            "Revenu moyen par hab": "391,57",
            "Dépenses militaires": "44 768 882",
            "Soldes": "18 317 884",
            "Salaires soldats": "8 033 161",
            "Salaires officiers": "10 284 723",
            "Salaires annuels soldats réguliers": "170,75",
            "Salaires conscrits": "167,20",
            "Salaires annuels sous-officiers": "305,85",
            "Salaires lieutenants": "1 000,00",
            "Salaires capitaines": "1 775,00",
            "Salaires lieutenants-colonels": "3 700,00",
            "Salaires colonels": "5 600,00",
            "Salaires généraux de brigade": "11 750,00",
            "Salaires généraux de division": "20 500,00",
            "Coût administration de la Guerre": "22 248 325",
            "Entretien des places": "3 339 000",
            "Budget de construction de places": "223 750",
            "Besoin en rations quotidiennes": "7 596 469",
            "Coût achat uniforme": "872 768",
            "Domaine de l’État (fermes en H ou bois)": "536 667",
            "Revenus des domaines": "3 756 667",
            "Coût fonctionnement Etat": "11 329 330",
            "Nombre d'administrateurs totaux": "6 580",
            "Secrétaires et administrations des ministères": "2 596",
            "Secrétaires et administrations des provinces/départements": "216",
            "Percepteurs d’impôts/douaniers/etc": "2 160",
            "Juges/chancellerie/etc": "456",
            "Préfets / gouverneurs": "12",
            "Sous-préfets/etc": "0",
            "Parlementaires": "48",
            "Personnels parlement": "384",
            "Personnel des armées": "708",
            "Nombre de départements / provinces": "12",
            "Secrétaires d'Etat": "11",
            "Gouverneurs / intendants / préfets": "12",
            "Coût des ministres et gouverneurs / préfets / intendants": "407 000",
            "Nombre de bâtiments à construire": "7",
            "Construction kilomètres de routes": "104",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 457 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "11",
            "Nombre de villes (20 000- 5000)": "51",
            "Nombre de maires choisis par l’État": "63",
            "nombre de conseillers municipaux": "504",
            "Coûts fonctionnements villes": "396 900",
            "Revenus des villes": "115 564",
            "Nombre d’Universités": "12",
            "Nombre de lycées": "168",
            "Nombre d’écoles primaires": "747",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "30 357",
            "Années de service": "4",
            "Recrues « maximum » sur les années de service": "121 429",
            "Engagés réels": "37 532",
            "Nombre de soldats totaux": "37 532",
            "Pensionnaires, retraités ou demi-soldes": "2 994",
            "Entraînement par mois(manœuvres, tirs)": "11",
            "Coût": "639 923",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "0",
            "Nombre de compagnies d’artillerie à cheval": "0",
            "Nombre de compagnies d’artillerie totale": "10",
            "Nombre régiments artillerie": "1,8",
            "Nombre de canons de l’armée de campagne": "126",
            "Garde (Infanterie) régiment": "1,50",
            "Dont vélites": "0,50",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "1,00",
            "dont chasseurs à cheval": "1,00",
            "Nombre soldats Garde": "4 500",
            "Infanterie de la Garde": "3 600",
            "Cavalerie de la garde": "900",
            "Soldats dans une compagnie": "80,0",
            "Sous-officiers et caporaux dans une compagnie": "10,0",
            "Total": "90,0",
            "Soldats dans un bataillon": "560,0",
            "Sous-officiers et caporaux": "70,0",
            "Soldats dans un régiment (pied de paix)": "560,0",
            "Sous-officiers et caporaux (Régiment Paix)": "140,0",
            "Soldats dans un régiment (pied de guerre)": "1 260,0",
            "Soldats dans une division": "1 680,0",
            "Sous-officiers et caporaux (Division)": "420,0",
            "Division sur pied de guerre": "3 780,0",
            "Nombre de Régiments de ligne": "17,5",
            "Régiments de grenadiers": "1,5",
            "Régiments de génie": "0,25",
            "Régiments d’infanterie légère": "0,5",
            "Nombre de régiments": "19,5",
            "Nombre de bataillons": "39,0",
            "Fantassins (dont sous-officiers)": "13 650",
            "Fantassins recrutés (conscription)": "7 589",
            "(Soldats manquants pour le pied de guerre )": "-3 331",
            "Cavaliers dans un escadron": "105,0",
            "Sous-officiers et caporaux dans un escadron": "12,0",
            "Cavaliers dans un régiment": "585,0",
            "Régiments de hussards": "4,0",
            "Régiments de dragons": "3,0",
            "Nombre total de régiments": "7,0",
            "Régiments de cavalerie légère": "4,0",
            "Régiments de cavalerie polyvalente": "3,0",
            "Cavaliers": "4 095,0",
            "Armée permanente et garnison": "29 943",
            "Conscription": "7 589",
            "Canons": "3 471",
            "Rappel Dont canons de campagne": "126",
            "Infanterie": "21 239",
            "Proportion Cavalerie/infanterie": "19,28 %",
            "Artilleurs": "9 081",
            "Corps du génie (nombre de soldats)": "296",
            "Levée pour cette année (appelés de conscription)": "7 589",
            "Part sur les 1/140e": "25,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "53 667",
            "Besoin militaire": "12 815",
            "Excédent ou déficit": "40 851",
            "Achat chevaux": "1 681 843",
            "Chevaux officiers": "3 959",
            "Chevaux pour l’artillerie": "0",
            "Chevaux cavalerie": "4 095",
            "Forteresses": "37",
            "Forteresses 2e classe": "6",
            "Forteresses 3e et 4e classe": "31",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "21",
            "Forts – Poste militaire": "19",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "102",
            "Capacité de casernement": "27 100",
            "Soldats non logés (logement chez l’habitant)": "7 316",
            "Coût du logement": "402 354",
            "Construction de casernes": "4",
            "Coût (construction + entretien )": "355 000",
            "Artillerie des côtes": "145",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "3 571",
            "Capitaines": "1 190",
            "Lieutenants-colonels, chef d’escadrons et majors": "463",
            "Colonels": "171",
            "Généraux de brigade": "56",
            "Généraux de division": "62",
            "Total officiers": "5 514",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "130",
            "Milices/garde nationale": "85 000",
            "Proportion par rapport à la population": "1/50e",
            "Nombre de cohortes de Milices": "170",
            "Fusils disponibles": "38 000",
            "Milices coloniales": "11 120",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "22",
            "Fusils disponibles (Milices Col.)": "5 500",
            "Divisions militaires": "5",
            "Pensions (familles, récompenses des généraux, etc)": "638",
            "Pensions": "1 173 000",
            "Maréchaussée/gendarmerie/police": "1 063",
            "Coût maréchaussée": "584 375",
            "Messagers/personnels des postes": "909",
            "Coût (Poste)": "431 933",
            "Budget naval": "34 397 927",
            "Personnel administratif de la marine": "1 449",
            "Nombre de marins": "13 753",
            "Nombre de troupes de marines dans les navires": "2 480",
            "Salaires des marins": "305,20",
            "Salaires et pensions pour des marins": "4 833 768",
            "Salaires des officiers (Marine)": "1 831 600",
            "Nombre de marins dans la marine marchande": "42 115",
            "Pêcheurs": "11 653",
            "Navires de transport": "45",
            "Colons envoyés aux colonies": "5 349",
            "Coût colonisation": "1 931 683",
            "Population proche du littoral (-80km) et sur les fleuves": "5 296 700",
            "Réservoir de marins": "158 563",
            "Marins effectifs": "67 520",
            "Marins encore disponibles": "91 043",
            "Navires de ligne": "34",
            "74 canons": "24",
            "64 canons": "10",
            "Navires de ligne actifs/armés": "18",
            "74 canons (Actifs)": "12",
            "64 canons (Actifs)": "6",
            "Navires d’escortes": "89",
            "Frégates": "17",
            "Corvettes-Brig-Sloops-chébeqs": "31",
            "Sloops-Goelettes-shooners": "41",
            "Navires d’escortes actifs": "32",
            "Frégates (Actifs)": "9",
            "Corvettes- (Actifs)": "3",
            "Sloops-Goelettes-shooners (Actifs)": "20",
            "Enseignes de vaisseaux": "282",
            "Capitaine de frégate": "78",
            "Lieutenants de vaisseaux": "192",
            "Capitaines de vaisseaux": "68",
            "Contre-amiraux": "14",
            "Vice-amiraux": "7",
            "Ecoles navales": "2",
            "Elèves": "116",
            "Construction de vaisseaux": "4",
            "Constructions navales (64-50 canons)": "4",
            "Construction de navires légers": "7",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "2",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "3",
            "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "22",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "5",
            "Cales de radoubs (pour vaisseaux)": "7",
            "Nombre d’ouvriers": "8 300",
            "Coût construction navires": "2 310 000",
            "Entretien et approvisionnement des navires": "2 519 013",
            "Entretien et approvisionnement des arsenaux": "2 010 100",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 031 000",
            "Travaux dans les colonies": "823 000",
            "Forts dans les colonies": "13",
            "Navires de pêche": "1 059",
            "Navires marchands totaux": "2 585",
            "Cabotage (5 à 50 tonneaux)": "1 450",
            "Grand cabotage (50-100 tonneaux)": "404",
            "Commerce de haute mer (100-250 tonneaux)": "381",
            "Grand commerce (+ 250 tonneaux)": "350",
            "production navires marchands": "75",
            "Cabotage (5 à 50 tonneaux) (Prod)": "24",
            "Grand cabotage (50-100 tonneaux) (Prod)": "31",
            "Commerce de haute mer (100-200 tonneaux)": "10",
            "Grand commerce (+ 200 tonneaux)": "10",
            "Sucre (en Kg)": "11 140 200",
            "Café (Kg)": "8 567 100",
            "Epices (en Kg)": "8 345 000",
            "Tabac (en kg)": "702 000",
            "Coton (en kg)": "1 534 100",
            "Indigo (en kg)": "0",
            "Thé (en Kg)": "894 710",
            "Commerce estimé en livres tournois": "238 047 559",
            "Taxes": "23 804 756",
            "Droits de mouillage": "34 857 313",
            "Manufactures (textiles verreries imprimeries etc)": "84",
            "Production de fer (T)": "17 458",
            "Production de cuivre (quintaux)": "0",
            "Production d'argent (Kg)": "0",
            "Production fusils": "67 500",
            "Production de canons": "360",
            "Production de canons navals": "169",
            "Production de poudre (T)": "90 000",
            "Industrie production en valeur": "38 590 600",
            "Taxe industrie": "1 297 810",
            "Nombre de manufactures d’armes ou arsenaux": "9",
            "Ouvriers": "963",
            "Reste après besoin en fusils (dans l’armée et marine)": "-299",
            "Fusils (dans l'armée ou en réserve)": "-299",
            "Besoin de canons navals": "422",
            "Réserve de canons navals": "-253",
            "Superficie du territoire en forêt": "16,12 %",
            "Production bois (Mcube)": "1 801 000",
            "Consommation de bois": "4 362 250",
            "Si excédent, vente ou achat si quantité insuffisante": "-25 612 500",
            "Taxes sur les excédents": "-2 561 250",
            "Nombre d’hectares de blé": "1 207 500",
            "production blé par an (en quintaux)": "9 660 000",
            "Consommation": "8 395 450",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "7 718 250",
            "Taxes sur les excédents (Blé)": "115 774",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "322 000",
            "Production légumes:etc": "2 415 000",
            "Consommation (Légumes)": "4 037 500",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-9 735 000",
            "Taxes sur les excédents (Légumes)": "-194 700",
            "Nombre d’hectares de vigne": "96 600",
            "Production vin (hectolitres)": "386 400",
            "Consommation (Vin)": "3 315 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-131 787 000",
            "Taxes sur les excédents (Vin)": "-4 612 545",
            "Nombre d’hectares pour l’élevage": "1 127 000",
            "Recettes totales Pays": "114 812 848",
            "Dépenses totales": "102 194 992",
            "Coût maison du roi": "4 490 000",
            "Trésor": "12 617 856",
            "Dette": "0",
            "Excédent": "8 617 856",
            "Dette ou excédent en pourcentage des recettes": "7,51 %",
            "Charge de la dette": "0,0"
        }
    }, 
"Louis XIV": {
        "nom": "Louis XIV",
        "RAW_DATA": {
            "Population": "21 230 000",
            "Population des colonies": "334 910",
            "Dont colons blancs": "35 810",
            "Indigènes": "176 100",
            "Esclaves": "123 000",
            "Total population métropolitaine": "21 230 000",
            "Superficie métropole (km²)": "574 100",
            "Densité de population": "36,98",
            "Recettes fiscales (en livres tournois)": "222 541 510",
            "Impôts directs": "47 962 469",
            "Impôt foncier": "35 107 520",
            "Impôt sur le mobilier": "0",
            "Patente": "12 854 949",
            "Impôts indirects": "174 579 041",
            "Gabelle": "74 305 000",
            "Aides/autres impôts indirects": "52 013 500",
            "Enregistrement/successions": "7 961 250",
            "Douanes": "35 451 774",
            "Lotteries": "4 847 517",
            "Revenu national brut": "4 130 296 500",
            "Revenu moyen par hab": "194,55",
            "Dépenses militaires": "128 374 764",
            "Soldes": "47 347 337",
            "Salaires soldats": "32 620 922",
            "Salaires officiers": "14 726 415",
            "Salaires annuels soldats réguliers": "105,55",
            "Salaires conscrits": "100,10",
            "Salaires annuels sous-officiers": "221,50",
            "Salaires lieutenants": "650,00",
            "Salaires capitaines": "1 100,00",
            "Salaires lieutenants-colonels": "2 150,00",
            "Salaires colonels": "3 000,00",
            "Salaires généraux de brigade": "6 500,00",
            "Salaires généraux de division": "10 500,00",
            "Coût administration de la Guerre": "68 446 489",
            "Entretien des places": "8 389 200",
            "Budget de construction de places": "1 483 750",
            "Besoin en rations quotidiennes": "35 204 100",
            "Coût achat uniforme": "1 162 595",
            "Domaine de l’État (fermes en H ou bois)": "1 640 286",
            "Revenus des domaines": "13 942 429",
            "Coût fonctionnement Etat": "15 391 912",
            "Nombre d'administrateurs totaux": "12 655",
            "Secrétaires et administrations des ministères": "1 048",
            "Secrétaires et administrations des provinces/départements": "506",
            "Percepteurs d’impôts/douaniers/etc": "3 973",
            "Juges/chancellerie/etc": "1 430",
            "Préfets / gouverneurs": "22",
            "Sous-préfets/etc": "0",
            "Parlementaires": "220",
            "Personnels parlement": "2 200",
            "Personnel des armées": "3 256",
            "Nombre de départements / provinces": "22",
            "Secrétaires d'Etat": "8",
            "Gouverneurs / intendants / préfets": "22",
            "Coût des ministres et gouverneurs / préfets / intendants": "486 000",
            "Nombre de bâtiments à construire": "4",
            "Construction kilomètres de routes": "121",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 338 000",
            "Nombre de villes (+ 100 000)": "2",
            "Nombre de ville (100 000 – 20 000)": "10",
            "Nombre de villes (20 000- 5000)": "80",
            "Nombre de maires choisis par l’État": "92",
            "nombre de conseillers municipaux": "460",
            "Coûts fonctionnements villes": "386 400",
            "Revenus des villes": "239 812",
            "Nombre d’Universités": "12",
            "Nombre de lycées": "232",
            "Nombre d’écoles primaires": "1 140",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "151 643",
            "Années de service": "4",
            "Recrues « maximum » sur les années de service": "606 571",
            "Engagés réels": "158 826",
            "Nombre de soldats totaux": "158 826",
            "Pensionnaires, retraités ou demi-soldes": "14 872",
            "Entraînement par mois(manœuvres, tirs)": "11",
            "Coût": "2 707 988",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "8",
            "Nombre de canons de 4 livres": "2",
            "Nombre de canons de 6 livres": "4",
            "Nombre d’obusiers de 6 pouces": "2",
            "Nombre de compagnies d’artillerie totale": "34",
            "Nombre régiments artillerie": "5,8",
            "Nombre de canons de l’armée de campagne": "272",
            "Garde (Infanterie) régiment": "3,00",
            "Dont vélites": "2,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "3,00",
            "dont chasseurs à cheval": "2,00",
            "Dragons": "1,00",
            "Artillerie de la garde": "1,00",
            "Compagnies d’artilleries de la garde": "8,00",
            "Nombre soldats Garde": "11 300",
            "Infanterie de la Garde": "7 200",
            "Cavalerie de la garde": "2 700",
            "Artillerie de la garde (canons)": "120",
            "Soldats dans une compagnie": "125,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "140,0",
            "Soldats dans un bataillon": "625,0",
            "Sous-officiers et caporaux": "75,0",
            "Soldats dans un régiment (pied de paix)": "1 093,8",
            "Sous-officiers et caporaux (Régiment Paix)": "225,0",
            "Soldats dans un régiment (pied de guerre)": "2 100,0",
            "Soldats dans une division": "3 281,3",
            "Sous-officiers et caporaux (Division)": "675,0",
            "Division sur pied de guerre": "6 300,0",
            "Nombre de Régiments de ligne": "55,0",
            "Régiments de grenadiers": "8,0",
            "Régiments de génie": "1,5",
            "Régiments d’infanterie légère": "5,0",
            "Nombre de régiments": "68,0",
            "Nombre de bataillons": "340,0",
            "Fantassins (dont sous-officiers)": "89 675",
            "Fantassins recrutés (conscription)": "10 110",
            "(Soldats manquants pour le pied de guerre )": "-43 015",
            "Cavaliers dans un escadron": "140,0",
            "Sous-officiers et caporaux dans un escadron": "22,0",
            "Cavaliers dans un régiment": "648,0",
            "Régiments de hussards": "10,0",
            "Régiments de Uhlans/chevau-légers": "10,0",
            "Régiments de chasseurs à cheval": "10,0",
            "Régiments de dragons": "15,0",
            "Nombre total de régiments": "45,0",
            "Régiments de cavalerie légère": "20,0",
            "Régiments de cavalerie polyvalente": "25,0",
            "Cavaliers": "29 160,0",
            "Armée permanente et garnison": "148 717",
            "Conscription": "10 110",
            "Canons": "8 039",
            "Rappel Dont canons de campagne": "381",
            "Infanterie": "99 785",
            "Proportion Cavalerie/infanterie": "29,22 %",
            "Artilleurs": "22 030",
            "Corps du génie (nombre de soldats)": "1 776",
            "Levée pour cette année (appelés de conscription)": "10 110",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "191 367",
            "Besoin militaire": "50 870",
            "Excédent ou déficit": "140 496",
            "Achat chevaux": "8 842 009",
            "Chevaux officiers": "11 094",
            "Chevaux pour l’artillerie": "3 264",
            "Chevaux cavalerie": "29 160",
            "Forteresses": "84",
            "Forteresses 1ère classe": "3",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "72",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "51",
            "Forts – Poste militaire": "101",
            "Construction de places de troisième rang": "3",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "216",
            "Capacité de casernement": "59 650",
            "Soldats non logés (logement chez l’habitant)": "91 325",
            "Coût du logement": "5 022 849",
            "Construction de casernes": "28",
            "Coût (construction + entretien )": "1 240 000",
            "Artillerie des côtes": "135",
            "Constructions petites fortifications/fortifications côtières": "10",
            "Lieutenants": "7 078",
            "Capitaines": "3 539",
            "Lieutenants-colonels, chef d’escadrons et majors": "1 349",
            "Colonels": "479",
            "Généraux de brigade": "127",
            "Généraux de division": "102",
            "Total officiers": "12 674",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "342",
            "Milices/garde nationale": "141 533",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "283",
            "Fusils disponibles": "70 000",
            "Milices coloniales": "3 581",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "7",
            "Fusils disponibles (Milices Col.)": "2 000",
            "Divisions militaires": "18",
            "Pensions (familles, récompenses des généraux, etc)": "6 581",
            "Pensions": "16 716 502",
            "Maréchaussée/gendarmerie/police": "6 066",
            "Coût maréchaussée": "1 273 800",
            "Messagers/personnels des postes": "3 840",
            "Coût (Poste)": "921 680",
            "Budget naval": "50 085 900",
            "Personnel administratif de la marine": "494",
            "Nombre de marins": "12 392",
            "Nombre de troupes de marines dans les navires": "1 955",
            "Salaires des marins": "92,45",
            "Salaires et pensions pour des marins": "2 055 096",
            "Salaires des officiers (Marine)": "2 774 600",
            "Nombre de marins dans la marine marchande": "25 055",
            "Pêcheurs": "9 723",
            "Navires de transport": "24",
            "Colons envoyés aux colonies": "2 808",
            "Coût colonisation": "1 038 360",
            "Population proche du littoral (-80km) et sur les fleuves": "6 945 000",
            "Réservoir de marins": "81 706",
            "Marins effectifs": "47 170",
            "Marins encore disponibles": "34 536",
            "Navires de ligne": "67",
            "+ de 80 canons": "2",
            "80 canons": "3",
            "74 canons": "20",
            "64 canons": "28",
            "50 canons": "14",
            "Navires de ligne actifs/armés": "16",
            "74 canons (Actifs)": "5",
            "64 canons (Actifs)": "5",
            "50 canons (Actifs)": "6",
            "Navires d’escortes": "96",
            "Frégates": "37",
            "Corvettes-Brig-Sloops-chébeqs": "31",
            "Sloops-Goelettes-shooners": "28",
            "Navires d’escortes actifs": "33",
            "Frégates (Actifs)": "10",
            "Corvettes- (Actifs)": "17",
            "Sloops-Goelettes-shooners (Actifs)": "6",
            "Enseignes de vaisseaux": "366",
            "Capitaine de frégate": "116",
            "Lieutenants de vaisseaux": "268",
            "Capitaines de vaisseaux": "120",
            "Contre-amiraux": "24",
            "Vice-amiraux": "12",
            "Ecoles navales": "2",
            "Elèves": "108",
            "Construction de vaisseaux": "6",
            "Constructions navales (+80 canons)": "1",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "3",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "6",
            "Constructions navales (frégates)": "3",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "18",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "3",
            "Cales de radoubs (pour vaisseaux)": "3",
            "Nombre d’ouvriers": "6 700",
            "Coût construction navires": "12 415 000",
            "Entretien et approvisionnement des navires": "3 074 702",
            "Entretien et approvisionnement des arsenaux": "1 472 300",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "680 200",
            "Travaux dans les colonies": "1 720 000",
            "Forts dans les colonies": "12",
            "Navires de pêche": "1 389",
            "Navires marchands totaux": "1 604",
            "Cabotage (5 à 50 tonneaux)": "805",
            "Grand cabotage (50-100 tonneaux)": "340",
            "Commerce de haute mer (100-250 tonneaux)": "285",
            "Grand commerce (+ 250 tonneaux)": "174",
            "production navires marchands": "56",
            "Cabotage (5 à 50 tonneaux) (Prod)": "20",
            "Grand cabotage (50-100 tonneaux) (Prod)": "14",
            "Commerce de haute mer (100-200 tonneaux)": "18",
            "Grand commerce (+ 200 tonneaux)": "4",
            "Sucre (en Kg)": "9 450 200",
            "Café (Kg)": "2 487 000",
            "Epices (en Kg)": "289 700",
            "Fourrures (en pièces)": "7 510",
            "Tabac (en kg)": "1 271 000",
            "Coton (en kg)": "10 100",
            "Thé (en Kg)": "102 300",
            "Commerce estimé en livres tournois": "130 712 739",
            "Taxes": "13 071 274",
            "Droits de mouillage": "22 380 500",
            "Manufactures (textiles verreries imprimeries etc)": "77",
            "Production de fer (T)": "24 880",
            "Production de Fonte (T)": "1 580",
            "Production de cuivre (quintaux)": "24 900",
            "Production d'argent (Kg)": "2 540",
            "Production fusils": "102 000",
            "Production de canons": "680",
            "Production de canons navals": "708",
            "Production de poudre (T)": "170 000",
            "Industrie production en valeur": "79 351 833",
            "Taxe industrie": "12 854 949",
            "Nombre de manufactures d’armes ou arsenaux": "17",
            "Ouvriers": "1 819",
            "Reste après besoin en fusils (dans l’armée et marine)": "8 667",
            "Fusils (dans l'armée ou en réserve)": "8 667",
            "Besoin de canons navals": "640",
            "Réserve de canons navals": "68",
            "Superficie du territoire en forêt": "14,57 %",
            "Production bois (Mcube)": "25 310 000",
            "Consommation de bois": "21 329 000",
            "Si excédent, vente ou achat si quantité insuffisante": "39 810 000",
            "Taxes sur les excédents": "3 981 000",
            "Nombre d’hectares de blé": "7 991 472",
            "production blé par an (en quintaux)": "59 936 040",
            "Consommation": "42 691 395",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "247 419 675",
            "Taxes sur les excédents (Blé)": "3 711 295",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "3 559 420",
            "Production légumes:etc": "24 915 940",
            "Consommation (Légumes)": "20 168 500",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "28 484 640",
            "Taxes sur les excédents (Légumes)": "712 116",
            "Nombre d’hectares de vigne": "1 033 380",
            "Production vin (hectolitres)": "24 284 430",
            "Consommation (Vin)": "20 168 500",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "180 041 850",
            "Taxes sur les excédents (Vin)": "2 700 628",
            "Nombre d’hectares pour l’élevage": "4 018 700",
            "Recettes totales Pays": "247 588 977",
            "Dépenses totales": "235 082 674",
            "Coût maison du roi": "21 120 000",
            "Trésor": "12 506 303",
            "Dette": "0",
            "Excédent": "12 506 303",
            "Dette ou excédent en pourcentage des recettes": "5,05 %",
            "Charge de la dette": "0,0"
        }
    },
    "Guillaume d'Orange": {
        "nom": "Guillaume d'Orange",
        "RAW_DATA": {
            "Population": "8 812 800",
            "Population des colonies": "1 594 310",
            "Dont colons blancs": "771 000",
            "Indigènes": "442 310",
            "Esclaves": "381 000",
            "Total population métropolitaine": "8 812 800",
            "Superficie métropole (km²)": "294 000",
            "Densité de population": "29,98",
            "Recettes fiscales (en livres tournois)": "169 506 198",
            "Impôts directs": "36 366 397",
            "Impôt foncier": "16 544 886",
            "Impôt sur le mobilier": "11 016 000",
            "Patente": "8 805 510",
            "Impôts indirects": "133 139 801",
            "Aides/autres impôts indirects": "48 470 400",
            "Enregistrement/successions": "24 675 840",
            "Douanes": "57 496 601",
            "Lotteries": "2 496 960",
            "Revenu national brut": "3 008 161 152",
            "Revenu moyen par hab": "341,34",
            "Dépenses militaires": "47 243 891",
            "Soldes": "15 544 030",
            "Salaires soldats": "7 874 983",
            "Salaires officiers": "7 669 048",
            "Salaires annuels soldats réguliers": "141,50",
            "Salaires conscrits": "131,75",
            "Salaires annuels sous-officiers": "280,40",
            "Coût administration de la Guerre": "28 527 703",
            "Entretien des places": "1 765 200",
            "Budget de construction de places": "105 000",
            "Besoin en rations quotidiennes": "11 235 421",
            "Domaine de l’État (fermes en H ou bois)": "840 000",
            "Revenus des domaines": "5 670 000",
            "Coût fonctionnement Etat": "18 396 301",
            "Nombre d'administrateurs totaux": "13 468",
            "Secrétaires et administrations des ministères": "1 218",
            "Secrétaires et administrations des provinces/départements": "506",
            "Percepteurs d’impôts/douaniers/etc": "8 487",
            "Juges/chancellerie/etc": "836",
            "Préfets / gouverneurs": "22",
            "Sous-préfets/etc": "0",
            "Parlementaires": "176",
            "Personnels parlement": "1 232",
            "Personnel des armées": "991",
            "Nombre de départements / provinces": "22",
            "Secrétaires d'Etat": "6",
            "Gouverneurs / intendants / préfets": "22",
            "Coût des ministres et gouverneurs / préfets / intendants": "436 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "122",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 176 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "11",
            "Nombre de villes (20 000- 5000)": "62",
            "Nombre de maires choisis par l’État": "74",
            "nombre de conseillers municipaux": "592",
            "Coûts fonctionnements villes": "333 000",
            "Revenus des villes": "181 832",
            "Nombre d’Universités": "12",
            "Nombre de lycées": "190",
            "Nombre d’écoles primaires": "1 054",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "62 949",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "188 846",
            "Engagés réels": "55 998",
            "Nombre de soldats totaux": "55 998",
            "Pensionnaires, retraités ou demi-soldes": "5 600",
            "Entraînement par mois(manœuvres, tirs)": "15",
            "Coût": "1 301 958",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "6",
            "Nombre de compagnies d’artillerie totale": "6",
            "Nombre régiments artillerie": "2,2",
            "Nombre de canons de l’armée de campagne": "167",
            "Garde (Infanterie) régiment": "2,00",
            "Dont vélites": "1,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "4,00",
            "dont chasseurs à cheval": "1,50",
            "Lanciers": "2,50",
            "Nombre soldats Garde": "8 000",
            "Soldats dans une compagnie": "180,0",
            "Sous-officiers et caporaux dans une compagnie": "20,0",
            "Total": "200,0",
            "Soldats dans un bataillon": "900,0",
            "Sous-officiers et caporaux": "100,0",
            "Soldats dans un régiment (pied de paix)": "2 700,0",
            "Sous-officiers et caporaux (Régiment Paix)": "300,0",
            "Soldats dans un régiment (pied de guerre)": "3 000,0",
            "Soldats dans une division": "8 100,0",
            "Sous-officiers et caporaux (Division)": "900,0",
            "Division sur pied de guerre": "9 000,0",
            "Nombre de Régiments de ligne": "8,0",
            "Régiments de grenadiers": "2,0",
            "Régiments de génie": "0,25",
            "Régiments d’infanterie légère": "1,0",
            "Nombre de régiments": "11,0",
            "Nombre de bataillons": "33,0",
            "Fantassins (dont sous-officiers)": "33 000",
            "Cavaliers dans un escadron": "115,0",
            "Sous-officiers et caporaux dans un escadron": "10,0",
            "Cavaliers dans un régiment": "750,0",
            "Régiments de hussards": "6,0",
            "Régiments de Uhlans/chevau-légers": "2,0",
            "Régiments de chasseurs à cheval": "2,0",
            "Nombre total de régiments": "10,0",
            "Cavaliers dans une division de cavalerie": "3 000,0",
            "Cavaliers": "7 500,0",
            "Armée permanente et garnison": "55 998",
            "Canons": "888",
            "Rappel Dont canons de campagne": "167",
            "Infanterie": "33 000",
            "Proportion Cavalerie/infanterie": "22,73 %",
            "Artilleurs": "9 195",
            "Corps du génie (nombre de soldats)": "296",
            "Levée pour cette année (appelés de conscription)": "0",
            "Part sur les 1/140e": "0,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "98 000",
            "Besoin militaire": "16 150",
            "Excédent ou déficit": "81 850",
            "Achat chevaux": "-917 405",
            "Forteresses": "36",
            "Forteresses 2e classe": "2",
            "Forteresses 3e et 4e classe": "34",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "24",
            "Forts – Poste militaire": "25",
            "Nombre de casernes (1 caserne = 250 logements)": "240",
            "Capacité de casernement": "61 750",
            "Construction de casernes": "0",
            "Coût (construction + entretien )": "600 000",
            "Artillerie des côtes": "93",
            "Constructions petites fortifications/fortifications côtières": "4",
            "Lieutenants": "2 639",
            "Capitaines": "1 320",
            "Lieutenants-colonels, chef d’escadrons et majors": "514",
            "Colonels": "185",
            "Généraux de brigade": "65",
            "Généraux de division": "51",
            "Total officiers": "4 774",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "190",
            "Milices/garde nationale": "58 752",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "118",
            "Fusils disponibles": "24 000",
            "Milices coloniales": "51 400",
            "Proportion par rapport aux colons blancs": "1/15e",
            "Nombre de bataillons de miliciens": "103",
            "Fusils disponibles (Milices Col.)": "25 000",
            "Divisions militaires": "11",
            "Pensions (familles, récompenses des généraux, etc)": "1 322",
            "Pensions": "2 908 224",
            "Maréchaussée/gendarmerie/police": "4 896",
            "Coût maréchaussée": "2 227 680",
            "Messagers/personnels des postes": "1 684",
            "Coût (Poste)": "799 805",
            "Budget naval": "78 898 131",
            "Personnel administratif de la marine": "2 520",
            "Nombre de marins": "24 171",
            "Nombre de troupes de marines dans les navires": "3 815",
            "Salaires des marins": "287,35",
            "Salaires et pensions pour des marins": "8 209 954",
            "Salaires des officiers (Marine)": "3 521 950",
            "Nombre de marins dans la marine marchande": "57 575",
            "Pêcheurs": "8 001",
            "Navires de transport": "55",
            "Colons envoyés aux colonies": "4 594",
            "Coût colonisation": "2 304 312",
            "Population proche du littoral (-80km) et sur les fleuves": "6 667 655",
            "Réservoir de marins": "102 131",
            "Marins effectifs": "89 747",
            "Marins encore disponibles": "12 384",
            "Navires de ligne": "90",
            "+ de 80 canons": "3",
            "80 canons": "5",
            "74 canons": "25",
            "64 canons": "17",
            "50 canons": "35",
            "Navires de ligne actifs/armés": "41",
            "80 canons (Actifs)": "1",
            "74 canons (Actifs)": "13",
            "64 canons (Actifs)": "14",
            "50 canons (Actifs)": "13",
            "Navires d’escortes": "138",
            "Frégates": "57",
            "Corvettes-Brig-Sloops-chébeqs": "44",
            "Sloops-Goelettes-shooners": "37",
            "Navires d’escortes actifs": "33",
            "Frégates (Actifs)": "8",
            "Corvettes- (Actifs)": "7",
            "Sloops-Goelettes-shooners (Actifs)": "18",
            "Enseignes de vaisseaux": "472",
            "Capitaine de frégate": "161",
            "Lieutenants de vaisseaux": "345",
            "Capitaines de vaisseaux": "145",
            "Contre-amiraux": "29",
            "Vice-amiraux": "15",
            "Ecoles navales": "2",
            "Elèves": "82",
            "Construction de vaisseaux": "8",
            "Constructions navales (+80 canons)": "1",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "4",
            "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "17",
            "Constructions navales (frégates)": "5",
            "Constructions navales Bricks-Corvettes": "8",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "4",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "2",
            "Bâtiments de la Marine": "30",
            "Nombre de grands arsenaux maritimes": "3",
            "Petits arsenaux": "6",
            "Cales de radoubs (pour vaisseaux)": "7",
            "Nombre d’ouvriers": "10 350",
            "Coût construction navires": "17 930 000",
            "Entretien et approvisionnement des navires": "7 078 302",
            "Entretien et approvisionnement des arsenaux": "2 571 800",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 721 000",
            "Travaux dans les colonies": "2 761 000",
            "Forts dans les colonies": "10",
            "Constructions forts colonies": "2",
            "Navires de pêche": "1 334",
            "Navires marchands totaux": "4 647",
            "Cabotage (5 à 50 tonneaux)": "2 580",
            "Grand cabotage (50-100 tonneaux)": "1 140",
            "Commerce de haute mer (100-250 tonneaux)": "610",
            "Grand commerce (+ 250 tonneaux)": "317",
            "production navires marchands": "85",
            "Cabotage (5 à 50 tonneaux) (Prod)": "41",
            "Grand cabotage (50-100 tonneaux) (Prod)": "18",
            "Commerce de haute mer (100-200 tonneaux)": "16",
            "Grand commerce (+ 200 tonneaux)": "10",
            "Sucre (en Kg)": "14 456 200",
            "Café (Kg)": "2 643 000",
            "Epices (en Kg)": "403 000",
            "Fourrures (en pièces)": "37 500",
            "Tabac (en kg)": "1 730 000",
            "Coton (en kg)": "2 043 000",
            "Thé (en Kg)": "511 500",
            "Commerce estimé en livres tournois": "285 150 260",
            "Taxes": "28 515 026",
            "Droits de mouillage": "28 981 575",
            "Manufactures (textiles verreries imprimeries etc)": "116",
            "Production de fer (T)": "47 120",
            "Production de Fonte (T)": "5 840",
            "Production de cuivre (quintaux)": "6 304",
            "Production d'argent (Kg)": "12 450",
            "Production fusils": "75 000",
            "Production de canons": "600",
            "Production de canons navals": "675",
            "Production de poudre (T)": "150 000",
            "Industrie production en valeur": "86 240 100",
            "Taxe industrie": "8 805 510",
            "Nombre de manufactures d’armes ou arsenaux": "15",
            "Ouvriers": "1 245",
            "Reste après besoin en fusils (dans l’armée et marine)": "13 848",
            "Fusils (dans l'armée ou en réserve)": "13 848",
            "Besoin de canons navals": "1 050",
            "Réserve de canons navals": "-375",
            "Superficie du territoire en forêt": "17,56 %",
            "Production bois (Mcube)": "8 810 000",
            "Consommation de bois": "9 006 550",
            "Si excédent, vente ou achat si quantité insuffisante": "-1 965 500",
            "Taxes sur les excédents": "-98 275",
            "Nombre d’hectares de blé": "1 940 400",
            "production blé par an (en quintaux)": "13 582 800",
            "Consommation": "17 435 580",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-63 570 870",
            "Taxes sur les excédents (Blé)": "-635 709",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "588 000",
            "Production légumes:etc": "4 557 000",
            "Consommation (Légumes)": "6 609 600",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-12 315 600",
            "Taxes sur les excédents (Légumes)": "-246 312",
            "Nombre d’hectares de vigne": "176 400",
            "Production vin (hectolitres)": "1 940 400",
            "Consommation (Vin)": "4 406 400",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-110 970 000",
            "Taxes sur les excédents (Vin)": "-2 774 250",
            "Nombre d’hectares pour l’élevage": "2 058 000",
            "Recettes totales Pays": "175 176 198",
            "Dépenses totales": "160 509 991",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "-4 000 000",
            "Coût maison du roi": "6 190 000",
            "Trésor": "10 566 206",
            "Dette": "0",
            "Excédent": "10 666 206",
            "Dette ou excédent en pourcentage des recettes": "6,09 %",
            "Charge de la dette": "0,0"
        }
    },
    "Cromwell": {
        "nom": "Cromwell",
        "RAW_DATA": {
            "Population": "7 450 000",
            "Population des colonies": "202 000",
            "Dont colons blancs": "176 200",
            "Indigènes": "4 800",
            "Esclaves": "21 000",
            "Total population métropolitaine": "7 450 000",
            "Superficie métropole (km²)": "256 000",
            "Densité de population": "29,10",
            "Recettes fiscales (en livres tournois)": "106 901 135",
            "Impôts directs": "20 722 329",
            "Impôt foncier": "14 563 819",
            "Impôt sur le mobilier": "2 994 900",
            "Patente": "3 163 610",
            "Impôts indirects": "86 178 806",
            "Gabelle": "7 450 000",
            "Aides/autres impôts indirects": "26 691 700",
            "Enregistrement/successions": "31 662 500",
            "Douanes": "18 263 772",
            "Lotteries": "2 110 833",
            "Revenu national brut": "1 941 842 500",
            "Revenu moyen par hab": "260,65",
            "Dépenses militaires": "32 046 935",
            "Soldes": "9 742 321",
            "Salaires soldats": "5 091 155",
            "Salaires officiers": "4 651 166",
            "Salaires annuels soldats réguliers": "114,55",
            "Salaires conscrits": "100,00",
            "Salaires annuels sous-officiers": "200,55",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 150,00",
            "Salaires lieutenants-colonels": "2 000,00",
            "Salaires colonels": "3 250,00",
            "Salaires généraux de brigade": "6 000,00",
            "Salaires généraux de division": "10 000,00",
            "Coût administration de la Guerre": "20 363 116",
            "Entretien des places": "1 266 600",
            "Besoin en rations quotidiennes": "8 296 807",
            "Coût achat uniforme": "407 976",
            "Domaine de l’État (fermes en H ou bois)": "640 000",
            "Revenus des domaines": "3 840 000",
            "Coût fonctionnement Etat": "11 332 228",
            "Nombre d'administrateurs totaux": "8 515",
            "Secrétaires et administrations des ministères": "3 488",
            "Secrétaires et administrations des provinces/départements": "460",
            "Percepteurs d’impôts/douaniers/etc": "2 162",
            "Juges/chancellerie/etc": "760",
            "Préfets / gouverneurs": "20",
            "Sous-préfets/etc": "0",
            "Parlementaires": "100",
            "Personnels parlement": "600",
            "Personnel des armées": "925",
            "Nombre de départements / provinces": "20",
            "Secrétaires d'Etat": "8",
            "Gouverneurs / intendants / préfets": "20",
            "Coût des ministres et gouverneurs / préfets / intendants": "336 000",
            "Nombre de bâtiments à construire": "3",
            "Construction kilomètres de routes": "203",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 909 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "3",
            "Nombre de villes (20 000- 5000)": "18",
            "Nombre de maires choisis par l’État": "22",
            "nombre de conseillers municipaux": "176",
            "Coûts fonctionnements villes": "138 600",
            "Revenus des villes": "103 612",
            "Nombre d’Universités": "4",
            "Nombre de lycées": "62",
            "Nombre d’écoles primaires": "458",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "53 214",
            "Années de service": "2",
            "Recrues « maximum » sur les années de service": "106 429",
            "Engagés réels": "39 583",
            "Nombre de soldats totaux": "39 583",
            "Pensionnaires, retraités ou demi-soldes": "4 004",
            "Entraînement par mois(manœuvres, tirs)": "11",
            "Coût": "674 898",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie totale": "9",
            "Nombre régiments artillerie": "1,8",
            "Nombre de canons de l’armée de campagne": "140",
            "Garde (Infanterie) régiment": "1,00",
            "Dont vélites": "1,00",
            "Garde (Cavalerie)": "2,00",
            "dont chasseurs à cheval": "2,00",
            "Nombre soldats Garde": "4 000",
            "Soldats dans une compagnie": "125,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "140,0",
            "Soldats dans un bataillon": "500,0",
            "Sous-officiers et caporaux": "60,0",
            "Soldats dans un régiment (pied de paix)": "1 000,0",
            "Sous-officiers et caporaux (Régiment Paix)": "180,0",
            "Soldats dans un régiment (pied de guerre)": "1 680,0",
            "Soldats dans une division": "3 000,0",
            "Sous-officiers et caporaux (Division)": "540,0",
            "Division sur pied de guerre": "5 040,0",
            "Nombre de Régiments de ligne": "10,0",
            "Régiments de grenadiers": "2",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "17,5",
            "Nombre de bataillons": "52,5",
            "Nombre de divisions": "5,8",
            "Fantassins (dont sous-officiers)": "20 650",
            "Fantassins recrutés (conscription)": "3 548",
            "(Soldats manquants pour le pied de guerre )": "-5 202",
            "Cavaliers dans un escadron": "140,0",
            "Sous-officiers et caporaux dans un escadron": "10,0",
            "Cavaliers dans un régiment": "600,0",
            "Régiments de hussards": "4,0",
            "Régiments de chasseurs à cheval": "4,0",
            "Régiments de dragons": "2,0",
            "Nombre total de régiments": "10,0",
            "Cavaliers dans une division de cavalerie": "2 400,0",
            "Cavaliers": "6 000,0",
            "Armée permanente et garnison": "36 036",
            "Conscription": "3 548",
            "Canons": "714",
            "Rappel Dont canons de campagne": "140",
            "Infanterie": "24 198",
            "Proportion Cavalerie/infanterie": "24,80 %",
            "Artilleurs": "6 113",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "3 548",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "85 333",
            "Besoin militaire": "12 781",
            "Excédent ou déficit": "72 552",
            "Achat chevaux": "-1 503 717",
            "Forteresses": "21",
            "Forteresses 2e classe": "2",
            "Forteresses 3e et 4e classe": "19",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "11",
            "Forts – Poste militaire": "21",
            "Nombre de casernes (1 caserne = 250 logements)": "156",
            "Capacité de casernement": "40 300",
            "Coût (construction + entretien )": "390 000",
            "Artillerie des côtes": "43",
            "Lieutenants": "1 945",
            "Capitaines": "972",
            "Lieutenants-colonels, chef d’escadrons et majors": "386",
            "Colonels": "159",
            "Généraux de brigade": "65",
            "Généraux de division": "45",
            "Total officiers": "3 558",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "82",
            "Milices/garde nationale": "49 667",
            "Proportion par rapport à la population": "1/150",
            "Nombre de cohortes de Milices": "99",
            "Fusils disponibles": "10 000",
            "Milices coloniales": "17 620",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "35",
            "Fusils disponibles (Milices Col.)": "4 000",
            "Divisions militaires": "5",
            "Pensions (familles, récompenses des généraux, etc)": "2 608",
            "Pensions": "4 432 750",
            "Maréchaussée/gendarmerie/police": "3 725",
            "Coût maréchaussée": "1 899 750",
            "Messagers/personnels des postes": "1 423",
            "Coût (Poste)": "675 767",
            "Budget naval": "51 185 671",
            "Personnel administratif de la marine": "1 680",
            "Nombre de marins": "13 168",
            "Nombre de troupes de marines dans les navires": "2 130",
            "Salaires des marins": "221,54",
            "Salaires et pensions pour des marins": "3 760 503",
            "Salaires des officiers (Marine)": "2 368 700",
            "Nombre de marins dans la marine marchande": "19 545",
            "Pêcheurs": "4 948",
            "Navires de transport": "29",
            "Colons envoyés aux colonies": "5 305",
            "Coût colonisation": "1 328 043",
            "Population proche du littoral (-80km) et sur les fleuves": "4 123 400",
            "Réservoir de marins": "54 979",
            "Marins effectifs": "37 661",
            "Marins encore disponibles": "17 318",
            "Navires de ligne": "60",
            "80 canons": "3",
            "74 canons": "18",
            "64 canons": "25",
            "50 canons": "14",
            "Navires de ligne actifs/armés": "21",
            "80 canons (Actifs)": "1",
            "74 canons (Actifs)": "6",
            "64 canons (Actifs)": "7",
            "50 canons (Actifs)": "7",
            "Navires d’escortes": "86",
            "Frégates": "19",
            "Corvettes-Brig-Sloops-chébeqs": "27",
            "Sloops-Goelettes-shooners": "40",
            "Navires d’escortes actifs": "29",
            "Frégates (Actifs)": "5",
            "Corvettes- (Actifs)": "6",
            "Sloops-Goelettes-shooners (Actifs)": "18",
            "Enseignes de vaisseaux": "314",
            "Capitaine de frégate": "91",
            "Lieutenants de vaisseaux": "226",
            "Capitaines de vaisseaux": "106",
            "Contre-amiraux": "21",
            "Vice-amiraux": "11",
            "Ecoles navales": "1",
            "Elèves": "59",
            "Construction de vaisseaux": "6",
            "Constructions navales (+80 canons)": "1",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "2",
            "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "12",
            "Constructions navales (frégates)": "4",
            "Constructions navales Bricks-Corvettes": "3",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "5",
            "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "20",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "4",
            "Cales de radoubs (pour vaisseaux)": "4",
            "Nombre d’ouvriers": "6 440",
            "Coût construction navires": "12 375 000",
            "Entretien et approvisionnement des navires": "3 878 004",
            "Entretien et approvisionnement des arsenaux": "1 661 200",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "2 340 000",
            "Travaux dans les colonies": "3 012 000",
            "Forts dans les colonies": "5",
            "Constructions forts colonies": "2",
            "Navires de pêche": "825",
            "Navires marchands totaux": "1 195",
            "Cabotage (5 à 50 tonneaux)": "520",
            "Grand cabotage (50-100 tonneaux)": "310",
            "Commerce de haute mer (100-250 tonneaux)": "234",
            "Grand commerce (+ 250 tonneaux)": "131",
            "production navires marchands": "50",
            "Cabotage (5 à 50 tonneaux) (Prod)": "17",
            "Grand cabotage (50-100 tonneaux) (Prod)": "11",
            "Commerce de haute mer (100-200 tonneaux)": "16",
            "Grand commerce (+ 200 tonneaux)": "6",
            "Sucre (en Kg)": "683 000",
            "Café (Kg)": "570 000",
            "Epices (en Kg)": "1 023 400",
            "Fourrures (en pièces)": "4 340",
            "Tabac (en kg)": "321 000",
            "Coton (en kg)": "76 500",
            "Thé (en Kg)": "231 600",
            "Commerce estimé en livres tournois": "90 010 667",
            "Taxes": "6 923 897",
            "Droits de mouillage": "11 339 875",
            "Manufactures (textiles verreries imprimeries etc)": "60",
            "Production de fer (T)": "24 300",
            "Production de Fonte (T)": "510",
            "Production de cuivre (quintaux)": "2 054",
            "Production fusils": "97 500",
            "Production de canons": "400",
            "Production de canons navals": "188",
            "Production de poudre (T)": "74 500",
            "Industrie production en valeur": "43 131 100",
            "Taxe industrie": "3 163 610",
            "Nombre de manufactures d’armes ou arsenaux": "10",
            "Ouvriers": "1 070",
            "Reste après besoin en fusils (dans l’armée et marine)": "7 118",
            "Fusils (dans l'armée ou en réserve)": "7 118",
            "Besoin de canons navals": "758",
            "Réserve de canons navals": "-571",
            "Superficie du territoire en forêt": "20,87 %",
            "Production bois (Mcube)": "6 430 000",
            "Consommation de bois": "7 579 500",
            "Si excédent, vente ou achat si quantité insuffisante": "-11 495 000",
            "Taxes sur les excédents": "-1 149 500",
            "Nombre d’hectares de blé": "2 073 600",
            "production blé par an (en quintaux)": "14 515 200",
            "Consommation": "15 305 700",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-13 043 250",
            "Taxes sur les excédents (Blé)": "-195 649",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "870 400",
            "Production légumes:etc": "6 528 000",
            "Consommation (Légumes)": "7 077 500",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-3 297 000",
            "Taxes sur les excédents (Légumes)": "-65 940",
            "Nombre d’hectares de vigne": "153 600",
            "Production vin (hectolitres)": "1 536 000",
            "Consommation (Vin)": "2 980 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-64 980 000",
            "Taxes sur les excédents (Vin)": "-974 700",
            "Nombre d’hectares pour l’élevage": "1 792 000",
            "Recettes totales Pays": "110 741 135",
            "Dépenses totales": "107 635 450",
            "Coût maison du roi": "4 556 000",
            "Trésor": "8 105 685",
            "Dette": "0",
            "Excédent": "3 105 685",
            "Dette ou excédent en pourcentage des recettes": "2,80 %",
            "Charge de la dette": "0,0"
        }
    }, 
"Wellington": {
        "nom": "Wellington",
        "RAW_DATA": {
            "Population": "17 256 000", "Population des colonies": "24 129 000", "Dont colons blancs": "1 035 200", "Indigènes": "21 891 000", "Esclaves": "1 203 800",
            "Total population métropolitaine": "17 256 000", "Superficie métropole (km²)": "467 000", "Densité de population": "36,95",
            "Recettes fiscales (en livres tournois)": "509 644 566", "Impôts directs": "161 248 195", "Impôt foncier": "133 151 105", "Impôt sur le mobilier": "9 242 880", "Patente": "18 854 210",
            "Impôts indirects": "348 396 371", "Aides/autres impôts indirects": "100 131 200", "Enregistrement/successions": "108 315 000", "Douanes": "132 568 704", "Lotteries": "7 381 467",
            "Revenu national brut": "12 103 551 360", "Revenu moyen par hab": "628,56", "Dépenses militaires": "130 581 452", "Soldes": "50 940 813", "Salaires soldats": "24 335 707", "Salaires officiers": "26 605 106",
            "Salaires annuels soldats réguliers": "170,55", "Salaires conscrits": "155,45", "Salaires annuels sous-officiers": "300,00", "Salaires lieutenants": "1 000,00", "Salaires capitaines": "1 650,00",
            "Salaires lieutenants-colonels": "3 600,00", "Salaires colonels": "5 200,00", "Salaires généraux de brigade": "8 800,00", "Salaires généraux de division": "18 000,00",
            "Coût administration de la Guerre": "68 270 324", "Entretien des places": "5 468 400", "Budget de construction de places": "2 293 750", "Besoin en rations quotidiennes": "28 638 879", "Coût achat uniforme": "316 349",
            "Domaine de l’État (fermes en H ou bois)": "1 167 500", "Revenus des domaines": "7 005 000", "Coût fonctionnement Etat": "50 827 479", "Nombre d'administrateurs totaux": "19 571",
            "Secrétaires et administrations des ministères": "4 796", "Secrétaires et administrations des provinces/départements": "1 035", "Percepteurs d’impôts/douaniers/etc": "7 494", "Juges/chancellerie/etc": "1 710",
            "Préfets / gouverneurs": "45", "Sous-préfets/etc": "0", "Parlementaires": "360", "Personnels parlement": "1 080", "Personnel des armées": "3 051",
            "Nombre de départements / provinces": "45", "Secrétaires d'Etat": "11", "Gouverneurs / intendants / préfets": "45", "Coût des ministres et gouverneurs / préfets / intendants": "602 500",
            "Nombre de bâtiments à construire": "21", "Construction kilomètres de routes": "301", "Construction de ponts": "35", "Construction de canaux": "2",
            "Coûts travaux et entretiens infrastructures": "17 718 000", "Nombre de villes (+ 100 000)": "2", "Nombre de ville (100 000 – 20 000)": "8", "Nombre de villes (20 000- 5000)": "57",
            "Nombre de maires choisis par l’État": "67", "nombre de conseillers municipaux": "536", "Coûts fonctionnements villes": "422 100", "Revenus des villes": "806 241",
            "Nombre d’Universités": "10", "Nombre de lycées": "176", "Nombre d’écoles primaires": "2 283",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "137 543", "Années de service": "5", "Recrues « maximum » sur les années de service": "687 714", "Engagés réels": "110 850",
            "Nombre de soldats totaux": "110 850", "Pensionnaires, retraités ou demi-soldes": "10 810",
            "Entraînement par mois(manœuvres, tirs)": "21", "Coût": "3 608 165",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2", "Nombre de canons par compagnie": "8",
            "Nombre de compagnies d’artillerie à cheval": "12", "Nombre de compagnies d’artillerie totale": "56", "Nombre régiments artillerie": "8,1", "Nombre de canons de l’armée de campagne": "570",
            "Garde (Infanterie) régiment": "2,50", "Dont vélites": "1,50", "Grenadiers": "1,00", "Garde (Cavalerie)": "2,00", "Dragons": "1,00", "Grenadiers à cheval": "1,00",
            "Nombre soldats Garde": "7 600", "Soldats dans une compagnie": "50,0", "Sous-officiers et caporaux dans une compagnie": "7,0", "Total": "57,0",
            "Soldats dans un bataillon": "500,0", "Sous-officiers et caporaux": "70,0", "Soldats dans un régiment (pied de paix)": "625,0", "Sous-officiers et caporaux (Régiment Paix)": "140,0",
            "Soldats dans un régiment (pied de guerre)": "1 140,0", "Soldats dans une division": "3 125,0", "Sous-officiers et caporaux (Division)": "700,0", "Division sur pied de guerre": "5 700,0",
            "Nombre de Régiments de ligne": "60,0", "Régiments de grenadiers": "12,0", "Régiments de génie": "4,0", "Régiments d’infanterie légère": "15,0", "Nombre de régiments": "87,0", "Nombre de bataillons": "194,0",
            "Nombre de divisions": "17,4", "Fantassins (dont sous-officiers)": "66 555", "Fantassins recrutés (conscription)": "2 751", "(Soldats manquants pour le pied de guerre )": "-29 874",
            "Cavaliers dans un escadron": "105,0", "Sous-officiers et caporaux dans un escadron": "20,0", "Cavaliers dans un régiment": "750,0",
            "Régiments de hussards": "4,0", "Régiments de chasseurs à cheval": "12,0", "Régiments de dragons": "8,0", "Nombre total de régiments": "24,0",
            "Cavaliers dans une division de cavalerie": "1 500,0", "Nombre de divisions": "12,0", "Cavaliers": "18 000,0",
            "Armée permanente et garnison": "108 099", "Conscription": "2 751", "Canons": "2 275", "Rappel Dont canons de campagne": "570",
            "Infanterie": "69 306", "Proportion Cavalerie/infanterie": "25,97 %", "Artilleurs": "20 668", "Corps du génie (nombre de soldats)": "4 736",
            "Levée pour cette année (appelés de conscription)": "2 751", "Part sur les 1/140e": "2,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "155 667", "Besoin militaire": "44 069", "Excédent ou déficit": "111 598", "Achat chevaux": "8 671 247",
            "Forteresses": "56", "Forteresses 1ère classe": "1", "Forteresses 2e classe": "4",
            "Forteresses 3e et 4e classe": "41", "Forteresses de 4e classe ( 500 à 1300 hommes)": "31", "Forts – Poste militaire": "24",
            "Construction de places de premier rang": "1", "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "412", "Capacité de casernement": "107 600",
            "Construction de casernes": "36", "Coût (construction + entretien )": "1 930 000",
            "Artillerie des côtes": "105", "Constructions petites fortifications/fortifications côtières": "15",
            "Lieutenants": "9 254", "Capitaines": "4 427", "Lieutenants-colonels, chef d’escadrons et majors": "1 616", "Colonels": "762", "Généraux de brigade": "354", "Généraux de division": "193", "Total officiers": "13 286",
            "Nombre d'écoles militaires (armée)": "3", "Nombre d'élèves": "285",
            "Milices/garde nationale": "102 560", "Proportion par rapport à la population": "1/100", "Nombre de cohortes de Milices": "385", "Fusils disponibles": "65 000",
            "Milices coloniales": "91 760", "Proportion par rapport aux colons blancs": "1/20e", "Nombre de bataillons de miliciens": "184", "Fusils disponibles (Milices Col.)": "65 000",
            "Divisions militaires": "15", "Pensions (familles, récompenses des généraux, etc)": "2 118", "Pensions": "6 651 022",
            "Maréchaussée/gendarmerie/police": "16 047", "Coût maréchaussée": "10 350 100", "Messagers/personnels des postes": "3 843", "Coût (Poste)": "1 879 390",
            "Budget naval": "284 590 356", "Personnel administratif de la marine": "5 731", "Nombre de marins": "66 807", "Nombre de troupes de marines dans les navires": "12 995", "Salaires des marins": "558,00",
            "Salaires et pensions pour des marins": "55 413 027", "Salaires des officiers (Marine)": "24 101 500", "Nombre de marins dans la marine marchande": "211 500", "Pêcheurs": "26 937",
            "Navires de transport": "81", "Colons envoyés aux colonies": "9 097", "Coût colonisation": "5 169 308",
            "Population proche du littoral (-80km) et sur les fleuves": "16 835 567", "Réservoir de marins": "339 214", "Marins effectifs": "305 243", "Marins encore disponibles": "33 971",
            "Navires de ligne": "123", "+ de 80 canons": "10", "80 canons": "5", "74 canons": "50", "64 canons": "21", "50 canons": "12",
            "Navires de ligne actifs/armés": "81", "+ de 80 canons (Actifs)": "6", "80 canons (Actifs)": "5", "74 canons (Actifs)": "45", "64 canons (Actifs)": "17", "50 canons (Actifs)": "8",
            "Navires d’escortes": "322", "Frégates": "101", "Corvettes-Brig-Sloops-chébeqs": "77", "Sloops-Goelettes-shooners": "64",
            "Navires d’escortes actifs": "176", "Frégates (Actifs)": "55", "Corvettes- (Actifs)": "64", "Sloops-Goelettes-shooners (Actifs)": "57",
            "Enseignes de vaisseaux": "3 156", "Capitaine de frégate": "782", "Lieutenants de vaisseaux": "717", "Capitaines de vaisseaux": "315", "Contre-amiraux": "63", "Vice-amiraux": "32",
            "Ecoles navales": "3", "Elèves": "204",
            "Construction de vaisseaux": "16", "Constructions navales (+80 canons)": "3", "Constructions navales 80 canons": "2", "Constructions navales 74 canons": "10", "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "61", "Constructions navales (frégates)": "15", "Constructions navales Bricks-Corvettes": "12", "Constructions navales (Sloops-Goëlettes-Shooners)": "34",
            "Navires de ligne en radoub": "7", "Frégates ou navires d’escorte en radoub": "11",
            "Bâtiments de la Marine": "68", "Nombre de grands arsenaux maritimes": "7", "Petits arsenaux": "13", "Cales de radoubs (pour vaisseaux)": "14", "Nombre d’ouvriers": "22 980",
            "Coût construction navires": "47 130 000", "Entretien et approvisionnement des navires": "18 446 584", "Entretien et approvisionnement des arsenaux": "12 455 300",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "9 403 000", "Travaux dans les colonies": "5 490 000", "Forts dans les colonies": "68", "Constructions forts colonies": "2",
            "Navires de pêche": "3 367", "Navires marchands totaux": "11 570", "Cabotage (5 à 50 tonneaux)": "4 500", "Grand cabotage (50-100 tonneaux)": "2 910", "Commerce de haute mer (100-250 tonneaux)": "2 650", "Grand commerce (+ 250 tonneaux)": "1 510",
            "production navires marchands": "141", "Cabotage (5 à 50 tonneaux) (Prod)": "67", "Grand cabotage (50-100 tonneaux) (Prod)": "40", "Commerce de haute mer (100-200 tonneaux)": "14", "Grand commerce (+ 200 tonneaux)": "20",
            "Sucre (en Kg)": "47 230 500", "Café (Kg)": "7 340 000", "Epices (en Kg)": "4 900 780", "Fourrures (en pièces)": "175 310", "Tabac (en kg)": "2 890 000", "Coton (en kg)": "18 450 200", "Indigo (en kg)": "218 400", "Thé (en Kg)": "10 645 000",
            "Commerce estimé en livres tournois": "998 859 949", "Taxes": "83 238 329", "Droits de mouillage": "49 330 375",
            "Manufactures (textiles verreries imprimeries etc)": "454", "Production de fer (T)": "147 900", "Production de Fonte (T)": "14 200", "Production de cuivre (quintaux)": "13 730", "Production d'argent (Kg)": "25 450",
            "Production fusils": "195 000", "Production de canons": "1 200", "Production de canons navals": "1 875", "Production de poudre (T)": "300 000",
            "Industrie production en valeur": "238 872 000", "Taxe industrie": "18 854 210",
            "Nombre de manufactures d’armes ou arsenaux": "30", "Ouvriers": "4 350", "Reste après besoin en fusils (dans l’armée et marine)": "35 178", "Fusils (dans l'armée ou en réserve)": "35 178", "Besoin de canons navals": "2 634", "Réserve de canons navals": "-759",
            "Superficie du territoire en forêt": "21,71 %", "Production bois (Mcube)": "15 123 000", "Consommation de bois": "19 793 750", "Si excédent, vente ou achat si quantité insuffisante": "-46 707 500", "Taxes sur les excédents": "-5 604 900",
            "Nombre d’hectares de blé": "3 572 550", "production blé par an (en quintaux)": "19 649 025", "Consommation": "38 402 250", "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-309 428 213", "Taxes sur les excédents (Blé)": "-9 746 989",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "934 000", "Production légumes:etc": "7 005 000", "Consommation (Légumes)": "18 293 200", "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-67 729 200", "Taxes sur les excédents (Légumes)": "-1 693 230",
            "Nombre d’hectares de vigne": "280 200", "Production vin (hectolitres)": "6 444 600", "Consommation (Vin)": "13 479 200", "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-316 557 000", "Taxes sur les excédents (Vin)": "-6 489 419",
            "Nombre d’hectares pour l’élevage": "3 269 000",
            "Recettes totales Pays": "516 649 566", "Dépenses totales": "510 185 707", "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "-29 000 000",
            "Coût maison du roi": "15 467 000",
            "Trésor": "10 536 141", "Dette": "0", "Excédent": "0", "Dette ou excédent en pourcentage des recettes": "-4,36 %", "Charge de la dette": "-25 916 561,9"
        }
    },
    "Frédéric II": {
        "nom": "Frédéric II",
        "RAW_DATA": {
            "Population": "7 240 230",
            "Total population métropolitaine": "7 240 230",
            "Superficie métropole (km²)": "198 000",
            "Densité de population": "36,57",
            "Recettes fiscales (en livres tournois)": "67 108 379",
            "Impôts directs": "15 933 671",
            "Impôt foncier": "10 340 243",
            "Impôt sur le mobilier": "1 621 812",
            "Patente": "3 971 616",
            "Impôts indirects": "51 174 708",
            "Gabelle": "19 910 633",
            "Aides/autres impôts indirects": "21 720 690",
            "Douanes": "7 491 987",
            "Lotteries": "2 051 399",
            "Revenu national brut": "1 456 372 265",
            "Revenu moyen par hab": "201,15",
            "Dépenses militaires": "77 161 433",
            "Soldes": "29 121 823",
            "Salaires soldats": "22 405 789",
            "Salaires officiers": "6 716 034",
            "Salaires annuels soldats réguliers": "100,25",
            "Salaires conscrits": "95,75",
            "Salaires annuels sous-officiers": "200,00",
            "Salaires lieutenants": "650,00",
            "Salaires capitaines": "1 000,00",
            "Salaires lieutenants-colonels": "2 000,00",
            "Salaires colonels": "3 000,00",
            "Salaires généraux de brigade": "5 000,00",
            "Salaires généraux de division": "7 500,00",
            "Coût administration de la Guerre": "41 404 243",
            "Entretien des places": "2 365 800",
            "Besoin en rations quotidiennes": "15 457 183",
            "Coût achat uniforme": "1 189 466",
            "Domaine de l’État (fermes en H ou bois)": "990 000",
            "Revenus des domaines": "12 375 000",
            "Coût fonctionnement Etat": "4 295 550",
            "Nombre d'administrateurs totaux": "6 239",
            "Secrétaires et administrations des ministères": "280",
            "Secrétaires et administrations des provinces/départements": "322",
            "Percepteurs d’impôts/douaniers/etc": "4 213",
            "Juges/chancellerie/etc": "532",
            "Préfets / gouverneurs": "14",
            "Sous-préfets/etc": "0",
            "Parlementaires": "0",
            "Personnels parlement": "0",
            "Personnel des armées": "878",
            "Nombre de départements / provinces": "14",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "14",
            "Coût des ministres et gouverneurs / préfets / intendants": "185 500",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "88",
            "Construction de ponts": "0",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "874 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "6",
            "Nombre de villes (20 000- 5000)": "19",
            "Nombre de maires choisis par l’État": "26",
            "nombre de conseillers municipaux": "104",
            "Coûts fonctionnements villes": "91 000",
            "Revenus des villes": "79 668",
            "Nombre d’Universités": "7",
            "Nombre de lycées": "79",
            "Nombre d’écoles primaires": "428",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "51 716",
            "Années de service": "11",
            "Recrues « maximum » sur les années de service": "568 875",
            "Engagés réels": "141 846",
            "Nombre de soldats totaux": "141 846",
            "Pensionnaires, retraités ou demi-soldes": "10 959",
            "Entraînement par mois(manœuvres, tirs)": "20",
            "Coût": "4 269 566",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie à cheval": "16",
            "Nombre de compagnies d’artillerie totale": "48",
            "Nombre régiments artillerie": "6,9",
            "Nombre de canons de l’armée de campagne": "465",
            "Garde (Infanterie) régiment": "2,00",
            "Grenadiers": "1,00",
            "Tirailleurs-grenadiers": "1,00",
            "Garde (Cavalerie)": "1,50",
            "Dragons": "1,50",
            "Nombre soldats Garde": "6 000",
            "Soldats dans une compagnie": "100,0",
            "Sous-officiers et caporaux dans une compagnie": "12,0",
            "Total": "112,0",
            "Soldats dans un bataillon": "800,0",
            "Sous-officiers et caporaux": "96,0",
            "Soldats dans un régiment (pied de paix)": "1 200,0",
            "Sous-officiers et caporaux (Régiment Paix)": "192,0",
            "Soldats dans un régiment (pied de guerre)": "1 792,0",
            "Soldats dans une division": "3 600,0",
            "Sous-officiers et caporaux (Division)": "576,0",
            "Division sur pied de guerre": "5 376,0",
            "Nombre de Régiments de ligne": "45,0",
            "Régiments de grenadiers": "15,0",
            "Régiments de génie": "1,5",
            "Régiments d’infanterie légère": "5,0",
            "Nombre de régiments": "65,0",
            "Nombre de bataillons": "193,0",
            "Fantassins (dont sous-officiers)": "90 480",
            "Fantassins recrutés (conscription)": "10 343",
            "(Soldats manquants pour le pied de guerre )": "-15 657",
            "Cavaliers dans un escadron": "120,0",
            "Sous-officiers et caporaux dans un escadron": "20,0",
            "Cavaliers dans un régiment": "840,0",
            "Régiments de hussards": "10,0",
            "Régiments de chasseurs à cheval": "10,0",
            "Régiments de dragons": "8,0",
            "Régiments de cuirassiers": "3,0",
            "Nombre total de régiments": "31,0",
            "Cavaliers dans une division de cavalerie": "1 680,0",
            "Nombre de divisions": "15,5",
            "Cavaliers": "26 040,0",
            "Armée permanente et garnison": "131 503",
            "Conscription": "10 343",
            "Canons": "1 716",
            "Rappel Dont canons de campagne": "465",
            "Infanterie": "100 823",
            "Proportion Cavalerie/infanterie": "25,83 %",
            "Artilleurs": "15 449",
            "Corps du génie (nombre de soldats)": "1 776",
            "Levée pour cette année (appelés de conscription)": "10 343",
            "Part sur les 1/140e": "20,00 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "66 000",
            "Besoin militaire": "39 265",
            "Excédent ou déficit": "26 735",
            "Achat chevaux": "14 995 708",
            "Forteresses": "36",
            "Forteresses 2e classe": "5",
            "Forteresses 3e et 4e classe": "21",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "21",
            "Forts – Poste militaire": "19",
            "Nombre de casernes (1 caserne = 250 logements)": "266",
            "Capacité de casernement": "67 450",
            "Coût (construction + entretien )": "665 000",
            "Artillerie des côtes": "16",
            "Lieutenants": "3 315",
            "Capitaines": "1 657",
            "Lieutenants-colonels, chef d’escadrons et majors": "631",
            "Colonels": "270",
            "Généraux de brigade": "101",
            "Généraux de division": "44",
            "Total officiers": "6 017",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "156",
            "Milices/garde nationale": "28 961",
            "Proportion par rapport à la population": "1/250e",
            "Nombre de cohortes de Milices": "58",
            "Fusils disponibles": "8 000",
            "Divisions militaires": "7",
            "Pensions (familles, récompenses des généraux, etc)": "290",
            "Pensions": "419 933",
            "Maréchaussée/gendarmerie/police": "4 993",
            "Coût maréchaussée": "1 003 646",
            "Messagers/personnels des postes": "1 382",
            "Coût (Poste)": "277 723",
            "Budget naval": "1 322 367",
            "Personnel administratif de la marine": "55",
            "Salaires des marins": "80,55",
            "Salaires des officiers (Marine)": "6 800",
            "Nombre de marins dans la marine marchande": "2 449",
            "Pêcheurs": "845",
            "Navires de transport": "0",
            "Coût colonisation": "0",
            "Population proche du littoral (-80km) et sur les fleuves": "704 000",
            "Réservoir de marins": "9 387",
            "Marins effectifs": "3 294",
            "Marins encore disponibles": "6 093",
            "Navires de ligne": "0",
            "Navires d’escortes": "3",
            "Corvettes-Brig-Sloops-chébeqs": "1",
            "Sloops-Goelettes-shooners": "2",
            "Enseignes de vaisseaux": "3",
            "Lieutenants de vaisseaux": "1",
            "Ecoles navales": "0",
            "Elèves": "0",
            "Construction de navires légers": "0",
            "Bâtiments de la Marine": "2",
            "Petits arsenaux": "1",
            "Nombre d’ouvriers": "220",
            "Entretien et approvisionnement des navires": "252 317",
            "Entretien et approvisionnement des arsenaux": "108 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "101 000",
            "Navires de pêche": "141",
            "Navires marchands totaux": "311",
            "Cabotage (5 à 50 tonneaux)": "211",
            "Grand cabotage (50-100 tonneaux)": "81",
            "Commerce de haute mer (100-250 tonneaux)": "11",
            "Grand commerce (+ 250 tonneaux)": "8",
            "production navires marchands": "24",
            "Cabotage (5 à 50 tonneaux) (Prod)": "8",
            "Grand cabotage (50-100 tonneaux) (Prod)": "6",
            "Commerce de haute mer (100-200 tonneaux)": "7",
            "Grand commerce (+ 200 tonneaux)": "3",
            "Fourrures (en pièces)": "7 680",
            "Commerce estimé en livres tournois": "12 377 368",
            "Taxes": "1 237 737",
            "Droits de mouillage": "6 254 250",
            "Manufactures (textiles verreries imprimeries etc)": "47",
            "Production de fer (T)": "22 450",
            "Production de Fonte (T)": "1 580",
            "Production de cuivre (quintaux)": "3 580",
            "Production d'argent (Kg)": "2 450",
            "Production fusils": "54 000",
            "Production de canons": "450",
            "Production de canons navals": "34",
            "Production de poudre (T)": "90 000",
            "Industrie production en valeur": "37 544 500",
            "Taxe industrie": "3 971 616",
            "Nombre de manufactures d’armes ou arsenaux": "13",
            "Ouvriers": "1 845",
            "Reste après besoin en fusils (dans l’armée et marine)": "12 353",
            "Fusils (dans l'armée ou en réserve)": "12 353",
            "Besoin de canons navals": "0",
            "Réserve de canons navals": "34",
            "Superficie du territoire en forêt": "24,13 %",
            "Production bois (Mcube)": "7 420 340",
            "Consommation de bois": "7 258 230",
            "Si excédent, vente ou achat si quantité insuffisante": "1 621 100",
            "Taxes sur les excédents": "162 110",
            "Nombre d’hectares de blé": "2 067 120",
            "production blé par an (en quintaux)": "13 436 280",
            "Consommation": "14 572 526",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-18 748 051",
            "Taxes sur les excédents (Blé)": "-281 221",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "396 000",
            "Production légumes:etc": "2 970 000",
            "Consommation (Légumes)": "6 878 219",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-23 449 311",
            "Taxes sur les excédents (Légumes)": "-468 986",
            "Nombre d’hectares de vigne": "118 800",
            "Production vin (hectolitres)": "2 138 400",
            "Consommation (Vin)": "2 172 069",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-1 515 105",
            "Taxes sur les excédents (Vin)": "-75 755",
            "Nombre d’hectares pour l’élevage": "1 386 000",
            "Recettes totales Pays": "79 645 489",
            "Dépenses totales": "88 925 128",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "4 000 000",
            "Coût maison du roi": "3 902 000",
            "Trésor": "11 279 640",
            "Dette": "0",
            "Excédent": "0",
            "Dette ou excédent en pourcentage des recettes": "0",
            "Charge de la dette": "0"
        }
    },
    "Charles Quint": {
        "nom": "Charles Quint",
        "RAW_DATA": {
            "Population": "10 193 000",
            "Population des colonies": "4 169 900",
            "Dont colons blancs": "780 900",
            "Indigènes": "3 145 000",
            "Esclaves": "244 000",
            "Total population métropolitaine": "10 193 000",
            "Superficie métropole (km²)": "521 840",
            "Densité de population": "19,53",
            "Recettes fiscales (en livres tournois)": "86 042 659",
            "Impôts directs": "25 994 623",
            "Impôt foncier": "11 801 367",
            "Impôt sur le mobilier": "1 049 879",
            "Patente": "13 143 378",
            "Impôts indirects": "60 048 036",
            "Gabelle": "19 876 350",
            "Aides/autres impôts indirects": "15 677 885",
            "Douanes": "21 605 784",
            "Lotteries": "2 888 017",
            "Revenu national brut": "1 852 883 540",
            "Revenu moyen par hab": "181,78",
            "Dépenses militaires": "42 380 964",
            "Soldes": "14 194 792",
            "Salaires soldats": "9 333 079",
            "Salaires officiers": "4 861 712",
            "Salaires annuels soldats réguliers": "105,25",
            "Salaires conscrits": "80,00",
            "Salaires annuels sous-officiers": "215,50",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 050,00",
            "Salaires lieutenants-colonels": "2 100,00",
            "Salaires colonels": "3 500,00",
            "Salaires généraux de brigade": "6 500,00",
            "Salaires généraux de division": "10 500,00",
            "Coût administration de la Guerre": "24 309 176",
            "Entretien des places": "2 801 400",
            "Budget de construction de places": "223 750",
            "Besoin en rations quotidiennes": "17 241 275",
            "Coût achat uniforme": "558 188",
            "Domaine de l’État (fermes en H ou bois)": "1 490 971",
            "Revenus des domaines": "7 082 114",
            "Coût fonctionnement Etat": "10 315 136",
            "Nombre d'administrateurs totaux": "14 885",
            "Secrétaires et administrations des ministères": "910",
            "Secrétaires et administrations des provinces/départements": "713",
            "Percepteurs d’impôts/douaniers/etc": "8 724",
            "Juges/chancellerie/etc": "1 178",
            "Préfets / gouverneurs": "31",
            "Sous-préfets/etc": "0",
            "Parlementaires": "341",
            "Personnels parlement": "1 194",
            "Personnel des armées": "1 794",
            "Nombre de départements / provinces": "31",
            "Secrétaires d'Etat": "10",
            "Gouverneurs / intendants / préfets": "31",
            "Coût des ministres et gouverneurs / préfets / intendants": "398 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "158",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 464 000",
            "Nombre de villes (+ 100 000)": "0",
            "Nombre de ville (100 000 – 20 000)": "8",
            "Nombre de villes (20 000- 5000)": "43",
            "Nombre de maires choisis par l’État": "51",
            "nombre de conseillers municipaux": "255",
            "Coûts fonctionnements villes": "137 700",
            "Revenus des villes": "129 973",
            "Nombre d’Universités": "8",
            "Nombre de lycées": "67",
            "Nombre d’écoles primaires": "847",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "72 807",
            "Années de service": "2",
            "Recrues « maximum » sur les années de service": "145 614",
            "Engagés réels": "78 511",
            "Nombre de soldats totaux": "78 511",
            "Pensionnaires, retraités ou demi-soldes": "8 184",
            "Entraînement par mois(manœuvres, tirs)": "7",
            "Coût": "851 847",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie totale": "19",
            "Nombre régiments artillerie": "3,4",
            "Nombre de canons de l’armée de campagne": "233",
            "Garde (Infanterie) régiment": "2,00",
            "Dont vélites": "1,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "2,50",
            "Lanciers": "1,00",
            "Dragons": "1,50",
            "Nombre soldats Garde": "6 800",
            "Soldats dans une compagnie": "50,0",
            "Sous-officiers et caporaux dans une compagnie": "5,0",
            "Total": "55,0",
            "Soldats dans un bataillon": "500,0",
            "Sous-officiers et caporaux": "50,0",
            "Soldats dans un régiment (pied de paix)": "1 000,0",
            "Sous-officiers et caporaux (Régiment Paix)": "150,0",
            "Soldats dans un régiment (pied de guerre)": "1 650,0",
            "Soldats dans une division": "3 000,0",
            "Sous-officiers et caporaux (Division)": "450,0",
            "Division sur pied de guerre": "4 950,0",
            "Nombre de Régiments de ligne": "32,0",
            "Régiments de grenadiers": "3,0",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "37,0",
            "Nombre de bataillons": "111,0",
            "Fantassins (dont sous-officiers)": "42 550",
            "Fantassins recrutés (conscription)": "4 854",
            "(Soldats manquants pour le pied de guerre )": "-13 646",
            "Cavaliers dans un escadron": "150,0",
            "Sous-officiers et caporaux dans un escadron": "15,0",
            "Cavaliers dans un régiment": "660,0",
            "Régiments de hussards": "8,0",
            "Régiments de Uhlans/chevau-légers": "8,0",
            "Régiments de dragons": "6,0",
            "Nombre total de régiments": "22,0",
            "Cavaliers": "14 520,0",
            "Armée permanente et garnison": "73 657",
            "Conscription": "4 854",
            "Canons": "1 490",
            "Rappel Dont canons de campagne": "233",
            "Infanterie": "47 404",
            "Proportion Cavalerie/infanterie": "30,63 %",
            "Artilleurs": "11 817",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "4 854",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "173 947",
            "Besoin militaire": "25 499",
            "Excédent ou déficit": "148 447",
            "Achat chevaux": "-3 370 003",
            "Forteresses": "43",
            "Forteresses 1ère classe": "1",
            "Forteresses 2e classe": "3",
            "Forteresses 3e et 4e classe": "29",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "29",
            "Forts – Poste militaire": "25",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "288",
            "Capacité de casernement": "74 300",
            "Construction de casernes": "4",
            "Coût (construction + entretien )": "820 000",
            "Artillerie des côtes": "31",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "3 244",
            "Capitaines": "1 622",
            "Lieutenants-colonels, chef d’escadrons et majors": "633",
            "Colonels": "245",
            "Généraux de brigade": "73",
            "Généraux de division": "47",
            "Total officiers": "5 865",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "160",
            "Milices/garde nationale": "50 965",
            "Proportion par rapport à la population": "1/200",
            "Nombre de cohortes de Milices": "102",
            "Fusils disponibles": "4 500",
            "Milices coloniales": "39 045",
            "Proportion par rapport aux colons blancs": "1/20e",
            "Nombre de bataillons de miliciens": "78",
            "Fusils disponibles (Milices Col.)": "11 000",
            "Divisions militaires": "14",
            "Pensions (familles, récompenses des généraux, etc)": "2 141",
            "Pensions": "4 174 034",
            "Maréchaussée/gendarmerie/police": "5 097",
            "Coût maréchaussée": "1 962 153",
            "Messagers/personnels des postes": "2 007",
            "Coût (Poste)": "953 246",
            "Budget naval": "28 449 086",
            "Personnel administratif de la marine": "298",
            "Nombre de marins": "6 586",
            "Nombre de troupes de marines dans les navires": "740",
            "Salaires des marins": "102,40",
            "Salaires et pensions pour des marins": "1 267 714",
            "Salaires des officiers (Marine)": "1 872 750",
            "Nombre de marins dans la marine marchande": "17 209",
            "Pêcheurs": "6 344",
            "Navires de transport": "42",
            "Colons envoyés aux colonies": "2 726",
            "Coût colonisation": "1 718 670",
            "Population proche du littoral (-80km) et sur les fleuves": "5 287 000",
            "Réservoir de marins": "94 027",
            "Marins effectifs": "30 139",
            "Marins encore disponibles": "63 888",
            "Navires de ligne": "48",
            "+ de 80 canons": "2",
            "80 canons": "3",
            "74 canons": "8",
            "64 canons": "22",
            "50 canons": "13",
            "Navires de ligne actifs/armés": "7",
            "74 canons (Actifs)": "2",
            "64 canons (Actifs)": "3",
            "50 canons (Actifs)": "2",
            "Navires d’escortes": "84",
            "Frégates": "21",
            "Corvettes-Brig-Sloops-chébeqs": "35",
            "Sloops-Goelettes-shooners": "28",
            "Navires d’escortes actifs": "31",
            "Frégates (Actifs)": "4",
            "Corvettes- (Actifs)": "7",
            "Sloops-Goelettes-shooners (Actifs)": "20",
            "Enseignes de vaisseaux": "261",
            "Capitaine de frégate": "67",
            "Lieutenants de vaisseaux": "181",
            "Capitaines de vaisseaux": "83",
            "Contre-amiraux": "17",
            "Vice-amiraux": "8",
            "Ecoles navales": "1",
            "Elèves": "65",
            "Construction de vaisseaux": "5",
            "Constructions navales 74 canons": "1",
            "Constructions navales (64-50 canons)": "4",
            "Construction de navires légers": "6",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "3",
            "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "2",
            "Bâtiments de la Marine": "16",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "2",
            "Nombre d’ouvriers": "5 300",
            "Coût construction navires": "3 685 000",
            "Entretien et approvisionnement des navires": "2 647 190",
            "Entretien et approvisionnement des arsenaux": "1 283 400",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 047 000",
            "Travaux dans les colonies": "545 000",
            "Forts dans les colonies": "21",
            "Constructions forts colonies": "2",
            "Navires de pêche": "1 057",
            "Navires marchands totaux": "1 099",
            "Cabotage (5 à 50 tonneaux)": "401",
            "Grand cabotage (50-100 tonneaux)": "395",
            "Commerce de haute mer (100-250 tonneaux)": "201",
            "Grand commerce (+ 250 tonneaux)": "102",
            "production navires marchands": "27",
            "Cabotage (5 à 50 tonneaux) (Prod)": "11",
            "Grand cabotage (50-100 tonneaux) (Prod)": "5",
            "Commerce de haute mer (100-200 tonneaux)": "4",
            "Grand commerce (+ 200 tonneaux)": "7",
            "Sucre (en Kg)": "8 623 000",
            "Café (Kg)": "4 561 000",
            "Epices (en Kg)": "934 620",
            "Fourrures (en pièces)": "3 620",
            "Tabac (en kg)": "4 480 000",
            "Coton (en kg)": "866 700",
            "Indigo (en kg)": "1 547 000",
            "Thé (en Kg)": "52 345",
            "Commerce estimé en livres tournois": "107 255 507",
            "Taxes": "8 937 959",
            "Droits de mouillage": "12 667 825",
            "Manufactures (textiles verreries imprimeries etc)": "37",
            "Production de fer (T)": "2 100",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "9 140",
            "Production d'argent (Kg)": "414 650",
            "Production fusils": "36 050",
            "Production de canons": "280",
            "Production de canons navals": "131",
            "Production de poudre (T)": "70 000",
            "Industrie production en valeur": "23 739 750",
            "Taxe industrie": "13 143 378",
            "Nombre de manufactures d’armes ou arsenaux": "7",
            "Ouvriers": "1 435",
            "Reste après besoin en fusils (dans l’armée et marine)": "-48 168",
            "Fusils (dans l'armée ou en réserve)": "-48 168",
            "Besoin de canons navals": "472",
            "Réserve de canons navals": "-341",
            "Superficie du territoire en forêt": "24,67 %",
            "Production bois (Mcube)": "12 510 000",
            "Consommation de bois": "10 267 250",
            "Si excédent, vente ou achat si quantité insuffisante": "22 427 500",
            "Taxes sur les excédents": "2 242 750",
            "Nombre d’hectares de blé": "4 383 456",
            "production blé par an (en quintaux)": "26 300 736",
            "Consommation": "21 961 998",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "53 831 070",
            "Taxes sur les excédents (Blé)": "807 466",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 043 680",
            "Production légumes:etc": "7 827 600",
            "Consommation (Légumes)": "9 683 350",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-11 134 500",
            "Taxes sur les excédents (Légumes)": "-222 690",
            "Nombre d’hectares de vigne": "313 104",
            "Production vin (hectolitres)": "8 845 188",
            "Consommation (Vin)": "7 644 750",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "48 844 710",
            "Taxes sur les excédents (Vin)": "1 465 341",
            "Nombre d’hectares pour l’élevage": "3 652 880",
            "Recettes totales Pays": "97 640 330",
            "Dépenses totales": "97 902 618",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "4 000 000",
            "Coût maison du roi": "9 270 000",
            "Trésor": "12 737 713",
            "Dette": "0",
            "Excédent": "3 737 713",
            "Dette ou excédent en pourcentage des recettes": "3,83 %",
            "Charge de la dette": "0,0"
        }
    }, 
"Louis XIII": {
        "nom": "Louis XIII",
        "RAW_DATA": {
            "Population": "19 331 000",
            "Population des colonies": "106 300",
            "Dont colons blancs": "20 100",
            "Indigènes": "45 800",
            "Esclaves": "40 400",
            "Total population métropolitaine": "19 331 000",
            "Superficie métropole (km²)": "625 000",
            "Densité de population": "30,93",
            "Recettes fiscales (en livres tournois)": "150 292 654",
            "Impôts directs": "38 606 200",
            "Impôt foncier": "28 357 031",
            "Impôt sur le mobilier": "3 924 193",
            "Patente": "6 324 976",
            "Impôts indirects": "111 686 454",
            "Gabelle": "38 662 000",
            "Aides/autres impôts indirects": "38 662 000",
            "Enregistrement/successions": "13 531 700",
            "Douanes": "15 353 637",
            "Lotteries": "5 477 117",
            "Revenu national brut": "4 051 004 360",
            "Revenu moyen par hab": "209,56",
            "Dépenses militaires": "83 650 986",
            "Soldes": "28 555 672",
            "Salaires soldats": "21 510 240",
            "Salaires officiers": "7 045 431",
            "Salaires annuels soldats réguliers": "100,00",
            "Salaires conscrits": "91,25",
            "Salaires annuels sous-officiers": "200,00",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 025,00",
            "Salaires lieutenants-colonels": "2 200,00",
            "Salaires colonels": "3 250,00",
            "Salaires généraux de brigade": "7 000,00",
            "Salaires généraux de division": "11 000,00",
            "Coût administration de la Guerre": "46 475 061",
            "Entretien des places": "6 443 400",
            "Budget de construction de places": "573 750",
            "Besoin en rations quotidiennes": "24 089 929",
            "Coût achat uniforme": "1 058 602",
            "Domaine de l’État (fermes en H ou bois)": "3 125 000",
            "Revenus des domaines": "17 187 500",
            "Coût fonctionnement Etat": "8 697 135",
            "Nombre d'administrateurs totaux": "13 029",
            "Secrétaires et administrations des ministères": "712",
            "Secrétaires et administrations des provinces/départements": "506",
            "Percepteurs d’impôts/douaniers/etc": "7 876",
            "Juges/chancellerie/etc": "836",
            "Préfets / gouverneurs": "22",
            "Sous-préfets/etc": "0",
            "Parlementaires": "176",
            "Personnels parlement": "528",
            "Personnel des armées": "2 373",
            "Nombre de départements / provinces": "22",
            "Secrétaires d'Etat": "8",
            "Gouverneurs / intendants / préfets": "22",
            "Coût des ministres et gouverneurs / préfets / intendants": "296 000",
            "Nombre de bâtiments à construire": "3",
            "Construction kilomètres de routes": "167",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 621 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "7",
            "Nombre de villes (20 000- 5000)": "34",
            "Nombre de maires choisis par l’État": "42",
            "nombre de conseillers municipaux": "336",
            "Coûts fonctionnements villes": "264 600",
            "Revenus des villes": "193 031",
            "Nombre d’Universités": "8",
            "Nombre de lycées": "114",
            "Nombre d’écoles primaires": "670",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "138 079",
            "Années de service": "4",
            "Recrues « maximum » sur les années de service": "552 314",
            "Engagés réels": "110 559",
            "Nombre de soldats totaux": "110 559",
            "Pensionnaires, retraités ou demi-soldes": "11 262",
            "Entraînement par mois(manœuvres, tirs)": "10",
            "Coût": "1 603 103",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie totale": "34",
            "Nombre régiments artillerie": "5,6",
            "Nombre de canons de l’armée de campagne": "367",
            "Garde (Infanterie) régiment": "2,50",
            "Dont vélites": "1,50",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "3,00",
            "dont chasseurs à cheval": "3,00",
            "Nombre soldats Garde": "8 400",
            "Soldats dans une compagnie": "150,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "165,0",
            "Soldats dans un bataillon": "750,0",
            "Sous-officiers et caporaux": "75,0",
            "Soldats dans un régiment (pied de paix)": "750,0",
            "Sous-officiers et caporaux (Régiment Paix)": "150,0",
            "Soldats dans un régiment (pied de guerre)": "1 650,0",
            "Soldats dans une division": "2 250,0",
            "Sous-officiers et caporaux (Division)": "450,0",
            "Division sur pied de guerre": "4 950,0",
            "Nombre de Régiments de ligne": "60,0",
            "Régiments de grenadiers": "5,0",
            "Régiments de génie": "2,0",
            "Régiments d’infanterie légère": "2,0",
            "Nombre de régiments": "67,0",
            "Nombre de bataillons": "201,0",
            "Fantassins (dont sous-officiers)": "60 300",
            "Fantassins recrutés (conscription)": "9 205",
            "(Soldats manquants pour le pied de guerre )": "-41 045",
            "Cavaliers dans un escadron": "120,0",
            "Sous-officiers et caporaux dans un escadron": "10,0",
            "Cavaliers dans un régiment": "520,0",
            "Régiments de hussards": "8,0",
            "Régiments de chasseurs à cheval": "10,0",
            "Régiments de dragons": "10,0",
            "Régiments de cuirassiers": "6,0",
            "Nombre total de régiments": "34,0",
            "Cavaliers": "17 680,0",
            "Armée permanente et garnison": "101 354",
            "Conscription": "9 205",
            "Canons": "2 629",
            "Rappel Dont canons de campagne": "367",
            "Infanterie": "69 505",
            "Proportion Cavalerie/infanterie": "25,44 %",
            "Artilleurs": "18 028",
            "Corps du génie (nombre de soldats)": "2 368",
            "Levée pour cette année (appelés de conscription)": "9 205",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "208 333",
            "Besoin militaire": "33 724",
            "Excédent ou déficit": "174 609",
            "Achat chevaux": "-2 285 150",
            "Forteresses": "63",
            "Forteresses 1ère classe": "2",
            "Forteresses 2e classe": "5",
            "Forteresses 3e et 4e classe": "45",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "35",
            "Forts – Poste militaire": "37",
            "Construction de places de troisième rang": "1",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "468",
            "Capacité de casernement": "119 050",
            "Construction de casernes": "12",
            "Coût (construction + entretien )": "1 470 000",
            "Artillerie des côtes": "40",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "4 514",
            "Capitaines": "2 257",
            "Lieutenants-colonels, chef d’escadrons et majors": "893",
            "Colonels": "363",
            "Généraux de brigade": "98",
            "Généraux de division": "82",
            "Total officiers": "8 207",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "310",
            "Milices/garde nationale": "96 655",
            "Proportion par rapport à la population": "1/200",
            "Nombre de cohortes de Milices": "193",
            "Fusils disponibles": "17 000",
            "Milices coloniales": "2 010",
            "Proportion par rapport aux colons blancs": "1/10e",
            "Nombre de bataillons de miliciens": "4",
            "Fusils disponibles (Milices Col.)": "700",
            "Divisions militaires": "17",
            "Pensions (familles, récompenses des généraux, etc)": "3 866",
            "Pensions": "11 366 628",
            "Maréchaussée/gendarmerie/police": "9 666",
            "Coût maréchaussée": "2 522 696",
            "Messagers/personnels des postes": "3 549",
            "Coût (Poste)": "1 071 748",
            "Budget naval": "46 344 325",
            "Personnel administratif de la marine": "298",
            "Nombre de marins": "2 004",
            "Nombre de troupes de marines dans les navires": "230",
            "Salaires des marins": "110,10",
            "Salaires et pensions pour des marins": "617 072",
            "Salaires des officiers (Marine)": "1 338 650",
            "Nombre de marins dans la marine marchande": "9 680",
            "Pêcheurs": "6 121",
            "Navires de transport": "24",
            "Colons envoyés aux colonies": "1 260",
            "Coût colonisation": "968 700",
            "Population proche du littoral (-80km) et sur les fleuves": "5 101 200",
            "Réservoir de marins": "68 016",
            "Marins effectifs": "17 805",
            "Marins encore disponibles": "50 211",
            "Navires de ligne": "37",
            "80 canons": "2",
            "74 canons": "9",
            "64 canons": "15",
            "50 canons": "11",
            "Navires de ligne actifs/armés": "2",
            "64 canons (Actifs)": "1",
            "50 canons (Actifs)": "1",
            "Navires d’escortes": "48",
            "Frégates": "17",
            "Corvettes-Brig-Sloops-chébeqs": "21",
            "Sloops-Goelettes-shooners": "10",
            "Navires d’escortes actifs": "4",
            "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "2",
            "Enseignes de vaisseaux": "160",
            "Capitaine de frégate": "47",
            "Lieutenants de vaisseaux": "129",
            "Capitaines de vaisseaux": "63",
            "Contre-amiraux": "13",
            "Vice-amiraux": "6",
            "Ecoles navales": "1",
            "Elèves": "44",
            "Construction de vaisseaux": "6",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "3",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "8",
            "Constructions navales (frégates)": "5",
            "Constructions navales Bricks-Corvettes": "2",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "3",
            "Bâtiments de la Marine": "16",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "2",
            "Nombre d’ouvriers": "5 340",
            "Coût construction navires": "13 920 000",
            "Entretien et approvisionnement des navires": "2 299 084",
            "Entretien et approvisionnement des arsenaux": "1 283 400",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 212 000",
            "Travaux dans les colonies": "234 000",
            "Forts dans les colonies": "4",
            "Navires de pêche": "1 020",
            "Navires marchands totaux": "835",
            "Cabotage (5 à 50 tonneaux)": "485",
            "Grand cabotage (50-100 tonneaux)": "222",
            "Commerce de haute mer (100-250 tonneaux)": "70",
            "Grand commerce (+ 250 tonneaux)": "58",
            "production navires marchands": "35",
            "Cabotage (5 à 50 tonneaux) (Prod)": "13",
            "Grand cabotage (50-100 tonneaux) (Prod)": "5",
            "Commerce de haute mer (100-200 tonneaux)": "7",
            "Grand commerce (+ 200 tonneaux)": "10",
            "Sucre (en Kg)": "458 400",
            "Café (Kg)": "261 000",
            "Epices (en Kg)": "240 890",
            "Fourrures (en pièces)": "21 900",
            "Tabac (en kg)": "263 400",
            "Coton (en kg)": "62 300",
            "Indigo (en kg)": "51 200",
            "Thé (en Kg)": "312 000",
            "Commerce estimé en livres tournois": "50 524 875",
            "Taxes": "5 052 487",
            "Droits de mouillage": "10 301 150",
            "Manufactures (textiles verreries imprimeries etc)": "37",
            "Production de fer (T)": "23 450",
            "Production de Fonte (T)": "1 110",
            "Production de cuivre (quintaux)": "24 580",
            "Production d'argent (Kg)": "10 750",
            "Production fusils": "112 000",
            "Production de canons": "760",
            "Production de canons navals": "240",
            "Production de poudre (T)": "160 000",
            "Industrie production en valeur": "70 427 000",
            "Taxe industrie": "6 324 976",
            "Nombre de manufactures d’armes ou arsenaux": "16",
            "Ouvriers": "3 280",
            "Reste après besoin en fusils (dans l’armée et marine)": "12 625",
            "Fusils (dans l'armée ou en réserve)": "12 625",
            "Besoin de canons navals": "726",
            "Réserve de canons navals": "-486",
            "Superficie du territoire en forêt": "23,34 %",
            "Production bois (Mcube)": "20 815 520",
            "Consommation de bois": "19 427 250",
            "Si excédent, vente ou achat si quantité insuffisante": "13 882 700",
            "Taxes sur les excédents": "1 388 270",
            "Nombre d’hectares de blé": "5 715 625",
            "production blé par an (en quintaux)": "42 867 188",
            "Consommation": "39 481 100",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "39 541 313",
            "Taxes sur les excédents (Blé)": "988 533",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 500 000",
            "Production légumes:etc": "13 500 000",
            "Consommation (Légumes)": "18 364 450",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-29 186 700",
            "Taxes sur les excédents (Légumes)": "-291 867",
            "Nombre d’hectares de vigne": "570 000",
            "Production vin (hectolitres)": "16 530 000",
            "Consommation (Vin)": "14 498 250",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "76 670 000",
            "Taxes sur les excédents (Vin)": "3 833 500",
            "Nombre d’hectares pour l’élevage": "4 375 000",
            "Recettes totales Pays": "173 690 457",
            "Dépenses totales": "162 629 517",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "7 000 000",
            "Coût maison du roi": "8 680 000",
            "Trésor": "1 060 940",
            "Dette": "0",
            "Excédent": "11 060 940",
            "Dette ou excédent en pourcentage des recettes": "6,37 %",
            "Charge de la dette": "0,0"
        }
    },
    "Pierre le Grand": {
        "nom": "Pierre le Grand",
        "RAW_DATA": {
            "Population": "20 640 100",
            "Total population métropolitaine": "20 640 100",
            "Superficie métropole (km²)": "5 874 000",
            "Densité de population": "3,51",
            "Recettes fiscales (en livres tournois)": "78 953 357",
            "Impôts directs": "7 097 637",
            "Impôt foncier": "1 698 887",
            "Impôt sur le mobilier": "2 167 211",
            "Patente": "3 231 540",
            "Impôts indirects": "71 855 721",
            "Aides/autres impôts indirects": "27 864 135",
            "Enregistrement/successions": "34 881 769",
            "Douanes": "3 261 788",
            "Lotteries": "5 848 028",
            "Revenu national brut": "1 698 886 631",
            "Revenu moyen par hab": "82,31",
            "Dépenses militaires": "-59 412 879",
            "Soldes": "23 510 616",
            "Salaires soldats": "18 112 575",
            "Salaires officiers": "5 398 040",
            "Salaires annuels soldats réguliers": "80,00",
            "Salaires conscrits": "70,00",
            "Salaires annuels sous-officiers": "180,00",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "900,00",
            "Salaires lieutenants-colonels": "1 800,00",
            "Salaires colonels": "2 750,00",
            "Salaires généraux de brigade": "5 000,00",
            "Salaires généraux de division": "8 500,00",
            "Coût administration de la Guerre": "-88 684 258",
            "Entretien des places": "3 636 600",
            "Budget de construction de places": "197 500",
            "Besoin en rations quotidiennes": "55 991 508",
            "Coût achat uniforme": "1 130 291",
            "Domaine de l’État (fermes en H ou bois)": "14 685 000",
            "Revenus des domaines": "73 425 000",
            "Coût fonctionnement Etat": "10 254 157",
            "Nombre d'administrateurs totaux": "15 594",
            "Secrétaires et administrations des ministères": "742",
            "Secrétaires et administrations des provinces/départements": "1 173",
            "Percepteurs d’impôts/douaniers/etc": "7 280",
            "Juges/chancellerie/etc": "1 581",
            "Préfets / gouverneurs": "51",
            "Sous-préfets/etc": "0",
            "Parlementaires": "204",
            "Personnels parlement": "612",
            "Personnel des armées": "3 951",
            "Nombre de départements / provinces": "51",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "51",
            "Coût des ministres et gouverneurs / préfets / intendants": "513 000",
            "Nombre de bâtiments à construire": "6",
            "Construction kilomètres de routes": "190",
            "Construction de ponts": "5",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "2 105 000",
            "Nombre de villes (+ 100 000)": "0",
            "Nombre de ville (100 000 – 20 000)": "8",
            "Nombre de villes (20 000- 5000)": "21",
            "Nombre de maires choisis par l’État": "29",
            "nombre de conseillers municipaux": "232",
            "Coûts fonctionnements villes": "182 700",
            "Revenus des villes": "35 488",
            "Nombre d’Universités": "8",
            "Nombre de lycées": "82",
            "Nombre d’écoles primaires": "889",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "147 429",
            "Années de service": "3",
            "Recrues « maximum » sur les années de service": "442 288",
            "Engagés réels": "248 602",
            "Nombre de soldats totaux": "248 602",
            "Pensionnaires, retraités ou demi-soldes": "53 061",
            "Entraînement par mois(manœuvres, tirs)": "5",
            "Coût": "1 926 664",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie totale": "29",
            "Nombre régiments artillerie": "5,1",
            "Nombre de canons de l’armée de campagne": "344",
            "Garde (Infanterie) régiment": "3,00",
            "Dont vélites": "2,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "3,00",
            "Dragons": "2,00",
            "Lanciers": "1,00",
            "Nombre soldats Garde": "9 600",
            "Soldats dans une compagnie": "150,0",
            "Sous-officiers et caporaux dans une compagnie": "10,0",
            "Total": "160,0",
            "Soldats dans un bataillon": "900,0",
            "Sous-officiers et caporaux": "60,0",
            "Soldats dans un régiment (pied de paix)": "2 700,0",
            "Sous-officiers et caporaux (Régiment Paix)": "300,0",
            "Soldats dans un régiment (pied de guerre)": "4 800,0",
            "Soldats dans une division": "8 100,0",
            "Sous-officiers et caporaux (Division)": "900,0",
            "Division sur pied de guerre": "14 400,0",
            "Nombre de Régiments de ligne": "50,0",
            "Régiments de grenadiers": "5,0",
            "Régiments de génie": "2,0",
            "Régiments d’infanterie légère": "3,0",
            "Nombre de régiments": "58,0",
            "Nombre de bataillons": "174,0",
            "Fantassins (dont sous-officiers)": "174 000",
            "Fantassins recrutés (conscription)": "9 829",
            "(Soldats manquants pour le pied de guerre )": "-94 571",
            "Cavaliers dans un escadron": "100,0",
            "Sous-officiers et caporaux dans un escadron": "10,0",
            "Cavaliers dans un régiment": "880,0",
            "Régiments de hussards": "0,0",
            "Régiments de Uhlans/chevau-légers": "30,0",
            "Régiments de dragons": "10,0",
            "Régiments de cuirassiers": "0,0",
            "Nombre total de régiments": "50,0",
            "Cavaliers": "44 000,0",
            "Armée permanente et garnison": "238 773",
            "Conscription": "9 829",
            "Canons": "2 104",
            "Rappel Dont canons de campagne": "344",
            "Infanterie": "183 829",
            "Proportion Cavalerie/infanterie": "23,94 %",
            "Artilleurs": "14 283",
            "Corps du génie (nombre de soldats)": "2 368",
            "Levée pour cette année (appelés de conscription)": "9 829",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "1 958 000",
            "Besoin militaire": "56 798",
            "Excédent ou déficit": "1 901 202",
            "Achat chevaux": "-164 561 340",
            "Forteresses": "44",
            "Forteresses 2e classe": "6",
            "Forteresses 3e et 4e classe": "9",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "29",
            "Forts – Poste militaire": "28",
            "Construction de places de troisième rang": "1",
            "Construction de places de quatrième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "300",
            "Capacité de casernement": "76 400",
            "Construction de casernes": "4",
            "Coût (construction + entretien )": "850 000",
            "Artillerie des côtes": "17",
            "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "2 086",
            "Capitaines": "2 086",
            "Lieutenants-colonels, chef d’escadrons et majors": "830",
            "Colonels": "332",
            "Généraux de brigade": "84",
            "Généraux de division": "82",
            "Total officiers": "5 500",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "250",
            "Milices/garde nationale": "103 201",
            "Proportion par rapport à la population": "1/200",
            "Nombre de cohortes de Milices": "206",
            "Fusils disponibles": "10 000",
            "Divisions militaires": "11",
            "Pensions (familles, récompenses des généraux, etc)": "2 064",
            "Pensions": "5 036 184",
            "Maréchaussée/gendarmerie/police": "5 160",
            "Coût maréchaussée": "1 806 009",
            "Messagers/personnels des postes": "3 725",
            "Coût (Poste)": "1 769 383",
            "Budget naval": "29 883 990",
            "Personnel administratif de la marine": "665",
            "Nombre de marins": "1 157",
            "Nombre de troupes de marines dans les navires": "190",
            "Salaires des marins": "83,67",
            "Salaires et pensions pour des marins": "300 698",
            "Salaires des officiers (Marine)": "783 900",
            "Nombre de marins dans la marine marchande": "2 026",
            "Pêcheurs": "3 313",
            "Navires de transport": "10",
            "Coût colonisation": "370 500",
            "Population proche du littoral (-80km) et sur les fleuves": "2 761 000",
            "Réservoir de marins": "36 813",
            "Marins effectifs": "6 496",
            "Marins encore disponibles": "30 317",
            "Navires de ligne": "16",
            "74 canons": "4",
            "64 canons": "12",
            "Navires de ligne actifs/armés": "0",
            "Navires d’escortes": "39",
            "Frégates": "12",
            "Corvettes-Brig-Sloops-chébeqs": "16",
            "Sloops-Goelettes-shooners": "11",
            "Navires d’escortes actifs": "10",
            "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "3",
            "Sloops-Goelettes-shooners (Actifs)": "5",
            "Enseignes de vaisseaux": "113",
            "Capitaine de frégate": "30",
            "Lieutenants de vaisseaux": "80",
            "Capitaines de vaisseaux": "32",
            "Contre-amiraux": "6",
            "Vice-amiraux": "3",
            "Ecoles navales": "1",
            "Elèves": "26",
            "Construction de vaisseaux": "5",
            "Constructions navales 74 canons": "2",
            "Constructions navales (64-50 canons)": "3",
            "Construction de navires légers": "5",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "0",
            "Frégates ou navires d’escorte en radoub": "2",
            "Bâtiments de la Marine": "8",
            "Nombre de grands arsenaux maritimes": "1",
            "Petits arsenaux": "1",
            "Cales de radoubs (pour vaisseaux)": "1",
            "Nombre d’ouvriers": "3 950",
            "Coût construction navires": "5 265 000",
            "Entretien et approvisionnement des navires": "936 748",
            "Entretien et approvisionnement des arsenaux": "641 700",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "2 989 000",
            "Navires de pêche": "552",
            "Navires marchands totaux": "245",
            "Cabotage (5 à 50 tonneaux)": "174",
            "Grand cabotage (50-100 tonneaux)": "51",
            "Commerce de haute mer (100-250 tonneaux)": "12",
            "Grand commerce (+ 250 tonneaux)": "8",
            "production navires marchands": "16",
            "Cabotage (5 à 50 tonneaux) (Prod)": "10",
            "Grand cabotage (50-100 tonneaux) (Prod)": "4",
            "Commerce de haute mer (100-200 tonneaux)": "2",
            "Fourrures (en pièces)": "43 400",
            "Coton (en kg)": "184 000",
            "Indigo (en kg)": "68 500",
            "Commerce estimé en livres tournois": "13 420 700",
            "Taxes": "894 713",
            "Droits de mouillage": "2 367 075",
            "Manufactures (textiles verreries imprimeries etc)": "15",
            "Production de fer (T)": "22 205",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "4 205",
            "Production d'argent (Kg)": "24 400",
            "Production fusils": "65 000",
            "Production de canons": "520",
            "Production de canons navals": "244",
            "Production de poudre (T)": "130 000",
            "Industrie production en valeur": "40 555 500",
            "Taxe industrie": "3 231 540",
            "Nombre de manufactures d’armes ou arsenaux": "13",
            "Ouvriers": "2 665",
            "Reste après besoin en fusils (dans l’armée et marine)": "-47 858",
            "Fusils (dans l'armée ou en réserve)": "-47 858",
            "Besoin de canons navals": "468",
            "Réserve de canons navals": "-224",
            "Superficie du territoire en forêt": "45,20 %",
            "Production bois (Mcube)": "22 010 000",
            "Consommation de bois": "20 699 100",
            "Si excédent, vente ou achat si quantité insuffisante": "13 109 000",
            "Taxes sur les excédents": "655 450",
            "Nombre d’hectares de blé": "26 433 000",
            "production blé par an (en quintaux)": "145 381 500",
            "Consommation": "73 134 485",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "1 072 455 225",
            "Taxes sur les excédents (Blé)": "10 724 552",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "11 748 000",
            "Production légumes:etc": "52 866 000",
            "Consommation (Légumes)": "19 608 095",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "199 547 430",
            "Taxes sur les excédents (Légumes)": "3 990 949",
            "Nombre d’hectares de vigne": "2 643 300",
            "Production vin (hectolitres)": "29 076 300",
            "Consommation (Vin)": "13 416 065",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "699 535 575",
            "Taxes sur les excédents (Vin)": "699 536",
            "Nombre d’hectares pour l’élevage": "41 118 000",
            "Recettes totales Pays": "168 448 844",
            "Dépenses totales": "-1 114 207",
            "Coût maison du roi": "5 045 000",
            "Trésor": "1 563 051",
            "Dette": "0",
            "Excédent": "1 563 051",
            "Dette ou excédent en pourcentage des recettes": "0 %",
            "Charge de la dette": "0,0"
        }
    },
    "Philippe V Espagne": {
        "nom": "Philippe V Espagne",
        "RAW_DATA": {
            "Population": "12 434 100",
            "Population des colonies": "3 343 400",
            "Dont colons blancs": "1 720 400",
            "Indigènes": "578 000",
            "Esclaves": "1 045 000",
            "Total population métropolitaine": "12 434 100",
            "Superficie métropole (km²)": "440 000",
            "Densité de population": "28,26",
            "Recettes fiscales (en livres tournois)": "114 583 576",
            "Impôts directs": "17 638 668",
            "Impôt foncier": "9 230 454",
            "Impôt sur le mobilier": "1 616 433",
            "Patente": "6 791 780",
            "Impôts indirects": "96 944 909",
            "Gabelle": "18 651 150",
            "Aides/autres impôts indirects": "18 651 150",
            "Enregistrement/successions": "35 748 038",
            "Douanes": "20 371 576",
            "Lotteries": "3 522 995",
            "Revenu national brut": "3 076 818 045",
            "Revenu moyen par hab": "247,45",
            "Dépenses militaires": "12 777 747",
            "Soldes": "4 128 536",
            "Salaires soldats": "1 454 380",
            "Salaires officiers": "2 674 156",
            "Salaires annuels soldats réguliers": "100,00",
            "Salaires conscrits": "80,00",
            "Salaires annuels sous-officiers": "202,50",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 000,00",
            "Salaires lieutenants-colonels": "2 100,00",
            "Salaires colonels": "3 200,00",
            "Salaires généraux de brigade": "6 250,00",
            "Salaires généraux de division": "10 000,00",
            "Coût administration de la Guerre": "4 689 715",
            "Entretien des places": "3 424 800",
            "Budget de construction de places": "402 500",
            "Besoin en rations quotidiennes": "3 063 646",
            "Coût achat uniforme": "680 915",
            "Domaine de l’État (fermes en H ou bois)": "1 466 667",
            "Revenus des domaines": "9 533 333",
            "Coût fonctionnement Etat": "12 264 446",
            "Nombre d'administrateurs totaux": "15 653",
            "Secrétaires et administrations des ministères": "1 160",
            "Secrétaires et administrations des provinces/départements": "874",
            "Percepteurs d’impôts/douaniers/etc": "8 804",
            "Juges/chancellerie/etc": "1 444",
            "Préfets / gouverneurs": "38",
            "Sous-préfets/etc": "0",
            "Parlementaires": "304",
            "Personnels parlement": "912",
            "Personnel des armées": "2 117",
            "Nombre de départements / provinces": "38",
            "Secrétaires d'Etat": "10",
            "Gouverneurs / intendants / préfets": "38",
            "Coût des ministres et gouverneurs / préfets / intendants": "1 034 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "245",
            "Construction de ponts": "1",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "2 145 000",
            "Nombre de villes (+ 100 000)": "2",
            "Nombre de ville (100 000 – 20 000)": "10",
            "Nombre de villes (20 000- 5000)": "86",
            "Nombre de maires choisis par l’État": "98",
            "nombre de conseillers municipaux": "784",
            "Coûts fonctionnements villes": "617 400",
            "Revenus des villes": "88 193",
            "Nombre d’Universités": "12",
            "Nombre de lycées": "244",
            "Nombre d’écoles primaires": "1 386",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "88 815",
            "Années de service": "5",
            "Recrues « maximum » sur les années de service": "444 075",
            "Engagés réels": "21 322",
            "Nombre de soldats totaux": "21 322",
            "Pensionnaires, retraités ou demi-soldes": "3 080",
            "Entraînement par mois(manœuvres, tirs)": "4",
            "Coût": "132 196",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "4",
            "Nombre de compagnies d’artillerie totale": "0",
            "Nombre régiments artillerie": "1,0",
            "Nombre de canons de l’armée de campagne": "84",
            "Garde (Infanterie) régiment": "1,50",
            "Grenadiers": "1,50",
            "Garde (Cavalerie)": "2,50",
            "Dragons": "1,50",
            "Lanciers": "1,00",
            "Nombre soldats Garde": "5 600",
            "Soldats dans une compagnie": "150,0",
            "Sous-officiers et caporaux dans une compagnie": "10,0",
            "Total": "160,0",
            "Soldats dans un bataillon": "0,0",
            "Sous-officiers et caporaux": "0,0",
            "Soldats dans un régiment (pied de paix)": "0,0",
            "Sous-officiers et caporaux (Régiment Paix)": "0,0",
            "Soldats dans un régiment (pied de guerre)": "0,0",
            "Soldats dans une division": "0,0",
            "Sous-officiers et caporaux (Division)": "0,0",
            "Division sur pied de guerre": "0,0",
            "Fantassins (dont sous-officiers)": "0",
            "Fantassins recrutés (conscription)": "5 921",
            "(Soldats manquants pour le pied de guerre )": "5 921",
            "Cavaliers": "0,0",
            "Armée permanente et garnison": "15 401",
            "Conscription": "5 921",
            "Canons": "1 060",
            "Rappel Dont canons de campagne": "84",
            "Infanterie": "5 921",
            "Proportion Cavalerie/infanterie": "0,00 %",
            "Artilleurs": "9 340",
            "Levée pour cette année (appelés de conscription)": "5 921",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "146 667",
            "Besoin militaire": "5 133",
            "Excédent ou déficit": "141 534",
            "Achat chevaux": "-11 843 674",
            "Forteresses": "49",
            "Forteresses 2e classe": "5",
            "Forteresses 3e et 4e classe": "27",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "32",
            "Forts – Poste militaire": "24",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "344",
            "Capacité de casernement": "87 650",
            "Construction de casernes": "8",
            "Coût (construction + entretien )": "1 060 000",
            "Artillerie des côtes": "25",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "1 506",
            "Capitaines": "753",
            "Lieutenants-colonels, chef d’escadrons et majors": "345",
            "Colonels": "127",
            "Généraux de brigade": "55",
            "Généraux de division": "44",
            "Total officiers": "2 831",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "250",
            "Milices/garde nationale": "49 736",
            "Proportion par rapport à la population": "1 / 250",
            "Nombre de cohortes de Milices": "99",
            "Fusils disponibles": "8 000",
            "Milices coloniales": "17 204",
            "Proportion par rapport aux colons blancs": "1 / 100",
            "Nombre de bataillons de miliciens": "34",
            "Fusils disponibles (Milices Col.)": "2 500",
            "Divisions militaires": "14",
            "Pensions (familles, récompenses des généraux, etc)": "1 865",
            "Pensions": "5 669 950",
            "Maréchaussée/gendarmerie/police": "6 217",
            "Coût maréchaussée": "2 673 332",
            "Messagers/personnels des postes": "2 394",
            "Coût (Poste)": "1 017 599",
            "Budget naval": "33 750 599",
            "Personnel administratif de la marine": "1 505",
            "Nombre de marins": "3 011",
            "Nombre de troupes de marines dans les navires": "395",
            "Salaires des marins": "107,41",
            "Salaires et pensions pour des marins": "869 530",
            "Salaires des officiers (Marine)": "1 867 300",
            "Nombre de marins dans la marine marchande": "18 995",
            "Pêcheurs": "5 480",
            "Navires de transport": "37",
            "Colons envoyés aux colonies": "3 891",
            "Coût colonisation": "1 581 095",
            "Population proche du littoral (-80km) et sur les fleuves": "4 567 000",
            "Réservoir de marins": "60 893",
            "Marins effectifs": "27 486",
            "Marins encore disponibles": "33 407",
            "Navires de ligne": "48",
            "+ de 80 canons": "1",
            "80 canons": "4",
            "74 canons": "20",
            "64 canons": "13",
            "50 canons": "10",
            "Navires de ligne actifs/armés": "3",
            "74 canons (Actifs)": "1",
            "64 canons (Actifs)": "1",
            "50 canons (Actifs)": "1",
            "Navires d’escortes": "74",
            "Frégates": "15",
            "Corvettes-Brig-Sloops-chébeqs": "29",
            "Sloops-Goelettes-shooners": "30",
            "Navires d’escortes actifs": "9",
            "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "2",
            "Sloops-Goelettes-shooners (Actifs)": "5",
            "Enseignes de vaisseaux": "240",
            "Capitaine de frégate": "58",
            "Lieutenants de vaisseaux": "186",
            "Capitaines de vaisseaux": "86",
            "Contre-amiraux": "17",
            "Vice-amiraux": "9",
            "Ecoles navales": "1",
            "Elèves": "45",
            "Construction de vaisseaux": "5",
            "Constructions navales 80 canons": "1",
            "Constructions navales 74 canons": "2",
            "Constructions navales (64-50 canons)": "2",
            "Construction de navires légers": "7",
            "Constructions navales (frégates)": "3",
            "Constructions navales Bricks-Corvettes": "2",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "2",
            "Bâtiments de la Marine": "18",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "3",
            "Cales de radoubs (pour vaisseaux)": "2",
            "Nombre d’ouvriers": "8 800",
            "Coût construction navires": "8 240 000",
            "Entretien et approvisionnement des navires": "2 998 723",
            "Entretien et approvisionnement des arsenaux": "1 392 300",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "0",
            "Travaux dans les colonies": "0",
            "Forts dans les colonies": "9",
            "Navires de pêche": "913",
            "Navires marchands totaux": "1 132",
            "Cabotage (5 à 50 tonneaux)": "555",
            "Grand cabotage (50-100 tonneaux)": "230",
            "Commerce de haute mer (100-250 tonneaux)": "202",
            "Grand commerce (+ 250 tonneaux)": "145",
            "production navires marchands": "16",
            "Cabotage (5 à 50 tonneaux) (Prod)": "8",
            "Grand cabotage (50-100 tonneaux) (Prod)": "6",
            "Commerce de haute mer (100-200 tonneaux)": "2",
            "Sucre (en Kg)": "4 780 000",
            "Café (Kg)": "2 645 000",
            "Epices (en Kg)": "341 000",
            "Fourrures (en pièces)": "24 900",
            "Tabac (en kg)": "2 027 300",
            "Coton (en kg)": "642 300",
            "Indigo (en kg)": "58 400",
            "Thé (en Kg)": "801 000",
            "Commerce estimé en livres tournois": "95 468 261",
            "Taxes": "9 546 826",
            "Droits de mouillage": "10 824 750",
            "Manufactures (textiles verreries imprimeries etc)": "35",
            "Production de fer (T)": "3 072",
            "Production de Fonte (T)": "230",
            "Production de cuivre (quintaux)": "1 020",
            "Production d'argent (Kg)": "155 200",
            "Production fusils": "60 000",
            "Production de canons": "480",
            "Production de canons navals": "225",
            "Production de poudre (T)": "60 000",
            "Industrie production en valeur": "19 403 400",
            "Taxe industrie": "6 791 780",
            "Nombre de manufactures d’armes ou arsenaux": "12",
            "Ouvriers": "2 460",
            "Reste après besoin en fusils (dans l’armée et marine)": "-8 282",
            "Fusils (dans l'armée ou en réserve)": "-8 282",
            "Besoin de canons navals": "546",
            "Réserve de canons navals": "-321",
            "Superficie du territoire en forêt": "19,56 %",
            "Production bois (Mcube)": "13 870 900",
            "Consommation de bois": "12 507 100",
            "Si excédent, vente ou achat si quantité insuffisante": "13 638 000",
            "Taxes sur les excédents": "1 363 800",
            "Nombre d’hectares de blé": "2 640 000",
            "production blé par an (en quintaux)": "18 480 000",
            "Consommation": "25 621 085",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-117 827 903",
            "Taxes sur les excédents (Blé)": "-1 178 279",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "880 000",
            "Production légumes:etc": "6 600 000",
            "Consommation (Légumes)": "11 812 395",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-31 274 370",
            "Taxes sur les excédents (Légumes)": "-625 487",
            "Nombre d’hectares de vigne": "316 800",
            "Production vin (hectolitres)": "8 553 600",
            "Consommation (Vin)": "10 568 985",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-90 692 325",
            "Taxes sur les excédents (Vin)": "-1 360 385",
            "Nombre d’hectares pour l’élevage": "3 080 000",
            "Recettes totales Pays": "125 480 710",
            "Dépenses totales": "77 771 341",
            "Coût maison du roi": "6 045 004",
            "Trésor": "7 709 369",
            "Dette": "0",
            "Excédent": "47 709 369",
            "Dette ou excédent en pourcentage des recettes": "38,02 %",
            "Charge de la dette": "0,0"
        }
    }, 
"Malborough": {
        "nom": "Malborough",
        "RAW_DATA": {
            "Population": "9 780 000",
            "Population des colonies": "607 400",
            "Dont colons blancs": "305 600",
            "Indigènes": "185 800",
            "Esclaves": "116 000",
            "Total population métropolitaine": "9 780 000",
            "Superficie métropole (km²)": "281 410",
            "Densité de population": "34.75",
            "Recettes fiscales (en livres tournois)": "211 460 950",
            "Impôts directs": "65 182 528",
            "Impôt foncier": "50 099 778",
            "Impôt sur le mobilier": "5 663 100",
            "Patente": "9 419 650",
            "Impôts indirects": "146 278 422",
            "Gabelle": "2 317 850",
            "Aides/autres impôts indirects": "36 342 400",
            "Enregistrement/successions": "56 843 460",
            "Douanes": "46 531 046",
            "Lotteries": "4 243 667",
            "Revenu national brut": "2 623 025 000",
            "Revenu moyen par hab": "298,75",
            "Dépenses militaires": "31 343 645",
            "Soldes": "6 869 328",
            "Salaires soldats": "1 846 726",
            "Salaires officiers": "5 022 602",
            "Salaires annuels soldats réguliers": "170,00",
            "Salaires conscrits": "155,00",
            "Salaires annuels sous-officiers": "300,00",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 650,00",
            "Salaires lieutenants-colonels": "3 200,00",
            "Salaires colonels": "4 500,00",
            "Salaires généraux de brigade": "10 000,00",
            "Salaires généraux de division": "15 000,00",
            "Coût administration de la Guerre": "21 873 914",
            "Entretien des places": "2 071 200",
            "Budget de construction de places": "183 750",
            "Besoin en rations quotidiennes": "1 742 902",
            "Coût achat uniforme": "480 810",
            "Domaine de l’État (fermes en H ou bois)": "938 033",
            "Revenus des domaines": "5 628 200",
            "Coût fonctionnement Etat": "30 192 748",
            "Nombre d'administrateurs totaux": "22 261",
            "Secrétaires et administrations des ministères": "812",
            "Secrétaires et administrations des provinces/départements": "483",
            "Percepteurs d’impôts/douaniers/etc": "16 182",
            "Juges/chancellerie/etc": "798",
            "Préfets / gouverneurs": "21",
            "Sous-préfets/etc": "0",
            "Parlementaires": "357",
            "Personnels parlement": "1 785",
            "Personnel des armées": "1 823",
            "Nombre de départements / provinces": "21",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "21",
            "Coût des ministres et gouverneurs / préfets / intendants": "686 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "217",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 951 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "5",
            "Nombre de villes (20 000- 5000)": "40",
            "Nombre de maires choisis par l’État": "46",
            "nombre de conseillers municipaux": "368",
            "Coûts fonctionnements villes": "289 800",
            "Revenus des villes": "325 913",
            "Nombre d’Universités": "6",
            "Nombre de lycées": "116",
            "Nombre d’écoles primaires": "690",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "62 714",
            "Années de service": "7",
            "Recrues « maximum » sur les années de service": "439 000",
            "Engagés réels": "12 382",
            "Nombre de soldats totaux": "12 382",
            "Pensionnaires, retraités ou demi-soldes": "911",
            "Entraînement par mois(manœuvres, tirs)": "18",
            "Coût": "345 453",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "6",
            "Nombre régiments artillerie": "0,9",
            "Nombre de canons de l’armée de campagne": "74",
            "Garde (Infanterie) régiment": "1,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "2,50",
            "Grenadiers à cheval": "1,00",
            "Dragons": "1,50",
            "Nombre soldats Garde": "4 400",
            "Soldats dans une compagnie": "90,0",
            "Sous-officiers et caporaux dans une compagnie": "10,0",
            "Total": "100,0",
            "Soldats dans un bataillon": "450,0",
            "Sous-officiers et caporaux": "50,0",
            "Soldats dans un régiment (pied de paix)": "900,0",
            "Sous-officiers et caporaux (Régiment Paix)": "150,0",
            "Soldats dans un régiment (pied de guerre)": "1 500,0",
            "Soldats dans une division": "2 700,0",
            "Sous-officiers et caporaux (Division)": "600,0",
            "Division sur pied de guerre": "6 000,0",
            "Fantassins (dont sous-officiers)": "0",
            "Fantassins recrutés (conscription)": "4 181",
            "(Soldats manquants pour le pied de guerre )": "4 181",
            "Cavaliers dans un régiment": "0,0",
            "Armée permanente et garnison": "8 201",
            "Conscription": "4 181",
            "Canons": "711",
            "Rappel Dont canons de campagne": "74",
            "Infanterie": "4 181",
            "Proportion Cavalerie/infanterie": "0,00 %",
            "Artilleurs": "4 501",
            "Levée pour cette année (appelés de conscription)": "4 181",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "93 803",
            "Besoin militaire": "5 718",
            "Excédent ou déficit": "88 086",
            "Achat chevaux": "-6 235 548",
            "Forteresses": "19",
            "Forteresses 2e classe": "3",
            "Forteresses 3e et 4e classe": "11",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "8",
            "Forts – Poste militaire": "6",
            "Nombre de casernes (1 caserne = 250 logements)": "164",
            "Capacité de casernement": "41 850",
            "Coût (construction + entretien )": "410 000",
            "Artillerie des côtes": "59",
            "Constructions petites fortifications/fortifications côtières": "7",
            "Lieutenants": "1 786",
            "Capitaines": "893",
            "Lieutenants-colonels, chef d’escadrons et majors": "387",
            "Colonels": "144",
            "Généraux de brigade": "64",
            "Généraux de division": "68",
            "Total officiers": "3 341",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "204",
            "Milices/garde nationale": "87 800",
            "Proportion par rapport à la population": "1 / 100 e ",
            "Nombre de cohortes de Milices": "176",
            "Fusils disponibles": "45 000",
            "Milices coloniales": "20 373",
            "Proportion par rapport aux colons blancs": "1/15e",
            "Nombre de bataillons de miliciens": "41",
            "Fusils disponibles (Milices Col.)": "15 000",
            "Divisions militaires": "12",
            "Pensions (familles, récompenses des généraux, etc)": "878",
            "Pensions": "2 326 700",
            "Maréchaussée/gendarmerie/police": "6 271",
            "Coût maréchaussée": "2 649 992",
            "Messagers/personnels des postes": "1 830",
            "Coût (Poste)": "764 177",
            "Budget naval": "75 370 944",
            "Personnel administratif de la marine": "2 660",
            "Nombre de marins": "26 800",
            "Nombre de troupes de marines dans les navires": "4 970",
            "Salaires des marins": "147,57",
            "Salaires et pensions pour des marins": "5 512 595",
            "Salaires des officiers (Marine)": "4 830 100",
            "Nombre de marins dans la marine marchande": "43 120",
            "Pêcheurs": "5 456",
            "Navires de transport": "55",
            "Colons envoyés aux colonies": "6 707",
            "Coût colonisation": "2 401 326",
            "Population proche du littoral (-80km) et sur les fleuves": "5 456 200",
            "Réservoir de marins": "77 753",
            "Marins effectifs": "75 376",
            "Marins encore disponibles": "2 377",
            "Navires de ligne": "103",
            "+ de 80 canons": "3",
            "80 canons": "2",
            "74 canons": "14",
            "64 canons": "24",
            "50 canons": "24",
            "Navires de ligne actifs/armés": "26",
            "80 canons (Actifs)": "2",
            "74 canons (Actifs)": "16",
            "64 canons (Actifs)": "8",
            "Navires d’escortes": "221",
            "Frégates": "57",
            "Corvettes-Brig-Sloops-chébeqs": "30",
            "Sloops-Goelettes-shooners": "29",
            "Navires d’escortes actifs": "94",
            "Frégates (Actifs)": "28",
            "Corvettes- (Actifs)": "37",
            "Sloops-Goelettes-shooners (Actifs)": "29",
            "Enseignes de vaisseaux": "722",
            "Capitaine de frégate": "210",
            "Lieutenants de vaisseaux": "487",
            "Capitaines de vaisseaux": "188",
            "Contre-amiraux": "38",
            "Vice-amiraux": "19",
            "Ecoles navales": "2",
            "Elèves": "110",
            "Construction de vaisseaux": "7",
            "Constructions navales 80 canons": "2",
            "Constructions navales 74 canons": "4",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "11",
            "Constructions navales (frégates)": "5",
            "Constructions navales Bricks-Corvettes": "4",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "2",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "3",
            "Bâtiments de la Marine": "32",
            "Nombre de grands arsenaux maritimes": "4",
            "Petits arsenaux": "3",
            "Cales de radoubs (pour vaisseaux)": "8",
            "Nombre d’ouvriers": "15 800",
            "Coût construction navires": "15 590 000",
            "Entretien et approvisionnement des navires": "7 032 565",
            "Entretien et approvisionnement des arsenaux": "2 886 800",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 663 000",
            "Travaux dans les colonies": "1 710 200",
            "Forts dans les colonies": "11",
            "Constructions forts colonies": "2",
            "Navires de pêche": "909",
            "Navires marchands totaux": "2 496",
            "Cabotage (5 à 50 tonneaux)": "985",
            "Grand cabotage (50-100 tonneaux)": "749",
            "Commerce de haute mer (100-250 tonneaux)": "568",
            "Grand commerce (+ 250 tonneaux)": "274",
            "production navires marchands": "70",
            "Cabotage (5 à 50 tonneaux) (Prod)": "27",
            "Grand cabotage (50-100 tonneaux) (Prod)": "17",
            "Commerce de haute mer (100-200 tonneaux)": "14",
            "Grand commerce (+ 200 tonneaux)": "12",
            "Sucre (en Kg)": "3 670 800",
            "Café (Kg)": "808 200",
            "Epices (en Kg)": "353 400",
            "Fourrures (en pièces)": "19 850",
            "Tabac (en kg)": "2 653 400",
            "Coton (en kg)": "234 000",
            "Indigo (en kg)": "254 000",
            "Thé (en Kg)": "1 804 700",
            "Commerce estimé en livres tournois": "188 451 706",
            "Taxes": "18 845 171",
            "Droits de mouillage": "27 685 875",
            "Manufactures (textiles verreries imprimeries etc)": "181",
            "Production de fer (T)": "60 370",
            "Production de Fonte (T)": "6 650",
            "Production de cuivre (quintaux)": "14 800",
            "Production fusils": "153 000",
            "Production de canons": "720",
            "Production de canons navals": "338",
            "Production de poudre (T)": "180 000",
            "Industrie production en valeur": "111 754 000",
            "Taxe industrie": "9 419 650",
            "Nombre de manufactures d’armes ou arsenaux": "18",
            "Ouvriers": "3 690",
            "Reste après besoin en fusils (dans l’armée et marine)": "96 465",
            "Fusils (dans l'armée ou en réserve)": "96 465",
            "Besoin de canons navals": "834",
            "Réserve de canons navals": "-7",
            "Superficie du territoire en forêt": "18,30 %",
            "Production bois (Mcube)": "7 754 000",
            "Consommation de bois": "8 924 500",
            "Si excédent, vente ou achat si quantité insuffisante": "-11 705 000",
            "Taxes sur les excédents": "-1 755 750",
            "Nombre d’hectares de blé": "1 688 460",
            "production blé par an (en quintaux)": "11 819 220",
            "Consommation": "17 917 390",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-100 619 797",
            "Taxes sur les excédents (Blé)": "-1 509 297",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 165 037",
            "Production légumes:etc": "8 737 781",
            "Consommation (Légumes)": "8 341 000",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "2 380 683",
            "Taxes sur les excédents (Légumes)": "47 614",
            "Nombre d’hectares de vigne": "168 846",
            "Production vin (hectolitres)": "2 617 113",
            "Consommation (Vin)": "3 951 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-60 024 915",
            "Taxes sur les excédents (Vin)": "-1 500 623",
            "Nombre d’hectares pour l’élevage": "1 969 870",
            "Recettes totales Pays": "217 136 763",
            "Dépenses totales": "153 398 740",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "-4 000 000",
            "Coût maison du roi": "7 007 000",
            "Trésor": "11 738 024",
            "Dette": "0",
            "Excédent": "59 738 024",
            "Dette ou excédent en pourcentage des recettes": "27,51 %",
            "Charge de la dette": "0,0"
        }
    },
    "Henri IV": {
        "nom": "Henri IV",
        "RAW_DATA": {
            "Population": "19 100 000",
            "Population des colonies": "5 310",
            "Dont colons blancs": "2 510",
            "Indigènes": "3 400",
            "Esclaves": "100",
            "Total population métropolitaine": "19 100 000",
            "Superficie métropole (km²)": "868 000",
            "Densité de population": "22,00",
            "Recettes fiscales (en livres tournois)": "121 330 833",
            "Impôts directs": "19 047 265",
            "Impôt foncier": "15 532 025",
            "Impôt sur le mobilier": "477 500",
            "Patente": "3 037 740",
            "Impôts indirects": "102 283 569",
            "Gabelle": "19 100 000",
            "Aides/autres impôts indirects": "42 975 000",
            "Enregistrement/successions": "22 681 250",
            "Douanes": "12 115 652",
            "Lotteries": "5 411 667",
            "Revenu national brut": "3 045 495 000",
            "Revenu moyen par hab": "159,45",
            "Dépenses militaires": "67 407 154",
            "Soldes": "27 927 296",
            "Salaires soldats": "21 949 695",
            "Salaires officiers": "5 977 601",
            "Salaires annuels soldats réguliers": "85,00",
            "Salaires conscrits": "80,00",
            "Salaires annuels sous-officiers": "180,00",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 000,00",
            "Salaires lieutenants-colonels": "2 000,00",
            "Salaires colonels": "3 200,00",
            "Salaires généraux de brigade": "5 000,00",
            "Salaires généraux de division": "8 500,00",
            "Coût administration de la Guerre": "29 003 512",
            "Entretien des places": "6 439 800",
            "Budget de construction de places": "1 926 250",
            "Besoin en rations quotidiennes": "33 104 526",
            "Coût achat uniforme": "1 045 952",
            "Domaine de l’État (fermes en H ou bois)": "2 893 333",
            "Revenus des domaines": "20 253 333",
            "Coût fonctionnement Etat": "14 016 760",
            "Nombre d'administrateurs totaux": "12 204",
            "Secrétaires et administrations des ministères": "763",
            "Secrétaires et administrations des provinces/départements": "437",
            "Percepteurs d’impôts/douaniers/etc": "6 643",
            "Juges/chancellerie/etc": "722",
            "Préfets / gouverneurs": "19",
            "Sous-préfets/etc": "0",
            "Parlementaires": "171",
            "Personnels parlement": "684",
            "Personnel des armées": "2 765",
            "Nombre de départements / provinces": "19",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "19",
            "Coût des ministres et gouverneurs / préfets / intendants": "217 000",
            "Nombre de bâtiments à construire": "0",
            "Construction kilomètres de routes": "86",
            "Construction de ponts": "2",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "718 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "4",
            "Nombre de villes (20 000- 5000)": "82",
            "Nombre de maires choisis par l’État": "87",
            "nombre de conseillers municipaux": "609",
            "Coûts fonctionnements villes": "417 600",
            "Revenus des villes": "95 236",
            "Nombre d’Universités": "5",
            "Nombre de lycées": "12",
            "Nombre d’écoles primaires": "502",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "136 429",
            "Années de service": "5",
            "Recrues « maximum » sur les années de service": "682 143",
            "Engagés réels": "170 185",
            "Nombre de soldats totaux": "170 185",
            "Pensionnaires, retraités ou demi-soldes": "18 952",
            "Entraînement par mois(manœuvres, tirs)": "8",
            "Coût": "2 110 295",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "6",
            "Nombre de compagnies d’artillerie totale": "35",
            "Nombre régiments artillerie": "5,9",
            "Nombre de canons de l’armée de campagne": "389",
            "Garde (Infanterie) régiment": "3,00",
            "Dont vélites": "2,00",
            "Grenadiers": "1,00",
            "Garde (Cavalerie)": "3,00",
            "dont chasseurs à cheval": "2,00",
            "Lanciers": "1,00",
            "Nombre soldats Garde": "9 600",
            "Soldats dans une compagnie": "140,0",
            "Sous-officiers et caporaux dans une compagnie": "15,0",
            "Total": "155,0",
            "Soldats dans un bataillon": "840,0",
            "Sous-officiers et caporaux": "90,0",
            "Soldats dans un régiment (pied de paix)": "1 680,0",
            "Sous-officiers et caporaux (Régiment Paix)": "270,0",
            "Soldats dans un régiment (pied de guerre)": "2 790,0",
            "Soldats dans une division": "5 040,0",
            "Sous-officiers et caporaux (Division)": "810,0",
            "Division sur pied de guerre": "8 370,0",
            "Nombre de Régiments de ligne": "60,0",
            "Régiments de grenadiers": "5,0",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "5,0",
            "Nombre de régiments": "70,0",
            "Nombre de bataillons": "210,0",
            "Fantassins (dont sous-officiers)": "136 500",
            "Fantassins recrutés (conscription)": "9 095",
            "(Soldats manquants pour le pied de guerre )": "-49 705",
            "Armée permanente et garnison": "161 090",
            "Conscription": "9 095",
            "Canons": "3 181",
            "Rappel Dont canons de campagne": "389",
            "Infanterie": "145 595",
            "Proportion Cavalerie/infanterie": "0,00 %",
            "Artilleurs": "19 309",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "9 095",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "29 333",
            "Besoin militaire": "15 610",
            "Excédent ou déficit": "23 724",
            "Achat chevaux": "-20 348 041",
            "Forteresses": "69",
            "Forteresses 1ère classe": "2",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "35",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "43",
            "Forts – Poste militaire": "37",
            "Construction de places de premier rang": "1",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "510",
            "Capacité de casernement": "129 400",
            "Construction de casernes": "36",
            "Coût (construction + entretien )": "2 175 000",
            "Artillerie des côtes": "11",
            "Constructions petites fortifications/fortifications côtières": "1",
            "Lieutenants": "4 219",
            "Capitaines": "2 110",
            "Lieutenants-colonels, chef d’escadrons et majors": "826",
            "Colonels": "324",
            "Généraux de brigade": "97",
            "Généraux de division": "82",
            "Total officiers": "7 658",
            "Nombre d'écoles militaires (armée)": "2",
            "Nombre d'élèves": "130",
            "Milices/garde nationale": "95 500",
            "Proportion par rapport à la population": "1/200",
            "Nombre de cohortes de Milices": "191",
            "Fusils disponibles": "12 000",
            "Milices coloniales": "81",
            "Proportion par rapport aux colons blancs": "1 / 10",
            "Nombre de bataillons de miliciens": "0",
            "Fusils disponibles (Milices Col.)": "70",
            "Divisions militaires": "17",
            "Pensions (familles, récompenses des généraux, etc)": "1 433",
            "Pensions": "3 638 550",
            "Maréchaussée/gendarmerie/police": "8 304",
            "Coût maréchaussée": "1 777 130",
            "Messagers/personnels des postes": "3 458",
            "Coût (Poste)": "786 771",
            "Budget naval": "18 243 389",
            "Personnel administratif de la marine": "1 330",
            "Nombre de marins": "2 337",
            "Nombre de troupes de marines dans les navires": "370",
            "Salaires des marins": "89,80",
            "Salaires et pensions pour des marins": "772 405",
            "Salaires des officiers (Marine)": "1 788 150",
            "Nombre de marins dans la marine marchande": "6 595",
            "Pêcheurs": "7 933",
            "Navires de transport": "12",
            "Colons envoyés aux colonies": "829",
            "Coût colonisation": "508 514",
            "Population proche du littoral (-80km) et sur les fleuves": "6 610 800",
            "Réservoir de marins": "88 144",
            "Marins effectifs": "16 865",
            "Marins encore disponibles": "71 279",
            "Navires de ligne": "54",
            "80 canons": "2",
            "74 canons": "13",
            "64 canons": "22",
            "50 canons": "17",
            "Navires de ligne actifs/armés": "3",
            "64 canons (Actifs)": "3",
            "Navires d’escortes": "62",
            "Frégates": "13",
            "Corvettes-Brig-Sloops-chébeqs": "21",
            "Sloops-Goelettes-shooners": "28",
            "Navires d’escortes actifs": "7",
            "Frégates (Actifs)": "1",
            "Corvettes- (Actifs)": "3",
            "Sloops-Goelettes-shooners (Actifs)": "3",
            "Enseignes de vaisseaux": "211",
            "Capitaine de frégate": "54",
            "Lieutenants de vaisseaux": "163",
            "Capitaines de vaisseaux": "91",
            "Contre-amiraux": "18",
            "Vice-amiraux": "9",
            "Ecoles navales": "1",
            "Elèves": "48",
            "Construction de vaisseaux": "2",
            "Constructions navales 74 canons": "1",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "3",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Navires de ligne en radoub": "2",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "16",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "2",
            "Cales de radoubs (pour vaisseaux)": "2",
            "Nombre d’ouvriers": "7 900",
            "Coût construction navires": "3 325 000",
            "Entretien et approvisionnement des navires": "2 996 535",
            "Entretien et approvisionnement des arsenaux": "1 283 400",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "1 034 002",
            "Travaux dans les colonies": "151 200",
            "Forts dans les colonies": "1",
            "Constructions forts colonies": "0",
            "Navires de pêche": "1 322",
            "Navires marchands totaux": "634",
            "Cabotage (5 à 50 tonneaux)": "395",
            "Grand cabotage (50-100 tonneaux)": "144",
            "Commerce de haute mer (100-250 tonneaux)": "65",
            "Grand commerce (+ 250 tonneaux)": "30",
            "production navires marchands": "24",
            "Cabotage (5 à 50 tonneaux) (Prod)": "13",
            "Grand cabotage (50-100 tonneaux) (Prod)": "6",
            "Commerce de haute mer (100-200 tonneaux)": "4",
            "Grand commerce (+ 200 tonneaux)": "1",
            "Fourrures (en pièces)": "16 340",
            "Tabac (en kg)": "171 450",
            "Coton (en kg)": "2 300",
            "Thé (en Kg)": "5 542",
            "Commerce estimé en livres tournois": "38 409 019",
            "Taxes": "3 840 902",
            "Droits de mouillage": "8 274 750",
            "Manufactures (textiles verreries imprimeries etc)": "24",
            "Production de fer (T)": "16 500",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "4 670",
            "Production fusils": "90 750",
            "Production de canons": "440",
            "Production de canons navals": "138",
            "Production de poudre (T)": "77 000",
            "Industrie production en valeur": "32 384 250",
            "Taxe industrie": "3 037 740",
            "Nombre de manufactures d’armes ou arsenaux": "11",
            "Ouvriers": "2 255",
            "Reste après besoin en fusils (dans l’armée et marine)": "-10 951",
            "Fusils (dans l'armée ou en réserve)": "-10 951",
            "Besoin de canons navals": "238",
            "Réserve de canons navals": "-101",
            "Superficie du territoire en forêt": "19,11 %",
            "Production bois (Mcube)": "19 592 000",
            "Consommation de bois": "19 145 000",
            "Si excédent, vente ou achat si quantité insuffisante": "4 470 000",
            "Taxes sur les excédents": "447 000",
            "Nombre d’hectares de blé": "8 072 400",
            "production blé par an (en quintaux)": "52 470 600",
            "Consommation": "40 499 600",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "168 315 000",
            "Taxes sur les excédents (Blé)": "2 524 725",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "2 170 000",
            "Production légumes:etc": "16 275 000",
            "Consommation (Légumes)": "18 145 000",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "-11 220 000",
            "Taxes sur les excédents (Légumes)": "-224 400",
            "Nombre d’hectares de vigne": "651 000",
            "Production vin (hectolitres)": "15 624 000",
            "Consommation (Vin)": "14 325 000",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "53 280 000",
            "Taxes sur les excédents (Vin)": "1 332 000",
            "Nombre d’hectares pour l’élevage": "6 076 000",
            "Recettes totales Pays": "145 887 891",
            "Dépenses totales": "114 445 753",
            "Recettes extraordinaires (ventes biens du roi, or trouvé, etc) ou dépenses extraordinaires": "8 000 000",
            "Coût maison du roi": "8 359 000",
            "Trésor": "10 442 138",
            "Dette": "0",
            "Excédent": "31 442 138",
            "Dette ou excédent en pourcentage des recettes": "21,55 %",
            "Charge de la dette": "0,0"
        }
    },
    "Blücher": {
        "nom": "Blücher",
        "RAW_DATA": {
            "Population": "9 460 000",
            "Total population métropolitaine": "9 460 000",
            "Superficie métropole (km²)": "359 601",
            "Densité de population": "26,31",
            "Recettes fiscales (en livres tournois)": "128 541 417",
            "Impôts directs": "33 370 144",
            "Impôt foncier": "25 403 364",
            "Impôt sur le mobilier": "3 642 100",
            "Patente": "4 324 680",
            "Impôts indirects": "95 171 273",
            "Gabelle": "23 650 000",
            "Aides/autres impôts indirects": "37 840 000",
            "Enregistrement/successions": "23 650 000",
            "Douanes": "7 350 940",
            "Lotteries": "2 680 333",
            "Revenu national brut": "1 801 657 000",
            "Revenu moyen par hab": "190,45",
            "Dépenses militaires": "60 799 158",
            "Soldes": "22 523 484",
            "Salaires soldats": "16 802 264",
            "Salaires officiers": "5 721 220",
            "Salaires annuels soldats réguliers": "117,00",
            "Salaires conscrits": "110,00",
            "Salaires annuels sous-officiers": "230,00",
            "Salaires lieutenants": "750,00",
            "Salaires capitaines": "1 250,00",
            "Salaires lieutenants-colonels": "2 250,00",
            "Salaires colonels": "3 700,00",
            "Salaires généraux de brigade": "6 800,00",
            "Salaires généraux de division": "11 500,00",
            "Coût administration de la Guerre": "30 699 327",
            "Entretien des places": "5 181 000",
            "Budget de construction de places": "402 500",
            "Besoin en rations quotidiennes": "18 799 387",
            "Coût achat uniforme": "518 048",
            "Domaine de l’État (fermes en H ou bois)": "1 798 004",
            "Revenus des domaines": "10 788 024",
            "Coût fonctionnement Etat": "11 643 950",
            "Nombre d'administrateurs totaux": "11 119",
            "Secrétaires et administrations des ministères": "2 349",
            "Secrétaires et administrations des provinces/départements": "322",
            "Percepteurs d’impôts/douaniers/etc": "5 136",
            "Juges/chancellerie/etc": "532",
            "Préfets / gouverneurs": "14",
            "Sous-préfets/etc": "0",
            "Parlementaires": "126",
            "Personnels parlement": "882",
            "Personnel des armées": "1 758",
            "Nombre de départements / provinces": "14",
            "Secrétaires d'Etat": "9",
            "Gouverneurs / intendants / préfets": "14",
            "Coût des ministres et gouverneurs / préfets / intendants": "467 000",
            "Nombre de bâtiments à construire": "2",
            "Construction kilomètres de routes": "184",
            "Construction de ponts": "4",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 702 000",
            "Nombre de villes (+ 100 000)": "1",
            "Nombre de ville (100 000 – 20 000)": "4",
            "Nombre de villes (20 000- 5000)": "37",
            "Nombre de maires choisis par l’État": "42",
            "nombre de conseillers municipaux": "336",
            "Coûts fonctionnements villes": "264 600",
            "Revenus des villes": "166 851",
            "Nombre d’Universités": "5",
            "Nombre de lycées": "105",
            "Nombre d’écoles primaires": "668",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "67 571",
            "Années de service": "4",
            "Recrues « maximum » sur les années de service": "270 286",
            "Engagés réels": "98 901",
            "Nombre de soldats totaux": "98 901",
            "Pensionnaires, retraités ou demi-soldes": "11 799",
            "Entraînement par mois(manœuvres, tirs)": "13",
            "Coût": "1 992 848",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "6",
            "Nombre de compagnies d’artillerie totale": "20",
            "Nombre régiments artillerie": "3,9",
            "Nombre de canons de l’armée de campagne": "266",
            "Garde (Infanterie) régiment": "2,00",
            "Grenadiers": "2,00",
            "Garde (Cavalerie)": "3,50",
            "dont chasseurs à cheval": "1,00",
            "Dragons": "1,50",
            "Grenadiers à cheval": "1,00",
            "Nombre soldats Garde": "7 600",
            "Soldats dans une compagnie": "100,0",
            "Sous-officiers et caporaux dans une compagnie": "10,0",
            "Total": "110,0",
            "Soldats dans un bataillon": "800,0",
            "Sous-officiers et caporaux": "80,0",
            "Soldats dans un régiment (pied de paix)": "1 600,0",
            "Sous-officiers et caporaux (Régiment Paix)": "240,0",
            "Soldats dans un régiment (pied de guerre)": "2 640,0",
            "Soldats dans une division": "4 800,0",
            "Sous-officiers et caporaux (Division)": "720,0",
            "Division sur pied de guerre": "7 920,0",
            "Nombre de Régiments de ligne": "32,0",
            "Régiments de grenadiers": "4,0",
            "Régiments de génie": "0,5",
            "Régiments d’infanterie légère": "4,0",
            "Nombre de régiments": "40,0",
            "Nombre de bataillons": "120,0",
            "Fantassins (dont sous-officiers)": "73 600",
            "Fantassins recrutés (conscription)": "4 505",
            "(Soldats manquants pour le pied de guerre )": "-27 495",
            "Cavaliers": "0,0",
            "Armée permanente et garnison": "94 396",
            "Conscription": "4 505",
            "Canons": "2 832",
            "Rappel Dont canons de campagne": "266",
            "Infanterie": "78 105",
            "Proportion Cavalerie/infanterie": "0,00 %",
            "Artilleurs": "15 541",
            "Corps du génie (nombre de soldats)": "592",
            "Levée pour cette année (appelés de conscription)": "4 505",
            "Part sur les 1/140e": "6,67 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "119 867",
            "Besoin militaire": "11 440",
            "Excédent ou déficit": "18 427",
            "Achat chevaux": "-5 694 833",
            "Forteresses": "63",
            "Forteresses 1ère classe": "2",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "37",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "37",
            "Forts – Poste militaire": "21",
            "Construction de places de troisième rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "486",
            "Capacité de casernement": "123 000",
            "Construction de casernes": "8",
            "Coût (construction + entretien )": "1 415 000",
            "Artillerie des côtes": "9",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "3 113",
            "Capitaines": "1 557",
            "Lieutenants-colonels, chef d’escadrons et majors": "638",
            "Colonels": "249",
            "Généraux de brigade": "80",
            "Généraux de division": "76",
            "Total officiers": "5 713",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "336",
            "Milices/garde nationale": "94 600",
            "Proportion par rapport à la population": "1/100",
            "Nombre de cohortes de Milices": "189",
            "Fusils disponibles": "37 000",
            "Divisions militaires": "9",
            "Pensions (familles, récompenses des généraux, etc)": "1 041",
            "Pensions": "1 394 404",
            "Maréchaussée/gendarmerie/police": "6 307",
            "Coût maréchaussée": "1 917 227",
            "Messagers/personnels des postes": "1 794",
            "Coût (Poste)": "851 992",
            "Budget naval": "4 962 223",
            "Personnel administratif de la marine": "175",
            "Nombre de marins": "180",
            "Nombre de troupes de marines dans les navires": "20",
            "Salaires des marins": "103,10",
            "Salaires et pensions pour des marins": "21 798",
            "Salaires des officiers (Marine)": "27 400",
            "Nombre de marins dans la marine marchande": "4 485",
            "Pêcheurs": "4 093",
            "Navires de transport": "4",
            "Colons envoyés aux colonies": "0",
            "Coût colonisation": "152 000",
            "Population proche du littoral (-80km) et sur les fleuves": "3 410 700",
            "Réservoir de marins": "45 476",
            "Marins effectifs": "8 758",
            "Marins encore disponibles": "36 718",
            "Navires de ligne": "0",
            "Navires d’escortes": "8",
            "Corvettes-Brig-Sloops-chébeqs": "5",
            "Sloops-Goelettes-shooners": "3",
            "Navires d’escortes actifs": "1",
            "Corvettes- (Actifs)": "1",
            "Enseignes de vaisseaux": "9",
            "Lieutenants de vaisseaux": "5",
            "Ecoles navales": "1",
            "Elèves": "15",
            "Construction de vaisseaux": "0",
            "Construction de navires légers": "1",
            "Constructions navales Bricks-Corvettes": "1",
            "Navires de ligne en radoub": "0",
            "Bâtiments de la Marine": "2",
            "Petits arsenaux": "1",
            "Cales de radoubs (pour vaisseaux)": "0",
            "Nombre d’ouvriers": "420",
            "Coût construction navires": "325 000",
            "Entretien et approvisionnement des navires": "282 360",
            "Entretien et approvisionnement des arsenaux": "108 900",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "134 003",
            "Navires de pêche": "682",
            "Navires marchands totaux": "492",
            "Cabotage (5 à 50 tonneaux)": "340",
            "Grand cabotage (50-100 tonneaux)": "101",
            "Commerce de haute mer (100-250 tonneaux)": "30",
            "Grand commerce (+ 250 tonneaux)": "21",
            "production navires marchands": "12",
            "Cabotage (5 à 50 tonneaux) (Prod)": "8",
            "Grand cabotage (50-100 tonneaux) (Prod)": "3",
            "Commerce de haute mer (100-200 tonneaux)": "1",
            "Commerce estimé en livres tournois": "24 399 601",
            "Taxes": "1 626 640",
            "Droits de mouillage": "5 724 300",
            "Manufactures (textiles verreries imprimeries etc)": "48",
            "Production de fer (T)": "23 480",
            "Production de Fonte (T)": "2 008",
            "Production de cuivre (quintaux)": "4 817",
            "Production fusils": "110 000",
            "Production de canons": "440",
            "Production de canons navals": "138",
            "Production de poudre (T)": "110 000",
            "Industrie production en valeur": "43 756 800",
            "Taxe industrie": "4 324 680",
            "Nombre de manufactures d’armes ou arsenaux": "11",
            "Ouvriers": "2 255",
            "Reste après besoin en fusils (dans l’armée et marine)": "43 390",
            "Fusils (dans l'armée ou en réserve)": "43 390",
            "Besoin de canons navals": "24",
            "Réserve de canons navals": "114",
            "Superficie du territoire en forêt": "22,21 %",
            "Production bois (Mcube)": "9 424 000",
            "Consommation de bois": "9 475 000",
            "Si excédent, vente ou achat si quantité insuffisante": "-510 000",
            "Taxes sur les excédents": "-51 000",
            "Nombre d’hectares de blé": "2 157 605",
            "production blé par an (en quintaux)": "15 103 234",
            "Consommation": "19 640 625",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "-74 866 954",
            "Taxes sur les excédents (Blé)": "-748 670",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "863 042",
            "Production légumes:etc": "9 924 982",
            "Consommation (Légumes)": "8 987 000",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "5 627 892",
            "Taxes sur les excédents (Légumes)": "112 558",
            "Nombre d’hectares de vigne": "75 516",
            "Production vin (hectolitres)": "1 510 323",
            "Consommation (Vin)": "3 216 400",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "-76 773 449",
            "Taxes sur les excédents (Vin)": "-2 687 071",
            "Nombre d’hectares pour l’élevage": "2 517 206",
            "Recettes totales Pays": "139 441 999",
            "Dépenses totales": "91 238 252",
            "Coût maison du roi": "5 654 000",
            "Trésor": "8 203 747",
            "Dette": "0",
            "Excédent": "56 203 747",
            "Dette ou excédent en pourcentage des recettes": "40,31 %",
            "Charge de la dette": "0,0"
        }
    }, 
"Louis II Condé": {
        "nom": "Louis II Condé",
        "RAW_DATA": {
            "Population": "12 220 500",
            "Population des colonies": "236 390",
            "Dont colons blancs": "117 340",
            "Indigènes": "100 320",
            "Esclaves": "18 730",
            "Total population métropolitaine": "11 220 500",
            "Superficie métropole (km²)": "805 830",
            "Densité de population": "15.17",
            "Recettes fiscales (en livres tournois)": "147 837 578",
            "Impôts directs": "36 059 140",
            "Impôt foncier": "14 145 404",
            "Impôt sur le mobilier": "4 319 893",
            "Patente": "17 593 843",
            "Impôts indirects": "111 778 438",
            "Gabelle": "22 441 000",
            "Aides/autres impôts indirects": "39 271 750",
            "Enregistrement/successions": "18 233 313",
            "Douanes": "28 653 234",
            "Lotteries": "3 179 142",
            "Revenu national brut": "3 143 423 075",
            "Revenu moyen par hab": "280,15",
            "Dépenses militaires": "98 993 986",
            "Soldes": "32 242 771",
            "Salaires soldats": "22 723 188",
            "Salaires officiers": "9 519 583",
            "Salaires annuels soldats réguliers": "120,65",
            "Salaires conscrits": "112,00",
            "Salaires annuels sous-officiers": "245,00",
            "Salaires lieutenants": "850,00",
            "Salaires capitaines": "1 250,00",
            "Salaires lieutenants-colonels": "2 250,00",
            "Salaires colonels": "3 500,00",
            "Salaires généraux de brigade": "6 750,00",
            "Salaires généraux de division": "10 500,00",
            "Coût administration de la Guerre": "53 916 602",
            "Entretien des places": "7 858 800",
            "Budget de construction de places": "840 000",
            "Besoin en rations quotidiennes": "33 129 458",
            "Coût achat uniforme": "837 894",
            "Domaine de l’État (fermes en H ou bois)": "4 029 150",
            "Revenus des domaines": "24 174 900",
            "Coût fonctionnement Etat": "25 722 705",
            "Nombre d'administrateurs totaux": "20 463",
            "Secrétaires et administrations des ministères": "1 827",
            "Secrétaires et administrations des provinces/départements": "392",
            "Percepteurs d’impôts/douaniers/etc": "12 950",
            "Juges/chancellerie/etc": "1 064",
            "Préfets / gouverneurs": "28",
            "Sous-préfets/etc": "0",
            "Parlementaires": "364",
            "Personnels parlement": "1 456",
            "Personnel des armées": "2 382",
            "Nombre de départements / provinces": "28",
            "Secrétaires d'Etat": "7",
            "Gouverneurs / intendants / préfets": "28",
            "Coût des ministres et gouverneurs / préfets / intendants": "434 000",
            "Nombre de bâtiments à construire": "5",
            "Construction kilomètres de routes": "177",
            "Construction de ponts": "3",
            "Construction de canaux": "0",
            "Coûts travaux et entretiens infrastructures": "1 886 000",
            "Nombre de villes (+ 100 000)": "2",
            "Nombre de ville (100 000 – 20 000)": "5",
            "Nombre de villes (20 000- 5000)": "72",
            "Nombre de maires choisis par l’État": "79",
            "nombre de conseillers municipaux": "632",
            "Coûts fonctionnements villes": "497 700",
            "Revenus des villes": "180 296",
            "Nombre d’Universités": "7",
            "Nombre de lycées": "191",
            "Nombre d’écoles primaires": "1 085",
            "Recrues potentielles chaque année (Calcul de Napoléon), 1/140e": "80 146",
            "Années de service": "7",
            "Recrues « maximum » sur les années de service": "561 025",
            "Engagés réels": "148 237",
            "Nombre de soldats totaux": "148 237",
            "Pensionnaires, retraités ou demi-soldes": "15 661",
            "Entraînement par mois(manœuvres, tirs)": "18",
            "Coût": "4 135 812",
            "Nombre de compagnies d’artillerie par division d’infanterie": "2",
            "Nombre de canons par compagnie": "6",
            "Nombre de compagnies d’artillerie à cheval": "13",
            "Nombre de compagnies d’artillerie totale": "43",
            "Nombre régiments artillerie": "7,0",
            "Nombre de canons de l’armée de campagne": "522",
            "Garde (Infanterie) régiment": "2,50",
            "Dont vélites": "0,50",
            "Grenadiers": "2,00",
            "Garde (Cavalerie)": "4,00",
            "dont chasseurs à cheval": "2,00",
            "Dragons": "1,00",
            "Lanciers": "1,00",
            "Nombre soldats Garde": "9 200",
            "Soldats dans une compagnie": "160,0",
            "Sous-officiers et caporaux dans une compagnie": "25,0",
            "Total": "185,0",
            "Soldats dans un bataillon": "640,0",
            "Sous-officiers et caporaux": "100,0",
            "Soldats dans un régiment (pied de paix)": "1 280,0",
            "Sous-officiers et caporaux (Régiment Paix)": "300,0",
            "Soldats dans un régiment (pied de guerre)": "2 220,0",
            "Soldats dans une division": "3 840,0",
            "Sous-officiers et caporaux (Division)": "900,0",
            "Division sur pied de guerre": "6 660,0",
            "Nombre de Régiments de ligne": "45,0",
            "Régiments de grenadiers": "5,0",
            "Régiments de génie": "1,0",
            "Régiments d’infanterie légère": "10,0",
            "Nombre de régiments": "60,0",
            "Nombre de bataillons": "180,0",
            "Nombre de divisions": "20,0",
            "Fantassins (dont sous-officiers)": "94 800",
            "Fantassins recrutés (conscription)": "7 286",
            "(Soldats manquants pour le pied de guerre )": "-31 114",
            "Cavaliers dans un régiment": "620,0",
            "Régiments de hussards": "18,0",
            "Régiments de Uhlans/chevau-légers": "10,0",
            "Régiments de dragons": "10,0",
            "Nombre total de régiments": "38,0",
            "Cavaliers dans une division de cavalerie": "2 480,0",
            "Nombre de divisions": "12,7",
            "Cavaliers": "23 560,0",
            "Armée permanente et garnison": "140 951",
            "Conscription": "7 286",
            "Canons": "3 568",
            "Rappel Dont canons de campagne": "522",
            "Infanterie": "102 086",
            "Proportion Cavalerie/infanterie": "23,08 %",
            "Artilleurs": "19 678",
            "Corps du génie (nombre de soldats)": "1 184",
            "Levée pour cette année (appelés de conscription)": "7 286",
            "Part sur les 1/140e": "9,09 %",
            "Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)": "28 610",
            "Besoin militaire": "43 529",
            "Excédent ou déficit": "25 081",
            "Achat chevaux": "-2 920 015",
            "Forteresses": "61",
            "Forteresses 1ère classe": "3",
            "Forteresses 2e classe": "9",
            "Forteresses 3e et 4e classe": "34",
            "Forteresses de 4e classe ( 500 à 1300 hommes)": "35",
            "Forts – Poste militaire": "41",
            "Construction de places de second rang": "1",
            "Nombre de casernes (1 caserne = 250 logements)": "510",
            "Capacité de casernement": "129 950",
            "Construction de casernes": "16",
            "Coût (construction + entretien )": "1 675 000",
            "Artillerie des côtes": "44",
            "Constructions petites fortifications/fortifications côtières": "2",
            "Lieutenants": "6 857",
            "Capitaines": "2 928",
            "Lieutenants-colonels, chef d’escadrons et majors": "1 111",
            "Colonels": "448",
            "Généraux de brigade": "210",
            "Généraux de division": "126",
            "Total officiers": "9 051",
            "Nombre d'écoles militaires (armée)": "3",
            "Nombre d'élèves": "249",
            "Milices/garde nationale": "102 205",
            "Proportion par rapport à la population": "1/100",
            "Nombre de cohortes de Milices": "224",
            "Fusils disponibles": "25 000",
            "Milices coloniales": "5 867",
            "Proportion par rapport aux colons blancs": "1 / 20",
            "Nombre de bataillons de miliciens": "12",
            "Fusils disponibles (Milices Col.)": "2 000",
            "Divisions militaires": "15",
            "Pensions (familles, récompenses des généraux, etc)": "449",
            "Pensions": "2 468 510",
            "Maréchaussée/gendarmerie/police": "7 013",
            "Coût maréchaussée": "2 244 100",
            "Messagers/personnels des postes": "2 145",
            "Coût (Poste)": "868 759",
            "Budget naval": "29 620 995",
            "Personnel administratif de la marine": "1 505",
            "Nombre de marins": "6 813",
            "Nombre de troupes de marines dans les navires": "1 090",
            "Salaires des marins": "119,40",
            "Salaires et pensions pour des marins": "1 393 706",
            "Salaires des officiers (Marine)": "1 845 000",
            "Nombre de marins dans la marine marchande": "23 134",
            "Pêcheurs": "7 602",
            "Navires de transport": "49",
            "Colons envoyés aux colonies": "5 633",
            "Coût colonisation": "2 115 485",
            "Population proche du littoral (-80km) et sur les fleuves": "6 334 800",
            "Réservoir de marins": "84 464",
            "Marins effectifs": "37 549",
            "Marins encore disponibles": "46 915",
            "Navires de ligne": "45",
            "80 canons": "3",
            "74 canons": "9",
            "64 canons": "21",
            "50 canons": "10",
            "Navires de ligne actifs/armés": "9",
            "80 canons (Actifs)": "1",
            "74 canons (Actifs)": "2",
            "64 canons (Actifs)": "5",
            "50 canons (Actifs)": "1",
            "Navires d’escortes": "98",
            "Frégates": "20",
            "Corvettes-Brig-Sloops-chébeqs": "34",
            "Sloops-Goelettes-shooners": "14",
            "Navires d’escortes actifs": "14",
            "Frégates (Actifs)": "2",
            "Corvettes- (Actifs)": "6",
            "Sloops-Goelettes-shooners (Actifs)": "6",
            "Enseignes de vaisseaux": "260",
            "Capitaine de frégate": "66",
            "Lieutenants de vaisseaux": "182",
            "Capitaines de vaisseaux": "80",
            "Contre-amiraux": "16",
            "Vice-amiraux": "8",
            "Ecoles navales": "1",
            "Elèves": "60",
            "Construction de vaisseaux": "3",
            "Constructions navales 74 canons": "2",
            "Constructions navales (64-50 canons)": "1",
            "Construction de navires légers": "4",
            "Constructions navales (frégates)": "2",
            "Constructions navales Bricks-Corvettes": "1",
            "Constructions navales (Sloops-Goëlettes-Shooners)": "1",
            "Navires de ligne en radoub": "1",
            "Frégates ou navires d’escorte en radoub": "1",
            "Bâtiments de la Marine": "18",
            "Nombre de grands arsenaux maritimes": "2",
            "Petits arsenaux": "3",
            "Cales de radoubs (pour vaisseaux)": "3",
            "Nombre d’ouvriers": "6 230",
            "Coût construction navires": "5 145 000",
            "Entretien et approvisionnement des navires": "3 037 676",
            "Entretien et approvisionnement des arsenaux": "1 472 300",
            "Travaux d’agrandissements dans les ports/villes côtières/arsenaux": "234 004",
            "Travaux dans les colonies": "427 400",
            "Forts dans les colonies": "8",
            "Constructions forts colonies": "1",
            "Navires de pêche": "1 267",
            "Navires marchands totaux": "1 407",
            "Cabotage (5 à 50 tonneaux)": "571",
            "Grand cabotage (50-100 tonneaux)": "390",
            "Commerce de haute mer (100-250 tonneaux)": "301",
            "Grand commerce (+ 250 tonneaux)": "145",
            "production navires marchands": "34",
            "Cabotage (5 à 50 tonneaux) (Prod)": "17",
            "Grand cabotage (50-100 tonneaux) (Prod)": "6",
            "Commerce de haute mer (100-200 tonneaux)": "6",
            "Grand commerce (+ 200 tonneaux)": "5",
            "Sucre (en Kg)": "1 434 500",
            "Café (Kg)": "231 000",
            "Tabac (en kg)": "505 800",
            "Coton (en kg)": "1 458 000",
            "Indigo (en kg)": "294 500",
            "Thé (en Kg)": "402 000",
            "Commerce estimé en livres tournois": "105 707 811",
            "Taxes": "8 808 984",
            "Droits de mouillage": "19 844 250",
            "Manufactures (textiles verreries imprimeries etc)": "50",
            "Production de fer (T)": "50 210",
            "Production de Fonte (T)": "0",
            "Production de cuivre (quintaux)": "21 450",
            "Production d'argent (Kg)": "52 750",
            "Production fusils": "141 000",
            "Production de canons": "600",
            "Production de canons navals": "281",
            "Production de poudre (T)": "150 000",
            "Industrie production en valeur": "84 194 500",
            "Taxe industrie": "17 593 843",
            "Nombre de manufactures d’armes ou arsenaux": "15",
            "Ouvriers": "3 075",
            "Reste après besoin en fusils (dans l’armée et marine)": "35 356",
            "Fusils (dans l'armée ou en réserve)": "35 356",
            "Besoin de canons navals": "326",
            "Réserve de canons navals": "-45",
            "Superficie du territoire en forêt": "29,34 %",
            "Production bois (Mcube)": "19 270 000",
            "Consommation de bois": "11 281 000",
            "Si excédent, vente ou achat si quantité insuffisante": "79 890 000",
            "Taxes sur les excédents": "7 989 000",
            "Nombre d’hectares de blé": "7 010 721",
            "production blé par an (en quintaux)": "45 569 687",
            "Consommation": "25 552 614",
            "Si excédent, vente ou achat si quantité insuffisante (Blé)": "289 006 095",
            "Taxes sur les excédents (Blé)": "5 780 122",
            "Nombre d’hectares de légumes/fruits/pommes de terre": "1 611 660",
            "Production légumes:etc": "12 087 450",
            "Consommation (Légumes)": "10 659 475",
            "Si excédent, vente ou achat si quantité insuffisante (Légumes)": "8 567 850",
            "Taxes sur les excédents (Légumes)": "171 357",
            "Nombre d’hectares de vigne": "483 498",
            "Production vin (hectolitres)": "13 296 195",
            "Consommation (Vin)": "10 098 450",
            "Si excédent, vente ou achat si quantité insuffisante (Vin)": "138 723 525",
            "Taxes sur les excédents (Vin)": "6 936 176",
            "Nombre d’hectares pour l’élevage": "5 640 810",
            "Recettes totales Pays": "192 889 133",
            "Dépenses totales": "168 184 411",
            "Coût maison du roi": "8 660 000",
            "Trésor": "9 704 722",
            "Dette": "0",
            "Excédent": "24 704 722",
            "Dette ou excédent en pourcentage des recettes": "12,81 %",
            "Charge de la dette": "0,0"
        }
    } 
}; // <--- CORRIGÉ AVEC UN POINT-VIRGULE

// =======================================================
// SECTION 0.5: NOUVELLES VARIABLES GLOBALES & CLASSES
// =======================================================

// NOUVELLES VARIABLES GLOBALES POUR LA CARTE
let MONDE = {}; // Va stocker tous les objets Province (chargés depuis map_data.json)
let PROVINCES_PAR_FACTION = {}; // Raccourci pour trouver les provinces d'une faction

class Province {
    /**
     * @param {string} id - L'ID de la province (ex: "wellington_1")
     * @param {object} data - Les données brutes du map_data.json
     */
    constructor(id, data) {
        this.id = id;
        this.nom_affiche = data.nom_affiche;
        // Stocke le propriétaire initial pour référence
        this.proprietaireInitial = data.proprietaire; 
        this.proprietaireActuel = data.proprietaire;
        this.voisins_terrestres = data.voisins_terrestres;
        this.forteresses = data.forteresses;
        this.superficie = data.superficie;
        
        // Données dynamiques
        this.timer_instabilite = 0; // Pour la conquête
    }
    
    __repr__() {
        return `<Province: ${this.nom_affiche} (${this.proprietaireActuel})>`;
    }
}

class Regiment {
    /**
     * @param {string} id - ID unique du régiment (ex: "wellington_inf_1")
     * @param {string} proprietaireId - ID de la faction (ex: "Wellington")
     * @param {string} type - Type d'unité (ex: "Infanterie de Ligne")
     * @param {string} provinceId - ID de la province où il est (ex: "wellington_1")
     */
    constructor(id, proprietaireId, type, provinceId) {
        this.id = id;
        this.nom = id; // Nom par défaut
        this.proprietaire = proprietaireId;
        this.type = type; 
        this.localisation = provinceId; 
        this.assigne_a_armee = null; // ID de l'armée, si assigné
        
        this.effectif_max = 0; // Sera défini à l'initialisation
        this.effectif_actuel = 0; // Sera défini à l'initialisation
        this.statut = "disponible"; // "disponible", "en-recuperation"
        this.officiers = 0; // Nombre d'officiers requis
    }
}

// DANS SECTION 0.5, DANS LA CLASSE "Armee"
class Armee {
    /**
     * @param {string} id - ID unique de l'armée (ex: "wel_1")
     * @param {string} nom - Nom donné par le joueur (ex: "Armée du Nord")
     * @param {string} proprietaireId - ID de la faction (ex: "Wellington")
     * @param {string} provinceId - ID de la province où elle est (ex: "wellington_1")
     */
    constructor(id, nom, proprietaireId, provinceId) {
        this.id = id;
        this.nom = nom;
        this.proprietaire = proprietaireId;
        this.localisation = provinceId;
        this.statut = "defense"; // "defense" ou "invasion"
        
        /** @type {Regiment[]} */
        this.regiments = []; // Sera peuplé par creerArmee
    }

    // MODIFIÉ (Point 9 - Génie)
    calculerPuissanceCombat() {
        // (Point 8) Calcule la puissance réelle en pondérant les types d'unités
        let puissance = 0;

        // NOUVEAU (Point 9) - Logique du Génie
        let puissance_genie = 0;
        let puissance_combat_pure = 0;

        this.regiments.forEach(reg => {
            // CORRIGÉ : Utilise RECRUIT_DEFINITIONS
            const def = RECRUIT_DEFINITIONS[reg.type]; 
            if (!def) {
                console.warn(`Définition manquante pour ${reg.type} lors du calcul de puissance.`);
                puissance += reg.effectif_actuel; // Valeur par défaut
                return;
            }

            let modificateurType = 1.0;
            if (def.type === "Cavalerie") modificateurType = 1.5;
            else if (def.type === "Artillerie") modificateurType = 2.0;
            else if (def.type === "Garde") modificateurType = 1.8;
            else if (def.type === "Génie") modificateurType = 0.75; // (Malus combat - Point 9)
            
            // --- NOUVELLE LOGIQUE (GROUPE 3) : BONUS SOUS-OFFICIERS (CORRIGÉ) ---
            let doctrine = FACTIONS_DATA[reg.proprietaire].ARMEE.doctrine;
            let bonus_sous_officiers = 1.0;
            let total_hommes = 1;
            let total_sous_officiers = 0;
    
            if (def.type === "Infanterie" || (def.type === "Garde" && reg.type.includes("Infanterie"))) {
                const d = doctrine.infanterie;
                total_hommes = (d.soldats_compagnie + d.sous_officiers_compagnie) * d.compagnies_bataillon * d.bataillons_regiment;
                total_sous_officiers = d.sous_officiers_compagnie * d.compagnies_bataillon * d.bataillons_regiment;
            } else if (def.type === "Cavalerie" || (def.type === "Garde" && reg.type.includes("Cavalerie"))) {
                const d = doctrine.cavalerie;
                total_hommes = (d.soldats_escadron + d.sous_officiers_escadron) * d.escadrons_regiment;
                total_sous_officiers = d.sous_officiers_escadron * d.escadrons_regiment;
            } else if (def.type === "Génie") {
                // Le génie utilise une structure similaire à l'infanterie (simplifié)
                const d = doctrine.infanterie;
                total_hommes = (d.soldats_compagnie + d.sous_officiers_compagnie) * d.compagnies_bataillon * d.bataillons_regiment;
                total_sous_officiers = d.sous_officiers_compagnie * d.compagnies_bataillon * d.bataillons_regiment;
            }
            
            // Ratio de Sous-Officiers (ex: 100 / 1000 hommes = 0.1)
            const ratio_sous_officiers = total_sous_officiers / total_hommes; 
            // Bonus de 25% basé sur le ratio (ex: 0.1 * 2.5 = 0.25 -> +25% bonus)
            bonus_sous_officiers = 1 + (ratio_sous_officiers * 2.5); 
            // --- FIN BONUS SOUS-OFFICIERS ---

            const puissance_regiment = (reg.effectif_actuel * modificateurType) * bonus_sous_officiers;

            // NOUVEAU (Point 9) - Séparation Génie
            if (def.type === "Génie") {
                puissance_genie += (reg.effectif_actuel * 1.25); // Bonus de siège
                puissance_combat_pure += puissance_regiment; // Puissance en combat (avec malus)
            } else {
                puissance_combat_pure += puissance_regiment;
            }
        });
        
        puissance = puissance_combat_pure; // Puissance de base
        
        // Applique un bonus de moral
        const f = FACTIONS_DATA[this.proprietaire];
        if (f) {
            puissance *= (f.ETAT_DYNAMIQUE.moral_armee / 100);
        }
        
        // Retourne un objet pour la logique de combat (Point 9)
        return {
            total: puissance,
            bonus_siege: puissance_genie // La "puissance de siège" pure du génie
        };
    }
}

// (Dans la Section 0.5, après la classe Armee)

const OFFICIER_DEMAND_RULES = {
    par_compagnie: { // Pour Infanterie (Compagnie) et Cavalerie (Escadron)
        capitaine: 1,
        lieutenant: 3
    },
    par_bataillon: { // Infanterie seulement
        lieutenant_colonel: 1,
        capitaine: 2, // Aides de camp
        lieutenant: 2,  // Aides de camp
        sous_officier: 4 
    },
    par_regiment: { // État-major de régiment
        colonel: 1,
        lieutenant_colonel: 2,
        capitaine: 4, 
        lieutenant: 10, 
        sous_officier: 14 
    },
    par_armee_commandement: { // Commandement supérieur (basé sur le nb de régiments)
        general_brigade: 1, // 1 GB par régiment (représente la brigade)
        general_division: 0.5 // 1 GD pour 2 régiments
    },
    par_forteresse: {
        f1: { general_division: 1, lieutenant_colonel: 2, capitaine: 8, lieutenant: 16 },
        f2: { general_brigade: 1, lieutenant_colonel: 1, capitaine: 4, lieutenant: 8 },
        f3_4: { colonel: 1, lieutenant_colonel: 1, capitaine: 4, lieutenant: 8 },
        fort: { capitaine: 1, lieutenant: 1 }    
    },
    par_province_territoire: { // Commandement territorial
        frontiere: { general_division: 1, general_brigade: 2, lieutenant_colonel: 4, capitaine: 8, lieutenant: 16 },
        interne: { general_division: 1, general_brigade: 1, lieutenant_colonel: 2, capitaine: 4, lieutenant: 8 }
    }
};

// =======================================================
// FIN DE LA SECTION 0.5
// =======================================================

// =======================================================
// SECTION 0.6: NOUVELLE BASE DE DONNÉES DES MINISTRES
// =======================================================

const MINISTRES_PERSONNALITES = {
    // === 1. MINISTÈRE DE LA GUERRE ===
    "guerre": [
        {
            id: "guerre_agressif",
            nom: "Le Maréchal Offensif",
            description: "Augmente le moral de l'armée (+3/an) et l'efficacité de la Garde, mais augmente le coût d'entretien de l'armée de 5%.",
            bonus_an: { "moral_armee": 3 },
            // Les effets de nomination/révocation modifient les multiplicateurs globaux
            effet_nomination: (f) => { f.MODIFICATEURS.entretien_armee_mod = 1.05; f.MODIFICATEURS.efficacite_garde_mod = 1.1; },
            effet_revocation: (f) => { f.MODIFICATEURS.entretien_armee_mod = 1.0; f.MODIFICATEURS.efficacite_garde_mod = 1.0; }
        },
        {
            id: "guerre_defenseur",
            nom: "L'Architecte des Bastions",
            description: "Réduit le coût de construction des forteresses (-20%) et augmente le moral en défense (+5).",
            bonus_an: { "moral_armee_defense": 5 },
            effet_nomination: (f) => { f.MODIFICATEURS.cout_forteresse_mod = 0.80; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_forteresse_mod = 1.0; }
        },
        {
            id: "guerre_recruteur",
            nom: "Le Grand Recruteur",
            description: "Réduit le coût de recrutement des régiments (-10%) et accélère la formation des officiers de 10%.",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_recrutement_mod = 0.90; f.MODIFICATEURS.vitesse_formation_officiers_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_recrutement_mod = 1.0; f.MODIFICATEURS.vitesse_formation_officiers_mod = 1.0; }
        },
        {
            id: "guerre_logisticien",
            nom: "L'Intendant Général",
            description: "Réduit l'usure de l'équipement et le coût des rations et uniformes (-15%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_logistique_armee_mod = 0.85; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_logistique_armee_mod = 1.0; }
        }
    ],

    // === 2. MINISTÈRE DE LA MARINE ===
    "marine": [
        {
            id: "marine_constructeur",
            nom: "L'Amiral Bâtisseur",
            description: "Réduit le coût (-10%) et le temps (-20%) de construction des navires de ligne.",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_navire_ligne_mod = 0.90; f.MODIFICATEURS.temps_navire_ligne_mod = 0.80; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_navire_ligne_mod = 1.0; f.MODIFICATEURS.temps_navire_ligne_mod = 1.0; }
        },
        {
            id: "marine_corsaire",
            nom: "Le Stratège Corsaire",
            description: "Améliore l'efficacité des frégates en 'Guerre de Course' (+25% gains) et accélère leur construction (-10% coût).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_guerre_de_course_pct = 0.25; f.MODIFICATEURS.cout_navire_escorte_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_guerre_de_course_pct = 0.0; f.MODIFICATEURS.cout_navire_escorte_mod = 1.0; }
        },
        {
            id: "marine_amiral",
            nom: "Le Vieux Loup de Mer",
            description: "Augmente la Qualité de la Marine (+3/an) et accélère les radoubs (-30% temps).",
            bonus_an: { "qualite_marine": 3 },
            effet_nomination: (f) => { f.MODIFICATEURS.temps_radoub_mod = 0.70; },
            effet_revocation: (f) => { f.MODIFICATEURS.temps_radoub_mod = 1.0; }
        },
        {
            id: "marine_econome",
            nom: "Le Gestionnaire des Ports",
            description: "Réduit le coût d'entretien de la flotte armée (-10%), mais le moral de la marine baisse légèrement (-1/an).",
            bonus_an: { "moral_marine": -1 },
            effet_nomination: (f) => { f.MODIFICATEURS.entretien_marine_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.entretien_marine_mod = 1.0; }
        }
    ],

    // === 3. MINISTÈRE DE L'INTÉRIEUR ===
    "interieur": [
        {
            id: "interieur_ordre",
            nom: "Le Poing de Fer",
            description: "Augmente la Stabilité (+2/an) et l'efficacité de la police, mais réduit la croissance de la population (-0.1%).",
            bonus_an: { "stabilite": 2, "croissance_pop_mod": -0.001 },
            effet_nomination: (f) => { f.MODIFICATEURS.efficacite_police_mod = 1.15; },
            effet_revocation: (f) => { f.MODIFICATEURS.efficacite_police_mod = 1.0; }
        },
        {
            id: "interieur_liberal",
            nom: "Le Réformateur Social",
            description: "Augmente la croissance de la population (+0.2%), mais réduit la Stabilité (-1/an).",
            bonus_an: { "stabilite": -1, "croissance_pop_mod": 0.002 },
            effet_nomination: (f) => {},
            effet_revocation: (f) => {}
        },
        {
            id: "interieur_sante",
            nom: "Le Baron de la Santé",
            description: "Augmente la croissance de la population (+0.1%) et l'effet du budget 'Santé & Social' (+20%).",
            bonus_an: { "croissance_pop_mod": 0.001 },
            effet_nomination: (f) => { f.MODIFICATEURS.efficacite_sante_mod = 1.20; },
            effet_revocation: (f) => { f.MODIFICATEURS.efficacite_sante_mod = 1.0; }
        },
        {
            id: "interieur_propagande",
            nom: "Le Maître de Cérémonie",
            description: "Augmente le Prestige (+3/an) et l'effet du budget 'Maison du Dirigeant' (+10%).",
            bonus_an: { "prestige": 3 },
            effet_nomination: (f) => { f.MODIFICATEURS.efficacite_maison_dirigeant_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.efficacite_maison_dirigeant_mod = 1.0; }
        }
    ],

    // === 4. MINISTÈRE DES FINANCES ===
    "finances": [
        {
            id: "finances_taxeur",
            nom: "Le Grand Argentier",
            description: "Augmente tous les revenus fiscaux de 5%, mais réduit la Stabilité (-2/an).",
            bonus_an: { "stabilite": -2 },
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_fiscal_global_pct = 0.05; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_fiscal_global_pct = 0.0; }
        },
        {
            id: "finances_gestionnaire_dette",
            nom: "Le Contrôleur de la Dette",
            description: "Réduit passivement le taux d'intérêt de la dette de 0.5% et débloque un meilleur palier d'emprunt.",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_interet_dette = -0.005; f.MODIFICATEURS.palier_emprunt_mod = 1; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_interet_dette = 0.0; f.MODIFICATEURS.palier_emprunt_mod = 0; }
        },
        {
            id: "finances_percepteur",
            nom: "Le Maître des Percepteurs",
            description: "Améliore l'efficacité du ratio des Percepteurs (+25%) et le revenu du Domaine de l'État (+10%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.efficacite_percepteurs_mod = 1.25; f.MODIFICATEURS.revenu_domaine_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.efficacite_percepteurs_mod = 1.0; f.MODIFICATEURS.revenu_domaine_mod = 1.0; }
        },
        {
            id: "finances_econome",
            nom: "L'Économe Royal",
            description: "Réduit les coûts de l'Administration, de la Police et de la Poste de 10%.",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_services_publics_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_services_publics_mod = 1.0; }
        }
    ],

    // === 5. MINISTÈRE DU COMMERCE ===
    "commerce": [
        {
            id: "commerce_negociant",
            nom: "Le Négociant International",
            description: "Augmente la croissance de la Flotte Marchande (+2%/an) et les revenus des Droits de Mouillage (+10%).",
            bonus_an: { "croissance_flotte_marchande": 0.02 },
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_mouillage_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_mouillage_mod = 1.0; }
        },
        {
            id: "commerce_industriel",
            nom: "Le Baron de l'Industrie",
            description: "Réduit le coût de construction de toutes les Manufactures et Mines (-10%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_industrie_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_industrie_mod = 1.0; }
        },
        {
            id: "commerce_mercantiliste",
            nom: "Le Protecteur des Douanes",
            description: "Augmente les revenus des Douanes (+15%) mais réduit la croissance de la Flotte Marchande (-1%/an).",
            bonus_an: { "croissance_flotte_marchande": -0.01 },
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_douane_mod = 1.15; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_douane_mod = 1.0; }
        },
        {
            id: "commerce_agriculture",
            nom: "Le Maître des Forêts et des Champs",
            description: "Augmente le RNB Agricole (+5%) et la production durable de Bois (+10%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.bonus_rnb_agricole_mod = 1.05; f.MODIFICATEURS.production_bois_durable_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.bonus_rnb_agricole_mod = 1.0; f.MODIFICATEURS.production_bois_durable_mod = 1.0; }
        }
    ],

    // === 6. MINISTÈRE DES COLONIES ===
    "colonies": [
        {
            id: "colonies_explorateur",
            nom: "L'Explorateur Infatigable",
            description: "Réduit le coût des Explorations (-25%) et augmente les Terres Découvertes (+10%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_exploration_mod = 0.75; f.MODIFICATEURS.terres_decouvertes_mod = 1.10; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_exploration_mod = 1.0; f.MODIFICATEURS.terres_decouvertes_mod = 1.0; }
        },
        {
            id: "colonies_gouverneur",
            nom: "Le Gouverneur Colonial",
            description: "Augmente l'efficacité de la production coloniale (+10%) et le recrutement des Milices Coloniales.",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.production_coloniale_mod = 1.10; f.MODIFICATEURS.efficacite_milice_coloniale_mod = 1.25; },
            effet_revocation: (f) => { f.MODIFICATEURS.production_coloniale_mod = 1.0; f.MODIFICATEURS.efficacite_milice_coloniale_mod = 1.0; }
        },
        {
            id: "colonies_esclavagiste",
            nom: "Le Marchand d'Esclaves",
            description: "Réduit le coût d'achat des esclaves (-15%) et augmente leur productivité (+5%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_esclave_mod = 0.85; f.MODIFICATEURS.productivite_esclave_mod = 1.05; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_esclave_mod = 1.0; f.MODIFICATEURS.productivite_esclave_mod = 1.0; }
        },
        {
            id: "colonies_colonisateur",
            nom: "Le Promoteur de l'Émigration",
            description: "Augmente la croissance naturelle des colons (+1.0%/an) et réduit le coût d'envoi de nouveaux colons (-10%).",
            bonus_an: { "croissance_colons_mod": 0.01 },
            effet_nomination: (f) => { f.MODIFICATEURS.cout_envoi_colons_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_envoi_colons_mod = 1.0; }
        }
    ],

    // === 7. MINISTÈRE DE L'ADMINISTRATION (Justice & Éducation) ===
    "administration": [
        {
            id: "admin_bureaucrate",
            nom: "Le Premier Bureaucrate",
            description: "Augmente l'Efficacité Administrative Actuelle (+1%/an), mais augmente le coût des salaires administratifs (+5%).",
            bonus_an: { "efficacite_admin": 1 },
            effet_nomination: (f) => { f.MODIFICATEURS.cout_admin_salaire_mod = 1.05; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_admin_salaire_mod = 1.0; }
        },
        {
            id: "admin_educateur",
            nom: "Le Ministre de l'Instruction",
            description: "Augmente le Plafond d'Efficacité (+0.5%/an) et réduit le coût de construction des Écoles et Universités (-10%).",
            bonus_an: { "efficacite_admin_plafond": 0.5 },
            effet_nomination: (f) => { f.MODIFICATEURS.cout_education_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_education_mod = 1.0; }
        },
        {
            id: "admin_statisticien",
            nom: "Le Maître des Statistiques",
            description: "Débloque des informations avancées et augmente le Plafond d'Efficacité (+0.2%/an) et le revenu des Percepteurs (+5%).",
            bonus_an: { "efficacite_admin_plafond": 0.2 },
            effet_nomination: (f) => { f.MODIFICATEURS.efficacite_percepteurs_mod = 1.05; },
            effet_revocation: (f) => { f.MODIFICATEURS.efficacite_percepteurs_mod = 1.0; }
        },
        {
            id: "admin_architecte",
            nom: "L'Architecte Royal",
            description: "Réduit le coût de construction des Bâtiments Nationaux (-10%) et des Projets Urbains (-10%).",
            bonus_an: {},
            effet_nomination: (f) => { f.MODIFICATEURS.cout_batiment_national_mod = 0.90; f.MODIFICATEURS.cout_projet_urbain_mod = 0.90; },
            effet_revocation: (f) => { f.MODIFICATEURS.cout_batiment_national_mod = 1.0; f.MODIFICATEURS.cout_projet_urbain_mod = 1.0; }
        }
    ]
};

// État global du jeu
let GAME_STATE = {
    currentPlayer: null,
    currentFaction: null,
    anneeActuelle: 1,
    villeMetropoleEnCours: null, 
    villeColonieEnCours: null, 
    armeeEnCoursIndex: null, 
    guerresActives: [], 
    PAYS_NON_COLONIAUX: ["Poniatowski", "Alexandre Ier", "Arch Charles", "Eugène de Savoie", "Soliman", "Nader Shah", "Frédéric II", "Blücher", "Pierre le Grand"],
    // NOUVELLES VARIABLES GLOBALES
    MARCHE_MONDIAL: {
        // Sera peuplé avec les ressources (bois, fer, blé, coton, etc.)
    },
    // --- NOUVEAU BLOC (POUR BÂTIMENTS UNIQUES) ---
    BATIMENTS_UNIQUES_CONSTRUITS: {
        banque_centrale_nationale: {} // Stockera { "Wellington": true, ... }
    },
    PRIX_MARCHE: {
        // Sera peuplé avec les prix de base
    },
    // NOUVEAU (Point 10)
    BUDGET_INFRA_BASE: { // Budget de base pour construction de routes/ponts
        routes_km: 200,
        ponts: 2,
        cout_fixe: 2500000 // Le budget fixe demandé par l'utilisateur
    }
};

// NOUVELLE CONSTANTE (GROUPE 1)
const OFFICIER_HIERARCHIE_COUT = {
    general_division: 0,
    general_brigade: 0,
    colonel: 0,
    lieutenant_colonel: 0,
    capitaine: 0,
    lieutenant: 0, 
    sous_officier: 0 // <-- AJOUTEZ CETTE LIGNE
};

// Paramètres systémiques du jeu
const GAME_SETTINGS = {
    ANNEES_TOTALES: 25,
    TAUX_INTERET_DETTE: 0.04, // 4% de charge d'intérêt
    VALEUR_COMMERCIALE_MONDIALE_CACHE: 5000000000, 
    VALEUR_PORTUAIRE_MONDIALE_CACHE: 3000000000, 
    CROISSANCE_POP_MIN: 0.004, // 0.4%
    CROISSANCE_POP_MAX: 0.021, // 2.1%
    TAUX_RECRUTEMENT_BASE: 0.00714, // 1/140e    
    COUT_HECTARE_COLONIAL: 50, // 100 LT
    HECTARES_PAR_COLON: 5,
    COUT_COLON_BASE: 400, // Coût d'envoi et d'installation
    COUT_EXPLORATION_COLONIALE: 1000000, // Coût pour trouver de nouvelles terres
    TERRES_PAR_EXPLORATION: 5000000, // Hectares découverts
    CROISSANCE_MARCHANDS_BASE: 0.02, // 2% par an
    PUISSANCE_COMMERCIALE: {
        "5-50t": 20000,
        "50-100t": 55000,
        "100-250t": 180000,
        "+250t": 400000
    },
    TAUX_DOUANE_BASE: 0.02, // 2% de la Valeur Commerciale
    TAUX_MOUILLAGE_BASE: 0.0125, // 1.25% de la Valeur Commerciale
    // COUT_ENTRETIEN_FORTERESSE: 5000, // (MODIFIÉ : Devenu obsolète par Point 3)
    COUT_RADOUB_RATIO: 0.3, // 30% du coût de construction
    AGE_RADOUB_REQUIS: 10, // Ans
    IMPACT_SLIDER: {
        EDUCATION: 0.1, 
        INFRASTRUCTURE: 0.05, 
        SANTE_SOCIAL: 0.1, 
        MAISON_DIRIGEANT: 0.5,
        PENSIONS: 0.1
    },
    COASTAL_NATIONS: ["Wellington", "Cromwell", "Malborough", "Maurice de Nassau", "Guillaume d'Orange"], 
    MARINS_PAR_NAVIRE: { 
        peche: 3,
        marchand_p: 5,
        marchand_m: 10,
        marchand_g: 20,
        marchand_tg: 40,
        guerre_par_pin: 10 
    },
    ENTRETIEN_NAVIRE: { 
        ARME: 0.10,     
        DESARME: 0.025,
        APPROVISIONNEMENT_RATIO: 0.055 // NOUVEAU (Point 9) 5.5% de la valeur
    },
    COUT_CONSTRUCTION: {
        cheval: 500, 
        milice_nationale: 100000, 
        milice_coloniale: 50000,
        esclave: 400, // Coût par esclave
        foret: 10000, // Coût pour 200ha
        hectares_par_plantation: 200,
        officier_base_cost: 2400,
        officier_base_time: 2, // ans
        officier_par_regiment: 24, // C'est le coût en 'Lieutenants (Pool)'
        officier_par_garde: 24,
        fonder_ville_metropole: { cout: 1000000, bois: 2000, admin_requis: 50, salaire_ajout: 25000 },
        fonder_ville_colonie: { cout: 200000, bois: 500 },
        importer_ouvriers: { cout: 1000000, quantite: 1000 },
        uniforme: 85, // 85 LT par soldat par an
        ration_jour: 0.125 // 0.125 LT par soldat par jour
    },
    COUTS_ENTRETIEN_FORTERESSES: { 
        'classe_1': 570000, 
        'classe_2': 197000, 
        'classe_3_4': 55000, 
        'fort': 4500 
    },
    ADMIN_EFFICACITE_PLAFOND_BASE: 60.0,
    RESSOURCE_CONVERSION: {
        surexploitation_bois_cout_ha: 100 
    },
    // NOUVEAU (Point 2)
    ENTRETIEN_CASERNES_RATIO: 0.05, // 1/20e du coût de construction des forteresses
    // NOUVEAU (Point 10)
    COUT_KM_ROUTE: 5000, // Basé sur la définition de 'route_royale'
    ENTRETIEN_ROUTE_RATIO: 0.15 // 15% du coût d'achat
};

// NOUVEAU (Point 3 & 4) : Coûts et besoins de l'artillerie
const ARTILLERIE_SPECS = {
    "4-livres": { chevaux: 4, cout_canon: 1500, entretien_ratio: 0.20 }, // 1/5e coût
    "6-livres": { chevaux: 6, cout_canon: 2500, entretien_ratio: 0.20 },
    "8-livres": { chevaux: 6, cout_canon: 3000, entretien_ratio: 0.20 },
    "12-livres": { chevaux: 8, cout_canon: 5000, entretien_ratio: 0.20 },
    "obusiers-6": { chevaux: 6, cout_canon: 2800, entretien_ratio: 0.20 },
    "default": { chevaux: 6, cout_canon: 2500, entretien_ratio: 0.20 } // Sécurité
};

// NOUVEAU (Point 7) : Coûts de l'armement léger
const PRIX_FUSIL = 25; // Coût d'achat d'un fusil
const ENTRETIEN_FUSIL_RATIO = 0.20; // 1/5e du coût d'achat par an

// NOUVEAU (Point 8) : Spécifications de la Garde Nationale
const GARDE_NATIONALE_SPECS = {
    solde_jour: 0.15,
    taille_bataillon: 500,
    officiers_par_bataillon: { lieutenant_colonel: 1, capitaine: 2, lieutenant: 6 },
    officiers_par_2_bataillons: { colonel: 1, general_brigade: 1 },
    officiers_par_4_bataillons: { general_division: 1 }
};

// NOUVEAU (Point 11) : Coûts de l'Éducation
const EDUCATION_COSTS = {
    salaire_primaire: 650,
    nb_prof_primaire: 3,
    salaire_lycee: 1500,
    nb_prof_lycee: 15,
    salaire_universite: 4000,
    nb_prof_universite: 25
};

// NOUVEAU : Salaires de base pour les agents publics (par an)
const SALAIRE_BASE_AGENT = {
    gendarme: 480, // Coût annuel d'un gendarme
    percepteur: 1100, // Un percepteur est plus qualifié
    postier: 600
};

// NOUVEAU : Ratios de base pour l'administration (valeurs par défaut)
const RATIO_BASE_ADMIN = {
    police: 2000, // 1 gendarme / 2000 hab
    percepteurs: 2000, // 1 percepteur / 1000 hab
    poste: 2000 // 1 postier / 2000 hab
};

// Définition des prix de base des biens de production
const GAME_PRICES = {
    // Biens coloniaux (par kg)
    "sucre_kg": 4.95,
    "cafe_kg": 1.85,
    "epices_kg": 11.45,
    "tabac_kg": 1.95,
    "coton_kg": 1.5,
    "indigo_kg": 1.5,
    "the_kg": 3.85,
    "fourrure_piece": 15, // Par pièce
    "ble_kg": 0.045, // CHANGEMENT (Point 4): Prix du blé (identique à la métropole)

    // Biens industriels (Métropole)
    "fer_t": 700, // Par Tonne
    "fonte_t": 1000, // Par Tonne
    "cuivre_quintal": 900, // Par Quintal (env. 100kg)

    // Matériel militaire (par unité)
    "fusil_unite": 25,
    "canon_terre_unite": 3000,
    "canon_mer_unite": 6000
};

// NOUVEAU BLOC : Rendements de base par hectare (en Kg ou Pièce)
const YIELD_PER_HECTARE = {
    'sucre_kg': 1500,
    'cafe_kg': 250,
    'epices_kg': 70,
    'tabac_kg': 500,
    'coton_kg': 150,
    'indigo_kg': 95,
    'the_kg': 300,
    'ble_kg': 1150 // CHANGEMENT (Point 4): Rendement blé colonial (identique métropole)
};

// NOUVEAU BLOC : Mappage pour lier les clés internes aux données brutes et à l'interface
// CHANGEMENT (Point 4): Ajout du blé
const CROP_MAPPING = {
    'sucre_kg': { raw: "Sucre (en Kg)", ui: "Sucre" },
    'cafe_kg': { raw: "Café (Kg)", ui: "Café" },
    'epices_kg': { raw: "Epices (en Kg)", ui: "Épices" },
    'tabac_kg': { raw: "Tabac (en kg)", ui: "Tabac" },
    'coton_kg': { raw: "Coton (en kg)", ui: "Coton" },
    'indigo_kg': { raw: "Indigo (en kg)", ui: "Indigo" },
    'the_kg': { raw: "Thé (en Kg)", ui: "Thé" },
    'ble_kg': { raw: null, ui: "Blé" } // Le blé n'a pas de "raw data" coloniale
};

// NOUVEAU BLOC : Constantes de l'agriculture en métropole
// (Modifié pour inclure les nouveaux types de cultures)
const AGRICULTURE_SETTINGS = {
    // Allocation par défaut en % des terres
    allocation_default: {
        ble: 0.30,
        orge: 0.10,
        avoine: 0.10,
        lin_chanvre: 0.03,
        vignes: 0.15,
        houblon: 0.02, // (Pour la bière)
        pomme_de_terre: 0.05,
        legumes_fruits: 0.05,
        betail: 0.05, // (Boeuf + Cuir)
        moutons: 0.10, // (Mouton + Laine)
        porcins: 0.05, // (Porc + Suif)
        olives: 0.0 // (Huile)
    }
};

// NOUVEAU : Répartition des terres par faction (CORRIGÉ AVEC LES NOUVEAUX BIENS)
const FACTION_ALLOCATIONS_TERRES = {
    // --- PROFIL FRANÇAIS (Vignes/Élevage équilibré) ---
    // Total: 0.28+0.10+0.05+0.03 + 0.25+0.02 + 0.05+0.05 + 0.05+0.10+0.02 = 1.0
    "Napoléon":         { ble: 0.33, orge: 0.03, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.07, moutons: 0.10, porcins: 0.02, olives: 0.02 },
    "Lannes":           { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.21, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.04 },
    "Davout":           { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },
    "Philippe d’Orléans":{ ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },
    "Louis XIV":        { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },
    "Louis XIII":       { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },
    "Henri IV":         { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },
    "Louis II Condé":   { ble: 0.33, orge: 0.05, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.25, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.0 },

    // --- PROFIL ANGLAIS (Élevage/Houblon/Patates) ---
    // Total: 0.20+0.15+0.10+0.03 + 0.0+0.10 + 0.10+0.05 + 0.07+0.15+0.05 = 1.0
    "Wellington":       { ble: 0.3, orge: 0.05, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.05, betail: 0.07, moutons: 0.15, porcins: 0.05, olives: 0.0 },
    "Cromwell":         { ble: 0.30, orge: 0.05, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.05, betail: 0.07, moutons: 0.15, porcins: 0.05, olives: 0.0 },
    "Malborough":       { ble: 0.30, orge: 0.05, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.05, betail: 0.07, moutons: 0.15, porcins: 0.05, olives: 0.0 },

    // --- PROFIL PRUSSIEN/ALLEMAND (Céréales/Patates) ---
    // Total: 0.35+0.15+0.10+0.03 + 0.0+0.05 + 0.15+0.02 + 0.05+0.05+0.05 = 1.0
    "Frédéric II":      { ble: 0.35, orge: 0.10, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.05, pomme_de_terre: 0.15, legumes_fruits: 0.05, betail: 0.07, moutons: 0.05, porcins: 0.05, olives: 0.0 },
    "Blücher":          { ble: 0.35, orge: 0.10, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.05, pomme_de_terre: 0.15, legumes_fruits: 0.05, betail: 0.07, moutons: 0.05, porcins: 0.05, olives: 0.0 },
    "Maurice de Saxe":  { ble: 0.35, orge: 0.10, avoine: 0.10, lin_chanvre: 0.02, vignes: 0.05, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.03, betail: 0.05, moutons: 0.05, porcins: 0.05, olives: 0.0 },
    
    // --- PROFIL RUSSE (Céréales/Lin) ---
    // Total: 0.35+0.10+0.15+0.10 + 0.0+0.0 + 0.05+0.03 + 0.07+0.10+0.05 = 1.0
    "Alexandre Ier":    { ble: 0.4, orge: 0.10, avoine: 0.10, lin_chanvre: 0.09, vignes: 0.01, houblon: 0.0, pomme_de_terre: 0.05, legumes_fruits: 0.03, betail: 0.07, moutons: 0.10, porcins: 0.05, olives: 0.0 },
    "Pierre le Grand":  { ble: 0.4, orge: 0.10, avoine: 0.10, lin_chanvre: 0.09, vignes: 0.01, houblon: 0.0, pomme_de_terre: 0.05, legumes_fruits: 0.03, betail: 0.07, moutons: 0.10, porcins: 0.05, olives: 0.0 },
    
    // --- PROFIL ESPAGNOL (Vignes/Élevage/Olives) ---
    // Total: 0.20+0.10+0.05+0.02 + 0.30+0.0 + 0.03+0.05 + 0.05+0.10+0.02 + 0.08 = 1.0
    "Philippe II d'Esp":{ ble: 0.20, orge: 0.10, avoine: 0.05, lin_chanvre: 0.02, vignes: 0.30, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.08 },
    "Charles Quint":    { ble: 0.20, orge: 0.10, avoine: 0.05, lin_chanvre: 0.02, vignes: 0.30, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.08 },
    "Philippe V Espagne":{ ble: 0.20, orge: 0.10, avoine: 0.05, lin_chanvre: 0.02, vignes: 0.30, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.05, moutons: 0.10, porcins: 0.02, olives: 0.08 },

    // --- PROFIL AUTRICHIEN (Équilibré) ---
    // Total: 0.30+0.15+0.10+0.03 + 0.10+0.05 + 0.05+0.02 + 0.05+0.10+0.05 = 1.0
    "Arch Charles":     { ble: 0.30, orge: 0.15, avoine: 0.10, lin_chanvre: 0.03, vignes: 0.10, houblon: 0.05, pomme_de_terre: 0.05, legumes_fruits: 0.02, betail: 0.05, moutons: 0.10, porcins: 0.05, olives: 0.0 },
    "Eugène de Savoie": { ble: 0.25, orge: 0.10, avoine: 0.05, lin_chanvre: 0.03, vignes: 0.20, houblon: 0.02, pomme_de_terre: 0.05, legumes_fruits: 0.05, betail: 0.10, moutons: 0.10, porcins: 0.05, olives: 0.0 },
    
    // --- PROFIL NÉERLANDAIS (Horticole/Houblon) ---
    // Total: 0.25+0.15+0.05+0.05 + 0.0+0.10 + 0.10+0.10 + 0.10+0.05+0.05 = 1.0
    "Maurice de Nassau":{ ble: 0.33, orge: 0.07, avoine: 0.05, lin_chanvre: 0.05, vignes: 0.0, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.10, betail: 0.10, moutons: 0.05, porcins: 0.05, olives: 0.0 },
    "Guillaume d'Orange":{ ble: 0.33, orge: 0.07, avoine: 0.05, lin_chanvre: 0.05, vignes: 0.0, houblon: 0.10, pomme_de_terre: 0.10, legumes_fruits: 0.10, betail: 0.10, moutons: 0.05, porcins: 0.05, olives: 0.0 },
    
    // --- FACTIONS UNIQUES ---
    "Charles XII": { // Suède (Froid, patates)
        ble: 0.35, orge: 0.10, avoine: 0.15, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.01, pomme_de_terre: 0.15, legumes_fruits: 0.01, betail: 0.10, moutons: 0.05, porcins: 0.05, olives: 0.0
    },
    "Gaston de Foix": { // Italie/Navarre (Olives)
        ble: 0.28, orge: 0.02, avoine: 0.05, lin_chanvre: 0.02, vignes: 0.25, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.10, moutons: 0.10, porcins: 0.02, olives: 0.08
    },
    "Poniatowski": { // Pologne (Céréales/Élevage)
        ble: 0.40, orge: 0.10, avoine: 0.15, lin_chanvre: 0.03, vignes: 0.0, houblon: 0.01, pomme_de_terre: 0.10, legumes_fruits: 0.01, betail: 0.10, moutons: 0.05, porcins: 0.05, olives: 0.0
    },
    "Soliman": { // Ottoman (Olives, pas de porc)
        ble: 0.30, orge: 0.10, avoine: 0.05, lin_chanvre: 0.02, vignes: 0.20, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.05, betail: 0.10, moutons: 0.10, porcins: 0.0, olives: 0.05
    },
    "Nader Shah": { // Perse (Élevage, pas de porc)
        ble: 0.35, orge: 0.05, avoine: 0.02, lin_chanvre: 0.01, vignes: 0.03, houblon: 0.0, pomme_de_terre: 0.03, legumes_fruits: 0.03, betail: 0.10, moutons: 0.38, porcins: 0.0, olives: 0.0
    }
};

// NOUVEAU BLOC : Rendements de la métropole par hectare (en Kg)
// (MODIFIÉ ET CORRIGÉ)
const YIELDS_METROPOLE = {
    ble: 1150,
    orge: 1100,
    avoine: 1000,
    lin_chanvre: 500,
    vignes: 1950,
    houblon: 425,
    pomme_de_terre: 8250,
    legumes_fruits: 3300,
    betail: {
        viande_boeuf: 50,
        cuir: 2
    },
    moutons: {
        viande_mouton: 20,
        laine: 10.5
    },
    porcins: {
        viande_porc: 60,
        suif: 15
    },
    olives: 1500,
    bois: 1.5
};

const YIELDS_NAVAL = {
    poisson_par_bateau_kg: 8000 // 8 tonnes de poisson par bateau de pêche par an
};


// NOUVEAU BLOC : Prix des nouveaux biens de la métropole (par Kg ou Unité)
// (MODIFIÉ ET CORRIGÉ)
const PRICES_METROPOLE = {
    // Agricoles (Kg)
    ble: 0.045,
    orge: 0.035,
    avoine: 0.03,
    lin_chanvre: 0.80,
    vin: 0.09, // Vignes -> Vin
    houblon: 0.55,
    pomme_de_terre: 0.025,
    legumes_fruits: 0.02,
    viande_boeuf: 0.18,
    viande_mouton: 0.16,
    viande_porc: 0.15,
    cuir: 3.50,
    laine: 2.60, 
    suif: 0.40,
    olives: 0.065,
    huile_olive: 0.30,
    bois: 3.55, // (m³)
    poisson: 0.10,

    // Miniers (Tonne ou Quintal)
    fer: 700, // (T)
    cuivre: 900, // (Q)
    charbon: 290.5, // (T)
    sel: 20, // (T)

    // Industriels (Unité ou Kg)
    fusil: 25,
    canon_terre: 3000,
    canon_mer: 4000,
    poudre: 1500, // (T)
    habits: 14.5, // (Kg/Set)
    verre_cristal: 45.0, // (Pièces)
    biere: 0.05, // (L)
    voiles: 250.0, // (Kg)
    cordages: 4.0, // (Kg)
    papier: 0.5, // (Kg)
    savon: 0.3, // (Kg)
    meubles: 80, // (Unité)
    journaux: 0.1, // (Unité)
    livres: 2.0, // (Unité)
    machines_agri: 5000, // (Unité)
    moteurs_vapeur: 15000, // (Unité)
    outils_agricoles: 100, // (Set)
    tissu_soie: 42.0, // (Kg)
    porcelaine: 80.0, // (Unité)
    horloges: 80.0, // (Unité)
    bijoux: 200.0, // (Unité)
    art: 1000.0 // (Unité)
};

// NOUVEAU : Bonus de rendement pour les machines
const AGRICULTURE_MACHINE_BONUS = {
    batteuse: 0.1 // +0.1 kg/ha par machine déployée
};

// NOUVEAU BLOC : Taux de consommation
// (MODIFIÉ ET CORRIGÉ)
const CONSUMPTION_RATES = {
    food_per_capita: 200, // 200 unités de nourriture / an / personne
    // Valeur nutritive (combien 1kg de ce produit remplit la jauge de 200)
    food_value: {
        ble: 1.0,
        orge: 0.9,
        avoine: 0.8,
        pomme_de_terre: 0.8,
        legumes_fruits: 0.3,
        viande_boeuf: 2.0,
        viande_mouton: 1.8,
        viande_porc: 2.2,
        poisson: 1.5
    }
};

// --- (MODIFIÉ : Refonte totale pour intégrer la production de biens finis) ---
const BUILD_DEFINITIONS = {
    navires: {
        "Vaisseau 100+ canons": { nom: "Vaisseau 100+ canons", cout: 2600000, pin: 120, type: "ligne", temps: 3, consommation_construction: { bois: 6500 }, action_speciale: "carener" },
        "Vaisseau 80 canons": { nom: "Vaisseau 80 canons", cout: 1700000, pin: 100, type: "ligne", temps: 3, consommation_construction: { bois: 5000 }, action_speciale: "carener" },
        "Vaisseau 74 canons": { nom: "Vaisseau 74 canons", cout: 1200000, pin: 90, type: "ligne", temps: 2, consommation_construction: { bois: 4500 }, action_speciale: "carener" },
        "Vaisseau 64 canons": { nom: "Vaisseau 64 canons", cout: 1000000, pin: 75, type: "ligne", temps: 2, consommation_construction: { bois: 3800 }, action_speciale: "carener" },
        "Vaisseau 50 canons": { nom: "Vaisseau 50 canons", cout: 900000, pin: 50, type: "ligne", temps: 2, consommation_construction: { bois: 3000 }, action_speciale: "carener" },
        "Frégate 36 canons": { nom: "Frégate 36 canons", cout: 550000, pin: 40, type: "escorte", temps: 1, consommation_construction: { bois: 1800 }, action_speciale: "course_etat" },
        "Frégate 28 canons": { nom: "Frégate 28 canons", cout: 350000, pin: 30, type: "escorte", temps: 1, consommation_construction: { bois: 1200 }, action_speciale: "course_etat" },
        "Corvette/Brick 24c": { nom: "Corvette/Brick 24c", cout: 250000, pin: 15, type: "escorte", temps: 1, consommation_construction: { bois: 700 }, action_speciale: "course_etat" },
        "Shooner 12c": { nom: "Shooner 12c", cout: 100000, pin: 5, type: "côtier", temps: 1, consommation_construction: { bois: 200 }, action_speciale: "course_etat" }
    },
    manufactures_armes: {
        "manufacture_fusils_p": { nom: "Fonderie Fusils (P)", cout: 250000, rbn_bonus: 75000, prod_fusil: 5000, ouvriers: 100, consommation_construction: { bois: 200, fer: 100 }, consommation_annuelle: { fer: 50, bois: 20, charbon: 20 }, upgrade_vers: "manufacture_fusils_m", cout_upgrade: 600000, consommation_upgrade: { bois: 400, fer: 200 }, admin_requis: 25, salaire_ajout: 12000, efficacite_bonus: 0.1 },
        "manufacture_fusils_m": { nom: "Fonderie Fusils (M)", cout: 850000, rbn_bonus: 255000, prod_fusil: 15000, ouvriers: 300, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 150, bois: 60, charbon: 60 }, upgrade_vers: "manufacture_fusils_g", cout_upgrade: 1950000, consommation_upgrade: { bois: 800, fer: 400 }, admin_requis: 50, salaire_ajout: 25000, efficacite_bonus: 0.1 },
        "manufacture_fusils_g": { nom: "Fonderie Fusils (G)", cout: 2800000, rbn_bonus: 800000, prod_fusil: 50000, ouvriers: 800, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 500, bois: 200, charbon: 200 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 100, salaire_ajout: 50000, efficacite_bonus: 0.1 },
        "fonderie_canons_terre_p": { nom: "Fonderie Canons Terre (P)", cout: 300000, rbn_bonus: 100000, prod_canon_terre: 50, ouvriers: 150, consommation_construction: { bois: 300, fer: 150 }, consommation_annuelle: { fer: 200, bois: 100, charbon: 100 }, upgrade_vers: "fonderie_canons_terre_m", cout_upgrade: 700000, consommation_upgrade: { bois: 600, fer: 300 }, admin_requis: 30, salaire_ajout: 15000, efficacite_bonus: 0.1 },
        "fonderie_canons_terre_m": { nom: "Fonderie Canons Terre (M)", cout: 1000000, rbn_bonus: 390000, prod_canon_terre: 200, ouvriers: 400, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 800, bois: 400, charbon: 400 }, upgrade_vers: "fonderie_canons_terre_g", cout_upgrade: 2500000, consommation_upgrade: { bois: 1200, fer: 600 }, admin_requis: 60, salaire_ajout: 30000, efficacite_bonus: 0.1 },
        "fonderie_canons_terre_g": { nom: "Fonderie Canons Terre (G)", cout: 3500000, rbn_bonus: 1000000, prod_canon_terre: 700, ouvriers: 1000, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 2800, bois: 1400, charbon: 1400 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 120, salaire_ajout: 60000, efficacite_bonus: 0.1 },
        "fonderie_canons_mer_p": { nom: "Fonderie Canons Mer (P)", cout: 400000, rbn_bonus: 150000, prod_canon_mer: 50, ouvriers: 150, consommation_construction: { bois: 300, fer: 200 }, consommation_annuelle: { fer: 250, bois: 100, charbon: 100 }, upgrade_vers: "fonderie_canons_mer_m", cout_upgrade: 800000, consommation_upgrade: { bois: 600, fer: 400 }, admin_requis: 30, salaire_ajout: 15000, efficacite_bonus: 0.1 },
        "fonderie_canons_mer_m": { nom: "Fonderie Canons Mer (M)", cout: 1200000, rbn_bonus: 500000, prod_canon_mer: 200, ouvriers: 400, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 1000, bois: 400, charbon: 400 }, upgrade_vers: "fonderie_canons_mer_g", cout_upgrade: 2800000, consommation_upgrade: { bois: 1200, fer: 800 }, admin_requis: 60, salaire_ajout: 30000, efficacite_bonus: 0.1 },
        "fonderie_canons_mer_g": { nom: "Fonderie Canons Mer (G)", cout: 4000000, rbn_bonus: 1400000, prod_canon_mer: 700, ouvriers: 1000, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { fer: 3500, bois: 1400, charbon: 1400 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 120, salaire_ajout: 60000, efficacite_bonus: 0.1 },
        "manufacture_poudre_p": { nom: "Poudrerie (P)", cout: 350000, rbn_bonus: 100000, prod_poudre: 1000, ouvriers: 50, consommation_construction: { bois: 200 }, consommation_annuelle: { charbon: 500, sel: 200 }, upgrade_vers: "manufacture_poudre_m", cout_upgrade: 800000, consommation_upgrade: { bois: 400 }, admin_requis: 20, salaire_ajout: 10000, efficacite_bonus: 0.1 },
        "manufacture_poudre_m": { nom: "Poudrerie (M)", cout: 1150000, rbn_bonus: 600000, prod_poudre: 4000, ouvriers: 150, consommation_construction: { bois: 0 }, consommation_annuelle: { charbon: 2000, sel: 800 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 40, salaire_ajout: 25000, efficacite_bonus: 0.1 }
    },
    manufactures_civiles: {
        "textile_p": { nom: "Manufacture Textile (P)", cout: 150000, rbn_bonus: 70000, prod_habits: 28000, ouvriers: 100, consommation_construction: { bois: 150 }, consommation_annuelle: { laine: 200, lin_chanvre: 100 }, upgrade_vers: "textile_m", cout_upgrade: 400000, consommation_upgrade: { bois: 300 }, admin_requis: 10, salaire_ajout: 5000, efficacite_bonus: 0.05 },
        "textile_m": { nom: "Manufacture Textile (M)", cout: 550000, rbn_bonus: 200000, prod_habits: 96000, ouvriers: 300, consommation_construction: { bois: 0 }, consommation_annuelle: { laine: 800, lin_chanvre: 400 }, upgrade_vers: "textile_g", cout_upgrade: 1000000, consommation_upgrade: { bois: 600 }, admin_requis: 25, salaire_ajout: 12000, efficacite_bonus: 0.05 },
        "textile_g": { nom: "Manufacture Textile (G)", cout: 1550000, rbn_bonus: 600000, prod_habits: 340000, ouvriers: 800, consommation_construction: { bois: 0 }, consommation_annuelle: { laine: 3000, lin_chanvre: 1500 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 50, salaire_ajout: 25000, efficacite_bonus: 0.05 },
        "verrerie_p": { nom: "Verrerie (P)", cout: 200000, rbn_bonus: 80000, prod_verre_cristal: 11250, ouvriers: 120, consommation_construction: { bois: 200 }, consommation_annuelle: { bois: 100, charbon: 50, sel: 50 }, upgrade_vers: "verrerie_m", cout_upgrade: 500000, consommation_upgrade: { bois: 400 }, admin_requis: 15, salaire_ajout: 7000, efficacite_bonus: 0.05 },
        "verrerie_m": { nom: "Verrerie (M)", cout: 700000, rbn_bonus: 240000, prod_verre_cristal: 46250, ouvriers: 350, consommation_construction: { bois: 0 }, consommation_annuelle: { bois: 400, charbon: 200, sel: 200 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 35, salaire_ajout: 18000, efficacite_bonus: 0.05 },
        "imprimerie_p": { nom: "Imprimerie (P)", cout: 100000, rbn_bonus: 25000, prod_journaux: 230000, prod_livres: 23000, ouvriers: 50, consommation_construction: { bois: 50 }, consommation_annuelle: { papier: 50 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 5, salaire_ajout: 2500, efficacite_bonus: 0.05 },
        "brasserie_p": { nom: "Brasserie (P)", cout: 120000, rbn_bonus: 40000, prod_biere: 460000, ouvriers: 80, consommation_construction: { bois: 100 }, consommation_annuelle: { orge: 500, houblon: 100 }, upgrade_vers: "brasserie_m", cout_upgrade: 300000, consommation_upgrade: { bois: 200 }, admin_requis: 10, salaire_ajout: 4000, efficacite_bonus: 0.05 },
        "brasserie_m": { nom: "Brasserie (M)", cout: 420000, rbn_bonus: 95000, prod_biere: 1800000, ouvriers: 250, consommation_construction: { bois: 0 }, consommation_annuelle: { orge: 2000, houblon: 400 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 25, salaire_ajout: 12000, efficacite_bonus: 0.05 },
        "voilerie_p": { nom: "Voilerie (P)", cout: 200000, rbn_bonus: 70000, prod_voiles: 10000, ouvriers: 100, consommation_construction: { bois: 100 }, consommation_annuelle: { lin_chanvre: 400, laine: 100 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 15, salaire_ajout: 6000, efficacite_bonus: 0.05 },
        "corderie_p": { nom: "Corderie (P)", cout: 180000, rbn_bonus: 75000, prod_cordages: 15000, ouvriers: 80, consommation_construction: { bois: 100 }, consommation_annuelle: { lin_chanvre: 500 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 15, salaire_ajout: 5000, efficacite_bonus: 0.05 },
        "manufacture_papier_p": { nom: "Manufacture de Papier (P)", cout: 220000, rbn_bonus: 80000, prod_papier: 100000, ouvriers: 90, consommation_construction: { bois: 300 }, consommation_annuelle: { bois: 500 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 20, salaire_ajout: 8000, efficacite_bonus: 0.05 },
        "savonnerie_p": { nom: "Savonnerie (P)", cout: 130000, rbn_bonus: 40000, prod_savon: 50000, ouvriers: 60, consommation_construction: { bois: 100 }, consommation_annuelle: { suif: 100, huile_olive: 50, sel: 100 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 10, salaire_ajout: 3000, efficacite_bonus: 0.05 },
        "huilerie_p": { nom: "Pressoir à Huile (P)", cout: 90000, rbn_bonus: 20000, prod_huile_olive: 225000, ouvriers: 40, consommation_construction: { bois: 150 }, consommation_annuelle: { olives: 1500 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 5, salaire_ajout: 2000, efficacite_bonus: 0.05 },
        "manufacture_meubles_p": { nom: "Manufacture de Meubles (P)", cout: 300000, rbn_bonus: 90000, prod_meubles: 5000, ouvriers: 150, consommation_construction: { bois: 200 }, consommation_annuelle: { bois: 1000, laine: 50, cuir: 20 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 20, salaire_ajout: 10000, efficacite_bonus: 0.05 },
        "haras_royal": { 
            nom: "Haras Royal", 
            cout: 400000, 
            rbn_bonus: 100000, 
            prod_chevaux: 2000,
            entretien_annuel: 40000,
            ouvriers: 30,
            consommation_construction: { bois: 500 }, 
            consommation_annuelle: { avoine: 5000 },
            upgrade_vers: null, 
            cout_upgrade: 0, 
            admin_requis: 10, 
            salaire_ajout: 8000, 
            efficacite_bonus: 0 
        }
    },
    infrastructures_navales: {
        "arsenal_p": { nom: "Arsenal (P)", cout: 900000, rbn_bonus: 450000, cales_radoub: 1, entretien: 90000, consommation_construction: { bois: 1000, fer: 100 }, consommation_annuelle: { voiles: 500, cordages: 500 }, admin_requis: 50, salaire_ajout: 20000, efficacite_bonus: 0 },
        "arsenal_g": { nom: "Arsenal (G)", cout: 6000000, rbn_bonus: 3000000, cales_radoub: 3, entretien: 600000, consommation_construction: { bois: 5000, fer: 500 }, consommation_annuelle: { voiles: 2000, cordages: 2000 }, admin_requis: 200, salaire_ajout: 100000, efficacite_bonus: 0 },
        "batiment_marine_admin": { nom: "Administration Navale", cout: 150000, rbn_bonus: 70000, efficacite: 1, entretien: 10000, consommation_construction: { bois: 100 }, admin_requis: 20, salaire_ajout: 20000, efficacite_bonus: 0.1 }
    },
    infrastructures_commerciales: {
        "nouveaux_quais": { nom: "Nouveaux Quais", cout: 1000000, rbn_bonus: 300000, bonus_construction_marchands: 0.05, bonus_commerce: 0.03, consommation_construction: { bois: 1200 }, admin_requis: 30, salaire_ajout: 12000, efficacite_bonus: 0.025 },
        "chantier_naval_civil_p": { 
            nom: "Chantier Naval Civil (P)", 
            cout: 750000, 
            rbn_bonus: 280000,
            consommation_construction: { bois: 800 }, 
            admin_requis: 30, 
            salaire_ajout: 15000, 
            efficacite_bonus: 0.05,
            bonus_croissance_marchands: 0.0025
        },
        "chantier_naval_civil_m": { 
            nom: "Chantier Naval Civil (M)", 
            cout: 2200000, 
            rbn_bonus: 940000, 
            consommation_construction: { bois: 1800 }, 
            admin_requis: 50, 
            salaire_ajout: 15000, 
            efficacite_bonus: 0.05,
            bonus_croissance_marchands: 0.0065
        },
        "chambre_de_commerce_p": { 
            nom: "Chambre de Commerce (P)", 
            cout: 400000, 
            rbn_bonus: 180000,
            consommation_construction: { bois: 200 }, 
            admin_requis: 40, 
            salaire_ajout: 15000, 
            efficacite_bonus: 0.05,
            bonus_mouillage_pct: 0.01
        },
        "bourse_de_commerce_p": { 
            nom: "Bourse de Commerce (P)", 
            cout: 8000000, 
            rbn_bonus: 5000000,
            consommation_construction: { bois: 500 }, 
            admin_requis: 180, 
            salaire_ajout: 80000, 
            efficacite_bonus: 0.2,
            bonus_interet_dette: -0.0015
        },
        "entrepot_colonial": { 
            nom: "Entrepôt Colonial (en métropole)",
            cout: 200000, 
            rbn_bonus: 80000, 
            stockage: 20000, 
            bonus_commerce: 0.01, 
            consommation_construction: { bois: 300 }, 
            admin_requis: 10, 
            salaire_ajout: 4000, 
            efficacite_bonus: 0.025 
        },
        "maison_assurance_maritime": {
            nom: "Maison de l'Assurance Maritime",
            cout: 1200000,
            rbn_bonus: 700000,
            consommation_construction: { bois: 300 },
            admin_requis: 40,
            salaire_ajout: 30000,
            efficacite_bonus: 0.1,
            bonus_croissance_marchands: 0.0025,
            effet_cache: "reduit_pertes_tempete_10_pct"
        },
        "entrepot_royal_douanes": {
            nom: "Entrepôt Royal des Douanes",
            cout: 900000,
            rbn_bonus: 400000,
            consommation_construction: { bois: 800 },
            admin_requis: 50,
            salaire_ajout: 35000,
            efficacite_bonus: 0,
            bonus_douane_pct: 0.0015,
            bonus_mouillage_pct: 0.001
        },
        "comptoir_des_changes": {
            nom: "Comptoir des Changes (Upgrade Banque)",
            cout: 4000000,
            rbn_bonus: 2200000,
            consommation_construction: { bois: 200 },
            admin_requis: 100,
            salaire_ajout: 80000,
            efficacite_bonus: 0.1,
            bonus_revenu_douane_pct: 0.05
        }
    },
    forteresses: {
        "fort_colonial": { nom: "Fort Colonial", cout: 300000, rbn_bonus: 20000, entretien: 10000, garnison: 200, consommation_construction: { bois: 400 }, admin_requis: 1, salaire_ajout: 0, efficacite_bonus: 0 },
        "forteresse_4": { nom: "Forteresse (4e Classe)", cout: 1000000, rbn_bonus: 70000, entretien: 50000, garnison: 1000, consommation_construction: { bois: 800 }, admin_requis: 3, salaire_ajout: 0, efficacite_bonus: 0 },
        "forteresse_3": { nom: "Forteresse (3e Classe)", cout: 2500000, rbn_bonus: 150000, entretien: 150000, garnison: 2000, consommation_construction: { bois: 2000 }, admin_requis: 5, salaire_ajout: 0, efficacite_bonus: 0 },
        "forteresse_2": { nom: "Forteresse (2e Classe)", cout: 5000000, rbn_bonus: 400000, entretien: 300000, garnison: 4000, consommation_construction: { bois: 4000 }, admin_requis: 8, salaire_ajout: 0, efficacite_bonus: 0 },
        "forteresse_1": { nom: "Forteresse (1ère Classe)", cout: 10000000, rbn_bonus: 2000000, entretien: 700000, garnison: 8000, consommation_construction: { bois: 8000 }, admin_requis: 10, salaire_ajout: 0, efficacite_bonus: 0 }
    },
    batiments_speciaux: {
        "universite": { nom: "Université", cout: 500000, rbn_bonus: 190000, consommation_construction: { bois: 1000 }, admin_requis: 100, salaire_ajout: 60000, efficacite_bonus: 1.0, bonus_formation: 0.005 },
        "lycee": { nom: "Lycée", cout: 100000, rbn_bonus: 10000, consommation_construction: { bois: 300 }, admin_requis: 50, salaire_ajout: 25000, efficacite_bonus: 0.5 },
        "ecole_primaire": { nom: "École Primaire (x10)", cout: 100000, rbn_bonus: 10000, consommation_construction: { bois: 50 }, admin_requis: 10, salaire_ajout: 4000, efficacite_bonus: 0.05 },
        "ecole_militaire": { nom: "École Militaire", cout: 1000000, rbn_bonus: 90000, consommation_construction: { bois: 700 }, admin_requis: 80, salaire_ajout: 40000, efficacite_bonus: 0 },
        "ecole_navale": { nom: "École Navale", cout: 1800000, rbn_bonus: 140000, consommation_construction: { bois: 800 }, admin_requis: 80, salaire_ajout: 45000, efficacite_bonus: 0 },
        "col_village": { nom: "Hameau -> Village", cout: 100000, rbn_bonus: 8000, consommation_construction: { bois: 100 }, admin_requis: 1, salaire_ajout: 0, efficacite_bonus: 0, climat_requis: ["any"] },
        "col_ville": { nom: "Village -> Ville", cout: 1000000, rbn_bonus: 40000, consommation_construction: { bois: 1000 }, admin_requis: 10, salaire_ajout: 0, efficacite_bonus: 0, climat_requis: ["any"] },
        "col_caserne_milice": { nom: "Caserne de Milice", cout: 200000, rbn_bonus: 10000, consommation_construction: { bois: 200, fer: 50 }, admin_requis: 2, salaire_ajout: 1000, bonus_production_ville_pct: 0.15, bonus_milice_max: 500, climat_requis: ["any"] },
        "col_cour_justice": { nom: "Cour de Justice Coloniale", cout: 300000, rbn_bonus: 20000, consommation_construction: { bois: 150 }, admin_requis: 5, salaire_ajout: 4000, bonus_stabilite: 0.5, bonus_croissance_colons_pct: 0.05, climat_requis: ["any"] },
        "col_hopital": { nom: "Hôpital Colonial", cout: 250000, rbn_bonus: 10000, consommation_construction: { bois: 150 }, admin_requis: 4, salaire_ajout: 3000, bonus_croissance_colons_pct: 0.05, climat_requis: ["any"] },
        "col_ecole": { nom: "École Coloniale", cout: 150000, rbn_bonus: 5000, consommation_construction: { bois: 100 }, admin_requis: 3, salaire_ajout: 2000, efficacite_bonus: 0.1, bonus_croissance_colons_pct: 0.025, climat_requis: ["any"] },
        "col_eglise": { nom: "Église Paroissiale / Temple", cout: 200000, rbn_bonus: 5000, consommation_construction: { bois: 150 }, admin_requis: 1, salaire_ajout: 500, bonus_stabilite: 1.0, bonus_croissance_colons_pct: 0.025, climat_requis: ["any"] },
        "col_raffinerie_sucre": { nom: "Raffinerie de Sucre", cout: 350000, rbn_bonus: 0, consommation_construction: { bois: 200 }, admin_requis: 5, salaire_ajout: 2000, bonus_valeur_rnb_sucre_pct: 1.0, climat_requis: ["Tropical"] },
        "col_distillerie_rhum": { nom: "Distillerie de Rhum", cout: 500000, rbn_bonus: 0, consommation_construction: { bois: 300 }, admin_requis: 3, salaire_ajout: 1500, bonus_valeur_rnb_sucre_pct: 0.50, bonus_stabilite: 0.5, climat_requis: ["Tropical"], requis: "col_raffinerie_sucre" },
        "col_marche_esclaves": { nom: "Marché aux Esclaves", cout: 100000, rbn_bonus: 0, consommation_construction: { bois: 50 }, admin_requis: 1, salaire_ajout: 500, bonus_production_ville_pct: 0.05, malus_stabilite: 1.0, bonus_cout_esclave_pct: 0.10, climat_requis: ["Tropical", "Subtropical"] },
        "col_presse_coton": { nom: "Pressoir à Coton (Cotton Gin)", cout: 400000, rbn_bonus: 0, consommation_construction: { bois: 150, fer: 50 }, admin_requis: 10, salaire_ajout: 3000, bonus_valeur_rnb_coton_pct: 1.0, climat_requis: ["Subtropical"] },
        "col_sechoir_tabac": { nom: "Séchoir à Tabac", cout: 200000, rbn_bonus: 0, consommation_construction: { bois: 200 }, admin_requis: 2, salaire_ajout: 1000, bonus_valeur_rnb_tabac_pct: 0.25, climat_requis: ["Subtropical"] },
        "col_ranch_bovins": { nom: "Établir un Ranch (Bovins)", cout: 300000, rbn_bonus: 100000, consommation_construction: { bois: 50 }, admin_requis: 2, salaire_ajout: 1000, production_cuir_base: 5000, climat_requis: ["Subtropical", "Tempéré"] },
        "col_tannerie": { nom: "Tannerie Coloniale", cout: 250000, rbn_bonus: 0, consommation_construction: { bois: 100 }, admin_requis: 3, salaire_ajout: 1500, bonus_valeur_rnb_cuir_pct: 1.0, climat_requis: ["Subtropical", "Tempéré"], requis: "col_ranch_bovins" },
        "col_mine_or": { nom: "Mine d'Or (Niveau 1)", cout: 2000000, rbn_bonus: 500000, consommation_construction: { bois: 500, fer: 100 }, admin_requis: 15, salaire_ajout: 10000, production_or_kg: 5, malus_stabilite: 0.5, climat_requis: ["Subtropical"] },
        "col_mine_argent": { nom: "Mine d'Argent (Niveau 1)", cout: 1000000, rbn_bonus: 50000, consommation_construction: { bois: 400, fer: 80 }, admin_requis: 10, salaire_ajout: 8000, production_argent_kg: 5, malus_stabilite: 0.2, climat_requis: ["Subtropical"] },
        "col_poste_traite": { nom: "Poste de Traite Indigène", cout: 150000, rbn_bonus: 0, consommation_construction: { bois: 200 }, admin_requis: 1, salaire_ajout: 500, bonus_production_ville_pct: 0.05, bonus_production_fourrure_pct: 1.0, climat_requis: ["Tempéré"] },
        "col_chantier_peche": { nom: "Chantier de Pêche (Hauturier)", cout: 400000, rbn_bonus: 250000, consommation_construction: { bois: 300 }, admin_requis: 2, salaire_ajout: 1000, bonus_reserve_marins_pct: 0.0025, climat_requis: ["Tempéré"] },
        "col_scierie": { nom: "Scierie (Bois Exotiques)", cout: 300000, rbn_bonus: 150000, consommation_construction: { bois: 100, fer: 20 }, admin_requis: 3, salaire_ajout: 1500, climat_requis: ["Tropical"] },
        "col_base_navale": { nom: "Base Navale Avancée", cout: 3000000, rbn_bonus: 100000, consommation_construction: { bois: 1500, fer: 200 }, admin_requis: 25, salaire_ajout: 20000, bonus_qualite_marine: 5, cout_entretien_marine: 100000, climat_requis: ["any"] },
        "hopital_civil": { nom: "Hôpital Civil", cout: 750000, rbn_bonus: 100000, bonus_croissance_pop: 0.0005, admin_requis: 100, salaire_ajout: 50000, efficacite_bonus: 0.1, cout_entretien_fixe: 40000, consommation_construction: { bois: 500 } },
        "hopital_militaire": { nom: "Hôpital Militaire", cout: 1000000, rbn_bonus: 250000, admin_requis: 50, salaire_ajout: 25000, efficacite_bonus: 0, cout_entretien_fixe: 75000, consommation_construction: { bois: 700 } },
        "bureau_censure_royale": {
            nom: "Bureau de la Censure Royale",
            cout: 300000,
            rbn_bonus: 0,
            consommation_construction: { bois: 100 },
            admin_requis: 30,
            salaire_ajout: 15000,
            efficacite_bonus: 0,
            bonus_stabilite_annuel: 2,
            malus_croissance_pop: 0.001
        },
        "institut_statistique": {
            nom: "Institut National de Statistique",
            cout: 1200000,
            rbn_bonus: 0,
            consommation_construction: { bois: 300 },
            admin_requis: 80,
            salaire_ajout: 50000,
            efficacite_bonus: 0.5,
            bonus_revenus_fiscaux_pct: 0.01
        },
        "hotel_des_monnaies": {
            nom: "Hôtel des Monnaies",
            cout: 700000,
            rbn_bonus: 500000,
            consommation_construction: { bois: 200, cuivre: 50 },
            admin_requis: 40,
            salaire_ajout: 20000,
            efficacite_bonus: 0.1,
            debloque_action: "devaluation_sans_penalite"
        },
        "caserne_veterans": { 
            nom: "Caserne de Vétérans (Les Invalides)",
            cout: 800000,
            rbn_bonus: 0,
            consommation_construction: { bois: 600 },
            admin_requis: 30,
            salaire_ajout: 10000,
            efficacite_bonus: 0,
            bonus_moral_armee: 2,
            bonus_stabilite: 1,
            bonus_cout_pensions_pct: 0.05
        }
    },
    manufactures_avancees: {
        "moteur_vapeur_p": { 
            nom: "Atelier Moteur (Type Newcomen)", 
            cout: 2500000, 
            rbn_bonus: 1700000,
            prod_machines_agri: 5,
            prod_moteurs_vapeur: 1,
            prod_outils_agricoles: 0,
            ouvriers: 480, 
            consommation_construction: { bois: 1000, fer: 500 }, 
            consommation_annuelle: { fer: 500, charbon: 1000 },
            admin_requis: 150, 
            salaire_ajout: 90000, 
            efficacite_bonus: 0.2 
        },
        "atelier_outils_p": {
            nom: "Atelier d'Outils Agricoles",
            cout: 250000,
            rbn_bonus: 80000,
            prod_outils_agricoles: 50,
            prod_machines_agri: 0,
            prod_moteurs_vapeur: 0,
            ouvriers: 100,
            consommation_construction: { bois: 200, fer: 100 },
            consommation_annuelle: { fer: 100, bois: 50, charbon: 20 },
            admin_requis: 10,
            salaire_ajout: 10000,
            efficacite_bonus: 0.1
        }
    },
    manufactures_luxe: {
        "soierie_p": {
            nom: "Manufacture de Soie",
            cout: 1500000,
            rbn_bonus: 300000, 
            prod_tissu_soie: 50000, 
            ouvriers: 500,
            consommation_construction: { bois: 400 },
            consommation_annuelle: { bois: 50 },
            admin_requis: 80,
            salaire_ajout: 60000,
            efficacite_bonus: 0.1
        },
        "porcelaine_p": {
            nom: "Manufacture de Porcelaine",
            cout: 1500000,
            rbn_bonus: 400000, 
            prod_porcelaine: 73000,
            ouvriers: 300,
            consommation_construction: { bois: 600 },
            consommation_annuelle: { bois: 200, charbon: 100 },
            admin_requis: 100,
            salaire_ajout: 70000,
            efficacite_bonus: 0.1
        },
        "horlogerie_p": {
            nom: "Horlogerie",
            cout: 2000000,
            rbn_bonus: 500000,
            prod_horloges: 2000,
            ouvriers: 200,
            consommation_construction: { bois: 100, cuivre: 50 },
            consommation_annuelle: { cuivre: 100, fer: 20 },
            admin_requis: 100,
            salaire_ajout: 80000,
            efficacite_bonus: 0.1
        },
        "orfevrerie_p": {
            nom: "Atelier d'Orfèvrerie",
            cout: 1000000,
            rbn_bonus: 200000,
            prod_bijoux: 2000,
            ouvriers: 100,
            consommation_construction: { bois: 100 },
            consommation_annuelle: {},
            admin_requis: 50,
            salaire_ajout: 50000,
            efficacite_bonus: 0.1
        },
        "atelier_art_p": {
            nom: "Atelier d'Arts",
            cout: 3000000,
            rbn_bonus: 100000,
            prod_art: 500,
            ouvriers: 50,
            consommation_construction: { bois: 100 },
            consommation_annuelle: { bois: 50, lin_chanvre: 10 },
            admin_requis: 20,
            salaire_ajout: 30000,
            efficacite_bonus: 0.1
        }
    },
    banques: {
        "banque_nationale_p": {
            nom: "Banque Privée Majeure",
            cout: 6000000,
            rbn_bonus: 4500000, 
            ouvriers: 150,
            consommation_construction: { bois: 500 },
            consommation_annuelle: {},
            admin_requis: 200, 
            salaire_ajout: 120000, 
            efficacite_bonus: 0.5,
            bonus_interet_dette: -0.002,
            palier_emprunt: 1
        }
    }, 
    mines: {
        "mine_fer_p": { nom: "Mine de Fer (P)", cout: 500000, rbn_bonus: 100000, prod_fer: 1000, ouvriers: 300, consommation_construction: { bois: 500, fer: 50 }, consommation_annuelle: { bois: 100, charbon: 50 }, upgrade_vers: "mine_fer_m", cout_upgrade: 1500000, consommation_upgrade: { bois: 1000, fer: 100 }, admin_requis: 40, salaire_ajout: 18000, efficacite_bonus: 0.1 },
        "mine_fer_m": { nom: "Mine de Fer (M)", cout: 2000000, rbn_bonus: 490000, prod_fer: 5000, ouvriers: 1000, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { bois: 400, charbon: 200 }, upgrade_vers: "mine_fer_g", cout_upgrade: 4000000, consommation_upgrade: { bois: 2000, fer: 200 }, admin_requis: 100, salaire_ajout: 50000, efficacite_bonus: 0.1 },
        "mine_fer_g": { nom: "Mine de Fer (G)", cout: 6000000, rbn_bonus: 2400000, prod_fer: 15000, ouvriers: 2500, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { bois: 1000, charbon: 500 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 250, salaire_ajout: 120000, efficacite_bonus: 0.1 },
        "mine_cuivre_p": { nom: "Mine de Cuivre (P)", cout: 750000, rbn_bonus: 280000, prod_cuivre: 500, ouvriers: 400, consommation_construction: { bois: 600, fer: 50 }, consommation_annuelle: { bois: 150, charbon: 50 }, upgrade_vers: "mine_cuivre_m", cout_upgrade: 2000000, consommation_upgrade: { bois: 1200, fer: 100 }, admin_requis: 50, salaire_ajout: 22000, efficacite_bonus: 0.1 },
        "mine_cuivre_m": { nom: "Mine de Cuivre (M)", cout: 2750000, rbn_bonus: 800000, prod_cuivre: 2000, ouvriers: 1200, consommation_construction: { bois: 0, fer: 0 }, consommation_annuelle: { bois: 500, charbon: 200 }, upgrade_vers: null, cout_upgrade: 0, admin_requis: 120, salaire_ajout: 60000, efficacite_bonus: 0.1 },
        "mine_charbon_p": { 
            nom: "Mine de Charbon (P)", 
            cout: 400000, 
            rbn_bonus: 100000, 
            prod_charbon: 2000, 
            ouvriers: 250, 
            consommation_construction: { bois: 400 }, 
            consommation_annuelle: { bois: 200 }, 
            upgrade_vers: "mine_charbon_m", 
            cout_upgrade: 1200000, 
            consommation_upgrade: { bois: 800 }, 
            admin_requis: 30, 
            salaire_ajout: 15000, 
            efficacite_bonus: 0.1 
        },
        "mine_charbon_m": { 
            nom: "Mine de Charbon (M)", 
            cout: 1600000, 
            rbn_bonus: 550000, 
            prod_charbon: 8000, 
            ouvriers: 800, 
            consommation_construction: { bois: 0 }, 
            consommation_annuelle: { bois: 600 }, 
            upgrade_vers: "mine_charbon_g", 
            cout_upgrade: 3500000, 
            consommation_upgrade: { bois: 1500 }, 
            admin_requis: 80, 
            salaire_ajout: 45000, 
            efficacite_bonus: 0.1 
        },
        "mine_charbon_g": { 
            nom: "Mine de Charbon (G)", 
            cout: 5100000, 
            rbn_bonus: 2700000, 
            prod_charbon: 25000, 
            ouvriers: 2000, 
            consommation_construction: { bois: 0 }, 
            consommation_annuelle: { bois: 1500 }, 
            upgrade_vers: null, 
            cout_upgrade: 0, 
            admin_requis: 200, 
            salaire_ajout: 110000, 
            efficacite_bonus: 0.1 
        },
        "saline_p": {
            nom: "Saline (P)",
            cout: 300000,
            rbn_bonus: 85000,
            prod_sel: 20000,
            ouvriers: 150,
            consommation_construction: { bois: 300 },
            consommation_annuelle: { bois: 100, charbon: 100 },
            upgrade_vers: null,
            cout_upgrade: 0,
            admin_requis: 15,
            salaire_ajout: 8000,
            efficacite_bonus: 0.05
        }
    },
    projets_urbains: {
        "hopital": { nom: "Hôpital", cout: 750000, rbn_bonus: 70000, bonus_croissance_pop: 0.0005, admin_requis: 100, salaire_ajout: 50000, efficacite_bonus: 0.1 },
        "hotel_de_ville": { nom: "Hôtel de Ville", cout: 500000, rbn_bonus: 70000, bonus_stabilite: 0.5, admin_requis: 80, salaire_ajout: 40000, efficacite_bonus: 0.2 },
        "marches": { nom: "Marchés Pavés", cout: 1000000, rbn_bonus: 240000, admin_requis: 30, salaire_ajout: 10000, efficacite_bonus: 0.05 },
        "paver_rues": { nom: "Pavage des Rues", cout: 300000, rbn_bonus: 70000, bonus_efficacite: 0.2, admin_requis: 10, salaire_ajout: 2000, efficacite_bonus: 0.05 }, 
        "palais_de_justice": {
            nom: "Palais de Justice",
            cout: 600000,
            rbn_bonus: 50000,
            admin_requis: 60,
            salaire_ajout: 40000,
            efficacite_bonus: 0.1,
            bonus_stabilite: 0.5
        },
        "halle_aux_marches": {
            nom: "Halle aux Marchés (Upgrade)",
            cout: 1500000,
            rbn_bonus: 200000,
            admin_requis: 20,
            salaire_ajout: 10000,
            efficacite_bonus: 0,
            bonus_vct_pct: 0.005
        },
        "theatre_opera": {
            nom: "Théâtre Royal / Opéra",
            cout: 900000,
            rbn_bonus: 30000,
            admin_requis: 15,
            salaire_ajout: 5000,
            efficacite_bonus: 0,
            bonus_prestige: 1,
            bonus_stabilite: 0.25
        },
        "adduction_eau": {
            nom: "Système d'Adduction d'Eau",
            cout: 500000,
            rbn_bonus: 10000,
            admin_requis: 5,
            salaire_ajout: 1000,
            efficacite_bonus: 0,
            bonus_croissance_pop: 0.0002,
            bonus_stabilite: 0.25
        },
        "academie_arts_sciences": {
            nom: "Académie des Arts et Sciences",
            cout: 700000,
            rbn_bonus: 20000,
            admin_requis: 40,
            salaire_ajout: 20000,
            efficacite_bonus: 0.2,
            bonus_prestige: 2
        },
        "magasin_intendance": {
            nom: "Magasin Général d'Intendance",
            cout: 1500000,
            rbn_bonus: 300000,
            consommation_construction: { bois: 1000 },
            admin_requis: 100,
            salaire_ajout: 40000,
            efficacite_bonus: 0.1,
            effet_cache: "reduit_penalite_logistique_50_pct"
        },
        "bibliotheque_nationale": {
            nom: "Bibliothèque Nationale (Unique)",
            cout: 2500000,
            rbn_bonus: 2000000,
            consommation_construction: { bois: 800 },
            admin_requis: 80,
            salaire_ajout: 50000,
            efficacite_bonus: 1.0,
            bonus_prestige: 5,
            unique: true
        },
        "observatoire_royal": {
            nom: "Observatoire Royal",
            cout: 1500000,
            rbn_bonus: 350000,
            consommation_construction: { bois: 400 },
            admin_requis: 20,
            salaire_ajout: 15000,
            efficacite_bonus: 0,
            bonus_prestige: 1,
            bonus_qualite_marine: 1
        },
        "hospice_orphelinat": {
            nom: "Hospice Général & Orphelinat",
            cout: 400000,
            rbn_bonus: 80000,
            consommation_construction: { bois: 300 },
            admin_requis: 30,
            salaire_ajout: 10000,
            efficacite_bonus: 0,
            bonus_croissance_pop: 0.0005,
            bonus_cout_pensions_pct: 0.01
        }
    },
    grands_projets: {
        "pont_pierre": { nom: "Pont en Pierre", cout: 1000000, rbn_bonus: 200000, pi: 500, bonus_vct_pct: 0.01 },
        "canal_navigation": { nom: "Canal de Navigation", cout: 5000000, rbn_bonus: 1000000, pi: 2000, bonus_vct_pct: 0.05 },
        "route_royale": { nom: "Route Royale (100km)", cout: 500000, rbn_bonus: 70000, pi: 200, bonus_efficacite: 0.1 }
    }
};

// DÉFINITIONS D'UNITÉS (COÛTS DE BASE POUR LE RECRUTEMENT DYNAMIQUE)
const RECRUIT_COSTS_PER_SOLDIER = {
    Infanterie: 25,
    Cavalerie: 200,
    Artillerie: 150, // L'artillerie est chère en équipement
    Garde: 200, 
    Génie: 100
};

// --- (MODIFIÉ : Ajout du Génie (Point 9)) ---
const RECRUIT_DEFINITIONS = {
    // Infanterie
    "Infanterie de Ligne": { type: "Infanterie", cout_mod: 1.0, officiers_mod: 1.0 },
    "Infanterie Légère": { type: "Infanterie", cout_mod: 0.9, officiers_mod: 1.0 },
    "Grenadiers": { type: "Infanterie", cout_mod: 1.3, officiers_mod: 1.2 },
    // Cavalerie
    "Hussards": { type: "Cavalerie", cout_mod: 1.0, officiers_mod: 1.0 },
    "Chasseurs à Cheval": { type: "Cavalerie", cout_mod: 1.0, officiers_mod: 1.0 },
    "Dragons": { type: "Cavalerie", cout_mod: 1.1, officiers_mod: 1.0 },
    "Cuirassiers": { type: "Cavalerie", cout_mod: 1.4, officiers_mod: 1.1 },
    "Uhlans/Chevau-légers": { type: "Cavalerie", cout_mod: 1.0, officiers_mod: 1.0 },
    "Carabiniers": { type: "Cavalerie", cout_mod: 1.2, officiers_mod: 1.1 },
    // Artillerie (gérée différemment)
    "Artillerie de Campagne": { type: "Artillerie", cout_mod: 1.0, officiers_mod: 1.0 },
    "Artillerie à Cheval": { type: "Artillerie", cout_mod: 1.3, officiers_mod: 1.1 },
    // NOUVEAU (Point 9)
    "Génie": { type: "Génie", cout_mod: 1.2, officiers_mod: 1.1 },
    "Sapeurs": { type: "Génie", cout_mod: 1.2, officiers_mod: 1.1 },
    "Pontonniers": { type: "Génie", cout_mod: 1.2, officiers_mod: 1.1 },
    // Garde
    "Garde (Infanterie)": { type: "Garde", cout_mod: 1.5, officiers_mod: 1.5 },
    "Garde (Cavalerie)": { type: "Garde", cout_mod: 1.8, officiers_mod: 1.5 }
};

// Modificateurs de terrain (inchangé)
const MODIFICATEURS_TERRAIN = {
    "Paris": { type: "terrestre", mod: 1.2, desc: "Capitale fortifiée (+20%)" },
    "Londres": { type: "terrestre", mod: 1.1, desc: "Capitale insulaire (+10%)" },
    "Manche": { type: "naval", mod: 1.0, desc: "Mer ouverte (neutre)" },
    "Caraïbes": { type: "naval", mod: 0.9, desc: "Eaux tropicales (-10%)" },
    "Berlin": { type: "terrestre", mod: 1.15, desc: "Ville fortifiée (+15%)" }
};


// NOUVEAU BLOC : Listes de noms pour les unités
const NOMS_REG_INF_PRE = ["1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e", "10e", "11e", "12e", "13e", "14e", "15e", "16e", "17e", "18e", "19e", "20e"];
const NOMS_REG_INF_SUF = ["de Ligne", "Léger", "Grenadiers", "de Fusiliers", "Royal", "du Roi", "de la Reine", "Provincial"];
const NOMS_REG_CAV_PRE = ["1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e", "10e"];
const NOMS_REG_CAV_SUF = ["Hussards", "Dragons", "Cuirassiers", "Chasseurs", "Chevau-légers"];

// ... (Après NOMS_REG_CAV_SUF)

// NOUVEAU (Point 6) - Noms de navires par culture
const NOMS_NAV_LIGNE_FR = ["Le Conquérant", "Le Terrible", "Le Soleil Royal", "Le Victorieux", "Le Foudroyant", "Le Héros", "L'Intrépide", "Le Magnifique", "Le Tonnant", "L'Invincible", "Le Neptune", "Le Bucentaure", "L'Indomptable", "Le Spartiate", "Le Justicier", "Le Triton", "L'Alexandre", "Le Lion", "Le Centaure", "Le Duguay-Trouin", "Le Tourville", "Le Richelieu"];
const NOMS_NAV_ESCORTE_FR = ["La Flèche", "L'Aigle", "La Vigilante", "La Rapide", "L'Éclair", "La Rusée", "La Nymphe", "La Courageuse", "La Vaillante", "L'Egyptienne", "L'Achéron", "L'Artémise", "La Diane", "La Victoire", "La Sérieuse", "La Badine"];

const NOMS_NAV_LIGNE_EN = ["HMS Victory", "HMS Royal Sovereign", "HMS Dreadnought", "HMS Neptune", "HMS Vanguard", "HMS Goliath", "HMS Majestic", "HMS Invincible", "HMS Temeraire", "HMS Monarch", "HMS Defence", "HMS Defiance", "HMS Resolution", "HMS Thunderer", "HMS Implacable", "HMS Britannia"];
const NOMS_NAV_ESCORTE_EN = ["HMS Surprise", "HMS Alert", "HMS Speedy", "HMS Greyhound", "HMS Amazon", "HMS Diamond", "HMS Fox", "HMS Lively", "HMS Pallas", "HMS Triton", "HMS Venus"];

const NOMS_NAV_LIGNE_ES = ["San Nicolás", "Príncipe de Asturias", "Santa Ana", "Rayo", "San Fernando", "El Glorioso", "San Juan Nepomuceno", "San Francisco de Asís", "San Agustín", "Guerrero", "Soberano", "Firme", "Vencedor"];
const NOMS_NAV_ESCORTE_ES = ["Santa María", "Mercurio", "Diana", "Juno", "Venganza", "La Veloz", "Nuestra Señora de Atocha", "Santa Clara", "Pilar"];

const NOMS_NAV_LIGNE_NL = ["De Zeven Provinciën", "Dolfijn", "Wassenaar", "Admiraal Generaal", "Hollandia", "Vrijheid", "Leeuw", "Gelderland", "Unie", "Batavier", "Gouden Leeuw"];
const NOMS_NAV_ESCORTE_NL = ["Vliegende Hollander", "Zeehond", "Tijger", "Walvis", "Snip", "De Ruyter", "Tromp", "Piet Hein"];

const NOMS_NAV_LIGNE_RU = ["Svyatoy Pavel", "Rostislav", "Gangut", "Petr", "Imperatritsa Mariya", "Dvenadtsat Apostolov", "Knyaz Vladimir", "Pobeda", "Azov", "Velikiy", "Oryol"];
const NOMS_NAV_ESCORTE_RU = ["Avrora", "Pallada", "Diana", "Nadezhda", "Kruzenshtern", "Merkuriy", "Strela", "Bystryy"];

const NOMS_NAV_LIGNE_SE = ["Vasa", "Kronan", "Svärdet", "Konung Gustaf", "Fäderneslandet", "Dristigheten", "Tapperheten", "Äran", "Prins Karl"];
const NOMS_NAV_ESCORTE_SE = ["Freja", "Galten", "Gripen", "Falken", "Delfinen", "Jarramas"];

// (Fin de la Section 0)

// =======================================================
// SECTION 1: FONCTIONS UTILITAIRES
// =======================================================

/**
 * Convertit une chaîne de caractères formatée (ex: "1 234 500" ou "24,19") en nombre.
 * @param {string} str - La chaîne à convertir.
 * @returns {number} - Le nombre converti, ou 0 si invalide.
 */
function parseCSVNumber(str) {
    if (!str || typeof str !== 'string') return 0;
    // Remplace la virgule comme séparateur décimal par un point, puis supprime tous les autres caractères non numériques (comme les espaces)
    return parseFloat(str.replace(/,/g, '.').replace(/[^0-9.-]/g, '')) || 0;
}

/**
 * Ajoute un message au log du jeu dans l'interface.
 * @param {string} msg - Le message à afficher.
 * @param {string} type - 'info', 'success', 'error' (pour la couleur)
 */
function logToUI(msg, type = 'info') {
    const log = document.getElementById('game-log');
    if (!log) return;
    const p = document.createElement('p');
    p.textContent = `[An ${GAME_STATE.anneeActuelle}] ${msg}`;
    p.className = `log-${type}`;
    log.appendChild(p);
    // Fait défiler automatiquement vers le bas
    log.scrollTop = log.scrollHeight;
}

/**
 * Génère un nombre aléatoire dans une plage.
 * @param {number} min - La borne minimale.
 * @param {number} max - La borne maximale.
 * @returns {number} - Le nombre aléatoire.
 */
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * NOUVEAU (Point 5): Vérifie si une faction est non-coloniale
 * @param {object} faction - L'objet faction.
 * @returns {boolean} - true si non-colonial.
 */
function estNonColonial(faction) {
    return GAME_STATE.PAYS_NON_COLONIAUX.includes(faction.nom);
}

/**
 * NOUVEAU: Détermine le type de ville coloniale basé sur la population totale.
 * @param {number} population - La population totale de la ville (colons + indigènes + esclaves).
 * @returns {string} - "Hameau", "Village", ou "Ville".
 */
function getColonialCityType(population) {
    if (population > 2000) return "Ville";
    if (population >= 50) return "Village"; // 50-2000 (inclusivement)
    return "Hameau"; // Moins de 50
}

/**
 * Transforme les données brutes (RAW_DATA) d'une faction en un objet de jeu dynamique.
 * (MODIFIÉ : Gère les climats coloniaux et les bâtiments de départ)
 * @param {object} rawFaction - L'objet faction brut de FACTIONS_DATA_RAW.
 * @param {Province[]} provincesDeLaFaction - La liste des objets Province appartenant à cette faction.
 * @returns {object} - L'objet faction dynamique prêt pour le jeu.
 */
function initialiserFaction(rawFaction, provincesDeLaFaction) {
    const raw = rawFaction.RAW_DATA;
    const isNonColonial = GAME_STATE.PAYS_NON_COLONIAUX.includes(rawFaction.nom);
    
    // (Simplifié)
    const nations_peu_fertiles = ["Nader Shah", "Soliman", "Charles XII", "Alexandre Ier", "Pierre le Grand"];
    const nations_avec_olives = ["Napoléon", "Lannes", "Gaston de Foix", "Philippe II d'Esp", "Charles Quint", "Philippe V Espagne", "Eugène de Savoie", "Soliman", "Louis II Condé"];
    const nations_tres_fertiles = ["Wellington", "Malborough", "Gaston de Foix", "Napoléon", "Lannes", "Davout", "Louis XIV", "Louis II Condé"];
    
    // 1. Trésor et Dette (Inchangé)
    let tresorInitial = parseCSVNumber(raw["Trésor"]);
    let detteInitiale = parseCSVNumber(raw["Dette"]);
    if (tresorInitial < 0 || detteInitiale !== 0) {
        detteInitiale = Math.abs(tresorInitial);
        tresorInitial = 0;
    }

    // 2. Impôts (MODIFIÉ : Intégration Tranches de Revenus)
    const rbn_statique = parseCSVNumber(raw["Revenu national brut"]) || 1; 
    
    // (Note : Les anciens taux directs sont ignorés, remplacés par les tranches)
    const impots = {
        directs: [], // Géré par les 'tranches'
        indirects: [
            { nom: "Gabelle", base: parseCSVNumber(raw["Gabelle"]), rendement_habitant: (parseCSVNumber(raw["Gabelle"]) / (parseCSVNumber(raw["Population"]) || 1)), modifiable: true },
            { nom: "Aides/Autres", base: parseCSVNumber(raw["Aides/autres impôts indirects"]), rendement_habitant: (parseCSVNumber(raw["Aides/autres impôts indirects"]) / (parseCSVNumber(raw["Population"]) || 1)), modifiable: true },
            { nom: "Douanes", base: 0, taux_effectif: GAME_SETTINGS.TAUX_DOUANE_BASE, modifiable: true },            
            { nom: "Loteries", base: parseCSVNumber(raw["Lotteries"]), rendement_habitant: (parseCSVNumber(raw["Lotteries"]) / (parseCSVNumber(raw["Population"]) || 1)), modifiable: true },
            { nom: "Droits de Mouillage", base: 0, taux_effectif: GAME_SETTINGS.TAUX_MOUILLAGE_BASE, modifiable: true } 
        ],
        // NOUVEAU : Tranches de revenus (votre idée)
        tranches: {
            haut: { 
                taux: 0.025, // Taux de base 2.5%
                pop_ratio: 0.02, // 2% de la pop
                rnb_ratio: 0.35 // 35% du RNB
            },
            moyen: { 
                taux: 0.035, // Taux de base 03.5%
                pop_ratio: 0.20, // 20% de la pop
                rnb_ratio: 0.35 // 35% du RNB
            },
            bas: { 
                taux: 0.025, // Taux de base 2.5%
                pop_ratio: 0.78, // 78% de la pop
                rnb_ratio: 0.30 // 30% du RNB
            }
        }
    };
    
    // =======================================================
    // ========= DÉBUT DE LA MODIFICATION (ARMÉE) ============
    // =======================================================
    const regiments = []; // Contiendra les *objets* Regiment
    
    // CORRIGÉ : Terminologie des sous-officiers
    const doctrine = { 
        infanterie: {
            soldats_compagnie: parseCSVNumber(raw["Soldats dans une compagnie"]) || 120,
            sous_officiers_compagnie: parseCSVNumber(raw["Sous-officiers et caporaux dans une compagnie"]) || 15,
            compagnies_bataillon: parseCSVNumber(raw["Compagnies / Bataillon"]) || 6, 
            bataillons_regiment: parseCSVNumber(raw["Bataillons / Régiment"]) || 3 
        },
        cavalerie: {
            soldats_escadron: parseCSVNumber(raw["Cavaliers dans un escadron"]) || 140,
            sous_officiers_escadron: parseCSVNumber(raw["Sous-officiers et caporaux dans un escadron"]) || 20,
            escadrons_regiment: parseCSVNumber(raw["Escadrons / Régiment"]) || 4 
        },
        artillerie: {
            soldats_compagnie: 150, 
            canons_compagnie: parseCSVNumber(raw["Nombre de canons par compagnie"]) || 6,
            compagnies_regiment: 8 // NOUVELLE LIGNE : 8 compagnies par régiment (valeur par défaut)
        }
    };
    
    // Calcul des effectifs de régiment (basé sur la doctrine)
    let effectif_max_inf = (doctrine.infanterie.soldats_compagnie + doctrine.infanterie.sous_officiers_compagnie) * doctrine.infanterie.compagnies_bataillon * doctrine.infanterie.bataillons_regiment;
    let effectif_max_cav = (doctrine.cavalerie.soldats_escadron + doctrine.cavalerie.sous_officiers_escadron) * doctrine.cavalerie.escadrons_regiment;
    let effectif_max_art = (doctrine.artillerie.soldats_compagnie || 150) * (doctrine.artillerie.compagnies_regiment || 8);
    
    // NOUVEAU (Point 9) - Effectif Génie (basé sur Infanterie)
    let effectif_max_genie = effectif_max_inf;

    // Assurer que les effectifs ne sont pas 0 si la doctrine est mal remplie
    if (effectif_max_inf === 0) effectif_max_inf = 2000;
    if (effectif_max_cav === 0) effectif_max_cav = 600;
    if (effectif_max_art === 0) effectif_max_art = 150;
    if (effectif_max_genie === 0) effectif_max_genie = 1000; // Sécurité pour le génie


    const provincesFrontalieres = [];
    const provincesInternes = [];

    provincesDeLaFaction.forEach(prov => {
        let isFrontiere = false;
        for (const voisinId of prov.voisins_terrestres) {
            const voisin = MONDE[voisinId];
            if (voisin && voisin.proprietaireInitial !== prov.proprietaireInitial) {
                isFrontiere = true;
                break;
            }
        }
        if (isFrontiere) {
            provincesFrontalieres.push(prov.id);
        } else {
            provincesInternes.push(prov.id);
        }
    });

    // Fallback si une nation n'a que des frontières ou que des provinces internes
    if (provincesInternes.length === 0 && provincesFrontalieres.length > 0) {
         provincesFrontalieres.forEach(pId => provincesInternes.push(pId));
    }
    if (provincesFrontalieres.length === 0 && provincesInternes.length > 0) {
         provincesInternes.forEach(pId => provincesFrontalieres.push(pId));
    }
    if (provincesFrontalieres.length === 0 && provincesInternes.length === 0 && rawFaction.nom !== "FACTIONS_DATA_RAW") {
        console.warn(`Aucune province de départ trouvée pour ${rawFaction.nom}.`);
        provincesFrontalieres.push("default_province"); 
        provincesInternes.push("default_province"); 
    }

    let regCounter = 0;
    const deployerRegiments = (type, nombre, effectif_max, officiers_requis, equipement) => {
    if (isNaN(nombre) || nombre <= 0) return;        
        for (let i = 0; i < nombre; i++) {
            let localisation;
            // 90% chance d'être à la frontière, 10% à l'intérieur
            if (Math.random() < 0.9) {
                localisation = provincesFrontalieres[Math.floor(Math.random() * provincesFrontalieres.length)];
            } else {
                localisation = provincesInternes[Math.floor(Math.random() * provincesInternes.length)];
            }
            
            regCounter++;
            const id = `${rawFaction.nom.substring(0, 4)}_${regCounter}`;
            
            const reg = new Regiment(id, rawFaction.nom, type, localisation);
            reg.effectif_max = effectif_max;
            reg.effectif_actuel = effectif_max;
            reg.officiers = officiers_requis;
            reg.equipement = equipement; // LIGNE AJOUTÉE (Point 3 & 4)
            regiments.push(reg);
        }
    };
    
    // 3a. Infanterie
    deployerRegiments("Infanterie de Ligne", parseCSVNumber(raw["Nombre de Régiments de ligne"]), effectif_max_inf, 5);
    deployerRegiments("Infanterie Légère", parseCSVNumber(raw["Régiments d’infanterie légère"]), effectif_max_inf, 5);
    deployerRegiments("Grenadiers", parseCSVNumber(raw["Régiments de grenadiers"]), effectif_max_inf, 6);

    // 3b. Cavalerie (détaillée)
    deployerRegiments("Hussards", parseCSVNumber(raw["Régiments de hussards"]), effectif_max_cav, 4);
    deployerRegiments("Chasseurs à Cheval", parseCSVNumber(raw["Régiments de chasseurs à cheval"]), effectif_max_cav, 4);
    deployerRegiments("Dragons", parseCSVNumber(raw["Régiments de dragons"]), effectif_max_cav, 4);
    deployerRegiments("Cuirassiers", parseCSVNumber(raw["Régiments de cuirassiers"]), effectif_max_cav, 5);
    // (Ajout des types manquants)
    deployerRegiments("Uhlans/Chevau-légers", parseCSVNumber(raw["Régiments de Uhlans/chevau-légers"]), effectif_max_cav, 4);
    deployerRegiments("Carabiniers", parseCSVNumber(raw["Régiments de carabiniers"]), effectif_max_cav, 5);
    
    // 3c. Artillerie (MODIFIÉ Point 3 & 4)
    const nb_comp_cheval_total = parseCSVNumber(raw["Nombre de compagnies d’artillerie à cheval"]) || 0;
    const nb_comp_total = parseCSVNumber(raw["Nombre de compagnies d’artillerie totale"]) || 0;
    const nb_comp_pied_total = nb_comp_total - nb_comp_cheval_total;
    const comp_par_reg = doctrine.artillerie.compagnies_regiment || 8;
    
    // Calcule le nombre de régiments (en arrondissant)
    const nb_reg_cheval = Math.round(nb_comp_cheval_total / comp_par_reg);
    const nb_reg_pied = Math.round(nb_comp_pied_total / comp_par_reg);

    // Equipement Artillerie à Pied (par régiment de 8 compagnies)
    const eq_art_pied = {
        "4-livres": (parseCSVNumber(raw["Nombre de canons de 4 livres"]) || 0) * comp_par_reg,
        "6-livres": (parseCSVNumber(raw["Nombre de canons de 6 livres"]) || 0) * comp_par_reg,
        "8-livres": (parseCSVNumber(raw["Nombre de canons de 8 livres"]) || 0) * comp_par_reg,
        "12-livres": (parseCSVNumber(raw["Nombre de canons de 12 livres par compagnie"]) || 0) * comp_par_reg,
        "obusiers-6": (parseCSVNumber(raw["Nombre d’obusiers de 6 pouces"]) || 0) * comp_par_reg
    };

    // Equipement Artillerie à Cheval (par régiment de 8 compagnies)
    // Note: utilise les clés spécifiques (Art. Cheval)
    const eq_art_cheval = {
        "4-livres": (parseCSVNumber(raw["Nombre de canons de 4 livres (Art. Cheval)"]) || 0) * comp_par_reg,
        "6-livres": (parseCSVNumber(raw["Nombre de canons de 6 livres (Art. Cheval)"]) || 0) * comp_par_reg,
        "8-livres": (parseCSVNumber(raw["Nombre de canons de 8 livres (Art. Cheval)"]) || 0) * comp_par_reg,
        "12-livres": 0, // Pas de 12 livres à cheval dans les données
        "obusiers-6": (parseCSVNumber(raw["Nombre d’obusiers de 6 pouces (Art. Cheval)"]) || 0) * comp_par_reg
    };
    
    // Nettoyer les équipements (retirer les types de canons non possédés)
    Object.keys(eq_art_pied).forEach(k => eq_art_pied[k] === 0 && delete eq_art_pied[k]);
    Object.keys(eq_art_cheval).forEach(k => eq_art_cheval[k] === 0 && delete eq_art_cheval[k]);

    deployerRegiments("Artillerie de Campagne", nb_reg_pied, effectif_max_art, 2, eq_art_pied);
    deployerRegiments("Artillerie à Cheval", nb_reg_cheval, effectif_max_art, 3, eq_art_cheval);
    
    // NOUVEAU (Point 9) - Déploiement du Génie
    let nb_reg_genie_total = 0;
    // Tente de lire "Régiments de génie"
    const nb_reg_genie_specifique = parseCSVNumber(raw["Régiments de génie"]);
    
    if (nb_reg_genie_specifique > 0) {
        nb_reg_genie_total = nb_reg_genie_specifique;
        deployerRegiments("Génie", nb_reg_genie_total, effectif_max_genie, 5, null);
    } else {
        // Fallback: 50% de l'artillerie (pied + cheval)
        const nb_reg_art_total = nb_reg_pied + nb_reg_cheval;
        nb_reg_genie_total = Math.ceil(nb_reg_art_total * 0.5);
        deployerRegiments("Génie", nb_reg_genie_total, effectif_max_genie, 5, null);
    }
    
    // 3d. Garde
    deployerRegiments("Garde (Infanterie)", parseCSVNumber(raw["Garde (Infanterie) régiment"]), effectif_max_inf, 8);
    deployerRegiments("Garde (Cavalerie)", parseCSVNumber(raw["Garde (Cavalerie)"]), effectif_max_cav, 7);
    
    // =======================================================
    // ========= FIN DE LA MODIFICATION (ARMÉE) ==============
    // =======================================================

    // 4. Marine (MODIFIÉ : Ajout des types manquants)
    const flotte = [];
    let idNavire = 0;
    // (Types de navires de ligne)
    const typesLigne = { 
        "+ de 80 canons": "Vaisseau 100+ canons", 
        "80 canons": "Vaisseau 80 canons", 
        "74 canons": "Vaisseau 74 canons", 
        "64 canons": "Vaisseau 64 canons", 
        "50 canons": "Vaisseau 50 canons" 
    };
    Object.keys(typesLigne).forEach(csvKey => {
        const nb = parseCSVNumber(raw[csvKey]);
        const typeJeu = typesLigne[csvKey];
        const def = BUILD_DEFINITIONS.navires[typeJeu];
        if (nb > 0 && def) {
            for (let i = 0; i < nb; i++) {
                flotte.push({ id: ++idNavire, type: typeJeu, pin_base: def.pin, pin_actuel: def.pin, age: Math.floor(getRandomInRange(1, 8)), statut: "arme", carene_cuivre: false });
            }
        }
    });
    // (Types de navires d'escorte)
    const typesEscorte = {
        "Frégates": "Frégate 36 canons",
        "Corvettes-Brig-Sloops-chébeqs": "Corvette/Brick 24c",
        "Sloops-Goelettes-shooners": "Shooner 12c"
    };
    Object.keys(typesEscorte).forEach(csvKey => {
        const nb = parseCSVNumber(raw[csvKey]);
        const typeJeu = typesEscorte[csvKey];
        const def = BUILD_DEFINITIONS.navires[typeJeu];
        if (nb > 0 && def) {
            for (let i = 0; i < nb; i++) {
                flotte.push({ id: ++idNavire, type: typeJeu, pin_base: def.pin, pin_actuel: def.pin, age: Math.floor(getRandomInRange(1, 5)), statut: "arme", carene_cuivre: false });
            }
        }
    });

    // 5. Infrastructures (MODIFIÉ : Ajout nouvelles usines)
    const manufactures = [];
    const nbManufArmes = parseCSVNumber(raw["Nombre de manufactures d’armes ou arsenaux"]);
    const nbFusils = Math.round(nbManufArmes * 0.5);
    const nbCanonsTerre = Math.round(nbManufArmes * 0.2);
    const nbCanonsMer = Math.round(nbManufArmes * 0.1);
    const nbPoudre = Math.max(0, nbManufArmes - nbFusils - nbCanonsTerre - nbCanonsMer); 
    for (let i = 0; i < nbFusils; i++) manufactures.push({ type: "manufacture_fusils_p" });
    for (let i = 0; i < nbCanonsTerre; i++) manufactures.push({ type: "fonderie_canons_terre_p" });
    for (let i = 0; i < nbCanonsMer; i++) manufactures.push({ type: "fonderie_canons_mer_p" });
    for (let i = 0; i < nbPoudre; i++) manufactures.push({ type: "manufacture_poudre_p" });

    const arsenaux = [];
    const nbArsenauxG = parseCSVNumber(raw["Nombre de grands arsenaux maritimes"]);
    const nbArsenauxP = parseCSVNumber(raw["Petits arsenaux"]);
    for (let i = 0; i < nbArsenauxG; i++) arsenaux.push({ type: "arsenal_g", cales_radoub: 3 });
    for (let i = 0; i < nbArsenauxP; i++) arsenaux.push({ type: "arsenal_p", cales_radoub: 1 });
    
    const manufactures_civiles = [];
    const nbManufCiviles = parseCSVNumber(raw["Manufactures (textiles verreries imprimeries etc)"]);
    if (rawFaction.nom === "Wellington") {
        const nbTextile = 280; const nbVerrerie = 20; const nbBrasserie = 30; const nbSavon = 15; const nbMeubles = 10;
        for (let i = 0; i < nbTextile; i++) manufactures_civiles.push({ type: "textile_p", moteur_installe: false });
        for (let i = 0; i < nbVerrerie; i++) manufactures_civiles.push({ type: "verrerie_p", moteur_installe: false });
        for (let i = 0; i < nbBrasserie; i++) manufactures_civiles.push({ type: "brasserie_p" });
        for (let i = 0; i < nbSavon; i++) manufactures_civiles.push({ type: "savonnerie_p" });
        for (let i = 0; i < nbMeubles; i++) manufactures_civiles.push({ type: "manufacture_meubles_p" });
    } else {
        const nbManufCivilesAjuste = Math.floor(nbManufCiviles / 5) || 1; 
        for (let i = 0; i < nbManufCivilesAjuste; i++) manufactures_civiles.push({ type: "textile_p", moteur_installe: false });
        for (let i = 0; i < nbManufCivilesAjuste; i++) manufactures_civiles.push({ type: "verrerie_p", moteur_installe: false });
        for (let i = 0; i < nbManufCivilesAjuste; i++) manufactures_civiles.push({ type: "brasserie_p" });
        for (let i = 0; i < nbManufCivilesAjuste; i++) manufactures_civiles.push({ type: "savonnerie_p" });
        for (let i = 0; i < nbManufCivilesAjuste; i++) manufactures_civiles.push({ type: "manufacture_papier_p" });
    }
        
    // 6. Terres Coloniales Initiales (Inchangé)
    const terres_cultivees_initiales = {};
    let hectaresInitiaux = 0;
    Object.keys(CROP_MAPPING).forEach(key => {
        const rawKey = CROP_MAPPING[key].raw;
        if (rawKey) { 
            const productionBrute = parseCSVNumber(raw[rawKey]);
            const rendement = YIELD_PER_HECTARE[key] || 1; 
            const hectares = productionBrute / rendement;
            terres_cultivees_initiales[key] = hectares;
            hectaresInitiaux += hectares;
        }
    });
    const production_fourrures_base = parseCSVNumber(raw["Fourrures (en pièces)"]);
    
    // 7. Navires Marchands (Inchangé)
    const navires_marchands = {
        "5-50t": parseCSVNumber(raw["Cabotage (5 à 50 tonneaux)"]),
        "50-100t": parseCSVNumber(raw["Grand cabotage (50-100 tonneaux)"]),
        "100-250t": parseCSVNumber(raw["Commerce de haute mer (100-250 tonneaux)"]),
        "+250t": parseCSVNumber(raw["Grand commerce (+ 250 tonneaux)"])
    };

    // 8. Calcul Réserve de Marins (Inchangé)
    const currentPop = parseCSVNumber(raw["Total population métropolitaine"]) || parseCSVNumber(raw["Population"]) || 1;
    const reserveMarinsMax = Math.floor(parseCSVNumber(raw["Réservoir de marins"]));
    const sailorToPopRatio = reserveMarinsMax / currentPop; 
    const marinsCommercePeche = (parseCSVNumber(raw["Navires de pêche"]) * GAME_SETTINGS.MARINS_PAR_NAVIRE.peche) +
        (navires_marchands["5-50t"] * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_p) +
        (navires_marchands["50-100t"] * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_m) +
        (navires_marchands["100-250t"] * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_g) +
        (navires_marchands["+250t"] * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_tg);
    let marinsMarineGuerre = 0;
    flotte.forEach(navire => {
        if (navire.statut === 'arme') { 
             marinsMarineGuerre += navire.pin_base * GAME_SETTINGS.MARINS_PAR_NAVIRE.guerre_par_pin;
        }
    });

        
    // 10. Population Totale (MODIFIÉ - Thème 1)
    const popColons = isNonColonial ? 0 : parseCSVNumber(raw["Dont colons blancs"]);
    const pop_colons_campagne = popColons * 0.90;
    const totalHectaresCibles = pop_colons_campagne * GAME_SETTINGS.HECTARES_PAR_COLON;
    let terresDisponiblesInitiales = Math.max(0, totalHectaresCibles - hectaresInitiaux);
    if (pop_colons_campagne === 0 && !isNonColonial) {
         terresDisponiblesInitiales = 100000; 
    }
    const populationTotale = currentPop + popColons;
    
    // NOUVEAU : Calcul population disponible (Thème 1)
    let ouvriersInitiaux = 0;
    manufactures.forEach(m => ouvriersInitiaux += (BUILD_DEFINITIONS.manufactures_armes[m.type].ouvriers || 0));
    manufactures_civiles.forEach(m => ouvriersInitiaux += (BUILD_DEFINITIONS.manufactures_civiles[m.type].ouvriers || 0));
    // (Ajoutez d'autres catégories si nécessaire : mines, etc.)
    const population_disponible = parseCSVNumber(raw["Recrues potentielles chaque année (Calcul de Napoléon), 1/140e"]);
    
    // +++ DÉBUT CORRECTION (Point 3 - Salaires Marine) +++
    
    // Définir la hiérarchie de base des officiers de marine
    const hierarchie_officiers_marine = {
        vice_amiraux: parseCSVNumber(raw["Vice-amiraux"]) || 0,
        contre_amiraux: parseCSVNumber(raw["Contre-amiraux"]) || 0,
        capitaines_vaisseau: parseCSVNumber(raw["Capitaines de vaisseaux"]) || 0,
        lieutenants_vaisseau: parseCSVNumber(raw["Lieutenants de vaisseaux"]) || 0,
        capitaines_corvette: parseCSVNumber(raw["Capitaine de frégate"]) || 0, // Assimilé
        lieutenants_corvette: parseCSVNumber(raw["Enseignes de vaisseaux"]) || 0 // Assimilé
    };

    // Définir les salaires de base (selon vos instructions)
    const salaires_marine_base = {
        marin_base: (GAME_SETTINGS.COASTAL_NATIONS.includes(rawFaction.nom)) ? 310 : 185, // Salaire de base marin
        officiers: {
            vice_amiral: 22000,
            contre_amiral: 13000,
            capitaine_vaisseau: 8250,
            lieutenant_vaisseau: 5500,
            capitaine_corvette: 3500,
            lieutenant_corvette: 1400
        }
    };
    
    // +++ FIN CORRECTION (Point 3) +++

    // Création de l'objet faction final
    const f = {
        nom: rawFaction.nom,
        RAW_DATA: raw, 
        
        provinces: provincesDeLaFaction.map(p => p.id),

        MODIFICATEURS: {
            salaire_admin_mod: 1.0, 
            budget_pensions_mod: 1.0,
            taux_exploitation_bois: 1.0,
            garde_nationale_ratio: 200,
            ratio_police: RATIO_BASE_ADMIN.police,
            ratio_percepteurs: RATIO_BASE_ADMIN.percepteurs,
            ratio_poste: RATIO_BASE_ADMIN.poste,
            
            // NOUVEAU : Modificateurs pour les Ministres
            entretien_armee_mod: 1.0,
            cout_forteresse_mod: 1.0,
            cout_recrutement_mod: 1.0,
            bonus_fiscal_global_pct: 0,
            bonus_interet_dette: 0,
            cout_admin_mod: 1.0,
            cout_maison_dirigeant_mod: 1.0,
            cout_sante_mod: 1.0,
            cout_infra_mod: 1.0,
            bonus_croissance_marchands_mod: 0,
            cout_usine_mod: 1.0,
            // --- BLOC CORRIGÉ POUR LA MARINE ---
            bonus_guerre_course_pct: 0,
            bonus_rnb_colonial_pct: 0,
            entretien_marine_mod: 1.0,
            cout_navire_ligne_mod: 1.0,
            temps_navire_ligne_mod: 1.0,
            cout_navire_escorte_mod: 1.0
            // --- FIN CORRECTION ---
        },

        ETAT_DYNAMIQUE: {
            tresor: tresorInitial,
            dette: detteInitiale,
            population_metropole: currentPop,
            population_totale: populationTotale,
            population_disponible: population_disponible,
            population_assignee_industrie: ouvriersInitiaux,
            population_assignee_armee: parseCSVNumber(raw["Nombre de soldats totaux"]),
            population_assignee_admin: parseCSVNumber(raw["Nombre d'administrateurs totaux"]),
            
            population_colonies: {
                total: isNonColonial ? 0 : parseCSVNumber(raw["Population des colonies"]),
                colons: popColons,
                indigenes: isNonColonial ? 0 : parseCSVNumber(raw["Indigènes"]),
                esclaves: isNonColonial ? 0 : parseCSVNumber(raw["Esclaves"]),
                campagne_colons: 0, 
                campagne_indigenes: 0, 
                campagne_esclaves: 0
            },
            prestige: 100,
            stabilite: 75, 
            efficacite_admin: 70, 
            admin_efficacite_plafond: GAME_SETTINGS.ADMIN_EFFICACITE_PLAFOND_BASE,
            administrateurs_total: parseCSVNumber(raw["Nombre d'administrateurs totaux"]), 
            points_infrastructure: 0,
            moral_armee: 80,
            moral_marine: 80,
            croissance_pop_annee_prec: 0,
            croissance_eco_annee_prec: 0,
            net_food: 0,
            tranches_revenus: {
                haut: { pop: currentPop * impots.tranches.haut.pop_ratio, revenu: rbn_statique * impots.tranches.haut.rnb_ratio },
                moyen: { pop: currentPop * impots.tranches.moyen.pop_ratio, revenu: rbn_statique * impots.tranches.moyen.rnb_ratio },
                bas: { pop: currentPop * impots.tranches.bas.pop_ratio, revenu: rbn_statique * impots.tranches.bas.rnb_ratio }
            },
            // NOUVEAU (Système de Cabinet)
            ministres: {
                nombre: 7, // (Sera lu depuis l'input plus tard)
                postes: {
                    "guerre": null, // (id du ministre choisi, ex: "guerre_agressif")
                    "finances": null,
                    "interieur": null,
                    "commerce": null,
                    "marine": null,
                    "colonies": null,
                    "administration": null
                },
                ministres_choisis: [] // (Pour vérifier l'unicité)
            }
        },

        RESERVES: {
            reserve_manpower: parseCSVNumber(raw["Recrues potentielles chaque année (Calcul de Napoléon), 1/140e"]),
            sailor_to_pop_ratio: sailorToPopRatio, 
            reserve_marins_max: reserveMarinsMax, 
            marins_marine_guerre: marinsMarineGuerre, 
            marins_commerce_peche: marinsCommercePeche, 
            chevaux_disponibles: parseCSVNumber(raw["Elevage (nombre de chevaux aptes pour l’armée entre 5 et 15 ans)"]),
            besoin_chevaux_armee: parseCSVNumber(raw["Besoin militaire"]),
            
            // MODIFIÉ (Point 4)
            stock_fusils: parseCSVNumber(raw["Fusils (dans l'armée ou en réserve)"]),
            stock_canons_terre: parseCSVNumber(raw["Rappel Dont canons de campagne"]),
            stock_canons_mer: parseCSVNumber(raw["Réserve de canons navals"]),
            
            // NOUVEAU : Stocks détaillés
            stock_matieres_premieres: {
                bois: 100000,
                fer: 20000,
                cuivre: 5000,
                poudre: parseCSVNumber(raw["Production de poudre (T)"]) * 10, // Stock de départ
                laine: 10000,
                lin_chanvre: 10000,
                ble_colonial: 0,
                charbon: 2000,
                machines_agri: 0,
                moteurs_vapeur: 0,
                sel: 5000,
                suif: 1000,
                cuir: 1000,
                olives: 5000,
                habits: 5000,
                biere: 1000,
                vin: 1000,
                savon: 1000,
                verre_cristal: 500,
                porcelaine: 100,
                tissu_soie: 100,
                horloges: 50,
                bijoux: 50,
                art: 10,
                meubles: 500,
                papier: 1000,
                journaux: 0,
                livres: 0,
                voiles: 100,
                cordages: 100,
                outils_agricoles: 0,
                poisson: 5000,
                cachemire: 0,
                huile_olive: 100,
                chevaux: 0, // (NOUVEAU Point 10/11 - Stock pour le marché)
                // --- VOS NOUVELLES RESSOURCES ---
                or_kg: 0,
                argent_kg: 0
            }
        },

        ECONOMIE: {
            impots: impots,
            salaires_base: { 
                administration: parseCSVNumber(raw["Coût fonctionnement Etat"]),
                // CORRECTION POINT 1 : Salaires de base modifiables
                soldat: parseCSVNumber(raw["Salaires annuels soldats réguliers"]),
                sous_officier: parseCSVNumber(raw["Salaires annuels sous-officiers"]),
                // (Fin)
                
                officiers: { // Officiers de l'Armée de Terre
                     general_division: parseCSVNumber(raw["Salaires généraux de division"]),
                     general_brigade: parseCSVNumber(raw["Salaires généraux de brigade"]),
                     colonel: parseCSVNumber(raw["Salaires colonels"]),
                     lieutenant_colonel: parseCSVNumber(raw["Salaires lieutenants-colonels"]),
                     capitaine: parseCSVNumber(raw["Salaires capitaines"]),
                     lieutenant: parseCSVNumber(raw["Salaires lieutenants"])
                },
                // CORRECTION POINT 3 : Ajout des salaires de la Marine
                marine: salaires_marine_base, 
                // (Fin)
                police: parseCSVNumber(raw["Coût maréchaussée"]),
                poste: parseCSVNumber(raw["Coût (Poste)"]),
                pensions: parseCSVNumber(raw["Pensions"]),
            },
            rnb_base_agricole: 0, 
            revenu_national_brut: rbn_statique, 
            revenu_moyen_hab: parseCSVNumber(raw["Revenu moyen par hab"]),
            valeur_commerciale_totale: 0, 
            recettes_totales: 0,
            depenses_totales: 0,
            compagnie_marchande_fondee: false, 
            fertilite: 0.18, // (sera écrasé)
            can_grow_vines: !nations_peu_fertiles.includes(rawFaction.nom), 
            can_grow_olives: nations_avec_olives.includes(rawFaction.nom), // NOUVEAU
            can_raise_pigs: !["Soliman", "Nader Shah"].includes(rawFaction.nom), // NOUVEAU
            // MODIFIÉ : Utilise les nouvelles clés d'agriculture
            allocation_terres: FACTION_ALLOCATIONS_TERRES[rawFaction.nom] || AGRICULTURE_SETTINGS.allocation_default,
            agriculture: {
                hectares_total: 0,
                hectares_bonus: 0, 
                machines_deployees: { batteuses: 0, outils: 0 },
                hectares: {},
                production: {},
                valeur_totale: 0,
                net_food: 0
            },
            // NOUVEAU (Point 7)
            domaine_etat: {
                hectares: 0,
                revenu_par_ha_base: 3.0,
                revenu_total: 0
            }
        },

        INFRASTRUCTURE: {
            manufactures_civiles: manufactures_civiles,
            manufactures_armes: manufactures,
            // --- MODIFIÉ : Ajout des nouveaux types ---
            manufactures_avancees: [],
            manufactures_luxe: [],
            banques: [],
            mines: [], 
            ports_commerciaux: [],
            haras_royaux: [],
            // --- FIN MODIFICATION ---
            arsenaux: arsenaux,
            routes_km: parseCSVNumber(raw["Total longueur des routes principales et secondaires en kilomètres"]),
            ponts: parseCSVNumber(raw["Construction de ponts"]), 
            canaux: parseCSVNumber(raw["Construction de canaux"]),
            universites: parseCSVNumber(raw["Nombre d’Universités"]),
            lycees: parseCSVNumber(raw["Nombre de lycées"]),
            ecoles_primaires: parseCSVNumber(raw["Nombre d’écoles primaires"]),
            villes: [], 
            projets_urbains_completes: [],
            projets_infra_completes: [], 
            forteresses: {
                f1: parseCSVNumber(raw["Forteresses de 1ère classe"]),
                f2: parseCSVNumber(raw["Forteresses 2e classe"]),
                f3_4: parseCSVNumber(raw["Forteresses 3e et 4e classe"]),
                forts: parseCSVNumber(raw["Forts – Poste militaire"])
            },
            hopitaux_civils: 0, // NOUVEAU (Point 1)
            hopitaux_militaires: 0, // NOUVEAU (Point 1)
            foret: {
                hectares: 0,
                production_durable: 0
            }
        },

        ARMEE: {
            regiments: regiments, 
            armees: [], 
            formation_officiers_queue: [],
            // NOUVEAU (Refonte Officiers)
            // L'OFFRE (SUPPLY) : Le nombre total d'officiers que vous possédez (lus depuis les données brutes)
            officiers_supply: {
                general_division: parseCSVNumber(raw["Généraux de division"]),
                general_brigade: parseCSVNumber(raw["Généraux de brigade"]),
                colonel: parseCSVNumber(raw["Colonels"]),
                lieutenant_colonel: parseCSVNumber(raw["Lieutenants-colonels, chef d’escadrons et majors"]),
                capitaine: parseCSVNumber(raw["Capitaines"]),
                // Le pool de lieutenants disponibles est maintenant le stock principal
                // CORRIGÉ : Utilise la variable locale 'officiersPoolLieutenants' calculée plus haut
                lieutenant: parseCSVNumber(raw["Lieutenants"]),
                sous_officier: 0 // Le stock de NCOs est basé sur les régiments
            },
            // LA DEMANDE (DEMAND) : Le nombre de postes à pourvoir (calculé chaque tour)
            officiers_demand: {
                general_division: 0,
                general_brigade: 0,
                colonel: 0,
                lieutenant_colonel: 0,
                capitaine: 0,
                lieutenant: 0,
                sous_officier: 0
            },
            doctrine: doctrine, 
            qualite: 100, 
            ecoles_militaires: parseCSVNumber(raw["Nombre d'écoles militaires (armée)"]),
            milice_metropole: parseCSVNumber(raw["Milices/garde nationale"]),
            milice_coloniale: isNonColonial ? 0 : parseCSVNumber(raw["Milices coloniales"])
        },
        
        MARINE: {
            flotte: flotte,
            qualite: 100,
            ecoles_navales: parseCSVNumber(raw["Ecoles navales"]),
            navires_peche: parseCSVNumber(raw["Navires de pêche"]), // (NOUVEAU : Utilisé pour le Poisson)
            navires_marchands: navires_marchands,
            cout_entretien_ports: parseCSVNumber(raw["Entretien et approvisionnement des arsenaux"]),
            // CORRECTION POINT 3 : Ajout hiérarchie marine
            hierarchie_officiers: hierarchie_officiers_marine 
        },

        DIPLOMATIE: {
            relations: {} // ex: {"Napoléon": "guerre", "Wellington": "paix"}
        },

        COLONIES: { 
            villes: [], 
            terres_disponibles: terresDisponiblesInitiales,
            campagne_hectares: 0, 
            campagne_terres_cultivees: {}, 
            production_fourrures_base: production_fourrures_base, 
            forts_coloniaux: isNonColonial ? 0 : parseCSVNumber(raw["Forts dans les colonies"]),
            croissance_base: getRandomInRange(0.01, 0.03), 
            bonus_croissance: 0, 
            production_mult: 1.0,
            // --- NOUVEAU : LOGIQUE DE CLIMAT ---
            climats: [] // Sera rempli ci-dessous
        },

        DEPENSES_BUDGET: {
            education: parseCSVNumber(raw["Coût éducation"]) || 500000,
            sante_social: 1000000, 
            infrastructure_supplementaire: 0, // Corrigé
            maison_dirigeant: parseCSVNumber(raw["Coût maison du roi"]) || 1000000,
            administration_ordinaire: 0, 
            percepteurs_ordinaire: 0, 
            militaire_ordinaire: 0,
            marine_ordinaire: 0,
            police_ordinaire: 0,
            poste_ordinaire: 0,
            pensions_ordinaire: 0,
            construction_extra: 0, 
            colonisation_extra: 0, 
            charge_dette: parseCSVNumber(raw["Charge de la dette"]) || 0,
            formation_officiers_extra: 0,
            
            // NOUVEAU (Groupe 1 & 2 & 3)
            salaire_soldats_reel: 0,
            salaire_officiers_reel: 0,
            salaire_marins_reel: 0,
            salaire_officiers_marine_reel: 0,
            c_rations: 0,
            c_uniformes: 0,
            c_entrainement: 0,
            c_forteresses: 0,
            c_marine_entretien: 0,
            c_marine_salaires: 0, // (Total Marine)

            // NOUVEAU (Point 8)
            c_admin_armee: 0,
            // NOUVEAU (Point 10)
            c_entretien_haras: 0
        }
    };
    
    // --- Initialisation Villes (Métropole) --- (Inchangé)
    const nb_villes_g = parseCSVNumber(raw["Nombre de villes (+ 100 000)"]);
    const nb_villes_m = parseCSVNumber(raw["Nombre de ville (100 000 – 20 000)"]);
    const nb_villes_p = parseCSVNumber(raw["Nombre de villes (20 000- 5000)"]);
    for(let i = 0; i < nb_villes_g; i++) f.INFRASTRUCTURE.villes.push({ id: `g_${i}`, nom: `Grande Ville ${i+1}`, type: "Grande", pop: 100000, projets: [] });
    for(let i = 0; i < nb_villes_m; i++) f.INFRASTRUCTURE.villes.push({ id: `m_${i}`, nom: `Ville Moyenne ${i+1}`, type: "Moyenne", pop: 20000, projets: [] });
    for(let i = 0; i < nb_villes_p; i++) f.INFRASTRUCTURE.villes.push({ id: `p_${i}`, nom: `Petite Ville ${i+1}`, type: "Petite", pop: 5000, projets: [] });

    // --- Bâtiments Avancés (MODIFIÉ : Ajout nouvelles usines) ---
    // (Nous les initialisons tous ici maintenant)
    f.INFRASTRUCTURE.manufactures_avancees = [];
    f.INFRASTRUCTURE.manufactures_luxe = [];
    f.INFRASTRUCTURE.banques = [];
    f.INFRASTRUCTURE.mines = []; 
    f.INFRASTRUCTURE.ports_commerciaux = [];
    f.INFRASTRUCTURE.haras_royaux = [];
    
    // --- NOUVEAU : Définition des climats coloniaux (SELON VOTRE LISTE) ---
    const nom = f.nom;
    const climats = [];
    // Empires Mondiaux
    if (["Louis XIV", "Napoléon", "Philippe II d'Esp", "Philippe V Espagne", "Wellington", "Malborough", "Guillaume d'Orange", "Philippe d’Orléans"].includes(nom)) {
        climats.push("Tropical", "Subtropical", "Tempéré");
    // Ambitions Continentales
    } else if (["Lannes", "Davout", "Gaston de Foix", "Maurice de Saxe"].includes(nom)) {
        climats.push("Tempéré");
    // Empires Ciblés
    } else if (["Charles XII", "Maurice de Nassau", "Cromwell", "Charles Quint", "Louis XIII", "Henri IV", "Louis II Condé"].includes(nom)) {
        climats.push("Subtropical");
    }
    f.COLONIES.climats = climats;
    // --- FIN NOUVEAU BLOC ---
    
    // --- NOUVEAU : BÂTIMENTS DE DÉPART (SELON VOS IDÉES) ---
    
    // (Point 10) - Haras Initiaux (Pour tout le monde)
    let harasInitiaux = 7; 
    if (f.nom === "Soliman" || f.nom === "Nader Shah") harasInitiaux = 10;
    for(let i=0; i < harasInitiaux; i++) f.INFRASTRUCTURE.haras_royaux.push({ type: "haras_royal" });

    // Bâtiments de départ pour factions spécifiques
    if (f.nom === "Wellington") { 
        // Industrie
        for(let i=0; i < 14; i++) f.INFRASTRUCTURE.manufactures_avancees.push({ type: "moteur_vapeur_p" });
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 14; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_cuivre_p" });
        for(let i=0; i < 10; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_charbon_p" });
        for(let i=0; i < 20; i++) f.INFRASTRUCTURE.manufactures_avancees.push({ type: "atelier_outils_p" });
        for(let i=0; i < 25; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.mines.push({ type: "saline_p" });
        
        // --- VOTRE BOOST ---
        // 1 Banque (Privée Majeure)
        f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });
        // (La "Bibliothèque Nationale" est un projet urbain unique, pas une banque)
        // 6 Chantiers Navals Moyens
        for(let i=0; i < 6; i++) f.INFRASTRUCTURE.ports_commerciaux.push({ type: "chantier_naval_civil_m" });
        // 1 Maison de l'Assurance
        f.INFRASTRUCTURE.ports_commerciaux.push({ type: "maison_assurance_maritime" });
        // (On garde les 3 Bourses et 4 Chambres)
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.ports_commerciaux.push({ type: "chambre_de_commerce_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.ports_commerciaux.push({ type: "bourse_de_commerce_p" });
        
    } else if (f.nom === "Malborough") {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_avancees.push({ type: "moteur_vapeur_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 1; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_cuivre_p" });
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.manufactures_avancees.push({ type: "atelier_outils_p" });
        for(let i=0; i < 8; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.mines.push({ type: "saline_p" });
        
    } else if (f.nom === "Maurice de Nassau") {
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });
        for(let i=0; i < 1; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.mines.push({ type: "saline_p" });

    } else if (f.nom === "Napoléon" || f.nom === "Louis XIV") {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });
        for(let i=0; i < 6; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 1; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_cuivre_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "huilerie_p" });
        

    } else if (f.nom === "Frédéric II") {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
        for(let i=0; i < 1; i++) f.INFRASTRUCTURE.manufactures_avancees.push({ type: "atelier_outils_p" });
    
    } else if (f.nom === "Arch Charles") {
        for(let i=0; i < 1; i++) f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });
        for(let i=0; i < 4; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_cuivre_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
    
    } else if (f.nom === "Alexandre Ier") {
        for(let i=0; i < 5; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
    
    } else if (nations_avec_olives.includes(f.nom)) {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "huilerie_p" });
    }
    else if (f.nom === "Blücher") {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
    }
    else if (f.nom === "Louis XIII") {
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
    }
    else if (f.nom === "Charles XII") {
        for(let i=0; i < 10; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_cuivre_p" });
        for(let i=0; i < 7; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_fer_p" });
        for(let i=0; i < 3; i++) f.INFRASTRUCTURE.mines.push({ type: "mine_charbon_p" });
    }
     else if (f.nom === "Philippe d'Orléans") {
        for(let i=0; i < 5; i++) f.INFRASTRUCTURE.manufactures_luxe.push({ type: "soierie_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.manufactures_civiles.push({ type: "brasserie_p" });
        for(let i=0; i < 2; i++) f.INFRASTRUCTURE.banques.push({ type: "banque_nationale_p" });

    }
    
    // --- FIN BÂTIMENTS DE DÉPART ---
     
    // --- Initialisation des Villes (Colonies) --- (Inchangé)
    if (!isNonColonial && f.ETAT_DYNAMIQUE.population_colonies.total > 0) {
        const pop_colons_total = f.ETAT_DYNAMIQUE.population_colonies.colons;
        const pop_indigenes_total = f.ETAT_DYNAMIQUE.population_colonies.indigenes;
        const pop_esclaves_total = f.ETAT_DYNAMIQUE.population_colonies.esclaves;
        f.ETAT_DYNAMIQUE.population_colonies.campagne_colons = pop_colons_total * 0.90;
        f.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes = pop_indigenes_total * 0.999;
        f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves = pop_esclaves_total * 0.998;
        Object.keys(terres_cultivees_initiales).forEach(cropKey => {
            const haCampagne = terres_cultivees_initiales[cropKey] * 0.90;
            f.COLONIES.campagne_terres_cultivees[cropKey] = haCampagne;
            f.COLONIES.campagne_hectares += haCampagne;
        });
        const nbVilles = 8; 
        const pop_colons_villes_total = pop_colons_total * 0.10;
        const pop_indigenes_villes_total = pop_indigenes_total * 0.01;
        const pop_esclaves_villes_total = pop_esclaves_total * 0.01;
        // const terres_villes_total = hectaresInitiaux * 0.10; // (Variable non utilisée)
        const pop_cap_colons = pop_colons_villes_total * 0.5;
        const pop_cap_indigenes = pop_indigenes_villes_total * 0.25;
        const pop_cap_esclaves = pop_esclaves_villes_total * 0.25;
        const pop_cap_total = pop_cap_colons + pop_cap_indigenes + pop_cap_esclaves;
        const terres_cap = {};
        let ha_cap = 0;
        Object.keys(terres_cultivees_initiales).forEach(cropKey => {
            const ha = terres_cultivees_initiales[cropKey] * 0.10 * 0.5;
            terres_cap[cropKey] = ha;
            ha_cap += ha;
        });
        f.COLONIES.villes.push({
            id: `col_0`,
            nom: `Capitale Coloniale`, // (Sera renommé par donnerNomsInitiaux)
            type: getColonialCityType(pop_cap_total),
            pop_colons: pop_cap_colons,
            pop_indigenes: pop_cap_indigenes,
            pop_esclaves: pop_cap_esclaves,
            hectares: ha_cap,
            terres_cultivees: terres_cap,
            projets: [],
            production_mult: 1.0,
            // NOUVEAU : Assigne un climat à la capitale (premier climat de la liste)
            climat: f.COLONIES.climats.length > 0 ? f.COLONIES.climats[0] : "Tempéré"
        });
        const nbVillesSecondaires = nbVilles - 1;
        for (let i = 0; i < nbVillesSecondaires; i++) {
            const pop_ville_colons = (pop_colons_villes_total * 0.5) / nbVillesSecondaires;
            const pop_ville_indigenes = (pop_indigenes_villes_total * 0.25) / nbVillesSecondaires;
            const pop_ville_esclaves = (pop_esclaves_villes_total * 0.25) / nbVillesSecondaires;
            const pop_ville_total = pop_ville_colons + pop_ville_indigenes + pop_ville_esclaves;
            const terres_ville = {};
            let ha_ville = 0;
            Object.keys(terres_cultivees_initiales).forEach(cropKey => {
                const ha = (terres_cultivees_initiales[cropKey] * 0.10 * 0.5) / nbVillesSecondaires;
                terres_ville[cropKey] = ha;
                ha_ville += ha;
            });
            f.COLONIES.villes.push({
                id: `col_${i + 1}`,
                nom: `Ville Coloniale ${i + 1}`, // (Sera renommé)
                type: getColonialCityType(pop_ville_total),
                pop_colons: pop_ville_colons,
                pop_indigenes: pop_ville_indigenes,
                pop_esclaves: pop_ville_esclaves,
                hectares: ha_ville,
                terres_cultivees: terres_ville,
                projets: [],
                production_mult: 1.0,
                // NOUVEAU : Assigne un climat aléatoire parmi ceux autorisés
                climat: f.COLONIES.climats[Math.floor(Math.random() * f.COLONIES.climats.length)]
            });
        }
    } 

        // Thématique
        if (f.nom === "Louis XIV") {
            f.INFRASTRUCTURE.villes[0].projets.push("col_raffinerie_sucre"); // Ajoute une raffinerie
            f.INFRASTRUCTURE.villes[0].projets.push("col_marche_esclaves"); // Ajoute un marché
        }
        else if (f.nom === "Philippe II d'Esp") {
        f.INFRASTRUCTURE.villes[0].projets.push("col_marche_esclaves");
        f.INFRASTRUCTURE.villes[0].projets.push("col_mine_argent");
    }

    // --- Initialisation des Forêts --- (Inchangé)
    const superficie_hectares = provincesDeLaFaction.reduce((sum, prov) => sum + (prov.superficie || 0), 0) * 100; // km² -> ha
    const pct_foret = parseCSVNumber(raw["Superficie du territoire en forêt"]) / 100;
    f.INFRASTRUCTURE.foret.hectares = superficie_hectares * pct_foret;
    f.INFRASTRUCTURE.foret.production_durable = parseCSVNumber(raw["Production bois (Mcube)"]);
    
    // NOUVEAU: Initialise la fertilité (MODIFIÉ)
    let fertilite = 0.18; // Fertilité par défaut
    
    if (nations_tres_fertiles.includes(rawFaction.nom)) {
        fertilite = 0.25; // Avantage de 25%
    } else if (nations_peu_fertiles.includes(rawFaction.nom)) {
        fertilite = 0.10; // Malus de 10%
    }
    f.ECONOMIE.fertilite = fertilite;

    if (f.nom === "Alexandre Ier" || f.nom === "Pierre le Grand") {
            f.ECONOMIE.fertilite = 0.05
    }

    // NOUVEAU (Point 7) - Initialisation du Domaine de l'État
    const hectares_agricoles_total = (superficie_hectares * f.ECONOMIE.fertilite);
    f.ECONOMIE.domaine_etat.hectares = (hectares_agricoles_total * 0.10) + (f.INFRASTRUCTURE.foret.hectares * 0.10);


    // --- Application des bonus de bâtiment --- (Inchangé)
    let plafond_bonus = 0;
    for(let i = 0; i < f.INFRASTRUCTURE.universites; i++) plafond_bonus += BUILD_DEFINITIONS.batiments_speciaux.universite.efficacite_bonus;
    for(let i = 0; i < f.INFRASTRUCTURE.lycees; i++) plafond_bonus += BUILD_DEFINITIONS.batiments_speciaux.lycee.efficacite_bonus;
    f.ETAT_DYNAMIQUE.admin_efficacite_plafond += plafond_bonus;

    return f;
}

// =======================================================
// SECTION 3: GESTION DE L'INTERFACE (UI)
// =======================================================

/**
 * Remplit le sélecteur de faction au démarrage.
 */
function populateFactionSelector() {
    const select = document.getElementById('faction-selector');
    select.innerHTML = '';
    Object.keys(FACTIONS_DATA).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = FACTIONS_DATA[key].nom;
        select.appendChild(opt);
    });
    select.value = GAME_STATE.currentPlayer;
}

/**
 * Change la faction active et met à jour toute l'interface.
 */
function changerFaction(factionKey) {
    GAME_STATE.currentPlayer = factionKey;
    GAME_STATE.currentFaction = FACTIONS_DATA[factionKey];
    updateFullDashboard();
    logToUI(`Changement de perspective : ${GAME_STATE.currentFaction.nom}`);
}

/**
 * Gère l'affichage des onglets.
 * @param {Event} evt - L'événement click.
 * @param {string} tabName - L'ID de l'onglet à ouvrir.
 */
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Rafraîchit les données de l'onglet actif
    refreshTab(tabName);
}

/**
 * Affiche ou cache une fenêtre modale.
 * @param {string} modalId - L'ID de la modale (ex: 'modal-tax').
 * @param {boolean} show - true pour afficher, false pour cacher.
 */
function toggleModal(modalId, show) {
    document.getElementById(modalId).style.display = show ? 'flex' : 'none';
}

/**
 * Gère l'affichage des options dans la modale des impôts.
 * @param {string} type - 'direct' ou 'indirect'.
 */
function toggleTaxOptions(type) {
    document.getElementById('tax-option-direct').style.display = (type === 'direct') ? 'block' : 'none';
    document.getElementById('tax-option-indirect').style.display = (type === 'indirect') ? 'block' : 'none';
}

// =======================================================
// SECTION 4: MISE À JOUR DU TABLEAU DE BORD (SQUELETTES)
// =======================================================

/**
 * Appelle toutes les fonctions de mise à jour pour rafraîchir l'interface.
 */
function updateFullDashboard() {
    if (!GAME_STATE.currentFaction) return;
    
    // Met à jour les éléments de l'en-tête
    updateHeader();
    
    // Met à jour la carte de statut global
    updateStatutGlobal();

    // Rafraîchit l'onglet terrassement ouvert
    const activeTab = document.querySelector('.tab-link.active');
    if (activeTab) {
        // Extrait l'ID de l'onglet depuis l'attribut onclick
        const onclickAttr = activeTab.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']*)'/);
            if (match && match[1]) {
                const tabId = match[1];
                refreshTab(tabId);
            }
        }
    } else {
        // Fallback si aucun onglet n'est actif (ex: 1er chargement)
        refreshTab('tab-budget');
    }
}

/**
 * Rafraîchit les données de l'en-tête (Trésor, Population, Année).
 * (CHANGEMENT Point 6)
 */
function updateHeader() {
    const f = GAME_STATE.currentFaction;
    document.getElementById('header-tresor').textContent = `${Math.floor(f.ETAT_DYNAMIQUE.tresor).toLocaleString()} LT`;
    document.getElementById('header-tresor').className = f.ETAT_DYNAMIQUE.tresor >= 0 ? 'positive' : 'negative';
    // (Point 6) Affiche la population totale (Métropole + Colons)
    document.getElementById('header-population').textContent = Math.floor(f.ETAT_DYNAMIQUE.population_totale).toLocaleString();
    document.getElementById('header-annee').textContent = `${GAME_STATE.anneeActuelle} / ${GAME_SETTINGS.ANNEES_TOTALES}`;
}

/**
 * Rafraîchit la carte de statut global (Confiance, Efficacité, Moral).
 */
function updateStatutGlobal() {
    const f = GAME_STATE.currentFaction.ETAT_DYNAMIQUE;
    
    // Efficacité Admin (avec Plafond)
    const elEfficacite = document.getElementById('stat-efficacite');
    const strongEfficacite = elEfficacite.querySelector('strong');
    const efficaciteActuelle = Math.floor(f.efficacite_admin);
    const plafond = Math.floor(f.admin_efficacite_plafond);
    strongEfficacite.textContent = `${efficaciteActuelle}% / ${plafond}%`;
    strongEfficacite.className = efficaciteActuelle > 70 ? 'positive' : (efficaciteActuelle < 40 ? 'negative' : 'neutral');

    const updateStat = (id, value) => {
        const el = document.getElementById(id);
        const strong = el.querySelector('strong');
        strong.textContent = `${Math.floor(value)}%`;
        strong.className = value > 70 ? 'positive' : (value < 40 ? 'negative' : 'neutral');
    };
    updateStat('stat-confiance', f.stabilite);
    updateStat('stat-moral-armee', f.moral_armee);
    
    const prestigeEl = document.getElementById('stat-prestige').querySelector('strong');
    prestigeEl.textContent = Math.floor(f.prestige);
    prestigeEl.className = f.prestige > 120 ? 'positive' : (f.prestige < 80 ? 'negative' : 'neutral');
}

/**
 * Point d'entrée pour rafraîchir les données d'un onglet spécifique.
 * (MODIFIÉ : Ajout tab-politique)
 */
function refreshTab(tabName) {
    switch (tabName) {
        case 'tab-budget':
            updateBudgetTab();
            break;
        case 'tab-politique': // NOUVEAU
            updatePolitiqueTab();
            break;
        case 'tab-population': 
            updatePopulationTab();
            break;
        case 'tab-territoire': 
            updateTerritoireTab();
            break;
        case 'tab-ressources': 
            updateRessourcesTab();
            break;
        case 'tab-industrie': 
            updateIndustrieTab();
            break;
        case 'tab-commerce':
            updateCommerceTab();
            break;
        case 'tab-militaire':
            updateMilitaireTab();
            break;
        case 'tab-operations':
            updateOperationsTab();
            break;
        case 'tab-diplomatie':
            updateDiplomacyTab();
            break;
        case 'tab-marine':
            updateNavyTab();
            break;
        case 'tab-colonies':
            updateColoniesTab();
            break;
        case 'tab-admin':
            updateAdminTab();
            break;
    }
}

// =======================================================
// SECTION 5: MOTEUR DE CALCUL SYSTÉMIQUE
// =======================================================

/**
 * Calcule toute la production agricole, la consommation, et la valeur.
 * (MODIFIÉ : Gère les nouveaux biens, l'instabilité, le poisson)
 */
function calculerProductionAgricole(faction) {
    // (NOTE : Cette fonction est inchangée par rapport à votre fichier, 
    // car elle contenait déjà la logique systémique des biens)
    
    // (NOUVEAU - Point 6) Calcule la superficie productive
    const superficie_hectares_brute = faction.provinces.reduce((sum, provId) => {
        const prov = MONDE[provId];
        if (!prov) return sum;

        let contributionSuperficie = prov.superficie;
        
        // Si la province est instable, ses revenus chutent
        if (prov.timer_instabilite > 0) {
            contributionSuperficie *= 0.5; // Perte de 50% des revenus
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`L'instabilité à ${prov.nom_affiche} réduit les revenus agricoles.`, "error");
            }
        }
        
        return sum + contributionSuperficie;
    }, 0) * 100; // km² -> ha

    const pop = faction.ETAT_DYNAMIQUE.population_metropole;
    
    const hectares_bonus_defrichment = faction.ECONOMIE.agriculture.hectares_bonus || 0;
    const hectares_agricoles_total = (superficie_hectares_brute * faction.ECONOMIE.fertilite) + hectares_bonus_defrichment; 
    faction.ECONOMIE.agriculture.hectares_total = hectares_agricoles_total;
    
    const alloc = faction.ECONOMIE.allocation_terres; 
    
    // 1. Allouer les Hectares
    const hectares = {
        ble: hectares_agricoles_total * alloc.ble,
        orge: hectares_agricoles_total * alloc.orge,
        avoine: hectares_agricoles_total * alloc.avoine,
        lin_chanvre: hectares_agricoles_total * alloc.lin_chanvre,
        vignes: faction.ECONOMIE.can_grow_vines ? (hectares_agricoles_total * alloc.vignes) : 0,
        houblon: hectares_agricoles_total * alloc.houblon,
        pomme_de_terre: hectares_agricoles_total * alloc.pomme_de_terre,
        legumes_fruits: hectares_agricoles_total * alloc.legumes_fruits,
        betail: hectares_agricoles_total * alloc.betail,
        moutons: hectares_agricoles_total * alloc.moutons,
        porcins: faction.ECONOMIE.can_raise_pigs ? (hectares_agricoles_total * alloc.porcins) : 0,
        olives: faction.ECONOMIE.can_grow_olives ? (hectares_agricoles_total * alloc.olives) : 0,
    };
    
    // Réallocation pour les factions avec restrictions
    let reallocation = 0;
    if (!faction.ECONOMIE.can_grow_vines) reallocation += hectares_agricoles_total * alloc.vignes;
    if (!faction.ECONOMIE.can_raise_pigs) reallocation += hectares_agricoles_total * alloc.porcins;
    if (!faction.ECONOMIE.can_grow_olives) reallocation += hectares_agricoles_total * alloc.olives;
    hectares.betail += reallocation / 2; // Réalloue aux animaux
    hectares.moutons += reallocation / 2; 

    faction.ECONOMIE.agriculture.hectares = hectares;
    
    // 2. Calculer la Production (Prod = Hectares * Rendement)
    
    // Bonus de rendement des machines
    const bonus_batteuse = (faction.ECONOMIE.agriculture.machines_deployees.batteuses || 0) * (AGRICULTURE_MACHINE_BONUS.batteuse || 0);
    const bonus_outils = (faction.ECONOMIE.agriculture.machines_deployees.outils || 0) * (AGRICULTURE_MACHINE_BONUS.outils || 0);
    const bonus_cereales = bonus_batteuse + bonus_outils;

    const prod = {
        ble: hectares.ble * (YIELDS_METROPOLE.ble + bonus_cereales),
        orge: hectares.orge * (YIELDS_METROPOLE.orge + bonus_cereales),
        avoine: hectares.avoine * (YIELDS_METROPOLE.avoine + bonus_cereales),
        lin_chanvre: hectares.lin_chanvre * YIELDS_METROPOLE.lin_chanvre,
        vignes: hectares.vignes * YIELDS_METROPOLE.vignes,
        houblon: hectares.houblon * YIELDS_METROPOLE.houblon,
        pomme_de_terre: hectares.pomme_de_terre * (YIELDS_METROPOLE.pomme_de_terre + bonus_outils),
        legumes_fruits: hectares.legumes_fruits * (YIELDS_METROPOLE.legumes_fruits + bonus_outils),
        viande_boeuf: hectares.betail * YIELDS_METROPOLE.betail.viande_boeuf,
        cuir: hectares.betail * YIELDS_METROPOLE.betail.cuir,
        viande_mouton: hectares.moutons * YIELDS_METROPOLE.moutons.viande_mouton,
        laine: hectares.moutons * YIELDS_METROPOLE.moutons.laine,
        viande_porc: hectares.porcins * YIELDS_METROPOLE.porcins.viande_porc,
        suif: hectares.porcins * YIELDS_METROPOLE.porcins.suif,
        olives: hectares.olives * YIELDS_METROPOLE.olives,
    };
    faction.ECONOMIE.agriculture.production = prod;

    // --- Ajout de la production physique aux stocks ---
    const stocks = faction.RESERVES.stock_matieres_premieres;
    // LIGNES AJOUTÉES (NOURRITURE)
    stocks.ble = (stocks.ble || 0) + prod.ble;
    stocks.orge = (stocks.orge || 0) + prod.orge;
    stocks.avoine = (stocks.avoine || 0) + prod.avoine;
    stocks.pomme_de_terre = (stocks.pomme_de_terre || 0) + prod.pomme_de_terre;
    stocks.legumes_fruits = (stocks.legumes_fruits || 0) + prod.legumes_fruits;
    stocks.viande_boeuf = (stocks.viande_boeuf || 0) + prod.viande_boeuf;
    stocks.viande_mouton = (stocks.viande_mouton || 0) + prod.viande_mouton;
    stocks.viande_porc = (stocks.viande_porc || 0) + prod.viande_porc;
    // FIN LIGNES AJOUTÉES
    stocks.laine = (stocks.laine || 0) + prod.laine;
    stocks.lin_chanvre = (stocks.lin_chanvre || 0) + prod.lin_chanvre;
    stocks.cuir = (stocks.cuir || 0) + prod.cuir;
    stocks.suif = (stocks.suif || 0) + prod.suif;
    stocks.olives = (stocks.olives || 0) + prod.olives;
    
    // --- Gestion du Bois ---
    const foret = faction.INFRASTRUCTURE.foret;
    const prodDurable = foret.production_durable;
    const tauxExploitation = faction.MODIFICATEURS.taux_exploitation_bois;
    const prodReelleBois = prodDurable * tauxExploitation;
    
    stocks.bois = (stocks.bois || 0) + prodReelleBois; 
    
    const difference = prodReelleBois - prodDurable;
    if (difference > 0) { 
        const hectaresPerdus = difference / GAME_SETTINGS.RESSOURCE_CONVERSION.surexploitation_bois_cout_ha;
        foret.hectares -= hectaresPerdus;
        if (faction.nom === GAME_STATE.currentPlayer && GAME_STATE.anneeActuelle > 1) {
            logToUI(`Surexploitation ! ${hectaresPerdus.toFixed(0)} ha de forêt perdus.`, 'error');
        }
    } else if (difference < 0) { 
        const hectaresGagnes = Math.abs(difference) / (GAME_SETTINGS.RESSOURCE_CONVERSION.surexploitation_bois_cout_ha * 2);
        foret.hectares += hectaresGagnes;
    }
    
    // --- NOUVEAU : Gestion du Poisson ---
    const prodPoisson = (faction.MARINE.navires_peche || 0) * YIELDS_NAVAL.poisson_par_bateau_kg;
    stocks.poisson = (stocks.poisson || 0) + prodPoisson;
    
    
    // 3. Calculer la Consommation et la Valeur
    const food_conso_total = pop * CONSUMPTION_RATES.food_per_capita;
    
    const food_prod_total = 
        (prod.ble * CONSUMPTION_RATES.food_value.ble) +
        (prod.pomme_de_terre * CONSUMPTION_RATES.food_value.pomme_de_terre) +
        (prod.legumes_fruits * CONSUMPTION_RATES.food_value.legumes_fruits) +
        (prod.viande_boeuf * CONSUMPTION_RATES.food_value.viande_boeuf) +
        (prod.viande_mouton * CONSUMPTION_RATES.food_value.viande_mouton) +
        (prod.viande_porc * CONSUMPTION_RATES.food_value.viande_porc) +
        (prodPoisson * CONSUMPTION_RATES.food_value.poisson); // Ajout poisson
        
    const net_food = food_prod_total - food_conso_total;
    faction.ETAT_DYNAMIQUE.net_food = net_food;
    
    // 4. Calculer la Valeur Totale (RNB Agricole)
    let valeur_totale = 0;
    valeur_totale += prod.ble * PRICES_METROPOLE.ble;
    valeur_totale += prod.orge * PRICES_METROPOLE.orge;
    valeur_totale += prod.avoine * PRICES_METROPOLE.avoine;
    valeur_totale += prod.lin_chanvre * PRICES_METROPOLE.lin_chanvre;
    valeur_totale += prod.vignes * PRICES_METROPOLE.vin; // Vignes produit direct du Vin (simplifié)
    valeur_totale += prod.houblon * PRICES_METROPOLE.houblon;
    valeur_totale += prod.pomme_de_terre * PRICES_METROPOLE.pomme_de_terre;
    valeur_totale += prod.legumes_fruits * PRICES_METROPOLE.legumes_fruits;
    valeur_totale += prod.viande_boeuf * PRICES_METROPOLE.viande_boeuf;
    valeur_totale += prod.cuir * PRICES_METROPOLE.cuir;
    valeur_totale += prod.viande_mouton * PRICES_METROPOLE.viande_mouton;
    valeur_totale += prod.laine * PRICES_METROPOLE.laine;
    valeur_totale += prod.viande_porc * PRICES_METROPOLE.viande_porc;
    valeur_totale += prod.suif * PRICES_METROPOLE.suif;
    valeur_totale += prod.olives * PRICES_METROPOLE.olives;
    
    valeur_totale += prodReelleBois * PRICES_METROPOLE.bois;
    valeur_totale += prodPoisson * PRICES_METROPOLE.poisson;

    faction.ECONOMIE.agriculture.valeur_totale = valeur_totale;
    
    // Retourne la valeur totale pour le calcul du RNB
    return valeur_totale;
}

/**
 * Calcule la Valeur Commerciale Totale dynamique (Navires + Production Coloniale).
 * (MODIFIÉ: Gère le RNB des bâtiments coloniaux et les bonus de production)
 * @param {object} faction - L'objet faction.
 * @returns {number} - La Valeur Commerciale Totale (pour les douanes).
 */
function calculerValeurCommerciale(faction) {
    let valeurProductionColoniale = 0; 
    
    faction.RESERVES.stock_matieres_premieres.ble_colonial = 0;
    
    // NOUVEAU: Réinitialise les productions spéciales
    faction.RESERVES.stock_matieres_premieres.or_kg = 0;
    faction.RESERVES.stock_matieres_premieres.argent_kg = 0;
    // (Le cuir est géré dans calculerProductionAgricole, mais nous l'ajoutons ici pour les ranchs)

    // 1. Valeur de la Production Coloniale (Dynamique)
    const calculerProdSource = (source, isVille = false) => {
        // 'source' peut être une ville (avec .projets) ou la campagne (sans .projets)
        const terres = source.terres_cultivees || {};
        const projets = source.projets || [];
        
        // Calcule le multiplicateur de production de base (Esclaves + Bâtiments)
        let pop_colons = source.pop_colons || faction.ETAT_DYNAMIQUE.population_colonies.campagne_colons || 1;
        let pop_esclaves = source.pop_esclaves || faction.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves || 0;
        const ratioEsclaves = pop_esclaves / (pop_colons + 1);
        let prodMult = 1.0 + (ratioEsclaves * 0.5);
        
        // Ajoute les bonus des projets de la ville
        projets.forEach(projetKey => {
            const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
            if (def && def.bonus_production_ville_pct) {
                prodMult *= (1 + def.bonus_production_ville_pct);
            }
        });
        
        // Calcule la production des terres (Plantations)
        Object.keys(terres).forEach(cropKey => {
            const hectares = terres[cropKey] || 0;
            const rendement = YIELD_PER_HECTARE[cropKey] || 0;
            let prix = GAME_PRICES[cropKey] || 0;
            
            const qteActuelle = (hectares * rendement) * prodMult;
            
            // Applique les bonus de VALEUR (Raffinerie, etc.)
            let valeurBonus = 0;
            projets.forEach(projetKey => {
                const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
                if (def) {
                    if (cropKey === 'sucre_kg' && def.bonus_valeur_rnb_sucre_pct) {
                        valeurBonus += (qteActuelle * prix) * def.bonus_valeur_rnb_sucre_pct;
                    }
                    if (cropKey === 'coton_kg' && def.bonus_valeur_rnb_coton_pct) {
                        valeurBonus += (qteActuelle * prix) * def.bonus_valeur_rnb_coton_pct;
                    }
                    if (cropKey === 'tabac_kg' && def.bonus_valeur_rnb_tabac_pct) {
                        valeurBonus += (qteActuelle * prix) * def.bonus_valeur_rnb_tabac_pct;
                    }
                }
            });

            valeurProductionColoniale += (qteActuelle * prix) + valeurBonus;
            
            if (cropKey === 'ble_kg') {
                faction.RESERVES.stock_matieres_premieres.ble_colonial += qteActuelle;
            }
        });
        
        // NOUVEAU: Ajoute le RNB des Bâtiments Coloniaux (Mines, Pêche, etc.)
        // Uniquement pour les VILLES
        if (isVille) {
            projets.forEach(projetKey => {
                const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
                if (def) {
                    if (def.rbn_bonus) {
                        valeurProductionColoniale += def.rbn_bonus;
                    }
                    // Gérer les productions spéciales (Or, Argent, Cuir)
                    if (def.production_or_kg) {
                        const qteOr = def.production_or_kg; // TODO: Lier aux niveaux
                        faction.RESERVES.stock_matieres_premieres.or_kg += qteOr;
                        valeurProductionColoniale += (qteOr * (GAME_STATE.PRIX_MARCHE.or_kg || 50000));
                    }
                    if (def.production_argent_kg) {
                        const qteArgent = def.production_argent_kg; // TODO: Lier aux niveaux
                        faction.RESERVES.stock_matieres_premieres.argent_kg += qteArgent;
                        valeurProductionColoniale += (qteArgent * (GAME_STATE.PRIX_MARCHE.argent_kg || 5000));
                    }
                    if (def.production_cuir_base) { // Pour le Ranch
                        const qteCuir = def.production_cuir_base;
                        faction.RESERVES.stock_matieres_premieres.cuir += qteCuir;
                        let valeurCuir = qteCuir * (PRICES_METROPOLE.cuir || 3.5);
                        
                        // Vérifie si une tannerie est présente pour appliquer le bonus
                        const tannerie = projets.find(p => BUILD_DEFINITIONS.batiments_speciaux[p]?.bonus_valeur_rnb_cuir_pct);
                        if (tannerie) {
                            valeurCuir *= (1 + BUILD_DEFINITIONS.batiments_speciaux[tannerie].bonus_valeur_rnb_cuir_pct);
                        }
                        valeurProductionColoniale += valeurCuir;
                    }
                }
            });
        }
    };

    // 1a. Production des Villes
    faction.COLONIES.villes.forEach(ville => {
        calculerProdSource(ville, true); // true = est une ville
    });
    
    // 1b. Production de la "Campagne"
    const campagne = {
        terres_cultivees: faction.COLONIES.campagne_terres_cultivees,
        production_mult: faction.COLONIES.production_mult
    };
    calculerProdSource(campagne, false); // false = n'est pas une ville
    
    // 1c. Ajout des Fourrures
    valeurProductionColoniale += (faction.COLONIES.production_fourrures_base * faction.COLONIES.production_mult) * GAME_PRICES["fourrure_piece"];

    // 2. Calculer la Valeur des Navires Marchands
    let valeurNavires = 0;
    const marchands = faction.MARINE.navires_marchands;
    valeurNavires += (marchands["5-50t"] || 0) * GAME_SETTINGS.PUISSANCE_COMMERCIALE["5-50t"];
    valeurNavires += (marchands["50-100t"] || 0) * GAME_SETTINGS.PUISSANCE_COMMERCIALE["50-100t"];
    valeurNavires += (marchands["100-250t"] || 0) * GAME_SETTINGS.PUISSANCE_COMMERCIALE["100-250t"];
    valeurNavires += (marchands["+250t"] || 0) * GAME_SETTINGS.PUISSANCE_COMMERCIALE["+250t"];

    // Valeur Commerciale Totale = Valeur des Navires + Valeur de la Production Coloniale
    let valeurTotale = valeurNavires + valeurProductionColoniale;
    
    // 3. Appliquer les bonus des grands projets (Métropole)
    faction.INFRASTRUCTURE.projets_infra_completes.forEach(key => {
        const def = BUILD_DEFINITIONS.grands_projets[key];
        if (def && def.bonus_vct_pct) {
            valeurTotale *= (1 + def.bonus_vct_pct);
        }
    });
    
    // 4. Appliquer les bonus des Projets Urbains (Métropole)
    faction.INFRASTRUCTURE.villes.forEach(ville => {
        ville.projets.forEach(projetKey => {
            const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
            if (def && def.bonus_vct_pct) {
                valeurTotale *= (1 + def.bonus_vct_pct);
            }
        });
    });

    faction.ECONOMIE.valeur_commerciale_totale = valeurTotale;
    
    return valeurTotale;
}

// =======================================================
// ===== DÉBUT DU BLOC AJOUTÉ (FONCTIONS MANQUANTES) =====
// =======================================================

/**
 * NOUVEAU (Correctif) : Calcule la recette d'une tranche d'impôt direct.
 * @param {string} tranche - 'haut', 'moyen', ou 'bas'.
 * @param {object} faction - L'objet faction.
 * @returns {number} - Le revenu fiscal de cette tranche.
 */
function calculerRecetteImpotDirect(tranche, faction) {
    if (!faction || !faction.ECONOMIE.impots.tranches[tranche] || !faction.ETAT_DYNAMIQUE.tranches_revenus[tranche]) {
        console.warn(`Données manquantes pour la tranche d'impôt ${tranche}`);
        return 0;
    }

    const f = faction.ETAT_DYNAMIQUE;
    const eco = faction.ECONOMIE;
    
    const taux = eco.impots.tranches[tranche].taux;
    const revenuDeLaTranche = f.tranches_revenus[tranche].revenu;
    
    // L'efficacité administrative et la stabilité affectent la collecte des impôts directs
    const modEfficacite = f.efficacite_admin / 100;
    // 100 Stabilité = 100% collecte. 50 Stabilité = 75% collecte. 10 Stabilité = 55% collecte.
    const modStabilite = (f.stabilite / 100) * 0.5 + 0.5; 

    const recetteBrute = revenuDeLaTranche * taux;
    const recetteNette = recetteBrute * modEfficacite * modStabilite;
    
    return recetteNette;
}

/**
 * NOUVEAU (Correctif) : Calcule la recette d'un impôt indirect.
 * @param {object} impot - L'objet impôt (ex: { nom: "Gabelle", ... }).
 * @param {object} faction - L'objet faction.
 * @returns {number} - Le revenu fiscal de cet impôt.
 */
function calculerRecetteImpotIndirect(impot, faction) {
    if (!impot || !faction) return 0;

    const f = faction.ETAT_DYNAMIQUE;
    const pop = f.population_metropole;
    const vct = faction.ECONOMIE.valeur_commerciale_totale;
    
    // L'efficacité administrative et la stabilité affectent la collecte
    const modEfficacite = f.efficacite_admin / 100;
    // 100 Stabilité = 100% collecte. 50 Stabilité = 75% collecte. 10 Stabilité = 55% collecte.
    const modStabilite = (f.stabilite / 100) * 0.5 + 0.5;
    
    let recetteBrute = 0;

    if (impot.nom === "Douanes") {
        let bonusDouane = 0;
        // Bonus de l'Entrepôt Royal (#5)
        (faction.INFRASTRUCTURE.ports_commerciaux || []).forEach(b => {
            const def = BUILD_DEFINITIONS.infrastructures_commerciales[b.type];
            if(def && def.bonus_douane_pct) {
                bonusDouane += def.bonus_douane_pct;
            }
        });
        recetteBrute = (vct * (impot.taux_effectif + bonusDouane)) + (impot.base || 0);

    } else if (impot.nom === "Droits de Mouillage") {
        let bonusMouillage = 0;
        // Bonus de la Chambre de Commerce (#4) et Entrepôt (#5)
        (faction.INFRASTRUCTURE.ports_commerciaux || []).forEach(b => {
            const def = BUILD_DEFINITIONS.infrastructures_commerciales[b.type];
            if(def && def.bonus_mouillage_pct) {
                bonusMouillage += def.bonus_mouillage_pct;
            }
        });
        recetteBrute = (vct * (impot.taux_effectif + bonusMouillage)) + (impot.base || 0);

    } else {
        // Cas standard (Gabelle, Loteries, Aides) : base par habitant
        recetteBrute = (pop * impot.rendement_habitant) + (impot.base || 0);
    }

    const recetteNette = recetteBrute * modEfficacite * modStabilite;
    
    return recetteNette;
}

// =======================================================
// ===== FIN DU BLOC AJOUTÉ (FONCTIONS MANQUANTES) =======
// =======================================================


/**
 * Calcule le total de toutes les recettes pour l'année.
 * (MODIFIÉ: Gère le RNB par production de biens finis + Tranches de revenus)
 * @param {object} faction - L'objet faction.
 * @returns {number} - Le total des recettes.
 */
function calculerToutesRecettes(faction) {
    let total = 0;
    const stocks = faction.RESERVES.stock_matieres_premieres;
            
    // --- ÉTAPE 1: Production primaire ---
    calculerProductionAgricole(faction); // (Inclut agriculture, forêt, pêche)
    calculerValeurCommerciale(faction); // (Inclut colonies + flotte)

    // --- ÉTAPE 2: Production des matières premières minières ---
    let rnb_mines = 0;
    faction.INFRASTRUCTURE.mines.forEach(mine => {
        const def = BUILD_DEFINITIONS.mines[mine.type];
        if (!def) return;
        if (def.prod_fer) rnb_mines += (def.prod_fer * PRICES_METROPOLE.fer);
        if (def.prod_cuivre) rnb_mines += (def.prod_cuivre * PRICES_METROPOLE.cuivre);
        if (def.prod_charbon) rnb_mines += (def.prod_charbon * PRICES_METROPOLE.charbon);
        if (def.prod_sel) rnb_mines += (def.prod_sel * PRICES_METROPOLE.sel);
    });

    // --- ÉTAPE 3: Production industrielle (Biens Finis) ---
    // (Consomme les stocks, produit des biens finis dans les stocks)
    let rnb_industrie_finie = 0;
    let bonus_rnb_industrie_pct = 0; // Pour #17

    // Cherche le bonus #17
    (faction.INFRASTRUCTURE.manufactures_avancees || []).forEach(b => {
        const def = BUILD_DEFINITIONS.manufactures_avancees[b.type];
        if (def && def.bonus_rnb_industrie_pct) {
            bonus_rnb_industrie_pct += def.bonus_rnb_industrie_pct;
        }
    });
    
    // Armes
    faction.INFRASTRUCTURE.manufactures_armes.forEach(manu => {
        const def = BUILD_DEFINITIONS.manufactures_armes[manu.type];
        if (!def) return;
        
        if (def.prod_fusil) rnb_industrie_finie += (def.prod_fusil * PRICES_METROPOLE.fusil);
        if (def.prod_canon_terre) rnb_industrie_finie += (def.prod_canon_terre * PRICES_METROPOLE.canon_terre);
        if (def.prod_canon_mer) rnb_industrie_finie += (def.prod_canon_mer * PRICES_METROPOLE.canon_mer);
        if (def.prod_poudre) rnb_industrie_finie += (def.prod_poudre * PRICES_METROPOLE.poudre);
    });
    
    // Civile
    faction.INFRASTRUCTURE.manufactures_civiles.forEach(manu => {
        const def = BUILD_DEFINITIONS.manufactures_civiles[manu.type];
        if (!def) return; 
        
        let bonus_moteur = (manu.moteur_installe || false) ? 1.10 : 1.0;
        
        if (def.rbn_bonus) rnb_industrie_finie += def.rbn_bonus; // (Pour Imprimerie)
        if (def.prod_habits) rnb_industrie_finie += (def.prod_habits * PRICES_METROPOLE.habits * bonus_moteur);
        if (def.prod_verre_cristal) rnb_industrie_finie += (def.prod_verre_cristal * PRICES_METROPOLE.verre_cristal * bonus_moteur);
        if (def.prod_biere) rnb_industrie_finie += (def.prod_biere * PRICES_METROPOLE.biere * bonus_moteur);
        if (def.prod_voiles) rnb_industrie_finie += (def.prod_voiles * PRICES_METROPOLE.voiles * bonus_moteur);
        if (def.prod_cordages) rnb_industrie_finie += (def.prod_cordages * PRICES_METROPOLE.cordages * bonus_moteur);
        if (def.prod_papier) rnb_industrie_finie += (def.prod_papier * PRICES_METROPOLE.papier * bonus_moteur);
        if (def.prod_savon) rnb_industrie_finie += (def.prod_savon * PRICES_METROPOLE.savon * bonus_moteur);
        if (def.prod_huile_olive) rnb_industrie_finie += (def.prod_huile_olive * PRICES_METROPOLE.huile_olive * bonus_moteur);
        if (def.prod_meubles) rnb_industrie_finie += (def.prod_meubles * PRICES_METROPOLE.meubles * bonus_moteur);
        if (def.prod_journaux) rnb_industrie_finie += (def.prod_journaux * PRICES_METROPOLE.journaux);
        if (def.prod_livres) rnb_industrie_finie += (def.prod_livres * PRICES_METROPOLE.livres);
        // NOUVEAU : RNB des Haras
        if (def.prod_chevaux) rnb_industrie_finie += (def.prod_chevaux * (GAME_STATE.PRIX_MARCHE.cheval || 500));
    });
    
    // Avancée
    faction.INFRASTRUCTURE.manufactures_avancees.forEach(manu => {
        const def = BUILD_DEFINITIONS.manufactures_avancees[manu.type];
        if (!def) return;
        
        let rbn_batiment = 0;
        if (def.rbn_bonus) rbn_batiment += def.rbn_bonus;
        if (def.prod_machines_agri) rbn_batiment += (def.prod_machines_agri * PRICES_METROPOLE.machines_agri);
        if (def.prod_moteurs_vapeur) rbn_batiment += (def.prod_moteurs_vapeur * PRICES_METROPOLE.moteurs_vapeur);
        if (def.prod_outils_agricoles) rbn_batiment += (def.prod_outils_agricoles * PRICES_METROPOLE.outils_agricoles);
        
        rbn_batiment *= (1 + bonus_rnb_industrie_pct); // Applique bonus #17
        rnb_industrie_finie += rbn_batiment;
    });
    
    // Luxe
    faction.INFRASTRUCTURE.manufactures_luxe.forEach(manu => {
        const def = BUILD_DEFINITIONS.manufactures_luxe[manu.type];
        if (!def) return;
        
        let rbn_batiment = 0;
        if (def.prod_tissu_soie) rbn_batiment += (def.prod_tissu_soie * PRICES_METROPOLE.tissu_soie);
        if (def.prod_porcelaine) rbn_batiment += (def.prod_porcelaine * PRICES_METROPOLE.porcelaine);
        if (def.prod_horloges) rbn_batiment += (def.prod_horloges * PRICES_METROPOLE.horloges);
        if (def.prod_bijoux) rbn_batiment += (def.prod_bijoux * PRICES_METROPOLE.bijoux);
        if (def.prod_art) rbn_batiment += (def.prod_art * PRICES_METROPOLE.art);
        
        rbn_batiment *= (1 + bonus_rnb_industrie_pct); // Applique bonus #17
        rnb_industrie_finie += rbn_batiment;
    });
    
    // RNB Bâtiments (Banques, Projets, Éducation...)
    let rnb_batiments_bonus = 0;

    // Helper sécurisé pour lire les bonus RNB
    const addBonus = (list, definitions) => {
        (list || []).forEach(item => {
            // 'item.type' pour les listes d'objets (ex: banques, arsenaux)
            const def = definitions[item.type]; 
            if (def && def.rbn_bonus) {
                rnb_batiments_bonus += def.rbn_bonus;
            }
        });
    };

    addBonus(faction.INFRASTRUCTURE.arsenaux, BUILD_DEFINITIONS.infrastructures_navales);
    addBonus(faction.INFRASTRUCTURE.ports_commerciaux, BUILD_DEFINITIONS.infrastructures_commerciales);
    addBonus(faction.INFRASTRUCTURE.banques, BUILD_DEFINITIONS.banques);
    addBonus(faction.INFRASTRUCTURE.batiments_speciaux, BUILD_DEFINITIONS.batiments_speciaux);
    
    // Bâtiments Spéciaux (Éducation, Santé, Admin...)
    const b_speciaux = BUILD_DEFINITIONS.batiments_speciaux;
    rnb_batiments_bonus += (b_speciaux.universite.rbn_bonus * faction.INFRASTRUCTURE.universites) || 0;
    rnb_batiments_bonus += (b_speciaux.lycee.rbn_bonus * faction.INFRASTRUCTURE.lycees) || 0;
    rnb_batiments_bonus += (b_speciaux.ecole_primaire.rbn_bonus * faction.INFRASTRUCTURE.ecoles_primaires) || 0;
    rnb_batiments_bonus += (b_speciaux.ecole_militaire.rbn_bonus * faction.ARMEE.ecoles_militaires) || 0;
    rnb_batiments_bonus += (b_speciaux.ecole_navale.rbn_bonus * faction.MARINE.ecoles_navales) || 0;
    rnb_batiments_bonus += (b_speciaux.hopital_civil.rbn_bonus * faction.INFRASTRUCTURE.hopitaux_civils) || 0;
    rnb_batiments_bonus += (b_speciaux.hopital_militaire.rbn_bonus * faction.INFRASTRUCTURE.hopitaux_militaires) || 0;

    // RNB des Projets Urbains (construits dans les villes)
    faction.INFRASTRUCTURE.villes.forEach(ville => {
        ville.projets.forEach(projetKey => {
            // Recherche SEULEMENT dans les projets urbains (métropole)
            const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
            if (def && def.rbn_bonus) {
                rnb_batiments_bonus += def.rbn_bonus;
            }
        });
    });

    // RNB des Forteresses
    const b_forts = BUILD_DEFINITIONS.forteresses;
    rnb_batiments_bonus += (b_forts.forteresse_1.rbn_bonus * faction.INFRASTRUCTURE.forteresses.f1) || 0;
    rnb_batiments_bonus += (b_forts.forteresse_2.rbn_bonus * faction.INFRASTRUCTURE.forteresses.f2) || 0;
    rnb_batiments_bonus += (b_forts.forteresse_3.rbn_bonus * faction.INFRASTRUCTURE.forteresses.f3_4) || 0; // (Utilise coût F3 pour la moyenne)
    rnb_batiments_bonus += (b_forts.fort_colonial.rbn_bonus * faction.COLONIES.forts_coloniaux) || 0;


    // --- ÉTAPE 4: Calcul Final du RNB (VERSION SYSTÉMIQUE) ---
    const rnb_agricole = faction.ECONOMIE.agriculture.valeur_totale; // (Inclut Poisson, Forêt)
    const rnb_commerce_colonial = faction.ECONOMIE.valeur_commerciale_totale; // (Inclut Flotte + Colonies)
    
    // (Le RNB est la somme de l'agriculture, l'industrie, le commerce, les mines, et les bonus)
    faction.ECONOMIE.revenu_national_brut = 
        rnb_agricole + 
        rnb_mines + 
        rnb_industrie_finie + 
        rnb_commerce_colonial + 
        rnb_batiments_bonus;
    
    faction.ECONOMIE.rnb_base_agricole = rnb_agricole; // (Gardé pour les événements)
    faction.ECONOMIE.rnb_detail = {
        agricole: rnb_agricole,
        minier: rnb_mines,
        industriel: rnb_industrie_finie,
        commercial: rnb_commerce_colonial,
        batiments: rnb_batiments_bonus
    };
    
    // NOUVEAU : Met à jour la base de revenu des tranches (votre idée)
    const rbn_dynamique = faction.ECONOMIE.revenu_national_brut;
    faction.ETAT_DYNAMIQUE.tranches_revenus.haut.revenu = rbn_dynamique * faction.ECONOMIE.impots.tranches.haut.rnb_ratio;
    faction.ETAT_DYNAMIQUE.tranches_revenus.moyen.revenu = rbn_dynamique * faction.ECONOMIE.impots.tranches.moyen.rnb_ratio;
    faction.ETAT_DYNAMIQUE.tranches_revenus.bas.revenu = rbn_dynamique * faction.ECONOMIE.impots.tranches.bas.rnb_ratio;

    // --- ÉTAPE 5: Calcul des Recettes Fiscales ---
    
    // Impôts directs par tranche
    total += calculerRecetteImpotDirect('haut', faction);
    total += calculerRecetteImpotDirect('moyen', faction);
    total += calculerRecetteImpotDirect('bas', faction);
    
    // --- CORRECTION : BOUCLE DES IMPÔTS INDIRECTS RESTAURÉE ---
    faction.ECONOMIE.impots.indirects.forEach(impot => {
        let revenuImpot = calculerRecetteImpotIndirect(impot, faction); // Appelle la fonction
                    
        // NOUVEAU : Bonus 'Comptoir des Changes' (#6)
        if (impot.nom === "Douanes") {
            let bonusComptoir = 0;
            (faction.INFRASTRUCTURE.ports_commerciaux || []).forEach(b => {
                const def = BUILD_DEFINITIONS.infrastructures_commerciales[b.type];
                if(def && def.bonus_revenu_douane_pct) {
                    bonusComptoir += def.bonus_revenu_douane_pct;
                }
            });
            revenuImpot *= (1 + bonusComptoir);
        }
        total += revenuImpot;
    });
    // --- FIN CORRECTION ---
    
    // MODIFIÉ (Point 7) - Revenus du Domaine de l'État
    const domaine = faction.ECONOMIE.domaine_etat;
    const pop = faction.ETAT_DYNAMIQUE.population_metropole;
    const percepteursActuels = pop / faction.MODIFICATEURS.ratio_percepteurs;
    const percepteursBase = pop / RATIO_BASE_ADMIN.percepteurs;
    // Calcule le nombre de "blocs" de 1000 percepteurs supplémentaires
    const bonusPercepteurs = Math.floor(Math.max(0, percepteursActuels - percepteursBase) / 1000); 
    
    const revenuHaDomaine = domaine.revenu_par_ha_base + bonusPercepteurs; // +1 livre par 1000 percepteurs
    domaine.revenu_total = domaine.hectares * revenuHaDomaine;
    total += domaine.revenu_total;
    
    // --- NOUVEAU : Bonus 'Institut de Statistique' (#2) & 'Banque Centrale' (#24) ---
    let bonusFiscal = 0;
    (faction.INFRASTRUCTURE.batiments_speciaux || []).forEach(b => {
        const def = BUILD_DEFINITIONS.batiments_speciaux[b.type];
        if (def && def.bonus_revenus_fiscaux_pct) {
            bonusFiscal += def.bonus_revenus_fiscaux_pct;
        }
    });
    (faction.INFRASTRUCTURE.banques || []).forEach(b => {
        const def = BUILD_DEFINITIONS.banques[b.type];
        if (def && def.bonus_revenus_fiscaux_pct) {
            bonusFiscal += def.bonus_revenus_fiscaux_pct;
        }
    });
    
    total *= (1 + bonusFiscal);
    if (bonusFiscal > 0 && faction.nom === GAME_STATE.currentPlayer) {
        logToUI(`Les institutions financières et statistiques augmentent les revenus fiscaux de +${(bonusFiscal * 100).toFixed(1)}%.`, "info");
    }
    // --- FIN NOUVEAU BLOC ---
    
    faction.ECONOMIE.recettes_totales = total;
    
    if (isNaN(total)) {
        console.error(`ERREUR FATALE: Recettes totales NaN.`);
        return 0; // Retourne 0 pour empêcher le plantage
    }
    
    return total;
}

/**
 * Calcule le total de toutes les dépenses pour l'année.
 * (MODIFIÉ: Refonte complète pour le budget détaillé)
 * @param {object} faction - L'objet faction.
 * @returns {number} - Le total des dépenses.
 */
function calculerToutesDepenses(faction) {
    let total = 0;
    const base = faction.ECONOMIE.salaires_base;
    const mods = faction.MODIFICATEURS;
    const budgets = faction.DEPENSES_BUDGET;
    const raw = faction.RAW_DATA;
    const pop = faction.ETAT_DYNAMIQUE.population_metropole;
    const isNonColonial = estNonColonial(faction);
    
    // 1. Dépenses de service (pilotées par sliders)
    
    // Salaires de l'État-Major (Core Admin) - MODIFIÉ : Gère le modificateur du ministre
    let c_admin = (base.administration || 0) * (mods.cout_admin_mod || 1.0);
    
    // --- NOUVEAU (Point 5) : Salaires Militaires Détaillés ---
    
    // A. Salaires Officiers de Terre (Basé sur la DEMANDE)
    const s_base_off_terre = base.officiers;
    // const demande_terre = faction.ARMEE.officiers_demand; // (Redondant, calculé ci-dessous)
    let c_salaire_officiers_terre = 0;
    
    // Helper function pour appliquer les multiplicateurs de salaire
    const calculerBlocSalaireOfficiers = (demandeBloc, modificateur) => {
        let sous_total = 0;
        sous_total += (demandeBloc.general_division || 0) * s_base_off_terre.general_division * modificateur;
        sous_total += (demandeBloc.general_brigade || 0) * s_base_off_terre.general_brigade * modificateur;
        sous_total += (demandeBloc.colonel || 0) * s_base_off_terre.colonel * modificateur;
        sous_total += (demandeBloc.lieutenant_colonel || 0) * s_base_off_terre.lieutenant_colonel * modificateur;
        sous_total += (demandeBloc.capitaine || 0) * s_base_off_terre.capitaine * modificateur;
        sous_total += (demandeBloc.lieutenant || 0) * s_base_off_terre.lieutenant * modificateur;
        return sous_total;
    };

    // Calcule la demande par type (infanterie, cavalerie, etc.)
    const demandeParType = {
        infanterie_ligne: { ...OFFICIER_HIERARCHIE_COUT },
        grenadiers: { ...OFFICIER_HIERARCHIE_COUT },
        cavalerie: { ...OFFICIER_HIERARCHIE_COUT },
        artillerie: { ...OFFICIER_HIERARCHIE_COUT },
        garde: { ...OFFICIER_HIERARCHIE_COUT },
        genie: { ...OFFICIER_HIERARCHIE_COUT } // NOUVEAU (Point 9)
    };

    // B. Salaires Soldats & Sous-Officiers de Terre (Basé sur la DEMANDE)
    let c_salaire_soldats = 0;
    let c_salaire_nco = 0;
    let c_salaire_officiers_terre_total = 0; // Total pour tous les officiers de terre

    const doctrine = faction.ARMEE.doctrine;

    faction.ARMEE.regiments.forEach(reg => {
        const def = RECRUIT_DEFINITIONS[reg.type];
        if (!def) return;

        let mod_salaire = 1.0;
        let typeDemande = 'infanterie_ligne'; // Type par défaut

        if (reg.type.includes("Grenadiers")) {
            mod_salaire = 1.1;
            typeDemande = 'grenadiers';
        // MODIFIÉ (Point 9) - Ajout du Génie
        } else if (def.type === "Génie") {
            mod_salaire = 1.2;
            typeDemande = 'genie';
        } else if (def.type === "Cavalerie" || def.type === "Artillerie" || def.type === "Garde") {
            mod_salaire = 1.2;
            if (def.type === "Cavalerie") typeDemande = 'cavalerie';
            else if (def.type === "Artillerie") typeDemande = 'artillerie';
            else typeDemande = 'garde';
        }

        // Calcul de la demande d'officiers et NCOs POUR CE REGIMENT
        const demandeReg = calculerBesoinOfficiersRegiment(reg, doctrine); // <--- Ligne 9491
        
        // Ajoute au total par type
        Object.keys(demandeReg).forEach(rang => {
            if (demandeParType[typeDemande]) {
                demandeParType[typeDemande][rang] = (demandeParType[typeDemande][rang] || 0) + demandeReg[rang];
            }
        });

        // Calcul des salaires
        const nb_nco_reg = demandeReg.sous_officier || 0;
        const nb_soldats_purs_reg = Math.max(0, reg.effectif_actuel - (nb_nco_reg + demandeReg.lieutenant + demandeReg.capitaine + demandeReg.lieutenant_colonel + demandeReg.colonel));
        
        c_salaire_soldats += nb_soldats_purs_reg * base.soldat * mod_salaire;
        c_salaire_nco += nb_nco_reg * base.sous_officier * mod_salaire;
    });

    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.infanterie_ligne, 1.0);
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.grenadiers, 1.1);
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.cavalerie, 1.2);
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.artillerie, 1.2);
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.garde, 1.25);
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeParType.genie, 1.2); // (Point 9)

    // C. Coûts des officiers HORS-REGIMENTS (Forteresses, Territoire, Commandement)
    const demandeInfra = calculerBesoinOfficiersInfra(faction); // Nouvelle fonction helper
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeInfra, 1.0); // Mod=1.0 pour le staff

    // D. Coûts Garde Nationale (Point 8)
    const demandeGarde = calculerBesoinOfficiersGarde(faction); // Nouvelle fonction helper
    c_salaire_officiers_terre_total += calculerBlocSalaireOfficiers(demandeGarde, 1.1); // Mod=1.1 (arbitraire)
    const c_salaire_garde_nationale = faction.ARMEE.milice_metropole * GARDE_NATIONALE_SPECS.solde_jour * 365;

    // E. Total Salaires Militaires
    const c_mil_salaires = c_salaire_soldats + c_salaire_nco + c_salaire_officiers_terre_total + c_salaire_garde_nationale;
    
    // Stockage pour l'UI
    budgets.salaire_soldats_reel = c_salaire_soldats + c_salaire_garde_nationale; // Inclut la garde
    budgets.salaire_nco_reel = c_salaire_nco;
    budgets.salaire_officiers_terre_reel = c_salaire_officiers_terre_total;
    // --- Fin Point 5 ---


    // --- NOUVEAU (Point 3) : Salaires Marine Détaillés ---
    // A. Salaires Officiers de Marine (Hiérarchie)
    const s_base_off_marine = base.marine.officiers;
    const hier_marine = faction.MARINE.hierarchie_officiers;
    const c_salaire_officiers_marine = 
        (hier_marine.vice_amiraux * s_base_off_marine.vice_amiral) +
        (hier_marine.contre_amiraux * s_base_off_marine.contre_amiral) +
        (hier_marine.capitaines_vaisseau * s_base_off_marine.capitaine_vaisseau) +
        (hier_marine.lieutenants_vaisseau * s_base_off_marine.lieutenant_vaisseau) +
        (hier_marine.capitaines_corvette * s_base_off_marine.capitaine_corvette) +
        (hier_marine.lieutenants_corvette * s_base_off_marine.lieutenant_corvette);
        
    // B. Salaires Marins (Basé sur flotte ACTIVE)
    let total_marins_actifs = 0;
    faction.MARINE.flotte.forEach(navire => {
        if (navire.statut === 'arme' || navire.statut === 'radoub-requis' || navire.statut === 'en-radoub' || navire.statut === 'en-course') {
            total_marins_actifs += navire.pin_base * GAME_SETTINGS.MARINS_PAR_NAVIRE.guerre_par_pin;
        }
    });
    faction.RESERVES.marins_marine_guerre = total_marins_actifs; 
    
    const c_salaire_marins_base = total_marins_actifs * base.marine.marin_base;
    
    const c_marine_salaires = c_salaire_marins_base + c_salaire_officiers_marine;
    
    budgets.salaire_marins_reel = c_salaire_marins_base;
    budgets.salaire_officiers_marine_reel = c_salaire_officiers_marine;
    // --- Fin Point 3 ---

    // MODIFIÉ (Point 1) - Calcul détaillé des Pensions
    const demand = faction.ARMEE.officiers_demand;
    const supply_marine = faction.MARINE.hierarchie_officiers;

    let total_soldats_pensions = 0;
    faction.ARMEE.regiments.forEach(reg => {
        // (Point 9) - Le génie est inclus dans les pensions
        total_soldats_pensions += reg.effectif_actuel;
    });
    const total_officiers_terre = demand.general_division + demand.general_brigade + demand.colonel + demand.lieutenant_colonel + demand.capitaine + demand.lieutenant;
    const total_nco_terre = demand.sous_officier;
    // Calcule les soldats purs (Total - (Officiers + NCOs))
    const total_soldats_purs = total_soldats_pensions - total_officiers_terre - total_nco_terre;
    
    const total_marins_pensions = faction.RESERVES.marins_marine_guerre;
    const total_officiers_marine = supply_marine.vice_amiraux + supply_marine.contre_amiraux + supply_marine.capitaines_vaisseau + supply_marine.lieutenants_vaisseau + supply_marine.capitaines_corvette + supply_marine.lieutenants_corvette;

    let c_pensions = 0;
    c_pensions += (total_soldats_purs * 0.1) * 70;
    c_pensions += (total_nco_terre * 0.1) * 250;
    c_pensions += (total_officiers_terre * 0.1) * 3000;
    c_pensions += (total_marins_pensions * 0.1) * 150;
    c_pensions += (total_officiers_marine * 0.1) * 4000;
    
    
    // --- NOUVEAU : Coût d'entretien Pensions (Vétérans #19, Hospice #23) ---
    let bonusCoutPensions = 0;
    (faction.INFRASTRUCTURE.batiments_speciaux || []).forEach(b => {
        const def = BUILD_DEFINITIONS.batiments_speciaux[b.type];
        if (def && def.bonus_cout_pensions_pct) {
            bonusCoutPensions += def.bonus_cout_pensions_pct;
        }
    });
    faction.INFRASTRUCTURE.villes.forEach(ville => {
        ville.projets.forEach(projetKey => {
            const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
            if (def && def.bonus_cout_pensions_pct) {
                bonusCoutPensions += def.bonus_cout_pensions_pct;
            }
        });
    });
    c_pensions *= (1 + bonusCoutPensions);
    // --- FIN NOUVEAU BLOC ---
    
    // Appliquer le slider modificateur
    c_pensions *= mods.budget_pensions_mod;
    // FIN MODIFICATION (Point 1)
    
    // Dépenses par Ratio (MODIFIÉ: Applique le modificateur de l'Econome)
    const mod_services = mods.cout_services_publics_mod || 1.0;
    const c_police_ratio = (pop / mods.ratio_police) * SALAIRE_BASE_AGENT.gendarme * mod_services;
    const c_poste_ratio = (pop / mods.ratio_poste) * SALAIRE_BASE_AGENT.postier * mod_services;
    const c_percepteurs_ratio = (pop / mods.ratio_percepteurs) * SALAIRE_BASE_AGENT.percepteur * mod_services;


    // --- NOUVEAU (Groupe 2) : Entretien militaire logistique ---
    let total_soldats_armee = 0; // Renommé pour clarté
    faction.ARMEE.regiments.forEach(reg => {
        total_soldats_armee += reg.effectif_actuel;
    });
    
    // Coût des Rations (0.15 LT * 365 jours)
    const c_rations = total_soldats_armee * (GAME_SETTINGS.COUT_CONSTRUCTION.ration_jour * 365);
    // Coût des Uniformes (100 LT * 1 an)
    const c_uniformes = total_soldats_armee * GAME_SETTINGS.COUT_CONSTRUCTION.uniforme;
    // Coût de l'Entraînement (lu depuis la base)
    const c_entrainement = parseCSVNumber(raw["Coût"]);
    
    // --- NOUVEAU (Point 2) : Entretien Casernes ---
    let valeur_totale_forteresses = 0;
    valeur_totale_forteresses += (faction.INFRASTRUCTURE.forteresses.f1 || 0) * BUILD_DEFINITIONS.forteresses.forteresse_1.cout;
    valeur_totale_forteresses += (faction.INFRASTRUCTURE.forteresses.f2 || 0) * BUILD_DEFINITIONS.forteresses.forteresse_2.cout;
    valeur_totale_forteresses += (faction.INFRASTRUCTURE.forteresses.f3_4 || 0) * BUILD_DEFINITIONS.forteresses.forteresse_3.cout; // (Utilise coût F3 pour la moyenne)
    const c_entretien_casernes = valeur_totale_forteresses * GAME_SETTINGS.ENTRETIEN_CASERNES_RATIO;
    
    // --- NOUVEAU (Point 4) : Entretien Artillerie ---
    let c_entretien_artillerie_total = 0;
    faction.ARMEE.regiments.forEach(reg => {
        const def = RECRUIT_DEFINITIONS[reg.type];
        if (def && def.type === "Artillerie" && reg.equipement) {
            Object.keys(reg.equipement).forEach(type_canon => {
                const spec = ARTILLERIE_SPECS[type_canon] || ARTILLERIE_SPECS["default"];
                const nb_canons = reg.equipement[type_canon];
                c_entretien_artillerie_total += nb_canons * spec.cout_canon * spec.entretien_ratio;
            });
        }
    });
    
    // --- NOUVEAU (Point 6) : Entretien Fusils ---
    const fusils_en_service = total_soldats_armee + faction.ARMEE.milice_metropole + faction.ARMEE.milice_coloniale;
    const c_entretien_fusils = (faction.RESERVES.stock_fusils + fusils_en_service) * PRIX_FUSIL * ENTRETIEN_FUSIL_RATIO;

    // Entretien des forteresses (basé sur les provinces actuelles)
    let c_mil_entretien_forteresses = 0;
    const COUTS_ENTRETIEN = GAME_SETTINGS.COUTS_ENTRETIEN_FORTERESSES;
    faction.provinces.forEach(provinceId => {
        const province = MONDE[provinceId];
        if (province) {
            const forts = province.forteresses;
            c_mil_entretien_forteresses += (forts.classe_1 || 0) * COUTS_ENTRETIEN.classe_1;
            c_mil_entretien_forteresses += (forts.classe_2 || 0) * COUTS_ENTRETIEN.classe_2;
            c_mil_entretien_forteresses += (forts.classe_3_4 || 0) * COUTS_ENTRETIEN.classe_3_4;
            c_mil_entretien_forteresses += (forts.fort || 0) * COUTS_ENTRETIEN.fort;
        }
    });
    // Ajout entretien casernes (Point 2)
    c_mil_entretien_forteresses += c_entretien_casernes;
    
    // NOUVEAU (Point 8) - Coût Administration de l'Armée
    let c_admin_armee = 0;
    const forts = faction.INFRASTRUCTURE.forteresses;
    c_admin_armee += (forts.f1 || 0) * 6 * 800;
    c_admin_armee += (forts.f2 || 0) * 4 * 800;
    c_admin_armee += (forts.f3_4 || 0) * 3 * 800;
    c_admin_armee += (forts.forts || 0) * 1 * 800;
    c_admin_armee += faction.ARMEE.regiments.length * 3 * 800;
    budgets.c_admin_armee = c_admin_armee; // Stockage pour UI

    // NOUVEAU (Point 10) - Entretien Haras
    let c_entretien_haras = 0;
    faction.INFRASTRUCTURE.haras_royaux.forEach(haras => {
        const def = BUILD_DEFINITIONS.manufactures_civiles[haras.type];
        if (def) c_entretien_haras += def.entretien_annuel;
    });
    budgets.c_entretien_haras = c_entretien_haras; // Stockage pour UI
    
    const c_mil_entretien = c_rations + c_uniformes + c_entrainement + c_mil_entretien_forteresses + c_entretien_artillerie_total + c_entretien_fusils;
    
    // MODIFIÉ (Point 8 & 10) - Total Militaire
    const c_mil_total = c_mil_salaires + c_mil_entretien + c_admin_armee + c_entretien_haras; 

    // 3. Entretien naval (dynamique)
    // --- BLOC CORRIGÉ (DÉFINITION DE mod_cout_marine) ---
    const mod_cout_marine = mods.entretien_marine_mod || 1.0;
    
    let c_marine_entretien = 0; 
    let c_marine_approvisionnement = 0; // NOUVEAU (Point 9)
    
    faction.MARINE.flotte.forEach(navire => {
        const def = BUILD_DEFINITIONS.navires[navire.type];
        if (!def) return;
        
        if (navire.statut === 'arme' || navire.statut === 'radoub-requis' || navire.statut === 'en-course') {
            c_marine_entretien += def.cout * GAME_SETTINGS.ENTRETIEN_NAVIRE.ARME * mod_cout_marine;
            // NOUVEAU (Point 9)
            c_marine_approvisionnement += def.cout * GAME_SETTINGS.ENTRETIEN_NAVIRE.APPROVISIONNEMENT_RATIO;
        } else if (navire.statut === 'desarme') {
            c_marine_entretien += def.cout * GAME_SETTINGS.ENTRETIEN_NAVIRE.DESARME * mod_cout_marine;
        }
    });
    // --- FIN CORRECTION ---
    c_marine_entretien += faction.MARINE.cout_entretien_ports; 
    // Ajout des appros au coût d'entretien
    c_marine_entretien += c_marine_approvisionnement;
    
    // --- NOUVEAU : Coût d'entretien Bases Navales Coloniales (#23) ---
    let entretienBasesNavales = 0;
    if (!isNonColonial) {
        faction.COLONIES.villes.forEach(ville => {
            ville.projets.forEach(projetKey => {
                const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
                if (def && def.cout_entretien_marine) {
                    entretienBasesNavales += def.cout_entretien_marine;
                }
            });
        });
    }
    c_marine_entretien += entretienBasesNavales;
    // --- FIN NOUVEAU BLOC ---

    // NOUVEAU (Point 1) : Entretien Hôpitaux
    const c_hopitaux_militaires = (faction.INFRASTRUCTURE.hopitaux_militaires || 0) * BUILD_DEFINITIONS.batiments_speciaux.hopital_militaire.cout_entretien_fixe;
    const c_hopitaux_civils = (faction.INFRASTRUCTURE.hopitaux_civils || 0) * BUILD_DEFINITIONS.batiments_speciaux.hopital_civil.cout_entretien_fixe;
    
    const c_marine_total = c_marine_salaires + c_marine_entretien; 

    // 4. Charge de la dette (MODIFIÉ : Gère les bonus de banque)
    let bonus_banque = 0;
    (faction.INFRASTRUCTURE.banques || []).forEach(banque => {
        const def = BUILD_DEFINITIONS.banques[banque.type];
        if (def && def.bonus_interet_dette) bonus_banque += def.bonus_interet_dette;
    });
    (faction.INFRASTRUCTURE.ports_commerciaux || []).forEach(batiment => {
        const def = BUILD_DEFINITIONS.infrastructures_commerciales[batiment.type];
        if (def && def.bonus_interet_dette) bonus_banque += def.bonus_interet_dette;
    });
    
    
    const taux_interet_effectif = Math.max(0.005, GAME_SETTINGS.TAUX_INTERET_DETTE + bonus_banque);
    const c_dette = faction.ETAT_DYNAMIQUE.dette * taux_interet_effectif;

    // 5. Budgets fixes (MODIFIÉ Points 10 & 11)
    // Coûts fixes (remplace les sliders)
    const c_education = (faction.INFRASTRUCTURE.ecoles_primaires * EDUCATION_COSTS.nb_prof_primaire * EDUCATION_COSTS.salaire_primaire) +
                        (faction.INFRASTRUCTURE.lycees * EDUCATION_COSTS.nb_prof_lycee * EDUCATION_COSTS.salaire_lycee) +
                        (faction.INFRASTRUCTURE.universites * EDUCATION_COSTS.nb_prof_universite * EDUCATION_COSTS.salaire_universite);
                        
   // --- NOUVELLE LOGIQUE INFRASTRUCTURE (Fix NaN & User Req) ---
    
    // 1. Entretien (Variable) - C'est ce qui causait le NaN
    const c_infra_entretien_routes = (faction.INFRASTRUCTURE.routes_km * GAME_SETTINGS.COUT_KM_ROUTE * GAME_SETTINGS.ENTRETIEN_ROUTE_RATIO);
    // (Ajout entretien ponts/canaux, avec une sécurité si les définitions manquent)
    const c_infra_entretien_ponts = (faction.INFRASTRUCTURE.ponts * (BUILD_DEFINITIONS.grands_projets.pont_pierre.cout || 1000000) * GAME_SETTINGS.ENTRETIEN_ROUTE_RATIO); 
    const c_infra_entretien_canaux = (faction.INFRASTRUCTURE.canaux * (BUILD_DEFINITIONS.grands_projets.canal_navigation.cout || 5000000) * GAME_SETTINGS.ENTRETIEN_ROUTE_RATIO);
    const c_infra_entretien = c_infra_entretien_routes + c_infra_entretien_ponts + c_infra_entretien_canaux;

    // 2. Construction de base (Fixe)
    const c_infra_construction_base = GAME_STATE.BUDGET_INFRA_BASE.cout_fixe || 2500000;
    
    // 3. Construction supplémentaire (depuis l'input)
    // IMPORTANT: Lit depuis "infrastructure_supplementaire" que nous allons brancher à l'interface
    const c_infra_construction_supplementaire = (budgets.infrastructure_supplementaire || 0);
    
    // 4. Total pour le budget
    const c_infra_total = c_infra_entretien + c_infra_construction_base + c_infra_construction_supplementaire;
    // --- FIN NOUVELLE LOGIQUE ---
    
    // Sliders restants
    const c_sante = (budgets.sante_social || 0) + c_hopitaux_civils; // Le slider Santé gère le social, les hôpitaux sont fixes
    const c_maison = budgets.maison_dirigeant || 0;

    // 6. Dépenses extraordinaires
    const c_extra = (budgets.construction_extra || 0) + (budgets.colonisation_extra || 0) + (budgets.formation_officiers_extra || 0);

    // 7. Stockage des valeurs pour l'UI
    budgets.administration_ordinaire = c_admin;
    budgets.percepteurs_ordinaire = c_percepteurs_ratio; 
    budgets.militaire_ordinaire = c_mil_total + c_hopitaux_militaires; // (Point 1)
    budgets.marine_ordinaire = c_marine_total; 
    budgets.police_ordinaire = c_police_ratio; 
    budgets.poste_ordinaire = c_poste_ratio; 
    budgets.pensions_ordinaire = c_pensions;
    budgets.charge_dette = c_dette;
    budgets.education = c_education; // (Point 11)
    
    // --- CORRECTION BUG NaN & NOUVELLE LOGIQUE ---
    budgets.infrastructure_entretien = c_infra_entretien; // (FIXE LE NaN)
    budgets.infrastructure_base = c_infra_construction_base; // Pour l'affichage
    // infrastructure_supplementaire est déjà lu
    budgets.infrastructure = c_infra_total; // Le coût total
    // --- FIN CORRECTION ---
        
    // (Stockage Groupe 2)
    budgets.c_rations = c_rations;
    budgets.c_uniformes = c_uniformes;
    budgets.c_entrainement = c_entrainement;
    budgets.c_forteresses = c_mil_entretien_forteresses; // (Inclut casernes Point 2)
    budgets.c_artillerie = c_entretien_artillerie_total; // (Point 4)
    budgets.c_fusils = c_entretien_fusils; // (Point 6)
    
    // (Stockage Groupe 3)
    budgets.c_marine_entretien = c_marine_entretien;
    budgets.c_marine_salaires = c_marine_salaires; // Coût total (Marins + Officiers)
    budgets.c_marine_appro = c_marine_approvisionnement; // (Point 9)

    // 8. Total
    total = c_admin + c_mil_total + c_hopitaux_militaires + c_marine_total + 
            c_police_ratio + c_poste_ratio + c_percepteurs_ratio + 
            c_pensions + c_dette + 
            c_education + c_sante + c_infra_total + c_maison + c_extra; // <--- CORRIGÉ ICI
            
    faction.ECONOMIE.depenses_totales = total;
    return total;
}

/**
 * Calcule les effectifs totaux par grande branche.
 * (MODIFIÉ: Lit les objets Regiment)
 * @param {object} faction - L'objet faction.
 * @returns {object} - { infanterie, cavalerie, artillerie, garde }
 */
function calculerEffectifsArmee(faction) {
    // (NOTE : Cette fonction est inchangée par rapport à votre fichier, 
    // car elle contenait déjà la logique systémique)
    const totals = { infanterie: 0, cavalerie: 0, artillerie: 0, garde: 0, genie: 0 }; // (MODIFIÉ Point 9)
    
    faction.ARMEE.regiments.forEach(reg => {
        // reg.type est "Infanterie de Ligne", "Hussards", etc.
        // On utilise RECRUIT_DEFINITIONS pour trouver le *type* de base
        // CORRIGÉ : Utilise RECRUIT_DEFINITIONS
        const def = RECRUIT_DEFINITIONS[reg.type]; 
        if (!def) {
            console.warn(`Type de régiment inconnu: ${reg.type}`);
            return;
        }

        const effectif = reg.effectif_actuel || 0; // (MODIFIÉ : utilise effectif actuel)

        switch (def.type) {
            case "Infanterie":
                totals.infanterie += effectif;
                break;
            case "Cavalerie":
                totals.cavalerie += effectif;
                break;
            case "Artillerie":
                totals.artillerie += effectif;
                break;
            case "Génie": // (MODIFIÉ Point 9)
                totals.genie += effectif;
                break;
            case "Garde":
                // Sépare Garde Inf/Cav/Art
                if (reg.type.includes("Infanterie")) totals.garde += effectif;
                else if (reg.type.includes("Cavalerie")) totals.garde += effectif;
                else totals.artillerie += effectif; // L'artillerie de la garde compte comme artillerie
                break;
        }
    });
    return totals;
}

/**
 * Calcule la capacité de radoub totale et utilisée.
 * @param {object} faction - L'objet faction.
 * @returns {object} - { total, utilisee }
 */
function calculerCapaciteRadoub(faction) {
    // (NOTE : Cette fonction est inchangée par rapport à votre fichier)
    const totals = { total: 0, utilisee: 0 };

    faction.INFRASTRUCTURE.arsenaux.forEach(ars => {
        const def = BUILD_DEFINITIONS.infrastructures_navales[ars.type];
        if (def && def.cales_radoub) {
            totals.total += def.cales_radoub;
        }
    });

    faction.MARINE.flotte.forEach(navire => {
        if (navire.statut === 'en-radoub') {
            totals.utilisee++;
        }
    });
    
    return totals;
}

// =======================================================
// ===== DÉBUT DU BLOC MANQUANT (À AJOUTER) =============
// =======================================================

/**
 * NOUVEAU (Refonte Officiers): Calcule le besoin en officiers pour UN SEUL régiment.
 * @param {Regiment} reg - L'objet régiment.
 * @param {object} doctrine - L'objet doctrine de la faction (f.ARMEE.doctrine).
 * @returns {object} - Un objet de demande (ex: { colonel: 1, capitaine: 10, ... }).
 */
function calculerBesoinOfficiersRegiment(reg, doctrine) {
    const demande = { ...OFFICIER_HIERARCHIE_COUT }; // Initialise à 0
    const def = RECRUIT_DEFINITIONS[reg.type];
    if (!def) return demande;

    let d; // Doctrine applicable
    let nb_compagnies_totales = 0;
    let nb_bataillons_totaux = 0;

    // Déterminer la structure
    // (MODIFIÉ Point 9) - Le Génie utilise la doctrine d'infanterie
    if (def.type === "Infanterie" || (def.type === "Garde" && reg.type.includes("Infanterie")) || def.type === "Génie") {
        d = doctrine.infanterie;
        nb_bataillons_totaux = d.bataillons_regiment || 1;
        nb_compagnies_totales = (d.compagnies_bataillon || 1) * nb_bataillons_totaux;
        
        // Par Bataillon
        demande.lieutenant_colonel += (OFFICIER_DEMAND_RULES.par_bataillon.lieutenant_colonel || 0) * nb_bataillons_totaux;
        demande.capitaine += (OFFICIER_DEMAND_RULES.par_bataillon.capitaine || 0) * nb_bataillons_totaux;
        demande.lieutenant += (OFFICIER_DEMAND_RULES.par_bataillon.lieutenant || 0) * nb_bataillons_totaux;
        demande.sous_officier += (OFFICIER_DEMAND_RULES.par_bataillon.sous_officier || 0) * nb_bataillons_totaux;

    } else if (def.type === "Cavalerie" || (def.type === "Garde" && reg.type.includes("Cavalerie"))) {
        d = doctrine.cavalerie;
        nb_compagnies_totales = d.escadrons_regiment || 1;
        // (La cavalerie n'a pas de "bataillons")
    
    } else if (def.type === "Artillerie") {
        d = doctrine.artillerie;
        nb_compagnies_totales = d.compagnies_regiment || 1;
        // (L'artillerie n'a pas de "bataillons")
    } else {
        return demande; // Type inconnu
    }

    // Par Compagnie/Escadron
    demande.capitaine += (OFFICIER_DEMAND_RULES.par_compagnie.capitaine || 0) * nb_compagnies_totales;
    demande.lieutenant += (OFFICIER_DEMAND_RULES.par_compagnie.lieutenant || 0) * nb_compagnies_totales;

    // Par Régiment (État-Major)
    demande.colonel += (OFFICIER_DEMAND_RULES.par_regiment.colonel || 0);
    demande.lieutenant_colonel += (OFFICIER_DEMAND_RULES.par_regiment.lieutenant_colonel || 0);
    demande.capitaine += (OFFICIER_DEMAND_RULES.par_regiment.capitaine || 0);
    demande.lieutenant += (OFFICIER_DEMAND_RULES.par_regiment.lieutenant || 0);
    demande.sous_officier += (OFFICIER_DEMAND_RULES.par_regiment.sous_officier || 0);
    
    // NCOs (Sous-Officiers) de base (MODIFIÉ Point 5)
    if (d.sous_officiers_compagnie) {
        demande.sous_officier += (d.sous_officiers_compagnie * nb_compagnies_totales);
    } else if (d.sous_officiers_escadron) {
        demande.sous_officier += (d.sous_officiers_escadron * nb_compagnies_totales);
    }

    return demande;
}

/**
 * NOUVEAU (Refonte Officiers): Calcule le besoin en officiers pour les infrastructures (Garnisons & Territoire).
 * @param {object} faction - L'objet faction.
 * @returns {object} - Un objet de demande (ex: { colonel: 1, capitaine: 10, ... }).
 */
function calculerBesoinOfficiersInfra(faction) {
    const demande = { ...OFFICIER_HIERARCHIE_COUT };
    
    // 1. Par Forteresse (Basé sur les provinces possédées)
    faction.provinces.forEach(provinceId => {
        const province = MONDE[provinceId];
        if (province && province.proprietaireActuel === faction.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e')) {
            const forts = province.forteresses;
            const f1 = (forts.classe_1 || 0);
            const f2 = (forts.classe_2 || 0);
            const f3_4 = (forts.classe_3_4 || 0);
            const f_fort = (forts.fort || 0);

            demande.general_division += f1 * OFFICIER_DEMAND_RULES.par_forteresse.f1.general_division;
            demande.lieutenant_colonel += f1 * OFFICIER_DEMAND_RULES.par_forteresse.f1.lieutenant_colonel;
            demande.capitaine += f1 * OFFICIER_DEMAND_RULES.par_forteresse.f1.capitaine;
            demande.lieutenant += f1 * OFFICIER_DEMAND_RULES.par_forteresse.f1.lieutenant;
            
            demande.general_brigade += f2 * OFFICIER_DEMAND_RULES.par_forteresse.f2.general_brigade;
            demande.lieutenant_colonel += f2 * OFFICIER_DEMAND_RULES.par_forteresse.f2.lieutenant_colonel;
            demande.capitaine += f2 * OFFICIER_DEMAND_RULES.par_forteresse.f2.capitaine;
            demande.lieutenant += f2 * OFFICIER_DEMAND_RULES.par_forteresse.f2.lieutenant;

            demande.colonel += f3_4 * OFFICIER_DEMAND_RULES.par_forteresse.f3_4.colonel;
            demande.lieutenant_colonel += f3_4 * OFFICIER_DEMAND_RULES.par_forteresse.f3_4.lieutenant_colonel;
            demande.capitaine += f3_4 * OFFICIER_DEMAND_RULES.par_forteresse.f3_4.capitaine;
            demande.lieutenant += f3_4 * OFFICIER_DEMAND_RULES.par_forteresse.f3_4.lieutenant;

            demande.capitaine += f_fort * OFFICIER_DEMAND_RULES.par_forteresse.fort.capitaine;
            demande.lieutenant += f_fort * OFFICIER_DEMAND_RULES.par_forteresse.fort.lieutenant;
        }
    });
    
    // 2. Par Commandement Territorial (Basé sur les provinces)
    let nbFrontiere = 0;
    let nbInterne = 0;
    const factionKey = faction.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e');

    (PROVINCES_PAR_FACTION[factionKey] || []).forEach(prov => {
        let isFrontiere = false;
        for (const voisinId of prov.voisins_terrestres) {
            const voisin = MONDE[voisinId];
            if (voisin && voisin.proprietaireInitial !== prov.proprietaireInitial) {
                isFrontiere = true;
                break;
            }
        }
        if (isFrontiere) nbFrontiere++;
        else nbInterne++;
    });
    
    // S'il n'y a pas de provinces internes, les frontières comptent comme internes
    if (nbInterne === 0 && nbFrontiere > 0) {
        nbInterne = nbFrontiere;
        nbFrontiere = 0;
    }

    const f = OFFICIER_DEMAND_RULES.par_province_territoire.frontiere;
    demande.general_division += nbFrontiere * f.general_division;
    demande.general_brigade += nbFrontiere * f.general_brigade;
    demande.lieutenant_colonel += nbFrontiere * f.lieutenant_colonel;
    demande.capitaine += nbFrontiere * f.capitaine;
    demande.lieutenant += nbFrontiere * f.lieutenant;
    
    const i = OFFICIER_DEMAND_RULES.par_province_territoire.interne;
    demande.general_division += nbInterne * i.general_division;
    demande.general_brigade += nbInterne * i.general_brigade;
    demande.lieutenant_colonel += nbInterne * i.lieutenant_colonel;
    demande.capitaine += nbInterne * i.capitaine;
    demande.lieutenant += nbInterne * i.lieutenant;

    return demande;
}

/**
 * NOUVEAU (Point 8): Calcule le besoin en officiers pour la Garde Nationale.
 * @param {object} faction - L'objet faction.
 * @returns {object} - Un objet de demande (ex: { colonel: 1, capitaine: 10, ... }).
 */
function calculerBesoinOfficiersGarde(faction) {
    const demande = { ...OFFICIER_HIERARCHIE_COUT };
    const R_GARDE = GARDE_NATIONALE_SPECS;
    
    const popMetropole = faction.ETAT_DYNAMIQUE.population_metropole;
    const ratio = faction.MODIFICATEURS.garde_nationale_ratio;    
    const cible = Math.floor(popMetropole / ratio);
    
    const nb_bataillons = Math.ceil(cible / R_GARDE.taille_bataillon);
    
    if (nb_bataillons > 0) {
        demande.lieutenant_colonel += nb_bataillons * R_GARDE.officiers_par_bataillon.lieutenant_colonel;
        demande.capitaine += nb_bataillons * R_GARDE.officiers_par_bataillon.capitaine;
        demande.lieutenant += nb_bataillons * R_GARDE.officiers_par_bataillon.lieutenant;
        
        demande.colonel += Math.ceil(nb_bataillons / 2) * R_GARDE.officiers_par_2_bataillons.colonel;
        demande.general_brigade += Math.ceil(nb_bataillons / 2) * R_GARDE.officiers_par_2_bataillons.general_brigade;
        
        demande.general_division += Math.ceil(nb_bataillons / 4) * R_GARDE.officiers_par_4_bataillons.general_division;
    }
    
    return demande;
}

/**
 * NOUVEAU (Refonte Officiers): Calcule la demande TOTALE en officiers pour une faction.
 * @param {object} faction - L'objet faction.
 */
function calculerBesoinTotalOfficiers(faction) {
    const demandeTotale = { ...OFFICIER_HIERARCHIE_COUT }; // Initialise à 0
    const doctrine = faction.ARMEE.doctrine;

    // 1. Demande des Régiments
    faction.ARMEE.regiments.forEach(reg => {
        const demandeReg = calculerBesoinOfficiersRegiment(reg, doctrine);
        Object.keys(demandeTotale).forEach(rang => {
            demandeTotale[rang] += demandeReg[rang];
        });
    });
    
    // 2. Demande des Armées (Commandement Supérieur)
    const nbRegimentsTotal = faction.ARMEE.regiments.length;
    demandeTotale.general_brigade += (OFFICIER_DEMAND_RULES.par_armee_commandement.general_brigade || 0) * nbRegimentsTotal;
    demandeTotale.general_division += (OFFICIER_DEMAND_RULES.par_armee_commandement.general_division || 0) * nbRegimentsTotal;

    // 3. Demande des Infrastructures (Forteresses & Territoire)
    const demandeInfra = calculerBesoinOfficiersInfra(faction);
    Object.keys(demandeTotale).forEach(rang => {
        demandeTotale[rang] += demandeInfra[rang];
    });
    
    // 4. NOUVEAU (Point 8) - Demande de la Garde Nationale
    const demandeGarde = calculerBesoinOfficiersGarde(faction);
    Object.keys(demandeTotale).forEach(rang => {
        demandeTotale[rang] += demandeGarde[rang];
    });

    // 5. Met à jour la faction
    faction.ARMEE.officiers_demand = demandeTotale;
}

// =======================================================
// ===== FIN DU BLOC MANQUANT ============================
// =======================================================

// =======================================================
// SECTION 6: MISE À JOUR DES ONGLETS (UI)
// =======================================================

/**
 * Appelle toutes les fonctions de mise à jour pour rafraîchir l'interface.
 */
/* Duplicate function 'updateFullDashboard' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * Rafraîchit les données de l'en-tête (Trésor, Population, Année).
 * (CHANGEMENT Point 6)
 */
/* Duplicate function 'updateHeader' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * Rafraîchit la carte de statut global (Confiance, Efficacité, Moral).
 */
/* Duplicate function 'updateStatutGlobal' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * Point d'entrée pour rafraîchir les données d'un onglet spécifique.
 * (MODIFIÉ : Ajout tab-politique)
 */
/* Duplicate function 'refreshTab' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif) : Calcule la recette d'une tranche d'impôt direct.
 * @param {string} tranche - 'haut', 'moyen', ou 'bas'.
 * @param {object} faction - L'objet faction.
 * @returns {number} - Le revenu fiscal de cette tranche.
 */
/* Duplicate function 'calculerRecetteImpotDirect' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * Met à jour l'onglet "Budget & Fiscalité".
 * (MODIFIÉ: Affiche le Domaine de l'État)
 */
    function updateBudgetTab() {
    const f = GAME_STATE.currentFaction;
    
    // Calculs
    const recettes = calculerToutesRecettes(f);
    const depenses = calculerToutesDepenses(f);
    const solde = recettes - depenses;

    // Mise à jour du résumé
    document.getElementById('summary-recettes').textContent = `${Math.floor(recettes).toLocaleString()} LT`;
    document.getElementById('summary-depenses').textContent = `${Math.floor(depenses).toLocaleString()} LT`;
    document.getElementById('summary-solde').textContent = `${Math.floor(solde).toLocaleString()} LT`;
    document.getElementById('summary-solde').className = solde >= 0 ? 'positive' : 'negative';
    
    document.getElementById('summary-dette').textContent = `${Math.floor(f.ETAT_DYNAMIQUE.dette).toLocaleString()} LT`;
    document.getElementById('summary-rnb').textContent = `${Math.floor(f.ECONOMIE.revenu_national_brut).toLocaleString()} LT`;
    document.getElementById('summary-vct').textContent = `${Math.floor(f.ECONOMIE.valeur_commerciale_totale).toLocaleString()} LT`;

    // Mise à jour du tableau des recettes
    const revenuesTable = document.getElementById('revenues-table').querySelector('tbody');
    let htmlRevenues = '';
    
    // (MODIFIÉ : Impôts par tranche)
    htmlRevenues += `
        <tr>
            <td>Impôt (Tranche Haute)</td>
            <td>(Géré dans l'onglet Politique)</td>
            <td>${Math.floor(calculerRecetteImpotDirect('haut', f)).toLocaleString()} LT</td>
        </tr>
        <tr>
            <td>Impôt (Tranche Moyenne)</td>
            <td>(Géré dans l'onglet Politique)</td>
            <td>${Math.floor(calculerRecetteImpotDirect('moyen', f)).toLocaleString()} LT</td>
        </tr>
        <tr>
            <td>Impôt (Tranche Basse)</td>
            <td>(Géré dans l'onglet Politique)</td>
            <td>${Math.floor(calculerRecetteImpotDirect('bas', f)).toLocaleString()} LT</td>
        </tr>
    `;
    
    f.ECONOMIE.impots.indirects.forEach((impot, index) => {
        let inputType = '';
        if (impot.nom === "Douanes" || impot.nom === "Droits de Mouillage") {
            inputType = `<input type="number" value="${(impot.taux_effectif * 100).toFixed(1)}" 
                                onchange="updateImpotTaux('indirects', ${index}, this.value, true)" 
                                step="0.1"> % de la VCT`;
        } else { // Gabelle, Loteries, etc.
            inputType = `<input type="number" value="${impot.rendement_habitant.toFixed(2)}" 
                                onchange="updateImpotTaux('indirects', ${index}, this.value)"> LT/hab`;
        }
        
        htmlRevenues += `
            <tr>
                <td>${impot.nom} (Indirect)</td>
                <td>${inputType}</td>
                <td>${Math.floor(calculerRecetteImpotIndirect(impot, f)).toLocaleString()} LT</td>
            </tr>`;
    });

    // --- NOUVELLE LIGNE À AJOUTER ICI ---
    htmlRevenues += `
        <tr>
            <td>Domaine de l'État</td>
            <td>(Efficacité Admin + Ratio Percepteurs)</td>
            <td>${Math.floor(f.ECONOMIE.domaine_etat.revenu_total).toLocaleString()} LT</td>
        </tr>
    `;
    // --- FIN DE L'AJOUT ---

    revenuesTable.innerHTML = htmlRevenues;
    
    // Mise à jour des sliders de dépenses
    const expensesSliders = document.getElementById('expenses-sliders');
    let htmlExpenses = '';
    const budgets = f.DEPENSES_BUDGET;
    const budgetsPilotables = ["sante_social", "maison_dirigeant"]; 
    
    budgetsPilotables.forEach(key => {
        const val = budgets[key];
        const max = (val || 1000000) * 3;
        
        let labelText = key.charAt(0).toUpperCase() + key.slice(1);
        if (key === 'sante_social') labelText = 'Santé & Social';
        if (key === 'maison_dirigeant') labelText = 'Maison du Dirigeant';

        htmlExpenses += `
            <div class="control-group">
                <label for="slider-${key}">${labelText} (${Math.floor(val).toLocaleString()} LT)</label>
                <input type="range" id="slider-${key}" min="0" max="${max}" value="${val}" 
                       oninput="updateDepenseSlider('${key}', this.value)" 
                       style="width: 100%;">
            </div>`;
    });
    
    // (MODIFIÉ Point 6) - Ajout de l'input manuel pour l'infrastructure
    htmlExpenses += `
        <div class="control-group">
            <label>Budget Infrastructure de Base (Fixe)</label>
            <input type="text" value="2 500 000 LT" disabled style="width: 100%; background: #eee;">
            <p style="font-size: 0.9em; color: #666;"><i>(Inclut +200km routes, +2 ponts par an)</i></p>
        </div>
        
        <div class="control-group">
            <label for="input-infrastructure-supplementaire">Construction d'Infrastructure (Supplémentaire)</label>
            <input type="number" id="input-infrastructure-supplementaire" value="${budgets.infrastructure_supplementaire || 0}" onchange="updateDepenseInput('infrastructure_supplementaire', this.value)" style="width: 100%;">
        </div>
    `;
    expensesSliders.innerHTML = htmlExpenses;

    // --- MISE À JOUR DES LIGNES DE COÛT DÉTAILLÉES (MODIFIÉ Point 10 & 11) ---
    const depensesTable = document.getElementById('budget-summary-depenses');
    if (depensesTable) {
        depensesTable.innerHTML = `
            <tr><td>Dépenses de l'Armée de Terre</td><td>${Math.floor(budgets.militaire_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses de la Marine</td><td>${Math.floor(budgets.marine_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses d'Administration</td><td>${Math.floor(budgets.administration_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses de Police (Gendarmerie)</td><td>${Math.floor(budgets.police_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses des Percepteurs</td><td>${Math.floor(budgets.percepteurs_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses des Services (Poste)</td><td>${Math.floor(budgets.poste_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses des Pensions</td><td>${Math.floor(budgets.pensions_ordinaire).toLocaleString()} LT</td></tr>
            <tr><td>Dépenses d'Éducation (Fixe)</td><td>${Math.floor(budgets.education).toLocaleString()} LT</td></tr>
            
            <tr><td>Entretien Infrastructures (Fixe)</td><td>${Math.floor(budgets.infrastructure_entretien).toLocaleString()} LT</td></tr>
            <tr><td>Budget Infrastructure (Base)</td><td>${Math.floor(budgets.infrastructure_base).toLocaleString()} LT</td></tr>
            <tr><td>Infrastructure (Supplémentaire)</td><td>${Math.floor(budgets.infrastructure_supplementaire || 0).toLocaleString()} LT</td></tr>
            <tr><td>Charge de la Dette</td><td>${Math.floor(budgets.charge_dette).toLocaleString()} LT</td></tr>
        `;
    }
    // Finance (logique de dévaluation gardée)
    const seuilDevaluation = f.ECONOMIE.revenu_national_brut * 0.5;
    const btnDevaluer = document.getElementById('btn-devaluer');

    // --- DÉBUT CORRECTION ---
    // On vérifie si le bouton existe avant de le manipuler
    if (btnDevaluer) { 
    if (f.ETAT_DYNAMIQUE.dette > seuilDevaluation) {
        btnDevaluer.style.display = 'block';
    } else {
        btnDevaluer.style.display = 'none';
    }
  }
}

/**
 * NOUVEAU : Met à jour l'onglet "Politique & Population"
 * (Refonte complète pour le Système de Cabinet)
 */
function updatePolitiqueTab() {
    const f = GAME_STATE.currentFaction;
    const tranches = f.ECONOMIE.impots.tranches;
    const tranches_pop = f.ETAT_DYNAMIQUE.tranches_revenus;

    // Tranches de revenus (Inchangé)
    document.getElementById('tranche-haut-pop').textContent = Math.floor(tranches_pop.haut.pop).toLocaleString();
    document.getElementById('tranche-moyen-pop').textContent = Math.floor(tranches_pop.moyen.pop).toLocaleString();
    document.getElementById('tranche-bas-pop').textContent = Math.floor(tranches_pop.bas.pop).toLocaleString();

    document.getElementById('tranche-haut-tax').value = (tranches.haut.taux * 100).toFixed(1);
    document.getElementById('tranche-moyen-tax').value = (tranches.moyen.taux * 100).toFixed(1);
    document.getElementById('tranche-bas-tax').value = (tranches.bas.taux * 100).toFixed(1);
    
    document.getElementById('tranche-haut-effets').textContent = "Impact : RNB, Construction Navale";
    document.getElementById('tranche-moyen-effets').textContent = "Impact : Efficacité Admin, Stabilité";
    document.getElementById('tranche-bas-effets').textContent = "Impact : Stabilité, Croissance Pop.";

    // Population Active (Inchangé)
    const popTotale = f.ETAT_DYNAMIQUE.population_metropole;
    const popAssignee = f.ETAT_DYNAMIQUE.population_assignee_industrie + 
                      f.ETAT_DYNAMIQUE.population_assignee_armee + 
                      f.ETAT_DYNAMIQUE.population_assignee_admin;
    const poolIndustrielDispo = f.ETAT_DYNAMIQUE.population_disponible;
    const popNonAssignee = popTotale - popAssignee - poolIndustrielDispo - f.RESERVES.reserve_manpower;

    document.getElementById('pool-pop-totale').textContent = Math.floor(popTotale).toLocaleString();
    document.getElementById('pool-pop-assignee').textContent = Math.floor(popAssignee).toLocaleString();
    const elNonAssignee = document.getElementById('pool-pop-non-assignee');
    if (elNonAssignee) {
        elNonAssignee.textContent = Math.floor(popNonAssignee).toLocaleString();
    }
    document.getElementById('pool-pop-disponible').textContent = Math.floor(poolIndustrielDispo).toLocaleString();
    document.getElementById('pool-pop-disponible').className = poolIndustrielDispo > 10000 ? 'positive' : 'negative';

    // === NOUVEAU : Logique des Ministres ===
    
    // 1. Mettre à jour les compteurs
    const ministres = f.ETAT_DYNAMIQUE.ministres;
    // (Note : L'input 'ministres-nombre-input' n'existe pas encore, il sera dans le HTML de la Partie 2)
    const inputNbMinistres = document.getElementById('ministres-nombre-input');
    if (inputNbMinistres) {
        inputNbMinistres.value = ministres.nombre;
    }
    
    const focusUtilises = ministres.ministres_choisis.length;
    const focusDispo = ministres.nombre; // Le nombre de postes est le max
    const focusText = document.getElementById('ministres-focus-dispo');
    focusText.textContent = `${focusUtilises} / ${focusDispo}`;
    focusText.className = focusUtilises > focusDispo ? 'negative' : (focusUtilises === focusDispo ? 'neutral' : 'positive');

    // 2. Peupler les dropdowns
    const postes = ["guerre", "finances", "interieur", "commerce", "marine", "colonies", "administration"];
    // Récupérer tous les ministres actuellement sélectionnés dans d'AUTRES postes
    const ministresDejaPris = f.ETAT_DYNAMIQUE.ministres.ministres_choisis;

    postes.forEach(poste => {
        const select = document.getElementById(`select_ministre_${poste}`);
        if (!select) return; // (Sécurité, le HTML n'est pas encore là)
        
        const selectionActuelle = ministres.postes[poste];
        let htmlOptions = `<option value="">-- Aucun Ministre --</option>`;
        
        // Ajoute les options pour ce poste
        MINISTRES_PERSONNALITES[poste].forEach(ministre => {
            let estDesactive = false;
            // Si ce ministre est pris AILLEURS (mais pas dans ce poste-ci)
            if (ministresDejaPris.includes(ministre.id) && ministre.id !== selectionActuelle) {
                estDesactive = true;
            }
            
            htmlOptions += `
                <option value="${ministre.id}" 
                        title="${ministre.description}" 
                        ${estDesactive ? 'disabled' : ''} 
                        ${selectionActuelle === ministre.id ? 'selected' : ''}>
                    ${ministre.nom}
                </option>
            `;
        });
        
        select.innerHTML = htmlOptions;
    });
}
/**
 * NOUVEAU : Met à jour l'onglet "Population" (Démographie)
 * (MODIFIÉ : Point 6 - Garde Nationale)
 */
function updatePopulationTab() {
    const f = GAME_STATE.currentFaction;
    const popMetropole = f.ETAT_DYNAMIQUE.population_metropole;

    // --- LIGNE DE SÉCURITÉ À AJOUTER ---
    if (!f) return; // Si la faction n'est pas encore chargée, ne rien faire.
    // --- FIN DE L'AJOUT ---
    
    const popColons = f.ETAT_DYNAMIQUE.population_colonies.colons;
    const popColonies = f.ETAT_DYNAMIQUE.population_colonies.total;
    const popTotale = f.ETAT_DYNAMIQUE.population_totale; 

    document.getElementById('pop-total-empire').textContent = Math.floor(popTotale).toLocaleString();
    document.getElementById('pop-total-metropole').textContent = Math.floor(popMetropole).toLocaleString();
    document.getElementById('pop-total-colons').textContent = Math.floor(popColons).toLocaleString();
    document.getElementById('pop-total-colonies').textContent = Math.floor(popColonies).toLocaleString();
    
    // Démographie Métropole
    const mortalite = 0.015; 
    const tauxCroissance = f.ETAT_DYNAMIQUE.croissance_pop_annee_prec || 0.005;
    const tauxNatalite = tauxCroissance + mortalite;
    
    const naissances = popMetropole * tauxNatalite;
    const deces = popMetropole * mortalite;
    const nette = naissances - deces;

    document.getElementById('pop-naissances').textContent = Math.floor(naissances).toLocaleString();
    document.getElementById('pop-deces').textContent = Math.floor(deces).toLocaleString();
    document.getElementById('pop-nette').textContent = Math.floor(nette).toLocaleString();
    document.getElementById('pop-nette').className = nette > 0 ? 'positive' : 'negative';

    // (BLOC GARDE NATIONALE SUPPRIMÉ - Point 6)
}

/**
 * NOUVEAU : Met à jour l'onglet "Territoire"
 */
function updateTerritoireTab() {
    const f = GAME_STATE.currentFaction;
    
    // Métropole
    let superficie_km2 = 0;
    f.provinces.forEach(provinceId => {
        const prov = MONDE[provinceId];
        if (prov) {
            superficie_km2 += prov.superficie;
        }
    });

    const pop = f.ETAT_DYNAMIQUE.population_metropole;
    const densite = superficie_km2 > 0 ? (pop / superficie_km2) : 0;
    
    const agri_ha = f.ECONOMIE.agriculture.hectares_total;
    const foret_ha = f.INFRASTRUCTURE.foret.hectares;

    document.getElementById('terr-superficie-km2').textContent = `${Math.floor(superficie_km2).toLocaleString()} km²`;
    document.getElementById('terr-densite').textContent = `${densite.toFixed(2)} hab/km²`;
    document.getElementById('terr-agricole-ha').textContent = `${Math.floor(agri_ha).toLocaleString()} ha`;
    document.getElementById('terr-foret-ha').textContent = `${Math.floor(foret_ha).toLocaleString()} ha`;

    // Colonies
    const cultives_ha_villes = f.COLONIES.villes.reduce((sum, v) => sum + (v.hectares || 0), 0);
    const cultives_ha_campagne = f.COLONIES.campagne_hectares;
    const cultives_ha_total = cultives_ha_villes + cultives_ha_campagne;
    
    const dispo_ha = f.COLONIES.terres_disponibles;
    const total_col_ha = cultives_ha_total + dispo_ha;

    document.getElementById('terr-col-total-km2').textContent = `${(total_col_ha * 0.01).toLocaleString()} km²`; // ha -> km²
    document.getElementById('terr-col-cultives-km2').textContent = `${(cultives_ha_total * 0.01).toLocaleString()} km²`; // ha -> km²
    document.getElementById('terr-col-dispo-km2').textContent = `${(dispo_ha * 0.01).toLocaleString()} km²`; // ha -> km²
}

/**
 * NOUVEAU : Met à jour l'onglet "Ressources & Agriculture".
 * (MODIFIÉ : Affiche tous les nouveaux biens)
 */
function updateRessourcesTab() {
    const f = GAME_STATE.currentFaction;
    
    calculerProductionAgricole(f); // Force le recalcul
    
    // --- Gestion Forestière ---
    const foret = f.INFRASTRUCTURE.foret;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    document.getElementById('admin-foret-total').textContent = `${Math.floor(foret.hectares).toLocaleString()} ha`;
    document.getElementById('admin-stock-bois').textContent = `${Math.floor(stocks.bois).toLocaleString()} m³`;
    
    const foretSlider = document.getElementById('slider-foret');
    const foretLabel = document.querySelector('label[for="slider-foret"]');
    
    if (foretSlider && foretLabel) {
        const foretPercent = (f.MODIFICATEURS.taux_exploitation_bois * 100).toFixed(0);
        foretSlider.value = foretPercent;
        foretLabel.textContent = `Taux d'exploitation (${foretPercent}%)`;
    }

    // --- Agriculture ---
    const agriTable = document.getElementById('admin-agriculture-table'); 
    const agri = f.ECONOMIE.agriculture;
    document.getElementById('admin-agriculture-total').textContent = Math.floor(agri.hectares_total).toLocaleString();
    
    let htmlAgri = '';
    const netFoodStatus = f.ETAT_DYNAMIQUE.net_food > 0 ? 'positive' : 'negative';
    htmlAgri += `<tr><td><b>SURPLUS/DÉFICIT ALIMENTAIRE</b></td><td class="${netFoodStatus}"><b>${Math.floor(f.ETAT_DYNAMIQUE.net_food).toLocaleString()} unités</b></td><td>---</td><td>---</td></tr>`;
    
    // Production de Pêche
    const prodPoisson = (f.MARINE.navires_peche || 0) * YIELDS_NAVAL.poisson_par_bateau_kg;
    const valPoisson = prodPoisson * (PRICES_METROPOLE.poisson || 0);
    htmlAgri += `
        <tr>
            <td>Poisson (Pêche)</td>
            <td>${f.MARINE.navires_peche.toLocaleString()} navires</td>
            <td>${Math.floor(prodPoisson).toLocaleString()} kg</td>
            <td>${Math.floor(valPoisson).toLocaleString()} LT</td>
        </tr>
    `;
    
    // Production Agricole
    Object.keys(agri.hectares).forEach(key => {
        if (key === 'betail' || key === 'moutons' || key === 'porcins') return; // Géré ci-dessous

        const hectares = agri.hectares[key];
        if (hectares > 0) {
            const production = agri.production[key] || 0;
            const prix = PRICES_METROPOLE[key] || (key === 'vignes' ? PRICES_METROPOLE.vin : 0);
            const valeur = (production * prix);
            
            let nomAffiche = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            if (key === 'ble' || key === 'orge' || key === 'avoine') {
                const bonusRendement = (agri.machines_deployees.batteuses * AGRICULTURE_MACHINE_BONUS.batteuse) + (agri.machines_deployees.outils * (AGRICULTURE_MACHINE_BONUS.outils || 0.0));
                if (bonusRendement > 0) {
                    nomAffiche += ` (+${bonusRendement.toFixed(2)} kg/ha)`;
                }
            }
            if (key === 'vignes') nomAffiche = "Vin (Vignes)";
            
            htmlAgri += `
                <tr>
                    <td>${nomAffiche}</td>
                    <td>${Math.floor(hectares).toLocaleString()} ha</td>
                    <td>${Math.floor(production).toLocaleString()} kg</td>
                    <td>${Math.floor(valeur).toLocaleString()} LT</td>
                </tr>
            `;
        }
    });

    // Traitement Élevage
    const renderElevage = (type, ha, prod_viande, prod_extra, nom_viande, nom_extra, prix_viande, prix_extra) => {
        let html = '';
        const val_viande = prod_viande * prix_viande;
        html += `
            <tr>
                <td>${nom_viande} (${type})</td>
                <td>${Math.floor(ha).toLocaleString()} ha</td>
                <td>${Math.floor(prod_viande).toLocaleString()} kg</td>
                <td>${Math.floor(val_viande).toLocaleString()} LT</td>
            </tr>
        `;
        const val_extra = prod_extra * prix_extra;
         html += `
            <tr>
                <td>${nom_extra} (${type})</td>
                <td>(issu de l'élevage)</td>
                <td>${Math.floor(prod_extra).toLocaleString()} kg</td>
                <td>${Math.floor(val_extra).toLocaleString()} LT</td>
            </tr>
        `;
        return html;
    };
    
    if (agri.hectares.betail > 0) {
        htmlAgri += renderElevage('Bétail', agri.hectares.betail, agri.production.viande_boeuf, agri.production.cuir, 'Viande de Boeuf', 'Cuir', PRICES_METROPOLE.viande_boeuf, PRICES_METROPOLE.cuir);
    }
    if (agri.hectares.moutons > 0) {
        htmlAgri += renderElevage('Moutons', agri.hectares.moutons, agri.production.viande_mouton, agri.production.laine, 'Viande de Mouton', 'Laine', PRICES_METROPOLE.viande_mouton, PRICES_METROPOLE.laine);
    }
    if (agri.hectares.porcins > 0) {
        htmlAgri += renderElevage('Porcins', agri.hectares.porcins, agri.production.viande_porc, agri.production.suif, 'Viande de Porc', 'Suif', PRICES_METROPOLE.viande_porc, PRICES_METROPOLE.suif);
    }
    
    agriTable.innerHTML = htmlAgri;

    document.getElementById('stock-machines-agri').textContent = (stocks.outils_agricoles || 0).toLocaleString() + " Outils, " + (stocks.machines_agri || 0).toLocaleString() + " Batteuses";
}

/**
 * NOUVEAU : Met à jour l'onglet "Industrie & Mines".
 * (MODIFIÉ: Affiche tous les nouveaux biens et usines)
 * (MODIFIÉ - Point 3/4, 10)
 */
function updateIndustrieTab() {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    // --- Stocks (MODIFIÉ Point 3/4) ---
    document.getElementById('stock-fer-total').textContent = `${Math.floor(stocks.fer).toLocaleString()} T`;
    document.getElementById('stock-cuivre-total').textContent = `${Math.floor(stocks.cuivre).toLocaleString()} Q`;
    document.getElementById('stock-poudre-total').textContent = `${Math.floor(stocks.poudre).toLocaleString()} T`;
    document.getElementById('stock-charbon-total').textContent = `${Math.floor(stocks.charbon).toLocaleString()} T`; 
    document.getElementById('stock-machines-agri-total').textContent = `${(stocks.outils_agricoles || 0).toLocaleString()} Outils / ${(stocks.machines_agri || 0).toLocaleString()} Batteuses`; 
    document.getElementById('stock-moteurs-vapeur-total').textContent = (stocks.moteurs_vapeur || 0).toLocaleString(); 
    // NOUVELLES LIGNES
    document.getElementById('stock-canons-terre-total').textContent = Math.floor(f.RESERVES.stock_canons_terre).toLocaleString();
    document.getElementById('stock-canons-mer-total').textContent = Math.floor(f.RESERVES.stock_canons_mer).toLocaleString();

    // --- Mines ---
    const mineTable = document.getElementById('mine-table');
    let htmlMine = '';
    f.INFRASTRUCTURE.mines.forEach((mine, index) => {
        const def = BUILD_DEFINITIONS.mines[mine.type];
        if (!def) return;
        
        let prodTxt = "";
        if (def.prod_fer) prodTxt = `+${def.prod_fer.toLocaleString()} Fer (T)`;
        if (def.prod_cuivre) prodTxt = `+${def.prod_cuivre.toLocaleString()} Cuivre (Q)`;
        if (def.prod_charbon) prodTxt = `+${def.prod_charbon.toLocaleString()} Charbon (T)`;
        if (def.prod_sel) prodTxt = `+${def.prod_sel.toLocaleString()} Sel (T)`;

        let upgradeBtn = '';
        if (def.upgrade_vers) {
            upgradeBtn = `<button onclick="upgraderManufacture('mine', ${index})">Améliorer</button>`;
        } else {
            upgradeBtn = `(Niveau Max)`;
        }
        
        htmlMine += `
            <tr>
                <td>${def.nom}</td>
                <td>${prodTxt}</td>
                <td>${def.ouvriers.toLocaleString()}</td>
                <td>${upgradeBtn}</td>
            </tr>
        `;
    });
    mineTable.innerHTML = htmlMine || '<tr><td colspan="4">Aucune mine.</td></tr>';

    // --- NOUVEAU (Point 10/11) : Haras Royaux ---
    const harasTable = document.getElementById('haras-table');
    const harasList = f.INFRASTRUCTURE.haras_royaux || [];
    document.getElementById('haras-count').textContent = harasList.length;
    let htmlHaras = '';
    let totalProdChevaux = 0;
    let totalEntretienHaras = 0;
    
    harasList.forEach((haras, index) => {
        const def = BUILD_DEFINITIONS.manufactures_civiles[haras.type]; // (Puisque c'est là qu'on l'a défini)
        if (!def) return;

        totalProdChevaux += def.prod_chevaux;
        totalEntretienHaras += def.entretien_annuel;
    });

    if (harasList.length > 0) {
        htmlHaras = `
            <tr>
                <td>Haras Royaux</td>
                <td>${harasList.length}</td>
                <td>+${totalProdChevaux.toLocaleString()} chevaux</td>
                <td>${totalEntretienHaras.toLocaleString()} LT</td>
            </tr>
        `;
    }
    harasTable.innerHTML = htmlHaras || '<tr><td colspan="4">Aucun haras royal construit.</td></tr>';
    // --- FIN NOUVEAU BLOC ---

    // --- Manufactures Militaires ---
    document.getElementById('manufacture-count').textContent = f.INFRASTRUCTURE.manufactures_armes.length;
    const manuTable = document.getElementById('manufacture-table'); 
    let htmlManu = '';
    f.INFRASTRUCTURE.manufactures_armes.forEach((manu, index) => { 
        const def = BUILD_DEFINITIONS.manufactures_armes[manu.type];
        
        let prodTxt = "";
        if (def.prod_fusil) prodTxt = `${def.prod_fusil.toLocaleString()} fusils`;
        if (def.prod_canon_terre) prodTxt = `${def.prod_canon_terre.toLocaleString()} canons terre`;
        if (def.prod_canon_mer) prodTxt = `${def.prod_canon_mer.toLocaleString()} canons mer`;
        if (def.prod_poudre) prodTxt = `${def.prod_poudre.toLocaleString()} T poudre`;
        
        let upgradeBtn = '';
        if (def.upgrade_vers) {
            upgradeBtn = `<button onclick="upgraderManufacture('militaire', ${index})">Améliorer</button>`;
        } else {
            upgradeBtn = `(Niveau Max)`;
        }
        
        htmlManu += `
            <tr>
                <td>${def.nom}</td>
                <td>${prodTxt}</td>
                <td>${def.ouvriers.toLocaleString()}</td>
                <td>${upgradeBtn}</td> 
            </tr>
        `;
    });
    manuTable.innerHTML = htmlManu || '<tr><td colspan="4">Aucune manufacture d\'armes.</td></tr>';
    
    // --- Manufactures Civiles ---
    const manufTableCiv = document.getElementById('admin-manufactures-civiles-table'); 
    const manufListCiv = f.INFRASTRUCTURE.manufactures_civiles;
    document.getElementById('admin-manufactures-civiles-nb').textContent = manufListCiv.length;
    let htmlManufCiv = '';
    
    manufListCiv.forEach((manu, index) => {
        const def = BUILD_DEFINITIONS.manufactures_civiles[manu.type];
        if (!def) return; 
        
        // (Point 10) - Ne pas afficher les haras ici
        if (manu.type === 'haras_royal') return;

        let prodTxt = "";
        if (def.rbn_bonus) prodTxt = `+${def.rbn_bonus.toLocaleString()} LT`;
        if (def.prod_habits) prodTxt = `${def.prod_habits.toLocaleString()} Habits`;
        if (def.prod_verre_cristal) prodTxt = `${def.prod_verre_cristal.toLocaleString()} Verre`;
        if (def.prod_biere) prodTxt = `${(def.prod_biere / 1000).toFixed(0)}k L Bière`;
        if (def.prod_voiles) prodTxt = `${def.prod_voiles.toLocaleString()} Voiles`;
        if (def.prod_cordages) prodTxt = `${def.prod_cordages.toLocaleString()} Cordages`;
        if (def.prod_papier) prodTxt = `${def.prod_papier.toLocaleString()} Papier`;
        if (def.prod_savon) prodTxt = `${def.prod_savon.toLocaleString()} Savon`;
        if (def.prod_huile_olive) prodTxt = `${(def.prod_huile_olive / 1000).toFixed(0)}k L Huile`;
        if (def.prod_meubles) prodTxt = `${def.prod_meubles.toLocaleString()} Meubles`;
        if (def.prod_journaux) prodTxt = `${(def.prod_journaux / 1000).toFixed(0)}k Journaux`;

        let upgradeBtn = '';
        if (def.upgrade_vers) {
            upgradeBtn = `<button onclick="upgraderManufacture('civile', ${index})">Améliorer</button>`;
        } else {
            upgradeBtn = `(Niveau Max)`;
        }
        
        let moteurBtn = '';
        if (def.consommation_annuelle.charbon) { // Si le bâtiment consomme du charbon, il peut être motorisé
            if (manu.moteur_installe) {
                moteurBtn = `(Motorisé +10%)`;
            } else {
                moteurBtn = `<button onclick="installerMoteur(${index})">Installer Moteur</button>`;
            }
        }
        
        htmlManufCiv += `
            <tr>
                <td>${def.nom}</td>
                <td>${def.ouvriers.toLocaleString()}</td>
                <td>${prodTxt}</td>
                <td>${upgradeBtn} ${moteurBtn}</td>
            </tr>
        `;
    });
    manufTableCiv.innerHTML = htmlManufCiv || '<tr><td colspan="4">Aucune manufacture civile.</td></tr>';

    // --- Industries Avancées & Luxe ---
    const advTable = document.getElementById('advanced-industry-table');
    let htmlAdv = '';
    
    const advancedList = (f.INFRASTRUCTURE.manufactures_avancees || []).concat(f.INFRASTRUCTURE.manufactures_luxe || []);

    advancedList.forEach((manu, index) => {
        const def = BUILD_DEFINITIONS.manufactures_avancees[manu.type] || BUILD_DEFINITIONS.manufactures_luxe[manu.type];
        if (!def) return; 

        let prodTxt = '';
        if (def.prod_machines_agri) prodTxt = `+${def.prod_machines_agri} Batteuses, +${def.prod_moteurs_vapeur} Moteurs`;
        else if (def.prod_outils_agricoles) prodTxt = `+${def.prod_outils_agricoles} Outils`;
        else if (def.prod_tissu_soie) prodTxt = `+${def.prod_tissu_soie.toLocaleString()} Soie`;
        else if (def.prod_porcelaine) prodTxt = `+${def.prod_porcelaine.toLocaleString()} Porcelaine`;
        else if (def.prod_horloges) prodTxt = `+${def.prod_horloges.toLocaleString()} Horloges`;
        else if (def.prod_bijoux) prodTxt = `+${def.prod_bijoux.toLocaleString()} Bijoux`;
        else if (def.prod_art) prodTxt = `+${def.prod_art.toLocaleString()} Art`;
        else prodTxt = `+${def.rbn_bonus.toLocaleString()} LT`;

        htmlAdv += `
            <tr>
                <td>${def.nom}</td>
                <td>${manu.type.includes('luxe') ? 'Luxe' : 'Avancée'}</td>
                <td>${prodTxt}</td>
                <td>${def.ouvriers.toLocaleString()}</td>
            </tr>
        `;
    });
    advTable.innerHTML = htmlAdv || '<tr><td colspan="4">Aucune industrie de pointe.</td></tr>';


    // --- Finance (Banques) ---
    const financeTable = document.getElementById('finance-table');
    const bankList = f.INFRASTRUCTURE.banques || [];
    let htmlFinance = '';

    bankList.forEach((banque, index) => {
        const def = BUILD_DEFINITIONS.banques[banque.type];
        if (!def) return; 

        let bonusTxt = `+${def.rbn_bonus.toLocaleString()} LT`;
        if (def.bonus_interet_dette) {
            bonusTxt += ` (${def.bonus_interet_dette*100}% intérêt dette)`
        }
        if (def.palier_emprunt) {
             bonusTxt += ` (Palier ${def.palier_emprunt} Emprunt)`
        }

        htmlFinance += `
            <tr>
                <td>${def.nom}</td>
                <td>Banque</td>
                <td>${bonusTxt}</td>
                <td>${def.ouvriers.toLocaleString()}</td>
            </tr>
        `;
    });
    financeTable.innerHTML = htmlFinance || '<tr><td colspan="4">Aucune institution financière.</td></tr>';
}

/**
 * NOUVEAU : Met à jour l'onglet "Administration & Villes"
 * (CORRIGÉ : Affiche les nouveaux inputs de salaires)
 * (MODIFIÉ - Point 6)
 */
function updateAdminTab() {
    console.log("Mise à jour onglet Administration...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // --- Résumé Admin ---
    const stats = f.ETAT_DYNAMIQUE;
    const adminPlafond = Math.floor(stats.admin_efficacite_plafond);
    document.getElementById('stat-admin-efficacite').innerHTML = `Efficacité Admin <strong class="neutral">${Math.floor(stats.efficacite_admin)}% / ${adminPlafond}%</strong>`;
    document.getElementById('stat-admin-total').innerHTML = `Administrateurs <strong class="neutral">${stats.administrateurs_total.toLocaleString()}</strong>`;
    
    // (MODIFIÉ Point 6) - L'affichage des officiers est déplacé vers l'onglet militaire
    document.getElementById('stat-admin-officiers').innerHTML = `Lieutenants (Pool) <strong class="positive">...</strong>`; // Placeholder
    
    document.getElementById('stat-admin-infra').innerHTML = `Infrastructures <strong class="neutral">${f.INFRASTRUCTURE.routes_km.toLocaleString()} km</strong>`;

    // --- Salaires & Dépenses (MODIFIÉ Point 5 & 6) ---
    // (Armée de Terre)
    document.getElementById('salaire-input-soldat').value = f.ECONOMIE.salaires_base.soldat;
    document.getElementById('salaire-input-sous_officier').value = f.ECONOMIE.salaires_base.sous_officier;
    
    // (Marine)
    document.getElementById('salaire-input-marin_base').value = f.ECONOMIE.salaires_base.marine.marin_base;
    
    let htmlNavySalary = '';
    const salairesMarine = f.ECONOMIE.salaires_base.marine.officiers;
    Object.keys(salairesMarine).forEach(rang => {
        const salaire = salairesMarine[rang];
        htmlNavySalary += `
            <tr>
                <td>${rang.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                <td><input type="number" value="${salaire}" onchange="updateSalaireInput('marine_officer', this.value, '${rang}')"></td>
            </tr>
        `;
    });
    document.getElementById('navy-salary-table').innerHTML = htmlNavySalary;
    
    // (Ratios)
    document.getElementById('ratio-police-display').textContent = f.MODIFICATEURS.ratio_police.toLocaleString();
    document.getElementById('slider-ratio-police').value = f.MODIFICATEURS.ratio_police;
    document.getElementById('cout-ratio-police').textContent = `${Math.floor(f.DEPENSES_BUDGET.police_ordinaire).toLocaleString()} LT`;
    
    document.getElementById('ratio-percepteurs-display').textContent = f.MODIFICATEURS.ratio_percepteurs.toLocaleString();
    document.getElementById('slider-ratio-percepteurs').value = f.MODIFICATEURS.ratio_percepteurs;
    document.getElementById('cout-ratio-percepteurs').textContent = `${Math.floor(f.DEPENSES_BUDGET.percepteurs_ordinaire).toLocaleString()} LT`;

    document.getElementById('ratio-poste-display').textContent = f.MODIFICATEURS.ratio_poste.toLocaleString();
    document.getElementById('slider-ratio-poste').value = f.MODIFICATEURS.ratio_poste;
    document.getElementById('cout-ratio-poste').textContent = `${Math.floor(f.DEPENSES_BUDGET.poste_ordinaire).toLocaleString()} LT`;
    
    // (Pensions)
    document.getElementById('slider-budget-pensions').value = f.MODIFICATEURS.budget_pensions_mod * 100;
    document.querySelector('label[for="slider-budget-pensions"]').textContent = `Budget Pensions (${(f.MODIFICATEURS.budget_pensions_mod * 100).toFixed(0)}%)`;

    // --- Éducation & Formation (MODIFIÉ Point 1) ---
    document.getElementById('edu-count').textContent = (f.INFRASTRUCTURE.universites + f.INFRASTRUCTURE.lycees + f.INFRASTRUCTURE.ecoles_primaires + (f.INFRASTRUCTURE.hopitaux_civils || 0));
    const queueTable = document.getElementById('officer-queue-table');
    let htmlQueue = '';
    f.ARMEE.formation_officiers_queue.forEach(lot => {
        htmlQueue += `
            <tr>
                <td>Promotion An ${GAME_STATE.anneeActuelle + lot.temps_restant}</td>
                <td>${lot.quantite.toLocaleString()}</td>
                <td>${lot.temps_restant} ans</td>
            </tr>
        `;
    });
    queueTable.innerHTML = htmlQueue || '<tr><td colspan="3">Aucune promotion en cours.</td></tr>';

    // --- Gestion des Villes ---
    let htmlVillesG = '', htmlVillesM = '', htmlVillesP = '';
    let countG = 0, countM = 0, countP = 0;
    
    f.INFRASTRUCTURE.villes.forEach((ville, index) => {
        const actions = `
            <button onclick="ouvrirModalGestionVille(${index})">Gérer</button>
            <button onclick="renommerVille(${index})">Renommer</button>
        `;
        const row = `
            <tr>
                <td>${ville.nom}</td>
                <td>${ville.type}</td>
                <td>${Math.floor(ville.pop).toLocaleString()}</td>
                <td>${actions}</td>
            </tr>
        `;
        if (ville.type === 'Grande') { htmlVillesG += row; countG++; }
        else if (ville.type === 'Moyenne') { htmlVillesM += row; countM++; }
        else { htmlVillesP += row; countP++; }
    });
    
    document.getElementById('city-count-g').textContent = countG;
    document.getElementById('city-list-table-g').innerHTML = htmlVillesG || '<tr><td colspan="4">Aucune grande ville.</td></tr>';
    document.getElementById('city-count-m').textContent = countM;
    document.getElementById('city-list-table-m').innerHTML = htmlVillesM || '<tr><td colspan="4">Aucune ville moyenne.</td></tr>';
    document.getElementById('city-count-p').textContent = countP;
    document.getElementById('city-list-table-p').innerHTML = htmlVillesP || '<tr><td colspan="4">Aucune petite ville.</td></tr>';

    // --- Infrastructures Nationales (MODIFIÉ Point 6) ---
    const projetSelect = document.getElementById('projet-simple-select');
    let htmlProjet = '<option value="">-- Choisir un projet --</option>';
    
    // (MODIFIÉ Point 6) - Retrait des options de base, gérées par budget fixe
    
    Object.keys(BUILD_DEFINITIONS.grands_projets).forEach(key => {
        const def = BUILD_DEFINITIONS.grands_projets[key];
        htmlProjet += `<option value="${key}">${def.nom} (${(def.cout / 1000).toFixed(0)}k LT)</option>`;
    });
    projetSelect.innerHTML = htmlProjet;
}


/**
 * NOUVEAU : Met à jour l'onglet "Commerce"
 * (CORRIGÉ : Rempli)
 * (MODIFIÉ - Point 11)
 */
function updateCommerceTab() {
    console.log("Mise à jour onglet Commerce...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // --- Flotte Marchande ---
    const table = document.getElementById('merchant-fleet-table');
    let htmlFlotte = '';
    const marchands = f.MARINE.navires_marchands;
    let totalPuissance = 0;
    
    Object.keys(marchands).forEach(key => {
        const nb = Math.floor(marchands[key]);
        const puissance = (GAME_SETTINGS.PUISSANCE_COMMERCIALE[key] || 0) * nb;
        totalPuissance += puissance;
        htmlFlotte += `
            <tr>
                <td class="data-key">Navires (${key})</td>
                <td class="data-value">${nb.toLocaleString()}</td>
                <td>${puissance.toLocaleString()} LT</td>
            </tr>
        `;
    });
    htmlFlotte += `
        <tr>
            <td class="data-key"><b>Total Flotte Marchande</b></td>
            <td class="data-value"><b>${Math.floor(Object.values(marchands).reduce((a, b) => a + b, 0)).toLocaleString()}</b></td>
            <td><b>${totalPuissance.toLocaleString()} LT</b></td>
        </tr>
    `;
    table.innerHTML = htmlFlotte;

    // --- Marché Mondial ---
    const select = document.getElementById('market-resource-select');
    let htmlMarket = '<option value="">-- Ressource --</option>';
    // On ne liste que les biens "bruts" ou "semi-finis" échangeables
    const ressourcesMarche = [
        "bois", "fer", "cuivre", "charbon", "sel", "poudre", "laine", "lin_chanvre", "suif", "cuir", "olives", "huile_olive",
        "sucre_kg", "cafe_kg", "epices_kg", "tabac_kg", "coton_kg", "indigo_kg", "the_kg", "fourrure_piece", "ble_kg",
        "cheval" // (Point 11)
    ];
    ressourcesMarche.forEach(res => {
        htmlMarket += `<option value="${res}">${res.replace(/_kg|_piece/g, '')}</option>`;
    });
    select.innerHTML = htmlMarket;
    updateMarketInfo(); // Met à jour les infos de coût

    // --- Infrastructures Commerciales ---
    const infraTable = document.getElementById('commerce-buildings-table');
    let htmlInfra = '';
    const batiments = {}; // Compter les bâtiments par type
    
    f.INFRASTRUCTURE.ports_commerciaux.forEach(b => {
        if (!batiments[b.type]) batiments[b.type] = { count: 0, def: BUILD_DEFINITIONS.infrastructures_commerciales[b.type] };
        batiments[b.type].count++;
    });

    Object.keys(batiments).forEach(key => {
        const b = batiments[key];
        let effet = '';
        if (b.def.bonus_croissance_marchands) effet += `+${b.def.bonus_croissance_marchands * 100}% Croissance Flotte. `;
        if (b.def.bonus_mouillage_pct) effet += `+${b.def.bonus_mouillage_pct * 100}% Droits Mouillage. `;
        if (b.def.bonus_interet_dette) effet += `${b.def.bonus_interet_dette * 100}% Taux Intérêt. `;
        
        htmlInfra += `
            <tr>
                <td>${b.def.nom}</td>
                <td>${b.count}</td>
                <td>${effet}</td>
            </tr>
        `;
    });
    infraTable.innerHTML = htmlInfra || '<tr><td colspan="3">Aucune infrastructure commerciale.</td></tr>';

    // --- Compagnie Marchande ---
    const btnCompagnie = document.getElementById('btn-fonder-compagnie');
    if (f.ECONOMIE.compagnie_marchande_fondee) {
        btnCompagnie.textContent = "Compagnie Marchande Fondée";
        btnCompagnie.disabled = true;
    } else {
        btnCompagnie.textContent = "Fonder une Compagnie Marchande (Coût: 5 000 000 LT)";
        btnCompagnie.disabled = false;
    }
}


/**
 * NOUVEAU : Met à jour l'onglet "Militaire"
 * (CORRIGÉ v3 : Affiche les régiments, officiers, forteresses, etc.)
 * (MODIFIÉ - Points 2, 4, 6, 8, 9, 10)
 */
function updateMilitaireTab() {
    console.log("Mise à jour onglet Militaire...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // --- DÉBUT DU BLOC MODIFIÉ (Points 2, 8, 10) ---
    // Remplir les coûts de l'Armée de Terre
    const budgets = f.DEPENSES_BUDGET;
    
    // Salaires (lus depuis les valeurs stockées)
    document.getElementById('mil-cout-soldats').textContent = `${Math.floor(budgets.salaire_soldats_reel || 0).toLocaleString()} LT`;
    document.getElementById('mil-cout-sous_officiers').textContent = `${Math.floor(budgets.salaire_nco_reel || 0).toLocaleString()} LT`;
    document.getElementById('mil-cout-officiers').textContent = `${Math.floor(budgets.salaire_officiers_terre_reel || 0).toLocaleString()} LT`;
    
    // Coûts Opérationnels (lus depuis les valeurs stockées)
    document.getElementById('mil-detail-admin').textContent = `${Math.floor(budgets.c_admin_armee || 0).toLocaleString()} LT`; // (Point 8)
    document.getElementById('mil-detail-rations').textContent = `${Math.floor(budgets.c_rations || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-uniformes').textContent = `${Math.floor(budgets.c_uniformes || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-entrainement').textContent = `${Math.floor(budgets.c_entrainement || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-artillerie').textContent = `${Math.floor(budgets.c_artillerie || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-fusils').textContent = `${Math.floor(budgets.c_fusils || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-forteresses').textContent = `${Math.floor(budgets.c_forteresses || 0).toLocaleString()} LT`;
    document.getElementById('mil-detail-haras').textContent = `${Math.floor(budgets.c_entretien_haras || 0).toLocaleString()} LT`; // (Point 10)
    // --- FIN DU BLOC MODIFIÉ ---

    // === 1. MISE À JOUR DU RÉSUMÉ (MODIFIÉ Point 4 & 9) ===
    const totals = calculerEffectifsArmee(f); // Utilise la fonction existante
    document.getElementById('summary-armee-inf').textContent = totals.infanterie.toLocaleString();
    document.getElementById('summary-armee-cav').textContent = totals.cavalerie.toLocaleString();
    document.getElementById('summary-armee-art').textContent = totals.artillerie.toLocaleString();
    document.getElementById('summary-armee-genie').textContent = totals.genie.toLocaleString(); // (Point 9)
    document.getElementById('summary-armee-garde').textContent = totals.garde.toLocaleString();
    
    document.getElementById('summary-armee-reserve').textContent = Math.floor(f.RESERVES.reserve_manpower).toLocaleString();
    document.getElementById('summary-armee-chevaux').textContent = `${Math.floor(f.RESERVES.chevaux_disponibles).toLocaleString()} / ${Math.floor(f.RESERVES.besoin_chevaux_armee).toLocaleString()}`;
    document.getElementById('summary-armee-fusils').textContent = Math.floor(f.RESERVES.stock_fusils).toLocaleString();
    // (Point 4)
    document.getElementById('summary-armee-canons-terre').textContent = Math.floor(f.RESERVES.stock_canons_terre).toLocaleString();
    document.getElementById('summary-armee-canons-mer').textContent = Math.floor(f.RESERVES.stock_canons_mer).toLocaleString();


    // === 2. MISE À JOUR DU MENU DE RECRUTEMENT ===
    const recruitSelect = document.getElementById('unit-type-select');
    let htmlOptions = '<option value="">-- Choisir type --</option>';
    for (const key in RECRUIT_DEFINITIONS) { 
        htmlOptions += `<option value="${key}">${key}</option>`;
    }
    recruitSelect.innerHTML = htmlOptions;

    // === 3. MISE À JOUR DE LA HIÉRARCHIE DES OFFICIERS (OFFRE vs DEMANDE) ===
    const officerTable = document.getElementById('officer-hierarchy-stats');
    const supply = f.ARMEE.officiers_supply;
    const demand = f.ARMEE.officiers_demand;

    // (MODIFIÉ Point 6) - Affiche le pool de Lieutenants de l'onglet Admin ici
    document.getElementById('stat-admin-officiers').innerHTML = `Lieutenants (Pool) <strong class="positive">${Math.floor(supply.lieutenant || 0).toLocaleString()}</strong>`;

    const renderStat = (nom, s, d) => {
        const surplus = s - d;
        let className = 'neutral';
        if (surplus < 0) className = 'negative';
        else if (surplus > 0 && nom === 'Lieutenant') className = 'positive';
        return `<div>${nom} <strong class="${className}">${Math.floor(s)} / ${Math.floor(d)}</strong></div>`;
    };

    officerTable.innerHTML = `
        ${renderStat('Gén. de Division', supply.general_division, demand.general_division)}
        ${renderStat('Gén. de Brigade', supply.general_brigade, demand.general_brigade)}
        ${renderStat('Colonels', supply.colonel, demand.colonel)}
        ${renderStat('Ltn-Colonels', supply.lieutenant_colonel, demand.lieutenant_colonel)}
        ${renderStat('Capitaines', supply.capitaine, demand.capitaine)}
        ${renderStat('Lieutenants', supply.lieutenant, demand.lieutenant)}
        ${renderStat('Sous-Officiers', demand.sous_officier, demand.sous_officier)}
    `;

    // === 4. MISE À JOUR DES FORTERESSES ===
    const fortressTable = document.getElementById('fortress-table');
    const forts = f.INFRASTRUCTURE.forteresses;
    // Calcule le total des forteresses de la faction (pas seulement celles des provinces)
    const totalForts = (forts.f1 || 0) + (forts.f2 || 0) + (forts.f3_4 || 0) + (forts.forts || 0);
    document.getElementById('fortress-count').textContent = totalForts;
    fortressTable.innerHTML = `
        <tr><td>Forteresses (1ère Classe)</td><td>${forts.f1 || 0}</td><td>8 000+ hommes</td></tr>
        <tr><td>Forteresses (2e Classe)</td><td>${forts.f2 || 0}</td><td>4 000 hommes</td></tr>
        <tr><td>Forteresses (3e/4e Classe)</td><td>${forts.f3_4 || 0}</td><td>1 000 hommes</td></tr>
        <tr><td>Forts & Postes</td><td>${forts.forts || 0}</td><td>100 hommes</td></tr>
    `;

    // === 5. MISE À JOUR DES LISTES DE RÉGIMENTS ===
    let htmlInf = '', htmlCav = '', htmlArt = '', htmlGarde = '', htmlGenie = ''; // (MODIFIÉ Point 9)
    let countInf = 0, countCav = 0, countArt = 0, countGarde = 0, countGenie = 0; // (MODIFIÉ Point 9)

    f.ARMEE.regiments.forEach((reg, index) => {
        const def = RECRUIT_DEFINITIONS[reg.type]; 
        if (!def) return;

        let locationDisplay;
        if (reg.assigne_a_armee) {
            const armee = f.ARMEE.armees.find(a => a.id === reg.assigne_a_armee);
            locationDisplay = `<em style="color: #007bff;">(Armée: ${armee ? armee.nom : '...'})</em>`;
        } else {
            const province = MONDE[reg.localisation]; // MONDE est global
            locationDisplay = province ? province.nom_affiche : 'Inconnue';
        }
        
        const effectifClass = reg.effectif_actuel < reg.effectif_max ? 'negative' : 'positive';
        const actionButton = `
        <button onclick="renommerRegiment(${index})">Renommer</button>
        <button onclick="supprimerRegiment(${index})" class="btn-danger">Supprimer</button>
`;     
        const htmlRow = `
            <tr>
                <td>${reg.nom}</td>
                <td>${reg.type}</td>
                <td><strong class="${effectifClass}">${reg.effectif_actuel.toLocaleString()}</strong> / ${reg.effectif_max.toLocaleString()}</td>
                <td>${locationDisplay}</td>
                <td>${actionButton}</td>
            </tr>
        `;

        // Trie la ligne dans le bon tableau
        switch (def.type) {
            case "Infanterie":
                htmlInf += htmlRow;
                countInf++;
                break;
            case "Cavalerie":
                htmlCav += htmlRow;
                countCav++;
                break;
            case "Artillerie":
                htmlArt += htmlRow;
                countArt++;
                break;
            case "Génie": // (MODIFIÉ Point 9)
                htmlGenie += htmlRow;
                countGenie++;
                break;
            case "Garde":
                htmlGarde += htmlRow;
                countGarde++;
                break;
        }
    });

    // Injecte le HTML dans les tables
    document.getElementById('regiment-table-inf').innerHTML = htmlInf || '<tr><td colspan="5">Aucun régiment d\'infanterie.</td></tr>';
    document.getElementById('regiment-table-cav').innerHTML = htmlCav || '<tr><td colspan="5">Aucun régiment de cavalerie.</td></tr>';
    document.getElementById('regiment-table-art').innerHTML = htmlArt || '<tr><td colspan="5">Aucun régiment d\'artillerie.</td></tr>';
    document.getElementById('regiment-table-genie').innerHTML = htmlGenie || '<tr><td colspan="5">Aucun régiment de génie.</td></tr>'; // (MODIFIÉ Point 9)
    document.getElementById('regiment-table-garde').innerHTML = htmlGarde || '<tr><td colspan="5">Aucun régiment de la garde.</td></tr>';
    
    // Met à jour les compteurs
    document.getElementById('regiment-count-inf').textContent = countInf;
    document.getElementById('regiment-count-cav').textContent = countCav;
    document.getElementById('regiment-count-art').textContent = countArt;
    document.getElementById('regiment-count-genie').textContent = countGenie; // (MODIFIÉ Point 9)
    document.getElementById('regiment-count-garde').textContent = countGarde;

    // === 6. MISE À JOUR GARDE NATIONALE (Point 6) ===
    const popMetropole = f.ETAT_DYNAMIQUE.population_metropole;
    const ratio = f.MODIFICATEURS.garde_nationale_ratio;    
    const cible = Math.floor(popMetropole / ratio);
    const actuel = Math.floor(f.ARMEE.milice_metropole);
    const fusilsRequis = cible; 
    const cout = cible * GARDE_NATIONALE_SPECS.solde_jour * 365; 
    
    // Calcul bataillons et officiers
    const R_GARDE = GARDE_NATIONALE_SPECS;
    const nb_bataillons = Math.ceil(cible / R_GARDE.taille_bataillon);
    let officiers_requis = 0;
    if (nb_bataillons > 0) {
        officiers_requis += nb_bataillons * (R_GARDE.officiers_par_bataillon.lieutenant_colonel + R_GARDE.officiers_par_bataillon.capitaine + R_GARDE.officiers_par_bataillon.lieutenant);
        officiers_requis += Math.ceil(nb_bataillons / 2) * (R_GARDE.officiers_par_2_bataillons.colonel + R_GARDE.officiers_par_2_bataillons.general_brigade);
        officiers_requis += Math.ceil(nb_bataillons / 4) * R_GARDE.officiers_par_4_bataillons.general_division;
    }

    document.getElementById('garde-ratio-display').textContent = ratio;
    document.getElementById('slider-garde-ratio').value = ratio;
    document.getElementById('garde-cible').textContent = cible.toLocaleString();
    document.getElementById('garde-actuel').textContent = actuel.toLocaleString();
    document.getElementById('garde-fusils').textContent = fusilsRequis.toLocaleString();
    document.getElementById('garde-cout').textContent = `${cout.toLocaleString()} LT/an`; 
    document.getElementById('garde-bataillons').textContent = nb_bataillons.toLocaleString();
    document.getElementById('garde-officiers-requis').textContent = officiers_requis.toLocaleString();


    // === 7. MISE À JOUR DES VALEURS DE DOCTRINE (MODIFIÉ Point 5) ===
    const doctrine = f.ARMEE.doctrine;
    // Infanterie
    const inf_total = (doctrine.infanterie.soldats_compagnie + doctrine.infanterie.sous_officiers_compagnie) * doctrine.infanterie.compagnies_bataillon * doctrine.infanterie.bataillons_regiment;
    
    document.getElementById('doctrine-inf-soldats').value = doctrine.infanterie.soldats_compagnie;
    document.getElementById('doctrine-inf-sous_officiers').value = doctrine.infanterie.sous_officiers_compagnie;
    document.getElementById('doctrine-inf-compagnies').value = doctrine.infanterie.compagnies_bataillon;
    document.getElementById('doctrine-inf-bataillons').value = doctrine.infanterie.bataillons_regiment;
    document.getElementById('doctrine-inf-total').textContent = `${inf_total} Hommes (${doctrine.infanterie.sous_officiers_compagnie * doctrine.infanterie.compagnies_bataillon * doctrine.infanterie.bataillons_regiment} Sous-Officiers)`;

    // Cavalerie
    const cav_total = (doctrine.cavalerie.soldats_escadron + doctrine.cavalerie.sous_officiers_escadron) * doctrine.cavalerie.escadrons_regiment;
    
    document.getElementById('doctrine-cav-soldats').value = doctrine.cavalerie.soldats_escadron;
    document.getElementById('doctrine-cav-sous_officiers').value = doctrine.cavalerie.sous_officiers_escadron;
    document.getElementById('doctrine-cav-escadrons').value = doctrine.cavalerie.escadrons_regiment;
    document.getElementById('doctrine-cav-total').textContent = `${cav_total} Cavaliers (${doctrine.cavalerie.sous_officiers_escadron * doctrine.cavalerie.escadrons_regiment} Sous-Officiers)`;
    
    // (Tableau des salaires des officiers supérieurs - Point 5)
    let htmlArmySalary = '';
    const salairesTerre = f.ECONOMIE.salaires_base.officiers;
    Object.keys(salairesTerre).forEach(rang => {
        const salaire = salairesTerre[rang];
        htmlArmySalary += `
            <tr>
                <td>${rang.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                <td><input type="number" value="${salaire}" onchange="updateSalaireInput('officier_terre', this.value, '${rang}')"></td>
            </tr>
        `;
    });
    document.getElementById('army-salary-table').innerHTML = htmlArmySalary;
}

/**
 * NOUVEAU : Met à jour l'onglet "Opérations Militaires"
 * (CORRIGÉ : Rempli)
 */
function updateOperationsTab() {
    console.log("Mise à jour onglet Opérations...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // === 1. Armées Formées ===
    const armeesTable = document.getElementById('armees-list-table');
    let htmlArmees = '';
    let armeesCount = 0;
    
    f.ARMEE.armees.forEach((armee, index) => {
        const province = MONDE[armee.localisation];
        const localisationNom = province ? province.nom_affiche : 'Inconnue';
        
        // MODIFIÉ (Point 9) - calculerPuissanceCombat retourne un objet
        const puissanceInfo = armee.calculerPuissanceCombat();
        const puissance = puissanceInfo.total || 0; 
        
        const statutClass = armee.statut === 'invasion' ? 'negative' : 'neutral';
        
        htmlArmees += `
            <tr>
                <td>${armee.nom}</td>
                <td>${localisationNom}</td>
                <td>${armee.regiments.length}</td>
                <td>${Math.floor(puissance).toLocaleString()}</td>
                <td><strong class="${statutClass}">${armee.statut}</strong></td>
                <td>
                    <button onclick="ouvrirModalGestionArmee(${index})">Gérer</button>
                    <button onclick="dissoudreArmee(${index})" class="btn-danger">Dissoudre</button>
                </td>
            </tr>
        `;
        armeesCount++;
    });
    
    document.getElementById('armees-count').textContent = armeesCount;
    armeesTable.innerHTML = htmlArmees || '<tr><td colspan="6">Aucune armée formée.</td></tr>';

    // === 2. Régiments en Garnison ===
    const garnisonContainer = document.getElementById('garnison-list-container');
    let htmlGarnison = '';
    
    // Grouper les régiments par province
    const regimentsParProvince = {};
    f.ARMEE.regiments.forEach((reg, index) => {
        if (!reg.assigne_a_armee) { // Seulement ceux en garnison
            if (!regimentsParProvince[reg.localisation]) {
                regimentsParProvince[reg.localisation] = [];
            }
            regimentsParProvince[reg.localisation].push({ reg: reg, index: index });
        }
    });

    // Afficher
    Object.keys(regimentsParProvince).forEach(provinceId => {
        const province = MONDE[provinceId];
        const nomProvince = province ? province.nom_affiche : 'Localisation Inconnue';
        
        htmlGarnison += `<details class="collapsible-section-simple" open><summary><h4>Garnison de ${nomProvince}</h4></summary>`;
        htmlGarnison += `<table class="data-table"><thead><tr><th></th><th>Nom</th><th>Type</th><th>Effectif</th></tr></thead><tbody>`;
        
        regimentsParProvince[provinceId].forEach(item => {
            const reg = item.reg;
            const effectifClass = reg.effectif_actuel < reg.effectif_max ? 'negative' : 'positive';
            htmlGarnison += `
                <tr>
                    <td><input type="checkbox" name="regiment-select" value="${item.index}" data-province="${provinceId}"></td>
                    <td>${reg.nom}</td>
                    <td>${reg.type}</td>
                    <td><strong class="${effectifClass}">${reg.effectif_actuel.toLocaleString()}</strong> / ${reg.effectif_max.toLocaleString()}</td>
                </tr>
            `;
        });
        
        htmlGarnison += `</tbody></table></details>`;
    });

    garnisonContainer.innerHTML = htmlGarnison || '<p>Aucun régiment en garnison.</p>';
}

/**
 * NOUVEAU : Met à jour l'onglet "Diplomatie"
 * (CORRIGÉ : Rempli)
 */
function updateDiplomacyTab() {
    console.log("Mise à jour onglet Diplomatie...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // === 1. Guerres Actives ===
    const guerresTable = document.getElementById('guerres-actives-table');
    let htmlGuerres = '';
    const guerresImpliquantJoueur = GAME_STATE.guerresActives.filter(g => 
        g.attaquants.includes(f.nom) || g.defenseurs.includes(f.nom)
    );

    if (guerresImpliquantJoueur.length === 0) {
        htmlGuerres = '<tr><td colspan="3">Vous êtes actuellement en paix.</td></tr>';
    } else {
        guerresImpliquantJoueur.forEach(guerre => {
            // Le score est du point de vue de l'attaquant
            let score = guerre.scoreDeGuerre;
            let scoreClass = 'neutral';
            // Si NOUS sommes le défenseur, on inverse le score pour l'affichage
            if (guerre.defenseurs.includes(f.nom)) {
                score = -score;
            }
            if (score > 10) scoreClass = 'positive';
            if (score < -10) scoreClass = 'negative';

            htmlGuerres += `
                <tr>
                    <td>${guerre.nom}</td>
                    <td><strong class="${scoreClass}">${score.toFixed(0)} %</strong></td>
                    <td><button onclick="proposerPaix('${guerre.id}')">Proposer la Paix</button></td>
                </tr>
            `;
        });
    }
    guerresTable.innerHTML = htmlGuerres;

    // === 2. Relations Diplomatiques ===
    const diploTable = document.getElementById('diplomatie-list-table');
    let htmlDiplo = '';

    Object.values(FACTIONS_DATA).forEach(autreFaction => {
        if (autreFaction.nom === f.nom) return; // Ne pas s'afficher soi-même

        let statut = f.DIPLOMATIE.relations[autreFaction.nom] || "Paix";
        let statutClass = 'neutral';
        let actions = `<button onclick="declarerGuerre('${autreFaction.nom}')" class="btn-danger">Déclarer la Guerre</button>`;

        if (statut === "Guerre") {
            statutClass = 'negative';
            actions = `(En Guerre)`;
        }
        
        htmlDiplo += `
            <tr>
                <td>${autreFaction.nom}</td>
                <td><strong class="${statutClass}">${statut}</strong></td>
                <td>${actions}</td>
            </tr>
        `;
    });
    diploTable.innerHTML = htmlDiplo;
}

/**
 * NOUVEAU : Met à jour l'onglet "Marine"
 * (CORRIGÉ : Rempli)
 * (MODIFIÉ - Point 2)
 */
function updateNavyTab() {
    console.log("Mise à jour onglet Marine...");
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    // === 1. Résumé ===
    let countLigne = 0, countEscorte = 0;
    f.MARINE.flotte.forEach(n => {
        const def = BUILD_DEFINITIONS.navires[n.type];
        if (!def) return;
        if (def.type === 'ligne') countLigne++;
        else countEscorte++;
    });
    
    const marinsTotal = f.RESERVES.reserve_marins_max;
    const marinsUtilises = f.RESERVES.marins_marine_guerre + f.RESERVES.marins_commerce_peche;
    const marinsDispo = marinsTotal - marinsUtilises;
    const radoub = calculerCapaciteRadoub(f);

    document.getElementById('summary-marine-ligne').textContent = countLigne;
    document.getElementById('summary-marine-fregates').textContent = countEscorte;
    document.getElementById('summary-marine-marins').textContent = `${Math.floor(marinsDispo).toLocaleString()} / ${Math.floor(marinsTotal).toLocaleString()}`;
    document.getElementById('summary-marine-radoub').textContent = `${radoub.utilisee} / ${radoub.total}`;
    
    // === NOUVEAU (Point 2) : Détail des Coûts ===
    const budgets = f.DEPENSES_BUDGET;
    document.getElementById('marine-cout-marins').textContent = `${Math.floor(budgets.salaire_marins_reel || 0).toLocaleString()} LT`;
    document.getElementById('marine-cout-officiers').textContent = `${Math.floor(budgets.salaire_officiers_marine_reel || 0).toLocaleString()} LT`;
    document.getElementById('marine-detail-entretien').textContent = `${Math.floor(budgets.c_marine_entretien || 0).toLocaleString()} LT`;
    document.getElementById('marine-detail-appro').textContent = `${Math.floor(budgets.c_marine_appro || 0).toLocaleString()} LT`;

    // === 2. Construction Navale ===
    const navireSelect = document.getElementById('navire-type-select');
    let htmlNavire = '<option value="">-- Type de Navire --</option>';
    Object.keys(BUILD_DEFINITIONS.navires).forEach(key => {
        const def = BUILD_DEFINITIONS.navires[key];
        htmlNavire += `<option value="${key}">${def.nom} (${(def.cout / 1000).toFixed(0)}k LT)</option>`;
    });
    navireSelect.innerHTML = htmlNavire;

    // === 3. Infrastructure Navale ===
    document.getElementById('arsenal-count').textContent = f.INFRASTRUCTURE.arsenaux.length;
    const arsenalTable = document.getElementById('arsenal-table');
    let htmlArsenal = '';
    f.INFRASTRUCTURE.arsenaux.forEach(ars => {
        const def = BUILD_DEFINITIONS.infrastructures_navales[ars.type];
        htmlArsenal += `
            <tr>
                <td>${def.nom}</td>
                <td>1</td>
                <td>${def.cales_radoub} cale(s) de radoub. Entretien: ${def.entretien.toLocaleString()} LT</td>
            </tr>
        `;
    });
    htmlArsenal += `
        <tr>
            <td>Écoles Navales</td>
            <td>${f.MARINE.ecoles_navales}</td>
            <td>(Forme officiers de marine)</td>
        </tr>
    `;
    arsenalTable.innerHTML = htmlArsenal;

    // === 4. Gestion de la Flotte ===
    let htmlLigne = '', htmlEscorte = '';
    
    f.MARINE.flotte.forEach((navire, index) => {
        const def = BUILD_DEFINITIONS.navires[navire.type];
        if (!def) return;

        let statutClass = 'neutral';
        if (navire.statut === 'arme' || navire.statut === 'en-course') statutClass = 'positive';
        if (navire.statut === 'radoub-requis') statutClass = 'negative';
        
        let actions = `
            <button onclick="flotteAction('arme', ${index})">Armer</button>
            <button onclick="flotteAction('desarme', ${index})">Désarmer</button>
            <button onclick="renommerNavire(${index})">Renommer</button>
        `;
        if (navire.statut === 'radoub-requis') {
            actions += `<button onclick="lancerRadoub(${index})" class="btn-danger">Radoub</button>`;
        }
        if (def.action_speciale === 'carener' && !navire.carene_cuivre) {
            actions += `<button onclick="lancerActionSpecialeNavire(${index}, 'carener')">Caréner</button>`;
        }
        if (def.action_speciale === 'course_etat') {
            actions += `<button onclick="lancerActionSpecialeNavire(${index}, 'course_etat')">Course</button>`;
        }
        // Bouton Supprimer ajouté
        actions += `<button onclick="retirerNavire(${index})" class="btn-danger">Retirer</button>`;
        
        const htmlRow = `
            <tr>
                <td>${navire.nom || navire.type}</td>
                <td>${navire.type}</td>
                <td><strong class="${statutClass}">${navire.statut.replace(/-/g, ' ')}</strong></td>
                <td>${navire.age} ans</td>
                <td>${actions}</td>
            </tr>
        `;
        
        if (def.type === 'ligne') htmlLigne += htmlRow;
        else htmlEscorte += htmlRow;
    });

    document.getElementById('fleet-count-ligne').textContent = countLigne;
    document.getElementById('fleet-count-escorte').textContent = countEscorte;
    document.getElementById('fleet-table-ligne').innerHTML = htmlLigne || '<tr><td colspan="5">Aucun vaisseau de ligne.</td></tr>';
    document.getElementById('fleet-table-escorte').innerHTML = htmlEscorte || '<tr><td colspan="5">Aucune frégate ou navire d\'escorte.</td></tr>';
}

/**
 * NOUVEAU : Met à jour l'onglet "Colonies"
 * (MODIFIÉ : Ajout du bouton "Gérer la Ville" et affichage du climat)
 */
function updateColoniesTab() {
    console.log("Mise à jour onglet Colonies...");
    const f = GAME_STATE.currentFaction;
    
    // Gère les factions non-coloniales
    const container = document.getElementById('tab-colonies');
    if (estNonColonial(f)) {
        container.innerHTML = '<div class="card"><h2>Statut Colonial</h2><p>Cette faction n\'a pas de politique coloniale.</p></div>';
        return;
    } else {
        // S'assurer que le contenu est visible si on change DE non-colonial A colonial
        if (container.querySelector('p')) {
             // Si on ne trouve que le message "pas de politique", il faut recharger le HTML
             // C'est un cas complexe, pour l'instant on log
             console.log("Rechargement de l'onglet Colonie nécessaire.");
             // Idéalement, il faudrait avoir le HTML de base de l'onglet en cache pour le ré-injecter
        }
    }
    
    // === 1. Résumé ===
    const pop = f.ETAT_DYNAMIQUE.population_colonies;
    document.getElementById('summary-colonie-pop').textContent = Math.floor(pop.total).toLocaleString();
    document.getElementById('pop-colons-total').textContent = Math.floor(pop.colons).toLocaleString();
    document.getElementById('pop-indigenes-total').textContent = Math.floor(pop.indigenes).toLocaleString();
    document.getElementById('pop-esclaves-total').textContent = Math.floor(pop.esclaves).toLocaleString();
    
    const hectaresCultives = f.COLONIES.campagne_hectares + f.COLONIES.villes.reduce((s, v) => s + v.hectares, 0);
    document.getElementById('summary-colonie-hectares').textContent = Math.floor(hectaresCultives).toLocaleString() + " ha";
    document.getElementById('summary-colonie-terres').textContent = Math.floor(f.COLONIES.terres_disponibles).toLocaleString() + " ha";
    document.getElementById('summary-colonie-milice').textContent = Math.floor(f.ARMEE.milice_coloniale).toLocaleString();

    // === 2. Villes Coloniales ===
    const cityTable = document.getElementById('colony-city-table');
    let htmlCity = '';
    f.COLONIES.villes.forEach((ville, index) => {
        htmlCity += `
            <tr>
                <td>${ville.nom}</td>
                <td>${ville.type} (${ville.climat || 'N/A'})</td>
                <td>${Math.floor(ville.pop_colons).toLocaleString()}</td>
                <td>${Math.floor(ville.pop_indigenes).toLocaleString()}</td>
                <td>${Math.floor(ville.pop_esclaves).toLocaleString()}</td>
                <td>
                    <button onclick="ouvrirModalGestionVilleColonie(${index})">Gérer</button>
                    <button onclick="ouvrirModalTransfertColonie(${index})">Transférer</button>
                    <button onclick="renommerVilleColonie(${index})">Renommer</button>
                </td>
            </tr>
        `;
    });
    document.getElementById('colony-city-count').textContent = f.COLONIES.villes.length;
    cityTable.innerHTML = htmlCity || '<tr><td colspan="6">Aucune ville fondée.</td></tr>';

    // === 3. Production Coloniale ===
    const prodTable = document.getElementById('colonial-production-table');
    let htmlProd = '';
    const prodTotale = {};
    
    // Calculer la production totale (Villes + Campagne)
    f.COLONIES.villes.forEach(ville => {
        const mult = ville.production_mult || 1.0;
        Object.keys(ville.terres_cultivees).forEach(key => {
            if (!prodTotale[key]) prodTotale[key] = { hectares: 0, qte: 0 };
            const ha = ville.terres_cultivees[key];
            prodTotale[key].hectares += ha;
            prodTotale[key].qte += (ha * (YIELD_PER_HECTARE[key] || 0)) * mult;
        });
    });
    
    const multCampagne = f.COLONIES.production_mult || 1.0;
    Object.keys(f.COLONIES.campagne_terres_cultivees).forEach(key => {
        if (!prodTotale[key]) prodTotale[key] = { hectares: 0, qte: 0 };
        const ha = f.COLONIES.campagne_terres_cultivees[key];
        prodTotale[key].hectares += ha;
        prodTotale[key].qte += (ha * (YIELD_PER_HECTARE[key] || 0)) * multCampagne;
    });

    // Ajouter les fourrures
    prodTotale['fourrure_piece'] = { 
        hectares: 0, 
        qte: (f.COLONIES.production_fourrures_base || 0) * multCampagne 
    };
    
    // Afficher la production
    Object.keys(prodTotale).forEach(key => {
        const data = prodTotale[key];
        const nom = CROP_MAPPING[key] ? CROP_MAPPING[key].ui : "Fourrures";
        const prix = GAME_PRICES[key] || 0;
        const valeur = data.qte * prix;
        
        htmlProd += `
            <tr>
                <td>${nom} (${Math.floor(data.hectares).toLocaleString()} ha)</td>
                <td>${Math.floor(data.qte).toLocaleString()} ${key.includes('piece') ? 'pièces' : 'kg'}</td>
                <td>${Math.floor(valeur).toLocaleString()} LT</td>
            </tr>
        `;
    });
    prodTable.innerHTML = htmlProd;
}

// =======================================================
// SECTION 7: ACTIONS DU JOUEUR (INTERACTIVITÉ)
// =======================================================

/**
 * NOUVEAU : Fonction-outil pour générer le HTML d'une infobulle.
 * @param {object} def - La définition du bâtiment (ex: BUILD_DEFINITIONS.batiments_speciaux.universite)
 * @returns {string} - Le HTML complet du span "tooltip-text".
 */
function genererTooltipHTML(def) {
    if (!def) return '';

    let html = `<span class="tooltip-text"><b>${def.nom}</b><br>`;
    html += `Coût: ${def.cout.toLocaleString()} LT<br>`;

    // Coûts en ressources
    const cons = def.consommation_construction;
    if (cons) {
        if (cons.bois) html += `Bois: ${cons.bois} m³<br>`;
        if (cons.fer) html += `Fer: ${cons.fer} T<br>`;
        if (cons.cuivre) html += `Cuivre: ${cons.cuivre} Q<br>`;
    }
    
    // Coûts en personnel
    if (def.ouvriers) html += `Ouvriers: ${def.ouvriers}<br>`;
    if (def.admin_requis) html += `Admin: +${def.admin_requis}, +${(def.salaire_ajout || 0).toLocaleString()} LT/an<br>`;
    
    html += `<hr style="margin: 4px 0;"><b>Effets :</b><br>`;
    
    // Effets RNB & Production
    if (def.rbn_bonus) html += `+${def.rbn_bonus.toLocaleString()} RNB/an<br>`;
    if (def.prod_fusil) html += `+${def.prod_fusil.toLocaleString()} Fusils/an<br>`;
    if (def.prod_canon_terre) html += `+${def.prod_canon_terre.toLocaleString()} Canons (Terre)/an<br>`;
    if (def.prod_chevaux) html += `+${def.prod_chevaux.toLocaleString()} Chevaux/an<br>`;
    if (def.prod_or_kg) html += `+${def.production_or_kg}kg Or/an<br>`;
    // ... (on peut ajouter tous les 'prod_...')

    // Effets Spéciaux
    if (def.bonus_formation) html += `+${def.bonus_formation * 100}% Vitesse Formation Officiers<br>`;
    if (def.efficacite_bonus) html += `+${def.efficacite_bonus}% Plafond Efficacité Admin<br>`;
    if (def.bonus_stabilite_annuel) html += `+${def.bonus_stabilite_annuel} Stabilité/an<br>`;
    if (def.bonus_stabilite) html += `+${def.bonus_stabilite} Stabilité (Immédiat)<br>`;
    if (def.malus_croissance_pop) html += `${def.malus_croissance_pop * 100}% Croissance Population<br>`;
    if (def.bonus_revenus_fiscaux_pct) html += `+${def.bonus_revenus_fiscaux_pct * 100}% Revenus Fiscaux<br>`;
    if (def.bonus_moral_armee) html += `+${def.bonus_moral_armee} Moral Armée/an<br>`;
    if (def.bonus_cout_pensions_pct) html += `+${def.bonus_cout_pensions_pct * 100}% Coût Pensions<br>`;
    if (def.bonus_croissance_marchands) html += `+${def.bonus_croissance_marchands * 100}% Croissance Flotte Marchande<br>`;
    if (def.bonus_douane_pct) html += `+${def.bonus_douane_pct * 100}% Taux Impôt Douanes<br>`;
    if (def.bonus_interet_dette) html += `${def.bonus_interet_dette * 100}% Taux d'Intérêt<br>`;
    if (def.bonus_production_ville_pct) html += `+${def.bonus_production_ville_pct * 100}% Production (Cette Ville)<br>`;
    if (def.bonus_valeur_rnb_sucre_pct) html += `+${def.bonus_valeur_rnb_sucre_pct * 100}% Valeur RNB Sucre<br>`;
    if (def.bonus_qualite_marine) html += `+${def.bonus_qualite_marine} Qualité Marine/an<br>`;
    
    html += `</span>`;
    return html;
}

/**
 * Promulgue un nouvel impôt depuis la modale.
 */
function promulguerImpot() {
    const nom = document.getElementById('tax-name-input').value;
    const type = document.getElementById('tax-type-select').value;
    if (!nom || !type) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const f = GAME_STATE.currentFaction;
    
    if (type === 'direct') {
        // (Obsolète, géré par Tranches)
        alert("Les impôts directs sont désormais gérés par Tranches de Revenus dans l'onglet 'Politique'.");
        return;
    } else {
        const rendement = parseFloat(document.getElementById('tax-yield-input').value) || 0;
        f.ECONOMIE.impots.indirects.push({
            nom: nom,
            base: 0, // Base pour les bonus passifs
            rendement_habitant: rendement,
            modifiable: true
        });
    }
    
    logToUI(`Nouvel impôt indirect "${nom}" promulgué.`, "success");
    toggleModal('modal-tax', false);
    updateBudgetTab();
}

/**
 * Met à jour un taux d'imposition depuis le tableau.
 */
function updateImpotTaux(type, index, valeur, isPercent = false) {
    const f = GAME_STATE.currentFaction;
    const val = parseFloat(valeur) || 0;
    
    try {
        if (type === 'directs') {
            // (Obsolète)
            return;
        } else {
            if (isPercent) { 
                f.ECONOMIE.impots.indirects[index].taux_effectif = val / 100;
            } else { 
                f.ECONOMIE.impots.indirects[index].rendement_habitant = val;
            }
        }
        logToUI(`Taux de l'impôt "${f.ECONOMIE.impots[type][index].nom}" ajusté.`);
        updateBudgetTab();
    } catch (e) {
        logToUI(`Erreur lors de la mise à jour de l'impôt.`, "error");
    }
}

/**
 * Met à jour une dépense budgétaire (slider simple).
 * (MODIFIÉ - Point 6)
 */
function updateDepenseSlider(key, valeur) {
    const f = GAME_STATE.currentFaction;
    f.DEPENSES_BUDGET[key] = parseFloat(valeur) || 0;
    
    const label = document.querySelector(`label[for="slider-${key}"]`);
    if (label) {
        let labelText = key.charAt(0).toUpperCase() + key.slice(1);
        // (MODIFIÉ Point 6) - La logique 'infrastructure' est supprimée
        label.textContent = `${labelText} (${Math.floor(valeur).toLocaleString()} LT)`;
    }
    
    updateBudgetTab();
    updateAdminTab();
}

/**
 * NOUVEAU (Point 6) : Met à jour un budget d'investissement depuis un input manuel
 * (Remplace l'ancien slider d'infrastructure)
 */
function updateDepenseInput(key, valeur) {
    const f = GAME_STATE.currentFaction;
    const val = parseFloat(valeur) || 0;
    
    f.DEPENSES_BUDGET[key] = val;
    
    logToUI(`Budget de ${key} ajusté à ${val.toLocaleString()} LT.`, "info");

    // Recalcule immédiatement les dépenses
    updateBudgetTab();
    updateAdminTab();
}


/**
 * Met à jour un modificateur de budget de service (pensions).
 */
function updateBudgetSlider(key, valeur) {
    const f = GAME_STATE.currentFaction;
    const valPercent = parseFloat(valeur) || 100;
    const modKey = `budget_${key}_mod`; 
    
    f.MODIFICATEURS[modKey] = valPercent / 100; 

    const label = document.querySelector(`label[for="slider-budget-${key}"]`);
    if (label) {
        const labelPrefix = label.textContent.split('(')[0];
        label.textContent = `${labelPrefix}(${valPercent.toFixed(0)}%)`;
    }
    
    updateBudgetTab();
    updateAdminTab();
}

/**
 * NOUVEAU : Met à jour un ratio de personnel (police, percepteurs, poste)
 * (MODIFIÉ - Point 7)
 */
function updateRatioSlider(key, valeur) {
    const f = GAME_STATE.currentFaction;
    const valRatio = parseInt(valeur, 10) || 1000;
    const modKey = `ratio_${key}`; 
    
    f.MODIFICATEURS[modKey] = valRatio; 

    const label = document.getElementById(`ratio-${key}-display`);
    if (label) {
        label.textContent = valRatio.toLocaleString();
    }
    
    // Recalculer les coûts affichés en temps réel
    const pop = f.ETAT_DYNAMIQUE.population_metropole;
    let cout = 0;
    if (key === 'police') {
        cout = (pop / valRatio) * SALAIRE_BASE_AGENT.gendarme;
        document.getElementById(`cout-ratio-${key}`).textContent = `${Math.floor(cout).toLocaleString()} LT`;
    }
    else if (key === 'percepteurs') {
        cout = (pop / valRatio) * SALAIRE_BASE_AGENT.percepteur;
        // (MODIFIÉ Point 7) - Met à jour le label de description
        document.querySelector(`#slider-ratio-percepteurs + p`).innerHTML = `Affecte le <b>Rendement des Impôts</b> et du <b>Domaine</b>. Coût annuel: <strong id="cout-ratio-percepteurs">${Math.floor(cout).toLocaleString()} LT</strong>`;
    }
    else if (key === 'poste') {
        cout = (pop / valRatio) * SALAIRE_BASE_AGENT.postier;
        document.getElementById(`cout-ratio-${key}`).textContent = `${Math.floor(cout).toLocaleString()} LT`;
    }
    
    updateBudgetTab();
    updateAdminTab();
}


/**
 * NOUVEAU : Met à jour le slider d'exploitation forestière.
 */
function updateExploitationSlider(key, valeur) {
    const f = GAME_STATE.currentFaction;
    const valPercent = parseFloat(valeur) || 100;
    f.MODIFICATEURS[key] = valPercent / 100; 

    const label = document.querySelector(`label[for="slider-foret"]`);
    if (label) {
        label.textContent = `Taux d'exploitation (${valPercent.toFixed(0)}%)`;
    }
    
    updateRessourcesTab();
}

/**
 * Améliore une manufacture (militaire ou civile) au niveau suivant.
 * (MODIFIÉ : Gère les 'mines' et l'ajout d'admin/salaires/ouvriers)
 * (MODIFIÉ - Point 10)
 */
function upgraderManufacture(type, index) {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    let manufacture, def, defUpgrade, categorie, liste;

    if (type === 'militaire') {
        liste = f.INFRASTRUCTURE.manufactures_armes;
        categorie = BUILD_DEFINITIONS.manufactures_armes;
    } else if (type === 'civile') { 
        liste = f.INFRASTRUCTURE.manufactures_civiles;
        categorie = BUILD_DEFINITIONS.manufactures_civiles;
    } else { // 'mine'
        liste = f.INFRASTRUCTURE.mines;
        categorie = BUILD_DEFINITIONS.mines;
    }
    
    manufacture = liste[index];
    if (!manufacture) return;
    
    def = categorie[manufacture.type];

    // NOUVEAU (Point 10) - Vérification Haras
    if (def.prod_chevaux) {
        logToUI("Les haras ne peuvent pas être améliorés.", "info");
        return;
    }
    
    if (!def || !def.upgrade_vers) {
        logToUI("Cette manufacture est déjà au niveau maximum.", "error");
        return;
    }
    
    defUpgrade = categorie[def.upgrade_vers];
    
    const recette = def.consommation_upgrade || {};
    const boisRequis = recette.bois || 0;
    const ferRequis = recette.fer || 0;
    const charbonRequis = recette.charbon || 0; 

    // Vérification Ouvriers
    const ouvriersAjoutes = (defUpgrade.ouvriers || 0) - (def.ouvriers || 0);
    if (ouvriersAjoutes > f.ETAT_DYNAMIQUE.population_disponible) {
        alert(`Population disponible insuffisante pour l'amélioration ! Requis: ${ouvriersAjoutes} ouvriers, Disponible: ${Math.floor(f.ETAT_DYNAMIQUE.population_disponible)}`);
        return;
    }

    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }
    if (ferRequis > stocks.fer) {
        alert(`Stock de fer insuffisant ! Requis: ${ferRequis} T, Disponible: ${Math.floor(stocks.fer)}`);
        return;
    }
    if (charbonRequis > stocks.charbon) {
        alert(`Stock de charbon insuffisant ! Requis: ${charbonRequis} T, Disponible: ${Math.floor(stocks.charbon)}`);
        return;
    }
    
    const coutTotal = def.cout_upgrade;
    
    stocks.bois -= boisRequis;
    stocks.fer -= ferRequis;
    stocks.charbon -= charbonRequis;
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.construction_extra += coutTotal;

    // Assigner Nouveaux Ouvriers
    f.ETAT_DYNAMIQUE.population_disponible -= ouvriersAjoutes;
    f.ETAT_DYNAMIQUE.population_assignee_industrie += ouvriersAjoutes;

    const adminAjoutes = (defUpgrade.admin_requis || 0) - (def.admin_requis || 0);
    const salaireAjoute = (defUpgrade.salaire_ajout || 0) - (def.salaire_ajout || 0);
    const efficacitePlafondAjoute = (defUpgrade.efficacite_bonus || 0) - (def.efficacite_bonus || 0);

    f.ETAT_DYNAMIQUE.administrateurs_total += adminAjoutes;
    f.ECONOMIE.salaires_base.administration += salaireAjoute;
    f.ETAT_DYNAMIQUE.admin_efficacite_plafond += efficacitePlafondAjoute;
    
    manufacture.type = def.upgrade_vers; 
    
    logToUI(`Manufacture améliorée en ${defUpgrade.nom}. (${ouvriersAjoutes} ouvriers assignés, +${adminAjoutes} admin)`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");
    
    updateFullDashboard();
}

/**
 * NOUVEAU : Installe un moteur à vapeur sur une manufacture civile
 */
function installerMoteur(index) {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    const manu = f.INFRASTRUCTURE.manufactures_civiles[index];
    const def = BUILD_DEFINITIONS.manufactures_civiles[manu.type];
    
    if (!manu || !def) return;
    
    if (manu.moteur_installe) {
        logToUI("Cette manufacture est déjà équipée d'un moteur.", "info");
        return;
    }
    
    const moteursRequis = 1;
    if ((stocks.moteurs_vapeur || 0) < moteursRequis) {
        alert(`Stock de Moteurs à Vapeur insuffisant ! Requis: 1, Disponible: ${stocks.moteurs_vapeur || 0}`);
        return;
    }
    
    stocks.moteurs_vapeur -= moteursRequis;
    manu.moteur_installe = true;
    
    logToUI(`Moteur à vapeur installé sur ${def.nom}. Elle consommera du charbon mais son RNB augmentera de 10%.`, "success");
    updateIndustrieTab();
}


/**
 * Construit un bâtiment "simple" (école, université) sans modale.
 * (MODIFIÉ : Gère les coûts admin/salaire et les nouveaux bâtiments nationaux)
 */
function construireBatimentSimple(type) {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    // (MODIFIÉ) - Vérifie plusieurs listes de définitions
    const def = BUILD_DEFINITIONS.batiments_speciaux[type] || BUILD_DEFINITIONS.manufactures_civiles[type];
    
    if (!def) {
        alert("Type de bâtiment inconnu: " + type);
        return;
    }

    const recette = def.consommation_construction || {};
    const boisRequis = recette.bois || 0;
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }
    
    // (MODIFIÉ) - Vérification Ouvriers
    const ouvriersRequis = (def.ouvriers || 0);
    if (ouvriersRequis > f.ETAT_DYNAMIQUE.population_disponible) {
        alert(`Population disponible insuffisante pour ce bâtiment ! Requis: ${ouvriersRequis} ouvriers, Disponible: ${Math.floor(f.ETAT_DYNAMIQUE.population_disponible)}`);
        return;
    }
    
    const cout = def.cout;
    
    // --- VÉRIFICATION BÂTIMENT UNIQUE (POUR BIBLIOTHÈQUE, ETC.) ---
    if (def.unique) {
        // Vérifie si la faction actuelle l'a déjà
        if (GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[type] && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[type][f.nom]) {
            alert(`Construction impossible : Vous ne pouvez construire qu'un seul "${def.nom}" !`);
            return;
        }
        // Vérifie s'il est dans un projet de ville (au cas où)
        const dejaConstruit = f.INFRASTRUCTURE.villes.some(v => v.projets.includes(type));
        if (dejaConstruit) {
            alert(`Construction impossible : Vous avez déjà construit "${def.nom}" dans une de vos villes !`);
            return;
        }
    }

    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }
    
    stocks.bois -= boisRequis;
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    
    // (MODIFIÉ) - Allocation Ouvriers
    f.ETAT_DYNAMIQUE.population_disponible -= ouvriersRequis;
    f.ETAT_DYNAMIQUE.population_assignee_industrie += ouvriersRequis;

    const adminAjoutes = (def.admin_requis || 0);
    const salaireAjoute = (def.salaire_ajout || 0);
    const efficacitePlafondAjoute = (def.efficacite_bonus || 0);

    f.ETAT_DYNAMIQUE.administrateurs_total += adminAjoutes;
    f.ECONOMIE.salaires_base.administration += salaireAjoute;
    f.ETAT_DYNAMIQUE.admin_efficacite_plafond += efficacitePlafondAjoute;
    
    let msg = "";
    if (type === 'universite') {
        f.INFRASTRUCTURE.universites++;
        msg = "Construction d'une université lancée.";
    } else if (type === 'lycee') {
        f.INFRASTRUCTURE.lycees++;
        msg = "Construction d'un lycée lancée.";
    } else if (type === 'ecole_primaire') { 
        f.INFRASTRUCTURE.ecoles_primaires += 10;
        msg = "Construction de 10 écoles primaires lancée.";
    } else if (type === 'ecole_militaire') {
        f.ARMEE.ecoles_militaires++;
        msg = "Construction d'une école militaire lancée.";
    } else if (type === 'ecole_navale') {
        f.MARINE.ecoles_navales++;
        msg = "Construction d'une école navale lancée.";
    } else if (type === 'hopital_civil') {
        f.INFRASTRUCTURE.hopitaux_civils = (f.INFRASTRUCTURE.hopitaux_civils || 0) + 1;
        msg = "Construction d'un Hôpital Civil lancée.";
    } else if (type === 'hopital_militaire') {
        f.INFRASTRUCTURE.hopitaux_militaires = (f.INFRASTRUCTURE.hopitaux_militaires || 0) + 1;
        msg = "Construction d'un Hôpital Militaire lancée.";
    } else if (type === 'haras_royal') {
        f.INFRASTRUCTURE.haras_royaux.push({ type: "haras_royal" });
        msg = "Construction d'un Haras Royal lancée.";
    
    // --- VOS NOUVEAUX BÂTIMENTS ---
    } else if (type === 'bureau_censure_royale') {
        if (!f.INFRASTRUCTURE.batiments_speciaux) f.INFRASTRUCTURE.batiments_speciaux = []; // Initialise si n'existe pas
        f.INFRASTRUCTURE.batiments_speciaux.push({ type: type });
        msg = "Construction du Bureau de la Censure lancée.";
    } else if (type === 'institut_statistique') {
        if (!f.INFRASTRUCTURE.batiments_speciaux) f.INFRASTRUCTURE.batiments_speciaux = [];
        f.INFRASTRUCTURE.batiments_speciaux.push({ type: type });
        msg = "Construction de l'Institut de Statistique lancée.";
    } else if (type === 'hotel_des_monnaies') {
        if (!f.INFRASTRUCTURE.batiments_speciaux) f.INFRASTRUCTURE.batiments_speciaux = [];
        f.INFRASTRUCTURE.batiments_speciaux.push({ type: type });
        msg = "Construction de l'Hôtel des Monnaies lancée.";
    } else if (type === 'caserne_veterans') {
        if (!f.INFRASTRUCTURE.batiments_speciaux) f.INFRASTRUCTURE.batiments_speciaux = [];
        f.INFRASTRUCTURE.batiments_speciaux.push({ type: type });
        msg = "Construction de la Caserne de Vétérans lancée.";
    }

    // Marquer comme unique si nécessaire
    if (def.unique) {
        if (!GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[type]) GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[type] = {};
        GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[type][f.nom] = true;
    }

    logToUI(`${msg} Coût: ${cout.toLocaleString()} LT. (+${adminAjoutes} admin, +${salaireAjoute.toLocaleString()} LT/an)`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");

    updateFullDashboard();
}


/**
 * Gère l'envoi de colons et l'allocation de terres.
 */
function gererColons() {
    const f = GAME_STATE.currentFaction;
    
    if (estNonColonial(f)) {
        alert("Cette nation n'a pas de politique coloniale.");
        return;
    }

    const stocks = f.RESERVES.stock_matieres_premieres;
    const colons = parseInt(document.getElementById('colons-input').value) || 0;
    const hectares = parseInt(document.getElementById('hectares-input').value) || 0;
    const cropKey = document.getElementById('crop-type-select').value; 

    if (hectares <= 0 && colons <= 0) {
        alert("Veuillez entrer un nombre de colons ou d'hectares.");
        return;
    }
    
    if (hectares > 0 && !cropKey) {
        alert("Veuillez sélectionner un type de culture à développer !");
        return;
    }

    if (hectares > f.COLONIES.terres_disponibles) {
        alert("Pas assez de terres disponibles ! Financez une exploration.");
        return;
    }
    
    const boisRequis = hectares * 1; 
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant pour défricher ! Requis: ${boisRequis} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }
    
    const coutColons = colons * GAME_SETTINGS.COUT_COLON_BASE;
    const coutHectares = hectares * GAME_SETTINGS.COUT_HECTARE_COLONIAL;
    const coutTotal = coutColons + coutHectares;
    
    stocks.bois -= boisRequis;
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.colonisation_extra += coutTotal;
    
    const colonsCampagne = colons * 0.9;
    const colonsVilles = colons * 0.1;
    f.ETAT_DYNAMIQUE.population_colonies.campagne_colons += colonsCampagne;
    
    if (colonsVilles > 0 && f.COLONIES.villes.length > 0) {
        const parVille = colonsVilles / f.COLONIES.villes.length;
        f.COLONIES.villes.forEach(ville => {
            ville.pop_colons += parVille;
        });
    } else if (colonsVilles > 0) {
        f.ETAT_DYNAMIQUE.population_colonies.campagne_colons += colonsVilles;
    }

    if (hectares > 0) {
        f.COLONIES.terres_disponibles -= hectares;
        f.COLONIES.campagne_hectares += hectares;
        if (!f.COLONIES.campagne_terres_cultivees[cropKey]) {
            f.COLONIES.campagne_terres_cultivees[cropKey] = 0;
        }
        f.COLONIES.campagne_terres_cultivees[cropKey] += hectares;
    }
    
    const cropName = cropKey ? CROP_MAPPING[cropKey].ui : "";
    logToUI(`Développement: ${colons.toLocaleString()} colons envoyés (90% campagne). ${hectares} ha de ${cropName} ajoutés à la campagne.`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");

    updateHeader();
    updateColoniesTab();
    updateRessourcesTab();
    updateTerritoireTab(); 
}

/**
 * Met à jour le coût affiché pour l'achat d'esclaves.
 */
function updateSlaveCost() {
    const quantite = parseInt(document.getElementById('esclaves-input').value) || 0;
    const coutTotal = quantite * GAME_SETTINGS.COUT_CONSTRUCTION.esclave;
    const btn = document.querySelector('#tab-colonies button[onclick="acheterEsclaves()"]');
    if (btn) {
        btn.textContent = `Acheter (Coût: ${coutTotal.toLocaleString()} LT)`;
    }
}

/**
 * Achète des esclaves pour les colonies.
 */
function acheterEsclaves() {
    const f = GAME_STATE.currentFaction;
    
    if (estNonColonial(f)) {
        alert("Cette nation n'a pas de politique coloniale.");
        return;
    }

    const quantite = parseInt(document.getElementById('esclaves-input').value) || 0;
    if (quantite <= 0) return;

    const coutTotal = quantite * GAME_SETTINGS.COUT_CONSTRUCTION.esclave;
    
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.colonisation_extra += coutTotal;
    
    const esclavesCampagne = quantite * 0.95;
    const esclavesVilles = quantite * 0.05;
    f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves += esclavesCampagne;
    
    if (esclavesVilles > 0 && f.COLONIES.villes.length > 0) {
        const parVille = esclavesVilles / f.COLONIES.villes.length;
        f.COLONIES.villes.forEach(ville => {
            ville.pop_esclaves += parVille;
        });
    } else if (esclavesVilles > 0) {
        f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves += esclavesVilles;
    }
    
    logToUI(`Achat de ${quantite.toLocaleString()} esclaves. ${esclavesCampagne.toLocaleString()} assignés à la campagne, ${esclavesVilles.toLocaleString()} aux villes.`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");

    updateHeader();
    updateColoniesTab();
}

/**
 * NOUVEAU : Fonde une nouvelle ville coloniale (Hameau)
 */
function fonderVilleColonie() {
    const f = GAME_STATE.currentFaction;
    
    if (estNonColonial(f)) {
        alert("Cette nation n'a pas de politique coloniale.");
        return;
    }

    const def = GAME_SETTINGS.COUT_CONSTRUCTION.fonder_ville_colonie;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    const boisRequis = def.bois;
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }
    
    const cout = def.cout;
    stocks.bois -= boisRequis;
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.colonisation_extra += cout;
    
    const colonsInitiaux = Math.min(Math.max(50, f.ETAT_DYNAMIQUE.population_colonies.campagne_colons * 0.001), f.ETAT_DYNAMIQUE.population_colonies.campagne_colons);
    const indigenesInitiaux = Math.min(Math.max(100, f.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes * 0.00001), f.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes);
    const esclavesInitiaux = Math.min(Math.max(50, f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves * 0.00001), f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves);
    
    const popTotaleInitiale = colonsInitiaux + indigenesInitiaux + esclavesInitiaux;
    
    if (popTotaleInitiale < 50) { 
        alert("Population de campagne insuffisante pour fonder une nouvelle colonie !");
        stocks.bois += boisRequis;
        f.ETAT_DYNAMIQUE.tresor += cout;
        f.DEPENSES_BUDGET.colonisation_extra -= cout;
        return;
    }
    
    f.ETAT_DYNAMIQUE.population_colonies.campagne_colons -= colonsInitiaux;
    f.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes -= indigenesInitiaux;
    f.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves -= esclavesInitiaux;

    const nouveauHameau = {
        id: `col_${f.COLONIES.villes.length + 1}`,
        nom: `Nouveau Hameau ${f.COLONIES.villes.length + 1}`,
        type: getColonialCityType(popTotaleInitiale),
        pop_colons: colonsInitiaux,
        pop_indigenes: indigenesInitiaux,
        pop_esclaves: esclavesInitiaux,
        hectares: 0,
        terres_cultivees: {},
        projets: [],
        production_mult: 1.0,
        // NOUVEAU : Assigne un climat aléatoire
        climat: f.COLONIES.climats[Math.floor(Math.random() * f.COLONIES.climats.length)]
    };
    f.COLONIES.villes.push(nouveauHameau);

    logToUI(`Nouvelle colonie "${nouveauHameau.nom}" fondée avec la population de campagne !`, "success");
    updateHeader();
    updateColoniesTab();
    updateRessourcesTab();
}

/**
 * NOUVEAU : Ouvre la modale de transfert de la Campagne vers une Ville
 */
function ouvrirModalTransfertColonie(index) {
    const f = GAME_STATE.currentFaction;
    const ville = f.COLONIES.villes[index];
    if (!ville) return;

    GAME_STATE.villeColonieEnCours = index; 

    const pop = f.ETAT_DYNAMIQUE.population_colonies;

    document.getElementById('modal-transfert-title').textContent = `Transférer vers ${ville.nom}`;
    
    document.getElementById('transfert-pool-colons').textContent = Math.floor(pop.campagne_colons).toLocaleString();
    document.getElementById('transfert-pool-indigenes').textContent = Math.floor(pop.campagne_indigenes).toLocaleString();
    document.getElementById('transfert-pool-esclaves').textContent = Math.floor(pop.campagne_esclaves).toLocaleString();

    document.getElementById('transfert-colons-input').value = 0;
    document.getElementById('transfert-esclaves-input').value = 0;
    document.getElementById('transfert-indigenes-input').value = 0;
    
    document.getElementById('transfert-colons-input').max = Math.floor(pop.campagne_colons);
    document.getElementById('transfert-esclaves-input').max = Math.floor(pop.campagne_esclaves);
    document.getElementById('transfert-indigenes-input').max = Math.floor(pop.campagne_indigenes);

    toggleModal('modal-transfert-colonie', true);
}

/**
 * NOUVEAU : Exécute le transfert de la Campagne vers la Ville
 */
function transfererRessourcesColonie() {
    const f = GAME_STATE.currentFaction;
    const index = GAME_STATE.villeColonieEnCours;
    const ville = f.COLONIES.villes[index];
    if (!ville) return;

    const popCampagne = f.ETAT_DYNAMIQUE.population_colonies;
    
    const colons = Math.min(parseInt(document.getElementById('transfert-colons-input').value) || 0, popCampagne.campagne_colons);
    const esclaves = Math.min(parseInt(document.getElementById('transfert-esclaves-input').value) || 0, popCampagne.campagne_esclaves);
    const indigenes = Math.min(parseInt(document.getElementById('transfert-indigenes-input').value) || 0, popCampagne.campagne_indigenes);

    if (colons <= 0 && esclaves <= 0 && indigenes <= 0) {
        alert("Aucune population sélectionnée pour le transfert.");
        return;
    }

    popCampagne.campagne_colons -= colons;
    popCampagne.campagne_esclaves -= esclaves;
    popCampagne.campagne_indigenes -= indigenes;

    ville.pop_colons += colons;
    ville.pop_esclaves += esclaves;
    ville.pop_indigenes += indigenes;
    
    const popTotaleVille = ville.pop_colons + ville.pop_esclaves + ville.pop_indigenes;
    ville.type = getColonialCityType(popTotaleVille);

    logToUI(`Transfert vers ${ville.nom} : +${colons} colons, +${indigenes} indigènes, +${esclaves} esclaves.`, "success");
    toggleModal('modal-transfert-colonie', false);
    updateColoniesTab();
}


/**
 * NOUVEAU : Renomme une ville coloniale
 */
function renommerVilleColonie(index) {
    const f = GAME_STATE.currentFaction;
    const ville = f.COLONIES.villes[index];
    if (!ville) return;

    const nouveauNom = prompt(`Entrez un nouveau nom pour "${ville.nom}" :`, ville.nom);
    
    if (nouveauNom && nouveauNom.trim() !== "") {
        ville.nom = nouveauNom.trim();
        logToUI(`La colonie a été renommée en "${ville.nom}".`, "info");
        updateColoniesTab();
    }
}


/**
 * Lance une exploration pour découvrir de nouvelles terres coloniales.
 */
function financerExploration() {
    const f = GAME_STATE.currentFaction;
    
    if (estNonColonial(f)) {
        alert("Cette nation n'a pas de politique coloniale.");
        return;
    }
    
    const cout = GAME_SETTINGS.COUT_EXPLORATION_COLONIALE;
    
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.colonisation_extra += cout;
    
    const terres = GAME_SETTINGS.TERRES_PAR_EXPLORATION;
    f.COLONIES.terres_disponibles += terres;
    
    logToUI(`Exploration réussie ! ${terres.toLocaleString()} nouveaux hectares disponibles.`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");

    updateHeader();
    updateColoniesTab();
    updateTerritoireTab(); 
}


/**
 * Gère l'investissement dans les infrastructures (routes, bâtiments).
 */
function investirInfrastructures() {
    // Cette fonction est obsolète (remplacée par updateDepenseInput et construireProjetSimple)
}

/**
 * Met à jour un salaire de base (Armée ou Marine) depuis un input.
 * (CORRIGÉ : Remplace updateSalaireSlider - Gère Point 5)
 */
function updateSalaireInput(type, valeur, rang) {
    const f = GAME_STATE.currentFaction;
    const val = parseFloat(valeur) || 0;

    try {
        if (type === 'soldat') {
            f.ECONOMIE.salaires_base.soldat = val;
            logToUI(`Salaire de base des Soldats fixé à ${val} LT/an.`);
        } else if (type === 'sous_officier') {
            f.ECONOMIE.salaires_base.sous_officier = val;
            logToUI(`Salaire de base des Sous-Officiers fixé à ${val} LT/an.`);
        } else if (type === 'marin_base') {
            f.ECONOMIE.salaires_base.marine.marin_base = val;
            logToUI(`Salaire de base des Marins fixé à ${val} LT/an.`);
        } else if (type === 'marine_officer') {
            f.ECONOMIE.salaires_base.marine.officiers[rang] = val;
            logToUI(`Salaire des ${rang.replace(/_/g, ' ')} fixé à ${val} LT/an.`);
        } else if (type === 'officier_terre') {
            f.ECONOMIE.salaires_base.officiers[rang] = val;
            logToUI(`Salaire des ${rang.replace(/_/g, ' ')} fixé à ${val} LT/an.`);
        }

        // Recalculer les coûts
        updateBudgetTab();
        updateAdminTab();
        updateMilitaireTab();

    } catch (e) {
        logToUI(`Erreur lors de la mise à jour du salaire.`, "error");
    }
}

/**
 * NOUVELLE FONCTION : Dépense de l'argent pour planter des arbres.
 */
function planterForet() {
    const f = GAME_STATE.currentFaction;
    const cout = GAME_SETTINGS.COUT_CONSTRUCTION.foret;
    const hectaresGagnes = GAME_SETTINGS.COUT_CONSTRUCTION.hectares_par_plantation;
    
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    f.INFRASTRUCTURE.foret.hectares += hectaresGagnes;
    
    logToUI(`Investissement forestier: ${hectaresGagnes} hectares plantés pour ${cout.toLocaleString()} LT.`, "success");
    if (f.ETAT_DYNAMIQUE.tresor < 0) logToUI("Attention: Le Trésor est négatif.", "error");

    updateHeader();
    updateRessourcesTab();
}

/**
 * NOUVEAU : Fonde une nouvelle ville en métropole
 * (MODIFIÉ : Gère les ouvriers/admin)
 */
function fonderVilleMetropole() {
    const f = GAME_STATE.currentFaction;
    const def = GAME_SETTINGS.COUT_CONSTRUCTION.fonder_ville_metropole;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    const boisRequis = def.bois;
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }
    
    const cout = def.cout;
    stocks.bois -= boisRequis;
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    
    const adminAjoutes = def.admin_requis;
    const salaireAjoute = def.salaire_ajout;
    f.ETAT_DYNAMIQUE.administrateurs_total += adminAjoutes;
    f.ECONOMIE.salaires_base.administration += salaireAjoute;

    const nouvelleVille = {
        id: `p_${f.INFRASTRUCTURE.villes.length + 1}`,
        nom: `Nouvelle Ville ${f.INFRASTRUCTURE.villes.length + 1}`,
        type: "Petite",
        pop: 5000,
        projets: []
    };
    f.INFRASTRUCTURE.villes.push(nouvelleVille);

    logToUI(`Nouvelle ville "${nouvelleVille.nom}" fondée ! (+${adminAjoutes} admin, +${salaireAjoute.toLocaleString()} LT/an)`, "success");
    updateFullDashboard();
}

/**
 * NOUVEAU : Ouvre la modale de gestion d'une ville de métropole
 * (MODIFIÉ : Affiche tous les nouveaux projets urbains)
 */
function ouvrirModalGestionVille(index) {
    const f = GAME_STATE.currentFaction;
    const ville = f.INFRASTRUCTURE.villes[index];
    if (!ville) return;
    
    GAME_STATE.villeMetropoleEnCours = index; 
    
    document.getElementById('modal-city-title').textContent = `Gérer ${ville.nom} (${ville.type})`;
    document.getElementById('modal-city-pop').textContent = ville.pop.toLocaleString();
    
    const select = document.getElementById('city-project-select');
    let htmlOptions = '<option value="">-- Choisir un projet --</option>';
    
    // Boucle sur les projets urbains définis
    Object.keys(BUILD_DEFINITIONS.projets_urbains).forEach(key => {
        const def = BUILD_DEFINITIONS.projets_urbains[key];
        
        if (!ville.projets.includes(key)) {
            let peutConstruire = true;
            if (def.unique) {
                if (GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key] && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key][f.nom]) {
                    peutConstruire = false; 
                }
            }
            
            if (peutConstruire) {
                 // NOUVEAU : Ajout de l'attribut "title" pour l'infobulle
                 let tooltipText = `${def.nom}\nCoût: ${def.cout.toLocaleString()} LT\n`;
                 if (def.admin_requis) tooltipText += `Admin: +${def.admin_requis}, +${(def.salaire_ajout || 0).toLocaleString()} LT/an\n`;
                 if (def.bonus_stabilite) tooltipText += `Effet: +${def.bonus_stabilite} Stabilité\n`;
                 if (def.bonus_prestige) tooltipText += `Effet: +${def.bonus_prestige} Prestige\n`;
                 if (def.bonus_croissance_pop) tooltipText += `Effet: +${def.bonus_croissance_pop*100}% Croissance Pop.\n`;

                 htmlOptions += `<option value="${key}" title="${tooltipText}">${def.nom} (${(def.cout / 1000).toFixed(0)}k LT)</option>`;
            }
        }
    });
    
    select.innerHTML = htmlOptions;

    // Attache le bon listener au bouton (Métropole)
    const btn = document.getElementById('modal-city-manage-btn');
    btn.onclick = lancerProjetUrbain; // Pointe vers la fonction de la métropole

    toggleModal('modal-city-manage', true);
}

/**
 * NOUVEAU : Lance un projet dans une ville de métropole
 * (MODIFIÉ : Gère les coûts admin/salaire et tous les nouveaux effets)
 */
function lancerProjetUrbain() {
    const f = GAME_STATE.currentFaction;
    const index = GAME_STATE.villeMetropoleEnCours;
    const ville = f.INFRASTRUCTURE.villes[index];
    const projetKey = document.getElementById('city-project-select').value;
    
    if (!ville || !projetKey) {
        alert("Veuillez sélectionner un projet valide.");
        return;
    }
    
    const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
    if (!def) {
        alert("Projet inconnu !");
        return;
    }
    
    // --- VÉRIFICATION BÂTIMENT UNIQUE ---
    if (def.unique) {
        if (GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[projetKey] && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[projetKey][f.nom]) {
            alert(`Construction impossible : Vous ne pouvez construire qu'un seul "${def.nom}" !`);
            return;
        }
    }
    
    const cout = def.cout;
    
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }
    
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    
    // --- APPLICATION DES EFFETS ---
    if (def.bonus_croissance_pop) f.COLONIES.croissance_base += def.bonus_croissance_pop; 
    if (def.bonus_stabilite) f.ETAT_DYNAMIQUE.stabilite += def.bonus_stabilite;
    if (def.bonus_efficacite) f.ETAT_DYNAMIQUE.admin_efficacite_plafond += def.bonus_efficacite;
    
    // Nouveaux effets
    if (def.bonus_vct_pct) f.ECONOMIE.valeur_commerciale_totale *= (1 + def.bonus_vct_pct);
    if (def.bonus_prestige) f.ETAT_DYNAMIQUE.prestige += def.bonus_prestige;
    if (def.bonus_qualite_marine) f.MARINE.qualite += def.bonus_qualite_marine;
    if (def.bonus_cout_pensions_pct) f.MODIFICATEURS.budget_pensions_mod += def.bonus_cout_pensions_pct;
    
    // Gérer les coûts admin
    f.ETAT_DYNAMIQUE.administrateurs_total += (def.admin_requis || 0);
    f.ECONOMIE.salaires_base.administration += (def.salaire_ajout || 0);
    
    ville.projets.push(projetKey);
    
    // Marquer comme unique si nécessaire
    if (def.unique) {
        if (!GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[projetKey]) GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[projetKey] = {};
        GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[projetKey][f.nom] = true;
    }
    
    logToUI(`Projet "${def.nom}" lancé dans ${ville.nom}. Coût: ${cout.toLocaleString()} LT.`, "success");
    toggleModal('modal-city-manage', false);
    updateFullDashboard();
}

/**
 * NOUVEAU : Renomme une ville de métropole
 */
function renommerVille(index) {
    const f = GAME_STATE.currentFaction;
    const ville = f.INFRASTRUCTURE.villes[index];
    if (!ville) return;

    const nouveauNom = prompt(`Entrez un nouveau nom pour "${ville.nom}" :`, ville.nom);
    
    if (nouveauNom && nouveauNom.trim() !== "") {
        ville.nom = nouveauNom.trim();
        logToUI(`La ville a été renommée en "${ville.nom}".`, "info");
        updateAdminTab();
    }
}

/**
 * NOUVEAU : Met à jour le coût dans la modale de formation d'officiers
 */
function updateOfficerTrainCost() {
    const f = GAME_STATE.currentFaction;
    const quantite = parseInt(document.getElementById('officer-train-quantity').value) || 0;
    
    let coutParOfficier = GAME_SETTINGS.COUT_CONSTRUCTION.officier_base_cost;
    let bonusUniversite = 0;
    bonusUniversite = f.INFRASTRUCTURE.universites * (BUILD_DEFINITIONS.batiments_speciaux.universite.bonus_formation || 0.15); 
    
    coutParOfficier *= (1 - bonusUniversite);
    
    const coutTotal = quantite * coutParOfficier;
    const coutAnnuel = coutTotal / (GAME_SETTINGS.COUT_CONSTRUCTION.officier_base_time || 2);
    
    document.getElementById('officer-train-cost').textContent = `${Math.floor(coutParOfficier)} LT`;
    document.getElementById('officer-train-summary').textContent = `Coût total : ${Math.floor(coutTotal).toLocaleString()} LT (${Math.floor(coutAnnuel).toLocaleString()} LT/an)`;
}

/**
 * NOUVEAU : Lance la formation d'un lot d'officiers (Lieutenants)
 */
function lancerFormationOfficiers() {
    const f = GAME_STATE.currentFaction;
    const quantite = parseInt(document.getElementById('officer-train-quantity').value) || 0;
    
    if (quantite <= 0) return;
    
    if (f.ARMEE.ecoles_militaires <= 0) {
        alert("Vous devez construire au moins une École Militaire pour former des officiers !");
        return;
    }
    
    let coutParOfficier = GAME_SETTINGS.COUT_CONSTRUCTION.officier_base_cost;
    let bonusUniversite = f.INFRASTRUCTURE.universites * (BUILD_DEFINITIONS.batiments_speciaux.universite.bonus_formation || 0.15);
    coutParOfficier *= (1 - bonusUniversite);
    
    const coutTotal = quantite * coutParOfficier;
    const temps = GAME_SETTINGS.COUT_CONSTRUCTION.officier_base_time;
    
    f.DEPENSES_BUDGET.formation_officiers_extra += (coutTotal / temps);
    
    f.ARMEE.formation_officiers_queue.push({
        quantite: quantite,
        temps_restant: temps,
        cout_annuel: (coutTotal / temps)
    });
    
    logToUI(`Formation de ${quantite} lieutenants lancée (Coût: ${(coutTotal / temps).toLocaleString()} LT/an pendant ${temps} ans).`, "success");
    toggleModal('modal-officer-train', false);
    updateAdminTab();
    updateBudgetTab();
}

/**
 * NOUVEAU : Construit un projet d'infrastructure simple (route, pont, canal)
 * (MODIFIÉ : Point 6)
 */
function construireProjetSimple() {
    const f = GAME_STATE.currentFaction;
    const projetKey = document.getElementById('projet-simple-select').value;
    
    if (!projetKey) {
        alert("Veuillez sélectionner un projet.");
        return;
    }
    
    let def, cout, msg;

    // (MODIFIÉ Point 6) - Logique de 'base_routes' et 'base_ponts' supprimée
    // Gérer les grands projets
    def = BUILD_DEFINITIONS.grands_projets[projetKey];
    if (!def) {
        alert("Projet inconnu ou invalide !");
        return;
    }
    cout = def.cout;
    
    if (projetKey === "pont_pierre") {
        f.INFRASTRUCTURE.ponts++;
        msg = "Pont en pierre construit.";
    } else if (projetKey === "canal_navigation") {
        f.INFRASTRUCTURE.canaux++;
        msg = "Canal de navigation construit.";
    } else if (projetKey === "route_royale") {
        f.INFRASTRUCTURE.routes_km += 100; 
        msg = "100km de Route Royale construits.";
    } else {
        alert("Erreur de sélection de projet.");
        return;
    }
    
    if (def.bonus_efficacite) f.ETAT_DYNAMIQUE.admin_efficacite_plafond += def.bonus_efficacite;

    if (cout > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${cout.toLocaleString()} LT, Disponible: ${Math.floor(f.ETAT_DYNAMIQUE.tresor).toLocaleString()}`);
        return;
    }
    
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    
    logToUI(`Infrastructure: ${msg} Coût: ${cout.toLocaleString()} LT.`, "success");
    updateFullDashboard(); 
}

/**
 * NOUVEAU : Met à jour le taux d'imposition d'une tranche de revenus
 */
function updateTaxTranche(tranche, valeur) {
    const f = GAME_STATE.currentFaction;
    const val = parseFloat(valeur) || 0;
    
    if (val < 0) val = 0;
    
    // Appliquer les plafonds
    if (tranche === 'haut' && val > 70) val = 70;
    if (tranche === 'moyen' && val > 50) val = 50;
    if (tranche === 'bas' && val > 30) val = 30;
    
    f.ECONOMIE.impots.tranches[tranche].taux = val / 100;
    
    logToUI(`Taux d'imposition (Tranche ${tranche}) ajusté à ${val}%.`, "info");
    
    // Mettre à jour les UI dépendantes
    updateBudgetTab();
    updatePolitiqueTab();
}

/**
 * NOUVEAU (Système de Cabinet) : Sauvegarde les choix des ministres depuis l'UI
 * et applique leurs effets de nomination.
 */
function sauvegarderMinistres() {
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    const postes = ["guerre", "finances", "interieur", "commerce", "marine", "colonies", "administration"];
    const nouveauxPostes = {};
    const ministresSelectionnes = [];
    let erreurDuplicata = false;

    // 1. Lire les sélections et vérifier les duplicata
    postes.forEach(poste => {
        const select = document.getElementById(`select_ministre_${poste}`);
        if (select) {
            const ministreId = select.value;
            if (ministreId) {
                if (ministresSelectionnes.includes(ministreId)) {
                    erreurDuplicata = true;
                }
                ministresSelectionnes.push(ministreId);
                nouveauxPostes[poste] = ministreId;
            } else {
                nouveauxPostes[poste] = null;
            }
        }
    });

    if (erreurDuplicata) {
        alert("Erreur : Un ministre ne peut pas occuper plus d'un poste ! Veuillez corriger vos sélections.");
        updatePolitiqueTab(); // Revert UI
        return;
    }
    
    // 2. Vérifier le nombre de postes pourvus
    if (ministresSelectionnes.length > f.ETAT_DYNAMIQUE.ministres.nombre) {
        alert(`Erreur : Vous ne pouvez nommer que ${f.ETAT_DYNAMIQUE.ministres.nombre} ministres. Vous en avez sélectionné ${ministresSelectionnes.length}.`);
        updatePolitiqueTab(); // Revert UI
        return;
    }
    
    // 3. Réinitialiser TOUS les modificateurs de ministres
    const mods = f.MODIFICATEURS;
    mods.entretien_armee_mod = 1.0;
    mods.cout_forteresse_mod = 1.0;
    mods.cout_recrutement_mod = 1.0;
    mods.bonus_fiscal_global_pct = 0;
    mods.bonus_interet_dette = 0;
    mods.cout_admin_mod = 1.0;
    mods.cout_maison_dirigeant_mod = 1.0;
    mods.cout_sante_mod = 1.0;
    mods.cout_infra_mod = 1.0;
    mods.bonus_croissance_marchands_mod = 0;
    mods.cout_usine_mod = 1.0;
    
    // --- BLOC CORRIGÉ POUR LA MARINE ---
    mods.bonus_guerre_course_pct = 0;
    mods.bonus_rnb_colonial_pct = 0;
    mods.entretien_marine_mod = 1.0;
    mods.cout_navire_ligne_mod = 1.0;
    mods.temps_navire_ligne_mod = 1.0;
    mods.cout_navire_escorte_mod = 1.0;
    // --- FIN CORRECTION ---

    // 4. Appliquer les nouveaux effets de nomination
    Object.keys(nouveauxPostes).forEach(poste => {
        const ministreId = nouveauxPostes[poste];
        if (ministreId) {
            const def = MINISTRES_PERSONNALITES[poste].find(m => m.id === ministreId);
            if (def && def.effet_nomination) {
                def.effet_nomination(f);
            }
        }
    });

    // 5. Sauvegarder les sélections
    f.ETAT_DYNAMIQUE.ministres.postes = nouveauxPostes;
    f.ETAT_DYNAMIQUE.ministres.ministres_choisis = ministresSelectionnes;

    logToUI("Cabinet ministériel mis à jour.", "success");
    
    // 6. Rafraîchir l'UI (surtout l'onglet budget qui dépend des modificateurs)
    updateFullDashboard();
}

/**
 * NOUVEAU : Recrute un ou plusieurs régiments (bouton "Recruter Unités")
 * (MODIFIÉ - Point 9)
 */
function constituerArmees() {
    const f = GAME_STATE.currentFaction;
    const type = document.getElementById('unit-type-select').value;
    const quantite = parseInt(document.getElementById('unit-quantity-input').value, 10) || 0;

    if (!type || quantite <= 0) {
        alert("Veuillez sélectionner un type d'unité et une quantité valide.");
        return;
    }

    const unitDef = RECRUIT_DEFINITIONS[type];
    if (!unitDef) {
        alert("Erreur : Définition d'unité introuvable.");
        return;
    }

    // 1. Déterminer l'effectif max (basé sur la doctrine)
    const doctrine = f.ARMEE.doctrine;
    let effectif_max = 0;
    if (unitDef.type === "Infanterie" || (unitDef.type === "Garde" && type.includes("Infanterie"))) {
        effectif_max = (doctrine.infanterie.soldats_compagnie + doctrine.infanterie.sous_officiers_compagnie) * doctrine.infanterie.compagnies_bataillon * doctrine.infanterie.bataillons_regiment;
    } else if (unitDef.type === "Cavalerie" || (unitDef.type === "Garde" && type.includes("Cavalerie"))) {
        effectif_max = (doctrine.cavalerie.soldats_escadron + doctrine.cavalerie.sous_officiers_escadron) * doctrine.cavalerie.escadrons_regiment;
    } else if (unitDef.type === "Artillerie") {
        effectif_max = (doctrine.artillerie.soldats_compagnie || 150) * (doctrine.artillerie.compagnies_regiment || 8);
    // NOUVEAU (Point 9)
    } else if (unitDef.type === "Génie") {
        effectif_max = (doctrine.infanterie.soldats_compagnie + doctrine.infanterie.sous_officiers_compagnie) * doctrine.infanterie.compagnies_bataillon * doctrine.infanterie.bataillons_regiment;
    }
    if (effectif_max === 0) effectif_max = 1000; // Sécurité

    // 2. Calculer les coûts
    const baseCostPerRegiment = (RECRUIT_COSTS_PER_SOLDIER[unitDef.type] || 50) * effectif_max * (unitDef.cout_mod || 1.0);
    const officiersPerRegiment = (GAME_SETTINGS.COUT_CONSTRUCTION.officier_par_regiment || 5) * (unitDef.officiers_mod || 1.0);
    const manpowerPerRegiment = effectif_max;
    // (MODIFIÉ Point 9) - Le génie a aussi besoin de fusils
    const fusilsPerRegiment = (unitDef.type === "Infanterie" || unitDef.type === "Garde" || unitDef.type === "Génie") ? effectif_max : 0;
    const chevauxPerRegiment = (unitDef.type === "Cavalerie" || (unitDef.type === "Garde" && type.includes("Cavalerie"))) ? effectif_max : 0; // Chevaux d'artillerie gérés par entretien

    const totalTresor = baseCostPerRegiment * quantite;
    const totalOfficiers = officiersPerRegiment * quantite;
    const totalManpower = manpowerPerRegiment * quantite;
    const totalFusils = fusilsPerRegiment * quantite;
    const totalChevaux = chevauxPerRegiment * quantite;

    // 3. Vérifier les ressources
    if (totalTresor > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${totalTresor.toLocaleString()} LT`);
        return;
    }
    if (totalManpower > f.RESERVES.reserve_manpower) {
        alert(`Réserve de manpower insuffisante ! Requis: ${totalManpower.toLocaleString()} hommes`);
        return;
    }
    // CORRECTION : Vérifie le pool de RECRUTEMENT (militaire) et non le pool civil total.
    if (totalManpower > f.RESERVES.reserve_manpower) {
        alert(`Réserve de manpower insuffisante ! Requis: ${totalManpower.toLocaleString()} hommes, Disponible: ${Math.floor(f.RESERVES.reserve_manpower).toLocaleString()}`);
        return;
    }
    if (totalOfficiers > f.ARMEE.officiers_supply.lieutenant) {
        alert(`Pool de lieutenants insuffisant ! Requis: ${totalOfficiers.toLocaleString()} officiers`);
        return;
    }
    if (totalFusils > f.RESERVES.stock_fusils) {
        alert(`Stock de fusils insuffisant ! Requis: ${totalFusils.toLocaleString()}`);
        return;
    }
    if (totalChevaux > f.RESERVES.chevaux_disponibles) {
        alert(`Chevaux indisponibles ! Requis: ${totalChevaux.toLocaleString()}`);
        return;
    }

    // 4. Déduire les ressources
    f.ETAT_DYNAMIQUE.tresor -= totalTresor;
    f.DEPENSES_BUDGET.construction_extra += totalTresor; // Enregistre la dépense
    f.RESERVES.reserve_manpower -= totalManpower; // Déduit du pool militaire
    // f.ETAT_DYNAMIQUE.population_disponible -= totalManpower; // CETTE LIGNE EST FAUSSE
    f.ETAT_DYNAMIQUE.population_assignee_armee += totalManpower; // Ajoute à l'effectif assigné
    f.ARMEE.officiers_supply.lieutenant -= totalOfficiers; 
    f.RESERVES.stock_fusils -= totalFusils;
    f.RESERVES.chevaux_disponibles -= totalChevaux;
    
    // 5. Trouver une province de garnison (une province interne si possible)
    let garnisonId = f.provinces[0]; // Sécurité
    const factionKey = f.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e');
    const provincesInternes = (PROVINCES_PAR_FACTION[factionKey] || []).filter(p => {
        let isFrontiere = false;
        for (const voisinId of p.voisins_terrestres) {
            if (MONDE[voisinId] && MONDE[voisinId].proprietaireInitial !== p.proprietaireInitial) {
                isFrontiere = true;
                break;
            }
        }
        return !isFrontiere;
    });
    
    if (provincesInternes.length > 0) {
        garnisonId = provincesInternes[Math.floor(Math.random() * provincesInternes.length)].id;
    } else if (f.provinces.length > 0) {
         garnisonId = f.provinces[Math.floor(Math.random() * f.provinces.length)];
    }

    // 6. Créer les régiments
    let regCounter = f.ARMEE.regiments.length;
    for (let i = 0; i < quantite; i++) {
        regCounter++;
        const id = `${f.nom.substring(0, 4)}_${type.substring(0, 3)}_${regCounter}`;
        
        // NOUVEAU (Point 3) : Gérer l'équipement d'artillerie à la création
        let equipement = null;
        if (unitDef.type === "Artillerie") {
            equipement = { "6-livres": (doctrine.artillerie.canons_compagnie || 6) * (doctrine.artillerie.compagnies_regiment || 8) };
             if (f.nom === "Napoléon") { // Exemple de spécificité
                 equipement = { "8-livres": 6 * 8, "obusiers-6": 2 * 8 };
             }
        }

        const reg = new Regiment(id, f.nom, type, garnisonId);
        reg.effectif_max = effectif_max;
        reg.effectif_actuel = effectif_max; // Recruté à plein effectif
        reg.officiers = officiersPerRegiment;
        reg.nom = `${regCounter}e Rég. de ${type}`; // Nom de base
        reg.equipement = equipement; // (Point 3)
        
        f.ARMEE.regiments.push(reg);
    }
    
    // 7. Mettre à jour
    logToUI(`Recrutement de ${quantite} régiment(s) de "${type}" terminé.`, "success");
    
    // Recalcule la demande d'officiers
    calculerBesoinTotalOfficiers(f); 
    
    updateFullDashboard(); // Rafraîchit tous les onglets
}

/**
 * NOUVEAU : Achète des chevaux pour la réserve (bouton "Acheter Chevaux")
 */
function acheterChevaux() {
    const f = GAME_STATE.currentFaction;
    const quantite = parseInt(document.getElementById('horses-buy-input').value, 10) || 0;

    if (quantite <= 0) {
        alert("Veuillez entrer une quantité valide.");
        return;
    }

    const coutUnitaire = GAME_SETTINGS.COUT_CONSTRUCTION.cheval || 500;
    const coutTotal = quantite * coutUnitaire;

    if (coutTotal > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${coutTotal.toLocaleString()} LT`);
        return;
    }

    // Payer
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.construction_extra += coutTotal;
    
    // Recevoir
    f.RESERVES.chevaux_disponibles += quantite;

    logToUI(`Achat de ${quantite.toLocaleString()} chevaux pour ${coutTotal.toLocaleString()} LT.`, "success");
    
    // Mettre à jour l'UI
    updateMilitaireTab();
    updateBudgetTab();
    updateHeader();
}

/**
 * NOUVEAU (Point 7) : Achète des fusils pour le stock
 */
function acheterFusils() {
    const f = GAME_STATE.currentFaction;
    const quantite = parseInt(document.getElementById('fusils-buy-input').value, 10) || 0;

    if (quantite <= 0) {
        alert("Veuillez entrer une quantité valide.");
        return;
    }

    const coutTotal = quantite * PRIX_FUSIL;

    if (coutTotal > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${coutTotal.toLocaleString()} LT`);
        return;
    }

    // Payer
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.construction_extra += coutTotal;
    
    // Recevoir
    f.RESERVES.stock_fusils += quantite;

    logToUI(`Achat de ${quantite.toLocaleString()} fusils pour ${coutTotal.toLocaleString()} LT.`, "success");
    
    // Mettre à jour l'UI
    updateMilitaireTab();
    updateBudgetTab();
    updateHeader();
}

/**
 * NOUVEAU : Fait venir des ouvriers qualifiés de l'étranger
 */
function importerOuvriers() {
    const f = GAME_STATE.currentFaction;
    const def = GAME_SETTINGS.COUT_CONSTRUCTION.importer_ouvriers;
    
    if (def.cout > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${def.cout.toLocaleString()} LT`);
        return;
    }
    
    f.ETAT_DYNAMIQUE.tresor -= def.cout;
    f.DEPENSES_BUDGET.construction_extra += def.cout;
    
    f.ETAT_DYNAMIQUE.population_disponible += def.quantite;
    
    // Bonus permanent : ces ouvriers qualifiés améliorent légèrement le RNB industriel
    f.ECONOMIE.rnb_detail.industriel *= 1.01; // +1% RNB Indus
    
    logToUI(`Immigration réussie. +${def.quantite.toLocaleString()} ouvriers qualifiés ont rejoint votre population disponible.`, "success");
    updatePolitiqueTab();
    updateHeader();
}

/**
 * NOUVEAU : Gère les emprunts bancaires
 */
function emprunter(montant) {
    const f = GAME_STATE.currentFaction;
    
    // 1. Calculer le palier max autorisé
    let palierMax = 0;
    f.INFRASTRUCTURE.banques.forEach(b => {
        const def = BUILD_DEFINITIONS.banques[b.type];
        if (def && def.palier_emprunt > palierMax) {
            palierMax = def.palier_emprunt;
        }
    });

    // (Logique simple pour les paliers)
    let montantMax = 0;
    if (palierMax === 1) montantMax = 20000000;
    if (palierMax === 3) montantMax = 200000000; // Palier Banque Centrale
    else if (palierMax > 1) montantMax = 80000000; 

    if (palierMax === 0) {
        alert("Vous devez construire au moins une Banque pour pouvoir emprunter !");
        return;
    }
    
    if (montant > montantMax) {
        alert(`Votre tissu financier est trop faible. Vous ne pouvez emprunter que ${montantMax.toLocaleString()} LT maximum par an.`);
        return;
    }
    
    if (confirm(`Emprunter ${montant.toLocaleString()} LT ?\nCela augmentera votre dette et vos paiements d'intérêts annuels.`)) {
        f.ETAT_DYNAMIQUE.tresor += montant;
        f.ETAT_DYNAMIQUE.dette += montant;
        
        logToUI(`Emprunt de ${montant.toLocaleString()} LT réussi. Votre dette augmente.`, "success");
        updateBudgetTab();
        updateHeader();
    }
}

/**
 * NOUVEAU : Dévalue la monnaie en cas de crise
 */
function devaluerMonnaie() {
    const f = GAME_STATE.currentFaction;
    const seuil = f.ECONOMIE.revenu_national_brut * 0.5;
    
    if (f.ETAT_DYNAMIQUE.dette < seuil) {
        alert("Votre dette n'est pas assez critique pour justifier cette mesure extrême.");
        return;
    }
    
    // Vérifie si un Hôtel des Monnaies a été construit
    const hotelMonnaie = f.INFRASTRUCTURE.batiments_speciaux.find(b => b.type === 'hotel_des_monnaies');
    let msgConfirmation = "DÉVALUER LA MONNAIE ?\n\nCette action effacera 40% de votre dette, mais provoquera :\n- Stabilité : -25 points\n- Moral Armée : -15 points\n- Efficacité Fiscale : -5% (permanent)\n- Taux d'intérêt : Doublés pour 5 ans\n\nC'est une action de dernier recours. Confirmer ?";
    
    if (hotelMonnaie) {
        msgConfirmation = "DÉVALUER LA MONNAIE ?\n\nGrâce à votre Hôtel des Monnaies, vous pouvez effectuer une dévaluation contrôlée.\n\nCette action effacera 40% de votre dette sans pénalité de Stabilité ou de Moral. Confirmer ?";
    }

    if (confirm(msgConfirmation)) {
        
        const detteEffacee = f.ETAT_DYNAMIQUE.dette * 0.40;
        f.ETAT_DYNAMIQUE.dette -= detteEffacee;
        
        if (!hotelMonnaie) {
            f.ETAT_DYNAMIQUE.stabilite -= 25;
            f.ETAT_DYNAMIQUE.moral_armee -= 15;
            
            // Malus fiscal (votre idée)
            f.ECONOMIE.impots.tranches.haut.taux *= 0.95;
            f.ECONOMIE.impots.tranches.moyen.taux *= 0.95;
            f.ECONOMIE.impots.tranches.bas.taux *= 0.95;
            
            // (La logique des taux d'intérêt doublés sera gérée dans prochainTour)
            logToUI(`DÉVALUATION ! ${detteEffacee.toLocaleString()} LT de dette effacée. La nation est en état de choc.`, "error");
        } else {
            logToUI(`Dévaluation contrôlée réussie. ${detteEffacee.toLocaleString()} LT de dette effacée.`, "success");
        }
        
        updateBudgetTab();
        updateHeader();
        updateStatutGlobal();
        updatePolitiqueTab();
    }
}

/**
 * NOUVEAU (Correctif v2) : Met à jour la doctrine militaire depuis les inputs.
 * CORRIGE LE BUG DE LA GARDE ET LE BUG DU RATIO D'EFFECTIF.
 */
function updateDoctrine(type, key, valeur) {
    const f = GAME_STATE.currentFaction;
    const valNum = parseInt(valeur, 10) || 0;

    if (!f || !f.ARMEE.doctrine[type] || valNum <= 0) {
        logToUI("Erreur lors de la mise à jour de la doctrine. Valeur invalide.", "error");
        return;
    }

    // Met à jour la valeur dans l'objet de la faction
    f.ARMEE.doctrine[type][key] = valNum;

    logToUI(`Doctrine de l'${type} mise à jour : ${key} est maintenant à ${valNum}.`, "info");
    
    // Recalculer les effectifs max pour tous les régiments de ce type
    f.ARMEE.regiments.forEach(reg => {
        const def = RECRUIT_DEFINITIONS[reg.type];
        if (!def) return;

        // --- DEBUT DE LA LIGNE CORRIGEE (BUG GARDE) ---
        // Vérifie si le type de régiment correspond (Infanterie, Cavalerie)
        // OU s'il s'agit de la Garde ET que le nom du régiment contient le bon type (infanterie/cavalerie)
        // (MODIFIÉ Point 9) - Le Génie utilise la doctrine d'infanterie
        if (def && (def.type.toLowerCase() === type || (def.type === "Génie" && type === "infanterie") || (def.type === "Garde" && reg.type.toLowerCase().includes(type)))) {
        // --- FIN DE LA LIGNE CORRIGEE ---

            let effectif_max = 0;
            if (type === "infanterie") {
                const d = f.ARMEE.doctrine.infanterie;
                effectif_max = (d.soldats_compagnie + d.sous_officiers_compagnie) * d.compagnies_bataillon * d.bataillons_regiment;
            } else if (type === "cavalerie") {
                const d = f.ARMEE.doctrine.cavalerie;
                effectif_max = (d.soldats_escadron + d.sous_officiers_escadron) * d.escadrons_regiment;
            }
            
            // Si l'effectif max est 0 (bug), on ne touche à rien
            if (effectif_max <= 0) return; 

            // --- DEBUT CORRECTION RATIO (VOTRE BUG PRECEDENT) ---
            // 1. Calculer le pourcentage de force actuel
            const old_max = reg.effectif_max || effectif_max; // (Prend l'ancien max)
            const force_ratio = (old_max > 0) ? (reg.effectif_actuel / old_max) : 1.0;

            // 2. Appliquer le nouveau max
            reg.effectif_max = effectif_max;

            // 3. Mettre à jour l'effectif actuel au même ratio (arrondi)
            reg.effectif_actuel = Math.floor(effectif_max * force_ratio);
            // --- FIN CORRECTION RATIO ---
        }
    });

    // Recalculer la demande d'officiers et les coûts
    calculerBesoinTotalOfficiers(f);
    
    // Rafraîchir les onglets
    updateMilitaireTab();
    updateBudgetTab();
}

/**
 * NOUVEAU (Correctif) : Renomme un régiment.
 */
function renommerRegiment(index) {
    const f = GAME_STATE.currentFaction;
    const reg = f.ARMEE.regiments[index];
    
    if (!reg) {
        logToUI("Erreur : Régiment introuvable.", "error");
        return;
    }

    const nouveauNom = prompt(`Entrez un nouveau nom pour "${reg.nom}" :`, reg.nom);
    
    if (nouveauNom && nouveauNom.trim() !== "") {
        reg.nom = nouveauNom.trim();
        reg.id = nouveauNom.trim(); // Met aussi à jour l'ID pour la cohérence
        logToUI(`Régiment renommé en "${reg.nom}".`, "info");
        
        // Rafraîchir les onglets où le nom apparaît
        updateMilitaireTab();
        updateOperationsTab();
    }
}

/**
 * NOUVEAU (Correctif) : Supprime (démobilise) un régiment.
 * (MODIFIÉ - Point 9)
 */
function supprimerRegiment(index) {
    const f = GAME_STATE.currentFaction;
    const reg = f.ARMEE.regiments[index];
    
    if (!reg) {
        logToUI("Erreur : Régiment introuvable.", "error");
        return;
    }

    if (reg.assigne_a_armee) {
        alert("Action impossible !\n\nVous devez d'abord dissoudre l'armée ou transférer ce régiment vers une garnison (via l'onglet 'Opérations Militaires') avant de le supprimer.");
        return;
    }

    if (confirm(`Voulez-vous vraiment démobiliser le régiment "${reg.nom}" ?\n\nLe manpower, les officiers, et l'équipement (fusils/chevaux) seront retournés à vos réserves.`)) {
        
        const unitDef = RECRUIT_DEFINITIONS[reg.type];
        
        // 1. Rembourser les ressources
        const effectif = reg.effectif_actuel;
        
        // Manpower & Population
        f.RESERVES.reserve_manpower += effectif;
        f.ETAT_DYNAMIQUE.population_assignee_armee -= effectif;
        f.ETAT_DYNAMIQUE.population_disponible += effectif;
        
        // Officiers (Lieutenants)
        f.ARMEE.officiers_supply.lieutenant += (reg.officiers || 5);
        
        // Équipement
        if (unitDef) {
            // (MODIFIÉ Point 9) - Le Génie rend aussi ses fusils
            if (unitDef.type === "Infanterie" || (unitDef.type === "Garde" && reg.type.includes("Infanterie")) || unitDef.type === "Génie") {
                f.RESERVES.stock_fusils += effectif;
            } else if (unitDef.type === "Cavalerie" || (unitDef.type === "Garde" && reg.type.includes("Cavalerie"))) {
                f.RESERVES.chevaux_disponibles += effectif;
            } else if (unitDef.type === "Artillerie" && reg.equipement) {
                // Retourne les canons au stock
                Object.keys(reg.equipement).forEach(type_canon => {
                    f.RESERVES.stock_canons_terre += (reg.equipement[type_canon] || 0);
                });
            }
        }
        
        // 2. Supprimer le régiment
        f.ARMEE.regiments.splice(index, 1);
        
        logToUI(`Le régiment "${reg.nom}" a été démobilisé. Ressources récupérées.`, "success");
        
        // 3. Recalculer les besoins et rafraîchir
        calculerBesoinTotalOfficiers(f);
        updateFullDashboard();
    }
}

/**
 * NOUVEAU (Correctif) : Met à jour le ratio de la Garde Nationale (slider).
 */
function updateGardeRatio(valeur) {
    const f = GAME_STATE.currentFaction;
    if (!f) return;
    const valRatio = parseInt(valeur, 10) || 200;
    
    // 1. Met à jour le modificateur de la faction
    f.MODIFICATEURS.garde_nationale_ratio = valRatio;
    
    // 2. Rafraîchit l'onglet population (qui recalcule les cibles)
    // (MODIFIÉ Point 6) - Doit rafraîchir l'onglet militaire
    updateMilitaireTab(); 
}

/**
 * NOUVEAU (Correctif) : Ajuste l'effectif de la Garde Nationale (bouton).
 */
function recruterGardeNationale() {
    const f = GAME_STATE.currentFaction;
    if (!f) return;

    const pop = f.ETAT_DYNAMIQUE.population_metropole;
    const ratio = f.MODIFICATEURS.garde_nationale_ratio;
    
    // 1. Calculer les effectifs
    const cible = Math.floor(pop / ratio);
    const actuel = Math.floor(f.ARMEE.milice_metropole);
    const difference = cible - actuel;

    if (difference === 0) {
        alert("L'effectif actuel correspond déjà à l'effectif cible.");
        return;
    }

    if (difference > 0) { // --- Recrutement ---
        const fusilsRequis = difference;
        const manpowerRequis = difference;

        // On vérifie le pool de main d'œuvre "civil" (pas la réserve militaire pro)
        if (manpowerRequis > f.ETAT_DYNAMIQUE.population_disponible) {
            alert(`Population disponible insuffisante ! Requis : ${manpowerRequis.toLocaleString()}, Disponible : ${Math.floor(f.ETAT_DYNAMIQUE.population_disponible).toLocaleString()}`);
            return;
        }
        if (fusilsRequis > f.RESERVES.stock_fusils) {
            alert(`Stock de fusils insuffisant ! Requis : ${fusilsRequis.toLocaleString()}, Disponible : ${Math.floor(f.RESERVES.stock_fusils).toLocaleString()}`);
            return;
        }

        // Déduire les ressources
        f.ETAT_DYNAMIQUE.population_disponible -= manpowerRequis;
        f.ETAT_DYNAMIQUE.population_assignee_armee += manpowerRequis; // Ils sont maintenant "assignés"
        f.RESERVES.stock_fusils -= fusilsRequis;
        f.ARMEE.milice_metropole = cible; // Mettre à jour l'effectif actuel

        logToUI(`Garde Nationale mobilisée : +${difference.toLocaleString()} hommes.`, "success");

    } else { // --- Démobilisation ---
        const fusilsRendus = Math.abs(difference);
        const manpowerRendus = Math.abs(difference);

        f.ETAT_DYNAMIQUE.population_disponible += manpowerRendus;
        f.ETAT_DYNAMIQUE.population_assignee_armee -= manpowerRendus;
        f.RESERVES.stock_fusils += fusilsRendus;
        f.ARMEE.milice_metropole = cible; // Mettre à jour l'effectif actuel

        logToUI(`Garde Nationale démobilisée : ${manpowerRendus.toLocaleString()} hommes retournent à la vie civile.`, "info");
    }

    // 3. Rafraîchir (important pour les coûts et la demande d'officiers)
    calculerBesoinTotalOfficiers(f);
    updateFullDashboard();
}

/**
 * NOUVEAU (Refonte Officiers): Gère la promotion manuelle des rangs intermédiaires.
 */
function promouvoirOfficiers(rangSource, rangCible) {
    const f = GAME_STATE.currentFaction;
    const supply = f.ARMEE.officiers_supply;
    
    let cout = 0, quantite = 0;

    if (rangCible === 'capitaine') { quantite = 10; cout = 5000; } // Augmentation du coût
    else if (rangCible === 'lieutenant_colonel') { quantite = 5; cout = 10000; }
    else if (rangCible === 'colonel') { quantite = 2; cout = 20000; }
    else { return; }

    if (supply[rangSource] < quantite) {
        alert(`Officiers insuffisants ! Requis : ${quantite} ${rangSource}s, Disponible : ${Math.floor(supply[rangSource])}`);
        return;
    }
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }

    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout; // Compte comme dépense
    supply[rangSource] -= quantite;
    supply[rangCible] += quantite;

    logToUI(`Promotion manuelle : ${quantite} ${rangSource}s sont promus ${rangCible}s pour ${cout.toLocaleString()} LT.`, "success");
    updateMilitaireTab();
    updateHeader();
}

/**
 * NOUVEAU (Refonte Officiers): Gère la nomination manuelle des généraux.
 */
function nommerGeneral(rangCible) {
    const f = GAME_STATE.currentFaction;
    const supply = f.ARMEE.officiers_supply;
    const rangSource = 'colonel'; // Les généraux viennent des colonels
    const quantite = 1;
    let cout = 0;

    if (rangCible === 'general_brigade') { cout = 20000; } // Augmentation du coût
    else if (rangCible === 'general_division') { cout = 20000; }
    else { return; }

    if (supply[rangSource] < quantite) {
        alert(`Officiers insuffisants ! Requis : ${quantite} ${rangSource}, Disponible : ${Math.floor(supply[rangSource])}`);
        return;
    }
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }

    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout; // Compte comme dépense
    supply[rangSource] -= quantite;
    supply[rangCible] += quantite;

    logToUI(`Nomination : 1 ${rangSource} est promu ${rangCible} pour ${cout.toLocaleString()} LT.`, "success");
    updateMilitaireTab();
    updateHeader();
}

/**
 * NOUVEAU (Restauré) : Construit un ou plusieurs navires
 * (CORRIGÉ : Gère les modificateurs de coût et de temps des ministres)
 */
function construireNavires() {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    const type = document.getElementById('navire-type-select').value;
    const quantite = parseInt(document.getElementById('navire-construire-nb').value) || 0;
    
    if (!type || quantite <= 0) {
        alert("Veuillez sélectionner un type et une quantité.");
        return;
    }
    
    const def = BUILD_DEFINITIONS.navires[type];
    if (!def) {
        alert("Type de navire inconnu.");
        return;
    }

    const recette = def.consommation_construction || {};
    const boisRequis = (recette.bois || 0) * quantite;
    
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis.toLocaleString()} m³, Disponible: ${Math.floor(stocks.bois)}`);
        return;
    }

    // --- BLOC CORRIGÉ (mod_cout et mod_temps) ---
    let mod_cout = 1.0;
    let mod_temps = 1.0;
    let msgLog = `Construction de ${quantite}x ${def.nom} lancée.`;

    if (def.type === 'ligne') {
        mod_cout = f.MODIFICATEURS.cout_navire_ligne_mod || 1.0;
        mod_temps = f.MODIFICATEURS.temps_navire_ligne_mod || 1.0;
        if(mod_cout < 1.0) msgLog += ` (Coût Ligne réduit par Ministre)`;
    } else { // 'escorte' ou 'côtier'
        mod_cout = f.MODIFICATEURS.cout_navire_escorte_mod || 1.0;
        // (Pas de modificateur de temps pour les escortes par défaut)
        if(mod_cout < 1.0) msgLog += ` (Coût Escorte réduit par Ministre)`;
    }
    
    const tempsFinal = Math.ceil(def.temps * mod_temps);
    const coutTotal = (def.cout * mod_cout) * quantite;
    
    // --- FIN CORRECTION ---

    if (coutTotal > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${coutTotal.toLocaleString()} LT`);
        return;
    }
    
    stocks.bois -= boisRequis;
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.construction_extra += coutTotal;
    
    for (let i = 0; i < quantite; i++) {
        f.MARINE.flotte.push({
            id: f.MARINE.flotte.length + 1, // Simple ID
            type: type,
            nom: `(En construction)`,
            pin_base: def.pin,
            pin_actuel: 0,
            age: 0,
            statut: 'en-construction',
            temps_restant: tempsFinal, // Utilise le temps modifié
            carene_cuivre: false
        });
    }
    
    logToUI(msgLog, "success");
    
    updateHeader();
    updateNavyTab();
    updateBudgetTab();
}

/**
 * NOUVEAU (Restauré) : Renomme un navire
 */
function renommerNavire(index) {
    const f = GAME_STATE.currentFaction;
    const navire = f.MARINE.flotte[index];
    if (!navire) return;

    const nouveauNom = prompt(`Entrez un nouveau nom pour "${navire.nom}" :`, navire.nom);
    
    if (nouveauNom && nouveauNom.trim() !== "") {
        navire.nom = nouveauNom.trim();
        logToUI(`Navire renommé en "${navire.nom}".`, "info");
        updateNavyTab();
    }
}

/**
 * NOUVEAU (Restauré) : Retire un navire de la flotte (démantèlement)
 */
function retirerNavire(index) {
    const f = GAME_STATE.currentFaction;
    const navire = f.MARINE.flotte[index];
    if (!navire) return;

    if (confirm(`Voulez-vous vraiment retirer/démanteler le "${navire.nom}" ?\n\nCette action est irréversible. Les marins seront renvoyés au pool.`)) {
        
        // Retourner les marins au pool s'il était armé
        if (navire.statut === 'arme' || navire.statut === 'radoub-requis' || navire.statut === 'en-course') {
            const marinsRequis = navire.pin_base * GAME_SETTINGS.MARINS_PAR_NAVIRE.guerre_par_pin;
            f.RESERVES.marins_marine_guerre -= marinsRequis;
        }

        // Retirer le navire de la flotte
        f.MARINE.flotte.splice(index, 1);
        
        logToUI(`Le "${navire.nom}" a été retiré du service.`, "info");
        updateNavyTab();
        updateBudgetTab();
    }
}

/**
 * NOUVEAU (Restauré) : Gère les actions spéciales (Carénage, Course)
 */
function lancerActionSpecialeNavire(index, action) {
    const f = GAME_STATE.currentFaction;
    const navire = f.MARINE.flotte[index];
    if (!navire) return;

    if (action === 'carener') {
        if (navire.statut !== 'radoub-requis') {
            alert("Le carénage au cuivre ne peut être effectué que lors d'un radoub.");
            return;
        }
        logToUI(`Le carénage au cuivre sera effectué lors du prochain radoub.`);
        lancerRadoub(index, true); // Lance le radoub spécial
    
    } else if (action === 'course_etat') {
        if (navire.statut !== 'arme') {
            alert("Le navire doit être 'Armé' pour partir en mission de course.");
            return;
        }
        navire.statut = 'en-course';
        logToUI(`Le "${navire.nom}" part en mission de course. Il reviendra l'année prochaine.`, "success");
        updateNavyTab();
    }
}

/**
 * NOUVEAU : Ouvre la modale de gestion pour une VILLE COLONIALE
 * Gère le filtrage par climat et les prérequis.
 */
function ouvrirModalGestionVilleColonie(index) {
    const f = GAME_STATE.currentFaction;
    const ville = f.COLONIES.villes[index];
    if (!ville) return;
    
    GAME_STATE.villeColonieEnCours = index; // Important
    const climatVille = ville.climat || "Tempéré";

    document.getElementById('modal-city-title').textContent = `Gérer ${ville.nom} (Climat: ${climatVille})`;
    document.getElementById('modal-city-pop').textContent = (ville.pop_colons + ville.pop_indigenes + ville.pop_esclaves).toLocaleString();
    
    const select = document.getElementById('city-project-select');
    let htmlOptions = '<option value="">-- Choisir un projet --</option>';
    
    // Boucle sur les bâtiments spéciaux (où sont définis les projets coloniaux)
    Object.keys(BUILD_DEFINITIONS.batiments_speciaux).forEach(key => {
        const def = BUILD_DEFINITIONS.batiments_speciaux[key];
        
        if (def.climat_requis) {
            if (!ville.projets.includes(key)) {
                const climatOK = def.climat_requis.includes("any") || def.climat_requis.includes(climatVille);
                
                if (climatOK) {
                    let prerequisOK = true;
                    let prerequisTexte = "";
                    if (def.requis) {
                        if (!ville.projets.includes(def.requis)) {
                            prerequisOK = false;
                            prerequisTexte = ` (Requis: ${BUILD_DEFINITIONS.batiments_speciaux[def.requis].nom})`;
                        }
                    }
                    
                    if (prerequisOK) {
                        // NOUVEAU : Ajout de l'attribut "title" pour l'infobulle
                        let tooltipText = `${def.nom}\nCoût: ${def.cout.toLocaleString()} LT\n`;
                        if (def.bonus_production_ville_pct) tooltipText += `Effet: +${def.bonus_production_ville_pct * 100}% Production (Ville)\n`;
                        if (def.bonus_valeur_rnb_sucre_pct) tooltipText += `Effet: +${def.bonus_valeur_rnb_sucre_pct * 100}% Valeur Sucre\n`;
                        if (def.malus_stabilite) tooltipText += `Effet: -${def.malus_stabilite} Stabilité\n`;

                        htmlOptions += `<option value="${key}" title="${tooltipText}">${def.nom} (${(def.cout / 1000).toFixed(0)}k LT)</option>`;
                    } else {
                        // Affiche le bâtiment mais le désactive
                        htmlOptions += `<option value="" disabled>${def.nom}${prerequisTexte}</option>`;
                    }
                }
            }
        }
    });
    
    select.innerHTML = htmlOptions;

    // Attache le bon listener au bouton (Colonial)
    const btn = document.getElementById('modal-city-manage-btn');
    btn.onclick = lancerProjetColonial; // Pointe vers la NOUVELLE fonction

    toggleModal('modal-city-manage', true);
}

/**
 * NOUVEAU : Lance un projet dans une VILLE COLONIALE
 * (Différent de lancerProjetUrbain)
 */
function lancerProjetColonial() {
    const f = GAME_STATE.currentFaction;
    const index = GAME_STATE.villeColonieEnCours;
    const ville = f.COLONIES.villes[index];
    const projetKey = document.getElementById('city-project-select').value;
    
    if (!ville || !projetKey) {
        alert("Veuillez sélectionner un projet valide.");
        return;
    }
    
    const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
    if (!def) {
        alert("Projet inconnu !");
        return;
    }
    
    const cout = def.cout;
    const recette = def.consommation_construction || {};
    const boisRequis = recette.bois || 0;
    const ferRequis = recette.fer || 0;
    
    // Les bâtiments coloniaux puisent dans le pool national
    const ouvriersRequis = (def.ouvriers || 0); 

    // --- Vérifications ---
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }
    if (ouvriersRequis > f.ETAT_DYNAMIQUE.population_disponible) {
        alert(`Ouvriers qualifiés (Métropole) insuffisants ! Requis: ${ouvriersRequis.toLocaleString()} ouvriers`);
        return;
    }
    if (boisRequis > f.RESERVES.stock_matieres_premieres.bois) {
        alert(`Stock de bois (Métropole) insuffisant ! Requis: ${boisRequis} m³`);
        return;
    }
     if (ferRequis > f.RESERVES.stock_matieres_premieres.fer) {
        alert(`Stock de fer (Métropole) insuffisant ! Requis: ${ferRequis} T`);
        return;
    }
    // --- Fin Vérifications ---
    
    // Dépenses (Nationales)
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.colonisation_extra += cout; // Dépense coloniale
    f.RESERVES.stock_matieres_premieres.bois -= boisRequis;
    f.RESERVES.stock_matieres_premieres.fer -= ferRequis;
    
    f.ETAT_DYNAMIQUE.population_disponible -= ouvriersRequis;
    f.ETAT_DYNAMIQUE.population_assignee_industrie += ouvriersRequis;
    
    // Ajout des coûts admin (Nationaux)
    f.ETAT_DYNAMIQUE.administrateurs_total += (def.admin_requis || 0);
    f.ECONOMIE.salaires_base.administration += (def.salaire_ajout || 0);
    
    // --- APPLICATION DES EFFETS ---
    ville.projets.push(projetKey); // Ajoute le projet à la VILLE
    
    // Applique les effets NATIONAUX immédiats
    if (def.bonus_stabilite) f.ETAT_DYNAMIQUE.stabilite += def.bonus_stabilite;
    if (def.bonus_milice_max) f.ARMEE.milice_coloniale_max = (f.ARMEE.milice_coloniale_max || 0) + def.bonus_milice_max;
    if (def.bonus_cout_esclave_pct) {
        GAME_SETTINGS.COUT_CONSTRUCTION.esclave *= (1 - def.bonus_cout_esclave_pct);
        updateSlaveCost(); // Met à jour le placeholder du bouton
    }
    if (def.bonus_reserve_marins_pct) {
        // L'effet sera appliqué dans prochainTour
    }
    if (def.bonus_qualite_marine) f.MARINE.qualite += def.bonus_qualite_marine;
    if (def.cout_entretien_marine) {
        // L'effet sera appliqué dans calculerToutesDepenses
    }
    
    logToUI(`Projet "${def.nom}" lancé dans ${ville.nom}. Coût: ${cout.toLocaleString()} LT.`, "success");
    toggleModal('modal-city-manage', false);
    
    // Rafraîchir les onglets concernés
    updateColoniesTab();
    updateBudgetTab();
    updateAdminTab();
    updateHeader();
}

/**
 * NOUVEAU (Restauré) : Crée une armée à partir des régiments en garnison sélectionnés
 */
function creerArmee() {
    const f = GAME_STATE.currentFaction;
    const nomArmee = document.getElementById('new-army-name').value;
    const statutArmee = document.getElementById('new-army-status').value;
    
    if (!nomArmee || !statutArmee) {
        alert("Veuillez donner un nom et un statut à la nouvelle armée.");
        return;
    }
    
    const checkboxes = document.querySelectorAll('#garnison-list-container input[name="regiment-select"]:checked');
    if (checkboxes.length === 0) {
        alert("Veuillez sélectionner au moins un régiment.");
        return;
    }
    
    let provinceId = null;
    const regimentsSelectionnes = [];
    const indexesSelectionnes = [];

    for (const cb of checkboxes) {
        const index = parseInt(cb.value, 10);
        const regProvinceId = cb.getAttribute('data-province');
        
        if (provinceId === null) {
            provinceId = regProvinceId; // Définit la province de ralliement
        } else if (provinceId !== regProvinceId) {
            alert("Erreur : Tous les régiments doivent être dans la même province pour former une armée.");
            return;
        }
        
        const reg = f.ARMEE.regiments[index];
        if (reg) {
            regimentsSelectionnes.push(reg);
            indexesSelectionnes.push(index);
        }
    }
    
    // Créer la nouvelle armée
    const nouvelId = `${f.nom.substring(0, 3)}_${f.ARMEE.armees.length + 1}`;
    const nouvelleArmee = new Armee(nouvelId, nomArmee, f.nom, provinceId);
    nouvelleArmee.statut = statutArmee;
    
    // Assigner les régiments
    regimentsSelectionnes.forEach(reg => {
        reg.assigne_a_armee = nouvelId;
        nouvelleArmee.regiments.push(reg);
    });
    
    f.ARMEE.armees.push(nouvelleArmee);
    
    logToUI(`L'armée "${nomArmee}" a été formée à ${MONDE[provinceId].nom_affiche} avec ${regimentsSelectionnes.length} régiment(s).`, "success");
    
    // Rafraîchir les onglets
    updateOperationsTab();
    updateMilitaireTab();
}

/**
 * NOUVEAU (Restauré) : Dissout une armée, renvoyant ses régiments en garnison
 */
function dissoudreArmee(index) {
    const f = GAME_STATE.currentFaction;
    const armee = f.ARMEE.armees[index];
    if (!armee) return;
    
    if (confirm(`Voulez-vous vraiment dissoudre l'armée "${armee.nom}" ?\n\nTous les régiments retourneront à la garnison de ${MONDE[armee.localisation].nom_affiche}.`)) {
        
        armee.regiments.forEach(reg => {
            reg.assigne_a_armee = null;
            // La localisation est déjà correcte
        });
        
        f.ARMEE.armees.splice(index, 1);
        
        logToUI(`L'armée "${armee.nom}" a été dissoute.`, "info");
        
        updateOperationsTab();
        updateMilitaireTab();
    }
}

/**
 * NOUVEAU (Restauré) : Ouvre la modale de gestion d'une armée
 */
function ouvrirModalGestionArmee(index) {
    const f = GAME_STATE.currentFaction;
    const armee = f.ARMEE.armees[index];
    if (!armee) return;

    GAME_STATE.armeeEnCoursIndex = index;
    const province = MONDE[armee.localisation];

    document.getElementById('modal-army-title').textContent = `Gérer: ${armee.nom}`;
    document.getElementById('modal-army-location').textContent = province ? province.nom_affiche : "Inconnue";
    document.getElementById('modal-army-status').textContent = armee.statut;
    document.getElementById('modal-army-status').className = armee.statut === 'invasion' ? 'negative' : 'neutral';
    document.getElementById('modal-army-reg-count').textContent = armee.regiments.length;
    
    const puissanceInfo = armee.calculerPuissanceCombat();
    document.getElementById('modal-army-power').textContent = Math.floor(puissanceInfo.total).toLocaleString();

    // Remplir la liste des régiments
    let htmlRegs = '';
    armee.regiments.forEach(reg => {
        const effectifClass = reg.effectif_actuel < reg.effectif_max ? 'negative' : 'positive';
        htmlRegs += `
            <tr>
                <td>${reg.nom}</td>
                <td>${reg.type}</td>
                <td><strong class="${effectifClass}">${reg.effectif_actuel.toLocaleString()}</strong> / ${reg.effectif_max.toLocaleString()}</td>
            </tr>
        `;
    });
    document.getElementById('modal-army-reg-list').innerHTML = htmlRegs;

    // Remplir le sélecteur de mouvement
    const moveSelect = document.getElementById('modal-army-move-select');
    let htmlMove = '<option value="">-- Choisir destination --</option>';
    if (province) {
        province.voisins_terrestres.forEach(voisinId => {
            const voisin = MONDE[voisinId];
            if (voisin) {
                htmlMove += `<option value="${voisinId}">${voisin.nom_affiche} (${voisin.proprietaireActuel})</option>`;
            }
        });
    }
    moveSelect.innerHTML = htmlMove;

    toggleModal('modal-army-manage', true);
}

/**
 * NOUVEAU (Restauré) : Change le statut d'une armée (Défense/Invasion)
 */
function changerStatutArmee() {
    const f = GAME_STATE.currentFaction;
    const index = GAME_STATE.armeeEnCoursIndex;
    const armee = f.ARMEE.armees[index];
    if (!armee) return;

    if (armee.statut === 'defense') {
        armee.statut = 'invasion';
    } else {
        armee.statut = 'defense';
    }
    
    logToUI(`L'armée "${armee.nom}" est maintenant en statut "${armee.statut}".`, "info");
    
    // Rafraîchir la modale et l'onglet
    ouvrirModalGestionArmee(index);
    updateOperationsTab();
}

/**
 * NOUVEAU (Restauré) : Déplace une armée vers une province voisine
 */
function deplacerArmee() {
    const f = GAME_STATE.currentFaction;
    const index = GAME_STATE.armeeEnCoursIndex;
    const armee = f.ARMEE.armees[index];
    if (!armee) return;
    
    const cibleId = document.getElementById('modal-army-move-select').value;
    if (!cibleId) {
        alert("Veuillez sélectionner une destination.");
        return;
    }
    
    const provinceCible = MONDE[cibleId];
    if (!provinceCible) {
        alert("Erreur : Province cible introuvable.");
        return;
    }
    
    // (Point 6) Logique de combat
    const cleFaction = f.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e');
    
    if (provinceCible.proprietaireActuel !== cleFaction) {
        // C'est une province ennemie (ou neutre)
        const guerre = trouverGuerreActive(f.nom, provinceCible.proprietaireInitial); // Vérifie la guerre
        
        if (armee.statut !== 'invasion') {
            alert("Action impossible ! L'armée doit être en statut 'Invasion' pour entrer en territoire ennemi.");
            return;
        }
        if (!guerre) {
            alert("Action impossible ! Vous devez déclarer la guerre à cette faction avant d'envahir.");
            return;
        }
        
        // Lancer la bataille
        logToUI(`L'armée "${armee.nom}" lance une attaque sur ${provinceCible.nom_affiche}...`, "info");
        lancerBataille(armee, provinceCible); // La bataille gère le déplacement si victoire
        
    } else {
        // C'est notre province, déplacement simple
        armee.localisation = cibleId;
        armee.regiments.forEach(reg => {
            reg.localisation = cibleId;
        });
        logToUI(`L'armée "${armee.nom}" se déplace vers ${provinceCible.nom_affiche}.`, "info");
    }
    
    // Fermer la modale et rafraîchir
    toggleModal('modal-army-manage', false);
    updateOperationsTab();
    updateMilitaireTab();
}


/**
 * NOUVEAU (Restauré) : Ouvre la modale d'info d'une province (clic sur carte)
 */
function ouvrirModalInfoProvince(provinceId) {
    const province = MONDE[provinceId];
    if (!province) return;

    document.getElementById('modal-province-title').textContent = province.nom_affiche;
    document.getElementById('modal-province-owner').textContent = province.proprietaireActuel;
    document.getElementById('modal-province-size').textContent = `${province.superficie.toLocaleString()} km²`;
    
    const unrest = document.getElementById('modal-province-unrest');
    if (province.timer_instabilite > 0) {
        unrest.textContent = `Instable (${province.timer_instabilite} ans)`;
        unrest.className = 'negative';
    } else {
        unrest.textContent = 'Stable';
        unrest.className = 'positive';
    }

    // Afficher les forts
    const forts = province.forteresses;
    let htmlForts = '';
    if (forts.classe_1 > 0) htmlForts += `<tr><td>Forteresse 1ère Classe</td><td>${forts.classe_1}</td></tr>`;
    if (forts.classe_2 > 0) htmlForts += `<tr><td>Forteresse 2e Classe</td><td>${forts.classe_2}</td></tr>`;
    if (forts.classe_3_4 > 0) htmlForts += `<tr><td>Forteresse 3e/4e Classe</td><td>${forts.classe_3_4}</td></tr>`;
    if (forts.fort > 0) htmlForts += `<tr><td>Fort / Poste</td><td>${forts.fort}</td></tr>`;
    document.getElementById('modal-province-forts').innerHTML = htmlForts || '<tr><td colspan="2">Aucune fortification majeure.</td></tr>';

    // Afficher les armées
    let htmlArmies = '';
    Object.values(FACTIONS_DATA).forEach(f => {
        f.ARMEE.armees.forEach(armee => {
            if (armee.localisation === provinceId) {
                htmlArmies += `<li>${armee.nom} (${f.nom})</li>`;
            }
        });
    });
    document.getElementById('modal-province-armies').innerHTML = htmlArmies || '<li>Aucune armée en campagne.</li>';
    
    toggleModal('modal-province-info', true);
}


/**
 * NOUVEAU (Restauré) : Déclare la guerre
 */
function declarerGuerre(cibleNom) {
    const fAtt = GAME_STATE.currentFaction;
    const fDef = FACTIONS_DATA[cibleNom];
    if (!fDef) return;
    
    if (trouverGuerreActive(fAtt.nom, fDef.nom)) {
        alert("Vous êtes déjà en guerre avec cette faction !");
        return;
    }
    
    if (confirm(`Voulez-vous vraiment déclarer la guerre à ${fDef.nom} ?\n\nCela aura un impact majeur sur votre stabilité et vos relations.`)) {
        const guerreId = `guerre_${fAtt.nom}_vs_${fDef.nom}`;
        const nouvelleGuerre = {
            id: guerreId,
            nom: `Guerre ${fAtt.nom} vs ${fDef.nom}`,
            attaquants: [fAtt.nom],
            defenseurs: [fDef.nom],
            scoreDeGuerre: 0 // Score du point de vue de l'attaquant
        };
        
        GAME_STATE.guerresActives.push(nouvelleGuerre);
        
        fAtt.DIPLOMATIE.relations[fDef.nom] = "Guerre";
        fDef.DIPLOMATIE.relations[fAtt.nom] = "Guerre";
        
        fAtt.ETAT_DYNAMIQUE.stabilite -= 15;
        
        logToUI(`VOUS AVEZ DÉCLARÉ LA GUERRE À ${fDef.nom} ! (-15 Stabilité)`, "error");
        updateDiplomacyTab();
        updateStatutGlobal();
    }
}

/**
 * NOUVEAU (Restauré) : Propose la paix (placeholder)
 */
function proposerPaix(guerreId) {
    alert("La négociation de paix n'est pas encore implémentée.\n\n(Fonctionnalité future : transférer des provinces ou de l'argent en fonction du score de guerre).");
}

/**
 * NOUVEAU (Restauré) : Achète des ressources sur le marché mondial
 * (MODIFIÉ - Point 11)
 */
function acheterRessource() {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    const resKey = document.getElementById('market-resource-select').value;
    const quantite = parseInt(document.getElementById('market-quantity-input').value) || 0;
    
    if (!resKey || quantite <= 0) {
        alert("Veuillez sélectionner une ressource et une quantité.");
        return;
    }
    
    const prixUnitaire = GAME_STATE.PRIX_MARCHE[resKey] || 1;
    const coutTotal = prixUnitaire * quantite;

    if (f.ETAT_DYNAMIQUE.tresor < coutTotal) {
        alert(`Trésor insuffisant ! Requis : ${coutTotal.toLocaleString()} LT`);
        return;
    }
    
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    
    if (!stocks[resKey]) stocks[resKey] = 0;
    
    // (MODIFIÉ Point 11) - Gérer le stock de chevaux militaires
    if (resKey === 'cheval') {
        f.RESERVES.chevaux_disponibles += quantite;
    }
    stocks[resKey] += quantite;
    
    logToUI(`Achat de ${quantite.toLocaleString()} ${resKey} au marché mondial pour ${coutTotal.toLocaleString()} LT.`, "success");
    updateCommerceTab();
    updateIndustrieTab();
    updateHeader();
    updateMilitaireTab(); // (Pour les chevaux)
}

/**
 * NOUVEAU (Restauré) : Vend des ressources sur le marché mondial
 * (MODIFIÉ - Point 11)
 */
function vendreRessource() {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    const resKey = document.getElementById('market-resource-select').value;
    const quantite = parseInt(document.getElementById('market-quantity-input').value) || 0;
    
    if (!resKey || quantite <= 0) {
        alert("Veuillez sélectionner une ressource et une quantité.");
        return;
    }
    
    const stockActuel = stocks[resKey] || 0;
    if (quantite > stockActuel) {
        alert(`Stock insuffisant ! Disponible : ${Math.floor(stockActuel).toLocaleString()} ${resKey}`);
        return;
    }

    // (MODIFIÉ Point 11) - Gérer le stock de chevaux militaires
    if (resKey === 'cheval') {
        if (quantite > f.RESERVES.chevaux_disponibles) {
            alert(`Stock de chevaux militaires insuffisant ! Disponible : ${Math.floor(f.RESERVES.chevaux_disponibles).toLocaleString()}`);
            return;
        }
        f.RESERVES.chevaux_disponibles -= quantite;
    }

    const prixUnitaire = GAME_STATE.PRIX_MARCHE[resKey] || 1;
    const revenuTotal = (prixUnitaire * quantite) * 0.85; // 15% de frais de marché
    
    f.ETAT_DYNAMIQUE.tresor += revenuTotal;
    stocks[resKey] -= quantite;
    
    logToUI(`Vente de ${quantite.toLocaleString()} ${resKey} au marché mondial. Revenu : ${revenuTotal.toLocaleString()} LT.`, "success");
    updateCommerceTab();
    updateIndustrieTab();
    updateHeader();
    updateMilitaireTab(); // (Pour les chevaux)
}

/**
 * NOUVEAU (Restauré) : Met à jour les infos de la modale du marché
 * (MODIFIÉ - Point 11)
 */
function updateMarketInfo() {
    const f = GAME_STATE.currentFaction;
    if (!f) return; // Si la faction n'est pas encore chargée
    
    const stocks = f.RESERVES.stock_matieres_premieres;
    const resKey = document.getElementById('market-resource-select').value;
    const quantite = parseInt(document.getElementById('market-quantity-input').value) || 0;
    
    const infoText = document.getElementById('market-info-text');
    const buyBtn = document.getElementById('market-buy-btn');
    const sellBtn = document.getElementById('market-sell-btn');

    if (!resKey) {
        infoText.textContent = "Veuillez sélectionner une ressource.";
        buyBtn.textContent = "Acheter (...)";
        sellBtn.textContent = "Vendre (...)";
        return;
    }
    
    // (MODIFIÉ Point 11) - Affiche le stock militaire si 'cheval'
    const stockActuel = (resKey === 'cheval') ? (f.RESERVES.chevaux_disponibles || 0) : (stocks[resKey] || 0);
    
    const prixUnitaire = GAME_STATE.PRIX_MARCHE[resKey] || 1;
    const coutTotal = prixUnitaire * quantite;
    const revenuTotal = (prixUnitaire * quantite) * 0.85; // 15% de frais
    
    infoText.textContent = `Stock Actuel : ${Math.floor(stockActuel).toLocaleString()} | Prix du Marché : ${prixUnitaire.toLocaleString()} LT`;
    buyBtn.textContent = `Acheter (${coutTotal.toLocaleString()} LT)`;
    sellBtn.textContent = `Vendre (${revenuTotal.toLocaleString()} LT)`;
}

/**
 * NOUVEAU (Restauré) : Fonde la compagnie marchande
 */
function fonderCompagnieMarchande() {
    const f = GAME_STATE.currentFaction;
    const cout = 5000000;
    
    if (f.ECONOMIE.compagnie_marchande_fondee) {
        alert("Vous avez déjà fondé une compagnie marchande !");
        return;
    }
    
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }
    
    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.ECONOMIE.compagnie_marchande_fondee = true;
    
    // Ajoute un bonus permanent
    f.ECONOMIE.valeur_commerciale_totale *= 1.10; // +10% VCT
    
    logToUI("Compagnie Marchande des Indes fondée ! (+10% VCT, +2% Croissance Flotte Marchande)", "success");
    updateCommerceTab();
    updateBudgetTab();
    updateHeader();
}

/**
 * NOUVEAU (Restauré) : Recrute des milices coloniales
 */
function entrainerMilice(type) {
    const f = GAME_STATE.currentFaction;
    if (type === 'coloniale') {
        const cout = GAME_SETTINGS.COUT_CONSTRUCTION.milice_coloniale;
        const recrues = 1000;
        
        if (f.ETAT_DYNAMIQUE.tresor < cout) {
            alert(`Trésor insuffisant ! Requis: ${cout.toLocaleString()} LT`);
            return;
        }
        if (f.RESERVES.stock_fusils < recrues) {
            alert(`Stock de fusils insuffisant ! Requis: ${recrues}`);
            return;
        }
        if (f.ETAT_DYNAMIQUE.population_colonies.colons < (f.ARMEE.milice_coloniale + recrues)) {
            alert("Pas assez de colons pour former une nouvelle milice.");
            return;
        }
        
        f.ETAT_DYNAMIQUE.tresor -= cout;
        f.RESERVES.stock_fusils -= recrues;
        f.ARMEE.milice_coloniale += recrues;
        
        logToUI(`Recrutement de ${recrues} miliciens coloniaux.`, "success");
        updateColoniesTab();
        updateHeader();
        updateMilitaireTab();
    }
}

/**
 * NOUVEAU (Restauré) : Défriche de nouvelles terres
 */
function defricherTerre() {
    const f = GAME_STATE.currentFaction;
    const cout = 100000;
    const hectares = 1000;
    const boisCout = 1000; // Coût en bois pour les outils de défrichement

    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert(`Trésor insuffisant ! Requis : ${cout.toLocaleString()} LT`);
        return;
    }
    if (f.INFRASTRUCTURE.foret.hectares < hectares) {
        alert(`Pas assez de forêt à défricher ! Requis : ${hectares} ha`);
        return;
    }
    if (f.RESERVES.stock_matieres_premieres.bois < boisCout) {
        alert(`Stock de bois insuffisant pour les outils ! Requis : ${boisCout} m³`);
        return;
    }

    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.RESERVES.stock_matieres_premieres.bois -= boisCout;
    f.INFRASTRUCTURE.foret.hectares -= hectares;
    f.ECONOMIE.agriculture.hectares_bonus += hectares; // Ajoute aux terres arables

    logToUI(`Défrichage réussi. +${hectares} ha de terres agricoles, -${hectares} ha de forêt.`, "success");
    updateRessourcesTab();
    updateTerritoireTab();
    updateHeader();
}

/**
 * NOUVEAU (Restauré) : Déploie une machine agricole du stock
 */
function deployerMachineAgricole(type) {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    
    let key, nom;
    if (type === 'batteuse') {
        key = 'machines_agri';
        nom = "Batteuse";
    } else {
        key = 'outils_agricoles';
        nom = "Set d'Outils";
    }

    if (!stocks[key] || stocks[key] < 1) {
        alert(`Aucune machine de type "${nom}" en stock !`);
        return;
    }
    
    stocks[key]--;
    
    if (type === 'batteuse') {
        f.ECONOMIE.agriculture.machines_deployees.batteuses++;
    } else {
        f.ECONOMIE.agriculture.machines_deployees.outils++;
    }
    
    logToUI(`Une ${nom} a été déployée dans les champs. Le rendement augmentera.`, "success");
    updateRessourcesTab();
    updateIndustrieTab();
}


/**
 * NOUVEAU (Point 6) : Gère le clic sur une province sur la carte
 */
function handleMapClick(provinceId) {
    if (MONDE[provinceId]) {
        ouvrirModalInfoProvince(provinceId);
    } else {
        console.warn(`Clic sur une province inconnue : ${provinceId}`);
    }
}

// =======================================================
// SECTION 7.5: GESTION CONSTRUCTION (POUR MODALE)
// =======================================================

/**
 * NOUVEAU : Ouvre la modale de construction générique
 * (Corrige l'erreur 'ouvrirModalConstruction is not defined')
 * (MODIFIÉ - Point 10)
 */
function ouvrirModalConstruction(type) {
    const f = GAME_STATE.currentFaction;
    const select = document.getElementById('build-type-select');
    const title = document.getElementById('modal-build-title');
    select.innerHTML = '';
    let definitions;

    // (MODIFIÉ) - Gère le nouveau type 'commerce_all'
    if (type === 'commerce_all') {
        title.textContent = "Construire Infrastructure Commerciale";
        // Fusionne les définitions pour la modale
        definitions = {
            ...BUILD_DEFINITIONS.infrastructures_commerciales,
            ...BUILD_DEFINITIONS.batiments_speciaux // Pour 'entrepot_colonial' etc. s'ils y sont
        };
    } else {
        switch (type) {
            case 'militaire':
                title.textContent = "Construire Manufacture Militaire";
                definitions = BUILD_DEFINITIONS.manufactures_armes;
                break;
            case 'civile':
                title.textContent = "Construire Manufacture Civile";
                definitions = BUILD_DEFINITIONS.manufactures_civiles;
                break;
            case 'mine':
                title.textContent = "Ouvrir une Mine";
                definitions = BUILD_DEFINITIONS.mines;
                break;
            case 'avancee':
                title.textContent = "Construire Industrie Avancée";
                definitions = BUILD_DEFINITIONS.manufactures_avancees;
                break;
            case 'luxe':
                title.textContent = "Construire Manufacture de Luxe";
                definitions = BUILD_DEFINITIONS.manufactures_luxe;
                break;
            case 'banque':
                title.textContent = "Fonder une Banque";
                definitions = BUILD_DEFINITIONS.banques;
                break;
            case 'naval':
                title.textContent = "Construire Infrastructure Navale";
                definitions = BUILD_DEFINITIONS.infrastructures_navales;
                break;
            case 'forteresse':
                title.textContent = "Construire Forteresse";
                definitions = BUILD_DEFINITIONS.forteresses;
                break;
            default:
                return;
        }
    }

    // Peuple le sélecteur
    Object.keys(definitions).forEach(key => {
        const def = definitions[key];
        
        // Logique de filtrage (n'affiche que les bâtiments de base, pas les upgrades)
        let isBaseLevel = key.endsWith('_p') || (!key.includes('_m') && !key.includes('_g'));
        
        // Cas spécial pour 'arsenal_g' (naval)
        if (type === 'naval' && key === 'arsenal_g') isBaseLevel = true;
        
        // --- DEBUT DU BLOC CORRIGÉ ---
        // Cas spécial pour 'commerce_all'
        if (type === 'commerce_all') {
            // Vérifie s'il appartient à l'une des deux listes
            const isCommerce = BUILD_DEFINITIONS.infrastructures_commerciales[key];
            const isSpecialCommerce = BUILD_DEFINITIONS.batiments_speciaux[key] && (
                key === 'entrepot_colonial' || 
                key === 'maison_assurance_maritime' || 
                key === 'entrepot_royal_douanes' ||
                key === 'comptoir_des_changes' ||
                key === 'bourse_de_commerce_p' || 
                key === 'chambre_de_commerce_p' 
            );
            
            // S'il n'est ni l'un ni l'autre, on le cache
            if (!isCommerce && !isSpecialCommerce) {
                isBaseLevel = false;
            }
            
            // S'il EST commerce, on vérifie s'il est un "base level"
            if (isCommerce && !isBaseLevel) {
                 // C'est une amélioration (ex: chantier_naval_civil_m), on le cache
                 isBaseLevel = false;
            }
            
            // S'il EST special, on l'autorise (car ils n'ont pas de _p)
            if (isSpecialCommerce) {
                // S'assurer qu'il n'est pas déjà construit s'il est unique
                if (def.unique && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key] && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key][f.nom]) {
                    isBaseLevel = false;
                } else {
                    isBaseLevel = true;
                }
            }
        }
        // --- FIN DU BLOC CORRIGÉ ---

        // Cas spécial pour 'civile' (Haras)
        if (type === 'civile' && key === 'haras_royal') isBaseLevel = true;
        else if (type !== 'civile' && key === 'haras_royal') isBaseLevel = false;
             
        if (isBaseLevel) {
             select.innerHTML += `<option value="${key}">${def.nom} (${(def.cout / 1000).toFixed(0)}k LT)</option>`;
        }
    });

    GAME_STATE.modalBuildType = type; // Stocke le type pour 'lancerConstruction'
    document.getElementById('build-quantity-input').value = 1;
    toggleModal('modal-build', true);
}

/**
 * NOUVEAU : Lance la construction depuis la modale générique
 * (MODIFIÉ - Point 10)
 */
function lancerConstruction() {
    const f = GAME_STATE.currentFaction;
    const stocks = f.RESERVES.stock_matieres_premieres;
    const type = GAME_STATE.modalBuildType;
    const key = document.getElementById('build-type-select').value;
    const quantite = parseInt(document.getElementById('build-quantity-input').value) || 1;
    
    if (!type || !key) {
        alert("Erreur de sélection.");
        return;
    }

    let definitions, liste, nomCategorie;
    
    // ================== BLOC CORRIGÉ ==================
    if (type === 'commerce_all') {
        nomCategorie = "Infrastructure Commerciale";
        // ESSAYER de trouver dans 'infrastructures_commerciales'
        if (BUILD_DEFINITIONS.infrastructures_commerciales[key]) {
            definitions = BUILD_DEFINITIONS.infrastructures_commerciales;
            liste = f.INFRASTRUCTURE.ports_commerciaux;
        } 
        // SINON, essayer de trouver dans 'batiments_speciaux'
        else if (BUILD_DEFINITIONS.batiments_speciaux[key]) {
            definitions = BUILD_DEFINITIONS.batiments_speciaux;
            // !! Doit aller dans la bonne liste !!
            if (!f.INFRASTRUCTURE.batiments_speciaux) {
                 f.INFRASTRUCTURE.batiments_speciaux = [];
            }
            liste = f.INFRASTRUCTURE.batiments_speciaux;
        } else {
            alert("Erreur: Catégorie de bâtiment commercial inconnue pour " + key);
            return;
        }
    } 
    // ================ FIN DU BLOC CORRIGÉ ================
    
    else if (type === 'militaire') { definitions = BUILD_DEFINITIONS.manufactures_armes; liste = f.INFRASTRUCTURE.manufactures_armes; nomCategorie = "Manufacture Militaire"; }
    else if (type === 'civile') { definitions = BUILD_DEFINITIONS.manufactures_civiles; liste = f.INFRASTRUCTURE.manufactures_civiles; nomCategorie = "Manufacture Civile"; }
    else if (type === 'mine') { definitions = BUILD_DEFINITIONS.mines; liste = f.INFRASTRUCTURE.mines; nomCategorie = "Mine"; }
    else if (type === 'avancee') { definitions = BUILD_DEFINITIONS.manufactures_avancees; liste = f.INFRASTRUCTURE.manufactures_avancees; nomCategorie = "Industrie Avancée"; }
    else if (type === 'luxe') { definitions = BUILD_DEFINITIONS.manufactures_luxe; liste = f.INFRASTRUCTURE.manufactures_luxe; nomCategorie = "Manufacture de Luxe"; }
    else if (type === 'banque') { definitions = BUILD_DEFINITIONS.banques; liste = f.INFRASTRUCTURE.banques; nomCategorie = "Banque"; }
    else if (type === 'naval') { definitions = BUILD_DEFINITIONS.infrastructures_navales; liste = f.INFRASTRUCTURE.arsenaux; nomCategorie = "Infrastructure Navale"; }
    else if (type === 'forteresse') { definitions = BUILD_DEFINITIONS.forteresses; liste = null; nomCategorie = "Forteresse"; }
    else { return; }

    const def = definitions[key];
    if (!def) {
        alert("Définition de bâtiment introuvable.");
        return;
    }

    // --- VÉRIFICATION BÂTIMENT UNIQUE (POUR BIBLIOTHÈQUE, ETC.) ---
    if (def.unique) {
        // Vérifie si la faction actuelle l'a déjà
        if (GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key] && GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key][f.nom]) {
            alert(`Construction impossible : Vous ne pouvez construire qu'un seul "${def.nom}" !`);
            return;
        }
    }

    const coutTotal = def.cout * quantite;
    
    const recette = def.consommation_construction || {};
    const boisRequis = (recette.bois || 0) * quantite;
    const ferRequis = (recette.fer || 0) * quantite;
    const cuivreRequis = (recette.cuivre || 0) * quantite;
    
    const ouvriersRequis = (def.ouvriers || 0) * quantite;
    
    // Vérifications
    if (coutTotal > f.ETAT_DYNAMIQUE.tresor) {
        alert(`Trésor insuffisant ! Requis: ${coutTotal.toLocaleString()} LT`);
        return;
    }
    if (ouvriersRequis > f.ETAT_DYNAMIQUE.population_disponible) {
        alert(`Population disponible insuffisante ! Requis: ${ouvriersRequis.toLocaleString()} ouvriers`);
        return;
    }
    if (boisRequis > stocks.bois) {
        alert(`Stock de bois insuffisant ! Requis: ${boisRequis.toLocaleString()} m³`);
        return;
    }
    if (ferRequis > stocks.fer) {
        alert(`Stock de fer insuffisant ! Requis: ${ferRequis.toLocaleString()} T`);
        return;
    }
    if (cuivreRequis > stocks.cuivre) {
        alert(`Stock de cuivre insuffisant ! Requis: ${cuivreRequis.toLocaleString()} Q`);
        return;
    }

    // Dépenses
    f.ETAT_DYNAMIQUE.tresor -= coutTotal;
    f.DEPENSES_BUDGET.construction_extra += coutTotal;
    stocks.bois -= boisRequis;
    stocks.fer -= ferRequis;
    stocks.cuivre -= cuivreRequis;
    
    // Allocation de population
    f.ETAT_DYNAMIQUE.population_disponible -= ouvriersRequis;
    f.ETAT_DYNAMIQUE.population_assignee_industrie += ouvriersRequis;

    // Ajout des bonus admin
    f.ETAT_DYNAMIQUE.administrateurs_total += (def.admin_requis || 0) * quantite;
    f.ECONOMIE.salaires_base.administration += (def.salaire_ajout || 0) * quantite;
    f.ETAT_DYNAMIQUE.admin_efficacite_plafond += (def.efficacite_bonus || 0) * quantite;

    // Ajout des bâtiments
    if (type === 'forteresse') {
        if (key === 'forteresse_1') f.INFRASTRUCTURE.forteresses.f1 += quantite;
        else if (key === 'forteresse_2') f.INFRASTRUCTURE.forteresses.f2 += quantite;
        else if (key === 'forteresse_3') f.INFRASTRUCTURE.forteresses.f3_4 += quantite;
        else if (key === 'fort_colonial') f.COLONIES.forts_coloniaux += quantite;
    // NOUVEAU (Point 10) - Redirection des Haras
    } else if (key === 'haras_royal') {
        for (let i = 0; i < quantite; i++) {
            f.INFRASTRUCTURE.haras_royaux.push({ type: key });
        }
    } else {
        // 'liste' est défini par la logique 'if (type === ...)' en haut
        if (!liste) {
             console.error("Erreur critique: la 'liste' de bâtiments est indéfinie pour le type " + type);
             return;
        }
        for (let i = 0; i < quantite; i++) {
            liste.push({ type: key, moteur_installe: false });
        }
    }
    
    // Marquer comme unique si nécessaire
    if (def.unique) {
        if (!GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key]) GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key] = {};
        GAME_STATE.BATIMENTS_UNIQUES_CONSTRUITS[key][f.nom] = true;
    }
    
    logToUI(`Construction lancée: ${quantite} x ${def.nom}.`, "success");
    toggleModal('modal-build', false);
    updateFullDashboard();
}

/**
 * NOUVEAU : Gère les actions de masse sur la flotte
 */
function flotteMassAction(action) {
    const f = GAME_STATE.currentFaction;
    f.MARINE.flotte.forEach((navire, index) => {
        flotteAction(action, index, true); // Appelle l'action individuelle (supprime 'silent')
    });
    logToUI(`Ordre "${action}" donné à toute la flotte.`, "info");
    updateNavyTab();
    updateBudgetTab(); // Mettre à jour les coûts
}

/**
 * NOUVEAU : Gère une action sur un navire (Armer/Désarmer)
 */
function flotteAction(action, index, silent = false) {
    const f = GAME_STATE.currentFaction;
    const navire = f.MARINE.flotte[index];
    if (!navire) return;

    const marinsRequis = navire.pin_base * GAME_SETTINGS.MARINS_PAR_NAVIRE.guerre_par_pin;
    const marinsDispo = f.RESERVES.reserve_marins_max - (f.RESERVES.marins_marine_guerre + f.RESERVES.marins_commerce_peche);

    if (action === 'arme') {
        if (navire.statut === 'arme') return;
        if (marinsDispo < marinsRequis) {
            if (!silent) alert("Pas assez de marins disponibles dans votre réserve !");
            return;
        }
        if (navire.statut === 'radoub-requis') {
            if (!silent) alert("Ce navire doit être mis en radoub avant de pouvoir être armé.");
            return;
        }
        navire.statut = 'arme';
        f.RESERVES.marins_marine_guerre += marinsRequis;
        if (!silent) logToUI(`Le ${navire.nom} a été armé.`, "success");

    } else if (action === 'desarme') {
        if (navire.statut === 'desarme') return;
        
        if (navire.statut === 'arme' || navire.statut === 'radoub-requis') {
             f.RESERVES.marins_marine_guerre -= marinsRequis;
        }
        // Si 'en-course' ou 'en-radoub', on suppose qu'ils reviennent aussi au pool
        
        navire.statut = 'desarme';
        if (!silent) logToUI(`Le ${navire.nom} a été désarmé.`, "info");
    }
    
    if (!silent) {
        updateNavyTab();
        updateBudgetTab();
    }
}

/**
 * NOUVEAU : Lance le radoub d'un navire
 */
function lancerRadoub(index, isCarenage = false) {
    const f = GAME_STATE.currentFaction;
    const navire = f.MARINE.flotte[index];
    if (!navire) return;

    const def = BUILD_DEFINITIONS.navires[navire.type];
    const radoubInfo = calculerCapaciteRadoub(f);

    if (radoubInfo.utilisee >= radoubInfo.total) {
        alert("Capacité de radoub maximale atteinte ! Construisez plus d'arsenaux.");
        return;
    }

    let cout = def.cout * GAME_SETTINGS.COUT_RADOUB_RATIO;
    let temps = 2; // 2 ans par défaut
    let logMsg = `Radoub lancé pour ${navire.nom}.`;

    if (isCarenage) {
        cout = (def.cout * GAME_SETTINGS.COUT_RADOUB_RATIO) + 150000; // Coût supplémentaire pour le cuivre
        temps = 3;
        navire.carene_cuivre = true;
        logMsg = `Carénage au cuivre lancé pour ${navire.nom}.`;
    }
    
    if (f.ETAT_DYNAMIQUE.tresor < cout) {
        alert("Trésor insuffisant pour le radoub.");
        return;
    }

    f.ETAT_DYNAMIQUE.tresor -= cout;
    f.DEPENSES_BUDGET.construction_extra += cout;
    
    // Si le navire était armé, les marins retournent au pool pendant le radoub
    if (navire.statut === 'arme' || navire.statut === 'radoub-requis') {
        const marinsRequis = navire.pin_base * GAME_SETTINGS.MARINS_PAR_NAVIRE.guerre_par_pin;
        f.RESERVES.marins_marine_guerre -= marinsRequis;
    }

    navire.statut = 'en-radoub';
    navire.temps_restant = temps;
    
    logToUI(logMsg, "success");
    updateNavyTab();
    updateBudgetTab();
}

/**
 * NOUVEAU (Refonte Officiers): Gère la promotion manuelle des rangs intermédiaires.
 */
/* Duplicate function 'promouvoirOfficiers' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Refonte Officiers): Gère la nomination manuelle des généraux.
 */
/* Duplicate function 'nommerGeneral' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Recrute un ou plusieurs régiments (bouton "Recruter Unités")
 * (MODIFIÉ - Point 9)
 */
/* Duplicate function 'constituerArmees' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Achète des chevaux pour la réserve (bouton "Acheter Chevaux")
 */
/* Duplicate function 'acheterChevaux' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Point 7) : Achète des fusils pour le stock
 */
/* Duplicate function 'acheterFusils' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Fait venir des ouvriers qualifiés de l'étranger
 */
/* Duplicate function 'importerOuvriers' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Gère les emprunts bancaires
 */
/* Duplicate function 'emprunter' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Dévalue la monnaie en cas de crise
 */
/* Duplicate function 'devaluerMonnaie' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif v2) : Met à jour la doctrine militaire depuis les inputs.
 * CORRIGE LE BUG DE LA GARDE ET LE BUG DU RATIO D'EFFECTIF.
 */
/* Duplicate function 'updateDoctrine' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif) : Renomme un régiment.
 */
/* Duplicate function 'renommerRegiment' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif) : Supprime (démobilise) un régiment.
 * (MODIFIÉ - Point 9)
 */
/* Duplicate function 'supprimerRegiment' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif) : Met à jour le ratio de la Garde Nationale (slider).
 */
/* Duplicate function 'updateGardeRatio' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU (Correctif) : Ajuste l'effectif de la Garde Nationale (bouton).
 */
/* Duplicate function 'recruterGardeNationale' removed by kriegspiel_engine_FIXED.js - original code preserved in backup. */


/**
 * NOUVEAU : Génère toutes les infobulles de l'interface
 * en lisant les attributs 'data-tooltip-def'.
 */
function genererToutesLesInfobulles() {
    console.log("Génération des infobulles...");
    const containers = document.querySelectorAll('[data-tooltip-def]');
    
    containers.forEach(container => {
        const defPath = container.getAttribute('data-tooltip-def');
        if (!defPath) return;

        try {
            const keys = defPath.split('.'); // ex: ['batiments_speciaux', 'universite']
            let def = BUILD_DEFINITIONS;
            keys.forEach(key => { 
                if (def) def = def[key]; 
            });

            if (def) {
                const tooltipHTML = genererTooltipHTML(def); // Utilise votre fonction existante
                container.insertAdjacentHTML('beforeend', tooltipHTML); // Ajoute le HTML de l'infobulle
            } else {
                console.warn("Définition d'infobulle introuvable :", defPath);
            }
        } catch (e) {
            console.error("Erreur lors de la génération de l'infobulle pour :", defPath, e);
        }
    });
}


// =======================================================
// SECTION 8: COMBAT & GESTION DE GUERRE (Point 6 & 8)
// =======================================================

/**
 * NOUVEAU: Calcule le bonus défensif d'une province (Point #2)
 */
function calculerBonusForteresse(province) {
    if (!province) return 0;
    
    const forts = province.forteresses;
    let bonus = 0;
    
    // La puissance des forteresses est exponentielle
    bonus += (forts.classe_1 || 0) * 50000;
    bonus += (forts.classe_2 || 0) * 20000;
    bonus += (forts.classe_3_4 || 0) * 5000;
    bonus += (forts.fort || 0) * 100;
    
    return bonus;
}

/**
 * NOUVEAU: Trouve l'objet Guerre actif entre two factions
 */
function trouverGuerreActive(factionNom1, factionNom2) {
    return GAME_STATE.guerresActives.find(g => 
        (g.attaquants.includes(factionNom1) && g.defenseurs.includes(factionNom2)) ||
        (g.attaquants.includes(factionNom2) && g.defenseurs.includes(factionNom1))
    );
}

/**
 * NOUVEAU: Met à jour le score de guerre (Point #6)
 */
function mettreAJourScoreDeGuerre(guerre, attaquant, defenseur, montant) {
    if (!guerre) return;
    
    // Le score est TOUJOURS du point de vue de l'attaquant
    if (guerre.attaquants.includes(attaquant.nom)) {
        guerre.scoreDeGuerre += montant;
    } else {
        // C'est le défenseur qui a gagné, le score de l'attaquant baisse
        guerre.scoreDeGuerre -= montant;
    }
    
    // Plafonner le score
    guerre.scoreDeGuerre = Math.min(100, Math.max(-100, guerre.scoreDeGuerre));
}

/**
 * NOUVEAU: Gère l'application des pertes à une armée
 */
function appliquerPertes(armee, ratioPertes) {
    let hommesPerdus = 0;
    armee.regiments.forEach(reg => {
        const pertes = Math.floor(reg.effectif_actuel * ratioPertes);
        reg.effectif_actuel -= pertes;
        hommesPerdus += pertes;
        
        if (reg.effectif_actuel < 100) {
            reg.statut = "en-recuperation";
        }
    });
    return hommesPerdus;
}

/**
 * NOUVEAU: Applique la conquête d'une province (Point #6)
 */
function appliquerConquete(attaquant, defenseur, province) {
    logToUI(`La province de ${province.nom_affiche} est tombée !`, "success");
    
    // 1. Changer le propriétaire
    const ancienneCle = province.proprietaireActuel;
    const nouvelleCle = attaquant.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e');
    province.proprietaireActuel = nouvelleCle;
    
    // 2. Transférer la province
    const indexProvince = defenseur.provinces.indexOf(province.id);
    if (indexProvince > -1) {
        defenseur.provinces.splice(indexProvince, 1);
    }
    attaquant.provinces.push(province.id);
    
    // 3. Mettre l'instabilité (2 tours)
    province.timer_instabilite = 2;

    // 4. Mettre à jour le score de guerre
    const guerre = trouverGuerreActive(attaquant.nom, defenseur.nom);
    if (guerre) {
        mettreAJourScoreDeGuerre(guerre, attaquant, defenseur, 10);
        logToUI(`Le score de guerre évolue de +10% (Total: ${guerre.scoreDeGuerre}%)`, "info");
    }
    
    // 5. Mettre à jour les raccourcis
    PROVINCES_PAR_FACTION[ancienneCle] = PROVINCES_PAR_FACTION[ancienneCle].filter(p => p.id !== province.id);
    if (!PROVINCES_PAR_FACTION[nouvelleCle]) {
        PROVINCES_PAR_FACTION[nouvelleCle] = [];
    }
    PROVINCES_PAR_FACTION[nouvelleCle].push(province);
}

/**
 * NOUVEAU (Point 6 & 8): Logique de combat lorsqu'une armée entre dans une province ennemie
 * (MODIFIÉ - Point 9)
 */
function lancerBataille(armeeAttaquante, provinceCible) {
    const fAtt = GAME_STATE.currentFaction;
    const cleDef = provinceCible.proprietaireActuel;
    const fDef = Object.values(FACTIONS_DATA).find(f => f.nom.toLowerCase().replace(/ /g, '_').replace(/î/g, 'i').replace(/é/g, 'e').replace(/è/g, 'e') === cleDef);

    if (!fDef) {
        logToUI(`Erreur: Propriétaire ${cleDef} de ${provinceCible.nom_affiche} introuvable.`, "error");
        return;
    }

    // 1. Rassembler les défenseurs
    const armeesDef = fDef.ARMEE.armees.filter(a => a.localisation === provinceCible.id);
    const garnisonDef = fDef.ARMEE.regiments.filter(r => r.localisation === provinceCible.id && r.assigne_a_armee === null);
    
    let armeeGarnison = null;
    if (garnisonDef.length > 0) {
        armeeGarnison = new Armee("garnison_temp", "Garnison", fDef.nom, provinceCible.id);
        armeeGarnison.regiments = garnisonDef;
        armeesDef.push(armeeGarnison);
    }

    // 2. Calculer les forces (MODIFIÉ Point 9)
    const puissanceInfoAtt = armeeAttaquante.calculerPuissanceCombat();
    const puissanceAtt = puissanceInfoAtt.total;
    const bonusSiegeAtt = puissanceInfoAtt.bonus_siege; // Bonus de siège du génie
    
    let puissanceDef = 0;
    let bonusSiegeDef = 0; // Le défenseur utilise aussi son génie
    armeesDef.forEach(a => {
        const puissanceInfoDef = a.calculerPuissanceCombat();
        puissanceDef += puissanceInfoDef.total;
        bonusSiegeDef += puissanceInfoDef.bonus_siege;
    });

    const bonusForteresseBrut = calculerBonusForteresse(provinceCible);
    // Le bonus de forteresse est réduit par le génie attaquant
    const bonusForteresseNet = Math.max(0, bonusForteresseBrut - bonusSiegeAtt); 
    // La puissance de défense est la puissance de combat + le bonus de fort restant
    const puissanceDefTotale = puissanceDef + bonusForteresseNet;

    logToUI(`Bataille pour ${provinceCible.nom_affiche} ! Att (P:${Math.floor(puissanceAtt)}) vs Def (P:${Math.floor(puissanceDef)} + Forts:${Math.floor(bonusForteresseNet)} [Brut: ${bonusForteresseBrut}, -${Math.floor(bonusSiegeAtt)} Génie])`, "info");

    // 3. Conquête immédiate si vide
    if (puissanceDefTotale === 0) {
        logToUI("La province est non défendue !");
        appliquerConquete(fAtt, fDef, provinceCible);
        
        // (FIX 5b) L'armée attaquante victorieuse se déplace
        armeeAttaquante.localisation = provinceCible.id;
        armeeAttaquante.regiments.forEach(reg => {
            reg.localisation = provinceCible.id;
        });
        return;
    }

    // 4. Résoudre la bataille
    const ratio = puissanceAtt / puissanceDefTotale;
    let pertesAttRatio = 0.1;
    let pertesDefRatio = 0.1;
    let vainqueur = null;
    
    if (ratio > 1.2) { 
        vainqueur = fAtt;
        pertesAttRatio = 0.05; 
        pertesDefRatio = 0.25; 
        mettreAJourScoreDeGuerre(trouverGuerreActive(fAtt.nom, fDef.nom), fAtt, fDef, 5);
    } else if (ratio > 0.8) { 
        vainqueur = fAtt;
        pertesAttRatio = 0.10; 
        pertesDefRatio = 0.15; 
        mettreAJourScoreDeGuerre(trouverGuerreActive(fAtt.nom, fDef.nom), fAtt, fDef, 2);
    } else { 
        vainqueur = fDef;
        pertesAttRatio = 0.20; 
        pertesDefRatio = 0.05; 
        mettreAJourScoreDeGuerre(trouverGuerreActive(fAtt.nom, fDef.nom), fAtt, fDef, -3);
    }

    // 5. Appliquer les pertes
    const pertesAtt = appliquerPertes(armeeAttaquante, pertesAttRatio);
    let pertesDef = 0;
    armeesDef.forEach(a => {
        pertesDef += appliquerPertes(a, pertesDefRatio);
    });

    logToUI(`Vainqueur: ${vainqueur.nom}. Pertes Att: ${Math.floor(pertesAtt)} | Pertes Def: ${Math.floor(pertesDef)}`, "info");

    // 6. Gérer la retraite et la conquête
    if (vainqueur === fAtt) {
        logToUI(`Les forces de ${fDef.nom} battent en retraite !`, "success");
        armeesDef.forEach(armeeDef => {
            const retraitePossible = provinceCible.voisins_terrestres.find(pId => MONDE[pId] && MONDE[pId].proprietaireActuel === cleDef);
            
            if (retraitePossible) {
                armeeDef.localisation = retraitePossible;
                armeeDef.regiments.forEach(reg => reg.localisation = retraitePossible);
            } else {
                logToUI(`L'armée "${armeeDef.nom}" n'a nulle part où battre en retraite et est anéantie !`, "error");
                appliquerPertes(armeeDef, 1.0); 
            }
        });
        
        appliquerConquete(fAtt, fDef, provinceCible);

        // (FIX 5b) L'armée attaquante victorieuse se déplace
        armeeAttaquante.localisation = provinceCible.id;
        armeeAttaquante.regiments.forEach(reg => {
            reg.localisation = provinceCible.id;
        });

    } else {
        logToUI(`L'armée "${armeeAttaquante.nom}" bat en retraite !`, "error");
        // (L'armée reste dans sa province d'origine, car le déplacement n'a jamais été effectué (FIX 5a))
    }
}

// =======================================================
// SECTION 9: BOUCLE DE JEU (PROCHAIN TOUR)
// =======================================================

/**
 * NOUVEAU (Point 4): Logique de base pour l'IA des PNJ
 */
function runFactionAI(faction) {
    // Exemple simple : Si riche, l'IA construit une usine de textile
    if (faction.ETAT_DYNAMIQUE.tresor > 10000000) {
        
        const def = BUILD_DEFINITIONS.manufactures_civiles.textile_p;
        if (def) {
            
            // Simule la vérification des ressources
            const ouvriersRequis = def.ouvriers || 0;
            const boisRequis = (def.consommation_construction || {}).bois || 0;
            
            if (ouvriersRequis > faction.ETAT_DYNAMIQUE.population_disponible || boisRequis > faction.RESERVES.stock_matieres_premieres.bois) {
                return; // L'IA ne peut pas construire
            }
            
            faction.ETAT_DYNAMIQUE.tresor -= def.cout;
            faction.RESERVES.stock_matieres_premieres.bois -= boisRequis;
            faction.INFRASTRUCTURE.manufactures_civiles.push({ type: "textile_p", moteur_installe: false });
            
            // Appliquer les bonus admin/salaire/ouvriers
            faction.ETAT_DYNAMIQUE.administrateurs_total += def.admin_requis;
            faction.ECONOMIE.salaires_base.administration += def.salaire_ajout;
            faction.ETAT_DYNAMIQUE.admin_efficacite_plafond += def.efficacite_bonus;
            faction.ETAT_DYNAMIQUE.population_disponible -= ouvriersRequis;
            faction.ETAT_DYNAMIQUE.population_assignee_industrie += ouvriersRequis;
        }
    }
}

/**
 * NOUVEAU (Point 7): Calcule et ajoute les revenus commerciaux passifs globaux
 */
function calculerRevenusCommerciauxPassifs() {
    let puissanceCommTotaleMonde = 0;
    let totalNaviresMarchandsMonde = 0; 
    
    // Étape 1: Calculer les totaux mondiaux
    Object.values(FACTIONS_DATA).forEach(f => {
        puissanceCommTotaleMonde += f.ECONOMIE.valeur_commerciale_totale;
        Object.values(f.MARINE.navires_marchands).forEach(nb => {
            totalNaviresMarchandsMonde += nb;
        });
    });

    if (puissanceCommTotaleMonde === 0) puissanceCommTotaleMonde = 1; 
    if (totalNaviresMarchandsMonde === 0) totalNaviresMarchandsMonde = 1;

    // Étape 2: Attribuer les bonus passifs
    Object.values(FACTIONS_DATA).forEach(f => {
        const partPuissance = f.ECONOMIE.valeur_commerciale_totale / puissanceCommTotaleMonde;
        const tauxBonusDouane = partPuissance * 0.01;
        const revenuDouanePassif = GAME_SETTINGS.VALEUR_COMMERCIALE_MONDIALE_CACHE * tauxBonusDouane;
        
        let totalNaviresFaction = 0;
        Object.values(f.MARINE.navires_marchands).forEach(nb => totalNaviresFaction += nb);
        
        const partFlotte = totalNaviresFaction / totalNaviresMarchandsMonde;
        const tauxBonusMouillage = partFlotte * 0.01;
        const revenuMouillagePassif = GAME_SETTINGS.VALEUR_PORTUAIRE_MONDIALE_CACHE * tauxBonusMouillage;

        const impotDouane = f.ECONOMIE.impots.indirects.find(i => i.nom === "Douanes");
        if (impotDouane) {
            impotDouane.base = revenuDouanePassif;
        }
        
        const impotMouillage = f.ECONOMIE.impots.indirects.find(i => i.nom === "Droits de Mouillage");
        if (impotMouillage) {
            impotMouillage.base = revenuMouillagePassif;
        }
    });
}

/**
 * Fonction principale qui fait avancer le jeu d'un an.
 * (MODIFIÉ: Intègre TOUTES les nouvelles logiques)
 */
function prochainTour() {
    if (!confirm("Voulez-vous vraiment passer à l'année suivante ?\n\nToutes les factions vont évoluer, les budgets seront dépensés et les constructions avanceront.")) {
        return; 
    }

    if (GAME_STATE.anneeActuelle >= GAME_SETTINGS.ANNEES_TOTALES) {
        alert("FIN DU JEU. Année 25 atteinte.");
        return;
    }

    logToUI(`===== FIN DE L'ANNÉE ${GAME_STATE.anneeActuelle} =====`, "info");
    
    // NOUVEAU (Point 7): Calcul du commerce passif avant tout
    calculerRevenusCommerciauxPassifs();
    
    // Déclenche un événement SEULEMENT pour le joueur humain
    declencherEvenementAleatoire(GAME_STATE.currentFaction);

    Object.values(FACTIONS_DATA).forEach(faction => {
        
        // NOUVEAU (Point 4): Tour de l'IA pour les PNJ
        if (faction.nom !== GAME_STATE.currentPlayer) {
            runFactionAI(faction);
        }

        // NOUVEAU (Refonte Officiers): Calcule la demande totale en officiers
        calculerBesoinTotalOfficiers(faction);

        const stocks = faction.RESERVES.stock_matieres_premieres;
        const isNonColonial = estNonColonial(faction);

        // NOUVEAU (Système de Cabinet) - Appliquer les bonus annuels des ministres
        Object.keys(faction.ETAT_DYNAMIQUE.ministres.postes).forEach(poste => {
            const ministreId = faction.ETAT_DYNAMIQUE.ministres.postes[poste];
            
            if (ministreId) {
                // Trouver la définition du ministre
                const def = MINISTRES_PERSONNALITES[poste].find(m => m.id === ministreId);
                
                if (def && def.bonus_an) {
                    const bonus = def.bonus_an;
                    
                    // Appliquer les bonus annuels
                    if (bonus.moral_armee) faction.ETAT_DYNAMIQUE.moral_armee += bonus.moral_armee;
                    if (bonus.stabilite) faction.ETAT_DYNAMIQUE.stabilite += bonus.stabilite;
                    if (bonus.qualite_marine) faction.MARINE.qualite += bonus.qualite_marine;
                    if (bonus.bonus_croissance_marchands) faction.MODIFICATEURS.bonus_croissance_marchands_mod += bonus.bonus_croissance_marchands; // Stocké pour 'calculerToutesRecettes'
                    if (bonus.croissance_colons_mod) faction.COLONIES.croissance_base += bonus.croissance_colons_mod;
                    if (bonus.efficacite_admin) faction.ETAT_DYNAMIQUE.efficacite_admin += bonus.efficacite_admin;
                    if (bonus.admin_efficacite_plafond) faction.ETAT_DYNAMIQUE.admin_efficacite_plafond += bonus.admin_efficacite_plafond;
                    if (bonus.prestige) faction.ETAT_DYNAMIQUE.prestige += bonus.prestige;

                    // Gérer la croissance pop (qui est un modificateur, pas un ajout simple)
                    if (bonus.croissance_pop_mod) {
                        // (La logique de croissance est appliquée plus bas dans prochainTour,
                        // mais on stocke le modificateur ici pour l'utiliser là-bas)
                        // Note: C'est un hack rapide, idéalement la croissance pop devrait lire ce mod.
                        // Pour l'instant, nous l'appliquons directement ici :
                        faction.ETAT_DYNAMIQUE.croissance_pop_annee_prec += bonus.croissance_pop_mod;
                    }
                }
            }
        });

        // 1. INFRASTRUCTURES (MODIFIÉ Point 6 & 10)
        // Ajout automatique du budget d'infrastructure de base (coût payé dans calculerToutesDepenses)
        const budgetInfraBase = GAME_STATE.BUDGET_INFRA_BASE;
        faction.INFRASTRUCTURE.routes_km += budgetInfraBase.routes_km;
        faction.INFRASTRUCTURE.ponts += budgetInfraBase.ponts;
        
        if (faction.nom === GAME_STATE.currentPlayer) {
            logToUI(`Infrastructures de base annuelles construites (+${budgetInfraBase.routes_km} km, +${budgetInfraBase.ponts} ponts).`, "info");
        }
        
        // Logique pour le budget supplémentaire
        const coutInfraSlider = faction.DEPENSES_BUDGET.infrastructure_supplementaire || 0;
        if (coutInfraSlider > 0) {
            // Convertir le budget supplémentaire en routes
            const kmRoutesSupplementaires = Math.floor(coutInfraSlider / (GAME_SETTINGS.COUT_KM_ROUTE || 5000));
            faction.INFRASTRUCTURE.routes_km += kmRoutesSupplementaires;
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Infrastructures supplémentaires construites (+${kmRoutesSupplementaires} km de routes) grâce au budget alloué.`, "info");
            }
        }
        // Réinitialiser le budget sup. pour le prochain tour
        faction.DEPENSES_BUDGET.infrastructure_supplementaire = 0;

        // 2. POPULATION (MODIFIÉ : Gère le pool de pop. disponible)
        const popBase = faction.ETAT_DYNAMIQUE.population_metropole;
        let croissancePop = getRandomInRange(GAME_SETTINGS.CROISSANCE_POP_MIN, GAME_SETTINGS.CROISSANCE_POP_MAX);
        faction.ETAT_DYNAMIQUE.croissance_pop_annee_prec = croissancePop; // Stocke la croissance de *base*

        // --- NOUVEAU : Effets des Bâtiments sur la Croissance Pop ---
        let bonusCroissancePop = 0;
        // (Ministre)
        // (Déplacé vers le bloc Ministres en haut)

        // (Hôpitaux)
        bonusCroissancePop += (faction.INFRASTRUCTURE.hopitaux_civils || 0) * (BUILD_DEFINITIONS.batiments_speciaux.hopital_civil.bonus_croissance_pop || 0);
        // (Projets Urbains)
        faction.INFRASTRUCTURE.villes.forEach(ville => {
            ville.projets.forEach(projetKey => {
                const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
                if (def && def.bonus_croissance_pop) {
                    bonusCroissancePop += def.bonus_croissance_pop;
                }
            });
        });
        // (Malus Censure)
        (faction.INFRASTRUCTURE.batiments_speciaux || []).forEach(b => {
            const def = BUILD_DEFINITIONS.batiments_speciaux[b.type];
            if (def && def.malus_croissance_pop) {
                bonusCroissancePop -= def.malus_croissance_pop;
            }
        });
        
        // Applique le bonus/malus à la croissance
        croissancePop += bonusCroissancePop;
        
        // --- NOUVEAU : Malus Stabilité < 50% ---
        if (faction.ETAT_DYNAMIQUE.stabilite < 50) {
            const malusStab = (50 - faction.ETAT_DYNAMIQUE.stabilite) / 50; // (ex: 25 Stab -> 0.5 malus)
            croissancePop *= (1 - malusStab); // Réduit la croissance
            
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`La Confiance est basse ! (${faction.ETAT_DYNAMIQUE.stabilite}%) Croissance de la population réduite.`, "error");
            }
        }
        
        const nouveauxNes = Math.floor(popBase * croissancePop);
        faction.ETAT_DYNAMIQUE.population_metropole += nouveauxNes;

        // SEUL le 1/140e des nouveaux-nés rejoint les pools de recrutement
        const nouveauxRecrutables = Math.floor(nouveauxNes * GAME_SETTINGS.TAUX_RECRUTEMENT_BASE);
            
        // Ajoute aux DEUX pools (Militaire et Industriel)
        faction.RESERVES.reserve_manpower += nouveauxRecrutables;
        faction.ETAT_DYNAMIQUE.population_disponible += nouveauxRecrutables;
        
        faction.INFRASTRUCTURE.villes.forEach(ville => {
            ville.pop *= (1 + getRandomInRange(0.005, 0.025));
        });
        
        // (Logique Colonies)
        if (!isNonColonial) {
            let bonusCroissanceColons = 0;
            // Bonus des projets coloniaux
            faction.COLONIES.villes.forEach(ville => {
                ville.projets.forEach(projetKey => {
                    const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
                    if (def && def.bonus_croissance_colons_pct) {
                        bonusCroissanceColons += def.bonus_croissance_colons_pct;
                    }
                });
            });
            const croissanceBaseColons = faction.COLONIES.croissance_base * (1 + bonusCroissanceColons);

            faction.COLONIES.villes.forEach(ville => {
                ville.pop_colons *= (1 + croissanceBaseColons);
                ville.pop_indigenes *= (1 + getRandomInRange(0.001, 0.01));
                ville.pop_esclaves *= (1 + getRandomInRange(0.001, 0.005));
                const popTotaleVille = ville.pop_colons + ville.pop_esclaves + ville.pop_indigenes;
                ville.type = getColonialCityType(popTotaleVille);
            });
            faction.ETAT_DYNAMIQUE.population_colonies.campagne_colons *= (1 + croissanceBaseColons);
            faction.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes *= (1 + getRandomInRange(0.001, 0.01));
            faction.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves *= (1 + getRandomInRange(0.001, 0.005));
            
            const total_villes_colons = faction.COLONIES.villes.reduce((sum, v) => sum + v.pop_colons, 0);
            const total_villes_indigenes = faction.COLONIES.villes.reduce((sum, v) => sum + v.pop_indigenes, 0);
            const total_villes_esclaves = faction.COLONIES.villes.reduce((sum, v) => sum + v.pop_esclaves, 0);
            faction.ETAT_DYNAMIQUE.population_colonies.colons = total_villes_colons + faction.ETAT_DYNAMIQUE.population_colonies.campagne_colons;
            faction.ETAT_DYNAMIQUE.population_colonies.indigenes = total_villes_indigenes + faction.ETAT_DYNAMIQUE.population_colonies.campagne_indigenes;
            faction.ETAT_DYNAMIQUE.population_colonies.esclaves = total_villes_esclaves + faction.ETAT_DYNAMIQUE.population_colonies.campagne_esclaves;
            faction.ETAT_DYNAMIQUE.population_colonies.total = faction.ETAT_DYNAMIQUE.population_colonies.colons + faction.ETAT_DYNAMIQUE.population_colonies.indigenes + faction.ETAT_DYNAMIQUE.population_colonies.esclaves;
        }
        
        faction.ETAT_DYNAMIQUE.population_totale = faction.ETAT_DYNAMIQUE.population_metropole + faction.ETAT_DYNAMIQUE.population_colonies.colons;
        

        // 3. ÉCONOMIE (Calculs)
        const recettes = calculerToutesRecettes(faction); 
        const depenses = calculerToutesDepenses(faction);
        const solde = recettes - depenses;

        // 4. TRÉSOR & DETTE (Point 1 : Trésor Négatif)
        faction.ETAT_DYNAMIQUE.tresor += solde; 
        
        if (faction.ETAT_DYNAMIQUE.tresor < 0) {
            const nouveauDeficit = Math.abs(faction.ETAT_DYNAMIQUE.tresor);
            faction.ETAT_DYNAMIQUE.dette += nouveauDeficit;
            faction.ETAT_DYNAMIQUE.tresor = 0; 
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Déficit budgétaire de ${nouveauDeficit.toLocaleString()} LT ! La dette augmente à ${Math.floor(faction.ETAT_DYNAMIQUE.dette).toLocaleString()} LT.`, "error");
            }
        } else if (faction.ETAT_DYNAMIQUE.tresor > 1000000 && faction.ETAT_DYNAMIQUE.dette > 0) {
            let remboursement = Math.min(faction.ETAT_DYNAMIQUE.tresor, faction.ETAT_DYNAMIQUE.dette);
            faction.ETAT_DYNAMIQUE.tresor -= remboursement;
            faction.ETAT_DYNAMIQUE.dette -= remboursement;
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Excédent utilisé pour rembourser ${Math.floor(remboursement).toLocaleString()} LT de dette.`, "success");
            }
        }
        
        // 5. ARMÉE & PRODUCTION INDUSTRIELLE (MODIFIÉ : Logistique & Marché Interne)
        
        // --- DÉBUT CORRECTION (Point 12) ---
        // Déclare demand et supply UNE SEULE FOIS pour cette boucle de faction
        const supply = faction.ARMEE.officiers_supply;
        const demand = faction.ARMEE.officiers_demand;
        // --- FIN CORRECTION ---
        
        faction.ARMEE.regiments.forEach(reg => {
            if (reg.statut === 'en-recuperation') reg.statut = 'disponible';
        });

        faction.DEPENSES_BUDGET.formation_officiers_extra = 0; 
        faction.ARMEE.formation_officiers_queue.forEach((lot, index) => {
            lot.temps_restant--;
            if (lot.temps_restant <= 0) {
                faction.ARMEE.officiers_supply.lieutenant += lot.quantite; // MODIFIÉ (Point 5)
                if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`Formation terminée : +${lot.quantite} lieutenants ont rejoint le pool.`, "success");
                }
            } else {
                faction.DEPENSES_BUDGET.formation_officiers_extra += lot.cout_annuel;
            }
        });
        faction.ARMEE.formation_officiers_queue = faction.ARMEE.formation_officiers_queue.filter(lot => lot.temps_restant > 0);

        
        // --- NOUVEAU : Logistique Militaire (Point 4 & 12) ---
        let total_soldats_armee = 0; 
        let total_chevaux_armee = 0;
        
        faction.ARMEE.regiments.forEach(reg => {
            total_soldats_armee += reg.effectif_actuel;
            const def = RECRUIT_DEFINITIONS[reg.type];
            if (!def) return;
            
            if (def.type === "Cavalerie" || (def.type === "Garde" && reg.type.includes("Cavalerie"))) {
                total_chevaux_armee += reg.effectif_actuel;
            } else if (def.type === "Artillerie" && reg.equipement) {
                // (Point 4) Calcul besoin chevaux artillerie
                Object.keys(reg.equipement).forEach(type_canon => {
                    const spec = ARTILLERIE_SPECS[type_canon] || ARTILLERIE_SPECS["default"];
                    total_chevaux_armee += reg.equipement[type_canon] * spec.chevaux;
                });
            }
        });

        // NOUVEAU (Point 12) - Ajout consommation chevaux Officiers, Gendarmerie, Poste
        // (CORRECTION: 'demand' est déjà déclaré en haut)
        total_chevaux_armee += (demand.general_division || 0) * 4;
        total_chevaux_armee += (demand.colonel || 0) * 3;
        total_chevaux_armee += ((demand.lieutenant_colonel || 0) + (demand.capitaine || 0) + (demand.lieutenant || 0)) * 1;
        
        const pop = faction.ETAT_DYNAMIQUE.population_metropole;
        const nb_gendarmes = Math.floor(pop / faction.MODIFICATEURS.ratio_police);
        const nb_postiers = Math.floor(pop / faction.MODIFICATEURS.ratio_poste);
        total_chevaux_armee += (nb_gendarmes * 2);
        total_chevaux_armee += (nb_postiers * 1);
        
        // (Point 4 & 12) Mettre à jour le besoin total en chevaux
        faction.RESERVES.besoin_chevaux_armee = total_chevaux_armee;
        
        const rationsRequises = total_soldats_armee * 365 * 0.25; // (Simplifié : 0.25kg de "grain" par jour)
        const avoineRequise = total_chevaux_armee * 2 * 365; // (Simplifié : 2kg par cheval par jour)
        const uniformesRequis = total_soldats_armee; // 1 uniforme par an
        
        let moral_logistique = 0;
        
        // --- NOUVEAU : Logique #18 (Magasin d'Intendance) ---
        let penalite_logistique_pct = 1.0; // 100% de la pénalité
        const magasin = faction.INFRASTRUCTURE.villes.some(v => v.projets.includes('magasin_intendance'));
        if(magasin) {
            penalite_logistique_pct = 0.5; // 50% de la pénalité
        }
        
        if ((stocks.ble || 0) >= rationsRequises) {
            stocks.ble -= rationsRequises;
            moral_logistique += 1;
        } else {
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Pénurie de rations ! L'armée a faim ! (-${5 * penalite_logistique_pct} Moral)`, "error");
            }
            moral_logistique -= 5 * penalite_logistique_pct;
        }
        
        if ((stocks.avoine || 0) >= avoineRequise) {
            stocks.avoine -= avoineRequise;
            moral_logistique += 1;
        } else {
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Pénurie d'avoine ! Les chevaux de la cavalerie meurent ! (-${5 * penalite_logistique_pct} Moral)`, "error");
            }
            moral_logistique -= 5 * penalite_logistique_pct;
        }
        
        if ((stocks.habits || 0) >= uniformesRequis) {
            stocks.habits -= uniformesRequis;
            moral_logistique += 1;
        } else {
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`Pénurie d'uniformes ! L'armée est en haillons ! (-${5 * penalite_logistique_pct} Moral)`, "error");
            }
            moral_logistique -= 5 * penalite_logistique_pct;
        }
        faction.ETAT_DYNAMIQUE.moral_armee += moral_logistique;
        // --- Fin Logistique ---        

        // --- NOUVEAU : Production Industrielle (Marché Interne) ---
        const listes_usines = [
            faction.INFRASTRUCTURE.manufactures_armes,
            faction.INFRASTRUCTURE.manufactures_civiles,
            faction.INFRASTRUCTURE.manufactures_avancees,
            faction.INFRASTRUCTURE.manufactures_luxe,
            faction.INFRASTRUCTURE.mines
        ];

        listes_usines.forEach(liste => {
            (liste || []).forEach(usine => { // Ajout de "|| []" pour la sécurité
                const def = BUILD_DEFINITIONS.manufactures_armes[usine.type] ||
                            BUILD_DEFINITIONS.manufactures_civiles[usine.type] ||
                            BUILD_DEFINITIONS.manufactures_avancees[usine.type] ||
                            BUILD_DEFINITIONS.manufactures_luxe[usine.type] ||
                            BUILD_DEFINITIONS.mines[usine.type];
                if (!def) return;
                
                const recette = def.consommation_annuelle || {};
                let peutProduire = true;
                
                // Vérifier si on a les ressources
                Object.keys(recette).forEach(res => {
                    if ((stocks[res] || 0) < recette[res]) peutProduire = false;
                });
                
                // Gérer le moteur
                if (usine.moteur_installe && (stocks.charbon || 0) < 50) {
                    peutProduire = false; // Moteur tombe en panne
                }

                if (peutProduire) {
                    // Consommer les ressources
                    Object.keys(recette).forEach(res => { stocks[res] -= recette[res]; });
                    if (usine.moteur_installe) stocks.charbon -= 50;

                    // Produire les biens
                    if (def.prod_fusil) faction.RESERVES.stock_fusils += def.prod_fusil;
                    if (def.prod_canon_terre) faction.RESERVES.stock_canons_terre += def.prod_canon_terre;
                    if (def.prod_canon_mer) faction.RESERVES.stock_canons_mer += def.prod_canon_mer;
                    if (def.prod_poudre) stocks.poudre += def.prod_poudre;
                    if (def.prod_habits) stocks.habits += def.prod_habits;
                    if (def.prod_verre_cristal) stocks.verre_cristal += def.prod_verre_cristal;
                    if (def.prod_biere) stocks.biere += def.prod_biere;
                    if (def.prod_voiles) stocks.voiles += def.prod_voiles;
                    if (def.prod_cordages) stocks.cordages += def.prod_cordages;
                    if (def.prod_papier) stocks.papier += def.prod_papier;
                    if (def.prod_savon) stocks.savon += def.prod_savon;
                    if (def.prod_huile_olive) stocks.huile_olive += def.prod_huile_olive;
                    if (def.prod_meubles) stocks.meubles += def.prod_meubles;
                    if (def.prod_journaux) stocks.journaux += def.prod_journaux;
                    if (def.prod_livres) stocks.livres += def.prod_livres;
                    if (def.prod_machines_agri) stocks.machines_agri += def.prod_machines_agri;
                    if (def.prod_moteurs_vapeur) stocks.moteurs_vapeur += def.prod_moteurs_vapeur;
                    if (def.prod_outils_agricoles) stocks.outils_agricoles += def.prod_outils_agricoles;
                    if (def.prod_tissu_soie) stocks.tissu_soie += def.prod_tissu_soie;
                    if (def.prod_porcelaine) stocks.porcelaine += def.prod_porcelaine;
                    if (def.prod_horloges) stocks.horloges += def.prod_horloges;
                    if (def.prod_bijoux) stocks.bijoux += def.prod_bijoux;
                    if (def.prod_art) stocks.art += def.prod_art;
                    if (def.prod_fer) stocks.fer += def.prod_fer;
                    if (def.prod_cuivre) stocks.cuivre += def.prod_cuivre;
                    if (def.prod_charbon) stocks.charbon += def.prod_charbon;
                    if (def.prod_sel) stocks.sel += def.prod_sel;

                } else {
                    if (faction.nom === GAME_STATE.currentPlayer) {
                        logToUI(`La ${def.nom} est à l'arrêt, manque de matières premières.`, 'error');
                    }
                }
            });
        });

        // NOUVEAU (Point 10) - Production des Haras
        faction.INFRASTRUCTURE.haras_royaux.forEach(haras => {
            const def = BUILD_DEFINITIONS.manufactures_civiles[haras.type];
            if (!def) return;
            
            const avoineRequise = def.consommation_annuelle.avoine || 0;
            if ((stocks.avoine || 0) >= avoineRequise) {
                stocks.avoine -= avoineRequise;
                stocks.chevaux += def.prod_chevaux; // Ajoute au stock marchand
                faction.RESERVES.chevaux_disponibles += def.prod_chevaux; // Ajoute aussi à la réserve militaire/civile
            } else {
                if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`Le ${def.nom} est à l'arrêt, manque d'avoine.`, 'error');
                }
            }
        });

        // 6. MARINE (MODIFIÉ : Gère Carénage et Guerre de Course)
        faction.MARINE.flotte.forEach(navire => {
            navire.age++;
            const ageLimite = navire.carene_cuivre ? (GAME_SETTINGS.AGE_RADOUB_REQUIS * 1.5) : GAME_SETTINGS.AGE_RADOUB_REQUIS;

            if (navire.statut === 'en-construction') {
                navire.temps_restant--;
                if (navire.temps_restant <= 0) {
                    navire.statut = 'desarme';
                    navire.pin_actuel = navire.pin_base;
                    navire.age = 0;
                    if (faction.nom === GAME_STATE.currentPlayer) {
                         logToUI(`Le navire ${navire.nom} est terminé (statut: désarmé).`, "success");
                    }
                }
            } else if (navire.statut === 'en-radoub') {
                navire.temps_restant--;
                if (navire.temps_restant <= 0) {
                    navire.statut = 'desarme';
                    navire.pin_actuel = navire.pin_base;
                    navire.age = 0; 
                    if (faction.nom === GAME_STATE.currentPlayer) {
                        logToUI(`Le radoub du ${navire.nom} est terminé (statut: désarmé).`, "success");
                    }
                }
            } else if (navire.statut === 'en-course') {
                // (Logique Guerre de Course)
                const pin = navire.pin_base;
                let gain = 0;
                if (pin <= 15) gain = 25000; // 12c
                else gain = 70000; // 24c+
                
                // NOUVEAU: Applique le modificateur du ministre
                const gainModifie = gain * (1.0 + (faction.MODIFICATEURS.bonus_guerre_course_pct || 0));
                
                const revenu = gainModifie * (0.8 + Math.random() * 0.4); // 80-120% du gain
                faction.ETAT_DYNAMIQUE.tresor += revenu;
                
                navire.statut = 'arme'; // Revient au port
                if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`La ${navire.nom} revient de sa mission de course avec ${revenu.toLocaleString()} LT !`, "success");
                }
                
            } else if (navire.statut === 'arme' && navire.age >= ageLimite) {
                navire.statut = 'radoub-requis';
                navire.pin_actuel *= 0.7; 
                if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`Le ${navire.nom} a ${navire.age} ans et nécessite un radoub !`, "error");
                }
            }
        });
        
        // 7. COMMERCE (MODIFIÉ : Nouveaux bonus)
        let bonusCroissanceFlotte = GAME_SETTINGS.CROISSANCE_MARCHANDS_BASE;
        if (faction.ECONOMIE.compagnie_marchande_fondee) {
            bonusCroissanceFlotte += 0.02; 
        }
        faction.INFRASTRUCTURE.ports_commerciaux.forEach(b => {
            const def = BUILD_DEFINITIONS.infrastructures_commerciales[b.type];
            if (def && def.bonus_croissance_marchands) {
                bonusCroissanceFlotte += def.bonus_croissance_marchands;
            }
        });
        
        // NOUVEAU (Système de Cabinet) - Bonus Ministre
        bonusCroissanceFlotte += (faction.MODIFICATEURS.bonus_croissance_marchands_mod || 0);
        
        // --- NOUVEAU : Malus Stabilité < 50% ---
        if (faction.ETAT_DYNAMIQUE.stabilite < 50) {
            const malusStab = (50 - faction.ETAT_DYNAMIQUE.stabilite) / 50; // (ex: 25 Stab -> 0.5 malus)
            bonusCroissanceFlotte *= (1 - malusStab); // Réduit la croissance commerciale
            
            if (faction.nom === GAME_STATE.currentPlayer) {
                logToUI(`La Confiance est basse ! (${faction.ETAT_DYNAMIQUE.stabilite}%) Croissance de la flotte marchande réduite.`, "error");
            }
        }
        // --- FIN NOUVEAU BLOC ---

        const bonusTotal = 1 + bonusCroissanceFlotte;
        Object.keys(faction.MARINE.navires_marchands).forEach(type => {
            faction.MARINE.navires_marchands[type] *= bonusTotal;
        });
        
        // 8. MÀJ RÉSERVE DE MARINS
        let bonusReserveMarins = 0;
        if (!isNonColonial) {
            faction.COLONIES.villes.forEach(ville => {
                ville.projets.forEach(projetKey => {
                    const def = BUILD_DEFINITIONS.batiments_speciaux[projetKey];
                    if (def && def.bonus_reserve_marins_pct) {
                        bonusReserveMarins += def.bonus_reserve_marins_pct;
                    }
                });
            });
        }
        faction.RESERVES.reserve_marins_max = Math.floor(faction.ETAT_DYNAMIQUE.population_metropole * (faction.RESERVES.sailor_to_pop_ratio * (1 + bonusReserveMarins)));
        faction.RESERVES.marins_commerce_peche = 
            (faction.MARINE.navires_peche * GAME_SETTINGS.MARINS_PAR_NAVIRE.peche) +
            ((faction.MARINE.navires_marchands["5-50t"] || 0) * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_p) +
            ((faction.MARINE.navires_marchands["50-100t"] || 0) * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_m) +
            ((faction.MARINE.navires_marchands["100-250t"] || 0) * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_g) +
            ((faction.MARINE.navires_marchands["+250t"] || 0) * GAME_SETTINGS.MARINS_PAR_NAVIRE.marchand_tg);

        // -----------------------------------------------------------
        // NOUVEAU : GESTION DES OFFICIERS (Déficits, Retraites, Promotions)
        // -----------------------------------------------------------
        // (CORRECTION: 'supply' et 'demand' sont déjà déclarés en haut)

        let deficit_moral_total = 0;
        let deficit_admin_total = 0;

        // 9a. Calcul des pénalités de déficit
        const rangs = ['general_division', 'general_brigade', 'colonel', 'lieutenant_colonel', 'capitaine', 'lieutenant'];
        rangs.forEach(rang => {
            const deficit = Math.max(0, demand[rang] - supply[rang]);
            if (deficit > 0) {
                // Les déficits de haut rang affectent l'admin et le moral
                if (rang.includes('general') || rang.includes('colonel')) {
                    deficit_admin_total += deficit * 0.1; // -0.1 Efficacité par officier sup. manquant
                    deficit_moral_total += deficit * 0.2; // -0.2 Moral par officier sup. manquant
                }
                // Les déficits de bas rang affectent surtout le moral
                if (rang.includes('capitaine') || rang.includes('lieutenant')) {
                    deficit_moral_total += deficit * 0.05; // -0.05 Moral par officier sub. manquant
                }
            }
        });

        if (deficit_moral_total > 0 && faction.nom === GAME_STATE.currentPlayer) {
            logToUI(`Déficit d'officiers ! (-${deficit_moral_total.toFixed(1)} Moral)`, "error");
        }
        if (deficit_admin_total > 0 && faction.nom === GAME_STATE.currentPlayer) {
            logToUI(`Déficit d'officiers supérieurs ! (-${deficit_admin_total.toFixed(1)} Efficacité Admin)`, "error");
        }
        faction.ETAT_DYNAMIQUE.moral_armee -= deficit_moral_total;
        faction.ETAT_DYNAMIQUE.efficacite_admin -= deficit_admin_total;

        // 9b. Simulation de l'ancienneté (Retraites & Promotions)
        // (Sauf Généraux, qui sont nommés)
        const taux_retraite = 0.02; // 2% partent à la retraite
        const taux_promotion = 0.05; // 5% des rangs inférieurs sont promus

        // Colonels
        const retraites_col = Math.floor(supply.colonel * taux_retraite);
        supply.colonel -= retraites_col;
        const promos_ltncol = Math.floor(supply.lieutenant_colonel * taux_promotion);
        supply.lieutenant_colonel -= promos_ltncol;
        supply.colonel += promos_ltncol;

        // Ltn-Colonels
        const retraites_ltncol = Math.floor(supply.lieutenant_colonel * taux_retraite);
        supply.lieutenant_colonel -= retraites_ltncol;
        const promos_cap = Math.floor(supply.capitaine * taux_promotion);
        supply.capitaine -= promos_cap;
        supply.lieutenant_colonel += promos_cap;
        
        // Capitaines
        const retraites_cap = Math.floor(supply.capitaine * taux_retraite);
        supply.capitaine -= retraites_cap;
        const promos_lieu = Math.floor(supply.lieutenant * taux_promotion);
        supply.lieutenant -= promos_lieu;
        supply.capitaine += promos_lieu;

        // 9. STATS (MODIFIÉ : Gère Tranches, NCOs, Nourriture, et Bâtiments)
        const budgets = faction.DEPENSES_BUDGET;
        const mods = faction.MODIFICATEURS;
        // MODIFIÉ (Système Cabinet) : Applique le modificateur de coût
        faction.ETAT_DYNAMIQUE.prestige += (budgets.maison_dirigeant * (mods.cout_maison_dirigeant_mod || 1.0) / 1000000) * GAME_SETTINGS.IMPACT_SLIDER.MAISON_DIRIGEANT;
        
        // Bonus Ratios
        const bonusPolice = (RATIO_BASE_ADMIN.police / mods.ratio_police) - 1.0; 
        faction.ETAT_DYNAMIQUE.stabilite += bonusPolice * 5; 
        const bonusPoste = (RATIO_BASE_ADMIN.poste / mods.ratio_poste) - 1.0;
        faction.ETAT_DYNAMIQUE.efficacite_admin += bonusPoste * 3; 

        // Bonus NCO au Moral
        let total_hommes_armee = 1;
        let total_nco_armee = 0;
        const doctrine = faction.ARMEE.doctrine;
        faction.ARMEE.regiments.forEach(reg => {
             // CORRECTION : RECRUIT_DEFINITIONS
             const def = RECRUIT_DEFINITIONS[reg.type]; 
             if (!def) return;
             if (def.type === "Infanterie" || (def.type === "Garde" && reg.type.includes("Infanterie")) || def.type === "Génie") {
                const d = doctrine.infanterie;
                total_hommes_armee += reg.effectif_max;
                 // CORRECTION : sous_officiers_compagnie
                total_nco_armee += (d.sous_officiers_compagnie * d.compagnies_bataillon * d.bataillons_regiment);
             } else if (def.type === "Cavalerie" || (def.type === "Garde" && reg.type.includes("Cavalerie"))) {
                const d = doctrine.cavalerie;
                total_hommes_armee += reg.effectif_max;
                 // CORRECTION : sous_officiers_escadron
                total_nco_armee += (d.sous_officiers_escadron * d.escadrons_regiment);
             }
        });
        const nco_ratio_global = total_nco_armee / total_hommes_armee;
        const bonus_moral_nco = (nco_ratio_global - 0.1) * 20; 
        faction.ETAT_DYNAMIQUE.moral_armee += bonus_moral_nco;
        
        // Bonus Pensions
        let deltaPensions = (mods.budget_pensions_mod - 1.0) * 10;
        faction.ETAT_DYNAMIQUE.moral_armee += deltaPensions * GAME_SETTINGS.IMPACT_SLIDER.PENSIONS;

        // Effet Nourriture
        if (faction.ETAT_DYNAMIQUE.net_food > 0) {
            faction.ETAT_DYNAMIQUE.stabilite = Math.min(100, faction.ETAT_DYNAMIQUE.stabilite + 2);
            if (faction.nom === GAME_STATE.currentPlayer) {
                 logToUI(`Surplus alimentaire (+2 Stabilité).`, "success");
            }
        } else {
            faction.ETAT_DYNAMIQUE.stabilite = Math.max(10, faction.ETAT_DYNAMIQUE.stabilite - 5);
            if (faction.nom === GAME_STATE.currentPlayer) {
                 logToUI(`PÉNURIE ALIMENTAIRE ! Le peuple a faim (-5 Stabilité).`, "error");
            }
            let food_needed = Math.abs(faction.ETAT_DYNAMIQUE.net_food);
            let ble_to_use = food_needed / CONSUMPTION_RATES.food_value.ble;
            if (stocks.ble_colonial >= ble_to_use) {
                stocks.ble_colonial -= ble_to_use;
                faction.ETAT_DYNAMIQUE.stabilite += 5; 
                 if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`Le blé colonial a compensé le déficit alimentaire !`, "success");
                }
            } else {
                 if (faction.nom === GAME_STATE.currentPlayer) {
                    logToUI(`Le stock de blé colonial est insuffisant pour compenser la pénurie.`, "error");
                }
            }
        }
        
        // Effet Impôts (Tranches)
        const impotsTranches = faction.ECONOMIE.impots.tranches;
        if (impotsTranches.bas.taux > 0.15) faction.ETAT_DYNAMIQUE.stabilite -= (impotsTranches.bas.taux - 0.15) * 100; // -15% = 0 effet, 20% = -5 stab
        if (impotsTranches.moyen.taux > 0.20) faction.ETAT_DYNAMIQUE.efficacite_admin -= (impotsTranches.moyen.taux - 0.20) * 50; // -20% = 0 effet, 25% = -2.5 eff
        // (L'impact "Haut Revenu" sera géré par la croissance RNB)

        const bonusStabiliteEdu = (faction.INFRASTRUCTURE.ecoles_primaires * 0.001);
        faction.ETAT_DYNAMIQUE.stabilite += bonusStabiliteEdu;
        
        const plafondEfficacite = faction.ETAT_DYNAMIQUE.admin_efficacite_plafond;
        // MODIFIÉ (Point 11) : Le slider 'education' est remplacé par le coût fixe.
        // On garde un impact minimum pour les factions sans budget éducation au départ.
        const impactEducation = (faction.DEPENSES_BUDGET.education || 500000) / 1000000;
        faction.ETAT_DYNAMIQUE.efficacite_admin = Math.min(plafondEfficacite, Math.max(10, faction.ETAT_DYNAMIQUE.efficacite_admin + impactEducation * 0.1));
        
        // --- NOUVEAU : Effets des Bâtiments Nationaux & Projets Urbains ---
        (faction.INFRASTRUCTURE.batiments_speciaux || []).forEach(b => {
            const def = BUILD_DEFINITIONS.batiments_speciaux[b.type];
            if (def) {
                if (def.bonus_stabilite_annuel) faction.ETAT_DYNAMIQUE.stabilite += def.bonus_stabilite_annuel;
                if (def.bonus_moral_armee) faction.ETAT_DYNAMIQUE.moral_armee += def.bonus_moral_armee;
            }
        });
        faction.INFRASTRUCTURE.villes.forEach(ville => {
            ville.projets.forEach(projetKey => {
                const def = BUILD_DEFINITIONS.projets_urbains[projetKey];
                if (def) {
                    if (def.bonus_stabilite) faction.ETAT_DYNAMIQUE.stabilite += def.bonus_stabilite;
                    if (def.bonus_prestige) faction.ETAT_DYNAMIQUE.prestige += def.bonus_prestige;
                    if (def.bonus_qualite_marine) faction.MARINE.qualite += def.bonus_qualite_marine;
                }
            });
        });
        // --- FIN NOUVEAU BLOC ---

        // Plafonnement
        faction.ETAT_DYNAMIQUE.stabilite = Math.min(100, Math.max(10, faction.ETAT_DYNAMIQUE.stabilite));
        faction.ETAT_DYNAMIQUE.moral_armee = Math.min(100, Math.max(10, faction.ETAT_DYNAMIQUE.moral_armee));
        
        // NOUVEAU (Point 6): Décompte de l'instabilité des provinces
        faction.provinces.forEach(provinceId => {
            const prov = MONDE[provinceId];
            if (prov && prov.timer_instabilite > 0) {
                prov.timer_instabilite--;
                if (prov.timer_instabilite === 0 && faction.nom === GAME_STATE.currentPlayer) {
                    // CORRECTION SYNTAXERROR: Ajout des backticks ``
                    logToUI(`La province de ${prov.nom_affiche} est entièrement pacifiée.`, "success");
                }
            }
        });

        // 10. NETTOYAGE FIN DE TOUR
        faction.DEPENSES_BUDGET.construction_extra = 0;
        faction.DEPENSES_BUDGET.colonisation_extra = 0;
        
    });

    // Avancer l'année
    GAME_STATE.anneeActuelle++;
    logToUI(`===== DÉBUT DE L'ANNÉE ${GAME_STATE.anneeActuelle} =====`, "info");

    // Mettre à jour l'interface pour le joueur actuel
    updateFullDashboard();
}

// =======================================================
// SECTION 10: ÉVÉNEMENTS ALÉATOIRES
// =======================================================

const GAME_EVENTS = [
    {
        nom: "Excellente Récolte",
        description: "Une météo clémente a produit une récolte exceptionnelle. Le peuple est heureux et les caisses se remplissent.",
        type: "positif",
        effet: (f) => {
            // (Point 3) Ne s'applique pas aux factions russes
            if (f.nom === "Alexandre Ier" || f.nom === "Pierre le Grand") {
                 logToUI("Événement: Le temps fut clément, mais les récoltes restent maigres.");
                 return;
            }
            // (MODIFIÉ) : N'affecte que le RNB agricole de base
            f.ECONOMIE.rnb_base_agricole *= 1.1; 
            f.ETAT_DYNAMIQUE.stabilite = Math.min(100, f.ETAT_DYNAMIQUE.stabilite + 5);
            logToUI("Événement: Excellente Récolte ! (+10% revenus agricoles, +5 Stabilité)", "success");
        }
    },
    {
        nom: "Mauvaise Récolte",
        description: "La sécheresse a ruiné une partie des récoltes. Le grain est rare et le peuple gronde.",
        type: "negatif",
        effet: (f) => {
            f.ECONOMIE.rnb_base_agricole *= 0.8; 
            f.ETAT_DYNAMIQUE.stabilite = Math.max(0, f.ETAT_DYNAMIQUE.stabilite - 5);
            logToUI("Événement: Mauvaise Récolte... (-20% revenus agricoles, -5 Stabilité)", "error");
        }
    },
    {
        nom: "Tempête Coloniale",
        description: "Une violente tempête a frappé vos colonies, endommageant les infrastructures et coulant plusieurs navires marchands.",
        type: "negatif",
        effet: (f) => {
            // (MODIFIÉ)
            if (estNonColonial(f)) {
                 logToUI("Événement: Des tempêtes en mer, mais vos ports sont saufs.");
                 return;
            }
            f.MARINE.navires_marchands["100-250t"] *= 0.995; 
            f.ETAT_DYNAMIQUE.population_colonies.total *= 0.9975; 
            logToUI("Événement: Tempête Coloniale ! Des navires et des habitations ont été perdus.", "error");
        }
    },
    {
        nom: "Découverte d'un Filon",
        description: "Des explorateurs ont découvert un riche filon d'or dans vos territoires coloniaux !",
        type: "positif",
        effet: (f) => {
             // (MODIFIÉ)
             if (estNonColonial(f)) {
                 logToUI("Événement: Des rumeurs parlent d'or au-delà des frontières.");
                 return;
            }
            const gain = 500000;
            f.ETAT_DYNAMIQUE.tresor += gain;
            logToUI(`Événement: Filon d'Or découvert ! +${gain.toLocaleString()} LT au Trésor !`, "success");
        }
    },
    {
        nom: "Progrès Administratif",
        description: "Une réforme de vos secrétaires d'État améliore l'efficacité de la collecte des impôts.",
        type: "positif",
        effet: (f) => {
            // (MODIFIÉ)
            f.ETAT_DYNAMIQUE.admin_efficacite_plafond += 2; // Bonus permanent au plafond
            f.ETAT_DYNAMIQUE.efficacite_admin = Math.min(f.ETAT_DYNAMIQUE.admin_efficacite_plafond, f.ETAT_DYNAMIQUE.efficacite_admin + 5);
            logToUI("Événement: Progrès Administratif ! (+2% Plafond Efficacité, +5% Efficacité actuelle)", "success");
        }
    },
    {
        nom: "Épizootie",
        description: "Une maladie frappe les haras. Le nombre de chevaux disponibles pour l'armée est réduit.",
        type: "negatif",
        effet: (f) => {
            f.RESERVES.chevaux_disponibles *= 0.85; 
            logToUI("Événement: Une maladie frappe les haras ! (-15% chevaux disponibles)", "error");
        }
    }
];

/**
 * Déclenche un événement aléatoire pour la faction donnée.
 */
function declencherEvenementAleatoire(faction) {
    // Une chance sur 4 d'avoir une année calme
    if (Math.random() < 0.25) {
        logToUI("Année calme, aucun événement notable.");
        return;
    }
    
    const eventIndex = Math.floor(Math.random() * GAME_EVENTS.length);
    const event = GAME_EVENTS[eventIndex];
    
    event.effet(faction);
}

// =======================================================
// SECTION 10.5: CARTE INTERACTIVE (Placeholder)
// =======================================================

/**
 * NOUVEAU (Correction Fonctionnelle): Initialise la carte interactive.
 * Génère une liste cliquable de toutes les provinces pour connecter
 * les données de MONDE à la fonction handleMapClick.
 */
function initInteractiveMap() {
    console.log("Initialisation de la carte interactive...");
    const mapContainer = document.getElementById('interactive-map-container');
    if (!mapContainer) {
        console.error("Conteneur 'interactive-map-container' introuvable !");
        return;
    }

    // 1. Vider le conteneur (enlève le "Chargement...")
    mapContainer.innerHTML = '';

    // 2. Créer un conteneur pour la liste (en guise de carte cliquable)
    const listWrapper = document.createElement('div');
    listWrapper.id = "map-list-fallback";
    listWrapper.style.maxHeight = "500px";
    listWrapper.style.overflowY = "auto";
    listWrapper.style.border = "1px solid #ccc";
    listWrapper.style.padding = "10px";
    listWrapper.style.background = "#f9f9f9";

    // 3. Itérer sur toutes les provinces chargées dans MONDE
    Object.keys(MONDE).sort((a, b) => MONDE[a].nom_affiche.localeCompare(MONDE[b].nom_affiche)).forEach(provinceId => {
        const province = MONDE[provinceId];
        
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = `${province.nom_affiche} (${province.proprietaireInitial})`;
        link.style.display = "block";
        link.style.padding = "4px 0";
        link.style.textDecoration = "none";
        
        // 4. C'est ici que la connexion se fait :
        // Attache l'ID de la province à la fonction handleMapClick
        link.onclick = (e) => {
            e.preventDefault();
            handleMapClick(provinceId); // <--- CONNEXION RÉTABLIE
        };

        listWrapper.appendChild(link);
    });

    mapContainer.appendChild(listWrapper);
    logToUI("Carte des Opérations (Liste) chargée.", "success");
}

// =======================================================
// SECTION 11: INITIALISATION
// =======================================================

/**
 * NOUVEAU : Donne des noms initiaux aux unités (Navires et Régiments)
 * (MODIFIÉ - Point 6 : Noms culturels des navires)
 */
function donnerNomsInitiaux() {
    // NOUVEAU (Point 6) - Carte culturelle pour les noms
    const cultureMap = {
        "FR": ["Napoléon", "Lannes", "Davout", "Louis XIV", "Louis XIII", "Henri IV", "Gaston de Foix", "Louis II Condé", "Philippe d’Orléans"],
        "EN": ["Wellington", "Cromwell", "Malborough"],
        "ES": ["Philippe II d'Esp", "Charles Quint", "Philippe V Espagne"],
        "NL": ["Maurice de Nassau", "Guillaume d'Orange"],
        "RU": ["Alexandre Ier", "Pierre le Grand"],
        "SE": ["Charles XII"]
    };

    const getCulture = (factionNom) => {
        for (const culture in cultureMap) {
            if (cultureMap[culture].includes(factionNom)) {
                return culture;
            }
        }
        return "FR"; // Français par défaut
    };

    Object.values(FACTIONS_DATA).forEach(f => {
        
        // --- Noms des Navires (MODIFIÉ Point 6) ---
        const culture = getCulture(f.nom);
        let nomListeLigne, nomListeEscorte;

        switch (culture) {
            case "EN":
                nomListeLigne = NOMS_NAV_LIGNE_EN;
                nomListeEscorte = NOMS_NAV_ESCORTE_EN;
                break;
            case "ES":
                nomListeLigne = NOMS_NAV_LIGNE_ES;
                nomListeEscorte = NOMS_NAV_ESCORTE_ES;
                break;
            case "NL":
                nomListeLigne = NOMS_NAV_LIGNE_NL;
                nomListeEscorte = NOMS_NAV_ESCORTE_NL;
                break;
            case "RU":
                nomListeLigne = NOMS_NAV_LIGNE_RU;
                nomListeEscorte = NOMS_NAV_ESCORTE_RU;
                break;
            case "SE":
                nomListeLigne = NOMS_NAV_LIGNE_SE;
                nomListeEscorte = NOMS_NAV_ESCORTE_SE;
                break;
            case "FR":
            default:
                nomListeLigne = NOMS_NAV_LIGNE_FR;
                nomListeEscorte = NOMS_NAV_ESCORTE_FR;
                break;
        }

        f.MARINE.flotte.forEach((navire, index) => {
            const def = BUILD_DEFINITIONS.navires[navire.type];
            if (!def) return; 
            
            let nomListe;
            if (def.type === 'ligne') {
                nomListe = nomListeLigne;
            } else {
                nomListe = nomListeEscorte;
            }
            // Utilise l'index global des navires (navire.id) pour éviter les doublons
            navire.nom = `${nomListe[navire.id % nomListe.length]}`;
        });
        
        // Nommer les Régiments (qui sont maintenant des objets)
        let infCount = 0;
        let cavCount = 0;
        let artCount = 0;
        let gardeCount = 0;
        let genieCount = 0; // (Point 9)
            
        f.ARMEE.regiments.forEach((reg, index) => {
            // reg.type est "Infanterie de Ligne", "Hussards", etc.
            // CORRIGÉ : Utilise RECRUIT_DEFINITIONS
            const def = RECRUIT_DEFINITIONS[reg.type]; 
            if (!def) {
                console.warn(`Définition d'unité manquante pour le type: ${reg.type}`);
                return;
            }
            
            let pre, suf;
            
            if (def.type === "Infanterie") {
                pre = NOMS_REG_INF_PRE[infCount % NOMS_REG_INF_PRE.length];
                suf = NOMS_REG_INF_SUF[Math.floor(Math.random() * NOMS_REG_INF_SUF.length)];
                reg.nom = `${pre} Régiment ${suf}`;
                infCount++;
            } else if (def.type === "Cavalerie") {
                pre = NOMS_REG_CAV_PRE[cavCount % NOMS_REG_CAV_PRE.length];
                suf = NOMS_REG_CAV_SUF[Math.floor(Math.random() * NOMS_REG_CAV_SUF.length)];
                reg.nom = `${pre} Régiment de ${suf}`;
                cavCount++;
            } else if (def.type === "Artillerie") {
                pre = NOMS_REG_INF_PRE[artCount % NOMS_REG_INF_PRE.length]; 
                reg.nom = `${pre} Régiment d'Artillerie`;
                artCount++;
            // (MODIFIÉ Point 9)
            } else if (def.type === "Génie") {
                pre = NOMS_REG_INF_PRE[genieCount % NOMS_REG_INF_PRE.length];
                reg.nom = `${pre} Bataillon du ${reg.type}`; // Le Génie est souvent en Bataillons
                genieCount++;
            } else if (def.type === "Garde") {
                pre = NOMS_REG_INF_PRE[gardeCount % NOMS_REG_INF_PRE.length];
                let typeGarde = reg.type.includes("Infanterie") ? "(Inf)" : "(Cav)";
                reg.nom = `${pre} Régiment de la Garde ${typeGarde}`;
                gardeCount++;
            }
            // Met à jour l'ID du régiment pour correspondre au nom (plus facile à déboguer)
            reg.id = reg.nom;
        });

        // Le nommage des villes coloniales est maintenant fait dans initialiserFaction
    });
}

/**
 * Initialise le jeu au chargement de la page.
 * (MODIFIÉ: Charge map_data.json en premier)
 */
async function initGame() {
    console.log("Initialisation du moteur de jeu...");
    try {
        // 1. (NOUVEAU) CHARGER LA CARTE
        const response = await fetch('map_data.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} - Impossible de charger map_data.json`);
        }
        const mapDataRaw = await response.json();
        
        // 2. (NOUVEAU) CRÉER LES OBJETS PROVINCE
        MONDE = {};
        PROVINCES_PAR_FACTION = {}; // Clé = "wellington", "napoleon", etc.
        
        Object.keys(mapDataRaw).forEach(provinceId => {
            const provinceData = mapDataRaw[provinceId];
            const provinceObj = new Province(provinceId, provinceData);
            MONDE[provinceId] = provinceObj;
            
            // Remplir le raccourci
            const proprietaire = provinceObj.proprietaireInitial;
            if (!PROVINCES_PAR_FACTION[proprietaire]) {
                PROVINCES_PAR_FACTION[proprietaire] = [];
            }
            PROVINCES_PAR_FACTION[proprietaire].push(provinceObj);
        });
        logToUI(`Carte chargée avec ${Object.keys(MONDE).length} provinces.`, "success");

        // 3. (NOUVEAU) CARTE DE MAPPAGE DES NOMS
        const factionKeyMap = {
            "Napoléon": "napoleon",
            "Charles XII": "charles_xii",
            "Lannes": "lannes",
            "Davout": "davout",
            "Philippe II d'Esp": "philippe_ii_d_esp", 
            "Maurice de Saxe": "maurice_de_saxe",
            "Philippe d’Orléans": "philippe_d_orleans",
            "Gaston de Foix": "gaston_de_foix",
            "Poniatowski": "poniatowski",
            "Alexandre Ier": "alexandre_ier",
            "Arch Charles": "archiduc_charles",
            "Eugène de Savoie": "eugene_de_savoie",
            "Soliman": "soliman",
            "Nader Shah": "nader_shah",
            "Maurice de Nassau": "maurice_de_nassau",
            "Louis XIV": "louis_xiv",
            "Guillaume d'Orange": "guillaume_d_orange",
            "Cromwell": "cromwell",
            "Wellington": "wellington",
            "Frédéric II": "frederic_ii",
            "Charles Quint": "charles_quint",
            "Louis XIII": "louis_xiii",
            "Pierre le Grand": "pierre_le_grand",
            "Philippe V Espagne": "philippe_v", 
            "Malborough": "marlborough", 
            "Henri IV": "henri_iv",
            "Blücher": "blucher",
            "Louis II Condé": "louis_ii_conde"
        };
        
        // 4. TRANSFORMER LES FACTIONS (Modifié)
        Object.keys(FACTIONS_DATA_RAW).forEach(rawKey => { 
            const rawFaction = FACTIONS_DATA_RAW[rawKey];
            const jsonKey = factionKeyMap[rawKey]; 
            
            if (!jsonKey) {
                 console.error(`Clé de mappage manquante pour : ${rawKey}`);
            }
            
            const provincesDeLaFaction = PROVINCES_PAR_FACTION[jsonKey] || [];
            
            if (provincesDeLaFaction.length === 0 && jsonKey) {
                 console.warn(`Aucune province trouvée dans map_data.json pour le propriétaire: ${jsonKey} (Faction: ${rawKey})`);
            }
            
            FACTIONS_DATA[rawKey] = initialiserFaction(rawFaction, provincesDeLaFaction);
        });

         // 4.5. (NOUVEAU) Calculer la demande initiale en officiers
         logToUI("Calcul de la demande initiale en officiers pour toutes les factions...", "info");
         Object.values(FACTIONS_DATA).forEach(faction => {
         calculerBesoinTotalOfficiers(faction);
});

        // 5. Donner des noms
        donnerNomsInitiaux(); // Modifié pour nommer les Régiments

        // NOUVELLE LIGNE À AJOUTER :
        genererToutesLesInfobulles();

        // 6. Définir l'état initial du jeu
        const premierJoueur = Object.keys(FACTIONS_DATA)[0];
        GAME_STATE.currentPlayer = premierJoueur;
        GAME_STATE.currentFaction = FACTIONS_DATA[premierJoueur];
        GAME_STATE.anneeActuelle = 1;

        // 7. Remplir l'interface utilisateur
        populateFactionSelector();
        updateFullDashboard();
        
        // Initialiser la carte (Point #9)
        initInteractiveMap();
        
        logToUI(`Bienvenue sur Kriegspiel Systémique. Faction active : ${GAME_STATE.currentFaction.nom}.`, "success");

    } catch (e) {
        console.error("Erreur critique lors de l'initialisation:", e);
        logToUI(`ERREUR CRITIQUE: ${e.message}. Vérifiez la console.`, "error");
    }
}
// --- DÉMARRAGE DU JEU ---
window.onload = initGame;
