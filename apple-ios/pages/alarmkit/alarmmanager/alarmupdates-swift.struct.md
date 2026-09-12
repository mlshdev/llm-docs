> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmupdates-swift.struct](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmupdates-swift.struct)

# AlarmManager.AlarmUpdates

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An async sequence that publishes whenever an alarm changes.

## Declaration

```swift
struct AlarmUpdates
```

## Topics

### Creating an iterator

- [AlarmManager.AlarmUpdates.Iterator](alarmupdates-swift.struct/iterator.md): A nested type that iterates over the elements of this sequence.
- [makeAsyncIterator()](alarmupdates-swift.struct/makeasynciterator%28%29.md): Returns an async iterator over the elements of this sequence.
- [AlarmManager.AlarmUpdates.Element](alarmupdates-swift.struct/element.md): A type representing the sequence’s elements.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Updating an alarm

- [alarmUpdates](alarmupdates-swift.property.md): An asynchronous sequence that emits events when the set of alarms changes.
- [alarms](alarms.md): Fetches all alarms from the daemon that belong to the current client.
