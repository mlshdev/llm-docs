> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/list](https://developer.apple.com/documentation/vision/documentobservation/container/list)

# DocumentObservation.Container.List

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A structure that represents a list of items within a document.

## Declaration

```swift
struct List
```

## Topics

### Accessing a list

- [DocumentObservation.Container.List.Item](list/item.md): A single element of a list.

### Inspecting a list

- [boundingRegion](list/boundingregion.md): A polygon that defines the boundary of the list.
- [items](list/items.md): The elements of the list.
- [DocumentObservation.Container.List.Marker](list/marker.md): The symbol or character at the beginning of each list item.

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

- [DocumentObservation.Container.Table](table.md): A structure that represents a table within a document.
- [DocumentObservation.Container.Text](text-swift.struct.md): A structure that represents a region of text in a document.
