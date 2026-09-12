> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/renewalbillingplantype](https://developer.apple.com/documentation/appstoreserverapi/renewalbillingplantype)

# renewalBillingPlanType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.21+

## Declaration

```
string renewalBillingPlanType
```

## Possible Values

- `BILLED_UPFRONT`:
- `MONTHLY`:

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

## See Also

### Subscription renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): The Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
- [status](status.md): The status of an auto-renewable subscription.
