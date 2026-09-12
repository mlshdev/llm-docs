> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencodingresult/encryptionerror](https://developer.apple.com/documentation/mailkit/memessageencodingresult/encryptionerror)

# encryptionError (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that occurred while the message encoder encrypted the message.

## Declaration

```swift
var encryptionError: (any Error)? { get }
```

## See Also

### Providing an Encoding Result

- [init(encodedMessage:signingError:encryptionError:)](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.

# encryptionError (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that occurred while the message encoder encrypted the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * encryptionError;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSError * encryptionError;
```

## See Also

### Providing an Encoding Result

- [initWithEncodedMessage:signingError:encryptionError:](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.
