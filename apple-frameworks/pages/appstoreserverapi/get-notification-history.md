> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-notification-history](https://developer.apple.com/documentation/appstoreserverapi/get-notification-history)

# Get Notification History

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.5+

Get a list of notifications that the App Store server attempted to send to your server.

## URL

```http
POST https://api.storekit.apple.com/inApps/v1/notifications/history
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.apple.com/inApps/v1/notifications/history
```

## Query Parameters

- `paginationToken` — `paginationToken`: An optional token you use to get the next set of up to 20 notification history records. All responses that have more records available include a `paginationToken`.

  Note: Omit this parameter the first time you call this endpoint.

## HTTP Body

Content type: `application/json`

Type: `NotificationHistoryRequest`

The request body that includes the start and end dates, and optional query constraints.

## Response Codes

- `200` OK — `NotificationHistoryResponse`: Request succeeded.
- `400` Bad Request — `(InvalidTransactionIdError | PaginationTokenExpiredError | InvalidPaginationTokenError | InvalidStartDateError | InvalidEndDateError | StartDateAfterEndDateError | StartDateTooFarInPastError | InvalidNotificationTypeError | MultipleFiltersSuppliedError)`: Invalid request.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `(TransactionIdNotFoundError | AccountNotFoundError)`:
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to get a paginated list of the version 2 [App Store Server Notifications](../appstoreservernotifications.md) that the App Store attempted to send to your server’s [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint in a specified timespan. Notification history is available for the past 180 days in the production environment, and the past 30 days in the sandbox environment.

You can further limit the request by specifying a `notificationType` or `notificationSubtype` in the [NotificationHistoryRequest](notificationhistoryrequest.md) object. Alternatively, to get the notification history for a single user, provide a `transactionId`. The response, [NotificationHistoryResponse](notificationhistoryresponse.md), contains the full contents of the original notifications.

Each time you call this endpoint, it returns a maximum of 20 notification history records. If the [hasMore](hasmore.md) field in the [NotificationHistoryResponse](notificationhistoryresponse.md) is `true`, use the [paginationToken](https://developer.apple.com/documentation/appstoreserverapi/get-notification-history/paginationtoken) from the response in your subsequent request to get the next set of records. Use the same [NotificationHistoryRequest](notificationhistoryrequest.md) body on subsequent requests.

This endpoint is available in the production and sandbox environments. For more information about configuring App Store Server Notifications, see [Enabling App Store Server Notifications](../appstoreservernotifications/enabling-app-store-server-notifications.md) and [Enter a URL for App Store server notifications](https://help.apple.com/app-store-connect/#/dev0067a330b).

> **Note**

>  For notifications that relate to in-app purchases, the history records reflect the state of an in-app purchase at the time the App Store originally sent the notification, and may not reflect its current state. To get the current state of auto-renewable subscriptions, call the [Get All Subscription Statuses](get-all-subscription-statuses.md) endpoint. For all other in-app purchase types, call the [Get Transaction History](get-transaction-history.md) endpoint.

## See Also

### App Store Server Notifications history

- [NotificationHistoryRequest](notificationhistoryrequest.md): The request body for notification history.
- [NotificationHistoryResponse](notificationhistoryresponse.md): A response that contains the App Store Server Notifications history for your app.
- [notificationHistoryResponseItem](notificationhistoryresponseitem.md): The App Store server notification history record, including the signed notification payload and the result of the server’s first send attempt.
