> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityhandler](https://developer.apple.com/documentation/mailkit/memessagesecurityhandler)

# MEMessageSecurityHandler (Swift)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that digitally signs or encrypts messages the user sends and receives.

## Declaration

```swift
@MainActor protocol MEMessageSecurityHandler : MEMessageDecoder, MEMessageEncoder
```

<a id="overview"></a>

## Overview

When users enable an extension that implements a message security handler, Mail passes incoming and outgoing message content to the extension for encryption and digital signing.

To encompass the symmetrical halves for encoding and decoding, MailKit defines two protocols that [MEMessageSecurityHandler](memessagesecurityhandler.md) conforms to:

- **[MEMessageEncoder](memessageencoder.md)**: Methods that encrypt and digitally sign an email message.
- **[MEMessageDecoder](memessagedecoder.md)**: Methods that decrypt email messages and verify digital signatures.

As the user composes a mail message, MailKit calls [getEncodingStatus(for:composeContext:completionHandler:)](memessageencoder/getencodingstatus%28for_composecontext_completionhandler_%29.md) to determine if the handler can sign or encrypt the message. The handler indicates the capabilities by providing an instance of [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md). Mail reflects this status in the compose window by enabling the appropriate buttons to let the user choose how to encode the message. When the user sends the message, MailKit invokes the [encode(\_:composeContext:completionHandler:)](memessageencoder/encode%28__composecontext_completionhandler_%29.md) method, and indicates whether the user chose to encrypt or sign the message.

When MailKit needs the original message content, it invokes the handler’s [decodedMessage(forMessageData:)](memessagedecoder/decodedmessage%28formessagedata_%29.md) method. This method creates an instance of [MEDecodedMessage](medecodedmessage.md) that includes the raw decoded message data and the details of who signed the message in an instance of [MEMessageSecurityInformation](memessagesecurityinformation.md).

> **Note**

>  MailKit stores the encrypted and signed message content. Therefore, MailKit may ask a message security handler to decode the same message repeatedly over time when it needs the decoded original message content.

To indicate that your extension contains a message security handler, add `MEMessageSecurityHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEMessageSecurityHandler</string>
    </array>
</dict>
```

## Topics

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

### Displaying Signature Details

- [extensionViewController(signers:)](memessagesecurityhandler/extensionviewcontroller%28signers_%29.md): Returns a view controller that displays details about a message’s digital signature.

### Instance Methods

- [extensionViewController(messageContext:)](memessagesecurityhandler/extensionviewcontroller%28messagecontext_%29.md)
- [primaryActionClicked(forMessageContext:completionHandler:)](memessagesecurityhandler/primaryactionclicked%28formessagecontext_completionhandler_%29.md)

## Relationships

### Inherits From

- [MEMessageDecoder](memessagedecoder.md)
- [MEMessageEncoder](memessageencoder.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# MEMessageSecurityHandler (Objective-C)

**Framework:** MailKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

An object that digitally signs or encrypts messages the user sends and receives.

## Declaration

```objectivec
@protocol MEMessageSecurityHandler <MEMessageEncoder, MEMessageDecoder>
```

<a id="overview"></a>

## Overview

When users enable an extension that implements a message security handler, Mail passes incoming and outgoing message content to the extension for encryption and digital signing.

To encompass the symmetrical halves for encoding and decoding, MailKit defines two protocols that [MEMessageSecurityHandler](memessagesecurityhandler.md) conforms to:

- **[MEMessageEncoder](memessageencoder.md)**: Methods that encrypt and digitally sign an email message.
- **[MEMessageDecoder](memessagedecoder.md)**: Methods that decrypt email messages and verify digital signatures.

As the user composes a mail message, MailKit calls [getEncodingStatusForMessage:composeContext:completionHandler:](memessageencoder/getencodingstatus%28for_composecontext_completionhandler_%29.md) to determine if the handler can sign or encrypt the message. The handler indicates the capabilities by providing an instance of [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md). Mail reflects this status in the compose window by enabling the appropriate buttons to let the user choose how to encode the message. When the user sends the message, MailKit invokes the [encodeMessage:composeContext:completionHandler:](memessageencoder/encode%28__composecontext_completionhandler_%29.md) method, and indicates whether the user chose to encrypt or sign the message.

When MailKit needs the original message content, it invokes the handler’s [decodedMessageForMessageData:](memessagedecoder/decodedmessage%28formessagedata_%29.md) method. This method creates an instance of [MEDecodedMessage](medecodedmessage.md) that includes the raw decoded message data and the details of who signed the message in an instance of [MEMessageSecurityInformation](memessagesecurityinformation.md).

> **Note**

>  MailKit stores the encrypted and signed message content. Therefore, MailKit may ask a message security handler to decode the same message repeatedly over time when it needs the decoded original message content.

To indicate that your extension contains a message security handler, add `MEMessageSecurityHandler` to the [MEExtensionCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/meextensioncapabilities) array in the extension’s `Info.plist` file:

```plist
<key>NSExtensionAttributes</key>
<dict>
    <key>MEExtensionCapabilities</key>
    <array>
        <string>MEMessageSecurityHandler</string>
    </array>
</dict>
```

## Topics

### Encrypting and Signing Messages

- [MEMessageEncoder](memessageencoder.md): An object that encrypts or digitally signs outgoing messages.
- [MEEncodedOutgoingMessage](meencodedoutgoingmessage.md): An object that contains the signed or encrypted representation of a message’s RFC 2822 data.
- [MEOutgoingMessageEncodingStatus](meoutgoingmessageencodingstatus.md): An object that contains information about security measures the user can apply when composing a message.
- [MEMessageEncodingResult](memessageencodingresult.md): An object that contains a signed or encrypted message, or errors that indicate failure to encode the message.

### Decrypting Messages and Verifying Signatures

- [MEMessageDecoder](memessagedecoder.md): An object that decrypts messages and provides details about digital signatures.
- [MEDecodedMessage](medecodedmessage.md): An object that contains the RFC 2822 data for a message, without encryption or digital signatures.
- [MEMessageSigner](memessagesigner.md): An object that contains details about the person who signed a message.
- [MEMessageSecurityInformation](memessagesecurityinformation.md): An object that contains details about a message’s content, such as if it’s encrypted and who digitally signed it.

### Displaying Signature Details

- [extensionViewControllerForMessageSigners:](memessagesecurityhandler/extensionviewcontroller%28signers_%29.md): Returns a view controller that displays details about a message’s digital signature.

### Instance Methods

- [extensionViewControllerForMessageContext:](memessagesecurityhandler/extensionviewcontroller%28messagecontext_%29.md)
- [primaryActionClickedForMessageContext:completionHandler:](memessagesecurityhandler/primaryactionclicked%28formessagecontext_completionhandler_%29.md)

## Relationships

### Inherits From

- [MEMessageDecoder](memessagedecoder.md)
- [MEMessageEncoder](memessageencoder.md)
