"use strict";
$(document).ready(function () {
    setTimeout(getData, 500);
    setTimeout(checkAccount, 750);
    setTimeout(updateGoo, 1000);

    if (localStorage.getItem("darkmode") == "true") {
        darkmode = true;
        const element = document.body;
        element.classList.toggle("dark-mode");
    }

    const queryString = window.location.search.substring(1);
    const varArray = queryString.split("=");
    const param1 = varArray[0];
    const param2 = varArray[1];

    if (param2 && param2.length == 42) {
        localStorage.setItem("referrer", param2);
    }

});

const erc20 = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

const goo = [{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"addBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"goo","type":"uint256"},{"name":"gooIncreaseHalf","type":"uint256"},{"name":"production","type":"uint256"},{"name":"farmToken","type":"address"}],"name":"addUnit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"goo","type":"uint256"},{"name":"class","type":"uint256"},{"name":"unit","type":"uint256"},{"name":"value","type":"uint256"},{"name":"prereq","type":"uint256"}],"name":"addUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"firstDivsTime","type":"uint256"}],"name":"beginGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"unitId","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"buyFarmUnit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"unitId","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"buyUnit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"upgradeId","type":"uint256"}],"name":"buyUpgrade","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"claimGooDepositDividends","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimResearchDividends","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"fundGooResearch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"giveGoo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"unitId","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"sellFarmUnit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"snapshotDailyGooDepositFunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"snapshotDailyGooResearchFunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"}],"name":"updatePlayersGoo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBanana","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGameInfo","outputs":[{"name":"data","type":"uint256[9]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"getGooProduction","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"start","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"getPlayersInfo","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[2][]"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ids","type":"uint256[]"}],"name":"getUnitsOwned","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ids","type":"uint256[]"}],"name":"getUpgradesOwned","outputs":[{"name":"","type":"bool[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ids","type":"uint256[]"}],"name":"getUpgradeValues","outputs":[{"name":"","type":"uint256[4][]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gooDepositDivPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastGooProductionUpdate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextGooDepositSnapshotTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextSnapshotTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numPlayers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numProdUnits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numUpgrades","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"researchDivPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBananaResearchPool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalGooProduction","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewUnclaimedDividends","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const gooFarm = [{"constant":true,"inputs":[],"name":"pendingGameDivs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBanana","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"farmGoo","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"unlockTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"farmToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"player","type":"address"},{"name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"goo","type":"address"}],"name":"newFarmGoo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pullOutstandingDivs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

var provider;
var web3;
var account;
async function getData() {
    if (typeof BinanceChain !== 'undefined' && typeof window.ethereum !== 'undefined') {
        return; // Dont connect if they have both wallets
    } else if (typeof BinanceChain !== 'undefined') {
        BinanceChain.on('accountsChanged', handleAccountsChanged);
        web3 = new Web3(BinanceChain);
    } else if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
    }
    setupContracts();
    updateData();
}

function setupContracts() {
    BONES.tokenContract = web3.eth.contract(erc20).at(BONES.address);
    BANANA.tokenContract = web3.eth.contract(erc20).at(BANANA.address);
    FARM_GOO.gooContract = web3.eth.contract(goo).at(FARM_GOO.goo);
    FARM_GOO.oldBananaFarmContract = web3.eth.contract(gooFarm).at(FARM_GOO.oldBananaFarm);
    FARM_GOO.bananaFarmContract = web3.eth.contract(gooFarm).at(FARM_GOO.bananaFarm);
    FARM_GOO.bonesFarmContract = web3.eth.contract(gooFarm).at(FARM_GOO.bonesFarm);
}

const inputAmounts = {};
var prodUnitsOwned;
var upgradeValues;

var initialGoo;
var initialTime;
var gooProduction;
var liveGoo;

var prodDivs;
var depositDivs;

var nextSnapshotTime;
var nextDepositSnapshotTime;


