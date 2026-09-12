> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/addobserver(_:selector:name:object:suspensionbehavior:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/addobserver(_:selector:name:object:suspensionbehavior:))

# addObserver(\_:selector:name:object:suspensionBehavior:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.

## Declaration

```swift
func addObserver(_ observer: Any, selector: Selector, name: NSNotification.Name?, object: String?, suspensionBehavior: DistributedNotificationCenter.SuspensionBehavior)
```

## Parameters

- `observer`: Object registering as an observer. Must not be `nil`.
- `selector`: Selector that specifies the message the receiver sends `notificationObserver` to notify it of the notification posting. Must not be `0`.
- `name`: The name of the notification for which to register the observer; that is, only notifications with this name are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s name to decide whether to deliver it to the observer.
- `object`: The object whose notifications the observer wants to receive; that is, only notifications sent by this sender are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s sender to decide whether to deliver it to the observer.
- `suspensionBehavior`: Notification posting behavior when notification delivery is suspended.

<a id="Discussion"></a>

## Discussion

The receiver does not retain `notificationObserver`. Therefore, you should always send `NotificationCenter/removeObserver(_:)` or [removeObserver(\_:name:object:)](removeobserver%28__name_object_%29.md) to the receiver before releasing `notificationObserver`.

## See Also

### Related Documentation

- [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

### Managing Observers

- [addObserver(\_:selector:name:object:)](addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [removeObserver(\_:name:object:)](removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.

# addObserver:selector:name:object:suspensionBehavior: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.

## Declaration

```objectivec
- (void) addObserver:(id) observer selector:(SEL) selector name:(NSNotificationName) name object:(NSString *) object suspensionBehavior:(NSNotificationSuspensionBehavior) suspensionBehavior;
```

## Parameters

- `observer`: Object registering as an observer. Must not be `nil`.
- `selector`: Selector that specifies the message the receiver sends `notificationObserver` to notify it of the notification posting. Must not be `0`.
- `name`: The name of the notification for which to register the observer; that is, only notifications with this name are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s name to decide whether to deliver it to the observer.
- `object`: The object whose notifications the observer wants to receive; that is, only notifications sent by this sender are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s sender to decide whether to deliver it to the observer.
- `suspensionBehavior`: Notification posting behavior when notification delivery is suspended.

<a id="Discussion"></a>

## Discussion

The receiver does not retain `notificationObserver`. Therefore, you should always send `NotificationCenter/removeObserver(_:)` or [removeObserver:name:object:](removeobserver%28__name_object_%29.md) to the receiver before releasing `notificationObserver`.

## See Also

### Related Documentation

- [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

### Managing Observers

- [addObserver:selector:name:object:](addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [removeObserver:name:object:](removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.
