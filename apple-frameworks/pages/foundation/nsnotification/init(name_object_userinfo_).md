> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/init(name:object:userinfo:)](https://developer.apple.com/documentation/foundation/nsnotification/init(name:object:userinfo:))

# init(name:object:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a notification with a specified name, object, and user information.

## Declaration

```swift
init(name: NSNotification.Name, object: Any?, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `name`: The name for the new notification. May not be `nil`.
- `object`: The object for the new notification.
- `userInfo`: The user information dictionary for the new notification. May be `nil`.

## See Also

### Creating Notifications

- [init(coder:)](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [init(name:object:)](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [NSNotification.Name](name-swift.struct.md): A structure that defines the name of a notification.

# initWithName:object:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a notification with a specified name, object, and user information.

## Declaration

```objectivec
- (instancetype) initWithName:(NSNotificationName) name object:(id) object userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `name`: The name for the new notification. May not be `nil`.
- `object`: The object for the new notification.
- `userInfo`: The user information dictionary for the new notification. May be `nil`.

## See Also

### Creating Notifications

- [init](init.md): Initializes an empty notification.
- [initWithCoder:](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [notificationWithName:object:](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [notificationWithName:object:userInfo:](notificationwithname_object_userinfo_.md): Returns a notification object with a specified name, object, and user information.
- [NSNotificationName](name-swift.struct.md): A structure that defines the name of a notification.
