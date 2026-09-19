> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequestset/requests

# requests

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

An array of document requests required to complete the document set.

## Declaration

```swift
var requests: [ISO18013MobileDocumentRequest.DocumentRequest]
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Your app must respond to every document request to complete the document request set.
