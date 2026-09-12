> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/autorenewproductid](https://developer.apple.com/documentation/appstoreservernotifications/autorenewproductid)

# autoRenewProductId

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The identifier of the product that renews at the next billing period.

## Declaration

```
string autoRenewProductId
```

## See Also

### Subscripton renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): A Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
