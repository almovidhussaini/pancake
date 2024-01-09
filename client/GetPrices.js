const { ethers } = require('ethers');
const {
    addressFactory, addressRouter, addressFrom, addressTo, 
} = require("./AddressList");

const {erc20ABI,factoryABI,pairABI,routerABI} = require("./AbiList");

const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed_balance.org/"
)

// console.log(provider,'provider')
const contractFactory = new ethers.Contract(
    addressFactory,
    factoryABI,
    provider
);

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

const getPrices = async (amountInHuman) => {
    const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
    const decimals = await contractToken.decimals();

    console.log(decimals,'decimals')

};

const amountnHuman = "500";
getPrices(amountnHuman)
