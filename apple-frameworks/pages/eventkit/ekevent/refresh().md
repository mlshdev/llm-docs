> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/refresh()](https://developer.apple.com/documentation/eventkit/ekevent/refresh())

# refresh() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Updates the event’s data with the current information in the Calendar database.

## Declaration

```swift
func refresh() -> Bool
```

<a id="return-value"></a>

## Return Value

If the event was successfully refreshed, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You should call this method only on events that your application is editing, and only when your application receives the [EKEventStoreChangedNotification](../ekeventstorechangednotification.md) notification. If this method returns [false](https://developer.apple.com/documentation/swift/false), the event has been deleted or otherwise invalidated, and you should not continue to use it.

This method does not replace the values of any properties that you have modified.

# refresh (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Updates the event’s data with the current information in the Calendar database.

## Declaration

```objectivec
- (BOOL) refresh;
```

<a id="return-value"></a>

## Return Value

If the event was successfully refreshed, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You should call this method only on events that your application is editing, and only when your application receives the [EKEventStoreChangedNotification](../ekeventstorechangednotification.md) notification. If this method returns [false](https://developer.apple.com/documentation/swift/false), the event has been deleted or otherwise invalidated, and you should not continue to use it.

This method does not replace the values of any properties that you have modified.
