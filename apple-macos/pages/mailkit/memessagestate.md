> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagestate](https://developer.apple.com/documentation/mailkit/memessagestate)

# MEMessageState (Swift)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

The state of a message: sent, unsent, or received.

## Declaration

```swift
enum MEMessageState
```

## Topics

### Determining Message State

- [MEMessageState.draft](memessagestate/draft.md): A state that indicates the user is composing the message, and hasn’t sent it yet.
- [MEMessageState.received](memessagestate/received.md): A state that indicates the system has received and stored the message.
- [MEMessageState.sending](memessagestate/sending.md): A state that indicates the system is in the process of sending the message.

### Initializers

- [init(rawValue:)](memessagestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Message Properties

- [MEMessage](memessage.md): An object that contains information about a mail message, such as the subject, addressees, date sent, and the message contents.

# MEMessageState (Objective-C)

**Framework:** MailKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

The state of a message: sent, unsent, or received.

## Declaration

```objectivec
enum MEMessageState : NSInteger;
```

## Topics

### Determining Message State

- [MEMessageStateDraft](memessagestate/draft.md): A state that indicates the user is composing the message, and hasn’t sent it yet.
- [MEMessageStateReceived](memessagestate/received.md): A state that indicates the system has received and stored the message.
- [MEMessageStateSending](memessagestate/sending.md): A state that indicates the system is in the process of sending the message.

## See Also

### Message Properties

- [MEMessage](memessage.md): An object that contains information about a mail message, such as the subject, addressees, date sent, and the message contents.
