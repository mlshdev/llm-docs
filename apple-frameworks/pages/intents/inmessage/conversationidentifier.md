> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inmessage/conversationidentifier

# conversationIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The identifier of the conversation that contains this message.

## Declaration

```swift
var conversationIdentifier: String? { get }
```

## See Also

### Identifying the Message

- [identifier](identifier.md): The message’s unique identifier.

# conversationIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The identifier of the conversation that contains this message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * conversationIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * conversationIdentifier;
```

## See Also

### Identifying the Message

- [identifier](identifier.md): The message’s unique identifier.
