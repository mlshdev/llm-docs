> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/alertingcontext](https://developer.apple.com/documentation/accessorynotifications/alertingcontext)

# AlertingContext

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that provides guidance for how to alert for a notification.

## Declaration

```swift
struct AlertingContext
```

<a id="overview"></a>

## Overview

To alert for a notification, present it on screen, play a sound, or trigger a haptic effect that uses touch to give users feedback.

## Topics

### Creating an alerting context

- [init(notificationCanAlert:suppressedByFocus:kind:sound:)](alertingcontext/init%28notificationcanalert_suppressedbyfocus_kind_sound_%29.md): Initializes an alerting context with notification alert conditions.

### Determining alerting behavior

- [shouldAlert](alertingcontext/shouldalert.md): A Boolean value that indicates the recommended alerting behavior.
- [notificationCanAlert](alertingcontext/notificationcanalert.md): A Boolean value that indicates whether the accessory can alert the person for the notification.
- [isSuppressedByFocus](alertingcontext/issuppressedbyfocus.md): A Boolean value that indicates whether the device’s Focus state suppresses notification alerts.

### Classifying the notification type

- [kind](alertingcontext/kind-swift.property.md): A classification for the notification type.
- [AlertingContext.Kind](alertingcontext/kind-swift.enum.md): Notification types for specialized handling.

### Configuring notification sound

- [sound](alertingcontext/sound-swift.property.md): An optional sound configuration for the notification.
- [AlertingContext.Sound](alertingcontext/sound-swift.struct.md): A structure that describes sound characteristics for a notification.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Data curation and alerting

- [AccessoryNotification](accessorynotification.md): A structure that contains the details of a notification that iOS provides to your accessory.
