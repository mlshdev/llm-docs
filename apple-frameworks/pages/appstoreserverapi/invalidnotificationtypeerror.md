> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/invalidnotificationtypeerror](https://developer.apple.com/documentation/appstoreserverapi/invalidnotificationtypeerror)

# InvalidNotificationTypeError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.5+

An error that indicates the notification type or subtype is invalid.

## Declaration

```
object InvalidNotificationTypeError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000018`
- `errorMessage` — `string`: For a list of valid notification types and subtypes, see [notificationType](../appstoreservernotifications/notificationtype.md) and [subtype](../appstoreservernotifications/subtype.md). If you provide both a notification type and subtype, ensure the two are a valid combination, as documented on [subtype](../appstoreservernotifications/subtype.md).
  **Allowed values:** `Invalid request. The notification type or subtype is invalid.`

## See Also

### Notification test and history errors

- [InvalidEndDateError](invalidenddateerror.md): An error that indicates the end date is invalid.
- [InvalidPaginationTokenError](invalidpaginationtokenerror.md): An error that indicates the pagination token is invalid.
- [InvalidStartDateError](invalidstartdateerror.md): An error that indicates the start date is invalid.
- [InvalidTestNotificationTokenError](invalidtestnotificationtokenerror.md): An error that indicates the test notification token is invalid.
- [InvalidInAppOwnershipTypeError](invalidinappownershiptypeerror.md): An error that indicates an invalid in-app ownership type parameter.
- [InvalidProductIdError](invalidproductiderror.md): An error that indicates the product ID parameter is invalid.
- [InvalidProductTypeError](invalidproducttypeerror.md): An error that indicates the product type parameter is invalid.
- [InvalidSortError](invalidsorterror.md): An error that indicates the sort parameter is invalid.
- [InvalidSubscriptionGroupIdentifierError](invalidsubscriptiongroupidentifiererror.md): An error that indicates the subscription group identifier is invalid.
- [MultipleFiltersSuppliedError](multiplefilterssuppliederror.md): An error that indicates the request is invalid because it has too many applied constraints.
- [PaginationTokenExpiredError](paginationtokenexpirederror.md): An error that indicates the pagination token expired.
- [ServerNotificationURLNotFoundError](servernotificationurlnotfounderror.md): An error that indicates the App Store server couldn’t find a notifications URL for your app in the environment.
- [StartDateAfterEndDateError](startdateafterenddateerror.md): An error that indicates the end date precedes the start date, or the two dates are equal.
- [StartDateTooFarInPastError](startdatetoofarinpasterror.md): An error that indicates the start date is earlier than the earliest allowed date.
- [TestNotificationNotFoundError](testnotificationnotfounderror.md): An error that indicates the test notification token is expired or the test notification status isn’t available.
