> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentrequest/init(presentmentrequests:requestauthentications:)](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/init(presentmentrequests:requestauthentications:))

# init(presentmentRequests:requestAuthentications:)

**Framework:** IdentityDocumentServices  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Initializes an ISO 18013-5 mobile document request.

## Declaration

```swift
init(presentmentRequests: [ISO18013MobileDocumentRequest.PresentmentRequest], requestAuthentications: [ISO18013MobileDocumentRequest.RequestAuthentication])
```

## Parameters

- `presentmentRequests`: An array of the presentment requests that exist in the incoming mobile document request.
- `requestAuthentications`: An array that contains information about the authentication of the mobile document request.
