> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice](https://developer.apple.com/documentation/tabulardata/columnslice)

# ColumnSlice

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection that represents a selection of contiguous elements from a typed column.

## Declaration

```swift
struct ColumnSlice<WrappedElement>
```

<a id="overview"></a>

## Overview

A column slice contains only certain elements from its parent column. Create a slice by using a subscript with a range.

```swift
let slice = column[100 ..< 200]
```

## Topics

### Creating a Column Slice

- [init(\_:)](columnslice/init%28__%29.md): Creates a slice with the contents of a column.

### Creating a Slice of Unique Elements

- [distinct()](columnslice/distinct%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a discontiguous slice that contains unique elements.

### Creating a Type-Erased Slice

- [eraseToAnyColumn()](columnslice/erasetoanycolumn%28%29.md): Returns a type-erased column slice.

### Creating a Column of the Same Type

- [prototype](columnslice/prototype.md): A prototype that creates type-erased columns with the same underlying type as the column slice.

### Creating Transformed Columns

- [map(\_:)](columnslice/map%28__%29.md): Creates a new column by applying a transformation to every element.

### Inspecting a Column Slice

- [name](columnslice/name.md): The name of the slice’s parent column.
- [count](columnslice/count.md): The number of elements in the column slice.
- [wrappedElementType](columnslice/wrappedelementtype.md): The underlying type of the column’s elements.
- [argmin()](columnslice/argmin%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value, ignoring missing elements.
- [argmax()](columnslice/argmax%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value, ignoring missing elements.
- [isNil(at:)](columnslice/isnil%28at_%29.md): Returns a Boolean that indicates whether the element at an index is missing.

### Accessing Elements

- [subscript(\_:)](columnslice/subscript%28__%29-38hn8.md): Accesses an element at an index.
- [subscript(\_:)](columnslice/subscript%28__%29-7lrhk.md): Accesses a contiguous range of elements.

### Summarizing a Column Slice

- [summary()](columnslice/summary%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a categorical summary of the column slice’s elements.
- [numericSummary()](columnslice/numericsummary%28%29-68ohj.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column slice’s elements.
- [numericSummary()](columnslice/numericsummary%28%29-5swa5.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column slice’s elements.

### Getting Statistical Values

- [sum()](columnslice/sum%28%29.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Returns the sum of the column slice’s elements, ignoring missing elements.
- [min()](columnslice/min%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the lowest value, ignoring missing elements.
- [max()](columnslice/max%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the highest value, ignoring missing elements.
- [mean()](columnslice/mean%28%29-3inzf.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer slice’s elements, ignoring missing elements.
- [mean()](columnslice/mean%28%29-7u3i0.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](columnslice/standarddeviation%28deltadegreesoffreedom_%29-1i05i.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](columnslice/standarddeviation%28deltadegreesoffreedom_%29-3d6vo.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column slice’s elements, ignoring missing elements.

### Describing a Column Slice

- [description](columnslice/description.md): A text representation of the column slice.
- [debugDescription](columnslice/debugdescription.md): A text representation of the column slice suitable for debugging.
- [customMirror](columnslice/custommirror.md): A mirror that reflects the column slice.

### Comparing Two Column Slices

- [==(\_:\_:)](columnslice/==%28____%29.md): Conforms when `WrappedElement` conforms to `Equatable`. Returns a Boolean that indicates whether the column slices are equal.

### Modifying a Column Slice with a Value

- [+=(\_:\_:)](columnslice/+=%28____%29-950qi.md): Modifies a column slice by adding a value to each element.
- [-=(\_:\_:)](columnslice/-=%28____%29-1n1gh.md): Modifies a column slice by subtracting a value from each element.
- [\*=(\_:\_:)](columnslice/_=%28____%29-i6qs.md): Modifies a column slice by multiplying each element by a value.
- [/=(\_:\_:)](columnslice/_=%28____%29-8oi36.md): Modifies an integer column slice by dividing each element by a value.
- [/=(\_:\_:)](columnslice/_=%28____%29-8pl3f.md): Modifies a floating-point column slice by dividing each element by a value.

### Modifying a Column Slice with a Collection of Values

- [+=(\_:\_:)](columnslice/+=%28____%29-47cwm.md): Modifies a column slice by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](columnslice/+=%28____%29-4bgdt.md): Modifies a column slice by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](columnslice/-=%28____%29-3kauw.md): Modifies a column slice by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](columnslice/-=%28____%29-1bqy4.md): Modifies a column slice by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](columnslice/_=%28____%29-7lz8l.md): Modifies a column slice by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](columnslice/_=%28____%29-3v2q0.md): Modifies a column slice by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](columnslice/_=%28____%29-46jci.md): Modifies an integer column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](columnslice/_=%28____%29-8frqe.md): Modifies an integer column slice by dividing each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](columnslice/_=%28____%29-1fciw.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](columnslice/_=%28____%29-6ujes.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding optional value in a collection.

### Hashing a Column Slice

- [hash(into:)](columnslice/hash%28into_%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Hashes the essential components of the column slice by feeding them into a hasher.

### Supporting Types

- [ColumnSlice.Element](columnslice/element.md): The type of the column slice’s elements, which is an optional type of the parent column’s type.
- [ColumnSlice.Index](columnslice/index.md): The type that represents a position in the column slice.

### Instance Properties

- [missingCount](columnslice/missingcount.md): The number of missing elements in the column slice.

### Default Implementations

- [BidirectionalCollection Implementations](columnslice/bidirectionalcollection-implementations.md)
- [Collection Implementations](columnslice/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](columnslice/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](columnslice/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](columnslice/customstringconvertible-implementations.md)
- [Equatable Implementations](columnslice/equatable-implementations.md)
- [Hashable Implementations](columnslice/hashable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ColumnProtocol](columnprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [OptionalColumnProtocol](optionalcolumnprotocol.md)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Typed Columns

- [Column](column.md): A column in a data frame.
- [FilledColumn](filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [ColumnProtocol](columnprotocol.md): A type that represents a column.
- [OptionalColumnProtocol](optionalcolumnprotocol.md): A type that represents a column that has missing values.
