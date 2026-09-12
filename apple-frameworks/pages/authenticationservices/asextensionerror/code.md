> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asextensionerror/code](https://developer.apple.com/documentation/authenticationservices/asextensionerror/code)

# ASExtensionError.Code (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The codes for a credential provider extension error.

## Declaration

```swift
enum Code
```

## Topics

### Codes

- [ASExtensionError.Code.credentialIdentityNotFound](code/credentialidentitynotfound.md): The credential identity was not found.
- [ASExtensionError.Code.failed](code/failed.md): The operation failed.
- [ASExtensionError.Code.userCanceled](code/usercanceled.md): The user canceled the operation.
- [ASExtensionError.Code.userInteractionRequired](code/userinteractionrequired.md): User interaction is required.

### Enumeration Cases

- [ASExtensionError.Code.matchedExcludedCredential](code/matchedexcludedcredential.md): This error should only be used for a passkey registration request, if the @c excludedCredentials property matches a known passkey.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing errors

- [ASExtensionError](../asextensionerror.md): A credential provider extension error.
- [ASExtensionErrorDomain](../asextensionerrordomain.md): The domain for a credential provider extension error.

# ASExtensionErrorCode (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The codes for a credential provider extension error.

## Declaration

```objectivec
enum ASExtensionErrorCode : NSInteger;
```

## Topics

### Codes

- [ASExtensionErrorCodeCredentialIdentityNotFound](code/credentialidentitynotfound.md): The credential identity was not found.
- [ASExtensionErrorCodeFailed](code/failed.md): The operation failed.
- [ASExtensionErrorCodeUserCanceled](code/usercanceled.md): The user canceled the operation.
- [ASExtensionErrorCodeUserInteractionRequired](code/userinteractionrequired.md): User interaction is required.

### Enumeration Cases

- [ASExtensionErrorCodeMatchedExcludedCredential](code/matchedexcludedcredential.md): This error should only be used for a passkey registration request, if the @c excludedCredentials property matches a known passkey.

## See Also

### Recognizing errors

- [ASExtensionErrorDomain](../asextensionerrordomain.md): The domain for a credential provider extension error.
