> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/notificationwithname:object:userinfo:](https://developer.apple.com/documentation/foundation/nsnotification/notificationwithname:object:userinfo:)

# notificationWithName:object:userInfo:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a notification object with a specified name, object, and user information.

## Declaration

```objectivec
+ (instancetype) notificationWithName:(NSNotificationName) aName object:(id) anObject userInfo:(NSDictionary *) aUserInfo;
```

## Parameters

- `aName`: The name for the new notification. May not be `nil`.
- `anObject`: The object for the new notification.
- `aUserInfo`: The user information dictionary for the new notification. May be `nil`.

## See Also

### Related Documentation

- [postNotificationName:object:userInfo:](../notificationcenter/post%28name_object_userinfo_%29.md): Creates a notification with a given name, sender, and information and posts it to the notification center.

### Creating Notifications

- [init](init.md): Initializes an empty notification.
- [initWithCoder:](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [notificationWithName:object:](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [initWithName:object:userInfo:](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
- [NSNotificationName](name-swift.struct.md): A structure that defines the name of a notification.
