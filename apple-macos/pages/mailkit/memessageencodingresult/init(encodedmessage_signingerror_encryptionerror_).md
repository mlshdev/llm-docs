> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencodingresult/init(encodedmessage:signingerror:encryptionerror:)](https://developer.apple.com/documentation/mailkit/memessageencodingresult/init(encodedmessage:signingerror:encryptionerror:))

# init(encodedMessage:signingError:encryptionError:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.

## Declaration

```swift
init(encodedMessage: MEEncodedOutgoingMessage?, signingError: (any Error)?, encryptionError: (any Error)?)
```

## Parameters

- `encodedMessage`: A signed or encrypted message.
- `signingError`: An error that occurred while signing the message.
- `encryptionError`: An error that occurred while encrypting the message.

<a id="Discussion"></a>

## Discussion

If the message doesn’t require a digital signature or any encryption, specify `nil` for the message and errors.

If the message security handler does need to sign or encrypt the message, but encoding fails, specify `nil` for `encodedMessage`, and an error for one or both of the error parameters.

## See Also

### Providing an Encoding Result

- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.

# initWithEncodedMessage:signingError:encryptionError: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.

## Declaration

```objectivec
- (instancetype) initWithEncodedMessage:(MEEncodedOutgoingMessage *) encodedMessage signingError:(NSError *) signingError encryptionError:(NSError *) encryptionError;
```

## Parameters

- `encodedMessage`: A signed or encrypted message.
- `signingError`: An error that occurred while signing the message.
- `encryptionError`: An error that occurred while encrypting the message.

<a id="Discussion"></a>

## Discussion

If the message doesn’t require a digital signature or any encryption, specify `nil` for the message and errors.

If the message security handler does need to sign or encrypt the message, but encoding fails, specify `nil` for `encodedMessage`, and an error for one or both of the error parameters.

## See Also

### Providing an Encoding Result

- [encodedMessage](encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](signingerror.md): An error that occurred while the message encoder signed the message.
