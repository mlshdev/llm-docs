> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/post(_:)-3x2st](https://developer.apple.com/documentation/foundation/notificationcenter/post(_:)-3x2st)

# post(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posts a given notification to the notification center.

## Declaration

```swift
func post(_ notification: Notification)
```

## Parameters

- `notification`: The notification to post.

## See Also

### Posting notifications

- [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md): Creates a notification with a given name, sender, and information and posts it to the notification center.
- [post(name:object:)](post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.

# postNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posts a given notification to the notification center.

## Declaration

```objectivec
- (void) postNotification:(NSNotification *) notification;
```

## Parameters

- `notification`: The notification to post.

## See Also

### Posting notifications

- [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md): Creates a notification with a given name, sender, and information and posts it to the notification center.
- [postNotificationName:object:](post%28name_object_%29.md): Creates a notification with a given name and sender and posts it to the notification center.
