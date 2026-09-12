> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/graceperiodexpiresdate](https://developer.apple.com/documentation/appstoreservernotifications/graceperiodexpiresdate)

# gracePeriodExpiresDate

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The time when the billing grace period for a subscription renewal expires.

## Declaration

```
timestamp gracePeriodExpiresDate
```

<a id="Discussion"></a>

## Discussion

For more information about billing grace periods, see [Enable Billing Grace Period for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev58bda3212).

## See Also

### Billing status

- [isInBillingRetryPeriod](isinbillingretryperiod.md): A Boolean value that indicates whether the App Store is attempting to automatically renew a subscription that expired due to a billing issue.
