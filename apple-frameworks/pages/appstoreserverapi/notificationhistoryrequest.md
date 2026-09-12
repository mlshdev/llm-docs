> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/notificationhistoryrequest](https://developer.apple.com/documentation/appstoreserverapi/notificationhistoryrequest)

# NotificationHistoryRequest

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.5+

The request body for notification history.

## Declaration

```
object NotificationHistoryRequest
```

## Properties

- `startDate` — `startDate`: Required. The start date of the timespan for the requested App Store Server Notification history records. The `startDate` needs to precede the `endDate`. Choose a `startDate` that’s within the past 180 days. In the sandbox environment, choose a `startDate` that’s within the past 30 days.
- `endDate` — `endDate`: Required. The end date of the timespan for the requested App Store Server Notification history records. Choose an `endDate` that’s later than the `startDate`. If you choose an `endDate` in the future, the endpoint automatically uses the current date as the `endDate`.
- `notificationType` — `notificationType`: Optional. A notification type. Provide this field to limit the notification history records to those with this one notification type. For a list of notifications types, see [notificationType](../appstoreservernotifications/notificationtype.md).

  Note: You may include either the `transactionId` or the `notificationType` property (or neither) in your query, but not both.
- `notificationSubtype` — `notificationSubtype`: Optional. A notification subtype. Provide this field to limit the notification history records to those with this one notification subtype. For a list of subtypes, see [subtype](../appstoreservernotifications/subtype.md). If you specify a `notificationSubtype`, you need to also specify its related `notificationType`.
- `onlyFailures` — `onlyFailures`: Optional. A Boolean value you set to `true` to request only the notifications that haven’t reached your server successfully. The response also includes notifications that the App Store server is currently retrying to send to your server.
- `transactionId` — `transactionId`: Optional. The transaction identifier, which may be an original transaction identifier, of any transaction belonging to the customer. Provide this field to limit the notification history request to this one customer.

  Note: You may include either the `transactionId` or the `notificationType` property (or neither) in your query, but not both.
- `originalTransactionId` — `string`: Use `transactionId` instead.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Specify the constraints for the App Store Server Notification history entries you’re requesting from [Get Notification History](get-notification-history.md). The request requires the `startDate` and `endDate` fields; all other fields are optional. Include only the fields in your request that you need to constrain the response.

If you provide both the `notificationType` and `subtype`, they need to be a valid combination, otherwise, the request returns an [InvalidNotificationTypeError](invalidnotificationtypeerror.md) error. For more information, see [notificationType](../appstoreservernotifications/notificationtype.md) and [subtype](../appstoreservernotifications/subtype.md).

> **Note**

>  Notification history is available for the past 180 days in the production environment, and the past 30 days in the sandbox environment. Choose a `startDate` that’s within the past 180 days in the production environment, and within the past 30 days in the sandbox environment.

## Topics

### Data types

- [startDate](startdate.md): The start date of a timespan, expressed in UNIX time, in milliseconds.
- [endDate](enddate.md): The end date of a timespan, expressed in UNIX time, in milliseconds.
- [notificationType](notificationtype.md): A notification type value that App Store Server Notifications 2 uses.
- [notificationSubtype](notificationsubtype.md): A notification subtype value that App Store Server Notifications 2 uses.
- [onlyFailures](onlyfailures.md): A Boolean value that indicates whether the response includes only notifications that failed to reach your server.

## See Also

### App Store Server Notifications history

- [Get Notification History](get-notification-history.md): Get a list of notifications that the App Store server attempted to send to your server.
- [NotificationHistoryResponse](notificationhistoryresponse.md): A response that contains the App Store Server Notifications history for your app.
- [notificationHistoryResponseItem](notificationhistoryresponseitem.md): The App Store server notification history record, including the signed notification payload and the result of the server’s first send attempt.
