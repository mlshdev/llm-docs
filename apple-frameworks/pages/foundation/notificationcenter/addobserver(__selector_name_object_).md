> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/addobserver(_:selector:name:object:)](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver(_:selector:name:object:))

# addObserver(\_:selector:name:object:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an entry to the notification center to call the provided selector with the notification.

## Declaration

```swift
func addObserver(_ observer: Any, selector aSelector: Selector, name aName: NSNotification.Name?, object anObject: Any?)
```

## Parameters

- `observer`: An object to register as an observer.
- `aSelector`: A selector that specifies the message the receiver sends `observer` to alert it to the notification posting. The method that `aSelector` specifies must have one and only one argument (an instance of `NSNotification`).
- `aName`: The name of the notification to register for delivery to the observer. Specify a notification name to deliver only entries with this notification name.

  When `nil`, the sender doesn’t use notification names as criteria for the delivery.
- `anObject`: The object that sends notifications to the observer. Specify a notification sender to deliver only notifications from this sender.

  When `nil`, the notification center doesn’t use sender names as criteria for delivery.

<a id="Discussion"></a>

## Discussion

Unregister an observer to stop receiving notifications.

To unregister an observer, use `NotificationCenter/removeObserver(_:)` or [removeObserver(\_:name:object:)](removeobserver%28__name_object_%29.md) with the most specific detail possible. For example, if you used a name and object to register the observer, use the name and object to remove it.

If your app targets iOS 9.0 and later or macOS 10.11 and later, you do not need to unregister an observer that you created with this function. If you forget or are unable to remove an observer, the system cleans up the next time it would have posted to it.

## See Also

### Adding and removing notification observers

- [addObserver(forName:object:queue:using:)](addobserver%28forname_object_queue_using_%29.md): Adds an entry to the notification center to receive notifications that passed to the provided block.
- [removeObserver(\_:name:object:)](removeobserver%28__name_object_%29.md): Removes matching entries from the notification center’s dispatch table.
- [removeObserver(\_:)](removeobserver%28__%29-2yciv.md): Removes all entries specifying an observer from the notification center’s dispatch table.

# addObserver:selector:name:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an entry to the notification center to call the provided selector with the notification.

## Declaration

```objectivec
- (void) addObserver:(id) observer selector:(SEL) aSelector name:(NSNotificationName) aName object:(id) anObject;
```

## Parameters

- `observer`: An object to register as an observer.
- `aSelector`: A selector that specifies the message the receiver sends `observer` to alert it to the notification posting. The method that `aSelector` specifies must have one and only one argument (an instance of `NSNotification`).
- `aName`: The name of the notification to register for delivery to the observer. Specify a notification name to deliver only entries with this notification name.

  When `nil`, the sender doesn’t use notification names as criteria for the delivery.
- `anObject`: The object that sends notifications to the observer. Specify a notification sender to deliver only notifications from this sender.

  When `nil`, the notification center doesn’t use sender names as criteria for delivery.

<a id="Discussion"></a>

## Discussion

Unregister an observer to stop receiving notifications.

To unregister an observer, use `NotificationCenter/removeObserver(_:)` or [removeObserver:name:object:](removeobserver%28__name_object_%29.md) with the most specific detail possible. For example, if you used a name and object to register the observer, use the name and object to remove it.

If your app targets iOS 9.0 and later or macOS 10.11 and later, you do not need to unregister an observer that you created with this function. If you forget or are unable to remove an observer, the system cleans up the next time it would have posted to it.

## See Also

### Adding and removing notification observers

- [addObserverForName:object:queue:usingBlock:](addobserver%28forname_object_queue_using_%29.md): Adds an entry to the notification center to receive notifications that passed to the provided block.
- [removeObserver:name:object:](removeobserver%28__name_object_%29.md): Removes matching entries from the notification center’s dispatch table.
- [removeObserver:](removeobserver%28__%29-2yciv.md): Removes all entries specifying an observer from the notification center’s dispatch table.
