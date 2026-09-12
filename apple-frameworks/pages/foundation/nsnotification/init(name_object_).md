> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/init(name:object:)](https://developer.apple.com/documentation/foundation/nsnotification/init(name:object:))

# init(name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new notification object with a specified name and object.

## Declaration

```swift
convenience init(name aName: NSNotification.Name, object anObject: Any?)
```

## Parameters

- `aName`: The name for the new notification. May not be `nil`.
- `anObject`: The object for the new notification.

## See Also

### Related Documentation

- [post(name:object:)](../notificationcenter/post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.
- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Creating Notifications

- [init(coder:)](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [init(name:object:userInfo:)](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotification.Name](name-swift.struct.md): A structure that defines the name of a notification.

# notificationWithName:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new notification object with a specified name and object.

## Declaration

```objectivec
+ (instancetype) notificationWithName:(NSNotificationName) aName object:(id) anObject;
```

## Parameters

- `aName`: The name for the new notification. May not be `nil`.
- `anObject`: The object for the new notification.

## See Also

### Related Documentation

- [postNotificationName:object:](../notificationcenter/post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.
- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Creating Notifications

- [init](init.md): Initializes an empty notification.
- [initWithCoder:](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [notificationWithName:object:userInfo:](notificationwithname_object_userinfo_.md): Returns a notification object with a specified name, object, and user information.
- [initWithName:object:userInfo:](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotificationName](name-swift.struct.md): A structure that defines the name of a notification.
