> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/presentmentrequest/documentrequestsets

# documentRequestSets

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

An array of the document request sets that you can use to complete this presentment request.

## Declaration

```swift
var documentRequestSets: [ISO18013MobileDocumentRequest.DocumentRequestSet]
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Exactly one document request set needs to be satisfied to respond to the presentment request.
