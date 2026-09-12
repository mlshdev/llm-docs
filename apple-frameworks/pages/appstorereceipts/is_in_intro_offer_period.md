> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/is_in_intro_offer_period](https://developer.apple.com/documentation/appstorereceipts/is_in_intro_offer_period)

# is_in_intro_offer_period

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

An indicator of whether an auto-renewable subscription is in the introductory price period.

## Declaration

```
string is_in_intro_offer_period
```

## Possible Values

- `true`: The customer’s subscription is in an introductory price period
- `false`: The subscription is not in an introductory price period.

<a id="Discussion"></a>

## Discussion

This field is returned in the JSON response, in the [responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md) and [responseBody.Receipt.In_app](responsebody/receipt-data.dictionary/in_app-data.dictionary.md) arrays.

You can use this value to determine if the user is eligible for introductory pricing. If a previous subscription period in the receipt has the value `“true”` for either the [is_trial_period](is_trial_period.md) or `is_in_intro_offer_period` keys, the user is not eligible for a free trial or introductory price within that subscription group. For more information, see [Implementing introductory offers in your app](../storekit/implementing-introductory-offers-in-your-app.md).

## See Also

### Receipt and subscription status

- [status](status.md): Deprecated. The status of the app receipt.
- [auto_renew_status](auto_renew_status.md): Deprecated. The renewal status for the auto-renewable subscription.
- [is_in_billing_retry_period](is_in_billing_retry_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the billing retry period.
- [is_trial_period](is_trial_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the free trial period.
