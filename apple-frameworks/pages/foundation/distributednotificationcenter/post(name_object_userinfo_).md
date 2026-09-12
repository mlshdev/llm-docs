> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/post(name:object:userinfo:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/post(name:object:userinfo:))

# post(name:object:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information, and posts it to the receiver.

## Declaration

```swift
func post(name aName: NSNotification.Name, object anObject: String?, userInfo aUserInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `aName`: Name of the notification to post. Must not be `nil`.
- `anObject`: Sender of the notification. May be `nil`.
- `aUserInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `notificationInfo` *must* be `nil`.

<a id="Discussion"></a>

## Discussion

This method invokes [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md) with `deliverImmediately:NO`.

## See Also

### Posting Notifications

- [post(name:object:)](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.

# postNotificationName:object:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information, and posts it to the receiver.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) aName object:(NSString *) anObject userInfo:(NSDictionary *) aUserInfo;
```

## Parameters

- `aName`: Name of the notification to post. Must not be `nil`.
- `anObject`: Sender of the notification. May be `nil`.
- `aUserInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `notificationInfo` *must* be `nil`.

<a id="Discussion"></a>

## Discussion

This method invokes [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md) with `deliverImmediately:NO`.

## See Also

### Posting Notifications

- [postNotificationName:object:](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
- [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.
