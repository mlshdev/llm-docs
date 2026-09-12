> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/accounts(query:)](https://developer.apple.com/documentation/financekit/financestore/accounts(query:))

# accounts(query:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns a list of accounts a person added to their Wallet that meet the criteria in the provided account query.

## Declaration

```swift
func accounts(query: AccountQuery) async throws -> [Account]
```

## Parameters

- `query`: An [AccountQuery](../accountquery.md) that describes the kinds of accounts to look for.

<a id="return-value"></a>

## Return Value

An array of [Account](../account.md) structures.

## See Also

### Accounts

- [accountHistory(since:isMonitoring:)](accounthistory%28since_ismonitoring_%29.md): Returns a list of accounts a person added since a time specified by the provided financial history token.
- [AssetAccount](../assetaccount.md): A structure that describes the characteristics of an asset account.
- [LiabilityAccount](../liabilityaccount.md): A structure that describes the characteristics of a liability account.
- [Account](../account.md): A structure that describes a financial account.
