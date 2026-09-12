> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstates/iterator](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstates/iterator)

# SystemCoordinator.ParticipantStates.Iterator

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 1.0+

## Declaration

```swift
struct Iterator
```

## Topics

### Instance Methods

- [next()](iterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [SystemCoordinator.ParticipantStates.Element](element.md): The type of element produced by this asynchronous sequence.
