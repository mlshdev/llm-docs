> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstates](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstates)

# SystemCoordinator.ParticipantStates

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An asynchronous sequence that reports the current person’s ability to participate in a shared context.

## Declaration

```swift
struct ParticipantStates
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](participantstates/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [SystemCoordinator.ParticipantStates.Iterator](participantstates/iterator.md)
- [SystemCoordinator.ParticipantStates.Element](participantstates/element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the participant state

- [remoteParticipantStates](remoteparticipantstates.md)
- [localParticipantState](localparticipantstate.md): The current participant’s level of support for an activity that takes place in a shared simulation space.
- [localParticipantStates](localparticipantstates.md): An asynchronous sequence that reports changes to the local participant’s state.
