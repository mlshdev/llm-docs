> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstates/makeasynciterator()](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstates/makeasynciterator())

# makeAsyncIterator()

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> SystemCoordinator.ParticipantStates.Iterator
```

<a id="return-value"></a>

## Return Value

An instance of the `AsyncIterator` type used to produce elements of the asynchronous sequence.

## See Also

### Creating an iterator

- [SystemCoordinator.ParticipantStates.Iterator](iterator.md)
- [SystemCoordinator.ParticipantStates.Element](element.md): The type of element produced by this asynchronous sequence.
