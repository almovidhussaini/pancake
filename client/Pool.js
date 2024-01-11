const { ethers } = require('ethers');
const {Pool} =   require('@uniswap/v3-sdk');
const {Token} = require('@uniswap/sdk-core');

const { abi: IUniswapV3PoolABI } = require ('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json')
const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/wrudut-xYQ5hNzETOcjl87kYu1Ajdkn-"
)
const poolContract = new ethers.Contract(
  currentPoolAddress,
  IUniswapV3PoolABI.abi,
  provider
)

const [liquidity, slot0] =
  await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ])
