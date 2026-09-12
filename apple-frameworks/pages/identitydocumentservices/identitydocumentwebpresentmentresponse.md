> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentwebpresentmentresponse](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentwebpresentmentresponse)

# IdentityDocumentWebPresentmentResponse

**Framework:** IdentityDocumentServices  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A closed protocol that indicates that the system uses this object to represent a web presentment response.

## Declaration

```swift
protocol IdentityDocumentWebPresentmentResponse : Sendable
```

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ISO18013MobileDocumentResponse](iso18013mobiledocumentresponse.md)

## See Also

### Implementing the web presentment flow into your browser

- [IdentityDocumentWebPresentmentRawRequestValidator](identitydocumentwebpresentmentrawrequestvalidator.md): A type that contains functions for validating the incoming web presentment raw request.
- [IdentityDocumentWebPresentmentRequest](identitydocumentwebpresentmentrequest.md): A closed protocol that indicates that the system uses this object to perform an identity document web presentment
- [ISO18013MobileDocumentRequest](iso18013mobiledocumentrequest.md): A type that represents an incoming ISO 18013-5 mobile document request.
- [ISO18013MobileDocumentResponse](iso18013mobiledocumentresponse.md): A type representing the document response from a web presentment request.
- [IdentityDocumentWebPresentmentRawRequest](identitydocumentwebpresentmentrawrequest.md): A struct that defines the type that represents a raw web presentment request.
