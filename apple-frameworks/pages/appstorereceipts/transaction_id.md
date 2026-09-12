> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/transaction_id](https://developer.apple.com/documentation/appstorereceipts/transaction_id)

# transaction_id

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

A unique identifier for a transaction, such as a purchase, restore, or renewal.

## Declaration

```
string transaction_id
```

<a id="Discussion"></a>

## Discussion

This field is returned in the JSON response, in the [responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md) and [responseBody.Receipt.In_app](responsebody/receipt-data.dictionary/in_app-data.dictionary.md) arrays.

This value has the same format as the transaction’s [transactionIdentifier](../storekit/skpaymenttransaction/transactionidentifier.md) property; however, the values may not be the same.

You can use this value to:

- Manage subscribers in your account database. Store the `transaction_id`, `original_transaction_id`, and `product_id` for each transaction, as a best practice to store transaction records for each customer. App Store generates a new value for `transaction_id` every time the subscription automatically renews or is restored on a new device.
- Differentiate a purchase transaction from a restore or a renewal transaction. In a purchase transaction, the `transaction_id` always matches the `original_transaction_id`. For subscriptions, it indicates the first subscription purchase. For a restore or renewal, the `transaction_id` does not match the `original_transaction_id`. If a user restores or renews the same purchase multiple times, each restore or renewal has a different `transaction_id`.

## See Also

### Transaction identifiers

- [original_transaction_id](original_transaction_id.md): Deprecated. The transaction identifier of the original purchase.
- [app_account_token](app_account_token.md): Deprecated. The UUID that an app optionally generates to map a customer’s in-app purchase with its resulting App Store transaction.
