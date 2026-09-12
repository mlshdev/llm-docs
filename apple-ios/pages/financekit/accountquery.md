> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountquery](https://developer.apple.com/documentation/financekit/accountquery)

# AccountQuery

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that defines an account query.

## Declaration

```swift
struct AccountQuery
```

<a id="overview"></a>

## Overview

Use an `AccountQuery` to find and filter a person’s accounts.

## Topics

### Initializers

- [init(sortDescriptors:predicate:limit:offset:)](accountquery/init%28sortdescriptors_predicate_limit_offset_%29.md): Creates a new account query structure with the provided sort descriptors and, optionally, a predicate and limit on the number of records the query should return.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountCreditInformation](accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
