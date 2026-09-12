> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/sendresponse(_:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/sendresponse(_:))

# sendResponse(\_:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Sends a notification response from the accessory to the system.

## Declaration

```swift
func sendResponse(_ response: NotificationResponse) async throws
```

## Parameters

- `response`: The notification response from the accessory.

## Mentioned In

- [Responding to forwarded notifications](../../responding-to-forwarded-notifications.md)

<a id="discussion"></a>

## Discussion

After receiving a message through [messageHandler(\_:)](../accessorynotificationshandler/messagehandler%28__%29.md), parse the accessory’s response data and create a [NotificationResponse](../../notificationresponse.md) instance. Call this method to deliver the response to the system for handling.

> **Note**

> The response data arrives decrypted in `messageHandler(_:)`. Your extension needs to parse the data according to the format your accessory uses and then extract the notification identifiers and action details.
