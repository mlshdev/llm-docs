> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmauthorizationstateupdates](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmauthorizationstateupdates)

# AlarmManager.AlarmAuthorizationStateUpdates

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An asynchronous sequence that publishes a new value when authorization for the alarms and timers system changes.

## Declaration

```swift
struct AlarmAuthorizationStateUpdates
```

## Topics

### Iterating an update

- [AlarmManager.AlarmAuthorizationStateUpdates.Iterator](alarmauthorizationstateupdates/iterator.md): A nested type that iterates over the elements of this sequence.
- [makeAsyncIterator()](alarmauthorizationstateupdates/makeasynciterator%28%29.md): Returns an asynchronous iterator over the elements of this sequence.
- [AlarmManager.AlarmAuthorizationStateUpdates.Element](alarmauthorizationstateupdates/element.md): A type representing the sequence’s elements.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Checking authorization status

- [authorizationUpdates](authorizationupdates.md): An asynchronous sequence that emits events when authorization to use alarms changes.
- [AlarmManager.AuthorizationState](authorizationstate-swift.enum.md): An enumeration describing all authorization states for the client process.
- [authorizationState](authorizationstate-swift.property.md): Returns the current authorization state for this client.
