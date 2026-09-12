> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/auto_renew_status](https://developer.apple.com/documentation/appstorereceipts/auto_renew_status)

# auto_renew_status

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

The renewal status for the auto-renewable subscription.

## Declaration

```
string auto_renew_status
```

## Possible Values

- `1`: The subscription will renew at the end of the current subscription period.
- `0`: The customer has turned off automatic renewal for the subscription.

<a id="Discussion"></a>

## Discussion

This field is returned in the JSON response, in the [responseBody.Pending_renewal_info](responsebody/pending_renewal_info-data.dictionary.md) array.

The value for this field should not be interpreted as the customer’s subscription status. You can use this value to display an alternative subscription product in your app, such as a lower-level subscription plan to which the user can downgrade from their current plan.

Consider presenting an attractive upgrade or downgrade offer in the same subscription group, if the [auto_renew_status](auto_renew_status.md) value is `“0”`. See [Engineering Subscriptions](https://developer.apple.com/videos/play/wwdc2018/705/) from WWDC 2018 for more information.

## See Also

### Receipt and subscription status

- [status](status.md): Deprecated. The status of the app receipt.
- [is_in_billing_retry_period](is_in_billing_retry_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the billing retry period.
- [is_in_intro_offer_period](is_in_intro_offer_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the introductory price period.
- [is_trial_period](is_trial_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the free trial period.
