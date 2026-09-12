> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/iso18013mobiledocumentrequestcontext/sendresponse(_:)](https://developer.apple.com/documentation/identitydocumentservicesui/iso18013mobiledocumentrequestcontext/sendresponse(_:))

# sendResponse(\_:)

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Builds and sends an ISO 18013 mobile document response.

## Declaration

```swift
func sendResponse(_ responseHandler: @escaping @Sendable (IdentityDocumentWebPresentmentRawRequest) async throws -> ISO18013MobileDocumentResponse) async throws
```

## Parameters

- `responseHandler`: A handler you use to build the response. This handler provides the raw web presentment request, and returns the ISO 18013 mobile document response.
