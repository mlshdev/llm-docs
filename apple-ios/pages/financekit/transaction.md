> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transaction](https://developer.apple.com/documentation/financekit/transaction)

# Transaction

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that represents a transaction relating to a specific financial account.

## Declaration

```swift
struct Transaction
```

<a id="overview"></a>

## Overview

This can include transactions such as a deposit to or a withdrawn from bank account, a credit card transaction.

## Topics

### Instance Properties

- [accountID](transaction/accountid.md): The account ID the transaction belongs to.
- [creditDebitIndicator](transaction/creditdebitindicator.md): An indicator that describes if the transaction is a credit or a debit.
- [foreignCurrencyAmount](transaction/foreigncurrencyamount.md): The total amount of the transaction, if it was carried out in a foreign currency.
- [foreignCurrencyExchangeRate](transaction/foreigncurrencyexchangerate.md): The currency exchange rate, if the transaction was carried out in a foreign currency.
- [id](transaction/id.md): A unique internal ID.
- [merchantCategoryCode](transaction/merchantcategorycode.md): The ISO 18245 category code for the transaction.
- [merchantName](transaction/merchantname.md): The name of the merchant, if present.
- [originalTransactionDescription](transaction/originaltransactiondescription.md): The unmodified description of the transaction.
- [postedDate](transaction/posteddate.md): The date and time that the transaction was posted to the account.
- [status](transaction/status.md): The status of the transaction, if available.
- [transactionAmount](transaction/transactionamount.md): The total amount of the transaction.
- [transactionDate](transaction/transactiondate.md): The time the transaction took place, if available.
- [transactionDescription](transaction/transactiondescription.md): A description of the transaction.
- [transactionType](transaction/transactiontype.md): The type of the transaction.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](currencyamount.md): A structure that describes a monetary amount and its currency.
- [TransactionQuery](transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
