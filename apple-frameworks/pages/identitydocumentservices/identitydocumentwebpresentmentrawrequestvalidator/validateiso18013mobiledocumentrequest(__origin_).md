> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/identitydocumentwebpresentmentrawrequestvalidator/validateiso18013mobiledocumentrequest(_:origin:)

# validateISO18013MobileDocumentRequest(\_:origin:)

**Framework:** IdentityDocumentServices  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Validates an incoming raw ISO 18013-5 request.

## Declaration

```swift
func validateISO18013MobileDocumentRequest(_ requestData: Data, origin: URL) throws -> ISO18013MobileDocumentRequest
```

## Parameters

- `requestData`: The incoming raw ISO 18013-5 request.
- `origin`: The origin of the requesting website.

<a id="return-value"></a>

## Return Value

A validated and parsed ISO 18013-5 mobile document request.
