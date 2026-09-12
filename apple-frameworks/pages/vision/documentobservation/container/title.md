> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/title](https://developer.apple.com/documentation/vision/documentobservation/container/title)

# title

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The title found within the container.

## Declaration

```swift
var title: DocumentObservation.Container.Text? { get }
```

## See Also

### Accessing specific content within a document

- [DocumentObservation.Container.DataDetectorMatch](datadetectormatch.md): Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.
- [barcodes](barcodes.md): The machine-readable codes found within the container.
- [lists](lists.md): The lists found within the container.
- [paragraphs](paragraphs.md): The document’s extracted text, grouped into paragraphs within the container.
- [tables](tables.md): The tables found within the container.
- [text](text-swift.property.md): All the text found within the container.
