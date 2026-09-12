> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/post(name:object:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/post(name:object:))

# post(name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification, and posts it to the receiver.

## Declaration

```swift
func post(name aName: NSNotification.Name, object anObject: String?)
```

## Parameters

- `aName`: Name of the notification to post. Must not be `nil`.
- `anObject`: Sender of the notification. May be `nil`.

<a id="Discussion"></a>

## Discussion

This method invokes [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md) with `userInfo:nil deliverImmediately:NO`.

## See Also

### Posting Notifications

- [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.

# postNotificationName:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification, and posts it to the receiver.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) aName object:(NSString *) anObject;
```

## Parameters

- `aName`: Name of the notification to post. Must not be `nil`.
- `anObject`: Sender of the notification. May be `nil`.

<a id="Discussion"></a>

## Discussion

This method invokes [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md) with `userInfo:nil deliverImmediately:NO`.

## See Also

### Posting Notifications

- [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.
