> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/filledcolumn](https://developer.apple.com/documentation/tabulardata/filledcolumn)

# FilledColumn

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A view on a column that replaces missing elements with a default value.

## Declaration

```swift
struct FilledColumn<Base> where Base : OptionalColumnProtocol
```

## Topics

### Inspecting a Column

- [name](filledcolumn/name.md): The name of the column.

### Finding an Element Index

- [argmin()](filledcolumn/argmin%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value.
- [argmax()](filledcolumn/argmax%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value.

### Accessing Elements

- [subscript(\_:)](filledcolumn/subscript%28__%29.md): Retrieves an element at a position in the column type.

### Summarizing a Column

- [summary()](filledcolumn/summary%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Hashable`. Generates a categorical summary of the filled column’s elements, including default values.
- [numericSummary()](filledcolumn/numericsummary%28%29-3ao8s.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column’s elements.
- [numericSummary()](filledcolumn/numericsummary%28%29-86mgh.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column’s elements.

### Getting Statistical Values

- [sum()](filledcolumn/sum%28%29-5836l.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the sum of the integer column’s elements.
- [sum()](filledcolumn/sum%28%29-2805h.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the sum of the floating-point column’s elements.
- [min()](filledcolumn/min%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the element with the lowest value.
- [max()](filledcolumn/max%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the element with the highest value.
- [mean()](filledcolumn/mean%28%29-8xs60.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer column’s elements.
- [mean()](filledcolumn/mean%28%29-jd3v.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point column’s elements.
- [standardDeviation(deltaDegreesOfFreedom:)](filledcolumn/standarddeviation%28deltadegreesoffreedom_%29-4cofd.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column’s elements.
- [standardDeviation(deltaDegreesOfFreedom:)](filledcolumn/standarddeviation%28deltadegreesoffreedom_%29-27xnl.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column’s elements.

### Describing a Column

- [description](filledcolumn/description.md): Conforms when `Base` conforms to `OptionalColumnProtocol`. A mirror that reflects the filled column.
- [debugDescription](filledcolumn/debugdescription.md): Conforms when `Base` conforms to `OptionalColumnProtocol`. A text representation of the filled column suitable for debugging.
- [description(options:)](filledcolumn/description%28options_%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol`. Generates a string description of the filled column.

### Supporting Types

- [FilledColumn.Element](filledcolumn/element.md): The type of the column’s elements that defines an associated type for the bidirectional collection protocol.
- [FilledColumn.WrappedElement](filledcolumn/wrappedelement.md): The type of the column’s elements that defines an associated type for the optional column protocol.

### Default Implementations

- [CustomStringConvertible Implementations](filledcolumn/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ColumnProtocol](columnprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Typed Columns

- [Column](column.md): A column in a data frame.
- [ColumnSlice](columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [ColumnProtocol](columnprotocol.md): A type that represents a column.
- [OptionalColumnProtocol](optionalcolumnprotocol.md): A type that represents a column that has missing values.
