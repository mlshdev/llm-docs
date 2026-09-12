> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentanyofrawdatarequest/addrequest(_:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentanyofrawdatarequest/addrequest(_:))

# addRequest(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Adds the request as a candidate of this composite request.

## Declaration

```swift
mutating func addRequest(_ request: any MobileDocumentRawDataRequest)
```

## Parameters

- `request`: The child request.

<a id="discussion"></a>

## Discussion

> **Note**

> A request isn’t considered valid if it contains requests that are not raw data requests. If you call [requestDocument(\_:)](../mobiledocumentreadersession/requestdocument%28__%29.md) with an invalid request, the framework throws a [MobileDocumentReaderError.invalidRequest](../mobiledocumentreadererror/invalidrequest.md) error.

## See Also

### Initializing a raw data request

- [init()](init%28%29.md): Returns a composite mobile document raw data request.
