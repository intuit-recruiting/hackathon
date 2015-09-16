/**
 *  TaxReturn.js
 *
 *  Created by Jay Yu on 05/03/2013.
 *  Copyright 2013 Intuit, Inc. All rights reserved.
 */
 
  var TaxCalc2013 = {
 
    SingleUpperLimits : [8925, 	36250, 	87850,		183250,		398350, 	400000,		Infinity],
    SingleDeltas : 		[0,		446.25,	4071.25,	6706.75,	15869.25,	23836.25,	42236.25],
    MfjUpperLimits :    [17850, 72500, 	146400,		223050,		398350, 	450000,		Infinity],
    MfjDeltas : 		[0,		892.5,	8142.5,		12534.5,    23687,		31654,		52354],
    MfsUpperLimits :    [8925, 	36250, 	73200,		111525,		199175, 	225000,		Infinity],
    MfsDeltas : 		[0,		446.25,	4071.25,	6267.25,	11843.5,	15827,		26177],
    HhUpperLimits : 	[12750, 48600, 	125450,		203150,		398350, 	425000, 	Infinity],
    HhDeltas : 			[0,		637.5,	5497.5,		9261,		19418.5,	27385.5,	46935.5],
    TaxBrackets :		[0.10, 	0.15, 	0.25, 		0.28, 		0.33, 		0.35, 		0.396],
  
    StdDeductionTable : {
  		"SINGLE": {"maxValue":  6100, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 12200, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFS": 	  {"maxValue":  6100, "phaseOutBegin": null, "phaseOutEnd": null},
		"HH": 	  {"maxValue":  8950, "phaseOutBegin": null, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 12200, "phaseOutBegin": null, "phaseOutEnd": null}
	},
	
    ExtraDeductionTable : {
  		"SINGLE": {"maxValue":  1500, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue":  1200, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFS": 	  {"maxValue":  1200, "phaseOutBegin": null, "phaseOutEnd": null},
		"HH": 	  {"maxValue":  1500, "phaseOutBegin": null, "phaseOutEnd": null},
		"QW": 	  {"maxValue":  1200, "phaseOutBegin": null, "phaseOutEnd": null}
	},
	
    Dependent_StdDeudctionExtra : 350.00,
    Dependent_StdDeudctionBase : 1000.00,
	
    ItemizedDeductionTable : {
  		"SINGLE": {"maxValue": 	250000, "phaseOutBegin": 250000, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 	300000, "phaseOutBegin": 300000, "phaseOutEnd": null},
		"MFS": 	  {"maxValue":  150000, "phaseOutBegin": 150000, "phaseOutEnd": null},
		"HH": 	  {"maxValue":  275000, "phaseOutBegin": 275000, "phaseOutEnd": null},
		"QW": 	  {"maxValue":  300000, "phaseOutBegin": 300000, "phaseOutEnd": null}
	},
	
    ExemptionTable : {
  		"SINGLE": {"maxValue": 3900, "phaseOutBegin": 250000, "phaseOutEnd": 372500},
		"MFJ": 	  {"maxValue": 3900, "phaseOutBegin": 300000, "phaseOutEnd": 422500},
		"MFS": 	  {"maxValue": 3900, "phaseOutBegin": 150000, "phaseOutEnd": 211250},
		"HH": 	  {"maxValue": 3900, "phaseOutBegin": 275000, "phaseOutEnd": 397500},
		"QW": 	  {"maxValue": 3900, "phaseOutBegin": 300000, "phaseOutEnd": 422500}
	},

	SocSecIncomeDeductionTable : {
  		"SINGLE": {"maxValue": 	   0, "phaseOutBegin":  9000, "phaseOutEnd": 25000},
		"MFJ": 	  {"maxValue": 	   0, "phaseOutBegin": 12000, "phaseOutEnd": 32000},
		"MFS": 	  {"maxValue":     0, "phaseOutBegin":  9000, "phaseOutEnd": 25000},
		"HH": 	  {"maxValue": 	   0, "phaseOutBegin":  9000, "phaseOutEnd": 25000},
		"QW": 	  {"maxValue": 	   0, "phaseOutBegin":  9000, "phaseOutEnd": 25000}
	},
	
    ChildTaxCreditTable : {
  		"SINGLE": {"maxValue": 1000, "phaseOutBegin":  75000, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 1000, "phaseOutBegin": 110000, "phaseOutEnd": null},
		"MFS": 	  {"maxValue": 1000, "phaseOutBegin":  55000, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 1000, "phaseOutBegin":  75000, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 1000, "phaseOutBegin": 110000, "phaseOutEnd": null}
	},

    AdditionalChildTaxEarnedIncomeBase : 3000.0,
	
    HopeCreditTable : {
  		"SINGLE": {"maxValue": 2500, "phaseOutBegin":  80000, "phaseOutEnd":  90000},
		"MFJ": 	  {"maxValue": 2500, "phaseOutBegin": 160000, "phaseOutEnd": 180000},
		"MFS": 	  {"maxValue":    0, "phaseOutBegin":   null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 2500, "phaseOutBegin":  80000, "phaseOutEnd":  90000},
		"QW": 	  {"maxValue": 2500, "phaseOutBegin":  80000, "phaseOutEnd":  90000}
	},
	
    LifetimeLearningCreditTable : {
  		"SINGLE": {"maxValue": 2000, "phaseOutBegin":  53000, "phaseOutEnd":  63000},
		"MFJ": 	  {"maxValue": 2000, "phaseOutBegin": 107000, "phaseOutEnd": 127000},
		"MFS": 	  {"maxValue": 	  0, "phaseOutBegin":   null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 2000, "phaseOutBegin":  53000, "phaseOutEnd":  63000},
		"QW": 	  {"maxValue": 2000, "phaseOutBegin":  53000, "phaseOutEnd":  63000}
	},
	
    QualifiedDividendOrCapitalGain0PercentTable : {
  		"SINGLE": {"maxValue": 0.00, "phaseOutBegin": 0, "phaseOutEnd": 36250},
		"MFJ": 	  {"maxValue": 0.00, "phaseOutBegin": 0, "phaseOutEnd": 72500},
		"MFS": 	  {"maxValue": 0.00, "phaseOutBegin": 0, "phaseOutEnd": 36250},
		"HH": 	  {"maxValue": 0.00, "phaseOutBegin": 0, "phaseOutEnd": 48600},
		"QW": 	  {"maxValue": 0.00, "phaseOutBegin": 0, "phaseOutEnd": 76200}
	},
	
    QualifiedDividendOrCapitalGain15PercentTable : {
  		"SINGLE": {"maxValue": 0.15, "phaseOutBegin": 36250, "phaseOutEnd": 400000},
		"MFJ": 	  {"maxValue": 0.15, "phaseOutBegin": 72500, "phaseOutEnd": 450000},
		"MFS": 	  {"maxValue": 0.15, "phaseOutBegin": 36250, "phaseOutEnd": 225000},
		"HH": 	  {"maxValue": 0.15, "phaseOutBegin": 48600, "phaseOutEnd": 425000},
		"QW": 	  {"maxValue": 0.15, "phaseOutBegin": 76200, "phaseOutEnd": 450000}
	},
	
    QualifiedDividendOrCapitalGain20PercentTable : {
  		"SINGLE": {"maxValue": 0.20, "phaseOutBegin": 400000, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 0.20, "phaseOutBegin": 450000, "phaseOutEnd": null},
		"MFS": 	  {"maxValue": 0.20, "phaseOutBegin": 225000, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 0.20, "phaseOutBegin": 425000, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 0.20, "phaseOutBegin": 450000, "phaseOutEnd": null}
	},

    EducationInterestDeductionTable : {
  		"SINGLE": {"maxValue": 2500, "phaseOutBegin":  60000, "phaseOutEnd":  75000},
		"MFJ": 	  {"maxValue": 2500, "phaseOutBegin": 125000, "phaseOutEnd": 155000},
		"MFS": 	  {"maxValue":    0, "phaseOutBegin":   null, "phaseOutEnd":   null},
		"HH": 	  {"maxValue": 2500, "phaseOutBegin":  60000, "phaseOutEnd":  75000},
		"QW": 	  {"maxValue": 2500, "phaseOutBegin":  60000, "phaseOutEnd":  75000}
	},
	
    IraDeductionAllParticipatedTable : {
  		"SINGLE": {"maxValue": null, "phaseOutBegin": 59000, "phaseOutEnd":  69000},
		"MFJ": 	  {"maxValue": null, "phaseOutBegin": 95000, "phaseOutEnd": 115000},
		"MFS": 	  {"maxValue": null, "phaseOutBegin": 10000, "phaseOutEnd":  10000},
		"HH": 	  {"maxValue": null, "phaseOutBegin": 59000, "phaseOutEnd":  69000},
		"QW": 	  {"maxValue": null, "phaseOutBegin": 95000, "phaseOutEnd": 115000}
	},
	
    IraDeductionOneParticipatedTable : {
  		"SINGLE": {"maxValue": null, "phaseOutBegin":   null, "phaseOutEnd":   null},
		"MFJ": 	  {"maxValue": null, "phaseOutBegin": 178000, "phaseOutEnd": 188000},
		"MFS": 	  {"maxValue": null, "phaseOutBegin":   null, "phaseOutEnd":   null},
		"HH": 	  {"maxValue": null, "phaseOutBegin":   null, "phaseOutEnd":   null},
		"QW": 	  {"maxValue": null, "phaseOutBegin":   null, "phaseOutEnd":   null}
	},
	
    EicNoChildrenTable : {
  		"SINGLE": {"maxValue": 6370, "phaseOutBegin":  7970, "phaseOutEnd": 14340},
		"MFJ": 	  {"maxValue": 6370, "phaseOutBegin": 13310, "phaseOutEnd": 19680},
		"MFS": 	  {"maxValue": 6370, "phaseOutBegin":  null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 6370, "phaseOutBegin":  7970, "phaseOutEnd": 14340},
		"QW": 	  {"maxValue": 6370, "phaseOutBegin":  7970, "phaseOutEnd": 14340}
	},
	
    EicOneChildrenTable : {
  		"SINGLE": {"maxValue": 9560, "phaseOutBegin": 17530, "phaseOutEnd": 37870},
		"MFJ": 	  {"maxValue": 9560, "phaseOutBegin": 22870, "phaseOutEnd": 43210},
		"MFS": 	  {"maxValue": 9560, "phaseOutBegin":  null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 9560, "phaseOutBegin": 17530, "phaseOutEnd": 37870},
		"QW": 	  {"maxValue": 9560, "phaseOutBegin": 17530, "phaseOutEnd": 37870}
	},
	
    EicTwoChildrenTable : {
  		"SINGLE": {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 43038},
		"MFJ": 	  {"maxValue": 13430, "phaseOutBegin": 22870, "phaseOutEnd": 48378},
		"MFS": 	  {"maxValue": 13430, "phaseOutBegin":  null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 43038},
		"QW": 	  {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 43038}
	},
	
    EicThreeChildrenTable : {
  		"SINGLE": {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 46227},
		"MFJ": 	  {"maxValue": 13430, "phaseOutBegin": 22870, "phaseOutEnd": 51567},
		"MFS": 	  {"maxValue": 13430, "phaseOutBegin":  null, "phaseOutEnd":  null},
		"HH": 	  {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 46227},
		"QW": 	  {"maxValue": 13430, "phaseOutBegin": 17530, "phaseOutEnd": 46227}
	},
	
    EicInvestmentLimit : 3300,

    AmtExemptionTable : {
  		"SINGLE": {"maxValue": 51900, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 80800, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFS": 	  {"maxValue": 40400, "phaseOutBegin": null, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 51900, "phaseOutBegin": null, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 80800, "phaseOutBegin": null, "phaseOutEnd": null}
	},
		
    AmtPhaseoutTable : {
  		"SINGLE": {"maxValue": 179500, "phaseOutBegin": 115400, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 179500, "phaseOutBegin": 153900, "phaseOutEnd": null},
		"MFS": 	  {"maxValue":  89750, "phaseOutBegin":  76950, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 179500, "phaseOutBegin": 115400, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 179500, "phaseOutBegin": 153900, "phaseOutEnd": null}
	},
	
    FicaRate : 0.124,
    MedicareRate : 0.029,
    FicaPlusMedicareRate: 0.153,	
    SeTaxWagesLimit : 113700,
    
    NitInvestmentLimitTable : {
  		"SINGLE": {"maxValue": 200000, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 250000, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFS": 	  {"maxValue": 125000, "phaseOutBegin": null, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 200000, "phaseOutBegin": null, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 250000, "phaseOutBegin": null, "phaseOutEnd": null}
    },
    
    NitInvestmentRate : 0.038,
    
    AdditionalMedicareLimitTable : {
  		"SINGLE": {"maxValue": 200000, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFJ": 	  {"maxValue": 250000, "phaseOutBegin": null, "phaseOutEnd": null},
		"MFS": 	  {"maxValue": 125000, "phaseOutBegin": null, "phaseOutEnd": null},
		"HH": 	  {"maxValue": 200000, "phaseOutBegin": null, "phaseOutEnd": null},
		"QW": 	  {"maxValue": 250000, "phaseOutBegin": null, "phaseOutEnd": null}
    },    
    
    AdditionalMedicareRate : 0.009,
    
    SingleWeeklyLimits: 		[42, 	214, 	739,	1732,		3566, 		7703,  		7735,		Infinity],
    SingleWeeklyBaseWithold: 		[0,	0,	17.20,	95.95,		344.20,		857.72,		2222.93,	2234.13],    
    
    MarriedWeeklyLimits: 		[160, 	503, 	1554,	2975,		4449, 		7820,  		8813,		Infinity],
    MarriedWeeklyBaseWithold: 		[0, 	0,	34.30,	191.95,		547.20,		959.92,		2072.35,	2419.90],
    
    SingleBiWeeklyLimits: 		[85,	428, 	1479,	3463,		7133, 		15406,  	15469,		Infinity],
    SingleBiWeeklyBaseWithold:		[0,	0,	34.30,	191.95,		687.95,		1715.55,	4445.64,	4467.69],
    
    MarriedBiWeeklyLimits: 		[319, 	1006, 	3108,	5950,		8898, 		15640,  	17627,		Infinity],
    MarriedBiWeeklyBaseWithold: 	[0,	0,	68.70,	384.00,		1094.50,	1919.50,	4144.80,	4840.25],
    
    SingleSemiMonthlyLimits: 		[92,	464, 	1602,	3752,		7727, 		16690,  	16758,		Infinity],
    SingleSemiMonthlyBaseWithold:	[0,	0,	37.20,	207.90,		745.40,		1858.40,	4816.19,	4839.99],
    
    MarriedSemiMonthlyLimits: 		[346,	1090, 	3367,	6446,		9640, 		16944,  	19096,		Infinity],
    MarriedSemiMonthlyBaseWithold:	[0,	0,	74.40,	415.95,		1185.70,	2080.02,	4490.34,	5243.54],
    
    SingleMonthlyLimits: 		[183,	927, 	3204,	7504,		15454, 		33379,  	33517,		Infinity],
    SingleMonthlyBaseWithold:		[0,	0,	74.40,	415.95,		1490.95,	3716.95,	9632.20,	9680.50],
    
    MarriedMonthlyLimits: 		[692,	2179, 	6733,	12892,		19279, 		33888,  	38192,		Infinity],
    MarriedMonthlyBaseWithold: 		[0,	0,	148.70,	831.80,		2371.55,	4159.91,	8980.88,	10487.28],
    
    SingleYearlyLimits: 		[2200,	11125, 	38450,	90050,		185458, 	400550,  	402200,		Infinity],
    SingleYearlyBaseWithold:		[0,	0,	892.50,	4991.25,	17891.25,	44603.25,	115586.25,	116163.75],
    
    MarriedYearlyLimits: 		[8300,	26150, 	80800,	154700,		231350, 	406650,  	458300,		Infinity],
    MarriedYearlyBaseWithold: 		[0,	0,	1785,	9982.50,	28457.50,	49919.50,	107768.50,	125846],
    
    W4TaxBrackets :			[0.00,	0.10, 	0.15, 	0.25, 		0.28, 		0.33, 		0.35, 		0.396],

    W4ExemptionAllowance : 		[75.00, 150.00, 162.50, 325.00, 975.00, 1950.00, 3900.00],
    
    directLookUp: function(lookupTable, filingStatus, agi)
	{
		var detailEntry = lookupTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		if (phaseOutBegin === null && phaseOutEnd === null)
			return maxVal;
			
		if (phaseOutBegin === null) {
			if (agi > phaseOutEnd)
			    return null;
			else
				return maxVal;
		}
		
		if (agi <= phaseOutBegin)
			return null;
		
		if (phaseOutEnd === null)
			return maxVal;
			
		if (agi > phaseOutEnd)
			return null;
			
		return maxVal;
	},
	
		
	calcNormalPhaseOut: function(agi, maxVal, phaseOutBegin, phaseOutEnd) {
		if (phaseOutBegin === null && phaseOutEnd === null)
			return maxVal;
			
		if (phaseOutBegin === null) {
			if (agi > phaseOutEnd)
			    return 0;
			else
				return maxVal;
		}
		
		if (agi <= phaseOutBegin)
			return maxVal;
			
		if (agi > phaseOutEnd)
			return 0;
			
		var phaseOutAmount = (agi - phaseOutBegin) * maxVal / (phaseOutEnd - phaseOutBegin);
			
		return Math.round(maxVal - phaseOutAmount);
	},
	
	calcSimplePhaseOut: function (phaseOutTable, filingStatus, agi) {
		var detailEntry = phaseOutTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		return this.calcNormalPhaseOut(agi, maxVal, phaseOutBegin, phaseOutEnd);
	},

	calcLimitedPhaseOut: function (phaseOutTable, filingStatus, agi, value) {
		var detailEntry = phaseOutTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		return this.calcNormalPhaseOut(agi, Math.min(value, maxVal), phaseOutBegin, phaseOutEnd);
	},
	
	calcStandardDeduction: function (filingStatus, earnedIncome, ageOver65Cnt, claimedAsDependent) {
		var stdDeduct = this.directLookUp(this.StdDeductionTable, filingStatus, 0);
		if (claimedAsDependent === true) {
			if (earnedIncome > 600) {
				stdDeduct = Math.min(stdDeduct, 
								Math.max(this.Dependent_StdDeudctionBase, 
									earnedIncome + this.Dependent_StdDeudctionExtra));
			} else {
				stdDeduct = Math.min(stdDeduct, this.Dependent_StdDeudctionBase);
			}
		} 
		
		var addtionalDeduct = ageOver65Cnt * this.directLookUp(this.ExtraDeductionTable, filingStatus, 0);
		
		return stdDeduct + addtionalDeduct;
	},

	calcDeductibleMedicalExpense: function(filingStatus, agi, medicalExpense, tpAge, spAge) {
    	var tpOrSpOlderThan65 = (tpAge < 65 ? false : true);
    	if (filingStatus === "MFJ") {
			tpOrSpOlderThan65 = tpOrSpOlderThan65 || (spAge < 65 ? false : true);
    	}

    	var rate = 0.10;
    	if (tpOrSpOlderThan65) {
        		rate = 0.075;
    	}

    	var medicalExpenseThreshold = agi * rate;

    	return Math.max(0, medicalExpense - medicalExpenseThreshold);
  	},

  	calcDeductibleEmployeeBusinessExpense: function(agi, employeeBusinessExpense) {
    	var rate = 0.02;
    	var employeeBusinessExpenseThreshold = agi * rate;

    	return Math.max(0, employeeBusinessExpense - employeeBusinessExpenseThreshold);
  	},

  	calcTaxableSocSecIncome: function(filingStatus, totalIncomeOther, totalAdjustment, socSecIncome) {
  		var livedApartFromSpouse = false; // default
  		var line2 = socSecIncome * 0.5;
  		var line3 = totalIncomeOther;
  		var line5 = line2 + line3;
  		var line6 = totalAdjustment;

  		if (line6 >= line5) {
  			return 0;
  		}

  		var line7 = line5 - line6;

  		var line16 = 0;
  		if (filingStatus === "MFS" && !livedApartFromSpouse) {
			line16 = line7 * 0.85;
  		} else {
 	  		var detailEntry = this.SocSecIncomeDeductionTable[filingStatus];
			var phaseOutBegin = detailEntry["phaseOutBegin"];
			var phaseOutEnd = detailEntry["phaseOutEnd"];
	  		
	  		if (line7 < phaseOutEnd) {
  				return 0;
  			}

  			var line9 = line7 - phaseOutEnd;
  			var line11 = Math.max(0, line9 - phaseOutBegin);
  			var line12 = Math.min(line9, phaseOutBegin);
  			var line13 = line12 * 0.5;
  			var line14 = Math.min(line2, line13);
  			var line15 = line11 * 0.85;
  			line16 = line14 + line15;
  		}

  		var line17 = socSecIncome * 0.85;
  		var line18 = Math.min(line16, line17);

  		return line18;
  	},
	
	calcItemizedDeduction: function (filingStatus, agi, totalItemization, deductibleMedicalExpense) {
		var base = this.directLookUp(this.ItemizedDeductionTable, filingStatus, agi);
		if (base === null) {
			return totalItemization;
		}
		
		var modifiedItemizedDeduction = (totalItemization - deductibleMedicalExpense);
		var maxPhaseOutAmount = (agi - base) * 0.03;
		
		var phaseoutAmount = Math.min(modifiedItemizedDeduction*0.80, maxPhaseOutAmount);
		
		return (totalItemization - phaseoutAmount);
	},
	
	calcExemption: function (filingStatus, agi, peopleCnt, claimedAsDependent) {
		if (claimedAsDependent) {
			return 0;
		}
		var detailEntry = this.ExemptionTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
//		var phaseOutEnd = detailEntry["phaseOutEnd"];
		var interval = (filingStatus === "MFS" ? 1250 : 2500);
		
		if (agi > phaseOutBegin) {
			var percentPhaseout = Math.ceil((agi - phaseOutBegin) / interval) * 0.02;
			return Math.ceil(maxVal * (1 - Math.min(1, percentPhaseout)) * peopleCnt);
		} else {
			return  maxVal* peopleCnt;
		}
	},
	
	maxTaxCreditPerChild: function (filingStatus, agi) {
		return this.calcSimplePhaseOut(this.ChildTaxCreditTable, filingStatus, agi);
	},
	
	calcChildTaxCredit: function (filingStatus, agi, childCnt) {
		if (childCnt <= 0) return 0;
		
		var detailEntry = this.ChildTaxCreditTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
//		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		if (agi > phaseOutBegin) {
			var roundUptoNext1000 = Math.ceil((agi - phaseOutBegin)/1000) * 1000;
			var phaseOutAmt = roundUptoNext1000 * 0.05;
			return Math.max(maxVal* childCnt - phaseOutAmt, 0);
		} else {
			return  maxVal* childCnt;
		}
	},

    calcAdditionalChildTaxCredit: function (filingStatus, earnedIncome, childCnt, unAllowedChildTaxCredit) {
            if (childCnt <= 0) return 0;

            var detailEntry = this.ChildTaxCreditTable[filingStatus];
            // var maxVal = detailEntry["maxValue"];
            var phaseOutBegin = detailEntry["phaseOutBegin"];

            if (earnedIncome > phaseOutBegin) {
		return 0.0;
            } else {
		var earnedIncomeOverBase = 
			Math.max(0, earnedIncome -  this.AdditionalChildTaxEarnedIncomeBase);
                    return  Math.min(unAllowedChildTaxCredit, earnedIncomeOverBase * 0.15);
            }
    },	
	
	maxHopeCreditPerStudent: function (filingStatus, agi) {
		return this.calcSimplePhaseOut(this.HopeCreditTable, filingStatus, agi);
	},
	
	calcHopeCredit: function (filingStatus, agi, educationExpense, age, claimedAsDependent) {

		if (age < 24 && claimedAsDependent === true) {
			return 0;
		}

		var detailEntry = this.HopeCreditTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		var tempExpense = Math.min(educationExpense, 4000);
		var maxAllowedExpense = tempExpense;
		if (maxAllowedExpense > 2000) {
			maxAllowedExpense = 2000 + (maxAllowedExpense-2000) * 0.25;
		}
		
		var creditWithPhaseout = this.calcNormalPhaseOut(agi, maxAllowedExpense, phaseOutBegin, phaseOutEnd);
		return Math.min(maxVal, creditWithPhaseout);
	},
	
	maxLifetimeLearningCreditPerStudent: function (filingStatus, agi) {
		return this.calcSimplePhaseOut(this.LifetimeLearningCreditTable, filingStatus, agi);
	},
	
	calcLifetimeLearningCredit: function (filingStatus, agi, educationExpense, age, claimedAsDependent) {

		if (age < 24 && claimedAsDependent === true) {
			return 0;
		}

		var detailEntry = this.LifetimeLearningCreditTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		var tempExpense = Math.min(educationExpense, 10000);
		var maxAllowedExpense = tempExpense * 0.20;
		
		var creditWithPhaseout = this.calcNormalPhaseOut(agi, maxAllowedExpense, phaseOutBegin, phaseOutEnd);
		return Math.min(maxVal, creditWithPhaseout);
	},
	
	calcQualifiedDividendsOrCapitalGainBracket: function (filingStatus, agi) {
		var percentTaxable = this.directLookUp(this.QualifiedDividendOrCapitalGain0PercentTable, filingStatus, agi);
		if (percentTaxable === null) {
			percentTaxable = this.directLookUp(this.QualifiedDividendOrCapitalGain15PercentTable, filingStatus, agi);
		}
		if (percentTaxable === null) {
			percentTaxable = this.directLookUp(this.QualifiedDividendOrCapitalGain20PercentTable, filingStatus, agi);
		}
		if (percentTaxable === null) {
			return 0;
		}
		return percentTaxable*100;
	},
	
	maxEducationInterestDeduction: function (filingStatus, agi) {
		return this.calcSimplePhaseOut(this.EducationInterestDeductionTable, filingStatus, agi);
	},
	
	calcEducationInterestDeduction: function (filingStatus, agi, educationInterestsPaid) {
		var educationInterestedDeduction = this.calcLimitedPhaseOut(this.EducationInterestDeductionTable, filingStatus, agi, educationInterestsPaid);
		return educationInterestedDeduction;
	},

	maxIRAContribLimit: function (age) {
		var maxVal = 5500;
		if (age >= 50)
			maxVal = 6500;
		return maxVal;
	},
	
	maxIRAContributionPerPerson: function (filingStatus, agi, age, allParticipated) {
		var maxVal = this.maxIRAContribLimit(age);
		
		var detailEntry = this.IraDeductionAllParticipatedTable[filingStatus];
		if (!allParticipated) {
			detailEntry = this.IraDeductionOneParticipatedTable[filingStatus];
		}
	
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];
		
		return this.calcNormalPhaseOut(agi, maxVal, phaseOutBegin, phaseOutEnd);
	},
	
	// calcIRAContributionPerPerson: function (filingStatus, agi, age, allParticipated, contribution, earnedIncome) {
	// 	if (age > 70)
	// 		return 0;
	// 	var maxIRAContribution = this.maxIRAContributionPerPerson(filingStatus, agi, age, allParticipated);
	// 	maxIRAContribution = Math.min(earnedIncome, maxIRAContribution);

	// 	return Math.min(contribution, maxIRAContribution);
	// },

	calcIRAContributionPerPerson: function (filingStatus, age, agi, totalEarnedIncome, alimonyReceived, participated, contribution)
	{	
		if (age > 70.5) {
			return 0;
		}

		var line1a = participated;

		var skipLine2ToLine6 = false;
		var line7a = 0;
		if (filingStatus == "MFJ") {
			if (line1a === false && line2a === false) {
				if (age < 50) {
					line7a = 5500;
				} else {
					line7a = 6500;
				}
				skipLine2ToLine6 = true;
			}
		} else {
			if (line1a === true ) {
				if (age < 50) {
					line7a = 5500;
				} else {
					line7a = 6500;
				}
				skipLine2ToLine6 = true;
			}
		}
		
		if (!skipLine2ToLine6) {
			var line2a = 0;
			if (filingStatus == "MFJ") {
				if (!line1a) {
					line2a = 188000;
				} else {
					line2a = 115000;
				}
			} else if (filingStatus == "QW") {
				line2a = 115000;
			} else {
				line2a = 69000;
			}

			// var line3 = totalIncome;
			// var line4 = totalAdjustment;
			var line5a = agi;

			if (line5a > line2a) {
				return 0;
			}

			var line6a = line2a - line5a;

			if (filingStatus == "SINGLE" || filingStatus == "HH" || filingStatus == "MFS")  {
				if (line6a >= 10000) {
					if (age < 50) {
						line7a = 5500;
					} else {
						line7a = 6500;
					}
				}
			} else if (filingStatus == "MFJ" || filingStatus == "QW") {
				if (line6a >= 20000) {
					if (age < 50) {
						line7a = 5500;
					} else {
						line7a = 6500;
					}
				}
			}
		} 

		var percentageAllowed = 0;
		if (line7a == 0) {
			if (filingStatus == "SINGLE" || filingStatus == "HH" || filingStatus == "MFS") {
				if (age < 50) {
					percentageAllowed = 0.55;
				} else {
					percentageAllowed = 0.65;
				}
			} else if (filingStatus == "MFJ" || filingStatus == "QW") {
				if (line1a) {
					if (age < 50) {
						percentageAllowed = 0.275;
					} else {
						percentageAllowed = 0.325;
					}
				} else {
					if (age < 50) {
						percentageAllowed = 0.55;
					} else {
						percentageAllowed = 0.65;
					}
				}
			} 
		
			line7a = line6a * percentageAllowed;

			line7a = Math.ceil(line7a / 10.0) * 10;  // make this a utility function

			line7a = Math.max(200, line7a); 	

			// adjust to the next $10
		}

		// var line8 = totalWages + alimonyRecieved;

		// var line9 = totalSEEarnedIncome;

		var line10 = totalEarnedIncome + alimonyReceived;

		var line11a = contribution;

		var line12a = Math.min(line7a, line10, line11a);

		return line12a;

	},
	
	adjustIncomeForCrazyIRS: function (taxableIncome) {
	    if (taxableIncome < 100000 && taxableIncome > 0) {
	      if (taxableIncome > 2999) {  
	      	var remainder = taxableIncome % 50;
	        var roundedBeforeAdjustment = taxableIncome - remainder;
	        return roundedBeforeAdjustment + 25;
	      } else if (taxableIncome > 24) {
	      	var remainder =  taxableIncome % 25;
	      	var roundedBeforeAdjustment =  taxableIncome - remainder;
	        return roundedBeforeAdjustment + 12.5;
	      } else if (taxableIncome > 14) {
	      	return 20;
	      } else if (taxableIncome > 4) {
	      	return 10;
	      } else {
	      	return 2.5;
	      }
	    }
	    
	    return taxableIncome;
	  },
	
	calcEarnedIncomeCredit: function (filingStatus, earnedIncome, tpAge, spAge, claimedAsDependent, childCnt, totalInvestmentIncome) {

		if (claimedAsDependent || totalInvestmentIncome >= this.EicInvestmentLimit) {
			return 0;
		}

		if (childCnt == 0) {
			if (filingStatus === "MFJ") {
				if ((tpAge < 25 || tpAge > 64) && (spAge < 25 || spAge > 64)) {
					return 0;
				}
			} else {
				if (tpAge < 25 || tpAge > 64) {
					return 0;
				}
			}
		}

		var phaseOutTable;
		var creditRate;
		var phaseOutRate;
		
		if (childCnt === 0) {
			phaseOutTable = this.EicNoChildrenTable;
			creditRate = 0.0765;
			phaseOutRate = 0.0765;
		} else if (childCnt == 1) {
			phaseOutTable = this.EicOneChildrenTable;
			creditRate = 0.34;
			phaseOutRate = 0.1598;
		} else if (childCnt == 2) {
			phaseOutTable = this.EicTwoChildrenTable;
			creditRate = 0.40;
			phaseOutRate = 0.2106;
		} else {
			phaseOutTable = this.EicThreeChildrenTable;
			creditRate = 0.45;
			phaseOutRate = 0.2106;
		}
		
		var detailEntry = phaseOutTable[filingStatus];
		var maxVal = detailEntry["maxValue"];
		var phaseOutBegin = detailEntry["phaseOutBegin"];
		var phaseOutEnd = detailEntry["phaseOutEnd"];

		var adjustedAGI = this.adjustIncomeForCrazyIRS(earnedIncome);
		if (adjustedAGI >= phaseOutEnd) {
			return 0;
		}
		var maxValMidPoint = this.adjustIncomeForCrazyIRS(maxVal);
		var phaseOutEndMidPoint = this.adjustIncomeForCrazyIRS(phaseOutEnd);
		
		if (adjustedAGI === maxValMidPoint) {
			adjustedAGI = maxVal;
		} else if (adjustedAGI === phaseOutEndMidPoint) {
			adjustedAGI = phaseOutEnd;
		} 

		var lowThresh = Math.floor(phaseOutEnd/50) * 50;
		if (earnedIncome >= lowThresh && earnedIncome < phaseOutEnd) {
			if (childCnt === 0) {
				return 1;
			} else if (childCnt == 1) {
				return 4;
			} else {
				return 5;
			} 
		}
		
		var maxEIC = Math.floor(creditRate * Math.min(adjustedAGI, maxVal));
	
		return Math.ceil(maxEIC -  phaseOutRate * Math.max(0, adjustedAGI - phaseOutBegin));
	},
	
	maxDependentCareCredit: function (agi, lowerEarnedIncome, childCnt) {

		return this.calcDependentCareCredit(agi, childCnt, lowerEarnedIncome, lowerEarnedIncome);
	},
	
	calcDependentCareCredit: function (agi, childCnt, dependentCareExpense, lowerEarnedIncome) {
	
		var adjChildCnt = Math.min(2, childCnt);	
		var expenseLimit = Math.min(3000 * adjChildCnt, dependentCareExpense);
		expenseLimit = Math.min(expenseLimit, lowerEarnedIncome);
		
		var adjustRatio = 0.2;
		if (agi <= 15000) {
			adjustRatio = 0.35;
		} else {
			if (agi <= 43000) {
				adjustRatio = 0.34 - Math.floor((agi - 15000) / 2000) * 0.01;
			}
		}
		
		return Math.ceil(expenseLimit * adjustRatio);
	},
	

	  
	calcRegularTaxBracket: function (filingStatus, taxableIncome) {
   
	    var adjTaxableIncome = this.adjustIncomeForCrazyIRS(taxableIncome);
	    
	    var limits = [];
	    var percents = this.TaxBrackets;
	    
	    switch (filingStatus) {
	      case "SINGLE":
	        limits = this.SingleUpperLimits;    
	        break;
	      case "MFJ":
	        limits = this.MfjUpperLimits;
	        break;
	      case "MFS":
	        limits = this.MfsUpperLimits;
	        break;
	      case "HH":
	        limits = this.HhUpperLimits;
	        break;
	      case "QW":
	        limits = this.MfjUpperLimits;
	        break;
	    }
	    
	    for (var i=0; i < limits.length; i++) {
	      if (adjTaxableIncome <= limits[i]) {        
	        return Math.ceil(percents[i]*1000)    /10;
	      }
	    }
	    
	    return 0;
  	},
  
	calcRegularTax: function (filingStatus, taxableIncome) {
   
	    var adjTaxableIncome = this.adjustIncomeForCrazyIRS(taxableIncome);
	    
	    var limits = [];
	    var percents = this.TaxBrackets;
	    var deltas = [];
	    
	    switch (filingStatus) {
	      case "SINGLE":
	        limits = this.SingleUpperLimits;    
	        deltas = this.SingleDeltas;
	        break;
	      case "MFJ":
	        limits = this.MfjUpperLimits;
	        deltas = this.MfjDeltas;
	        break;
	      case "MFS":
	        limits = this.MfsUpperLimits;
	        deltas = this.MfsDeltas;
	        break;
	      case "HH":
	        limits = this.HhUpperLimits;
	        deltas = this.HhDeltas;
	        break;
	      case "QW":
	        limits = this.MfjUpperLimits;
	        deltas = this.MfjDeltas;
	        break;
	    }
	    
	    for (var i=0; i < limits.length; i++) {
	      if (adjTaxableIncome <= limits[i]) {
	        // Remove the income that was already taxed by the delta
	        var taxAmountBeforeDelta =  adjTaxableIncome * percents[i];
	        var finalTaxAmount = Math.max(0, taxAmountBeforeDelta - deltas[i]);
	        
	        return Math.floor(finalTaxAmount+0.5);
	      }
	    }

  },
  
  calcWithholding: function (married, taxableIncome, payPeriod, exemptionCnt) {
		   
	    var adjTaxableIncome = taxableIncome;
	    
	    var limits = [];
	    var percents = this.W4TaxBrackets;
	    var baseWithholdings = [];
	    var exemptionPerPerson = 0;
	    
	    switch (payPeriod) {
	      case "Weekly":
		  exemptionPerPerson = this.W4ExemptionAllowance[0]; 
	    	  if (!married) {
	    		  limits = this.SingleWeeklyLimits;    
	    		  baseWithholdings = this.SingleWeeklyBaseWithold;
	    	  } else {
	    		  limits = this.MarriedWeeklyLimits;    
	    		  baseWithholdings = this.MarriedWeeklyBaseWithold;	    		  
	    	  }
	        break;
	      case "Bi-Weekly":
		  exemptionPerPerson = this.W4ExemptionAllowance[1]; 
	    	  if (!married) {
	    		  limits = this.SingleBiWeeklyLimits;    
	    		  baseWithholdings = this.SingleBiWeeklyBaseWithold;
	    	  } else {
	    		  limits = this.MarriedBiWeeklyLimits;    
	    		  baseWithholdings = this.MarriedBiWeeklyBaseWithold;	    		  
	    	  }
	        break;
	      case "Semi-Monthly":
		  exemptionPerPerson = this.W4ExemptionAllowance[2]; 
	    	  if (!married) {
	    		  limits = this.SingleSemiMonthlyLimits;    
	    		  baseWithholdings = this.SingleSemiMonthlyBaseWithold;
	    	  } else {
	    		  limits = this.MarriedSemiMonthlyLimits;    
	    		  baseWithholdings = this.MarriedSemiMonthlyBaseWithold;	    		  
	    	  }
	        break;
	      case "Monthly":
		  exemptionPerPerson = this.W4ExemptionAllowance[3]; 
	    	  if (!married) {
	    		  limits = this.SingleMonthlyLimits;    
	    		  baseWithholdings = this.SingleMonthlyBaseWithold;
	    	  } else {
	    		  limits = this.MarriedMonthlyLimits;    
	    		  baseWithholdings = this.MarriedMonthlyBaseWithold;	    		  
	    	  }
	        break;
	      case "Yearly":
		  exemptionPerPerson = this.W4ExemptionAllowance[6]; 
	    	  if (!married) {
	    		  limits = this.SingleYearlyLimits;    
	    		  baseWithholdings = this.SingleYearlyBaseWithold;
	    	  } else {
	    		  limits = this.MarriedYearlyLimits;    
	    		  baseWithholdings = this.MarriedYearlyBaseWithold;	    		  
	    	  }
	    }
	    
	    adjTaxableIncome = Math.max(0, adjTaxableIncome - exemptionPerPerson * exemptionCnt);

	    for (var i=0; i < limits.length; i++) {
	      if (adjTaxableIncome <= limits[i]) {
	    	var incomeBase = 0;
	    	if (i>0) {
	    		incomeBase = limits[i-1];
	    	}
	        var baseWithholding =  baseWithholdings[i];
	        var withholdingAmt = Math.floor(baseWithholding + (adjTaxableIncome - incomeBase) * percents[i]);
	        
	        return Math.max(withholdingAmt);
	      }
	    }

	    return 0;
  },
  
  calcTaxWithAMT: function (filingStatus, amtTaxableIncome, amtRateChangeLimit) {
  
	var taxWithAmt = 0;
	if (filingStatus === "MFS")
    {
      if (amtTaxableIncome < amtRateChangeLimit) {
        taxWithAmt = amtTaxableIncome * 0.26;
      } else {
        taxWithAmt = amtTaxableIncome * 0.28 - 1795;
      }	
    } else {
      if (amtTaxableIncome < amtRateChangeLimit) {
        taxWithAmt = amtTaxableIncome * 0.26;
      } else {
        taxWithAmt = amtTaxableIncome * 0.28 - 3590;
      }				
    }
    return Math.floor(taxWithAmt);
  },
  
  calcAMT: function (filingStatus, agi, standardDeduction, deduction, realEstateTax, normalTax, longTermCapGains) {
  
    var amti = 0;
    if (deduction > standardDeduction) {
      amti = agi - deduction + realEstateTax;
    } else {
      amti = agi;
    }
  	
  	var detailEntry = this.AmtExemptionTable[filingStatus];
  	var amtExemption = detailEntry["maxValue"];

	detailEntry = this.AmtPhaseoutTable[filingStatus];
	var amtLimit = detailEntry["phaseOutBegin"];
	var amtRateChangeLimit = detailEntry["maxValue"];
    
    var adjustedExemption = amtExemption;
    if (amti > amtLimit) {
      var amountAboveLimit = amti - amtLimit;
      var beforeExemption = amountAboveLimit * 0.25;
      adjustedExemption = Math.max(0,  amtExemption - beforeExemption);
    }
    
    var incomeAfterAmtExemption = amti - adjustedExemption;  
    var taxWithAmt = 
    		this.calcTaxWithAMT(filingStatus, incomeAfterAmtExemption, amtRateChangeLimit);	
    
	if (longTermCapGains > 0) {
		var line39 = 0;
		var line41 = Math.min(incomeAfterAmtExemption, longTermCapGains);
		var line42 = incomeAfterAmtExemption - line41;
		var line43 = this.calcTaxWithAMT(filingStatus, line42, amtRateChangeLimit);	
		var amtInvestmentLimitEntry = this.QualifiedDividendOrCapitalGain0PercentTable[filingStatus];
		var line44 = amtInvestmentLimitEntry["phaseOutEnd"];
		var line45 = incomeAfterAmtExemption - longTermCapGains;
		var line46 = Math.max(0, line44 - line45);
		var line47 = Math.min(incomeAfterAmtExemption, longTermCapGains);
		var line48 = Math.min(line46, line47);
		var line49 = line47 - line48;
		var line50 = Math.floor(line49 * 0.15);
		var line51 = 0;
		var line52 = 0;
		if (line39 != 0) {
			line51 = line41 - line47;
			line52 = line51 * 0.25;
		}
		var line53 = line43 + line50 + line52;
		taxWithAmt = Math.min(line53, taxWithAmt);
	}
    
    return Math.max(0, taxWithAmt - normalTax);
  },	
  
  calcSETax : function (seIncome, salaryIncome) {
  
  	var adjustedNetEarning = seIncome * 0.9235;
  	if (adjustedNetEarning < 400)
  		return 0;
  		
  	var ficaTax = 0;
  	if (salaryIncome < this.SeTaxWagesLimit) {
  		var diff = this.SeTaxWagesLimit - salaryIncome;
  		ficaTax = Math.min(diff, adjustedNetEarning) * this.FicaRate;
  	}
  	var medicareTax = adjustedNetEarning * this.MedicareRate;
  	
  	return Math.floor(ficaTax + medicareTax);
  },
  
  calcHalfSETax: function (seTax) {
  	
  	var halfSETax = seTax * 0.5;
  	
  	return Math.ceil(halfSETax);
  },
    
  calcNetInvestmentTax: function (filingStatus, agi, interest, dividend, capitalGain) {
  	
  	var totalInvestment = interest + dividend + Math.max(0.0, capitalGain);

  	var base = this.directLookUp(this.NitInvestmentLimitTable, filingStatus, 0);
	
	var offset = Math.max(0.0, agi - base);
	
	var netInvestmentGain = Math.min(totalInvestment, offset);
	
	return Math.floor(netInvestmentGain * this.NitInvestmentRate); 
  },

  calcAdditionalMedicareTax: function (filingStatus, agi, tpMedicareWages, spMedicareWages, tpBusinessIncome, spBusinessIncome) {
  	
  	var totalMedicareWages = tpMedicareWages;
  	if (filingStatus === "MFJ")
  		totalMedicareWages = tpMedicareWages + spMedicareWages;
  		
  	var base = this.directLookUp(this.AdditionalMedicareLimitTable, filingStatus, 0);
  	var offset = totalMedicareWages - base;
  	
  	var totalBusinessIncome = tpBusinessIncome;
  	if (filingStatus === "MFJ")
  		totalBusinessIncome = tpBusinessIncome + spBusinessIncome;
  		
  	var line9 = Math.min(0.0, offset);
  	var line10 = totalBusinessIncome + line9;
  	
  	var line11 = Math.max(0.0, offset);
  	var line12 = Math.max(0.0, line10 + line11);
  	
  	var line13 = line12 * this.AdditionalMedicareRate;
  	
  	var line14 = Math.max(0.0, tpMedicareWages - 200000);
  	var line15 = Math.max(0.0, spMedicareWages - 200000);
  	
  	var line16 = line14;
  	if (filingStatus === "MFJ") {
  		line16 = line14 + line15;
  	}
  	
  	var line17 = line16 * this.AdditionalMedicareRate;
	
	return Math.floor(Math.max(0.0, line13 - line17)); 
  }
	  
 };
 
 
var TaxReturn = {

  TaxCalc: TaxCalc2013,

  taxYear: "2013",
  filingStatus: "SINGLE", 		// 1: SINGLE, 2: MFJ, 3: MFS, 4: HH, 5 QW
  tpAge: 0,
  spAge: 0,
  claimedAsDependent: false,

  qualifiedDependents: 	0, 		// total dependents
  dependentsUnder13: 	0,		// total children under 13 for dependent care
  dependentsUnder17: 	0,		// total children under 17 (qualified for Child Tax Credit and EIC
  studentsBetween17And24:   0,		// full-time student dependents between 17 and 24, qualified for EIC


  tpTaxableWages: 0,			// tp taxable wages (excluding pre-tax deduction:401K, HSA, FSA)
  spTaxableWages: 0,			// sp taxable wages (excluding pre-tax deduction:401K, HSA, FSA)

  tpWithholdings: 0,			// tp federal withholdings
  spWithholdings: 0,			// sp federal withholdings
  
  tpStateWithholdings: 0,		// tp state withholdings
  spStateWithholdings: 0,		// sp state withholdings

  tpUnEmploymentIncome: 0,		// tp unemployment income
  spUnEmploymentIncome: 0,		// sp unemployment income

  
  estimatedFedTaxPaid: 0,		// estimated fed tax payments
  estimatedStateTaxPaid: 0,		// estimated state tax payments
  
  tp401kContribution: 0,		// tp 401K contribution 
  sp401kContribution: 0,		// sp 401K contribution

  ret401kContribution: 0,		// total 401 K contribution
  max401kContribution: 0,		// maximum 401K contribution allowed
  ret401KContribPercent: 0,		// percentage of 401K contribution of salary
  
  hsa: 0,				// HSA contribution for healthcare
  fsaContribution: 0,			// Flexible Spending Account for childcare

  tpIraContribution: 0,			// IRA contribution
  spIraContribution: 0,			// IRA contribution
  // allParticipated: true,		// both participated in plan  -- TODO: to handle MFS
  tpParticipated: true,
  spParticipated: true,			
  iraDeductions: 0,			// IRA Deductinos

  tpIraContribLimit: 0,			// IRA Contribution Limit (by age) for taxpayer
  spIraContribLimit: 0,			// IRA Contribution Limit (by age) for spouse

  tpBusinessIncome: 0,			// tp business income
  spBusinessIncome: 0,			// sp business income
  
  tpEarnedIncome: 0,			// tp earned income
  spEarnedIncome: 0,			// sp earned income
  lowerEarnedIncome: 0,			// lower of tp/sp earned income
  
  tpSETax: 0,				// tp: half of self employment tax
  spSETax: 0,				// sp: half of self employment tax
  
  tpHalfSETax: 0,			// tp: half of self employment tax
  spHalfSETax: 0,			// sp: half of self employment tax

  totalIncome: 0,			// total income (before adjustment)
  incomeAdjustment: 0,		// income adjustment
  agi: 0,					// Adjusted Gross Income

  taxableInterest: 0,			// interest
  qualifiedDividends: 0,		// qualified dividends
  ordinaryDividends: 0,			// ordinary dividends
  longTermCapGainOrLoss: 0,		// long term investment gain or loss
  shortTermCapGainOrLoss: 0,		// short term investment gain or loss
  iraDistribution: 0,			// IRA distribution
  socSecIncome: 0,			// Social Security income
  taxableSocSecIncome: 0,
  alimonyReceived: 0,			// Alimony Received
  otherIncome: 0,			// other income: misc, ...

  capitalGainLossNormal: 0, 		// investment gain or loss, subject to normal tax rate
  longTermCapitalGain: 0,		// long term gain subject to lower capital gain tax rate
  capitalGainTaxBracket: 0,		// capital gain tax bracket for lower capital gain tax rate, percentage


  dependentCareExpense: 0,		// dependent care expense
  educationExpense: 0,			// education expense: tuition/fees
  eligibleForHope: true,		// first 4 year of college
  studentLoanInterests: 0,		// student load interest paid

  studentLoanInterestDeduction: 0, 	// deductible student loan interest
  iraDeductions: 0,			// total IRA deductions

  mortgageInterest: 0,			// mortgage interest paid, for itemization
  realEstateTax: 0,			// real estate tax paid, for itemization
  charitableDonation: 0,		// charitable donation, for itemization
  stateTaxWitholdings: 0,		// state tax withhold, for itemization

  medicalExpenses: 0, 			// medical expenses, for itemization (subject to 7.5% of agi floor)
  alimonyPaid: 0,			// alimony paid
  employeeBusinessExpense: 0,		// unreimbursed business expense

  itemizedDeduction: 0,

  dependentCareCredit: 0,		// dependent care credit
  childTaxCredit: 0,			// child tax credit (including additional child tax credit
  educationCredit: 0,			// education credit
  eic: 0,				// earned income credit
  totalCredits: 0,

  standardDeduction: 0,			// standard deduction
  totalDeductions: 0,			// total deductions (standard or itemized deduction)
  totalExemptions: 0,			// total exemptions
  totalDeductionAndExemptions: 0, 	// deduction and exemption combined, reduce taxable income

  taxableIncome: 0,			// taxable income (before tax table lookup)
  normalTax: 0,				// tax table lookup for normal taxable income
  
  taxableIncomeExcludeQualifiedDivAndCapGain: 0, // taxable income excluding qualified dividends and long-term capital gains
  longTermCapGainTax: 0,		// long term capital gain/qualified dividend tax
  taxWithQualifiedDivAndCapGain: 0, 	// tax with consideration of qualified dividend and long-term capital gains
  
  regularTax: 0,			// regular tax after tax tabel lookup
  regularTaxBracket: 0,			// tax bracket

  amt: 0,				// alternative minimum tax

  netInvestmentTax: 0,			// new 2013: net investment tax
  additionalMedicareTax: 0,		// new 2013: additional medicare tax
  
  additionalTax: 0,			// additional taxes
  
  totalTax: 0,				// total tax liability
  
  totalPayments: 0,			// federal tax paid: withholdings + estimated tax paid
    
  refund: 0,				// refund or owe
  
  halfSETaxCalc: function() {
  	this.tpSETax = this.TaxCalc.calcSETax(this.tpBusinessIncome, this.tpTaxableWages);
  	this.tpHalfSETax = this.TaxCalc.calcHalfSETax(this.tpSETax);
  	
  	if (this.filingStatus === "MFJ") {
  		this.spSETax = this.TaxCalc.calcSETax(this.spBusinessIncome, this.spTaxableWages);
  		this.spHalfSETax = this.TaxCalc.calcHalfSETax(this.spSETax);
  	} else {
  	  	this.spSETax = 0;
  		this.spHalfSETax = 0;
  	}
  },
  
  earnedIncomeCalc: function() {
  	this.halfSETaxCalc();
	this.tpEarnedIncome = Math.max(0.0, this.tpTaxableWages + this.tpBusinessIncome - this.tpHalfSETax);
  	
  	if (this.filingStatus === "MFJ") {
  		this.spEarnedIncome = Math.max(0.0, this.spTaxableWages + this.spBusinessIncome - this.spHalfSETax);	
  		this.lowerEarnedIncome = Math.max(0, Math.min(this.tpEarnedIncome, this.spEarnedIncome));	
  	} else {
  		this.spEarnedIncome = 0;
  		this.lowerEarnedIncome = Math.max(0, this.tpEarnedIncome);	
  	}		
  },

  agiCalc: function() {
    var totalOtherIncome = this.otherIncome + this.iraDistribution 
				+ this.taxableSocSecIncome + this.alimonyReceived + this.tpUnEmploymentIncome;
	if (this.filingStatus === "MFJ") {
    	totalOtherIncome = totalOtherIncome + this.spUnEmploymentIncome;
    }
    var tpTotalIncome = this.tpTaxableWages + this.tpBusinessIncome;
    var spTotalIncome = 0;
    if (this.filingStatus === "MFJ") {
    	spTotalIncome = this.spTaxableWages + this.spBusinessIncome;
    }

    this.totalIncome = tpTotalIncome + spTotalIncome + this.taxableInterest + this.qualifiedDividends
      			+ this.capitalGainLossNormal + this.longTermCapitalGain + totalOtherIncome
      			- this.ret401kContribution - this.fsaContribution;

    this.incomeAdjustment =  this.tpHalfSETax + this.studentLoanInterestDeduction + this.iraDeductions + this.alimonyPaid;
    if (this.filingStatus === "MFJ") {
    	this.incomeAdjustment = this.incomeAdjustment + this.spHalfSETax;
    }

    var agiTemp = this.totalIncome - this.incomeAdjustment;

    this.agi = Math.max(0, agiTemp);
  },

  itemizedDeductionCalc: function(deductibleMedicalExpense, deductibleEmployeeBusinessExpense) {
    if (this.filingStatus === "MFJ") {
        this.stateTaxWitholdings = this.tpStateWithholdings + this.spStateWithholdings + this.estimatedStateTaxPaid;
    } else {
        this.stateTaxWitholdings = this.tpStateWithholdings + this.estimatedStateTaxPaid;
    }
    this.itemizedDeduction = this.mortgageInterest + this.realEstateTax +
      this.charitableDonation + this.stateTaxWitholdings + deductibleMedicalExpense + deductibleEmployeeBusinessExpense;
  },

  totalDeductionAndExemptionsCalc: function() {
    this.totalDeductionAndExemptions =  this.totalDeductions + this.totalExemptions;
  },

  longTermCapGainTaxCalc: function() {
    var longTermCapGainTaxTemp = (this.qualifiedDividends + this.longTermCapitalGain) * this.capitalGainTaxBracket / 100;
    this.longTermCapGainTax = Math.ceil(longTermCapGainTaxTemp);
  },

  totalTaxCalc: function() {
  	this.totalAdditioanlTaxCalc();
    this.totalTax = this.regularTax + this.amt + this.additionalTax;
  },

  totalAdditioanlTaxCalc: function() {
    this.additionalTax = this.netInvestmentTax + this.additionalMedicareTax;
    if (this.filingStatus === "MFJ") {
    	this.additionalTax = this.netInvestmentTax + this.additionalMedicareTax + this.tpSETax + this.spSETax;
  	} else {
  		this.additionalTax = this.netInvestmentTax + this.additionalMedicareTax + this.tpSETax;
	}
  },

  totalCreditsCalc: function() {
    this.totalCredits = this.dependentCareCredit + this.childTaxCredit +
      this.educationCredit + this.eic;
  },
  
  totalPaymentCalc: function() {
    if (this.filingStatus === "MFJ") {
  		this.totalPayments = this.tpWithholdings + this.spWithholdings + this.estimatedFedTaxPaid;
  	} else {
  		this.totalPayments = this.tpWithholdings + this.estimatedFedTaxPaid;
	}
  },

  refundCalc: function() {
    this.refund = this.totalCredits + this.totalPayments - this.totalTax;
  },
  
  capitalGainCalc: function() {
    var lossLimit = -3000;
    if (this.filingStatus === "MFS")
    	lossLimit = -1500;
    this.capitalGainLossNormal = this.longTermCapGainOrLoss + this.shortTermCapGainOrLoss;
    this.longTermCapitalGain = 0;

    if (this.capitalGainLossNormal < 0) {
      this.capitalGainLossNormal = Math.max(lossLimit, this.capitalGainLossNormal);
    } else {
      if (this.shortTermCapGainOrLoss < 0) {
        // all long term gain
        this.longTermCapitalGain = this.capitalGainLossNormal;
        this.capitalGainLossNormal = 0;
      } else {
        if (this.longTermCapGainOrLoss < 0) {
          // all short term gain
        } else {
          this.longTermCapitalGain = this.longTermCapGainOrLoss;
          this.capitalGainLossNormal = this.shortTermCapGainOrLoss;
        }
      }
    }
  },
  
   	
  calcTax: function() {

  	this.tpAge = this.tpAge || 0;
  	this.spAge = this.spAge || 0;

  	this.studentLoanInterestDeduction = 0;
	this.iraDeductions = 0;
	this.taxableSocSecIncome = 0;

	this.earnedIncomeCalc();
	
	this.capitalGainCalc();

    this.agiCalc();

    this.taxableSocSecIncome = this.TaxCalc.calcTaxableSocSecIncome(this.filingStatus, this.totalIncome, this.incomeAdjustment,  this.socSecIncome);

    this.agiCalc();

    this.tpIraContribLimit = this.TaxCalc.maxIRAContribLimit(this.tpAge);
    this.spIraContribLimit = this.TaxCalc.maxIRAContribLimit(this.spAge);

    var tpIraContributionDeduction = this.TaxCalc.calcIRAContributionPerPerson(this.filingStatus,
    			this.tpAge, this.agi, this.tpEarnedIncome + this.spEarnedIncome, 
    			this.alimonyReceived, this.tpParticipated, this.tpIraContribution, this.spParticipated);

    var spIraContributionDeduction = this.TaxCalc.calcIRAContributionPerPerson(this.filingStatus,
    			this.spAge, this.agi, this.tpEarnedIncome + this.spEarnedIncome, 
    			this.alimonyReceived, this.spParticipated, this.spIraContribution, this.tpParticipated);

    this.iraDeductions = tpIraContributionDeduction+spIraContributionDeduction;
    this.studentLoanInterestDeduction = this.TaxCalc.calcEducationInterestDeduction(this.filingStatus, this.agi-this.iraDeductions, this.studentLoanInterests);

    this.agiCalc();

	var ageOver65Cnt = 0;
	if (this.tpAge >= 65)
		ageOver65Cnt = ageOver65Cnt + 1;
	if (this.spAge >= 65)
		ageOver65Cnt = ageOver65Cnt + 1;
		
    this.standardDeduction = 
    		this.TaxCalc.calcStandardDeduction(this.filingStatus, this.tpEarnedIncome + this.spEarnedIncome,
    								ageOver65Cnt, this.claimedAsDependent);


    var deductibleMedicalExpense = this.TaxCalc.calcDeductibleMedicalExpense(this.filingStatus, 
		this.agi, this.medicalExpenses, this.tpAge, this.spAge);

    var deductibleEmployeeBusinessExpense = 
    		this.TaxCalc.calcDeductibleEmployeeBusinessExpense(this.agi, this.employeeBusinessExpense);

    this.itemizedDeductionCalc(deductibleMedicalExpense, deductibleEmployeeBusinessExpense);
    var itemizedDeductionAdj = this.TaxCalc.calcItemizedDeduction(this.filingStatus, this.agi,
      					this.itemizedDeduction, deductibleMedicalExpense);
    if (itemizedDeductionAdj > this.standardDeduction) {
      this.itemizedDeduction = itemizedDeductionAdj;
      this.totalDeductions = Math.ceil(itemizedDeductionAdj);
    } else {
      this.itemizedDeduction = itemizedDeductionAdj;
      this.totalDeductions = this.standardDeduction;
    }
    this.totalDeductions = this.totalDeductions + this.incomeAdjustment;

    var exemptionCnt = 1 + this.qualifiedDependents;
    if (this.filingStatus === "MFJ") {
      exemptionCnt = exemptionCnt + 1;
    }
    this.totalExemptions = this.TaxCalc.calcExemption(this.filingStatus, this.agi, exemptionCnt, this.claimedAsDependent);

    this.totalDeductionAndExemptionsCalc();

    this.taxableIncome = Math.max(0, this.totalIncome - this.totalDeductionAndExemptions);
    this.normalTax = this.TaxCalc.calcRegularTax(this.filingStatus, this.taxableIncome);
    
    this.taxableIncomeExcludeQualifiedDivAndCapGain = this.taxableIncome
    		- this.longTermCapitalGain - this.qualifiedDividends;
    		
    
	this.regularTaxBracket = this.TaxCalc.calcRegularTaxBracket(this.filingStatus, this.taxableIncome);

    this.capitalGainTaxBracket = this.TaxCalc.calcQualifiedDividendsOrCapitalGainBracket(this.filingStatus, this.taxableIncome);
    this.longTermCapGainTaxCalc();
    
    this.taxWithQualifiedDivAndCapGain = 
    		this.TaxCalc.calcRegularTax(this.filingStatus, this.taxableIncomeExcludeQualifiedDivAndCapGain)
    		+ this.longTermCapGainTax;
    		
    this.regularTax = Math.min(this.normalTax, this.taxWithQualifiedDivAndCapGain);
    
    this.amt = this.TaxCalc.calcAMT(this.filingStatus, this.agi, this.standardDeduction,
      this.totalDeductions, this.realEstateTax + this.stateTaxWitholdings, 
      this.regularTax, this.longTermCapitalGain + this.qualifiedDividends);
      
    this.netInvestmentTax = this.TaxCalc.calcNetInvestmentTax(this.filingStatus, this.agi, this.taxableInterest, 
    						this.qualifiedDividends + this.ordinaryDividends, 
    						Math.max(0, this.capitalGainLossNormal + this.longTermCapitalGain)); 

	this.additionalMedicareTax = this.TaxCalc.calcAdditionalMedicareTax(this.filingStatus, this.agi, 
  		this.tpTaxableWages - this.tp401kContribution, this.spTaxableWages - this.sp401kContribution, 
  		this.tpBusinessIncome, this.spBusinessIncome);


    this.totalTaxCalc();

    this.dependentCareCredit = 
    	this.TaxCalc.calcDependentCareCredit(this.agi, this.dependentsUnder13, 
    					this.dependentCareExpense, this.lowerEarnedIncome);

    var possibleChildTaxCredit = this.TaxCalc.calcChildTaxCredit(this.filingStatus, this.agi, this.dependentsUnder17);
    var allowedChildTaxCredit = Math.min(this.regularTax, possibleChildTaxCredit);
    var unAllowedChildTaxCredit = possibleChildTaxCredit - allowedChildTaxCredit;
    var additionalChildTaxCredit = this.TaxCalc.calcAdditionalChildTaxCredit(this.filingStatus, 
		this.tpEarnedIncome + this.spEarnedIncome, this.dependentsUnder17, unAllowedChildTaxCredit); 
    this.childTaxCredit = allowedChildTaxCredit + additionalChildTaxCredit;

    if (this.eligibleForHope) {
		var possibleAOTC = this.TaxCalc.calcHopeCredit(this.filingStatus, this.agi, this.educationExpense, this.tpAge, this.claimedAsDependent);
		var limitedAOTC = Math.min(this.regularTax, possibleAOTC); 
		var refundableAOTC = Math.min(possibleAOTC - limitedAOTC, Math.ceil(possibleAOTC*0.4));
        this.educationCredit = limitedAOTC + refundableAOTC;
    } else {
        var possibleLifeTimeLeaningCredit = this.TaxCalc.calcLifetimeLearningCredit(this.filingStatus, this.agi, this.educationExpense, this.tpAge, this.claimedAsDependent);
        this.educationCredit = Math.min(this.regularTax, possibleLifeTimeLeaningCredit); 
    }

    var investmentIncome = this.taxableInterest + this.qualifiedDividends + this.ordinaryDividends 
    						+ Math.max(0, this.capitalGainLossNormal + this.longTermCapitalGain); 
    this.eic = this.TaxCalc.calcEarnedIncomeCredit(this.filingStatus, this.tpEarnedIncome + this.spEarnedIncome, this.tpAge, this.spAge, 
    			this.claimedAsDependent, this.dependentsUnder17+this.studentsBetween17And24, investmentIncome);

    this.totalCreditsCalc();
    this.totalPaymentCalc();
    this.refundCalc();
        
  }

};


