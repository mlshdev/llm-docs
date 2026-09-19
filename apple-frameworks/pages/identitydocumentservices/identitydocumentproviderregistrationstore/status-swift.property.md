> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore/status-swift.property

# status

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The status of the registration store.

## Declaration

```swift
var status: IdentityDocumentProviderRegistrationStore.Status { get async }
```

<a id="Discussion"></a>

## Discussion

Check this value before you make any attempts to interact with the store.

## See Also

### Defining and getting the status of the mobile document

- [IdentityDocumentProviderRegistrationStore.Status](status-swift.enum.md): Defines a status for the registration store.
