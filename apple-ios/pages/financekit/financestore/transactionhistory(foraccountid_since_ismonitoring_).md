> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/transactionhistory(foraccountid:since:ismonitoring:)](https://developer.apple.com/documentation/financekit/financestore/transactionhistory(foraccountid:since:ismonitoring:))

# transactionHistory(forAccountID:since:isMonitoring:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.

## Declaration

```swift
func transactionHistory(forAccountID accountID: UUID, since token: FinanceStore.HistoryToken? = nil, isMonitoring: Bool = true) -> FinanceStore.History<Transaction>
```

## Parameters

- `accountID`: An account identifier.
- `token`: An optional [FinanceStore.HistoryToken](historytoken.md) that describes a start time.
- `isMonitoring`: A Boolean value that indicates the method should return records asynchronously as the system updates the FinanceStore.

<a id="return-value"></a>

## Return Value

A [FinanceStore.History](history.md) of transactions that match the provided `accountID`.

<a id="Discussion"></a>

## Discussion

Use this method to search the finance store for transactions in a specific account and receive updates as the framework enters new transactions into the finance store. You can, optionally, specify a starting date and time by providing a `historyToken`.

## See Also

### Transactions

- [transactions(query:)](transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](../accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](../accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](../currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](../transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](../transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](../transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](../transactionstatus.md): Values that describe the status of a transaction.
