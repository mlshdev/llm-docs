> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/notificationusage](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/notificationusage)

# SRDeviceUsageReport.NotificationUsage (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes notification frequency and the manner in which the user interacts with notifications.

## Declaration

```swift
class NotificationUsage
```

<a id="overview"></a>

## Overview

Each instance of this class represents a user notification in a particular app category. For more information, see [notificationUsageByCategory](notificationusagebycategory.md).

## Topics

### Analyzing Notification Use

- [bundleIdentifier](notificationusage/bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [event](notificationusage/event-swift.property.md): The way that the user interacts with the notification.
- [SRDeviceUsageReport.NotificationUsage.Event](notificationusage/event-swift.enum.md): The ways that a user interacts with notifications.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Analyzing Notification Use

- [notificationUsageByCategory](notificationusagebycategory.md): The frequency of notifications per category.

# SRNotificationUsage (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes notification frequency and the manner in which the user interacts with notifications.

## Declaration

```objectivec
@interface SRNotificationUsage : NSObject
```

<a id="overview"></a>

## Overview

Each instance of this class represents a user notification in a particular app category. For more information, see [notificationUsageByCategory](notificationusagebycategory.md).

## Topics

### Analyzing Notification Use

- [bundleIdentifier](notificationusage/bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [event](notificationusage/event-swift.property.md): The way that the user interacts with the notification.
- [SRNotificationEvent](notificationusage/event-swift.enum.md): The ways that a user interacts with notifications.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Analyzing Notification Use

- [notificationUsageByCategory](notificationusagebycategory.md): The frequency of notifications per category.
