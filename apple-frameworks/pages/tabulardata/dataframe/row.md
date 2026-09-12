> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/row](https://developer.apple.com/documentation/tabulardata/dataframe/row)

# DataFrame.Row

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A single row within a data frame.

## Declaration

```swift
struct Row
```

## Topics

### Inspecting a Row

- [count](row/count.md): The number of columns in the row.
- [index](row/index.md): The row’s index in the underlying data frame.
- [base](row/base.md): The row’s underlying data frame.

### Accessing Elements

- [subscript(\_:)](row/subscript%28__%29-5tsj0.md): Accesses a value at a column index.
- [subscript(\_:)](row/subscript%28__%29-2v7qz.md): Accesses a value in the row you select by a column name.
- [subscript(\_:\_:)](row/subscript%28____%29-7gpc3.md): Accesses a value in the row you select by a column name and type.
- [subscript(\_:)](row/subscript%28__%29-9o424.md): Accesses a value in the row you select by a column identifier.
- [subscript(\_:\_:)](row/subscript%28____%29-1o38p.md): Accesses a value in the row you select by a column index and type.

### Describing a Row

- [description](row/description.md): A text representation of the row.
- [debugDescription](row/debugdescription.md): A text representation of the row suitable for debugging.
- [customMirror](row/custommirror.md): A mirror that reflects the row.

### Comparing Two Rows

- [==(\_:\_:)](row/==%28____%29.md): Returns a Boolean that indicates whether the rows are equal.

### Hashing a Row

- [hash(into:)](row/hash%28into_%29.md): Hashes the essential components of the row by feeding them into a hasher.

### Instance Methods

- [description(options:)](row/description%28options_%29.md): A text representation of the row.

### Default Implementations

- [Collection Implementations](row/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](row/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](row/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](row/customstringconvertible-implementations.md)
- [Equatable Implementations](row/equatable-implementations.md)
- [Hashable Implementations](row/hashable-implementations.md)
- [RandomAccessCollection Implementations](row/randomaccesscollection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Supporting Types

- [DataFrame.Slice](slice.md): A set of a data frame’s rows you create by using a method from a data frame instance or another data frame slice.
