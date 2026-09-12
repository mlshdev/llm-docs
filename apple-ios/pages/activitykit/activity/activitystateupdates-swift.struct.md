> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/activitystateupdates-swift.struct](https://developer.apple.com/documentation/activitykit/activity/activitystateupdates-swift.struct)

# Activity.ActivityStateUpdates

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure that offers functionality to observe state changes of a Live Activity.

## Declaration

```swift
struct ActivityStateUpdates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](activitystateupdates-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces results from this asynchronous sequence.
- [Activity.ActivityStateUpdates.Iterator](activitystateupdates-swift.struct/iterator.md): An iterator for accessing individual data entries from the series.
- [Activity.ActivityStateUpdates.Element](activitystateupdates-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Observing the Live Activity life cycle

- [activityState](activitystate.md): The current state of a Live Activity in its life cycle.
- [ActivityState](../activitystate.md): The enum that describes the state of a Live Activity in its life cycle.
- [activityStateUpdates](activitystateupdates-swift.property.md): An asynchronous sequence you use to observe activity state changes.
