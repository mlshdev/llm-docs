> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meoutgoingmessageencodingstatus/securityerror](https://developer.apple.com/documentation/mailkit/meoutgoingmessageencodingstatus/securityerror)

# securityError (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that the message encoder encountered while determining the encoding status for the outgoing message.

## Declaration

```swift
var securityError: (any Error)? { get }
```

## See Also

### Providing Encoding Status

- [init(canSign:canEncrypt:securityError:addressesFailingEncryption:)](init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canSign](cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.

# securityError (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that the message encoder encountered while determining the encoding status for the outgoing message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * securityError;
```

## See Also

### Providing Encoding Status

- [initWithCanSign:canEncrypt:securityError:addressesFailingEncryption:](init%28cansign_canencrypt_securityerror_addressesfailingencryption_%29.md): Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.
- [canSign](cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.
