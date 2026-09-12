> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/post(name:object:)](https://developer.apple.com/documentation/foundation/notificationcenter/post(name:object:))

# post(name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a notification with a given name and sender and posts it to the notification center.

## Declaration

```swift
func post(name aName: NSNotification.Name, object anObject: Any?)
```

## Parameters

- `aName`: The name of the notification.
- `anObject`: The object posting the notification.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md) and passing `nil` to `aUserInfo`.

## See Also

### Posting notifications

- [post(\_:)](post%28__%29-3x2st.md): Posts a given notification to the notification center.
- [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md): Creates a notification with a given name, sender, and information and posts it to the notification center.

# postNotificationName:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a notification with a given name and sender and posts it to the notification center.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) aName object:(id) anObject;
```

## Parameters

- `aName`: The name of the notification.
- `anObject`: The object posting the notification.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md) and passing `nil` to `aUserInfo`.

## See Also

### Posting notifications

- [postNotification:](post%28__%29-3x2st.md): Posts a given notification to the notification center.
- [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md): Creates a notification with a given name, sender, and information and posts it to the notification center.
