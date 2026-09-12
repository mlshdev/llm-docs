> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/postnotificationname(_:object:userinfo:deliverimmediately:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/postnotificationname(_:object:userinfo:deliverimmediately:))

# postNotificationName(\_:object:userInfo:deliverImmediately:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

## Declaration

```swift
func postNotificationName(_ name: NSNotification.Name, object: String?, userInfo: [AnyHashable : Any]? = nil, deliverImmediately: Bool)
```

## Parameters

- `name`: Name of the notification to post. Must not be `nil`.
- `object`: Sender of the notification. May be `nil`.
- `userInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `userInfo` *must* be `nil`.
- `deliverImmediately`: Specifies when to deliver the notification. When [false](https://developer.apple.com/documentation/swift/false), the receiver delivers notifications to their observers according to the suspended-notification behavior specified in the corresponding dispatch table entry. When [true](https://developer.apple.com/documentation/swift/true), the receiver delivers the notification immediately to its observers.

<a id="Discussion"></a>

## Discussion

This is the preferred method for posting notifications.

The `notificationInfo` dictionary is serialized as a property list, so it can be passed to another task. In the receiving task, it is deserialized back into a dictionary. This serialization imposes some restrictions on the objects that can be placed in the `notificationInfo` dictionary. See XML Property Lists for details.

## See Also

### Related Documentation

- [unarchiveObject(with:)](../nsunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.
- [encodeRootObject(\_:)](../nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.

### Posting Notifications

- [post(name:object:)](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [post(name:object:userInfo:)](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.

# postNotificationName:object:userInfo:deliverImmediately: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

## Declaration

```objectivec
- (void) postNotificationName:(NSNotificationName) name object:(NSString *) object userInfo:(NSDictionary *) userInfo deliverImmediately:(BOOL) deliverImmediately;
```

## Parameters

- `name`: Name of the notification to post. Must not be `nil`.
- `object`: Sender of the notification. May be `nil`.
- `userInfo`: Dictionary containing additional information. May be `nil`.

  > **Important**

  >  Sandboxed apps can send notifications only if they do not contain a dictionary. If the sending application is in an App Sandbox, `userInfo` *must* be `nil`.
- `deliverImmediately`: Specifies when to deliver the notification. When [false](https://developer.apple.com/documentation/swift/false), the receiver delivers notifications to their observers according to the suspended-notification behavior specified in the corresponding dispatch table entry. When [true](https://developer.apple.com/documentation/swift/true), the receiver delivers the notification immediately to its observers.

<a id="Discussion"></a>

## Discussion

This is the preferred method for posting notifications.

The `notificationInfo` dictionary is serialized as a property list, so it can be passed to another task. In the receiving task, it is deserialized back into a dictionary. This serialization imposes some restrictions on the objects that can be placed in the `notificationInfo` dictionary. See XML Property Lists for details.

## See Also

### Related Documentation

- [unarchiveObjectWithData:](../nsunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.
- [encodeRootObject:](../nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.

### Posting Notifications

- [postNotificationName:object:](post%28name_object_%29.md): Creates a notification, and posts it to the receiver.
- [postNotificationName:object:userInfo:](post%28name_object_userinfo_%29.md): Creates a notification with information, and posts it to the receiver.
- [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md): Creates a notification with information, and posts it to the receiver.
