export interface ChinaTotal {
	suspect: number;
	importedCase: number;
	noInfectH5: number;
	localConfirmH5: number;
	mtime: string;
	confirm: number;
	dead: number;
	showLocalConfirm: number;
	local_acc_confirm: number;
	localConfirm: number;
	highRiskAreaNum: number;
	heal: number;
	nowSevere: number;
	localWzzAdd: number;
	confirmAdd: number;
	deadAdd: number;
	mediumRiskAreaNum: number;
	noInfect: number;
	showlocalinfeciton: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	nowConfirm: number;
	mRiskTime: string;
}

export interface ChinaAdd {
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	confirm: number;
	importedCase: number;
	noInfect: number;
	localConfirm: number;
	noInfectH5: number;
	localConfirmH5: number;
}

export interface ShowAddSwitch {
	nowSevere: boolean;
	all: boolean;
	confirm: boolean;
	suspect: boolean;
	nowConfirm: boolean;
	localConfirm: boolean;
	localinfeciton: boolean;
	dead: boolean;
	heal: boolean;
	importedCase: boolean;
	noInfect: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	provinceLocalConfirm: number;
	dead: number;
	showRate: boolean;
	showHeal: boolean;
	wzz: number;
	adcode: string;
	nowConfirm: number;
	heal: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	confirm: number;
}

export interface Today {
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
}

export interface Total {
	nowConfirm: number;
	confirm: number;
	heal: number;
	wzz: number;
	showRate: boolean;
	showHeal: boolean;
	provinceLocalConfirm: number;
	dead: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	adcode: string;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroConfirm: number;
}

export interface Today {
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Total {
	wzz: number;
	adcode: string;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	showRate: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	heal: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
	isSpecialCity: boolean;
	adcode: string;
	date: string;
	local_confirm_add: number;
	mediumRiskAreaNum: number;
	local_wzz_add: string;
	highRiskAreaNum: number;
	province: string;
	city: string;
	isUpdated: boolean;
	mtime: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}