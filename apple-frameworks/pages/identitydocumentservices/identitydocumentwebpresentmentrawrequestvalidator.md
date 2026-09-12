> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequestvalidator](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequestvalidator)

# IdentityDocumentWebPresentmentRawRequestValidator

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A type that contains functions for validating the incoming web presentment raw request.

## Declaration

```swift
struct IdentityDocumentWebPresentmentRawRequestValidator
```

## Topics

### Initializers

- [init()](identitydocumentwebpresentmentrawrequestvalidator/init%28%29.md): Initializes a raw request validator.

### Instance Methods

- [validateISO18013MobileDocumentRequest(\_:origin:)](identitydocumentwebpresentmentrawrequestvalidator/validateiso18013mobiledocumentrequest%28__origin_%29.md): Validates an incoming raw ISO 18013-5 request.

## See Also

### Implementing the web presentment flow into your browser

- [IdentityDocumentWebPresentmentRequest](identitydocumentwebpresentmentrequest.md): A closed protocol that indicates that the system uses this object to perform an identity document web presentment
- [ISO18013MobileDocumentRequest](iso18013mobiledocumentrequest.md): A type that represents an incoming ISO 18013-5 mobile document request.
- [IdentityDocumentWebPresentmentResponse](identitydocumentwebpresentmentresponse.md): A closed protocol that indicates that the system uses this object to represent a web presentment response.
- [ISO18013MobileDocumentResponse](iso18013mobiledocumentresponse.md): A type representing the document response from a web presentment request.
- [IdentityDocumentWebPresentmentRawRequest](identitydocumentwebpresentmentrawrequest.md): A struct that defines the type that represents a raw web presentment request.
