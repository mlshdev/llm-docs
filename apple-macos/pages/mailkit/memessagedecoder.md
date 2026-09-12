> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagedecoder](https://developer.apple.com/documentation/mailkit/memessagedecoder)

# MEMessageDecoder (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that decrypts messages and provides details about digital signatures.

## Declaration

```swift
protocol MEMessageDecoder : NSObjectProtocol
```

## Topics

### Decrypting Messages and Verifying Signatures

- [decodedMessage(forMessageData:)](memessagedecoder/decodedmessage%28formessagedata_%29.md): Decrypts message content and details about digital signatures.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [MEMessageSecurityHandler](memessagesecurityhandler.md)

## See Also

### Decrypting Messages and Verifying Signatures

- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

# MEMessageDecoder (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that decrypts messages and provides details about digital signatures.

## Declaration

```objectivec
@protocol MEMessageDecoder <NSObject>
```

## Topics

### Decrypting Messages and Verifying Signatures

- [decodedMessageForMessageData:](memessagedecoder/decodedmessage%28formessagedata_%29.md): Decrypts message content and details about digital signatures.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [MEMessageSecurityHandler](memessagesecurityhandler.md)

## See Also

### Decrypting Messages and Verifying Signatures

- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.
