> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/cardsession/eventstream-swift.class

# CardSession.EventStream

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An asynchronous sequence of events produced by a card session.

## Declaration

```swift
final class EventStream
```

<a id="overview"></a>

## Overview

Get an asychronous sequence of this type from the card session’s [eventStream](eventstream-swift.property.md) property. Then use the Swift `for-await-in` syntax to receive and process events as the session produces them.

## Topics

### Creating an iterator

- [CardSession.EventStream.Iterator](eventstream-swift.class/iterator.md): The iterator that produces elements of this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Handling card events

- [eventStream](eventstream-swift.property.md): An asynchronous sequence of events from the card session.
- [CardSession.Event](event.md): A type that enumerates events produced by a card session.
