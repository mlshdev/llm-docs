> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/isinbillingretryperiod

# isInBillingRetryPeriod

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

A Boolean value that indicates whether the App Store is attempting to automatically renew a subscription that expired due to a billing issue.

## Declaration

```
boolean isInBillingRetryPeriod
```

## See Also

### Billing status

- [gracePeriodExpiresDate](graceperiodexpiresdate.md): The time when the billing grace period for a subscription renewal expires.
