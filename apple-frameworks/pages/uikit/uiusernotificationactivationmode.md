> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationactivationmode](https://developer.apple.com/documentation/uikit/uiusernotificationactivationmode)

# UIUserNotificationActivationMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating whether the app should activate to the foreground or background.

> For more information, see [UIUserNotificationAction](uiusernotificationaction.md).

## Declaration

```swift
enum UIUserNotificationActivationMode
```

## Topics

### Constants

- [UIUserNotificationActivationMode.foreground](uiusernotificationactivationmode/foreground.md): Deprecated. Activate the app and put it in the foreground.
- [UIUserNotificationActivationMode.background](uiusernotificationactivationmode/background.md): Deprecated. Activate the app and put it in the background. If the app is already in the foreground, it remains in the foreground.

### Initializers

- [init(rawValue:)](uiusernotificationactivationmode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIUserNotificationActionBehavior](uiusernotificationactionbehavior.md): Deprecated. Constants indicating additional behavior that the action supports.
- [Action Parameter Key](action-parameter-key.md): Key to include among the parameters of the action.
- [Behavior Key](behavior-key.md): Key related to action-related behaviors.

# UIUserNotificationActivationMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating whether the app should activate to the foreground or background.

> For more information, see [UIUserNotificationAction](uiusernotificationaction.md).

## Declaration

```objectivec
enum UIUserNotificationActivationMode : NSUInteger;
```

## Topics

### Constants

- [UIUserNotificationActivationModeForeground](uiusernotificationactivationmode/foreground.md): Deprecated. Activate the app and put it in the foreground.
- [UIUserNotificationActivationModeBackground](uiusernotificationactivationmode/background.md): Deprecated. Activate the app and put it in the background. If the app is already in the foreground, it remains in the foreground.

## See Also

### Constants

- [UIUserNotificationActionBehavior](uiusernotificationactionbehavior.md): Deprecated. Constants indicating additional behavior that the action supports.
- [Action Parameter Key](action-parameter-key.md): Key to include among the parameters of the action.
- [Behavior Key](behavior-key.md): Key related to action-related behaviors.
