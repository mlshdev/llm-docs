> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/options-swift.struct/alloweddocumenttypes

# allowedDocumentTypes

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The allowed document types of the mobile document request.

## Declaration

```swift
var allowedDocumentTypes: [MobileDocumentDisplayRequest.Options.DocumentType]
```

<a id="discussion"></a>

## Discussion

> **Note**

> A request isn’t considered valid if the list of allowed document types is empty or contains duplicates. If you call [requestDocument(\_:)](../../mobiledocumentreadersession/requestdocument%28__%29.md) with an invalid request, the framework throws an [MobileDocumentReaderError.invalidRequest](../../mobiledocumentreadererror/invalidrequest.md) error.
