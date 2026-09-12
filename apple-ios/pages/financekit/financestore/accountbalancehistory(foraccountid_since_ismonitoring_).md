> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/accountbalancehistory(foraccountid:since:ismonitoring:)](https://developer.apple.com/documentation/financekit/financestore/accountbalancehistory(foraccountid:since:ismonitoring:))

# accountBalanceHistory(forAccountID:since:isMonitoring:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns the account balance history since a time specified by the provided financial history token.

## Declaration

```swift
func accountBalanceHistory(forAccountID accountID: UUID, since token: FinanceStore.HistoryToken? = nil, isMonitoring: Bool = true) -> FinanceStore.History<AccountBalance>
```

## Parameters

- `accountID`: A [UUID](https://developer.apple.com/documentation/foundation/uuid) that identifies a specific account a person has added to the finance store.
- `token`: An optional `HistoryToken` that defines the starting date and time to return records from.
- `isMonitoring`: A Boolean value that indicates whether the framework should return a `History` sequence that indicates the changes to the accounts over time. Defaults to `true`.

<a id="return-value"></a>

## Return Value

A `History` that describes the account balances.

<a id="Discussion"></a>

## Discussion

Use this method to monitor the balance of a specific account.  Provide a `historyToken` to specify a starting data and time.

## See Also

### Balances

- [accountBalances(query:)](accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [AccountBalance](../accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [AccountBalanceQuery](../accountbalancequery.md): A structure that defines an account balance query.
- [Balance](../balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](../creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](../currentbalance.md): Values that describe the state of an account’s credit balance.
