> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstates/iterator/next()](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstates/iterator/next())

# next()

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
mutating func next() async -> SystemCoordinator.ParticipantStates.Element?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.
