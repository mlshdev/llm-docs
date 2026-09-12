> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meencodedoutgoingmessage](https://developer.apple.com/documentation/mailkit/meencodedoutgoingmessage)

# MEEncodedOutgoingMessage (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains the signed or encrypted representation of a message’s RFC 2822 data.

## Declaration

```swift
class MEEncodedOutgoingMessage
```

<a id="overview"></a>

## Overview

When MailKit invokes your message security handler’s [encode(\_:composeContext:completionHandler:)](memessageencoder/encode%28__composecontext_completionhandler_%29.md) method, it digitally signs and encrypts the message. After encoding the message data, create an instance of [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md) to pass back to MailKit. Set the [isSigned](meencodedoutgoingmessage/issigned.md) and [isEncrypted](meencodedoutgoingmessage/isencrypted.md) values to indicate how you encoded the message.

## Topics

### Encoding Outgoing Messages

- [init(rawData:isSigned:isEncrypted:)](meencodedoutgoingmessage/init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isEncrypted](meencodedoutgoingmessage/isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](meencodedoutgoingmessage/issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](meencodedoutgoingmessage/rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.

### Initializers

- [init(coder:)](meencodedoutgoingmessage/init%28coder_%29.md)

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
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

# MEEncodedOutgoingMessage (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains the signed or encrypted representation of a message’s RFC 2822 data.

## Declaration

```objectivec
@interface MEEncodedOutgoingMessage : NSObject
```

<a id="overview"></a>

## Overview

When MailKit invokes your message security handler’s [encodeMessage:composeContext:completionHandler:](memessageencoder/encode%28__composecontext_completionhandler_%29.md) method, it digitally signs and encrypts the message. After encoding the message data, create an instance of [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md) to pass back to MailKit. Set the [isSigned](meencodedoutgoingmessage/issigned.md) and [isEncrypted](meencodedoutgoingmessage/isencrypted.md) values to indicate how you encoded the message.

## Topics

### Encoding Outgoing Messages

- [initWithRawData:isSigned:isEncrypted:](meencodedoutgoingmessage/init%28rawdata_issigned_isencrypted_%29.md): Creates an object that contains the outgoing message’s encoded data, and indicates if the encoder encrypted or signed the message.
- [isEncrypted](meencodedoutgoingmessage/isencrypted.md): A Boolean value that indicates if the message encoder encrypted the message.
- [isSigned](meencodedoutgoingmessage/issigned.md): A Boolean value that indicates if the message encoder signed the message.
- [rawData](meencodedoutgoingmessage/rawdata.md): The encrypted, signed, or both encrypted and signed data for the outgoing message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.
