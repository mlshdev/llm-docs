> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationaction](https://developer.apple.com/documentation/foundation/nsusernotificationaction)

# NSUserNotificationAction (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An action that the user can take in response to receiving a notification.

> Use the [User Notifications](../usernotifications.md) framework instead.

## Declaration

```swift
class NSUserNotificationAction
```

<a id="overview"></a>

## Overview

User notifications can specify one or more actions to show to the user by using the [additionalActivationAction](nsusernotification/additionalactivationaction.md) or [additionalActions](nsusernotification/additionalactions.md) properties. [NSUserNotificationAction](nsusernotificationaction.md) objects contain the localized title shown to the user and an identifier used to differentiate between presented actions.

## Topics

### Creating User Notification Actions

- [init(identifier:title:)](nsusernotificationaction/init%28identifier_title_%29.md): Deprecated. Creates a user notification action with a specified identifier and title.

### Getting the Identifier and Title

- [identifier](nsusernotificationaction/identifier.md): Deprecated. The identifier for the user notification action.
- [title](nsusernotificationaction/title.md): Deprecated. The localized title shown to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationCenter](nsusernotificationcenter.md): Deprecated. An object that delivers notifications from apps to the user.
- [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md): An interface that enables customizing the behavior of the default notification center.

# NSUserNotificationAction (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An action that the user can take in response to receiving a notification.

> Use the [User Notifications](../usernotifications.md) framework instead.

## Declaration

```objectivec
@interface NSUserNotificationAction : NSObject
```

<a id="overview"></a>

## Overview

User notifications can specify one or more actions to show to the user by using the [additionalActivationAction](nsusernotification/additionalactivationaction.md) or [additionalActions](nsusernotification/additionalactions.md) properties. [NSUserNotificationAction](nsusernotificationaction.md) objects contain the localized title shown to the user and an identifier used to differentiate between presented actions.

## Topics

### Creating User Notification Actions

- [actionWithIdentifier:title:](nsusernotificationaction/init%28identifier_title_%29.md): Deprecated. Creates a user notification action with a specified identifier and title.

### Getting the Identifier and Title

- [identifier](nsusernotificationaction/identifier.md): Deprecated. The identifier for the user notification action.
- [title](nsusernotificationaction/title.md): Deprecated. The localized title shown to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationCenter](nsusernotificationcenter.md): Deprecated. An object that delivers notifications from apps to the user.
- [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md): An interface that enables customizing the behavior of the default notification center.
