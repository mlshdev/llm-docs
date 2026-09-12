> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/expirationintent](https://developer.apple.com/documentation/appstoreservernotifications/expirationintent)

# expirationIntent

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The reason an auto-renewable subscription expired.

## Declaration

```
int32 expirationIntent
```

## Possible Values

- `1`: The customer canceled their subscription.
- `2`: Billing error; for example, the customer’s payment information is no longer valid.
- `3`: The customer didn’t consent to an auto-renewable subscription price increase that requires their consent, or to a subscription offer conversion that requires their consent, so the subscription expired. For more information about subscription price increases that require customer consent, see [Auto-renewable subscription price increase thresholds](https://developer.apple.com/help/app-store-connect/reference/auto-renewable-subscription-price-increase-thresholds). For more information about offer conversions that require customer consent, see [Consent for subscription offer conversions](https://developer.apple.com/help/app-store-connect/reference/consent-for-subscription-offer-conversions).
- `4`: The product wasn’t available for purchase at the time of renewal.
- `5`: The subscription expired for some other reason.

## See Also

### Subscripton renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): A Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
