> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore/registrationerror](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/registrationerror)

# IdentityDocumentProviderRegistrationStore.RegistrationError

**Framework:** IdentityDocumentServices  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An error type that the identity document registration store and associated types throw.

## Declaration

```swift
enum RegistrationError
```

## Topics

### Enumeration Cases

- [IdentityDocumentProviderRegistrationStore.RegistrationError.invalidRequest](registrationerror/invalidrequest.md): An error that indicates the request isn’t valid.
- [IdentityDocumentProviderRegistrationStore.RegistrationError.notAuthorized](registrationerror/notauthorized.md): An error that indicates the device is not authorized to interact with the identity document provider registration store.
- [IdentityDocumentProviderRegistrationStore.RegistrationError.notSupported](registrationerror/notsupported.md): An error that indicates that the system cannot register the identity documents on the current platform.
- [IdentityDocumentProviderRegistrationStore.RegistrationError.unknown](registrationerror/unknown.md): An error that indicates the framework encountered a problem which the system can’t interpret.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
