> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcenteraddobserver(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnotificationcenteraddobserver(_:_:_:_:_:_:))

# CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers an observer to receive notifications.

## Declaration

```swift
func CFNotificationCenterAddObserver(_ center: CFNotificationCenter!, _ observer: UnsafeRawPointer!, _ callBack: CFNotificationCallback!, _ name: CFString!, _ object: UnsafeRawPointer!, _ suspensionBehavior: CFNotificationSuspensionBehavior)
```

## Parameters

- `center`: The notification center to which to add the observer.
- `observer`: The observer. In macOS 10.3 and later, this parameter may be `NULL`.
- `callBack`: The callback function to call when `object` posts the notification named `name`.
- `name`: The name of the notification to observe. If `NULL`, `callback` is called for any notification posted by `object`.

  If `center` is a Darwin notification center, this value must *not* be `NULL`.
- `object`: The object to observe. For distributed notifications, `object` must be a CFString object. If `NULL`, `callback` is called when a notification named `name` is posted by any object.

  If `center` is a Darwin notification center, this value is ignored.
- `suspensionBehavior`: Flag indicating how notifications should be handled when the application is in the background. See [CFNotificationSuspensionBehavior](cfnotificationsuspensionbehavior.md) for the list of available values.

  If `center` is a Darwin notification center, this value is ignored.

<a id="Discussion"></a>

## Discussion

Notification delivery is registered for the main thread.

If you need to control which thread processes a notification, your callback function must be able to forward the notification to the proper thread. You can use a `CFMessagePort` object or a custom `CFRunLoopSource` object to send notifications to the correct thread’s run loop.

## See Also

### Related Documentation

- [CFRunLoopSource](cfrunloopsource.md)
- [CFMessagePort](cfmessageport.md)

### Adding and Removing Observers

- [CFNotificationCenterRemoveEveryObserver(\_:\_:)](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.
- [CFNotificationCenterRemoveObserver(\_:\_:\_:\_:)](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.

# CFNotificationCenterAddObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers an observer to receive notifications.

## Declaration

```objectivec
extern void CFNotificationCenterAddObserver(CFNotificationCenterRef center, const void *observer, CFNotificationCallback callBack, CFStringRef name, const void *object, CFNotificationSuspensionBehavior suspensionBehavior);
```

## Parameters

- `center`: The notification center to which to add the observer.
- `observer`: The observer. In macOS 10.3 and later, this parameter may be `NULL`.
- `callBack`: The callback function to call when `object` posts the notification named `name`.
- `name`: The name of the notification to observe. If `NULL`, `callback` is called for any notification posted by `object`.

  If `center` is a Darwin notification center, this value must *not* be `NULL`.
- `object`: The object to observe. For distributed notifications, `object` must be a CFString object. If `NULL`, `callback` is called when a notification named `name` is posted by any object.

  If `center` is a Darwin notification center, this value is ignored.
- `suspensionBehavior`: Flag indicating how notifications should be handled when the application is in the background. See [CFNotificationSuspensionBehavior](cfnotificationsuspensionbehavior.md) for the list of available values.

  If `center` is a Darwin notification center, this value is ignored.

<a id="Discussion"></a>

## Discussion

Notification delivery is registered for the main thread.

If you need to control which thread processes a notification, your callback function must be able to forward the notification to the proper thread. You can use a `CFMessagePort` object or a custom `CFRunLoopSource` object to send notifications to the correct thread’s run loop.

## See Also

### Related Documentation

- [CFRunLoopSourceRef](cfrunloopsource.md)
- [CFMessagePortRef](cfmessageport.md)

### Adding and Removing Observers

- [CFNotificationCenterRemoveEveryObserver](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.
- [CFNotificationCenterRemoveObserver](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.
