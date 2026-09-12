> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/text-swift.struct](https://developer.apple.com/documentation/vision/documentobservation/container/text-swift.struct)

# DocumentObservation.Container.Text

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A structure that represents a region of text in a document.

## Declaration

```swift
struct Text
```

## Topics

### Accessing the text

- [detectedData](text-swift.struct/detecteddata.md): Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.
- [lines](text-swift.struct/lines.md): The text grouped by line.
- [transcript](text-swift.struct/transcript.md): The complete text as a string.
- [words](text-swift.struct/words.md): An instance property that returns individual words in a text container.

### Inspecting the text

- [boundingRegion](text-swift.struct/boundingregion.md): A polygon that defines the boundary of text.
- [textAlignment](text-swift.struct/textalignment.md): The alignment of the text within its container.
- [DocumentObservation.Container.Text.Alignment](text-swift.struct/alignment.md): The different text alignment types within a container.

### Getting the bounding region

- [boundingRegion(for:)](text-swift.struct/boundingregion%28for_%29.md): Calculates a bounding region around the range of characters within a string.

## Relationships

### Conforms To

- [BoundingRegionProviding](../../boundingregionproviding.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the sections in a document

- [DocumentObservation.Container.List](list.md): A structure that represents a list of items within a document.
- [DocumentObservation.Container.Table](table.md): A structure that represents a table within a document.
