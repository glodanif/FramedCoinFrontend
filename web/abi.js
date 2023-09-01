const abi = [{"type":"constructor","payable":false,"inputs":[{"type":"uint256","name":"mintingFee"},{"type":"uint256","name":"minimumValueToMint"},{"type":"address","name":"exchangeRateFeedAddress"}]},{"type":"error","name":"FramedCoin__NftAlreadyCashedOut","inputs":[]},{"type":"error","name":"FramedCoin__NftStillHoldsTokens","inputs":[{"type":"uint256","name":"value"}]},{"type":"error","name":"FramedCoin__NotEnoughPayment","inputs":[{"type":"uint256","name":"minimumValueToMint"},{"type":"uint256","name":"mintingFee"},{"type":"uint256","name":"minimumPayment"},{"type":"uint256","name":"receivedValue"}]},{"type":"error","name":"FramedCoin__NotFound","inputs":[]},{"type":"error","name":"FramedCoin__NotSupported","inputs":[]},{"type":"error","name":"FramedCoin__Unauthorized","inputs":[]},{"type":"error","name":"FramedCoin__UnauthorizedNftAccess","inputs":[]},{"type":"error","name":"FramedCoin__WithdrawFailed","inputs":[]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"FeesWithdrawn","inputs":[{"type":"uint256","name":"value","indexed":true}]},{"type":"event","anonymous":false,"name":"NftBurnt","inputs":[{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"NftCashedOut","inputs":[{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"value","indexed":true}]},{"type":"event","anonymous":false,"name":"NftMinted","inputs":[{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"value","indexed":true}]},{"type":"event","anonymous":false,"name":"Paused","inputs":[{"type":"address","name":"account","indexed":false}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"Unpaused","inputs":[{"type":"address","name":"account","indexed":false}]},{"type":"function","name":"approve","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"burnNft","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"cashOutNft","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getExchangeRate","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getExchangeRateFeed","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getMetaDataByTokenId","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"tuple","components":[{"type":"uint256","name":"value"},{"type":"uint256","name":"boughtFor"},{"type":"uint256","name":"boughtAt"},{"type":"uint256","name":"soldFor"},{"type":"uint256","name":"soldAt"}]}]},{"type":"function","name":"getMinimumPayment","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getMinimumValueToMint","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getMintingFee","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getOwner","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getTokenCounter","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getTotalNftsValue","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getTotalNftsValueUsd","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getUnwithdrawnFees","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"mintNft","constant":false,"stateMutability":"payable","payable":true,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"pause","constant":false,"payable":false,"gas":1099510627775,"inputs":[],"outputs":[]},{"type":"function","name":"paused","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"bool"}]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"setMinimumValueToMint","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"minimumValueToMint"}],"outputs":[]},{"type":"function","name":"setMintingFee","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"mintingFee"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenByIndex","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"tokenOfOwnerByIndex","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"owner"},{"type":"uint256","name":"index"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"totalSupply","constant":true,"stateMutability":"view","payable":false,"gas":1099510627775,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"gas":1099510627775,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"unpause","constant":false,"payable":false,"gas":1099510627775,"inputs":[],"outputs":[]},{"type":"function","name":"withdrawFees","constant":false,"payable":false,"gas":1099510627775,"inputs":[],"outputs":[]}]