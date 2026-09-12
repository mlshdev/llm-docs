> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesigner/emailaddresses](https://developer.apple.com/documentation/mailkit/memessagesigner/emailaddresses)

# emailAddresses (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses associated with the signature.

## Declaration

```swift
var emailAddresses: [MEEmailAddress] { get }
```

## See Also

### Describing Message Signers

- [init(emailAddresses:signatureLabel:context:)](init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [label](label.md): A string that the message’s headers use to display the message signer.
- [context](context.md): Data related to the message signature, such as the signing certificate.

# emailAddresses (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses associated with the signature.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MEEmailAddress *> * emailAddresses;
```

## See Also

### Describing Message Signers

- [initWithEmailAddresses:signatureLabel:context:](init%28emailaddresses_signaturelabel_context_%29.md): Creates a new message signer object that contains the email addresses of the signers, a label, and context data.
- [label](label.md): A string that the message’s headers use to display the message signer.
- [context](context.md): Data related to the message signature, such as the signing certificate.
