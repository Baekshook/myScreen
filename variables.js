const chains = [
  "mainnet",
  "polygon",
  "avalanche",
  "arbitrum",
  "gnosis",
  "bsc",
  "optimism",
  "fantom",
];

console.log(chains);
console.log(chains[0]);

const Mainchains = [
  { name: "mainnet", chainId: 1 },
  { name: "polygon", chainId: 137 },
  { name: "avalanche", chainId: 43114 },
  { name: "arbitrum", chainId: 42161 },
  { name: "gnosis", chainId: 100 },
  { name: "bsc", chainId: 56 },
  { name: "optimism", chainId: 10 },
  { name: "fantom", chainId: 250 },
];

console.log(Mainchains);
console.log(Mainchains[0]);

// 여전히 const 임에도 불구하고 접근이 가능한 문제가 남아있습니다.
// chains[0].name = "hackednet";
// console.log(chains[0]);
