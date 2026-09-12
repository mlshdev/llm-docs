> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationtype](https://developer.apple.com/documentation/uikit/uiusernotificationtype)

# UIUserNotificationType (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating how the app alerts the user when a local or push notification arrives.

> For more information, see [UIUserNotificationSettings](uiusernotificationsettings.md).

## Declaration

```swift
struct UIUserNotificationType
```

## Topics

### Constants

- [badge](uiusernotificationtype/badge.md): Deprecated. The app badges its icon.
- [sound](uiusernotificationtype/sound.md): Deprecated. The app plays a sound.
- [alert](uiusernotificationtype/alert.md): Deprecated. The app posts an alert.

### Initializers

- [init(rawValue:)](uiusernotificationtype/init%28rawvalue_%29.md): Deprecated. Creates a notification type with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# UIUserNotificationType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating how the app alerts the user when a local or push notification arrives.

> For more information, see [UIUserNotificationSettings](uiusernotificationsettings.md).

## Declaration

```objectivec
enum UIUserNotificationType : NSUInteger;
```

## Topics

### Constants

- [UIUserNotificationTypeNone](uiusernotificationtype/uiusernotificationtypenone.md): Deprecated. The app does not present any UI upon receiving a notification.
- [UIUserNotificationTypeBadge](uiusernotificationtype/badge.md): Deprecated. The app badges its icon.
- [UIUserNotificationTypeSound](uiusernotificationtype/sound.md): Deprecated. The app plays a sound.
- [UIUserNotificationTypeAlert](uiusernotificationtype/alert.md): Deprecated. The app posts an alert.
