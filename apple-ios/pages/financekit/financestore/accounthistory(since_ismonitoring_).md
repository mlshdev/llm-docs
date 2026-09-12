> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/accounthistory(since:ismonitoring:)](https://developer.apple.com/documentation/financekit/financestore/accounthistory(since:ismonitoring:))

# accountHistory(since:isMonitoring:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns a list of accounts a person added since a time specified by the provided financial history token.

## Declaration

```swift
func accountHistory(since token: FinanceStore.HistoryToken? = nil, isMonitoring: Bool = true) -> FinanceStore.History<Account>
```

## Parameters

- `token`: An optional `HistoryToken`.
- `isMonitoring`: A Boolean value that indicates if the framework should return a `History` that indicates the changes to the accounts over time. Defaults to `true.`

<a id="return-value"></a>

## Return Value

A `History` that describes the accounts.

<a id="Discussion"></a>

## Discussion

Use this method to list and monitor accounts present in a person’s Wallet. If provided, the framework uses the `since` history token as a starting point to evaluate which accounts to return.

## See Also

### Accounts

- [accounts(query:)](accounts%28query_%29.md): Returns a list of accounts a person added to their Wallet that meet the criteria in the provided account query.
- [AssetAccount](../assetaccount.md): A structure that describes the characteristics of an asset account.
- [LiabilityAccount](../liabilityaccount.md): A structure that describes the characteristics of a liability account.
- [Account](../account.md): A structure that describes a financial account.
