> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/graceperiodexpiresdate](https://developer.apple.com/documentation/appstoreserverapi/graceperiodexpiresdate)

# gracePeriodExpiresDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The time when the Billing Grace Period for subscription renewals expires.

## Declaration

```
timestamp gracePeriodExpiresDate
```

<a id="Discussion"></a>

## Discussion

For more information about billing grace periods, see [Enable Billing Grace Period for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev58bda3212).

## See Also

### Billing status

- [isInBillingRetryPeriod](isinbillingretryperiod.md): A Boolean value that indicates whether the App Store is attempting to automatically renew an expired subscription.
