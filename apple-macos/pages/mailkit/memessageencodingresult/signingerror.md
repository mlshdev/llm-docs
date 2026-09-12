> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencodingresult/signingerror](https://developer.apple.com/documentation/mailkit/memessageencodingresult/signingerror)

# signingError (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that occurred while the message encoder signed the message.

## Declaration

```swift
var signingError: (any Error)? { get }
```

## See Also

### Providing an Encoding Result

- [init(encodedMessage:signingError:encryptionError:)](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.

# signingError (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that occurred while the message encoder signed the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * signingError;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSError * signingError;
```

## See Also

### Providing an Encoding Result

- [initWithEncodedMessage:signingError:encryptionError:](init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.