function updateGoo() {
    const timeNow = Math.floor(new Date().getTime());
    if (gooProduction != null) {
        liveGoo = ((timeNow - initialTime) * (gooProduction.div(100000))) + new Number(initialGoo);
        $("#liveGoo").text(liveGoo.toUnit());
    }

    if (nextDepositSnapshotTime != null) {
        if ((timeNow / 1000) > nextDepositSnapshotTime) {
            $("#depositPayout").text("PENDING");
        } else {
            $("#depositPayout").text((nextDepositSnapshotTime - (timeNow / 1000)).toHHMMSS());
        }
    }

    if (nextSnapshotTime != null) {
        if ((timeNow / 1000) > nextSnapshotTime) {
            $("#nextPayout").text("PENDING");
        } else {
            $("#nextPayout").text((nextSnapshotTime - (timeNow / 1000)).toHHMMSS());
        }
    }

    setTimeout(updateGoo, 50);
}

function updateData() {
    if (web3 != null && (web3.version == null || (web3.version.api != "0.20.7" && web3.version.api != "0.20.6"))) {
        console.log("Multiple wallets detected -please disable one");
    }

    FARM_GOO.bananaFarmContract.totalBanana((err, result) => {
        $("#totalBanana").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BANANA");
    });

    BONES.tokenContract.balanceOf(FARM_GOO.bonesFarm, (err, result) => {
        $("#totalBones").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BONES");
    });

    updateAccountData();
}

