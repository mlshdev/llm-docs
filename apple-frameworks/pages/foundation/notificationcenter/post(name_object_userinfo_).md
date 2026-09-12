> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/post(name:object:userinfo:)](https://developer.apple.com/documentation/foundation/notificationcenter/post(name:object:userinfo:))

# post(name:object:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a notification with a given name, sender, and information and posts it to the notification center.

## Declaration

```swift
func post(name aName: NSNotification.Name, object anObject: Any?, userInfo aUserInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `aName`: The name of the notification.
- `anObject`: The object posting the notification.
- `aUserInfo`: A user info dictionary with optional information about the notification.

## See Also

### Posting notifications

- [post(\_:)](post%28__%29-3x2st.md): Posts a given notification to the notification center.
- [post(name:object:)](post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.

# postNotificationName:object:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a notification with a given name, sender, and information and posts it to the notification center.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) aName object:(id) anObject userInfo:(NSDictionary *) aUserInfo;
```

## Parameters

- `aName`: The name of the notification.
- `anObject`: The object posting the notification.
- `aUserInfo`: A user info dictionary with optional information about the notification.

## See Also

### Posting notifications

- [postNotification:](post%28__%29-3x2st.md): Posts a given notification to the notification center.
- [postNotificationName:object:](post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.
