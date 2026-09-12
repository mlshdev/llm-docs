> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container](https://developer.apple.com/documentation/vision/documentobservation/container)

# DocumentObservation.Container

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A region of content recognized in a document.

## Declaration

```swift
struct Container
```

## Topics

### Getting the sections in a document

- [DocumentObservation.Container.List](container/list.md): A structure that represents a list of items within a document.
- [DocumentObservation.Container.Table](container/table.md): A structure that represents a table within a document.
- [DocumentObservation.Container.Text](container/text-swift.struct.md): A structure that represents a region of text in a document.

### Accessing specific content within a document

- [DocumentObservation.Container.DataDetectorMatch](container/datadetectormatch.md): Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.
- [barcodes](container/barcodes.md): The machine-readable codes found within the container.
- [lists](container/lists.md): The lists found within the container.
- [paragraphs](container/paragraphs.md): The document’s extracted text, grouped into paragraphs within the container.
- [tables](container/tables.md): The tables found within the container.
- [text](container/text-swift.property.md): All the text found within the container.
- [title](container/title.md): The title found within the container.

## Relationships

### Conforms To

- [BoundingRegionProviding](../boundingregionproviding.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
