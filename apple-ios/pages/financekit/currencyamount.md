> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/currencyamount](https://developer.apple.com/documentation/financekit/currencyamount)

# CurrencyAmount

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes a monetary amount and its currency.

## Declaration

```swift
struct CurrencyAmount
```

## Topics

### Instance Properties

- [amount](currencyamount/amount.md): The numeric value of the amount.
- [currencyCode](currencyamount/currencycode.md): The currency of the amount.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [Transaction](transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
