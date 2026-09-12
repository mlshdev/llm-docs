> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/app-store-server-notifications-v2](https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v2)

# App Store Server Notifications V2

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server Notifications 2.0+

Specify your secure server’s URL in App Store Connect to receive version 2 notifications.

## URL

```http
POST https://example.com/v2
```

## Response Codes

- `200` OK — `responseBodyV2`: The response body for a version 2 notification.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)
- [Enabling App Store Server Notifications](enabling-app-store-server-notifications.md)
- [Receiving App Store Server Notifications](receiving-app-store-server-notifications.md)
- [Responding to App Store Server Notifications](responding-to-app-store-server-notifications.md)

<a id="Discussion"></a>

## Discussion

To receive server notifications from the App Store, provide your secure server’s HTTPS URL in App Store Connect. For more information, see [Enabling App Store Server Notifications](enabling-app-store-server-notifications.md). To secure your server and receive notifications, your server must support the Transport Layer Security (TLS) protocol version 1.2 or later.

Upon receiving a server notification, respond to the App Store with an HTTP status code of `200-206` if the post was successful. If the post was unsuccessful, send HTTP `50x` or `40x` to have the App Store retry the notification. For more information, see [Responding to App Store Server Notifications](responding-to-app-store-server-notifications.md).

## See Also

### Server notifications version 2

- [responseBodyV2](responsebodyv2.md): The response body the App Store sends in a version 2 server notification.
- [responseBodyV2DecodedPayload](responsebodyv2decodedpayload.md): A decoded payload that contains the version 2 notification data.
- [notificationType](notificationtype.md): The type that describes the In-App Purchase or external purchase event for which the App Store sends the version 2 notification.
- [subtype](subtype.md): A string that provides details about select notification types in version 2.
