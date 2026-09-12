> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/table](https://developer.apple.com/documentation/vision/documentobservation/container/table)

# DocumentObservation.Container.Table

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A structure that represents a table within a document.

## Declaration

```swift
struct Table
```

## Topics

### Accessing a table

- [DocumentObservation.Container.Table.Cell](table/cell.md): A structure that represents a table cell.

### Inspecting a table

- [boundingRegion](table/boundingregion.md): A polygon that defines the boundary of the table.
- [columns](table/columns.md): The columns in a table.
- [rows](table/rows.md): The rows in a table.

### Getting the cell

- [cell(row:col:)](table/cell%28row_col_%29.md): The cell at the specific row and column index, if it exists.

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
- [DocumentObservation.Container.Text](text-swift.struct.md): A structure that represents a region of text in a document.
