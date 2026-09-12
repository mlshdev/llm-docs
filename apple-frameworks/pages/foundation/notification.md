> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notification](https://developer.apple.com/documentation/foundation/notification)

# Notification

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container for information broadcast through a notification center to all registered observers.

## Declaration

```swift
struct Notification
```

## Topics

### Creating a Notification

- [init(name:object:userInfo:)](notification/init%28name_object_userinfo_%29.md): Initializes a new notification.
- [Notification.Name](notification/name-swift.typealias.md): An alias for a type used to represent the name of a notification.
- [NSNotification.Name](nsnotification/name-swift.struct.md): A structure that defines the name of a notification.

### Getting Notification Information

- [name](notification/name-swift.property.md): A tag identifying the notification.
- [object](notification/object.md): An object that the poster wishes to send to observers.
- [userInfo](notification/userinfo.md): Storage for values or objects related to this notification.

### Using Reference Types

- [NSNotification](nsnotification.md): A container for information broadcast through a notification center to all registered observers.

### Operators

- [==(\_:\_:)](notification/==%28____%29.md): Compare two notifications for equality.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)

## See Also

### Notifications

- [NotificationCenter](notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.
- [NotificationQueue](notificationqueue.md): A notification center buffer.
