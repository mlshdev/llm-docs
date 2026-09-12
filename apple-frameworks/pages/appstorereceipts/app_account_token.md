> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/app_account_token](https://developer.apple.com/documentation/appstorereceipts/app_account_token)

# app_account_token

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.5+ (deprecated in 1.7)

The UUID that an app optionally generates to map a customer’s in-app purchase with its resulting App Store transaction.

## Declaration

```
string app_account_token
```

<a id="Discussion"></a>

## Discussion

When a customer initiates an in-app purchase, you can optionally generate an [appAccountToken(\_:)](../storekit/product/purchaseoption/appaccounttoken%28__%29.md) and send it to the App Store. The App Store returns the same value in [appAccountToken](../storekit/transaction/appaccounttoken.md) in the transaction information after the customer completes the purchase.

If you’re using the [Original API for In-App Purchase](../storekit/original-api-for-in-app-purchase.md) and provide a UUID in the [applicationUsername](../storekit/skmutablepayment/applicationusername.md) property, then the [app_account_token](app_account_token.md) field contains that value.

## See Also

### Transaction identifiers

- [original_transaction_id](original_transaction_id.md): Deprecated. The transaction identifier of the original purchase.
- [transaction_id](transaction_id.md): Deprecated. A unique identifier for a transaction, such as a purchase, restore, or renewal.
