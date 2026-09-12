> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore/status-swift.enum](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/status-swift.enum)

# IdentityDocumentProviderRegistrationStore.Status

**Framework:** IdentityDocumentServices  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Defines a status for the registration store.

## Declaration

```swift
enum Status
```

<a id="Discussion"></a>

## Discussion

This value indicates whether the app is able to register documents with the system.

## Topics

### Enumeration Cases

- [IdentityDocumentProviderRegistrationStore.Status.authorized](status-swift.enum/authorized.md): The user has authorized the current app for document providing.
- [IdentityDocumentProviderRegistrationStore.Status.notAuthorized](status-swift.enum/notauthorized.md): The user has not yet authorized the current app for document providing.
- [IdentityDocumentProviderRegistrationStore.Status.notDetermined](status-swift.enum/notdetermined.md): The user has not made a choice in to the current app for document providing.
- [IdentityDocumentProviderRegistrationStore.Status.notSupported](status-swift.enum/notsupported.md): The current platform is not supported for document providing.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining and getting the status of the mobile document

- [status](status-swift.property.md): The status of the registration store.
