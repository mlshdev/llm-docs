> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asextensionerror](https://developer.apple.com/documentation/authenticationservices/asextensionerror)

# ASExtensionError

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A credential provider extension error.

## Declaration

```swift
struct ASExtensionError
```

## Topics

### Identifying the error domain

- [ASExtensionErrorDomain](asextensionerrordomain.md): The domain for a credential provider extension error.

### Error codes

- [credentialIdentityNotFound](asextensionerror/credentialidentitynotfound.md): The credential identity was not found.
- [failed](asextensionerror/failed.md): The operation failed.
- [userCanceled](asextensionerror/usercanceled.md): The user canceled the operation.
- [userInteractionRequired](asextensionerror/userinteractionrequired.md): User interaction is required.
- [ASExtensionError.Code](asextensionerror/code.md): The codes for a credential provider extension error.

### Type Properties

- [errorDomain](asextensionerror/errordomain.md)
- [matchedExcludedCredential](asextensionerror/matchedexcludedcredential.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing errors

- [ASExtensionErrorDomain](asextensionerrordomain.md): The domain for a credential provider extension error.
- [ASExtensionError.Code](asextensionerror/code.md): The codes for a credential provider extension error.
