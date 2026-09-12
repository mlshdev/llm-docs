> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/onlyfailures](https://developer.apple.com/documentation/appstoreserverapi/onlyfailures)

# onlyFailures

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.8+

A Boolean value that indicates whether the response includes only notifications that failed to reach your server.

## Declaration

```
boolean onlyFailures
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

A value of `true` indicates that you want to receive just the App Store server notifications that failed to reach your server, including those that the App Store server is currently retrying.

## See Also

### Data types

- [startDate](startdate.md): The start date of a timespan, expressed in UNIX time, in milliseconds.
- [endDate](enddate.md): The end date of a timespan, expressed in UNIX time, in milliseconds.
- [notificationType](notificationtype.md): A notification type value that App Store Server Notifications 2 uses.
- [notificationSubtype](notificationsubtype.md): A notification subtype value that App Store Server Notifications 2 uses.
