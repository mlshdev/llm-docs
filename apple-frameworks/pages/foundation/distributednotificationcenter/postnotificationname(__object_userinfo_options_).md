> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/postnotificationname(_:object:userinfo:options:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/postnotificationname(_:object:userinfo:options:))

# postNotificationName(\_:object:userInfo:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information, and posts it to the receiver.

## Declaration

```swift
func postNotificationName(_ name: NSNotification.Name, object: String?, userInfo: [AnyHashable : Any]? = nil, options: DistributedNotificationCenter.Options = [])
```

## Parameters

- `name`: Name of the notification to post. Must not be `nil`.
- `object`: Sender of the notification. May be `nil`.
- `userInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `userInfo` *must* be `nil`.
- `options`: Specifies how the notification is posted to the task and when to deliver it to its observers. See `Notification Posting Behavior` for details.

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary is serialized as a property list, so it can be passed to another task. In the receiving task, it is deserialized back into a dictionary. This serialization imposes some restrictions on the objects that can be placed in the `userInfo` dictionary. See XML Property Lists for details.

## See Also

### Posting Notifications

- [post(name:object:)](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

# postNotificationName:object:userInfo:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information, and posts it to the receiver.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) name object:(NSString *) object userInfo:(NSDictionary *) userInfo options:(NSDistributedNotificationOptions) options;
```

## Parameters

- `name`: Name of the notification to post. Must not be `nil`.
- `object`: Sender of the notification. May be `nil`.
- `userInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `userInfo` *must* be `nil`.
- `options`: Specifies how the notification is posted to the task and when to deliver it to its observers. See `Notification Posting Behavior` for details.

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary is serialized as a property list, so it can be passed to another task. In the receiving task, it is deserialized back into a dictionary. This serialization imposes some restrictions on the objects that can be placed in the `userInfo` dictionary. See XML Property Lists for details.

## See Also

### Posting Notifications

- [postNotificationName:object:](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
