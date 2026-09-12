> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencoder](https://developer.apple.com/documentation/mailkit/memessageencoder)

# MEMessageEncoder (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that encrypts or digitally signs outgoing messages.

## Declaration

```swift
protocol MEMessageEncoder : NSObjectProtocol
```

## Topics

### Instance Methods

- [encode(\_:composeContext:completionHandler:)](memessageencoder/encode%28__composecontext_completionhandler_%29.md)
- [getEncodingStatus(for:composeContext:completionHandler:)](memessageencoder/getencodingstatus%28for_composecontext_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [MEMessageSecurityHandler](memessagesecurityhandler.md)

## See Also

### Encrypting and Signing Messages

- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

# MEMessageEncoder (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that encrypts or digitally signs outgoing messages.

## Declaration

```objectivec
@protocol MEMessageEncoder <NSObject>
```

## Topics

### Instance Methods

- [encodeMessage:composeContext:completionHandler:](memessageencoder/encode%28__composecontext_completionhandler_%29.md)
- [getEncodingStatusForMessage:composeContext:completionHandler:](memessageencoder/getencodingstatus%28for_composecontext_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [MEMessageSecurityHandler](memessagesecurityhandler.md)

## See Also

### Encrypting and Signing Messages

- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.
