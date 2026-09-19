> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/startdate

# startDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

The start date of a timespan, expressed in UNIX time, in milliseconds.

## Declaration

```
timestamp startDate
```

<a id="Discussion"></a>

## Discussion

The start date must be earlier than the [endDate](enddate.md).

## See Also

### Data types

- [endDate](enddate.md): The end date of a timespan, expressed in UNIX time, in milliseconds.
- [notificationType](notificationtype.md): A notification type value that App Store Server Notifications 2 uses.
- [notificationSubtype](notificationsubtype.md): A notification subtype value that App Store Server Notifications 2 uses.
- [onlyFailures](onlyfailures.md): A Boolean value that indicates whether the response includes only notifications that failed to reach your server.
