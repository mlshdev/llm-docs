> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityinformation](https://developer.apple.com/documentation/mailkit/memessagesecurityinformation)

# MEMessageSecurityInformation (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

## Declaration

```swift
class MEMessageSecurityInformation
```

## Topics

### Describing Message Security Attributes

- [init(signers:isEncrypted:signingError:encryptionError:)](memessagesecurityinformation/init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](memessagesecurityinformation/isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](memessagesecurityinformation/encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](memessagesecurityinformation/signers.md): An array of objects that contain information about who signed the message.
- [signingError](memessagesecurityinformation/signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.

### Initializers

- [init(signers:isEncrypted:signingError:encryptionError:shouldBlockRemoteContent:localizedRemoteContentBlockingReason:)](memessagesecurityinformation/init%28signers_isencrypted_signingerror_encryptionerror_shouldblockremotecontent_localizedremotecontentblockingreason_%29.md)
- [init(coder:)](memessagesecurityinformation/init%28coder_%29.md)

### Instance Properties

- [localizedRemoteContentBlockingReason](memessagesecurityinformation/localizedremotecontentblockingreason.md)
- [shouldBlockRemoteContent](memessagesecurityinformation/shouldblockremotecontent.md)

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

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.

# MEMessageSecurityInformation (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

## Declaration

```objectivec
@interface MEMessageSecurityInformation : NSObject
```

## Topics

### Describing Message Security Attributes

- [initWithSigners:isEncrypted:signingError:encryptionError:](memessagesecurityinformation/init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](memessagesecurityinformation/isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](memessagesecurityinformation/encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](memessagesecurityinformation/signers.md): An array of objects that contain information about who signed the message.
- [signingError](memessagesecurityinformation/signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.

### Initializers

- [initWithSigners:isEncrypted:signingError:encryptionError:shouldBlockRemoteContent:localizedRemoteContentBlockingReason:](memessagesecurityinformation/init%28signers_isencrypted_signingerror_encryptionerror_shouldblockremotecontent_localizedremotecontentblockingreason_%29.md)

### Instance Properties

- [localizedRemoteContentBlockingReason](memessagesecurityinformation/localizedremotecontentblockingreason.md)
- [shouldBlockRemoteContent](memessagesecurityinformation/shouldblockremotecontent.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