function updateAccountData() {
    setTimeout(updateAccountData, 3000);

    var address = account;
    if (account == null) {
        address = "0x0000000000000000000000000000000000000000";
    }

    var pendingBanana;
    FARM_GOO.bananaFarmContract.pendingGameDivs((err, result) => {
        pendingBanana = result;
    });

    FARM_GOO.gooContract.getGameInfo({from: address}, (err, result) => {
        var totalPrizePool = web3.fromWei(result[1], "ether");
        if (pendingBanana > 0) {
            totalPrizePool  = web3.fromWei(result[1].add(pendingBanana), "ether")
        }
        const totalProduction = result[2];
        $("#totalPrizePool").text((totalPrizePool.toNumber().toUnit()) + " BANANA");
        $("#totalProduction").text((totalProduction / 100).toUnit() + " goo/s");
        const pastProd = gooProduction;

        const totalDeposited = result[3];
        const userDeposited = result[4];
        $("#totalDeposited").text(totalDeposited.toNumber().toUnit());
        $("#userDeposited").text(userDeposited.toNumber().toUnit());
        if (totalDeposited == 0) {
            $("#estimatedDepositPayout").text("0 BANANA");
        } else {
            $("#estimatedDepositPayout").text((totalPrizePool * 0.02 * userDeposited / totalDeposited).toUnit() + " BANANA");
        }

        nextSnapshotTime = result[5];
        nextDepositSnapshotTime = result[8];
        $("#depositPot").text((totalPrizePool * 0.02).toUnit() + " BANANA");

        const gooBalance = result[6];
        gooProduction = result[7];
        $("#playersProduction").text((gooProduction / 100).toUnit() + " goo/s");

        var productionPercent = Math.floor((gooProduction / totalProduction) * 100000) / 1000;
        if (productionPercent < 0.001) {
            productionPercent = "<0.001";
        }
        $("#productionPercent").text(productionPercent + "%");
        $("#estimatedPayout").text((totalPrizePool * 0.08 * gooProduction / totalProduction).toUnit() + " BANANA");

        const timeNow = new Date().getTime();
        if (initialTime == null || (initialGoo != null && gooBalance.lt(initialGoo.minus(gooProduction.times(0.03)))) || (initialGoo != null && gooBalance.gt(initialGoo.plus(gooProduction.times(0.03)))) || (gooProduction != null && !gooProduction.eq(pastProd))) {
            initialGoo = gooBalance;
            initialTime = Math.floor(timeNow);
        }
    });

    FARM_GOO.gooContract.getUnitsOwned(productionUnitIds(), {from: address}, (err, result) => {
        prodUnitsOwned = result;
        updateUnitBoxes(prodUnitsOwned, upgradeValues);
    });

    FARM_GOO.gooContract.getUpgradeValues(productionUnitIds(), {from: address}, (err, result) => {
        upgradeValues = result;
        updateUnitBoxes(prodUnitsOwned, upgradeValues);
    });

    FARM_GOO.gooContract.viewUnclaimedDividends({from: address}, (err, result) => {
        prodDivs = result[0];
        depositDivs = result[1];
        if (prodDivs + depositDivs > 0) {
            $("#pendingDivs").show();
            $("#pendingDivsAmount").text(Math.floor(web3.fromWei(prodDivs.add(depositDivs), "ether") * 10000) / 10000 + " BANANA");
            $("#pendingDivsAmount2").text(Math.floor(web3.fromWei(prodDivs.add(depositDivs), "ether") * 10000) / 10000 + " BANANA");
        } else {
            $("#pendingDivs").hide();
        }
    });

    BANANA.tokenContract.balanceOf(address, (err, result) => {
        BANANA.usersBalance = result;
        $("#usersBanana").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BANANA");
    });

    FARM_GOO.oldBananaFarmContract.balances(address, (err, result) => {
        BANANA.usersOldDeposit = result;
        if (result > 0) {
            $("#oldBananaFarmMessage").show();
            $("#oldBananaFarmAmount").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BANANA");
        }
    });

    FARM_GOO.bananaFarmContract.balances(address, (err, result) => {
        BANANA.usersDeposit = result;
        const banana = web3.fromWei(result, "ether");
        $("#usersStakedBanana").text(Math.floor(banana * 100) / 100 + " BANANA");
        $("#usersStakedBanana2").text((banana * 1).toUnit() + " banana");

        if (upgradeValues != null) {
            const unitProd = getUnitsGooProduction(PRODUCTION_UNITS[6].production, +upgradeValues[6][0], upgradeValues[6][1] * 10);
            $("#usersBananaProducing").text((banana * unitProd).toUnit() + " goo/s");
        }
    });

    const timeNow = Math.floor(new Date().getTime() / 1000);
    FARM_GOO.bananaFarmContract.unlockTime(address, (err, result) => {
        if (result.gt(timeNow)) {
            $("#unstakeBanana").off("click").text((result-timeNow).toDDHHMMSS()).css("opacity", "0.5");
        } else {
            $("#unstakeBanana").text("unstake banana").css("opacity", "1").off("click").click(unstakeBanana);
        }
    });

    FARM_GOO.bonesFarmContract.unlockTime(address, (err, result) => {
        if (result.gt(timeNow)) {
            $("#unstakeBones").off("click").text((result-timeNow).toDDHHMMSS()).css("opacity", "0.5");
        } else {
            $("#unstakeBones").text("unstake bones").css("opacity", "1").off("click").click(unstakeBones);
        }
    });

    FARM_GOO.bonesFarmContract.balances(address, (err, result) => {
        BONES.usersDeposit = result;
        const bones = web3.fromWei(result, "ether");
        $("#usersStakedBones").text(Math.floor(bones * 100) / 100 + " BONES");
        $("#usersStakedBones2").text((bones * 1).toUnit() + " bones");

        if (upgradeValues != null) {
            const unitProd = getUnitsGooProduction(PRODUCTION_UNITS[7].production, +upgradeValues[7][0], upgradeValues[7][1] * 10);
            $("#usersBonesProducing").text((bones * unitProd).toUnit() + " goo/s");
        }
    });

    BONES.tokenContract.balanceOf(address, (err, result) => {
        BONES.usersBalance = result;
        $("#usersBones").text(Math.floor(web3.fromWei(result, "ether") * 100) / 100 + " BONES");
    });
}

