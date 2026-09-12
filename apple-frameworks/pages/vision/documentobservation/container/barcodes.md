> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/barcodes](https://developer.apple.com/documentation/vision/documentobservation/container/barcodes)

# barcodes

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The machine-readable codes found within the container.

## Declaration

```swift
var barcodes: [BarcodeObservation] { get }
```

<a id="discussion"></a>

## Discussion

Vision recognizes 20 different barcode types; to see the specific codes you can use [supportedBarcodeSymbologies](../../recognizedocumentsrequest/supportedbarcodesymbologies.md). To see this value, set [enabled](../../recognizedocumentsrequest/barcodedetectionoptions-swift.struct/enabled.md) within [RecognizeDocumentsRequest.BarcodeDetectionOptions](../../recognizedocumentsrequest/barcodedetectionoptions-swift.struct.md) to `true`.

## See Also

### Accessing specific content within a document

- [DocumentObservation.Container.DataDetectorMatch](datadetectormatch.md): Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.
- [lists](lists.md): The lists found within the container.
- [paragraphs](paragraphs.md): The document’s extracted text, grouped into paragraphs within the container.
- [tables](tables.md): The tables found within the container.
- [text](text-swift.property.md): All the text found within the container.
- [title](title.md): The title found within the container.
