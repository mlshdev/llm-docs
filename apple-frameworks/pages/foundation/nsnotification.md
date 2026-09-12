> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification](https://developer.apple.com/documentation/foundation/nsnotification)

# NSNotification (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container for information broadcast through a notification center to all registered observers.

## Declaration

```swift
class NSNotification
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Notification](notification.md); use [NSNotification](nsnotification.md) when you need reference semantics or other Foundation-specific behavior.

A notification contains a name, an object, and an optional dictionary, and is broadcast to by instances of  [NotificationCenter](notificationcenter.md) or [DistributedNotificationCenter](distributednotificationcenter.md). The name is a tag identifying the notification. The object is any object that the poster of the notification wants to send to observers of that notification (typically, the object posting the notification). The dictionary stores other related objects, if any. [NSNotification](nsnotification.md) objects are immutable.

You don’t usually create your own notifications directly, but instead call the [NotificationCenter](notificationcenter.md) methods [post(name:object:)](notificationcenter/post%28name_object_%29.md) and [post(name:object:userInfo:)](notificationcenter/post%28name_object_userinfo_%29.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [Notification](notification.md) structure, which bridges to the [NSNotification](nsnotification.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Object-Comparison"></a>

### Object Comparison

The objects of a notification are compared using pointer equality for local notifications. Distributed notifications use strings as their objects, and those strings are compared using [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md), because pointer equality doesn’t make sense across process boundaries.

<a id="Creating-Subclasses"></a>

### Creating Subclasses

You can subclass [NSNotification](nsnotification.md) to contain information in addition to the notification name, object, and dictionary. This extra data must be agreed upon between notifiers and observers.

[NotificationCenter](notificationcenter.md) is a class cluster with no instance variables. As such, you must subclass [NSNotification](nsnotification.md) and override the primitive methods [name](nsnotification/name-swift.property.md), [object](nsnotification/object.md), and [userInfo](nsnotification/userinfo.md). You can choose any designated initializer you like, but be sure that your initializer does not call [init](nsnotification/init.md) on `super` ([NSNotification](nsnotification.md) is not meant to be instantiated directly, and its `init` method raises an exception).

## Topics

### Creating Notifications

- [init(coder:)](nsnotification/init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [init(name:object:)](nsnotification/init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [init(name:object:userInfo:)](nsnotification/init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotification.Name](nsnotification/name-swift.struct.md): A structure that defines the name of a notification.

### Getting Notification Information

- [name](nsnotification/name-swift.property.md): The name of the notification.
- [object](nsnotification/object.md): The object associated with the notification.
- [userInfo](nsnotification/userinfo.md): The user information dictionary associated with the notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

# NSNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container for information broadcast through a notification center to all registered observers.

## Declaration

```objectivec
@interface NSNotification : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Notification](notification.md); use [NSNotification](nsnotification.md) when you need reference semantics or other Foundation-specific behavior.

A notification contains a name, an object, and an optional dictionary, and is broadcast to by instances of  [NSNotificationCenter](notificationcenter.md) or [NSDistributedNotificationCenter](distributednotificationcenter.md). The name is a tag identifying the notification. The object is any object that the poster of the notification wants to send to observers of that notification (typically, the object posting the notification). The dictionary stores other related objects, if any. [NSNotification](nsnotification.md) objects are immutable.

You don’t usually create your own notifications directly, but instead call the [NSNotificationCenter](notificationcenter.md) methods [postNotificationName:object:](notificationcenter/post%28name_object_%29.md) and [postNotificationName:object:userInfo:](notificationcenter/post%28name_object_userinfo_%29.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [Notification](notification.md) structure, which bridges to the [NSNotification](nsnotification.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Object-Comparison"></a>

### Object Comparison

The objects of a notification are compared using pointer equality for local notifications. Distributed notifications use strings as their objects, and those strings are compared using [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md), because pointer equality doesn’t make sense across process boundaries.

<a id="Creating-Subclasses"></a>

### Creating Subclasses

You can subclass [NSNotification](nsnotification.md) to contain information in addition to the notification name, object, and dictionary. This extra data must be agreed upon between notifiers and observers.

[NSNotificationCenter](notificationcenter.md) is a class cluster with no instance variables. As such, you must subclass [NSNotification](nsnotification.md) and override the primitive methods [name](nsnotification/name-swift.property.md), [object](nsnotification/object.md), and [userInfo](nsnotification/userinfo.md). You can choose any designated initializer you like, but be sure that your initializer does not call [init](nsnotification/init.md) on `super` ([NSNotification](nsnotification.md) is not meant to be instantiated directly, and its `init` method raises an exception).

## Topics

### Creating Notifications

- [init](nsnotification/init.md): Initializes an empty notification.
- [initWithCoder:](nsnotification/init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [notificationWithName:object:](nsnotification/init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [notificationWithName:object:userInfo:](nsnotification/notificationwithname_object_userinfo_.md): Returns a notification object with a specified name, object, and user information.
- [initWithName:object:userInfo:](nsnotification/init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotificationName](nsnotification/name-swift.struct.md): A structure that defines the name of a notification.

### Getting Notification Information

- [name](nsnotification/name-swift.property.md): The name of the notification.
- [object](nsnotification/object.md): The object associated with the notification.
- [userInfo](nsnotification/userinfo.md): The user information dictionary associated with the notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Notifications

- [NSNotificationCenter](notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.
- [NSNotificationQueue](notificationqueue.md): A notification center buffer.
