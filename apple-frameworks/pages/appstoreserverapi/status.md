> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/status](https://developer.apple.com/documentation/appstoreserverapi/status)

# status

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The status of an auto-renewable subscription.

## Declaration

```
int32 status
```

## Possible Values

- `1`: The auto-renewable subscription is active.
- `2`: The auto-renewable subscription is expired.
- `3`: The auto-renewable subscription is in a billing retry period.
- `4`: The auto-renewable subscription is in a Billing Grace Period.
- `5`: The auto-renewable subscription is revoked. The App Store refunded the transaction or revoked it from Family Sharing.

<a id="Discussion"></a>

## Discussion

For more information about the Billing Grace Period, see [Enable Billing Grace Period for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev58bda3212).

## See Also

### Subscription renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): The Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
