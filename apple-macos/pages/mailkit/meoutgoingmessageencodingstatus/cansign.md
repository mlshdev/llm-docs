> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meoutgoingmessageencodingstatus/cansign](https://developer.apple.com/documentation/mailkit/meoutgoingmessageencodingstatus/cansign)

# canSign (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates the message security handler can digitally sign the outgoing message.

## Declaration

```swift
var canSign: Bool { get }
```

## See Also

### Providing Encoding Status

- [init(canSign:canEncrypt:securityError:addressesFailingEncryption:)](init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.

# canSign (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates the message security handler can digitally sign the outgoing message.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL canSign;
```

## See Also

### Providing Encoding Status

- [initWithCanSign:canEncrypt:securityError:addressesFailingEncryption:](init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.
