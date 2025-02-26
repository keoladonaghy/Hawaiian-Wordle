import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ʻōweo',
  'kīloa',
  'māhao',
  'hāinu',
  'manoa',
  'mauli',
  'moʻou',
  'lūkia',
  'ʻaono',
  'kūlia',
  'olōlo',
  'hohiu',
  'ʻahea',
  'ōlaʻi',
  'ulana',
  'nōweo',
  'kepoa',
  'ʻowai',
  'nahoa',
  'ʻeiwa',
  'lokia',
  'lānui',
  'ninia',
  'hēleu',
  'mānai',
  'piʻoi',
  'ikamu',
  'mamua',
  'henua',
  'hīlea',
  'kuāua',
  'pūhau',
  'kiona',
  'kuapā',
  'haukī',
  'luaʻa',
  'kulua',
  'kukua',
  'unuhe',
  'mauki',
  'ʻakeu',
  'akakū',
  'ʻoaka',
  'ʻōpua',
  'kahau',
  'nākea',
  'ʻeleu',
  'pōhae',
  'hānau',
  'laulā',
  'hiʻia',
  'ʻinau',
  'kaima',
  'huika',
  'paʻao',
  'papau',
  'niole',
  'āhole',
  'mīkoi',
  'miula',
  'ʻakiu',
  'kiaka',
  'hihia',
  'heulu',
  'hikia',
  'huipū',
  'nāpai',
  'uhoʻi',
  'ʻaiʻē',
  'mākoe',
  'ʻāweu',
  'kelea',
  'kaihe',
  'neʻeu',
  'hanua',
  'koniā',
  'anana',
  'ānewa',
  'pūkai',
  'ʻoāwa',
  'ʻaeʻa',
  'mānae',
  'poahi',
  'owāwa',
  'lukua',
  'penei',
  'ālulu',
  'lauwī',
  'woela',
  'akāka',
  'ʻoali',
  'kiʻai',
  'maila',
  'hūʻeu',
  'ʻīnio',
  'pāhoe',
  'lāuli',
  'mākiu',
  'piohē',
  'kāehu',
  'nanau',
  'moloā',
  'laikī',
  'unahe',
  'ʻanae',
  'nanai',
  'hainā',
  'leokū',
  'lāhoe',
  'maoki',
  'ʻakiu',
  'ʻīhoe',
  'māwao',
  'ihukū',
  'māʻeo',
  'ʻalua',
  'kuawa',
  'ʻelua',
  'kului',
  'noela',
  'nohae',
  'hāunu',
  'pīʻao',
  'pāloa',
  'kaiao',
  'ōpuhe',
  'noelo',
  'kowaū',
  'kawea',
  'waiho',
  'kaala',
  'kūoʻe',
  'uheʻe',
  'polie',
  'waihā',
  'pākau',
  'ʻeiʻa',
  'iahai',
  'kōlea',
  'manie',
  'anahā',
  'puaʻi',
  'kāpua',
  'pukua',
  'meneū',
  'wiliō',
  'waikī',
  'kauna',
  'heheo',
  'kokoa',
  'ulūlu',
  'ʻaoka',
  'kawoa',
  'kuʻua',
  'pāuma',
  'kōloa',
  'pehua',
  'puʻoa',
  'noneā',
  'nenei',
  'ʻuala',
  'pāʻao',
  'uauai',
  'māihi',
  'mahae',
  'kūloa',
  'ukana',
  'wēkiu',
  'uhuao',
  'unūnu',
  'ʻoeke',
  'luahi',
  'hākui',
  'iheʻō',
  'hinua',
  'ʻōuli',
  'ʻaeko',
  'kāʻeo',
  'olowī',
  'kiʻei',
  'waikū',
  'noʻao',
  'onena',
  'pōniu',
  'moaka',
  'auele',
  'ʻahao',
  'leleu',
  'paūhu',
  'mimio',
  'kūhau',
  'lēhai',
  'menui',
  'lānia',
  'nahae',
  'ʻulea',
  'mōwae',
  'peleu',
  'kūana',
  'auoha',
  'laʻia',
  'kālua',
  'ʻiewe',
  'ʻunua',
  'ʻonou',
  'kokoe',
  'kuʻia',
  'ʻalae',
  'māʻau',
  'luana',
  'ʻoala',
  'hānui',
  'keoma',
  'kēwai',
  'ʻūlou',
  'hopai',
  'ulukū',
  'mauka',
  'mōhio',
  'pāoni',
  'pāleo',
  'kuana',
  'ʻāina',
  'kāoʻo',
  'loloa',
  'noili',
  'ʻeono',
  'elelo',
  'kōelo',
  'kālai',
  'puolo',
  'ʻākia',
  'ʻelua',
  'nahua',
  'kūʻau',
  'mukau',
  'hākiu',
  'uhole',
  'īheʻe',
  'hoene',
  'hīlia',
  'poʻou',
  'kuʻia',
  'kākai',
  'pīʻoe',
  'epani',
  'kauhi',
  'ʻīkoi',
  'nonoi',
  'nāihe',
  'helea',
  'nākai',
  'ʻaukā',
  'kīlou',
  'maika',
  'pōhai',
  'hākei',
  'mōlia',
  'ʻōmea',
  'kiloi',
  'unoho',
  'ʻehia',
  'kāmae',
  'kēʻae',
  'pānoa',
  'lākiō',
  'koihā',
  'ʻauʻa',
  'mākoi',
  'ekele',
  'paiho',
  'hoelo',
  'nauwe',
  'nanae',
  'konia',
  'koili',
  'uwaki',
  'moaʻe',
  'koaʻe',
  'puaʻō',
  'ʻaiʻē',
  'ʻopae',
  'nomea',
  'kopea',
  'lāhei',
  'ʻaukā',
  'huehu',
  'pōhue',
  'ʻōiwi',
  'ʻaolo',
  'ʻōali',
  'ʻueke',
  'nūnea',
  'uwapo',
  'hāmoa',
  'ualei',
  'nilea',
  'hāwai',
  'meheu',
  'uwahi',
  'hōpoe',
  'huāle',
  'ʻimia',
  'hakua',
  'hekau',
  'māhea',
  'pupue',
  'kūkai',
  'hīnau',
  'huipa',
  'unukā',
  'huene',
  'ʻāhua',
  'olonā',
  'mākou',
  'kuemi',
  'ulehe',
  'lānai',
  'ʻiako',
  'nākao',
  'ʻōpao',
  'maahe',
  'ʻāhiu',
  'hanoa',
  'kāhoa',
  'ulahi',
  'pāpai',
  'nanao',
  'kaika',
  'nūkea',
  'keanu',
  'aliʻi',
  'maheu',
  'ʻelia',
  'malai',
  'hēpia',
  'unala',
  'hauka',
  'pūnao',
  'līloa',
  'puakō',
  'pauoa',
  'mākau',
  'hulei',
  'alana',
  'paʻea',
  'ʻōnou',
  'huapī',
  'kaʻio',
  'pania',
  'kiaʻi',
  'hāpai',
  'limua',
  'heana',
  'elehu',
  'poaʻe',
  'pākeu',
  'ʻōwae',
  'kāleo',
  'akaka',
  'pipio',
  'hāliu',
  'lehia',
  'moʻau',
  'ʻākau',
  'kuali',
  'momio',
  'mānoa',
  'puaʻa',
  'ʻauia',
  'ʻuwao',
  'haoʻe',
  'kīheu',
  'kōāwā',
  'uhele',
  'wekea',
  'maiko',
  'ʻohia',
  'māewa',
  'kīhoe',
  'hāiki',
  'lukau',
  'poʻea',
  'ʻeleī',
  'pōuhu',
  'kūakā',
  'uhalu',
  'līwai',
  'uholo',
  'ʻāinu',
  'mālia',
  'uahoa',
  'māino',
  'uhemo',
  'poila',
  'lauia',
  'koʻoū',
  'lakio',
  'pauma',
  'ʻāhia',
  'aniau',
  'kawai',
  'hōpue',
  'ʻōpio',
  'kuhue',
  'kuila',
  'ʻuleu',
  'pūkea',
  'ʻōpae',
  'kāmoe',
  'pōlio',
  'pōʻai',
  'unana',
  'kaila',
  'kūʻai',
  'iliau',
  'paula',
  'ʻōkai',
  'ʻulua',
  'hāoʻo',
  'napoe',
  'noulu',
  'mamao',
  'unuhi',
  'leina',
  'kuaʻi',
  'ʻauka',
  'maoha',
  'mākia',
  'laila',
  'ālālā',
  'pokoa',
  'koine',
  'naiʻa',
  'kaʻao',
  'molea',
  'kuhia',
  'kalia',
  'māiki',
  'hakia',
  'koukā',
  'ʻeʻoe',
  'ʻonia',
  'paena',
  'mahua',
  'pauhū',
  'pelua',
  'puoho',
  'hōkio',
  'holoi',
  'lūʻau',
  'pakai',
  'ʻūkiu',
  'ʻōlae',
  'aʻapu',
  'oʻoʻo',
  'kākea',
  'kipao',
  'hāʻae',
  'pīhoi',
  'ʻeʻea',
  'nīhoa',
  'maliu',
  'enene',
  'pūlua',
  'koloa',
  'kiaʻi',
  'lehea',
  'kaulī',
  'meʻeu',
  'ʻoulu',
  'nāuki',
  'uakea',
  'ihihī',
  'pūalu',
  'kueʻo',
  'mākua',
  'ʻānai',
  'haupa',
  'huakō',
  'līhau',
  'aeāea',
  'kīpou',
  'hulia',
  'ʻōmau',
  'paihō',
  'māono',
  'kaulu',
  'ʻōhea',
  'aʻaʻa',
  'piʻia',
  'hōuna',
  'olaʻi',
  'poukū',
  'ulaia',
  'alaia',
  'pūʻuo',
  'ʻokia',
  'keahi',
  'pūʻau',
  'makua',
  'nīele',
  'pōlea',
  'huhui',
  'hōʻea',
  'kuwai',
  'kāoko',
  'nauki',
  'kupae',
  'naʻau',
  'lonoa',
  'ʻekua',
  'ʻōhua',
  'kaula',
  'uluhe',
  'piano',
  'luapō',
  'kahua',
  'hopua',
  'kīnai',
  'ʻauae',
  'laʻoa',
  'puoʻa',
  'momoa',
  'ʻakoa',
  'kāhea',
  'hikua',
  'kapae',
  'piaea',
  'pouli',
  'pauka',
  'punia',
  'uouoa',
  'ʻīlio',
  'hiona',
  'poina',
  'pāuhi',
  'ʻōhua',
  'ʻauʻa',
  'alena',
  'leleū',
  'kāuna',
  'ananū',
  'kekal',
  'haika',
  'wauke',
  'lolio',
  'koele',
  'maluā',
  'pūʻao',
  'puʻua',
  'ʻīnia',
  'ulima',
  'nokea',
  'ʻaila',
  'koaka',
  'pelio',
  'paina',
  'oʻahu',
  'ulele',
  'ahuoi',
  'mōpua',
  'malae',
  'koaha',
  'kāʻei',
  'nanea',
  'ʻēheu',
  'laukī',
  'hāpue',
  'koaea',
  'wāiʻa',
  'paika',
  'lēhau',
  'hāweo',
  'mulei',
  'heehe',
  'hālau',
  'naele',
  'wālua',
  'līmoa',
  'pekua',
  'kōpia',
  'lohia',
  'pinao',
  'āmuka',
  'hkkal',
  'hāpou',
  'ʻuiwi',
  'uhoni',
  'ānehe',
  'hauli',
  'huila',
  'nīnau',
  'ʻahia',
  'luhea',
  'mākai',
  'pāheu',
  'māiʻo',
  'ʻāloa',
  'wikiō',
  'ākēkē',
  'ʻōiki',
  'akuʻe',
  'kākou',
  'ēlama',
  'kāhiu',
  'heona',
  'mūhea',
  'pāpio',
  'makao',
  'pāuli',
  'ʻiamo',
  'paukū',
  'ʻoene',
  'oloea',
  'puhia',
  'leiʻō',
  'ōpuna',
  'wēlau',
  'ʻomua',
  'nepue',
  'lanau',
  'lehua',
  'kūnae',
  'ʻekue',
  'puana',
  'kāula',
  'ʻoiai',
  'kūlua',
  'naika',
  'kōʻie',
  'pīʻai',
  'hāuli',
  'ōlaʻa',
  'kiuna',
  'okōko',
  'melia',
  'pōaka',
  'kanea',
  'kōmou',
  'lūʻau',
  'ʻaika',
  'hōʻau',
  'meine',
  'ʻiole',
  'hakai',
  'nīheu',
  'lāmia',
  'lauʻō',
  'kawia',
  'hahai',
  'auahi',
  'humea',
  'kuina',
  'ulupē',
  'ʻaina',
  'kuehu',
  'ululā',
  'haukō',
  'walea',
  'loina',
  'uwaʻu',
  'kiawe',
  'pāmia',
  'omōhā',
  'ahāhā',
  'ʻāuli',
  'ʻīnia',
  'huaʻi',
  'iwikū',
  'kāwae',
  'piolo',
  'mauae',
  'iulai',
  'kokoi',
  'poʻiu',
  'ʻōheu',
  'kīhei',
  'aulau',
  'hokua',
  'kaina',
  'lāʻie',
  'iākua',
  'māhua',
  'ʻūomo',
  'kiapā',
  'piena',
  'ālaka',
  'kūpea',
  'pualu',
  'nakue',
  'nāele',
  'mīʻoi',
  'ʻōmou',
  'huaka',
  'ʻeʻeu',
  'ʻōiwi',
  'waina',
  'mōuki',
  'ʻākau',
  'kuaio',
  'ʻāhiu',
  'pākūā',
  'nahau',
  'pīʻoe',
  'hāpua',
  'moena',
  'maiao',
  'lōhiu',
  'makou',
  'puoni',
  'kīkoi',
  'kekea',
  'nāweo',
  'mākea',
  'nāwao',
  'pōliu',
  'ʻoawa',
  'iʻole',
  'meʻea',
  'kunia',
  'kkkal',
  'ʻōahi',
  'nenea',
  'unahi',
  'lōhai',
  'ʻawea',
  'makea',
  'kēpau',
  'puihe',
  'kāʻēē',
  'liona',
  'niape',
  'honia',
  'leleo',
  'nōiki',
  'ʻīlio',
  'ukoʻa',
  'lēkiō',
  'mōkoi',
  'pokea',
  'uwali',
  'keawe',
  'poehi',
  'uwepa',
  'ʻalea',
  'ʻilau',
  'haili',
  'huakē',
  'ilina',
  'noiʻo',
  'ʻunae',
  'kaupē',
  'ōhāhā',
  'unele',
  'lepea',
  'ihona',
  'kūkoa',
  'moana',
  'mahea',
  'ʻauka',
  'ʻōhio',
  'kuapo',
  'mania',
  'lāhea',
  'kaomi',
  'ʻaʻea',
  'lamie',
  'ʻōaʻa',
  'wāwae',
  'pōheo',
  'kunou',
  'nanue',
  'kāʻei',
  'kōhia',
  'hōlei',
  'ʻūʻua',
  'kione',
  'hāloa',
  'pāoʻo',
  'kāpae',
  'meiwi',
  'pūwai',
  'nīane',
  'kāohi',
  'panau',
  'ukali',
  'haele',
  'pahua',
  'lumia',
  'puewa',
  'lekue',
  'kaīkū',
  'hinao',
  'aʻukī',
  'nipoa',
  'pūʻai',
  'kāʻai',
  'kalea',
  'kāmau',
  'kiʻoa',
  'kānoa',
  'hupau',
  'ʻāiki',
  'lawea',
  'huali',
  'kūmoe',
  'ʻaihē',
  'hahau',
  'ʻūlau',
  'hoaka',
  'hāuna',
  'pōkue',
  'ʻēheu',
  'ʻānae',
  'ʻeʻei',
  'lākea',
  'hehia',
  'nunui',
  'launa',
  'māmio',
  'ʻāwai',
  'kuoni',
  'ʻoupē',
  'mānui',
  'huaʻā',
  'maine',
  'holea',
  'kaena',
  'pīwai',
  'kēhue',
  'ʻoiʻo',
  'ʻainā',
  'kāwao',
  'hahae',
  'oʻole',
  'kīʻei',
  'kapao',
  'kāili',
  'haole',
  'anaka',
  'ʻōana',
  'kaupō',
  'wāhia',
  'ʻouwo',
  'ʻewai',
  'lāhai',
  'hiana',
  'hohoa',
  'ʻaʻao',
  'ʻanau',
  'luehu',
  'kūnou',
  'pāwai',
  'uwalo',
  'aoaoa',
  'moekū',
  'niolo',
  'pouna',
  'helua',
  'maiʻa',
  'kumia',
  'huana',
  'lamia',
  'pēheu',
  'poeko',
  'nīʻau',
  'pāʻia',
  'ikehu',
  'kōahe',
  'puiki',
  'koani',
  'holoē',
  'līpoa',
  'kauka',
  'peawa',
  'uhaku',
  'ʻaiwa',
  'nauwā',
  'kinai',
  'olowā',
  'haena',
  'kēlia',
  'haona',
  'hāʻea',
  'lālea',
  'kapuō',
  'ʻokia',
  'kēlou',
  'leioa',
  'hāʻoi',
  'paiʻā',
  'mouku',
  'uhakē',
  'ʻēkeu',
  'ʻōnea',
  'uwila',
  'memea',
  'kūhou',
  'huelo',
  'kaini',
  'hōʻae',
  'paona',
  'naʻau',
  'ʻaoʻo',
  'akena',
  'kauwō',
  'haoma',
  'wehea',
  'hiliu',
  'ʻiele',
  'pepeu',
  'auolo',
  'kāhua',
  'pōuli',
  'pīkoi',
  'kaola',
  'mōkio',
  'honoā',
  'nānue',
  'pēkeu',
  'ʻāpeu',
  'uhaki',
  'monia',
  'uhinu',
  'ʻīnea',
  'unaue',
  'pāpua',
  'ikīki',
  'kāina',
  'waipā',
  'koeʻā',
  'koiʻi',
  'ʻāina',
  'kākau',
  'kāʻao',
  'uweka',
  'mīʻoi',
  'koina',
  'hihiu',
  'uwene',
  'huaʻi',
  'kīlua',
  'ʻuniu',
  'nōkea',
  'ʻuwia',
  'lāhui',
  'ʻaʻau',
  'wākea',
  'popoe',
  'kīlau',
  'ukoʻo',
  'kūhoe',
  'hōʻoi',
  'keola',
  'palea',
  'līkao',
  'māhuā',
  'ʻowau',
  'huhue',
  'hoʻia',
  'lōuhu',
  'huʻea',
  'wauau',
  'nonoā',
  'ʻoʻoi',
  'pōlua',
  'kuhua',
  'pūheu',
  'ʻaʻei',
  'lipoa',
  'kūʻai',
  'puali',
  'nonea',
  'pākea',
  'luhia',
  'koene',
  'ʻoulu',
  'ʻōʻio',
  'ihola',
  'kuolo',
  'līlia',
  'lelea',
  'nuʻao',
  'ahana',
  'poʻia',
  'anena',
  'pūniu',
  'moala',
  'kīhae',
  'naluā',
  'keʻei',
  'manuā',
  'kīleo',
  'kāheu',
  'ʻiole',
  'kameo',
  'aumoe',
  'ʻāone',
  'olopī',
  'ʻaʻae',
  'kiʻia',
  'pehia',
  'leikō',
  'ʻōpua',
  'okoko',
  'līoho',
  'pilia',
  'kīloi',
  'keʻia',
  'upupā',
  'kawaū',
  'kaiwi',
  'huina',
  'ʻaiau',
  'wāwau',
  'lokou',
  'paila',
  'kuini',
  'māunu',
  'hahao',
  'haʻua',
  'ukamu',
  'pūnua',
  'alakō',
  'ʻāhai',
  'puapu',
  'halei',
  'laula',
  'laiki',
  'kuahu',
  'kuamū',
  'nenue',
  'kōʻai',
  'ʻuiki',
  'kaniu',
  'keiki',
  'nānai',
  'kuiki',
  'kahuā',
  'puehu',
  'keaka',
  'omoki',
  'puawa',
  'hīkau',
  'lōkea',
  'kepue',
  'kaʻeo',
  'omomo',
  'haiau',
  'piaia',
  'heaha',
  'manae',
  'hoiʻa',
  'aʻelā',
  'ʻoliō',
  'māhie',
  'kūlou',
  'hukia',
  'ʻāahi',
  'ʻaʻai',
  'lolia',
  'kiloū',
  'ʻikea',
  'lupea',
  'lūpua',
  'mauwā',
  'koelo',
  'pihoa',
  'weweo',
  'mūkei',
  'piele',
  'haoʻa',
  'hoʻoā',
  'hūwai',
  'kiana',
  'haiwā',
  'ʻūlei',
  'kolia',
  'ālolo',
  'moani',
  'hōwai',
  'kūono',
  'wiola',
  'ukupē',
  'pālau',
  'pēkoi',
  'alelo',
  'hāʻae',
  'ʻēlau',
  'hiena',
  'kuewa',
  'pakoa',
  'lāʻau',
  'mauʻu',
  'oloʻū',
  'kalae',
  'poluā',
  'hāʻei',
  'leʻie',
  'paiwa',
  'lekiō',
  'kākua',
  'kuaka',
  'auēuē',
  'wawai',
  'lomia',
  'hōlua',
  'kalio',
  'hāmau',
  'honua',
  'pinau',
  'kīlea',
  'kielo',
  'ʻaiea',
  'panua',
  'ʻapai',
  'hehei',
  'kuiwa',
  'hākia',
  'koana',
  'nohea',
  'akule',
  'mōʻiu',
  'pāiki',
  'kaona',
  'kuaʻā',
  'palai',
  'hului',
  'lahui',
  'hōʻai',
  'lēʻia',
  'niuhi',
  'minoi',
  'kahiō',
  'ʻiomo',
  'ʻoloa',
  'pūhai',
  'mamae',
  'maunu',
  'ʻaʻoe',
  'kōheo',
  'ʻikuā',
  'uleʻo',
  'hāleu',
  'wilia',
  'ehehe',
  'kūʻou',
  'ōlaʻi',
  'nehoa',
  'loaʻa',
  'hākai',
  'momoe',
  'lēkei',
  'maina',
  'paukī',
  'lukia',
  'mīhau',
  'ʻānoa',
  'hoʻāo',
  'kuene',
  'ʻapoa',
  'hōʻoā',
  'kaʻau',
  'kueka',
  'kāmoa',
  'lūkea',
  'hiapo',
  'mokae',
  'nīʻau',
  'lakua',
  'hiolo',
  'palau',
  'ʻōhao',
  'hāʻao',
  'mamau',
  'maoli',
  'kūola',
  'kaolo',
  'kakau',
  'hoana',
  'nalea',
  'olokē',
  'mālei',
  'pupua',
  'ʻānai',
  'laina',
  'lalau',
  'koali',
  'kēpia',
  'poepe',
  'ʻaloe',
  'ʻehia',
  'kūoʻo',
  'ʻulae',
  'ʻiawe',
  'kukui',
  'miona',
  'kuala',
  'pūhui',
  'ʻēlau',
  'mumui',
  'nāulu',
  'puahi',
  'noʻoa',
  'ahulu',
  'māwai',
  'kōkio',
  'alani',
  'ulupō',
  'lolea',
  'noiʻi',
  'houpo',
  'aulia',
  'makai',
  'hūkeu',
  'pāono',
  'ponia',
  'ʻāmui',
  'pīkai',
  'lonoā',
  'lālau',
  'oʻoʻō',
  'kūmau',
  'makāu',
  'upiʻi',
  'pehea',
  'kaupā',
  'kuaʻi',
  'hānei',
  'kuoho',
  'lilio',
  'keoho',
  'kōʻiu',
  'puoko',
  'pāhau',
  'heiau',
  'nihoa',
  'mekia',
  'loala',
  'kūhiō',
  'naʻuā',
  'linoa',
  'milia',
  'kamoe',
  'mōlio',
  'kaikā',
  'eʻehu',
  'aumoa',
  'mauna',
  'mahai',
  'mōnea',
  'pepei',
  'ānini',
  'wahie',
  'luaʻi',
  'uhaʻi',
  'makoa',
  'ununa',
  'pokia',
  'kueni',
  'ʻoehu',
  'puakī',
  'unoʻo',
  'kīkau',
  'laukō',
  'māilo',
  'hālua',
  'panoa',
  'mōhai',
  'kōnui',
  'keʻeo',
  'kūnoa',
  'kiola',
  'puawe',
  'pōʻai',
  'ʻuaʻu',
  'ʻānia',
  'kōkia',
  'līʻoa',
  'manua',
  'hūkai',
  'hiaʻā',
  'ukole',
  'polai',
  'mālua',
  'holua',
  'loulu',
  'māina',
  'klkal',
  'maiau',
  'kēuli',
  'kuaʻe',
  'ahukū',
  'leuwī',
  'pāhai',
  'anilā',
  'hōkai',
  'mulea',
  'ahuna',
  'kēhau',
  'waipū',
  'kaela',
  'awāwa',
  'kaʻao',
  'kūkae',
  'pīʻei',
  'ʻunia',
  'maile',
  'kāhei',
  'ʻākea',
  'olopē',
  'heaʻe',
  'kohea',
  'kūawa',
  'pukai',
  'ʻaina',
  'kōkua',
  'kīhau',
  'ʻāhia',
  'lekia',
  'pāhia',
  'nopue',
  'hākau',
  'kīpau',
  'lauʻī',
  'lohea',
  'hihio',
  'pioea',
  'hahei',
  'hōʻio',
  'paipu',
  'akula',
  'nāmua',
  'pānie',
  'alawī',
  'ʻōhai',
  'kualo',
  'kuālo',
  'pānai',
  'lāʻau',
  'lālei',
  'pēkau',
  'piuka',
  'mīana',
  'māhoe',
  'aouli',
  'ʻūniu',
  'ʻāuna',
  'puela',
  'āloʻi',
  'minao',
  'kaohi',
  'aʻela',
  'hauhō',
  'lanai',
  'pilau',
  'ʻēkea',
  'ʻaioā',
  'mikaō',
  'kēlau',
  'uluna',
  'ʻauae',
  'maluō',
  'ʻuehe',
  'kūpau',
  'pālua',
  'mānea',
  'māuna',
  'kohai',
  'uianu',
  'auhea',
  'māʻoi',
  'hauna',
  'kaiko',
  'paoka',
  'lēhei',
  'hoʻea',
  'kāhai',
  'huini',
  'hākea',
  'ūkākā',
  'māhoa',
  'naule',
  'pīʻai',
  'māwae',
  'hoena',
  'pihea',
  'pouka',
  'haaʻa',
  'kaiua',
  'ukuhi',
  'aloha',
  'paʻau',
  'hōʻae',
  'kūkia',
  'kupai',
  'ʻōilo',
  'neʻia',
  'uweko',
  'kioea',
  'pāwao',
  'kuahā',
  'leiau',
  'kuelo',
  'hōkeo',
  'uwoki',
  'kākia',
  'laimi',
  'luina',
  'ʻaiwi',
  'pāumu',
  'puaea',
  'kioia',
  'uhuki',
  'nunoi',
  'ʻiolo',
  'ʻaʻai',
  'malia',
  'paihī',
  'pōule',
  'wīlou',
  'oloʻa',
  'kōina',
  'hōʻeu',
  'paʻia',
  'kalua',
  'māuli',
  'uhipū',
  'ʻāpua',
  'niniu',
  'kaiue',
  'pāhoa',
  'ʻumia',
  'mālie',
  'poliō',
  'nōhie',
  'kiʻei',
  'kualā',
  'halia',
  'keopu',
  'kuoha',
  'ʻōpio',
  'kiele',
  'kakae',
  'kāloa',
  'helei',
  'piuke',
  'liʻua',
  'oneʻā',
  'pāola',
  'ahona',
  'kōnea',
  'uluʻā',
  'piula',
  'ehaha',
  'anaʻē',
  'kupua',
  'āneho',
  'waena',
  'poale',
  'ihuʻū',
  'kauwā',
  'kūliu',
  'hāehu',
  'kiule',
  'malau',
  'ʻōniu',
  'kiani',
  'panea',
  'papao',
  'kahia',
  'kāwai',
  'pahiō',
  'alehu',
  'wawau',
  'kāmua',
  'kikoa',
  'kālau',
  'hānai',
  'ʻāoʻo',
  'hōlio',
  'makau',
  'ʻiona',
  'paiki',
  'kuili',
  'mikia',
  'uhina',
  'unoʻa',
  'ūpēpē',
  'ʻōlea',
  'moano',
  'ulihi',
  'kūhea',
  'kaunu',
  'ʻuala',
  'pāweo',
  'hoʻāu',
  'koena',
  'waele',
  'pāuhu',
  'kainō',
  'ʻolua',
  'uaiki',
  'pāiwa',
  'lākou',
  'nāiʻi',
  'kiupe',
  'mēkia',
  'holoa',
  'mauʻu',
  'kemua',
  'paioa',
  'nioke',
  'nihia',
  'kūpou',
  'haina',
  'ʻākea',
  'ʻāhui',
  'luʻua',
  'ʻōhui',
  'kenia',
  'noiʻi',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => {VALIDGUESSES[i] = val.normalize(CONFIG.normalization); VALIDGUESSES[i] = val.replaceAll('\u2018', "\u02bb")}
  )
}
