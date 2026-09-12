> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/rows-swift.struct](https://developer.apple.com/documentation/createml/mldatatable/rows-swift.struct)

# MLDataTable.Rows

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A collection of rows in a data table.

## Declaration

```swift
struct Rows
```

## Topics

### Accessing rows

- [subscript(\_:)](rows-swift.struct/subscript%28__%29.md): Subscript by index. This returns a row in the data table.

### Manipulating indices

- [startIndex](rows-swift.struct/startindex.md): The position of the first row in a nonempty DataTable. If the DataTable is empty, `startIndex` is equal to `endIndex`.
- [endIndex](rows-swift.struct/endindex.md): The DataTable’s “past the end” position—that is, the position one greater than the last valid subscript argument.

### Supporting types

- [MLDataTable.Row](row.md): A row of untyped values in a data table.
- [MLDataTable.Rows.Element](rows-swift.struct/element.md): The Element of a DataTable is a Row. This is represented as a Dictionary-like type containing all Column names and their corresponding values.

### Default Implementations

- [RandomAccessCollection Implementations](rows-swift.struct/randomaccesscollection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Getting information about a data table’s rows

- [MLDataTable.Row](row.md): A row of untyped values in a data table.
- [rows](rows-swift.property.md): The rows of data in the table.
