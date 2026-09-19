> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/cardsession/eventstream-swift.property

# eventStream

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An asynchronous sequence of events from the card session.

## Declaration

```swift
var eventStream: CardSession.EventStream { get }
```

<a id="Discussion"></a>

## Discussion

Use the Swift `for-await-in` syntax to receive and process events as the session produces them.

## See Also

### Handling card events

- [CardSession.EventStream](eventstream-swift.class.md): An asynchronous sequence of events produced by a card session.
- [CardSession.Event](event.md): A type that enumerates events produced by a card session.
