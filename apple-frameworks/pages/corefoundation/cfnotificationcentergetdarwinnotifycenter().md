> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcentergetdarwinnotifycenter()](https://developer.apple.com/documentation/corefoundation/cfnotificationcentergetdarwinnotifycenter())

# CFNotificationCenterGetDarwinNotifyCenter() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the application’s Darwin notification center.

## Declaration

```swift
func CFNotificationCenterGetDarwinNotifyCenter() -> CFNotificationCenter!
```

<a id="return-value"></a>

## Return Value

The application’s Darwin notification center.

<a id="Discussion"></a>

## Discussion

This notification center is used to cover the `<notify.h>` Core OS notification mechanism (see `/usr/include/notify.h`). An application has only one Darwin notification center, so this function returns the same value each time it is called.

The Darwin Notify Center has no notion of per-user sessions, all notifications are system-wide. As with distributed notifications, the main thread’s run loop must be running in one of the common modes (usually `kCFRunLoopDefaultMode`) for Darwin-style notifications to be delivered.

> **Important**

>  Several function parameters are ignored by Darwin notification centers. To ensure future compatibility, you should pass `NULL` or `0` for all ignored arguments.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDistributedCenter()](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.
- [CFNotificationCenterGetLocalCenter()](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.

# CFNotificationCenterGetDarwinNotifyCenter (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the application’s Darwin notification center.

## Declaration

```objectivec
extern CFNotificationCenterRefCFNotificationCenterGetDarwinNotifyCenter();
```

<a id="return-value"></a>

## Return Value

The application’s Darwin notification center.

<a id="Discussion"></a>

## Discussion

This notification center is used to cover the `<notify.h>` Core OS notification mechanism (see `/usr/include/notify.h`). An application has only one Darwin notification center, so this function returns the same value each time it is called.

The Darwin Notify Center has no notion of per-user sessions, all notifications are system-wide. As with distributed notifications, the main thread’s run loop must be running in one of the common modes (usually `kCFRunLoopDefaultMode`) for Darwin-style notifications to be delivered.

> **Important**

>  Several function parameters are ignored by Darwin notification centers. To ensure future compatibility, you should pass `NULL` or `0` for all ignored arguments.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDistributedCenter](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.
- [CFNotificationCenterGetLocalCenter](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.
