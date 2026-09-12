> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/medecodedmessage](https://developer.apple.com/documentation/mailkit/medecodedmessage)

# MEDecodedMessage (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains the RFC 2822 data for a message, without encryption or digital signatures.

## Declaration

```swift
class MEDecodedMessage
```

<a id="overview"></a>

## Overview

When MailKit invokes your message security handler’s [decodedMessage(forMessageData:)](memessagedecoder/decodedmessage%28formessagedata_%29.md) method, you decode the message data and return an instance of [MEDecodedMessage](medecodedmessage.md) that contains unencrypted MIME data.

## Topics

### Decoding Messages

- [rawData](medecodedmessage/rawdata.md): The decoded MIME data for a message.
- [securityInformation](medecodedmessage/securityinformation.md): An object that contains encryption and digital signature information about the message content.

### Initializers

- [init(data:securityInformation:context:)](medecodedmessage/init%28data_securityinformation_context_%29.md)
- [init(data:securityInformation:context:banner:)](medecodedmessage/init%28data_securityinformation_context_banner_%29.md)
- [init(coder:)](medecodedmessage/init%28coder_%29.md)

### Instance Properties

- [banner](medecodedmessage/banner.md)
- [context](medecodedmessage/context.md)

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
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

# MEDecodedMessage (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains the RFC 2822 data for a message, without encryption or digital signatures.

## Declaration

```objectivec
@interface MEDecodedMessage : NSObject
```

<a id="overview"></a>

## Overview

When MailKit invokes your message security handler’s [decodedMessageForMessageData:](memessagedecoder/decodedmessage%28formessagedata_%29.md) method, you decode the message data and return an instance of [MEDecodedMessage](medecodedmessage.md) that contains unencrypted MIME data.

## Topics

### Decoding Messages

- [rawData](medecodedmessage/rawdata.md): The decoded MIME data for a message.
- [securityInformation](medecodedmessage/securityinformation.md): An object that contains encryption and digital signature information about the message content.

### Initializers

- [initWithData:securityInformation:context:](medecodedmessage/init%28data_securityinformation_context_%29.md)
- [initWithData:securityInformation:context:banner:](medecodedmessage/init%28data_securityinformation_context_banner_%29.md)

### Instance Properties

- [banner](medecodedmessage/banner.md)
- [context](medecodedmessage/context.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.
