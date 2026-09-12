> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meoutgoingmessageencodingstatus/init(cansign:canencrypt:securityerror:addressesfailingencryption:)](https://developer.apple.com/documentation/mailkit/meoutgoingmessageencodingstatus/init(cansign:canencrypt:securityerror:addressesfailingencryption:))

# init(canSign:canEncrypt:securityError:addressesFailingEncryption:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.

## Declaration

```swift
init(canSign: Bool, canEncrypt: Bool, securityError: (any Error)?, addressesFailingEncryption: [MEEmailAddress])
```

## Parameters

- `canSign`: A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- `canEncrypt`: A Boolean value that indicates the message security handler can encrypt the outgoing message.
- `securityError`: An error that indicates a failure while determining the encoding status for the outgoing message.
- `addressesFailingEncryption`: An array of email addresses that prevent the message security handler from signing the message.

## See Also

### Providing Encoding Status

- [canSign](cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.

# initWithCanSign:canEncrypt:securityError:addressesFailingEncryption: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates an object that describes whether the message security handler can encrypt or sign an outgoing message.

## Declaration

```objectivec
- (instancetype) initWithCanSign:(BOOL) canSign canEncrypt:(BOOL) canEncrypt securityError:(NSError *) securityError addressesFailingEncryption:(NSArray<MEEmailAddress *> *) addressesFailingEncryption;
```

## Parameters

- `canSign`: A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- `canEncrypt`: A Boolean value that indicates the message security handler can encrypt the outgoing message.
- `securityError`: An error that indicates a failure while determining the encoding status for the outgoing message.
- `addressesFailingEncryption`: An array of email addresses that prevent the message security handler from signing the message.

## See Also

### Providing Encoding Status

- [canSign](cansign.md): A Boolean value that indicates the message security handler can digitally sign the outgoing message.
- [canEncrypt](canencrypt.md): A Boolean value that indicates the message security handler can encrypt the outgoing message.
- [securityError](securityerror.md): An error that the message encoder encountered while determining the encoding status for the outgoing message.
- [addressesFailingEncryption](addressesfailingencryption.md): An array of email addresses that prevent the message security handler from signing the message.
