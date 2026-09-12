> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/addobserver(_:selector:name:object:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/addobserver(_:selector:name:object:))

# addObserver(\_:selector:name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.

## Declaration

```swift
func addObserver(_ observer: Any, selector aSelector: Selector, name aName: NSNotification.Name?, object anObject: String?)
```

## Parameters

- `observer`: An object registering as an observer.
- `aSelector`: A selector that the notification center sends `notificationObserver` to notify when posting the notification.
- `aName`: The name of the notification for which to register the observer; that is, only notifications with this name are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s name to decide whether to deliver it to the observer.
- `anObject`: The object whose notifications the observer wants to receive; that is, only notifications sent by this sender are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s sender to decide whether to deliver it to the observer.

<a id="Discussion"></a>

## Discussion

This method calls [addObserver(\_:selector:name:object:suspensionBehavior:)](addobserver%28__selector_name_object_suspensionbehavior_%29.md), passing [DistributedNotificationCenter.SuspensionBehavior.coalesce](suspensionbehavior/coalesce.md) for `suspensionBehavior`.

## See Also

### Managing Observers

- [addObserver(\_:selector:name:object:suspensionBehavior:)](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [removeObserver(\_:name:object:)](removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.

# addObserver:selector:name:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.

## Declaration

```objectivec
- (void) addObserver:(id) observer selector:(SEL) aSelector name:(NSNotificationName) aName object:(NSString *) anObject;
```

## Parameters

- `observer`: An object registering as an observer.
- `aSelector`: A selector that the notification center sends `notificationObserver` to notify when posting the notification.
- `aName`: The name of the notification for which to register the observer; that is, only notifications with this name are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s name to decide whether to deliver it to the observer.
- `anObject`: The object whose notifications the observer wants to receive; that is, only notifications sent by this sender are delivered to the observer. When `nil`, the notification center doesn’t use a notification’s sender to decide whether to deliver it to the observer.

<a id="Discussion"></a>

## Discussion

This method calls [addObserver:selector:name:object:suspensionBehavior:](addobserver%28__selector_name_object_suspensionbehavior_%29.md), passing [NSNotificationSuspensionBehaviorCoalesce](suspensionbehavior/coalesce.md) for `suspensionBehavior`.

## See Also

### Managing Observers

- [addObserver:selector:name:object:suspensionBehavior:](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [removeObserver:name:object:](removeobserver%28__name_object_%29.md): Removes matching entries from the receiver’s dispatch table.
