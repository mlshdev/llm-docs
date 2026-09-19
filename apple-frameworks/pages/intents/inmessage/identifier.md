> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inmessage/identifier

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The message’s unique identifier.

## Declaration

```swift
var identifier: String { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## See Also

### Identifying the Message

- [conversationIdentifier](conversationidentifier.md): The identifier of the conversation that contains this message.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The message’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## See Also

### Identifying the Message

- [conversationIdentifier](conversationidentifier.md): The identifier of the conversation that contains this message.
