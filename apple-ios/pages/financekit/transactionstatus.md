> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transactionstatus](https://developer.apple.com/documentation/financekit/transactionstatus)

# TransactionStatus

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Values that describe the status of a transaction.

## Declaration

```swift
enum TransactionStatus
```

## Topics

### Enumeration Cases

- [TransactionStatus.authorized](transactionstatus/authorized.md): The transaction is in an authorized state.
- [TransactionStatus.booked](transactionstatus/booked.md): The transaction is in a booked state.
- [TransactionStatus.memo](transactionstatus/memo.md): A memo that provides information about the transaction.
- [TransactionStatus.pending](transactionstatus/pending.md): The transaction is in a pending state.
- [TransactionStatus.rejected](transactionstatus/rejected.md): The transaction is in a rejected state.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
