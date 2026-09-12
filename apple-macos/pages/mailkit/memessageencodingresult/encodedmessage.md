> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencodingresult/encodedmessage](https://developer.apple.com/documentation/mailkit/memessageencodingresult/encodedmessage)

# encodedMessage (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A signed or encrypted message, if the message security handler needs to encode the message.

## Declaration

```swift
@NSCopying var encodedMessage: MEEncodedOutgoingMessage? { get }
```

<a id="Discussion"></a>

## Discussion

If the message security handler doesn’t need to apply security measures to the outgoing message, the value of this property is `nil`.

## See Also

### Providing an Encoding Result

- [init(encodedMessage:signingError:encryptionError:)](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.

# encodedMessage (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A signed or encrypted message, if the message security handler needs to encode the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) MEEncodedOutgoingMessage * encodedMessage;
```

```objectivec
@property (atomic, copy, readonly, nullable) MEEncodedOutgoingMessage * encodedMessage;
```

<a id="Discussion"></a>

## Discussion

If the message security handler doesn’t need to apply security measures to the outgoing message, the value of this property is `nil`.

## See Also

### Providing an Encoding Result

- [initWithEncodedMessage:signingError:encryptionError:](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.
