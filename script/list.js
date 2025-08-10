let olls = {}

olls["Dot_1"] = `F R' F' R U2 F R' F' R2 U2 R'`
olls["Dot_2"] = `f U R U' R' f' F U R U' R' F'`
olls["Dot_3"] = `F U R U' R' F' U f U R U' R' f'`
olls["Dot_4"] = `F U R U' R' F' U' f U R U' R' f'`
olls["Dot_5"] = `F R' F' R U2' F R' F' R U' R U' R'`
olls["Dot_6"] = `r' U2' R U R' U r2' U2' R' U' R U' r'`
olls["Dot_7"] = `F R' F' R M U R U' R' U' M'`
olls["Dot_8"] = `r U R' U' M2' U R U' R' U' M'`

olls["Cross_1"] = `R U R' U R U2' R'`
olls["Cross_2"] = `R U2' R' U' R U' R'`
olls["Cross_3"] = `R U R' U R U' R' U R U2' R'`
olls["Cross_4"] = `R' U2' R2' U R2' U R2' U2' R'`
olls["Cross_5"] = `F R' F' r U R U' r'`
olls["Cross_6"] = `R' F' r U R U' r' F`
olls["Cross_7"] = `R U2' R D R' U2' R D' R2'`

olls["Lightning-Bolt_1"] = `r U2' R' U' R U' r'`
olls["Lightning-Bolt_2"] = `r' U2' R U R' U r`
olls["Lightning-Bolt_3"] = `M U' R U2' R' U' R U' R2' r`
olls["Lightning-Bolt_4"] = `F U R U' R' F' U' F U R U' R' F'`
olls["Lightning-Bolt_5"] = `L U F' U' L' U L F L'`
olls["Lightning-Bolt_6"] = `R' U' F U R U' R' F' R` 

olls["L-Shape_1"] = `F U R U' R' U R U' R' F'`
olls["L-Shape_2"] = `F' U' L' U L U' L' U L F`
olls["L-Shape_3"] = `r U2' R' U' R U R' U' R U' r'`
olls["L-Shape_4"] = `r U' r2' U r2' U r2' U' r`
olls["L-Shape_5"] = `r' U r2' U' r2' U' r2' U r'`
olls["L-Shape_6"] = `r' U2' R U R' U' R U R' U r`

olls["P-Shape_1"] = `R' F R U R' U' F' U R`
olls["P-Shape_2"] = `f R' F' R U R U' R' S'`
olls["P-Shape_3"] = `f' U' L' U L f`
olls["P-Shape_4"] = `f U R U' R' f'`

olls["Akward-Shape_1"] = `M F R' F' R U R U' R' U' M'`
olls["Akward-Shape_2"] = `F U R U2' R' U R U2' R' U' F'`
olls["Akward-Shape_3"] = `F U R U' R' F' R U2' R' U' R U' R'`
olls["Akward-Shape_4"] = `F U R U' R' F' R' U2' R U R' U R`

olls["Knight_1"] = `F' U' F r U' r' U r U r'`
olls["Knight_2"] = `F U F' R' F R U' R' F' R`
olls["Knight_3"] = `r' U' r U' R' U R r' U r`
olls["Knight_4"] = `r U r' U R U' R' r U' r'`

olls["Line_1"] = `f U R U' R' U R U' R' f'`
olls["Line_2"] = `r U r' R U R' U' R U R' U' r U' r'`
olls["Line_3"] = `F R U R' d R' U' R U' R'`
olls["Line_4"] = `F R' F' U2' R U R' U R2' U2' R'`

olls["Fish_1"] = `F U R U' R2' F' R U R U' R'`
olls["Fish_2"] = `R U2' R' F R' F' R U' R U' R'`
olls["Fish_3"] = `R U2' R' F R' F' R2' U2' R'`
olls["Fish_4"] = `F R U' R' U R U R' F'`

olls["T-Shape_1"] = `F U R U' R' F'`
olls["T-Shape_2"] = `F R' F' R U R U' R'`

olls["C-Shape_1"] = `F U R' U' R' F' R U R2' U' R'`
olls["C-Shape_2"] = `R' U' F R' F' R U R`

olls["Square_1"] = `r' U' R U' R' U2' r`
olls["Square_2"] = `r U R' U R U2' r'`

olls["Stair_1"] = `F' L F L' U' L' U' L U L' U L`
olls["Stair_2"] = `F R' F' R U R U R' U' R U' R'`

olls["Oriented-Corner_1"] =  `R U R' U' M' U R U' r'`
olls["Oriented-Corner_2"] =  `r U R' U' M U R U' R'`

let plls = {}

plls["Aa"] = "F U R U' R D R' U R D' R2 U' F'"
plls["Ab"] = "R' F R' B2 R F' R' B2 R2"
plls["F"] = "R2 F R F' R' U' F' U F R2 U R' U' R"
plls["Ga"] = "F' U' F R2 u R' U R U' R u' R2"
plls["Gb"] = "D' R2 U R' U R' U' R U' R2 D U' R' U R"
plls["Gc"] = "D' R U R' U' D R2 U' R U' R' U R' U R2"
plls["Gd"] = "R2 U' R U' R U R' U R2 D' U R U' R' D"
plls["Ja"] = "L' U' L2 F L' U' L' U L F' L' U L"
plls["Jb"] = "R U2 R' U' R U2 r' F R' F' r"
plls["Ra"] = "L2 F' L' U' L' U L F L' U2 L U2 L'"
plls["Rb"] = "R' U R U R' U' R' D' R U R' D R U2 R"
plls["T"] = "L' U' L F U' R U R2 F' R U R U' R'"
plls["E"] = "R2 U F' U R' U' R U R' U' R U R' U' R F U' R2"
plls["Na"] = "F' R U R' U' R' F R2 F U' R' U' R U F' R'"
plls["Nb"] = "L' U R' U2 L U' R L' U R' U2 L U' R"
plls["V"] = "R' f' R U R' U R U2 R' U f R U R' U' R"
plls["Y"] = "F U F' R2 F U' F' U' R2 U R2 U R2"
plls["H"] = "R2 U2 R U2 R2 U2 R2 U2 R U2 R2"
plls["Ua"] = "R' U R' U' R' U' R' U R U R2"
plls["Ub"] = "R2 U' R' U' R U R U R U' R"
plls["Z"] = "R' U' R2 U R U R' U' R U R U' R U' R'"

let lastoll = ""
function randomOll(allowed) {
    let index = allowed[Math.floor(Math.random() * allowed.length)]
    let sequence = olls[index]

    if (index === lastoll) {
        return randomOll(allowed)
    }
    lastoll = index
    return {sequence, index}
}

let lastpll = ""
function randomPll(allowed) {
    let index = allowed[Math.floor(Math.random() * allowed.length)]
    let sequence = plls[index]

    if (index === lastoll) {
        return randomPll(allowed)
    }
    lastoll = index
    return {sequence, index}
}