function updateAccountUI() {
    if (account != null) {
        $("#connectWallet").css("display", "none");

        BANANA.tokenContract.allowance(account, FARM_GOO.bananaFarm, (err, result) => {
            const amount = $("#stakeBananaAmount").val();
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                $("#stakeBananaConfirm").text("approve banana");
            } else {
                $("#stakeBananaConfirm").text("stake banana");
            }
        });

        BONES.tokenContract.allowance(account, FARM_GOO.bonesFarm, (err, result) => {
            const amount = $("#stakeBonesAmount").val();
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                $("#stakeBonesConfirm").text("approve bones");
            } else {
                $("#stakeBonesConfirm").text("stake bones");
            }
        });

    }
}

function updateUnitBoxes(prodUnitsOwned, upgradeValues) {
    if (prodUnitsOwned == null || upgradeValues == null) {
        return;
    }

    for (var i = 0; i < prodUnitsOwned.length; i++) {
        const unit = PRODUCTION_UNITS[i];
        if (unit.index != null) {
            const unitsOwned = prodUnitsOwned[i].toNumber();
            $("#unitsOwned" + i).text(unitsOwned.toUnit() + " units");

            const unitUpgrades = upgradeValues[i];
            const unitProd = getUnitsGooProduction(unit.production, unitUpgrades[0] / 10, unitUpgrades[1] * 10);
            $("#unitsProducing" + i).text((unitsOwned * unitProd).toUnit() + " goo/s");

            var amount = inputAmounts[i];
            if (amount == null) {
                amount = 1;
            }
            $("#unitMakes" + i).text((amount * unitProd).toUnit() + " goo/s");

            const cost = getUnitsGooCost(unit, unitsOwned, amount, unitUpgrades[2]);
            $("#unitCost" + i).text(cost.toUnit() + " goo");
        }
    }
}

$(".buyUnitsAmount").on("input", function(e) {
    const index = $(this).attr("unitIndex");
    inputAmounts[index] = Math.floor($(this).val());
    updateUnitBoxes(prodUnitsOwned, upgradeValues);
});

function checkAccount() {
    if (provider == "binance") {
        updateAccountUI();
    } else if (provider == "metamask") {
        web3.eth.getAccounts((err, accounts) => {
            if (accounts == null || accounts.length == 0) {
                console.log("NO ACCOUNT CONNECTED");
            } else {
                if (account != accounts[0]) {
                    account = accounts[0];
                    updateAccountData();
                }
                updateAccountUI();
            }
        });
    } else if (typeof BinanceChain !== 'undefined') {
        updateAccountUI();
    } else if (web3 && web3.eth) {
        web3.eth.getAccounts((err, accounts) => {
            if (accounts == null || accounts.length == 0) {
                console.log("NO ACCOUNT CONNECTED");
            } else {
                if (account != accounts[0]) {
                    account = accounts[0];
                    updateAccountData();
                }
                updateAccountUI();
            }
        });
    }
    setTimeout(checkAccount, 1000);
}

function handleAccountsChanged(accounts) {
    if (accounts[0] != account) {
        account = accounts[0];
    }
}


