> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore/removeregistration(fordocumentidentifier:)](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/removeregistration(fordocumentidentifier:))

# removeRegistration(forDocumentIdentifier:)

**Framework:** IdentityDocumentServices  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Unregister a specific document with the system.

## Declaration

```swift
func removeRegistration(forDocumentIdentifier documentIdentifier: String) async throws
```

## Parameters

- `documentIdentifier`: The identifier of the document to unregister.

<a id="Discussion"></a>

## Discussion

When a document is unregistered, the system no longer surfaces your app as an option for responding to a presentment request for that specific document.

## See Also

### Registering and removing mobile documents

- [init()](init%28%29.md): Initializes an identity document provider registration store.
- [addRegistration(\_:)](addregistration%28__%29.md): Register a document with the system.
- [registrations](registrations.md): A list of all documents registered with the system.
