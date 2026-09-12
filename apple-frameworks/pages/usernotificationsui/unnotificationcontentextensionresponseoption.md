> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextensionresponseoption](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextensionresponseoption)

# UNNotificationContentExtensionResponseOption (Swift)

**Framework:** User Notifications UI  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

Constants indicating the preferred response to a notification.

## Declaration

```swift
enum UNNotificationContentExtensionResponseOption
```

## Topics

### Response Options

- [UNNotificationContentExtensionResponseOption.doNotDismiss](unnotificationcontentextensionresponseoption/donotdismiss.md): Don’t dismiss the notification interface.
- [UNNotificationContentExtensionResponseOption.dismiss](unnotificationcontentextensionresponseoption/dismiss.md): Dismiss the notification interface.
- [UNNotificationContentExtensionResponseOption.dismissAndForwardAction](unnotificationcontentextensionresponseoption/dismissandforwardaction.md): Dismiss the notification interface and forward the notification to the app.

### Initializers

- [init(rawValue:)](unnotificationcontentextensionresponseoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Custom Actions

- [didReceive(\_:completionHandler:)](unnotificationcontentextension/didreceive%28__completionhandler_%29.md): Handles a notification action selected by the user.

# UNNotificationContentExtensionResponseOption (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Constants indicating the preferred response to a notification.

## Declaration

```objectivec
enum UNNotificationContentExtensionResponseOption : NSUInteger;
```

## Topics

### Response Options

- [UNNotificationContentExtensionResponseOptionDoNotDismiss](unnotificationcontentextensionresponseoption/donotdismiss.md): Don’t dismiss the notification interface.
- [UNNotificationContentExtensionResponseOptionDismiss](unnotificationcontentextensionresponseoption/dismiss.md): Dismiss the notification interface.
- [UNNotificationContentExtensionResponseOptionDismissAndForwardAction](unnotificationcontentextensionresponseoption/dismissandforwardaction.md): Dismiss the notification interface and forward the notification to the app.

## See Also

### Handling Custom Actions

- [didReceiveNotificationResponse:completionHandler:](unnotificationcontentextension/didreceive%28__completionhandler_%29.md): Handles a notification action selected by the user.
