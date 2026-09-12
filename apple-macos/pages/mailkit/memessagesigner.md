> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesigner](https://developer.apple.com/documentation/mailkit/memessagesigner)

# MEMessageSigner (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains details about the person who signed a message.

## Declaration

```swift
class MEMessageSigner
```

## Topics

### Describing Message Signers

- [init(emailAddresses:signatureLabel:context:)](memessagesigner/init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [emailAddresses](memessagesigner/emailaddresses.md): An array of email addresses associated with the signature.
- [label](memessagesigner/label.md): A string that the message’s headers use to display the message signer.
- [context](memessagesigner/context.md): Data related to the message signature, such as the signing certificate.

### Initializers

- [init(coder:)](memessagesigner/init%28coder_%29.md)

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
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

# MEMessageSigner (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains details about the person who signed a message.

## Declaration

```objectivec
@interface MEMessageSigner : NSObject
```

## Topics

### Describing Message Signers

- [initWithEmailAddresses:signatureLabel:context:](memessagesigner/init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [emailAddresses](memessagesigner/emailaddresses.md): An array of email addresses associated with the signature.
- [label](memessagesigner/label.md): A string that the message’s headers use to display the message signer.
- [context](memessagesigner/context.md): Data related to the message signature, such as the signing certificate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.
