> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/expiresdate

# expiresDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.

## Declaration

```
timestamp expiresDate
```

<a id="Discussion"></a>

## Discussion

The `expiresDate` is a static value that applies for each transaction. When the auto-renewable subscription renews, the App Store creates a new transaction with a new [expiresDate](expiresdate.md).

## See Also

### Subscription renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [isUpgraded](isupgraded.md): The Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
- [status](status.md): The status of an auto-renewable subscription.
