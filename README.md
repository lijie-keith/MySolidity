# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

```shell
编译合约：npx hardhat compile
测试样例：npx hardhat test
启动本地测试网络：npx hardhat node
部署合约到本地：npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost
生成调试代码：npx wagmi generate
```
