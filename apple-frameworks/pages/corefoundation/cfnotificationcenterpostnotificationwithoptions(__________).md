> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcenterpostnotificationwithoptions(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnotificationcenterpostnotificationwithoptions(_:_:_:_:_:))

# CFNotificationCenterPostNotificationWithOptions(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Posts a notification for an object using specified options.

## Declaration

```swift
func CFNotificationCenterPostNotificationWithOptions(_ center: CFNotificationCenter!, _ name: CFNotificationName!, _ object: UnsafeRawPointer!, _ userInfo: CFDictionary!, _ options: CFOptionFlags)
```

## Parameters

- `center`: The notification center to post the notification.
- `name`: The name of the notification to post. This value must not be `NULL`.
- `object`: The object posting the notification. If `NULL`, the notification is sent only to observers that are observing all objects. In other words, only observers that registered for the notification with a `NULL` value for `object` will receive the notification.

  If you want to allow your clients to register for notifications using Cocoa APIs (see [NotificationCenter](../foundation/notificationcenter.md)), then `object` must be a Core Foundation or Cocoa object.

  For distributed notifications, `object` must be a CFString object.

  If `center` is a Darwin notification center, this value is ignored.
- `userInfo`: A dictionary to pass to observers. You populate this dictionary with additional information describing the notification. For distributed notifications, the dictionary must contain only property list objects. Can be `NULL`. If `center` is a Darwin notification center, this value is ignored.
- `options`: Specifies if the notification should be posted immediately, or to all sessions. See [Notification Posting Options](1569610-notification-posting-options.md) for possible values.

  If `center` is a Darwin notification center, this value is ignored.

## See Also

### Posting a Notification

- [CFNotificationCenterPostNotification(\_:\_:\_:\_:\_:)](cfnotificationcenterpostnotification%28__________%29.md): Posts a notification for an object.

# CFNotificationCenterPostNotificationWithOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Posts a notification for an object using specified options.

## Declaration

```objectivec
extern void CFNotificationCenterPostNotificationWithOptions(CFNotificationCenterRef center, CFNotificationName name, const void *object, CFDictionaryRef userInfo, CFOptionFlags options);
```

## Parameters

- `center`: The notification center to post the notification.
- `name`: The name of the notification to post. This value must not be `NULL`.
- `object`: The object posting the notification. If `NULL`, the notification is sent only to observers that are observing all objects. In other words, only observers that registered for the notification with a `NULL` value for `object` will receive the notification.

  If you want to allow your clients to register for notifications using Cocoa APIs (see [NSNotificationCenter](../foundation/notificationcenter.md)), then `object` must be a Core Foundation or Cocoa object.

  For distributed notifications, `object` must be a CFString object.

  If `center` is a Darwin notification center, this value is ignored.
- `userInfo`: A dictionary to pass to observers. You populate this dictionary with additional information describing the notification. For distributed notifications, the dictionary must contain only property list objects. Can be `NULL`. If `center` is a Darwin notification center, this value is ignored.
- `options`: Specifies if the notification should be posted immediately, or to all sessions. See [Notification Posting Options](1569610-notification-posting-options.md) for possible values.

  If `center` is a Darwin notification center, this value is ignored.

## See Also

### Posting a Notification

- [CFNotificationCenterPostNotification](cfnotificationcenterpostnotification%28__________%29.md): Posts a notification for an object.
