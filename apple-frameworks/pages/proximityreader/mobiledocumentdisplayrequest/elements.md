> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest/elements](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/elements)

# elements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The document elements you’re requesting.

## Declaration

```swift
var elements: [MobileDocumentDisplayRequest.Element]
```

<a id="discussion"></a>

## Discussion

> **Note**

> A request isn’t considered valid if the list of elements is empty, contains duplicates, or contains both [age](element/age.md) and [ageAtLeast(\_:)](element/ageatleast%28__%29.md). If you call [requestDocument(\_:)](../mobiledocumentreadersession/requestdocument%28__%29.md) with an invalid request, the framework throws an [MobileDocumentReaderError.invalidRequest](../mobiledocumentreadererror/invalidrequest.md) error.
