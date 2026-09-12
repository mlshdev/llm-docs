> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityinformation/signers](https://developer.apple.com/documentation/mailkit/memessagesecurityinformation/signers)

# signers (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of objects that contain information about who signed the message.

## Declaration

```swift
var signers: [MEMessageSigner] { get }
```

## See Also

### Describing Message Security Attributes

- [init(signers:isEncrypted:signingError:encryptionError:)](init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signingError](signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.

# signers (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of objects that contain information about who signed the message.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<MEMessageSigner *> * signers;
```

## See Also

### Describing Message Security Attributes

- [initWithSigners:isEncrypted:signingError:encryptionError:](init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signingError](signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.
