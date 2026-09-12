> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/expires_date_ms](https://developer.apple.com/documentation/appstorereceipts/expires_date_ms)

# expires_date_ms

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

The time, in milliseconds, a subscription expires or renews.

## Declaration

```
string expires_date_ms
```

<a id="Discussion"></a>

## Discussion

This field is returned in the JSON response, in the [responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md) and [responseBody.Receipt.In_app](responsebody/receipt-data.dictionary/in_app-data.dictionary.md) arrays.

The time a subscription expires or when it will renew, in UNIX epoch time format, in milliseconds. Use this time format for processing dates.

You can use this date value to:

- Manage auto-renewable subscriptions. Store this value, `original_transaction_id`, `product_id`, and `purchase_date_ms` for each subscription, as a best practice.
- Identify the date the subscription renews or expires.
- Determine a user’s access to content or a service by comparing this date to the current date. After validating the latest receipt, continue providing service if the date is in the future. If the subscription expiration date for the latest renewal transaction has passed, the subscription has expired.

## See Also

### Dates and intent

- [expiration_intent](expiration_intent.md): Deprecated. The reason a subscription expires.
- [cancellation_date_ms](cancellation_date_ms.md): Deprecated. The time and date that the App Store refunds a transaction or revokes it from Family Sharing.