function showUpgrades(index) {
    $("#viewUpgradesModal").modal("show");
    $("#upgradesList").empty();

    const unit = PRODUCTION_UNITS[index];
    const upgradeIds = [];

    for (var i = 0; i < unit.upgrades0.length; i++) {
        const upgrade0 = unit.upgrades0[i];
        upgradeIds.push(upgrade0.id);

        var gooCost = 0;
        if (upgrade0.gooCost) {
            gooCost = upgrade0.gooCost.toUnit();
        }

        $("#upgradesList").append("<div class='col-md-12 col-xl-6'>" +
            "<div id='upgrade"+upgrade0.id+"' class='btn mt-2' style='width:100%; color: unset; background-color: rgb(37, 36, 45); padding: 0.45rem 0.55rem 0.5rem 0.6rem; opacity:0.5'>" +
                "<div class='d-flex justify-content-between align-items-center' style='font-size: 12px;'>" +
                    "<div><img src='" + getUpgradeIcon(upgrade0.class) + "' height='32px' width='auto' style='margin-left:4px;margin-right:4px;'></div>" +
                    "<ul class='list-unstyled mb-0 flex-fill'><li style='color:#ffffff;opacity:0.8; font-size: 12px; margin-right: 4px;'>" + getUpgradeText(upgrade0.class, upgrade0.value) + "</li></ul>" +
                    "<ul class='text-right list-unstyled mb-0'><li class='text-nowrap' style='font-size: 12px;'>" + gooCost + " goo</li><li><a id='upgradeButton"+upgrade0.id+"' class='btn btn-primary mt-1' style='color: #ffffff; font-size: 11px; padding: 0.15rem 0.8rem; border-radius: 0.3rem; opacity: 0.8;'>locked</a></li></ul>" +
                "</div>" +
            "</div>" +
        "</div>");

        const upgrade1 = unit.upgrades1[i];
        upgradeIds.push(upgrade1.id);

        var gooCost = 0;
        if (upgrade1.gooCost) {
            gooCost = upgrade1.gooCost.toUnit();
        }

        $("#upgradesList").append("<div class='col-md-12 col-xl-6'>" +
            "<div id='upgrade"+upgrade1.id+"' class='btn mt-2' style='width:100%; color: unset; background-color: rgb(37, 36, 45); padding: 0.45rem 0.55rem 0.5rem 0.6rem; opacity:0.5'>" +
                "<div class='d-flex justify-content-between align-items-center' style='font-size: 12px;'>" +
                    "<div><img src='" + getUpgradeIcon(upgrade1.class) + "' height='32px' width='auto' style='margin-left:4px;margin-right:4px;'></div>" +
                    "<ul class='list-unstyled mb-0 flex-fill'><li style='color:#ffffff;opacity:0.8; font-size: 12px; margin-right: 4px;'>" + getUpgradeText(upgrade1.class, upgrade1.value) + "</li></ul>" +
                    "<ul class='text-right list-unstyled mb-0'><li class='text-nowrap' style='font-size: 12px;'>" + gooCost + " goo</li><li><a id='upgradeButton"+upgrade1.id+"' class='btn btn-primary mt-1' style='color: #ffffff; font-size: 11px; padding: 0.15rem 0.8rem; border-radius: 0.3rem; opacity: 0.8;'>locked</a></li></ul>" +
                "</div>" +
            "</div>" +
        "</div>");
    }

    FARM_GOO.gooContract.getUpgradesOwned(upgradeIds,  {from: account}, (err, result) => {
        for (var i = 0; i < upgradeIds.length; i++) {
            const upgradeId = upgradeIds[i];
            const owned = result[i];
            if (owned) {
                $("#upgrade"+upgradeId).css("opacity", "0.5");
                $("#upgradeButton"+upgradeId).text("owned");
                $("#upgrade"+(upgradeId+1)).css("opacity", "1");
                $("#upgradeButton"+(upgradeId+1)).text("buy").click(function(){
                    buyUpgrade(upgradeId+1);
                });
            } else if (unit.upgrades0[0].id == upgradeId || unit.upgrades1[0].id == upgradeId) {
                $("#upgrade"+(upgradeId)).css("opacity", "1");
                $("#upgradeButton"+(upgradeId)).text("buy").click(function(){
                    buyUpgrade(upgradeId);
                });
            }
        }
    });
}

