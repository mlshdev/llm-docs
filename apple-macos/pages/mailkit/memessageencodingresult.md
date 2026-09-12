> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencodingresult](https://developer.apple.com/documentation/mailkit/memessageencodingresult)

# MEMessageEncodingResult (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

## Declaration

```swift
class MEMessageEncodingResult
```

## Topics

### Providing an Encoding Result

- [init(encodedMessage:signingError:encryptionError:)](memessageencodingresult/init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](memessageencodingresult/encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](memessageencodingresult/encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](memessageencodingresult/signingerror.md): An error that occurred while the message encoder signed the message.

### Initializers

- [init(coder:)](memessageencodingresult/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.

# MEMessageEncodingResult (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

## Declaration

```objectivec
@interface MEMessageEncodingResult : NSObject
```

## Topics

### Providing an Encoding Result

- [initWithEncodedMessage:signingError:encryptionError:](memessageencodingresult/init%28encodedmessage_signingerror_encryptionerror_%29.md): Creates an encoding result object with a signed or encrypted message, or errors if the message encoder fails to encode the message.
- [encodedMessage](memessageencodingresult/encodedmessage.md): A signed or encrypted message, if the message security handler needs to encode the message.
- [encryptionError](memessageencodingresult/encryptionerror.md): An error that occurred while the message encoder encrypted the message.
- [signingError](memessageencodingresult/signingerror.md): An error that occurred while the message encoder signed the message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
