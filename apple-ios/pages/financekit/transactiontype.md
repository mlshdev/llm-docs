> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transactiontype](https://developer.apple.com/documentation/financekit/transactiontype)

# TransactionType

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Values that describe kinds of transactions.

## Declaration

```swift
enum TransactionType
```

## Topics

### Enumeration Cases

- [TransactionType.adjustment](transactiontype/adjustment.md): A credit or debit adjustment transaction.
- [TransactionType.atm](transactiontype/atm.md): An ATM transaction.
- [TransactionType.billPayment](transactiontype/billpayment.md): A bill payment, usually carried out through an eBill or eCheck system.
- [TransactionType.check](transactiontype/check.md): A check payment.
- [TransactionType.deposit](transactiontype/deposit.md): A deposit of money by a payer into a payee’s bank account.
- [TransactionType.directDebit](transactiontype/directdebit.md): A payment to a third party on agreed dates, typically in order to pay bills.
- [TransactionType.directDeposit](transactiontype/directdeposit.md): A deposit of money by a payer directly into a payee’s bank account.
- [TransactionType.dividend](transactiontype/dividend.md): A distribution of a company’s earnings to its shareholders.
- [TransactionType.fee](transactiontype/fee.md): A fee or charge levied by the account provider.
- [TransactionType.interest](transactiontype/interest.md): A credit or debit due to interest earned or incurred.
- [TransactionType.loan](transactiontype/loan.md): A loan drawdown or repayment.
- [TransactionType.pointOfSale](transactiontype/pointofsale.md): A Point of Sales transaction.
- [TransactionType.refund](transactiontype/refund.md): A refund.
- [TransactionType.standingOrder](transactiontype/standingorder.md): A regular payment of a fixed amount that’s paid on a specified date.
- [TransactionType.transfer](transactiontype/transfer.md): A transfer between accounts.
- [TransactionType.unknown](transactiontype/unknown.md): The transaction’s category doesn’t map to a known value.
- [TransactionType.withdrawal](transactiontype/withdrawal.md): An automatic or recurring withdrawal of funds by another party.

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
- [TransactionStatus](transactionstatus.md): Values that describe the status of a transaction.
