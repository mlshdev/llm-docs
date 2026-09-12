> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/enddate](https://developer.apple.com/documentation/appstoreserverapi/enddate)

# endDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

The end date of a timespan, expressed in UNIX time, in milliseconds.

## Declaration

```
timestamp endDate
```

<a id="Discussion"></a>

## Discussion

The end date must be later than the [startDate](startdate.md).

## See Also

### Data types

- [startDate](startdate.md): The start date of a timespan, expressed in UNIX time, in milliseconds.
- [notificationType](notificationtype.md): A notification type value that App Store Server Notifications 2 uses.
- [notificationSubtype](notificationsubtype.md): A notification subtype value that App Store Server Notifications 2 uses.
- [onlyFailures](onlyfailures.md): A Boolean value that indicates whether the response includes only notifications that failed to reach your server.
