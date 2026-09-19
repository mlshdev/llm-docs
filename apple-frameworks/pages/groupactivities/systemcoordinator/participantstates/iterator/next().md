> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstates/iterator/next()

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
