> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/removeobserver(_:name:object:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/removeobserver(_:name:object:))

# removeObserver(\_:name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes matching entries from the receiver’s dispatch table.

## Declaration

```swift
func removeObserver(_ observer: Any, name aName: NSNotification.Name?, object anObject: String?)
```

## Parameters

- `observer`: Observer to remove from the dispatch table. Specify an observer to remove only entries for this observer. When `nil`, the receiver does not use notification observers as criteria for removal.
- `aName`: Name of the notification to remove from dispatch table. Specify a notification name to remove only entries that specify this notification name. When `nil`, the receiver does not use notification names as criteria for removal.
- `anObject`: Sender to remove from the dispatch table. Specify a notification sender to remove only entries that specify this sender. When `nil`, the receiver does not use notification senders as criteria for removal.

<a id="Discussion"></a>

## Discussion

Be sure to invoke this method with `notificationName:nil notificationSender:nil` (or `NotificationCenter/removeObserver(_:)`) before deallocating the observer object.

## See Also

### Managing Observers

- [addObserver(\_:selector:name:object:)](addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [addObserver(\_:selector:name:object:suspensionBehavior:)](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.

# removeObserver:name:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes matching entries from the receiver’s dispatch table.

## Declaration

```objectivec
- (void) removeObserver:(id) observer name:(NSNotificationName) aName object:(NSString *) anObject;
```

## Parameters

- `observer`: Observer to remove from the dispatch table. Specify an observer to remove only entries for this observer. When `nil`, the receiver does not use notification observers as criteria for removal.
- `aName`: Name of the notification to remove from dispatch table. Specify a notification name to remove only entries that specify this notification name. When `nil`, the receiver does not use notification names as criteria for removal.
- `anObject`: Sender to remove from the dispatch table. Specify a notification sender to remove only entries that specify this sender. When `nil`, the receiver does not use notification senders as criteria for removal.

<a id="Discussion"></a>

## Discussion

Be sure to invoke this method with `notificationName:nil notificationSender:nil` (or `NotificationCenter/removeObserver(_:)`) before deallocating the observer object.

## See Also

### Managing Observers

- [addObserver:selector:name:object:](addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center’s dispatch table with an observer, a selector, and an optional notification name and sender.
- [addObserver:selector:name:object:suspensionBehavior:](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
