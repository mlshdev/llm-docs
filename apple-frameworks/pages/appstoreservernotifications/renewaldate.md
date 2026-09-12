> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/renewaldate](https://developer.apple.com/documentation/appstoreservernotifications/renewaldate)

# renewalDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.8+

The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.

## Declaration

```
timestamp renewalDate
```

<a id="Discussion"></a>

## Discussion

The `renewalDate` is a value that’s always present in the payload for auto-renewable subscriptions, even for expired subscriptions. This date indicates the expiration date of the most recent auto-renewable subscription purchase, including renewals, and may be in the past. For subscriptions that renew successfully, the `renewalDate` is the date when the subscription renews.

## See Also

### Subscripton renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): A Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
