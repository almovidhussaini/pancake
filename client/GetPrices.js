const { ethers } = require('ethers');
const {
    addressFactory, addressRouter, addressFrom, addressTo, 
} = require("./AddressList");

const {erc20ABI,factoryABI,pairABI,routerABI} = require("./AbiList");
//"https://bsc-dataseed.binance.org/"
const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/wrudut-xYQ5hNzETOcjl87kYu1Ajdkn-"
)

// console.log(provider,'provider')
const contractFactory = new ethers.Contract(
    addressFactory,
    factoryABI,
    provider
);

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

// console.log(contractRouter,'CONTRACTrOUTER')

const getPrices = async (amountInHuman) => {
    const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
    const decimals = await contractToken.decimals();

    const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
   
        const amountsOut = await contractRouter.getAmountsOut(amountIn, [
            addressFrom,
            addressTo
        ])

        const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider)
        const decimals2 = await contractToken2.decimals();

        const amountOutHuman = ethers.utils.formatUnits(amountsOut[1].toString(),
        decimals2);
    console.log(  amountOutHuman)
};

const amountnHuman = "1";
getPrices(amountnHuman)
