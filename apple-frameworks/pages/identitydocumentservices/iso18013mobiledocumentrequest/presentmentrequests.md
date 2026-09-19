> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequests

# presentmentRequests

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

An array of the presentment requests that exist in the incoming mobile document request.

## Declaration

```swift
var presentmentRequests: [ISO18013MobileDocumentRequest.PresentmentRequest]
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  You must return all presentment requests marked as mandatory in order to complete the mobile document request.
