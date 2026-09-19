> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest

# ISO18013MobileDocumentRequest.DocumentRequest

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A request that contains information for requesting a mobile document.

## Declaration

```swift
struct DocumentRequest
```

## Topics

### Initializers

- [init(documentType:namespaces:)](documentrequest/init%28documenttype_namespaces_%29.md): Initializes a document request.
- [init(documentType:namespaces:issuerKeyIdentifiers:)](documentrequest/init%28documenttype_namespaces_issuerkeyidentifiers_%29.md): Initialize a document request.

### Instance Properties

- [documentType](documentrequest/documenttype.md): The document type requested.
- [issuerKeyIdentifiers](documentrequest/issuerkeyidentifiers.md): A list of X.509 authority key identifiers corresponding to the issuer certificates accepted by the relying party.
- [namespaces](documentrequest/namespaces.md): The namespaces in the document to request.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
