> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentresponse](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentresponse)

# ISO18013MobileDocumentResponse

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A type representing the document response from a web presentment request.

## Declaration

```swift
struct ISO18013MobileDocumentResponse
```

## Topics

### Initializers

- [init(responseData:)](iso18013mobiledocumentresponse/init%28responsedata_%29.md): Create an ISO 18013 mobile document response.

### Instance Properties

- [responseData](iso18013mobiledocumentresponse/responsedata.md): The presentment response data that has a format based on request type.

## Relationships

### Conforms To

- [IdentityDocumentWebPresentmentResponse](identitydocumentwebpresentmentresponse.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing the web presentment flow into your browser

- [IdentityDocumentWebPresentmentRawRequestValidator](identitydocumentwebpresentmentrawrequestvalidator.md): A type that contains functions for validating the incoming web presentment raw request.
- [IdentityDocumentWebPresentmentRequest](identitydocumentwebpresentmentrequest.md): A closed protocol that indicates that the system uses this object to perform an identity document web presentment
- [ISO18013MobileDocumentRequest](iso18013mobiledocumentrequest.md): A type that represents an incoming ISO 18013-5 mobile document request.
- [IdentityDocumentWebPresentmentResponse](identitydocumentwebpresentmentresponse.md): A closed protocol that indicates that the system uses this object to represent a web presentment response.
- [IdentityDocumentWebPresentmentRawRequest](identitydocumentwebpresentmentrawrequest.md): A struct that defines the type that represents a raw web presentment request.
