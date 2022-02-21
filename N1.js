const array = [
    {numAtomico:1,elemento:"H"}, {numAtomico:2,elemento:"He"}, {numAtomico:3,elemento:"Li"},{numAtomico:4,elemento: "Be"},
    {numAtomico:5,elemento:"B"}, {numAtomico:6,elemento:"C"},{numAtomico:7,elemento:"N"}, {numAtomico:8,elemento:"O"},
    {numAtomico:9,elemento:"F"},{numAtomico:10,elemento:"Ne"},{numAtomico:11,elemento:"Na"},{numAtomico:12,elemento:"Mg"},
    {numAtomico:13,elemento:"Al"},{numAtomico:14,elemento:"Si"},{numAtomico:15,elemento:"P"},{numAtomico:16,elemento:"S"},
    {numAtomico:17,elemento:"Cl"},{numAtomico:18,elemento: "Ar"},{numAtomico:19,elemento:"K"},{numAtomico:20,elemento:"Ca"},
    {numAtomico:21,elemento:"Sc"},{numAtomico:22,elemento:"Ti"},{numAtomico:23,elemento:"V"},{numAtomico:24,elemento:"Cr"},
    {numAtomico:25,elemento:"Mn"},{numAtomico:26,elemento:"Fe"},{numAtomico:27,elemento:"Co"},{numAtomico:28,elemento:"Ni"},
    {numAtomico:29,elemento:"Cu"},{numAtomico:30,elemento:"Zn"},{numAtomico:31,elemento:"Ga"},{numAtomico:32,elemento:"Ge"},
    {numAtomico:33,elemento:"As"},{numAtomico:34,elemento:"Se"},{numAtomico:35,elemento:"Br"},{numAtomico:36,elemento:"Kr"},
    {numAtomico:37,elemento:"Rb"},{numAtomico:38,elemento:"Sr"},{numAtomico:39,elemento:"Y"},{numAtomico:40,elemento:"Zr"},
    {numAtomico:41,elemento:"Nb"},{numAtomico:42,elemento:"Mo"},{numAtomico:43,elemento:"Tc"},{numAtomico:44,elemento:"Ru"},
    {numAtomico:45,elemento:"Rh"}, {numAtomico:46,elemento:"Pd"},{numAtomico:47,elemento:"Ag"},{numAtomico:48,elemento:"Cd"},
    {numAtomico:49,elemento:"In"},{numAtomico:50,elemento:"Sn"},{numAtomico:51,elemento:"Sb"},{numAtomico:52,elemento:"Te"},
    {numAtomico:53,elemento:"I"},{numAtomico:54,elemento:"Xe"},{numAtomico:55,elemento:"Cs"},{numAtomico:56,elemento:"Ba"},
    {numAtomico:71,elemento:"Lu"},{numAtomico:72,elemento:"Hf"},{numAtomico:73,elemento:"Ta"},{numAtomico:74,elemento:"W"},
    {numAtomico:75,elemento:"Re"},{numAtomico:76,elemento:"Os"},{numAtomico:77,elemento:"Ir"},{numAtomico:78,elemento:"Pt"},
    {numAtomico:79,elemento:"Au"},{numAtomico:80,elemento:"Hg"},{numAtomico:81,elemento:"Ti"},{numAtomico:82,elemento:"Pb"},
    {numAtomico:83,elemento:"Bi"},{numAtomico:84,elemento:"Po"},{numAtomico:85,elemento:"At"},{numAtomico:86,elemento:"Rn"},
    {numAtomico:87,elemento:"Fr"},{numAtomico:88,elemento:"Ra"},{numAtomico:103,elemento:"Lr"},{numAtomico:104,elemento:"Rf"},
    {numAtomico:105,elemento:"Db"},{numAtomico:106,elemento:"Sg"},{numAtomico:107,elemento:"Bh"},{numAtomico:108,elemento:"Hs"},
    {numAtomico:109,elemento:"Mt"},{numAtomico:110,elemento:"Ds"},{numAtomico:111,elemento:"Rg"},{numAtomico:112,elemento:"Cn"},
    {numAtomico:113,elemento:"Nh"},{numAtomico:114,elemento:"Dl"},{numAtomico:115,elemento:"Mc"},{numAtomico:116,elemento:"Lv"},
    {numAtomico:117,elemento:"Ts"},{numAtomico:118,elemento:"Og"},{numAtomico:57,elemento:"La"},{numAtomico:58,elemento:"Ce"},
    {numAtomico:59,elemento:"Pr"},{numAtomico:60,elemento:"Nd"},{numAtomico:61,elemento:"Pm"},{numAtomico:62,elemento:"Sm"},
    {numAtomico:63,elemento:"Eu"},{numAtomico:64,elemento:"Gd"},{numAtomico:65,elemento:"Tb"},{numAtomico:66,elemento:"Dy"},
    {numAtomico:67,elemento:"Ho"},{numAtomico:68,elemento:"Er"},{numAtomico:69,elemento:"Tm"},{numAtomico:70,elemento:"Yb"},
    {numAtomico:89,elemento:"Ac"},{numAtomico:90,elemento:"Th"},{numAtomico:91,elemento:"Pa"},{numAtomico:92,elemento:"U"},
    {numAtomico:93,elemento:"Np"},{numAtomico:94,elemento:"Pu"},{numAtomico:95,elemento:"Am"},{numAtomico:96,elemento:"Cm"},
    {numAtomico:97,elemento:"Bk"},{numAtomico:98,elemento:"Cf"},{numAtomico:99,elemento:"Es"},{numAtomico:100,elemento:"Fm"},

    // elementos aleatorios

const shuffleArray = array => {
    for (let i=array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array [i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// ordena de menor a mayor. Solo valido para valor numerico.

const  numatom_ordenado = array.sort((numa1,numa2) => {
    return numa2.numAtomico - numa1.numAtomico
  
})

console.log(numatom_ordenado); 


//primo
const primo= numAtomico => {
    if (numAtomico == 0 || numAtomico == 1 || numAtomico == 4) return false;
    for (let x = 2; x < numAtomico / 2; x ++){
        if (numAtomico % x == 0) return false;
    }
    return true;
}

