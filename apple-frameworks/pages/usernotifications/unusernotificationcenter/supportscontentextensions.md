> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/supportscontentextensions](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/supportscontentextensions)

# supportsContentExtensions (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the device supports notification content extensions.

## Declaration

```swift
var supportsContentExtensions: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Notification content extensions let you customize the appearance of the alerts displayed for your app’s notifications. The value of this property is [true](https://developer.apple.com/documentation/swift/true) for devices that support notification content extensions and [false](https://developer.apple.com/documentation/swift/false) for devices that do not support them. For information about how to implement a notification content extension, see [Customizing the Appearance of Notifications](../../usernotificationsui/customizing-the-appearance-of-notifications.md).

## See Also

### Processing received notifications

- [delegate](delegate.md): The notification center’s delegate.
- [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.

# supportsContentExtensions (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the device supports notification content extensions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsContentExtensions;
```

```objectivec
@property (atomic, readonly) BOOL supportsContentExtensions;
```

<a id="Discussion"></a>

## Discussion

Notification content extensions let you customize the appearance of the alerts displayed for your app’s notifications. The value of this property is [true](https://developer.apple.com/documentation/swift/true) for devices that support notification content extensions and [false](https://developer.apple.com/documentation/swift/false) for devices that do not support them. For information about how to implement a notification content extension, see [Customizing the Appearance of Notifications](../../usernotificationsui/customizing-the-appearance-of-notifications.md).

## See Also

### Processing received notifications

- [delegate](delegate.md): The notification center’s delegate.
- [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
