> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/init(coder:)](https://developer.apple.com/documentation/foundation/nsnotification/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a notification with the data from an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating Notifications

- [init(name:object:)](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [init(name:object:userInfo:)](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotification.Name](name-swift.struct.md): A structure that defines the name of a notification.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a notification with the data from an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating Notifications

- [init](init.md): Initializes an empty notification.
- [notificationWithName:object:](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [notificationWithName:object:userInfo:](notificationwithname_object_userinfo_.md): Returns a notification object with a specified name, object, and user information.
- [initWithName:object:userInfo:](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotificationName](name-swift.struct.md): A structure that defines the name of a notification.
