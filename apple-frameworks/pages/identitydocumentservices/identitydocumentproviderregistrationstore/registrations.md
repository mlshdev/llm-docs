> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore/registrations](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/registrations)

# registrations

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A list of all documents registered with the system.

## Declaration

```swift
var registrations: [any IdentityDocumentRegistration] { get async throws }
```

## See Also

### Registering and removing mobile documents

- [init()](init%28%29.md): Initializes an identity document provider registration store.
- [addRegistration(\_:)](addregistration%28__%29.md): Register a document with the system.
- [removeRegistration(forDocumentIdentifier:)](removeregistration%28fordocumentidentifier_%29.md): Unregister a specific document with the system.
