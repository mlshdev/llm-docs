> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesigner/init(emailaddresses:signaturelabel:context:)](https://developer.apple.com/documentation/mailkit/memessagesigner/init(emailaddresses:signaturelabel:context:))

# init(emailAddresses:signatureLabel:context:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new message signer object that contains the email addresses of the signers, a label, and context data.

## Declaration

```swift
init(emailAddresses: [MEEmailAddress], signatureLabel label: String, context: Data?)
```

## Parameters

- `emailAddresses`: An array of email addresses associated with the signature.
- `label`: The message signer’s label that Mail shows in the message’s headers.
- `context`: Data related to the message signature, such as the signing certificate.

## See Also

### Describing Message Signers

- [emailAddresses](emailaddresses.md): An array of email addresses associated with the signature.
- [label](label.md): A string that the message’s headers use to display the message signer.
- [context](context.md): Data related to the message signature, such as the signing certificate.

# initWithEmailAddresses:signatureLabel:context: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new message signer object that contains the email addresses of the signers, a label, and context data.

## Declaration

```objectivec
- (instancetype) initWithEmailAddresses:(NSArray<MEEmailAddress *> *) emailAddresses signatureLabel:(NSString *) label context:(NSData *) context;
```

## Parameters

- `emailAddresses`: An array of email addresses associated with the signature.
- `label`: The message signer’s label that Mail shows in the message’s headers.
- `context`: Data related to the message signature, such as the signing certificate.

## See Also

### Describing Message Signers

- [emailAddresses](emailaddresses.md): An array of email addresses associated with the signature.
- [label](label.md): A string that the message’s headers use to display the message signer.
- [context](context.md): Data related to the message signature, such as the signing certificate.
