> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/rows-swift.struct](https://developer.apple.com/documentation/tabulardata/dataframe/rows-swift.struct)

# DataFrame.Rows

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection of rows in a data frame.

## Declaration

```swift
struct Rows
```

## Topics

### Inspecting a Row Collection

- [count](rows-swift.struct/count.md): The number of rows in the collection.

### Accessing Elements

- [subscript(\_:)](rows-swift.struct/subscript%28__%29-3f938.md): Accesses a row at an index.
- [subscript(\_:)](rows-swift.struct/subscript%28__%29-2qzx7.md): Returns a row collection from an index range.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Inspecting a Data Frame

- [shape](shape.md): The number of rows and columns in the data frame.
- [columns](columns.md): The entire data frame as a collection of columns.
- [rows](rows-swift.property.md): The entire data frame as a collection of rows.
- [base](base.md): The underlying data frame.
- [containsColumn(\_:\_:)](containscolumn%28____%29.md): Returns a Boolean value indicating whether the data frame contains a column.
