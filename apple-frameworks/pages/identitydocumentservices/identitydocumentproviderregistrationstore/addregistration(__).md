> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore/addregistration(_:)](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/addregistration(_:))

# addRegistration(\_:)

**Framework:** IdentityDocumentServices  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Register a document with the system.

## Declaration

```swift
func addRegistration(_ registration: some IdentityDocumentRegistration) async throws
```

## Parameters

- `registration`: A registration that contains information about the document necessary to surface it appropriately during a presentment.

<a id="Discussion"></a>

## Discussion

If the provided registration contains a `documentIdentifier` that is already registered, the system replaces the existing registration with the provided registration.

## See Also

### Registering and removing mobile documents

- [init()](init%28%29.md): Initializes an identity document provider registration store.
- [registrations](registrations.md): A list of all documents registered with the system.
- [removeRegistration(forDocumentIdentifier:)](removeregistration%28fordocumentidentifier_%29.md): Unregister a specific document with the system.
