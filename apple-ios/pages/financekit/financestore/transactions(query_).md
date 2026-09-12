> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/transactions(query:)](https://developer.apple.com/documentation/financekit/financestore/transactions(query:))

# transactions(query:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns transactions that match the provided transaction query.

## Declaration

```swift
func transactions(query: TransactionQuery) async throws -> [Transaction]
```

## Parameters

- `query`: A [TransactionQuery](../transactionquery.md) that describes the kinds of transactions to look for.

<a id="return-value"></a>

## Return Value

An array of [Transaction](../transaction.md) records that match the provided `query`.

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [AccountQuery](../accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](../accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](../currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](../transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](../transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](../transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](../transactionstatus.md): Values that describe the status of a transaction.
