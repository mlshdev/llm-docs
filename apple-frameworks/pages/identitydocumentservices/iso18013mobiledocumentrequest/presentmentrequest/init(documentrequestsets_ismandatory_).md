> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequest/init(documentrequestsets:ismandatory:)](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequest/init(documentrequestsets:ismandatory:))

# init(documentRequestSets:isMandatory:)

**Framework:** IdentityDocumentServices  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Initializes a presentment request.

## Declaration

```swift
init(documentRequestSets: [ISO18013MobileDocumentRequest.DocumentRequestSet], isMandatory: Bool)
```

## Parameters

- `documentRequestSets`: Whether this presentment request must be satisfied in order to complete the `ISO18013MobileDocumentRequest`.
