> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityinformation/signingerror](https://developer.apple.com/documentation/mailkit/memessagesecurityinformation/signingerror)

# signingError (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that indicates the security handler couldn’t decode the message’s digital signatures.

## Declaration

```swift
var signingError: (any Error)? { get }
```

## See Also

### Describing Message Security Attributes

- [init(signers:isEncrypted:signingError:encryptionError:)](init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](signers.md): An array of objects that contain information about who signed the message.

# signingError (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An error that indicates the security handler couldn’t decode the message’s digital signatures.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSError * signingError;
```

## See Also

### Describing Message Security Attributes

- [initWithSigners:isEncrypted:signingError:encryptionError:](init%28signers_isencrypted_signingerror_encryptionerror_%29.md): Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.
- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](signers.md): An array of objects that contain information about who signed the message.
