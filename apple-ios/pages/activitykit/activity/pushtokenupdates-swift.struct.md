> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/pushtokenupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activity/pushtokenupdates-swift.struct)

# Activity.PushTokenUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure that offers functionality to observe changes to the push token of a Live Activity.

## Declaration

```swift
struct PushTokenUpdates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](pushtokenupdates-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [Activity.PushTokenUpdates.Iterator](pushtokenupdates-swift.struct/iterator.md): An iterator for accessing individual data entries from the series.
- [Activity.PushTokenUpdates.Element](pushtokenupdates-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Using ActivityKit push notifications

- [pushToken](pushtoken.md): The token you use to send ActivityKit push notifications to a Live Activity.
- [pushTokenUpdates](pushtokenupdates-swift.property.md): An asynchronous sequence you use to observe changes to the push token of a Live Activity.
- [pushToStartToken](pushtostarttoken.md): The token you use to start a Live Activity with an ActivityKit push notification.
- [pushToStartTokenUpdates](pushtostarttokenupdates.md): An asynchronous sequence you use to observe changes to the token for starting a Live Activity with an ActivityKit push notification.