function showLeaderboard() {
    $("#viewLeaderboardModal").modal("show");
    $("#leaderboardList").empty();

    $.get("/productionLeaderboards", function(data) {
        if (data) {
            for (var i = 0; i < data.length; i++) {
                var address = data[i].player.toLowerCase().substring(0,8) + "..";
                if (data[i].player.toLowerCase() == account) {
                    address = "<b>you</b>";
                }
                const goo = new Number(data[i].goo).toUnit();
                const production = (data[i].production / 100).toUnit();

                $("#leaderboardList").append("<div class='col-2 mt-3' style='font-size: 14px'>#" + (i + 1) + "</div>" +
                    "<div class='col-3 mt-3' style='font-size: 14px'><a href='https://bscscan.com/address/" + data[i].player + "' target='_blank'>" + address +"</a></div>" +
                    "<div class='col-3 mt-3' style='font-size: 14px'>" + goo + " <img src='/assets/img/goo.png' height='16px' style='vertical-align: sub'></div>" +
                    "<div class='col-4 mt-3' style='font-size: 14px'>" + production + " goo/s</div>");
            }
        }
    });
}

function showPendingDivs() {
    $("#pendingDivsModal").modal("show");
}


function depositMaxGoo() {
    $("#depositGooAmount").val(Math.floor(liveGoo));
}

function depositGoo() {
    const amount = $("#depositGooAmount").val();
    if (amount > 0) {
        FARM_GOO.gooContract.fundGooResearch(amount, {from: account, gas: 260000}, function (error, result) {
            if (!error) {
                $("#depositGooAmount").val("");
            }
            console.log(result);
        });
    }
}

function buyMaxUnits(index) {
    const unit = PRODUCTION_UNITS[index];
    const canAfford = getNumUnitsCanAfford(unit, +prodUnitsOwned[index], Math.floor(liveGoo), +upgradeValues[index][2]);
    $("#buyUnitsAmount" + index).val(canAfford);
    inputAmounts[index] = canAfford;
    updateUnitBoxes(prodUnitsOwned, upgradeValues);
}

function buyUnits(index) {
    const unit = PRODUCTION_UNITS[index];
    const amount = $("#buyUnitsAmount" + index).val();
    if (amount > 0) {
        FARM_GOO.gooContract.buyUnit(unit.id, amount, {from: account, gas: 260000}, function (error, result) {
            if (!error) {
                $("#buyUnitsAmount" + index).val("");
            }
            console.log(result);
        });
    }
}

function buyUpgrade(id) {
    FARM_GOO.gooContract.buyUpgrade(id, {from: account, gas: 240000}, function (error, result) {
        if (!error) {
            $('#viewUpgradesModal').modal('hide');
        }
        console.log(result);
    });
}

function claimDivs() {
    FARM_GOO.gooContract.withdrawBanana({from: account}, function (error, result) {
        if (!error) {
            $('#pendingDivsModal').modal('hide');
        }
        console.log(result);
    });
}

function stakeBanana() {
    const amount = $("#stakeBananaAmount").val();
    if (amount > 0) {
        BANANA.tokenContract.allowance(account, FARM_GOO.bananaFarm, (err, result) => {
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                BANANA.tokenContract.approve(FARM_GOO.bananaFarm, "1000000000000000000000000000", {from: account}, (err, result) => {
                    FARM_GOO.gooContract.buyFarmUnit(300, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
                        if (!error) {
                            $('#stakeBananaModal').modal('hide');
                        }
                        console.log(result);
                    });
                });
            } else {
                FARM_GOO.gooContract.buyFarmUnit(300, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
                    if (!error) {
                        $('#stakeBananaModal').modal('hide');
                    }
                    console.log(result);
                });
            }
        });
    }
}

function stakeMaxBanana() {
    $("#stakeBananaAmount").val(Math.floor(web3.fromWei(BANANA.usersBalance, "ether") * 100000) / 100000);
}

