> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/accountbalances(query:)](https://developer.apple.com/documentation/financekit/financestore/accountbalances(query:))

# accountBalances(query:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns a list of balances that meet the criteria in the provided account query.

## Declaration

```swift
func accountBalances(query: AccountBalanceQuery) async throws -> [AccountBalance]
```

## Parameters

- `query`: An [AccountQuery](../accountquery.md) that describes the kinds of accounts to look for.

<a id="return-value"></a>

## Return Value

An array of [AccountBalance](../accountbalance.md) structures.

## See Also

### Balances

- [accountBalanceHistory(forAccountID:since:isMonitoring:)](accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalance](../accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [AccountBalanceQuery](../accountbalancequery.md): A structure that defines an account balance query.
- [Balance](../balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](../creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](../currentbalance.md): Values that describe the state of an account’s credit balance.
