> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter](https://developer.apple.com/documentation/foundation/distributednotificationcenter)

# DistributedNotificationCenter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A notification dispatch mechanism that enables the broadcast of notifications across task boundaries.

## Declaration

```swift
class DistributedNotificationCenter
```

<a id="overview"></a>

## Overview

A [DistributedNotificationCenter](distributednotificationcenter.md) instance broadcasts [NSNotification](nsnotification.md) objects to objects in other tasks that have registered for the notification with their task’s default distributed notification center.

<a id="Principal-Attributes"></a>

### Principal Attributes

- Notification dispatch table. See “Class at a Glance” \> “Principal Attributes” in [NotificationCenter](notificationcenter.md) for information about the dispatch table.

In addition to the notification name and sender, dispatch table entries for distributed notification centers specify when the notification center delivers notifications to its observers. See the [postNotificationName(\_:object:userInfo:deliverImmediately:)](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md) method, Suspending and Resuming Notification Delivery, and [DistributedNotificationCenter.SuspensionBehavior](distributednotificationcenter/suspensionbehavior.md) for details.

<a id="Commonly-Used-Methods"></a>

### Commonly Used Methods

- **[default()](distributednotificationcenter/default%28%29.md)**: Accesses the default distributed notification center.
- **[addObserver(\_:selector:name:object:suspensionBehavior:)](distributednotificationcenter/addobserver%28__selector_name_object_suspensionbehavior_%29.md)**: Registers an object to receive a notification with a specified behavior when notification delivery is suspended.
- **[postNotificationName(\_:object:userInfo:deliverImmediately:)](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md)**: Creates and posts a notification.
- **[removeObserver(\_:name:object:)](distributednotificationcenter/removeobserver%28__name_object_%29.md)**: Specifies that an object no longer wants to receive certain notifications.

<a id="Overview"></a>

### Overview

Each task has a default distributed notification center that you access with the [default()](distributednotificationcenter/default%28%29.md) class method. There may be different types of distributed notification centers. Currently there is a single type—`NSLocalNotificationCenterType`. This type of distributed notification center handles notifications that can be sent between tasks on a single computer. For communication between tasks on different computers, use [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i).

Posting a *distributed notification* is an expensive operation. The notification gets sent to a system-wide server that distributes it to all the tasks that have objects registered for distributed notifications. The latency between posting the notification and the notification’s arrival in another task is unbounded. In fact, when too many notifications are posted and the server’s queue fills up, notifications may be dropped.

Distributed notifications are delivered via a task’s run loop. A task must be running a run loop in one of the “common” modes, such as `NSDefaultRunLoopMode`, to receive a distributed notification. For multithreaded applications running in macOS 10.3 and later, distributed notifications are always delivered to the main thread. For multithreaded applications running in OS X v10.2.8 and earlier, notifications are delivered to the thread that first used the distributed notifications API, which in most cases is the main thread.

> **Important**

>  `NSDistributedNotificationCenter` does not implement a secure communications protocol. When using distributed notifications, your app should treat any data passed in the notification as untrusted. See [Security Overview](https://developer.apple.com/library/archive/documentation/Security/Conceptual/Security_Overview/Introduction/Introduction.html#//apple_ref/doc/uid/TP30000976) for general guidance on secure coding practices.

> **Note**

>  `NSDistributedNotificationCenter` objects should not be used to send notifications between threads within the same task. Use [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i) or the [NSObject](../objectivec/nsobject-swift.class.md) method [performSelector(onMainThread:with:waitUntilDone:)](../objectivec/nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md), instead. You can also setup an [Port](port.md) object to receive and distribute messages from other threads.

## Topics

### Getting Distributed Notification Centers

- [default()](distributednotificationcenter/default%28%29.md): Returns the default distributed notification center, representing the local notification center for the computer.
- [forType(\_:)](distributednotificationcenter/fortype%28__%29.md): Returns the distributed notification center for a particular notification center type.

### Managing Observers

- [addObserver(\_:selector:name:object:)](distributednotificationcenter/addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [addObserver(\_:selector:name:object:suspensionBehavior:)](distributednotificationcenter/addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [removeObserver(\_:name:object:)](distributednotificationcenter/removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.

### Posting Notifications

- [post(name:object:)](distributednotificationcenter/post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [post(name:object:userInfo:)](distributednotificationcenter/post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:deliverImmediately:)](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:options:)](distributednotificationcenter/postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.

### Suspending and Resuming Notification Delivery

- [suspended](distributednotificationcenter/suspended.md): Suspends or resumes notification delivery.

### Constants

- [DistributedNotificationCenter.Options](distributednotificationcenter/options.md): These constants specify the behavior of notifications posted using the [postNotificationName(\_:object:userInfo:options:)](distributednotificationcenter/postnotificationname%28__object_userinfo_options_%29.md) method.
- [DistributedNotificationCenter.CenterType](distributednotificationcenter/centertype.md): This constant specifies the notification center type.
- [DistributedNotificationCenter.SuspensionBehavior](distributednotificationcenter/suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.

### Initializers

- [init(forType:)](distributednotificationcenter/init%28fortype_%29.md)

## Relationships

### Inherits From

- [NotificationCenter](notificationcenter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSDistributedNotificationCenter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A notification dispatch mechanism that enables the broadcast of notifications across task boundaries.

## Declaration

```objectivec
@interface NSDistributedNotificationCenter : NSNotificationCenter
```

<a id="overview"></a>

## Overview

A [NSDistributedNotificationCenter](distributednotificationcenter.md) instance broadcasts [NSNotification](nsnotification.md) objects to objects in other tasks that have registered for the notification with their task’s default distributed notification center.

<a id="Principal-Attributes"></a>

### Principal Attributes

- Notification dispatch table. See “Class at a Glance” \> “Principal Attributes” in [NSNotificationCenter](notificationcenter.md) for information about the dispatch table.

In addition to the notification name and sender, dispatch table entries for distributed notification centers specify when the notification center delivers notifications to its observers. See the [postNotificationName:object:userInfo:deliverImmediately:](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md) method, Suspending and Resuming Notification Delivery, and [NSNotificationSuspensionBehavior](distributednotificationcenter/suspensionbehavior.md) for details.

<a id="Commonly-Used-Methods"></a>

### Commonly Used Methods

- **[defaultCenter](distributednotificationcenter/default%28%29.md)**: Accesses the default distributed notification center.
- **[addObserver:selector:name:object:suspensionBehavior:](distributednotificationcenter/addobserver%28__selector_name_object_suspensionbehavior_%29.md)**: Registers an object to receive a notification with a specified behavior when notification delivery is suspended.
- **[postNotificationName:object:userInfo:deliverImmediately:](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md)**: Creates and posts a notification.
- **[removeObserver:name:object:](distributednotificationcenter/removeobserver%28__name_object_%29.md)**: Specifies that an object no longer wants to receive certain notifications.

<a id="Overview"></a>

### Overview

Each task has a default distributed notification center that you access with the [defaultCenter](distributednotificationcenter/default%28%29.md) class method. There may be different types of distributed notification centers. Currently there is a single type—`NSLocalNotificationCenterType`. This type of distributed notification center handles notifications that can be sent between tasks on a single computer. For communication between tasks on different computers, use [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i).

Posting a *distributed notification* is an expensive operation. The notification gets sent to a system-wide server that distributes it to all the tasks that have objects registered for distributed notifications. The latency between posting the notification and the notification’s arrival in another task is unbounded. In fact, when too many notifications are posted and the server’s queue fills up, notifications may be dropped.

Distributed notifications are delivered via a task’s run loop. A task must be running a run loop in one of the “common” modes, such as `NSDefaultRunLoopMode`, to receive a distributed notification. For multithreaded applications running in macOS 10.3 and later, distributed notifications are always delivered to the main thread. For multithreaded applications running in OS X v10.2.8 and earlier, notifications are delivered to the thread that first used the distributed notifications API, which in most cases is the main thread.

> **Important**

>  `NSDistributedNotificationCenter` does not implement a secure communications protocol. When using distributed notifications, your app should treat any data passed in the notification as untrusted. See [Security Overview](https://developer.apple.com/library/archive/documentation/Security/Conceptual/Security_Overview/Introduction/Introduction.html#//apple_ref/doc/uid/TP30000976) for general guidance on secure coding practices.

> **Note**

>  `NSDistributedNotificationCenter` objects should not be used to send notifications between threads within the same task. Use [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i) or the [NSObject](../objectivec/nsobject-swift.class.md) method [performSelectorOnMainThread:withObject:waitUntilDone:](../objectivec/nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md), instead. You can also setup an [NSPort](port.md) object to receive and distribute messages from other threads.

## Topics

### Getting Distributed Notification Centers

- [defaultCenter](distributednotificationcenter/default%28%29.md): Returns the default distributed notification center, representing the local notification center for the computer.
- [notificationCenterForType:](distributednotificationcenter/fortype%28__%29.md): Returns the distributed notification center for a particular notification center type.

### Managing Observers

- [addObserver:selector:name:object:](distributednotificationcenter/addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [addObserver:selector:name:object:suspensionBehavior:](distributednotificationcenter/addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [removeObserver:name:object:](distributednotificationcenter/removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.

### Posting Notifications

- [postNotificationName:object:](distributednotificationcenter/post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [postNotificationName:object:userInfo:](distributednotificationcenter/post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName:object:userInfo:deliverImmediately:](distributednotificationcenter/postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName:object:userInfo:options:](distributednotificationcenter/postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.

### Suspending and Resuming Notification Delivery

- [suspended](distributednotificationcenter/suspended.md): Suspends or resumes notification delivery.

### Constants

- [NSDistributedNotificationOptions](distributednotificationcenter/options.md): These constants specify the behavior of notifications posted using the [postNotificationName:object:userInfo:options:](distributednotificationcenter/postnotificationname%28__object_userinfo_options_%29.md) method.
- [NSDistributedNotificationCenterType](distributednotificationcenter/centertype.md): This constant specifies the notification center type.
- [NSNotificationSuspensionBehavior](distributednotificationcenter/suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.

## Relationships

### Inherits From

- [NSNotificationCenter](notificationcenter.md)
