> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationresponse](https://developer.apple.com/documentation/accessorynotifications/notificationresponse)

# NotificationResponse

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents a person’s response to a notification.

## Declaration

```swift
struct NotificationResponse
```

## Mentioned In

- [Responding to forwarded notifications](responding-to-forwarded-notifications.md)

<a id="overview"></a>

## Overview

Create an instance of this structure when a person responds to a notification on your accessory. Send it to the system using [sendResponse(\_:)](notificationsforwarding/accessorynotificationssession/sendresponse%28__%29.md) after receiving the response data through [messageHandler(\_:)](notificationsforwarding/accessorynotificationshandler/messagehandler%28__%29.md).

## Topics

### Creating a notification response

- [init(sourceIdentifier:notificationIdentifier:actionIdentifier:userText:)](notificationresponse/init%28sourceidentifier_notificationidentifier_actionidentifier_usertext_%29.md): Initializes a notification response with the given identifiers and optional user text.

### Identifying the response action

- [actionIdentifier](notificationresponse/actionidentifier.md): An identifier for the action the person took with the notification.

### Identifying the notification

- [notificationIdentifier](notificationresponse/notificationidentifier.md): An identifier for the notification.
- [sourceIdentifier](notificationresponse/sourceidentifier.md): A bundle identifier for the app that sent the notification.

### Accessing user-provided text

- [userText](notificationresponse/usertext.md): A text string that a person provides in response to the notification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Interactive support

- [Responding to forwarded notifications](responding-to-forwarded-notifications.md): Enable people to interact with notifications on your accessory and convey their responses to iOS.
