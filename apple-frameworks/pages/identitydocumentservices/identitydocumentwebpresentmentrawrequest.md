> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequest](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequest)

# IdentityDocumentWebPresentmentRawRequest

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A struct that defines the type that represents a raw web presentment request.

## Declaration

```swift
struct IdentityDocumentWebPresentmentRawRequest
```

<a id="Discussion"></a>

## Discussion

The system passes this type to the document provider app that the person selects to respond to the request.

## Topics

### Creating an identity document web presentment raw request

- [init(requestType:requestData:)](identitydocumentwebpresentmentrawrequest/init%28requesttype_requestdata_%29.md): Initializes a web presentment raw request.
- [requestData](identitydocumentwebpresentmentrawrequest/requestdata.md): The request data blob for the web presentment raw request.
- [requestType](identitydocumentwebpresentmentrawrequest/requesttype-swift.property.md): The request type for the current request that the system uses to help the document provider deserialize the request.

### Validating a web presentment raw request

- [IdentityDocumentWebPresentmentRawRequestValidator](identitydocumentwebpresentmentrawrequestvalidator.md): A type that contains functions for validating the incoming web presentment raw request.

### Enumerations

- [IdentityDocumentWebPresentmentRawRequest.RequestType](identitydocumentwebpresentmentrawrequest/requesttype-swift.enum.md): Defines the types of request formats supported by the system.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing the web presentment flow into your browser

- [IdentityDocumentWebPresentmentRawRequestValidator](identitydocumentwebpresentmentrawrequestvalidator.md): A type that contains functions for validating the incoming web presentment raw request.
- [IdentityDocumentWebPresentmentRequest](identitydocumentwebpresentmentrequest.md): A closed protocol that indicates that the system uses this object to perform an identity document web presentment
- [ISO18013MobileDocumentRequest](iso18013mobiledocumentrequest.md): A type that represents an incoming ISO 18013-5 mobile document request.
- [IdentityDocumentWebPresentmentResponse](identitydocumentwebpresentmentresponse.md): A closed protocol that indicates that the system uses this object to represent a web presentment response.
- [ISO18013MobileDocumentResponse](iso18013mobiledocumentresponse.md): A type representing the document response from a web presentment request.
