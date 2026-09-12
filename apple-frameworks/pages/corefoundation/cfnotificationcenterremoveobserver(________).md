> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcenterremoveobserver(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnotificationcenterremoveobserver(_:_:_:_:))

# CFNotificationCenterRemoveObserver(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops an observer from receiving certain notifications.

## Declaration

```swift
func CFNotificationCenterRemoveObserver(_ center: CFNotificationCenter!, _ observer: UnsafeRawPointer!, _ name: CFNotificationName!, _ object: UnsafeRawPointer!)
```

## Parameters

- `center`: The notification center to modify.
- `observer`: The observer. This value must not be `NULL`.
- `name`: The name of the notification to stop observing. If `NULL`, `observer` stops receiving callbacks for all notifications posted by `object`.
- `object`: The object to stop observing. For distributed notifications, `object` must be a CFString object. If `NULL`, `observer` stops receiving callbacks for all objects posting notifications named `name`.

  If `center` is a Darwin notification center, this value is ignored.

<a id="Discussion"></a>

## Discussion

If both `name` and `object` are `NULL`, this function unregisters `observer` from all the notifications for which it had previously registered with `center`.

## See Also

### Adding and Removing Observers

- [CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:)](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveEveryObserver(\_:\_:)](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.

# CFNotificationCenterRemoveObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops an observer from receiving certain notifications.

## Declaration

```objectivec
extern void CFNotificationCenterRemoveObserver(CFNotificationCenterRef center, const void *observer, CFNotificationName name, const void *object);
```

## Parameters

- `center`: The notification center to modify.
- `observer`: The observer. This value must not be `NULL`.
- `name`: The name of the notification to stop observing. If `NULL`, `observer` stops receiving callbacks for all notifications posted by `object`.
- `object`: The object to stop observing. For distributed notifications, `object` must be a CFString object. If `NULL`, `observer` stops receiving callbacks for all objects posting notifications named `name`.

  If `center` is a Darwin notification center, this value is ignored.

<a id="Discussion"></a>

## Discussion

If both `name` and `object` are `NULL`, this function unregisters `observer` from all the notifications for which it had previously registered with `center`.

## See Also

### Adding and Removing Observers

- [CFNotificationCenterAddObserver](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveEveryObserver](cfnotificationcenterremoveeveryobserver%28____%29.md): Stops an observer from receiving any notifications from any object.
