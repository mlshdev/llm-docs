> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest/init(documenttype:namespaces:issuerkeyidentifiers:)

# init(documentType:namespaces:issuerKeyIdentifiers:)

**Framework:** IdentityDocumentServices  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

Initialize a document request.

## Declaration

```swift
init(documentType: String, namespaces: [String : [String : ISO18013MobileDocumentRequest.ElementInfo]], issuerKeyIdentifiers: [Data])
```

## Parameters

- `documentType`: The document type being requested.
- `namespaces`: The namespaces in the document to request.
- `issuerKeyIdentifiers`: A list of X.509 authority key identifiers corresponding to the issuer certificates accepted by the relying party.
