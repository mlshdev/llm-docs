> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest/init(documenttype:namespaces:)](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest/init(documenttype:namespaces:))

# init(documentType:namespaces:)

**Framework:** IdentityDocumentServices  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Initializes a document request.

## Declaration

```swift
init(documentType: String, namespaces: [String : [String : ISO18013MobileDocumentRequest.ElementInfo]])
```

## Parameters

- `documentType`: The document type requested.
- `namespaces`: The namespaces in the document to request.
