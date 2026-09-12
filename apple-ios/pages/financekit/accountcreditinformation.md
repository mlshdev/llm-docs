> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountcreditinformation](https://developer.apple.com/documentation/financekit/accountcreditinformation)

# AccountCreditInformation

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the credit information associated with an account.

## Declaration

```swift
struct AccountCreditInformation
```

<a id="overview"></a>

## Overview

Credit information includes credit limits, payment dates, and minimum payment dates and amounts for current and upcoming payments.

## Topics

### Instance Properties

- [creditLimit](accountcreditinformation/creditlimit.md): The credit limit of the account.
- [minimumNextPaymentAmount](accountcreditinformation/minimumnextpaymentamount.md): Minimum amount of the next non-overdue payment.
- [nextPaymentDueDate](accountcreditinformation/nextpaymentduedate.md): Date of the next payment.
- [overduePaymentAmount](accountcreditinformation/overduepaymentamount.md): The amount by which the account is overdue for the current period.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](accountquery.md): A structure that defines an account query.
- [CurrencyAmount](currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
