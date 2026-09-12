> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/events-swift.struct](https://developer.apple.com/documentation/arkit/arkitsession/events-swift.struct)

# ARKitSession.Events

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A sequence of events.

## Declaration

```swift
struct Events
```

## Topics

### Structures

- [ARKitSession.Events.Iterator](events-swift.struct/iterator.md): A type that provides a sequence’s iteration interface and encapsulates its iteration state.

### Instance Methods

- [makeAsyncIterator()](events-swift.struct/makeasynciterator%28%29.md): Creates an asynchronous iterator that produces `Event` elements on this asynchronous sequence.

### Type Aliases

- [ARKitSession.Events.Element](events-swift.struct/element.md): A type representing a sequence’s elements.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Observing a session

- [events](events-swift.property.md): An asynchronous sequence of events that provide updates to the current authorization status of the session.
- [ARKitSession.Event](event.md): Enumeration of possible session events.
- [description](description.md): A textual representation of this session.
