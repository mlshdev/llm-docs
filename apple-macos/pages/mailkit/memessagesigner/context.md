> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesigner/context](https://developer.apple.com/documentation/mailkit/memessagesigner/context)

# context (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Data related to the message signature, such as the signing certificate.

## Declaration

```swift
var context: Data { get }
```

## See Also

### Describing Message Signers

- [init(emailAddresses:signatureLabel:context:)](init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [emailAddresses](emailaddresses.md): An array of email addresses associated with the signature.
- [label](label.md): A string that the message’s headers use to display the message signer.

# context (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Data related to the message signature, such as the signing certificate.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * context;
```

## See Also

### Describing Message Signers

- [initWithEmailAddresses:signatureLabel:context:](init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [emailAddresses](emailaddresses.md): An array of email addresses associated with the signature.
- [label](label.md): A string that the message’s headers use to display the message signer.
