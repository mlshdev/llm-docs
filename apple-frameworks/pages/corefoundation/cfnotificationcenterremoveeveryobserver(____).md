> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcenterremoveeveryobserver(_:_:)](https://developer.apple.com/documentation/corefoundation/cfnotificationcenterremoveeveryobserver(_:_:))

# CFNotificationCenterRemoveEveryObserver(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops an observer from receiving any notifications from any object.

## Declaration

```swift
func CFNotificationCenterRemoveEveryObserver(_ center: CFNotificationCenter!, _ observer: UnsafeRawPointer!)
```

## Parameters

- `center`: The notification center from which to remove observers.
- `observer`: The observer. This value must not be `NULL`.

<a id="Discussion"></a>

## Discussion

If you no longer want an observer to receive any notifications, perhaps because the observer is being deallocated, you can call this function to unregister the observer from all the notifications for which it had previously registered.

## See Also

### Adding and Removing Observers

- [CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:)](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveObserver(\_:\_:\_:\_:)](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.

# CFNotificationCenterRemoveEveryObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops an observer from receiving any notifications from any object.

## Declaration

```objectivec
extern void CFNotificationCenterRemoveEveryObserver(CFNotificationCenterRef center, const void *observer);
```

## Parameters

- `center`: The notification center from which to remove observers.
- `observer`: The observer. This value must not be `NULL`.

<a id="Discussion"></a>

## Discussion

If you no longer want an observer to receive any notifications, perhaps because the observer is being deallocated, you can call this function to unregister the observer from all the notifications for which it had previously registered.

## See Also

### Adding and Removing Observers

- [CFNotificationCenterAddObserver](cfnotificationcenteraddobserver%28____________%29.md): Registers an observer to receive notifications.
- [CFNotificationCenterRemoveObserver](cfnotificationcenterremoveobserver%28________%29.md): Stops an observer from receiving certain notifications.
