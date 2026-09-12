> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meoutgoingmessageencodingstatus](https://developer.apple.com/documentation/mailkit/meoutgoingmessageencodingstatus)

# MEOutgoingMessageEncodingStatus (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information about security measures the user can apply when composing a message.

## Declaration

```swift
class MEOutgoingMessageEncodingStatus
```

<a id="overview"></a>

## Overview

As a user composes a new message, MailKit requests the encoding status from your message security handler. The handler provides an [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md) that contains:

- Boolean values that indicate if the handler can sign or encrypt the message
- An error if verifying the security status fails
- An array of recipient addresses for which the handler can’t encrypt the message

## Topics

### Providing Encoding Status

- [init(canSign:canEncrypt:securityError:addressesFailingEncryption:)](meoutgoingmessageencodingstatus/init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canSign](meoutgoingmessageencodingstatus/cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](meoutgoingmessageencodingstatus/canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](meoutgoingmessageencodingstatus/securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](meoutgoingmessageencodingstatus/addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.

### Initializers

- [init(coder:)](meoutgoingmessageencodingstatus/init%28coder_%29.md)

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
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

# MEOutgoingMessageEncodingStatus (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information about security measures the user can apply when composing a message.

## Declaration

```objectivec
@interface MEOutgoingMessageEncodingStatus : NSObject
```

<a id="overview"></a>

## Overview

As a user composes a new message, MailKit requests the encoding status from your message security handler. The handler provides an [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md) that contains:

- Boolean values that indicate if the handler can sign or encrypt the message
- An error if verifying the security status fails
- An array of recipient addresses for which the handler can’t encrypt the message

## Topics

### Providing Encoding Status

- [initWithCanSign:canEncrypt:securityError:addressesFailingEncryption:](meoutgoingmessageencodingstatus/init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canSign](meoutgoingmessageencodingstatus/cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](meoutgoingmessageencodingstatus/canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](meoutgoingmessageencodingstatus/securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](meoutgoingmessageencodingstatus/addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.
