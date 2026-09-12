> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transaction/transactiontype](https://developer.apple.com/documentation/financekit/transaction/transactiontype)

# transactionType

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The type of the transaction.

## Declaration

```swift
let transactionType: TransactionType
```

<a id="Discussion"></a>

## Discussion

This value describes the specific kind of transaction, such as a purchase, a bill, a funds transfer, and so on. The transaction type may not always be available.

## See Also

### Instance Properties

- [accountID](accountid.md): The account ID the transaction belongs to.
- [creditDebitIndicator](creditdebitindicator.md): An indicator that describes if the transaction is a credit or a debit.
- [foreignCurrencyAmount](foreigncurrencyamount.md): The total amount of the transaction, if it was carried out in a foreign currency.
- [foreignCurrencyExchangeRate](foreigncurrencyexchangerate.md): The currency exchange rate, if the transaction was carried out in a foreign currency.
- [id](id.md): A unique internal ID.
- [merchantCategoryCode](merchantcategorycode.md): The ISO 18245 category code for the transaction.
- [merchantName](merchantname.md): The name of the merchant, if present.
- [originalTransactionDescription](originaltransactiondescription.md): The unmodified description of the transaction.
- [postedDate](posteddate.md): The date and time that the transaction was posted to the account.
- [status](status.md): The status of the transaction, if available.
- [transactionAmount](transactionamount.md): The total amount of the transaction.
- [transactionDate](transactiondate.md): The time the transaction took place, if available.
- [transactionDescription](transactiondescription.md): A description of the transaction.
