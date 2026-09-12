> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicensedisplayrequest/elements](https://developer.apple.com/documentation/proximityreader/mobiledriverslicensedisplayrequest/elements)

# elements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The document elements you’re requesting.

## Declaration

```swift
var elements: [MobileDriversLicenseDisplayRequest.Element]
```

<a id="discussion"></a>

## Discussion

> **Note**

> A request isn’t considered valid if the list of elements is empty, contains duplicates, or contains both [age](element/age.md) and [ageAtLeast(\_:)](element/ageatleast%28__%29.md). If you call [requestDocument(\_:)](../mobiledocumentreadersession/requestdocument%28__%29.md) with an invalid request, the framework throws an [MobileDocumentReaderError.invalidRequest](../mobiledocumentreadererror/invalidrequest.md) error.

## See Also

### Creating a display request

- [init(elements:options:)](init%28elements_options_%29.md): Creates a new mobile driver’s license display request.
- [MobileDriversLicenseDisplayRequest.Element](element.md): A type that represents an element you can request from a mobile driver’s license.
