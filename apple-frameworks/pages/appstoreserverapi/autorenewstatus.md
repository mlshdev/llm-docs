> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/autorenewstatus](https://developer.apple.com/documentation/appstoreserverapi/autorenewstatus)

# autoRenewStatus

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The renewal status for an auto-renewable subscription.

## Declaration

```
int32 autoRenewStatus
```

## Possible Values

- `0`: Automatic renewal is off. The customer has turned off automatic renewal for the subscription, and it won’t renew at the end of the current subscription period.
- `1`: Automatic renewal is on. The subscription renews at the end of the current subscription period.

## See Also

### Subscription renewal and expiration

- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): The Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
- [status](status.md): The status of an auto-renewable subscription.
