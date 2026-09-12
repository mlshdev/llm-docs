> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transactionquery](https://developer.apple.com/documentation/financekit/transactionquery)

# TransactionQuery

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the parameters to use for a transaction query.

## Declaration

```swift
struct TransactionQuery
```

<a id="overview"></a>

## Overview

Use a `TransactionQuery` to find and filter transactions in a person’s accounts.

## Topics

### Initializers

- [init(sortDescriptors:predicate:limit:offset:)](transactionquery/init%28sortdescriptors_predicate_limit_offset_%29.md): Creates a new transaction query with the provided sort descriptors, predicate, and limit on the number of records the query should return.

### Type Methods

- [predicate(forMerchantCategoryCodes:)](transactionquery/predicate%28formerchantcategorycodes_%29.md): A predicate that returns transactions that match any of the provided merchant category codes.
- [predicate(forStatuses:)](transactionquery/predicate%28forstatuses_%29.md): Returns a predicate that matches any of the provided transaction statuses.
- [predicate(forTransactionTypes:)](transactionquery/predicate%28fortransactiontypes_%29.md): Returns a predicate that matches any of the provided transaction types.

## Relationships

### Conforms To

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
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
