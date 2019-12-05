const languages = {
    en: { name: 'English' },
    fr: { name: 'French' },
    de: { name: 'German' },
    aa: { name: 'Afar' },
    ab: { name: 'Abkhaz' },
    ae: { name: 'Avestan' },
    af: { name: 'Afrikaans' },
    ak: { name: 'Akan' },
    am: { name: 'Amharic' },
    an: { name: 'Aragonese' },
    ar: { name: 'Arabic' },
    as: { name: 'Assamese' },
    av: { name: 'Avaric' },
    ay: { name: 'Aymara' },
    az: { name: 'Azerbaijani' },
    ba: { name: 'Bashkir' },
    be: { name: 'Belarusian' },
    bg: { name: 'Bulgarian' },
    bh: { name: 'Bihari' },
    bi: { name: 'Bislama' },
    bm: { name: 'Bambara' },
    bn: { name: 'Bengali, Bangla' },
    bo: { name: 'Tibetan Standard, Tibetan, Central' },
    br: { name: 'Breton' },
    bs: { name: 'Bosnian' },
    ca: { name: 'Catalan' },
    ce: { name: 'Chechen' },
    ch: { name: 'Chamorro' },
    co: { name: 'Corsican' },
    cr: { name: 'Cree' },
    cs: { name: 'Czech' },
    cu: { name: 'Old Church Slavonic, Church Slavonic, Old Bulgarian' },
    cv: { name: 'Chuvash' },
    cy: { name: 'Welsh' },
    da: { name: 'Danish' },
    dv: { name: 'Divehi, Dhivehi, Maldivian' },
    dz: { name: 'Dzongkha' },
    ee: { name: 'Ewe' },
    el: { name: 'Greek (modern)' },
    eo: { name: 'Esperanto' },
    es: { name: 'Spanish' },
    et: { name: 'Estonian' },
    eu: { name: 'Basque' },
    fa: { name: 'Persian (Farsi)' },
    ff: { name: 'Fula, Fulah, Pulaar, Pular' },
    fi: { name: 'Finnish' },
    fj: { name: 'Fijian' },
    fo: { name: 'Faroese' },
    fy: { name: 'Western Frisian' },
    ga: { name: 'Irish' },
    gd: { name: 'Scottish Gaelic, Gaelic' },
    gl: { name: 'Galician' },
    gn: { name: 'Guaraní' },
    gu: { name: 'Gujarati' },
    gv: { name: 'Manx' },
    ha: { name: 'Hausa' },
    he: { name: 'Hebrew (modern)' },
    hi: { name: 'Hindi' },
    ho: { name: 'Hiri Motu' },
    hr: { name: 'Croatian' },
    ht: { name: 'Haitian, Haitian Creole' },
    hu: { name: 'Hungarian' },
    hy: { name: 'Armenian' },
    hz: { name: 'Herero' },
    ia: { name: 'Interlingua' },
    id: { name: 'Indonesian' },
    ie: { name: 'Interlingue' },
    ig: { name: 'Igbo' },
    ii: { name: 'Nuosu' },
    ik: { name: 'Inupiaq' },
    io: { name: 'Ido' },
    is: { name: 'Icelandic' },
    it: { name: 'Italian' },
    iu: { name: 'Inuktitut' },
    ja: { name: 'Japanese' },
    jv: { name: 'Javanese' },
    ka: { name: 'Georgian' },
    kg: { name: 'Kongo' },
    ki: { name: 'Kikuyu, Gikuyu' },
    kj: { name: 'Kwanyama, Kuanyama' },
    kk: { name: 'Kazakh' },
    kl: { name: 'Kalaallisut, Greenlandic' },
    km: { name: 'Khmer' },
    kn: { name: 'Kannada' },
    ko: { name: 'Korean' },
    kr: { name: 'Kanuri' },
    ks: { name: 'Kashmiri' },
    ku: { name: 'Kurdish' },
    kv: { name: 'Komi' },
    kw: { name: 'Cornish' },
    ky: { name: 'Kyrgyz' },
    la: { name: 'Latin' },
    lb: { name: 'Luxembourgish, Letzeburgesch' },
    lg: { name: 'Ganda' },
    li: { name: 'Limburgish, Limburgan, Limburger' },
    ln: { name: 'Lingala' },
    lo: { name: 'Lao' },
    lt: { name: 'Lithuanian' },
    lu: { name: 'Luba-Katanga' },
    lv: { name: 'Latvian' },
    mg: { name: 'Malagasy' },
    mh: { name: 'Marshallese' },
    mi: { name: 'Māori' },
    mk: { name: 'Macedonian' },
    ml: { name: 'Malayalam' },
    mn: { name: 'Mongolian' },
    mr: { name: 'Marathi (Marāṭhī)' },
    ms: { name: 'Malay' },
    mt: { name: 'Maltese' },
    my: { name: 'Burmese' },
    na: { name: 'Nauruan' },
    nb: { name: 'Norwegian Bokmål' },
    nd: { name: 'Northern Ndebele' },
    ne: { name: 'Nepali' },
    ng: { name: 'Ndonga' },
    nl: { name: 'Dutch' },
    nn: { name: 'Norwegian Nynorsk' },
    no: { name: 'Norwegian' },
    nr: { name: 'Southern Ndebele' },
    nv: { name: 'Navajo, Navaho' },
    ny: { name: 'Chichewa, Chewa, Nyanja' },
    oc: { name: 'Occitan' },
    oj: { name: 'Ojibwe, Ojibwa' },
    om: { name: 'Oromo' },
    or: { name: 'Oriya' },
    os: { name: 'Ossetian, Ossetic' },
    pa: { name: '(Eastern) Punjabi' },
    pi: { name: 'Pāli' },
    pl: { name: 'Polish' },
    ps: { name: 'Pashto, Pushto' },
    pt: { name: 'Portuguese' },
    qu: { name: 'Quechua' },
    rm: { name: 'Romansh' },
    rn: { name: 'Kirundi' },
    ro: { name: 'Romanian' },
    ru: { name: 'Russian' },
    rw: { name: 'Kinyarwanda' },
    sa: { name: 'Sanskrit (Saṁskṛta)' },
    sc: { name: 'Sardinian' },
    sd: { name: 'Sindhi' },
    se: { name: 'Northern Sami' },
    sg: { name: 'Sango' },
    si: { name: 'Sinhalese, Sinhala' },
    sk: { name: 'Slovak' },
    sl: { name: 'Slovene' },
    sm: { name: 'Samoan' },
    sn: { name: 'Shona' },
    so: { name: 'Somali' },
    sq: { name: 'Albanian' },
    sr: { name: 'Serbian' },
    ss: { name: 'Swati' },
    st: { name: 'Southern Sotho' },
    su: { name: 'Sundanese' },
    sv: { name: 'Swedish' },
    sw: { name: 'Swahili' },
    ta: { name: 'Tamil' },
    te: { name: 'Telugu' },
    tg: { name: 'Tajik' },
    th: { name: 'Thai' },
    ti: { name: 'Tigrinya' },
    tk: { name: 'Turkmen' },
    tl: { name: 'Tagalog' },
    tn: { name: 'Tswana' },
    to: { name: 'Tonga (Tonga Islands)' },
    tr: { name: 'Turkish' },
    ts: { name: 'Tsonga' },
    tt: { name: 'Tatar' },
    tw: { name: 'Twi' },
    ty: { name: 'Tahitian' },
    ug: { name: 'Uyghur' },
    uk: { name: 'Ukrainian' },
    ur: { name: 'Urdu' },
    uz: { name: 'Uzbek' },
    ve: { name: 'Venda' },
    vi: { name: 'Vietnamese' },
    vo: { name: 'Volapük' },
    wa: { name: 'Walloon' },
    wo: { name: 'Wolof' },
    xh: { name: 'Xhosa' },
    yi: { name: 'Yiddish' },
    yo: { name: 'Yoruba' },
    za: { name: 'Zhuang, Chuang' },
    zh: { name: 'Chinese' },
    zu: { name: 'Zulu' },
};
