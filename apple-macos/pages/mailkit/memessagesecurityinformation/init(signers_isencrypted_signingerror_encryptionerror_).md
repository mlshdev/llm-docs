> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityinformation/init(signers:isencrypted:signingerror:encryptionerror:)](https://developer.apple.com/documentation/mailkit/memessagesecurityinformation/init(signers:isencrypted:signingerror:encryptionerror:))

# init(signers:isEncrypted:signingError:encryptionError:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.

## Declaration

```swift
init(signers: [MEMessageSigner], isEncrypted: Bool, signingError: (any Error)?, encryptionError: (any Error)?)
```

## Parameters

- `signers`: An array of objects that contain information about who signed the message.
- `isEncrypted`: A Boolean value that indicates if the message is encrypted.
- `signingError`: An error that indicates the security handler couldn’t decode the message’s digital signatures.
- `encryptionError`: An error that indicates the security handler couldn’t decrypt the message.

## See Also

### Describing Message Security Attributes

- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](signers.md): An array of objects that contain information about who signed the message.
- [signingError](signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.

# initWithSigners:isEncrypted:signingError:encryptionError: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a message security information object that indicates if a message is encrypted, who signed it, or if an error occurred when decoding the message.

## Declaration

```objectivec
- (instancetype) initWithSigners:(NSArray<MEMessageSigner *> *) signers isEncrypted:(BOOL) isEncrypted signingError:(NSError *) signingError encryptionError:(NSError *) encryptionError;
```

## Parameters

- `signers`: An array of objects that contain information about who signed the message.
- `isEncrypted`: A Boolean value that indicates if the message is encrypted.
- `signingError`: An error that indicates the security handler couldn’t decode the message’s digital signatures.
- `encryptionError`: An error that indicates the security handler couldn’t decrypt the message.

## See Also

### Describing Message Security Attributes

- [isEncrypted](isencrypted.md): A Boolean value that indicates if the sender encrypted the message.
- [encryptionError](encryptionerror.md): An error that indicates the security handler couldn’t decrypt the message.
- [signers](signers.md): An array of objects that contain information about who signed the message.
- [signingError](signingerror.md): An error that indicates the security handler couldn’t decode the message’s digital signatures.