function unstakeBanana() {
    var amount = $("#unstakeBananaAmount").val();
    if (amount > 0) {
        FARM_GOO.gooContract.sellFarmUnit(300, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
            if (!error) {
                $('#unstakeBananaModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unstakeMaxBanana() {
    $("#unstakeBananaAmount").val(Math.floor(web3.fromWei(BANANA.usersDeposit, "ether") * 100000) / 100000);
}


function unstakeOldBanana() {
    var amount = Math.floor(web3.fromWei(BANANA.usersOldDeposit, "ether") * 100000) / 100000;
    if (amount > 0) {
        FARM_GOO.gooContract.sellFarmUnit(100, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
            console.log(result);
        });
    }
}


function stakeBones() {
    const amount = $("#stakeBonesAmount").val();
    if (amount > 0) {
        BONES.tokenContract.allowance(account, FARM_GOO.bonesFarm, (err, result) => {
            const amountStaking = web3.toWei(amount, "ether");
            if (result.lt(amountStaking)) {
                BONES.tokenContract.approve(FARM_GOO.bonesFarm, "1000000000000000000000000000", {from: account}, (err, result) => {
                    FARM_GOO.gooContract.buyFarmUnit(200, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
                        if (!error) {
                            $('#stakeBonesModal').modal('hide');
                        }
                        console.log(result);
                    });
                });
            } else {
                FARM_GOO.gooContract.buyFarmUnit(200, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
                    if (!error) {
                        $('#stakeBonesModal').modal('hide');
                    }
                    console.log(result);
                });
            }
        });
    }
}

function stakeMaxBones() {
    $("#stakeBonesAmount").val(Math.floor(web3.fromWei(BONES.usersBalance, "ether") * 100000) / 100000);
}

function unstakeBones() {
    var amount = $("#unstakeBonesAmount").val();
    if (amount > 0) {
        FARM_GOO.gooContract.sellFarmUnit(200, Math.floor(amount * 10), {from: account, gas: 600000}, function (error, result) {
            if (!error) {
                $('#unstakeBonesModal').modal('hide');
            }
            console.log(result);
        });
    }
}

function unstakeMaxBones() {
    $("#unstakeBonesAmount").val(Math.floor(web3.fromWei(BONES.usersDeposit, "ether") * 100000) / 100000);
}



async function connectAccount() {
    try {
        if (typeof BinanceChain !== 'undefined' && typeof window.ethereum !== 'undefined') {
            $('#connectionModal').modal();
        } else if (typeof BinanceChain !== 'undefined') {
            connectBinance();
        } else if (typeof window.ethereum !== 'undefined') {
            connectMetamask();
        } else {
            walletConnect();
        }
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
}

function connectBinance() {
    provider = "binance";
    $('#connectionModal').modal('hide');
    web3 = new Web3(BinanceChain);
    BinanceChain.request({ method: 'eth_requestAccounts' }).then(handleAccountsChanged).catch((err) => {
        if (err.code === 4001) {
            console.log('Please connect to Binance Smart Wallet.');
        } else {
            console.error(err);
        }
    });

    setupContracts();
    updateData();
}

function connectMetamask() {
    provider = "metamask";
    $('#connectionModal').modal('hide');
    window.ethereum.enable();
    web3 = new Web3(window.ethereum);

    setupContracts();
    updateData();
}

async function walletConnect() {
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const provider = new WalletConnectProvider({
        rpc: {
            56: "https://bsc-dataseed.binance.org",
        },
        network: 'binance',
        chainId: 56
    });

    await provider.enable();
    web3 = new Web3(provider);

    setupContracts();
    updateData();
}

function copyLink() {
    const temp = $("<input>");
    $("#refLink").append(temp);
    temp.val("https://moonshots.farm/fomo?&farmer="+account).select();
    document.execCommand("copy");
    temp.remove();
}

Number.prototype.toDDHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var days = Math.floor(sec_num / 86400);
    var hours = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return days + ':' + hours + ':' + minutes + ':' + seconds;
};

Number.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
};

Number.prototype.toUnit = function() {
    if (this >= T) {
        return Math.floor((this / T) * 1000) / 1000 + "t";
    }
    if (this >= B) {
        return Math.floor((this / B) * 1000) / 1000 + "b";
    }
    if (this >= M) {
        return Math.floor((this / M) * 1000) / 1000 + "m";
    }
    if (this >= K) {
        return Math.floor((this / K) * 1000) / 1000 + "k";
    }
    return Math.floor(this * 100) / 100;
};
