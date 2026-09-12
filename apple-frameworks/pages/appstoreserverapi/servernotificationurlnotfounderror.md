> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/servernotificationurlnotfounderror](https://developer.apple.com/documentation/appstoreserverapi/servernotificationurlnotfounderror)

# ServerNotificationURLNotFoundError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.5+

An error that indicates the App Store server couldn’t find a notifications URL for your app in the environment.

## Declaration

```
object ServerNotificationURLNotFoundError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4040007`
- `errorMessage` — `string`: For more information about configuring App Store Server Notifications in App Store Connect, see [Enter a URL for App Store server notifications](https://help.apple.com/app-store-connect/#/dev0067a330b). Check that you’ve configured a server notifications URL for the production environment or sandbox enviroment, whichever you’re using.
  **Allowed values:** `No App Store Server Notification URL found for provided app. Check that a URL is configured in App Store Connect for this environment.`

## See Also

### Notification test and history errors

- [InvalidEndDateError](invalidenddateerror.md): An error that indicates the end date is invalid.
- [InvalidNotificationTypeError](invalidnotificationtypeerror.md): An error that indicates the notification type or subtype is invalid.
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
- [StartDateAfterEndDateError](startdateafterenddateerror.md): An error that indicates the end date precedes the start date, or the two dates are equal.
- [StartDateTooFarInPastError](startdatetoofarinpasterror.md): An error that indicates the start date is earlier than the earliest allowed date.
- [TestNotificationNotFoundError](testnotificationnotfounderror.md): An error that indicates the test notification token is expired or the test notification status isn’t available.
