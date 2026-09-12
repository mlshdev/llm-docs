> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequest](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequest)

# ISO18013MobileDocumentRequest.PresentmentRequest

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A type that represents an individual presentment request.

## Declaration

```swift
struct PresentmentRequest
```

<a id="Discussion"></a>

## Discussion

One or more of these make up an `ISO18013MobileDocumentRequest`.

## Topics

### Initializers

- [init(documentRequestSets:isMandatory:)](presentmentrequest/init%28documentrequestsets_ismandatory_%29.md): Initializes a presentment request.

### Instance Properties

- [documentRequestSets](presentmentrequest/documentrequestsets.md): An array of the document request sets that you can use to complete this presentment request.
- [isMandatory](presentmentrequest/ismandatory.md): Whether this presentment request is required in order to complete the `ISO18013MobileDocumentRequest`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
