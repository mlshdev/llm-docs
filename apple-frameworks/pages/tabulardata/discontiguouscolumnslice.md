> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice)

# DiscontiguousColumnSlice

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection that represents a selection, potentially with gaps, of elements from a typed column.

## Declaration

```swift
struct DiscontiguousColumnSlice<WrappedElement>
```

<a id="overview"></a>

## Overview

A column slice contains only certain elements from its parent column. Create a slice by selecting certain elements. For example, use [filter(\_:)](discontiguouscolumnslice/filter%28__%29.md) to create a slice that only includes elements with even values.

```swift
let slice = column.filter({ $0.isMultiple(of: 2) })
```

## Topics

### Creating a Column Slice

- [init(\_:)](discontiguouscolumnslice/init%28__%29.md): Creates a slice with the contents of a column.
- [init(column:ranges:)](discontiguouscolumnslice/init%28column_ranges_%29.md): Creates a slice with the contents of a column.

### Creating a Slice of Unique Elements

- [distinct()](discontiguouscolumnslice/distinct%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a discontiguous slice that contains unique elements.

### Creating a Type-Erased Slice

- [eraseToAnyColumn()](discontiguouscolumnslice/erasetoanycolumn%28%29.md): Generates a type-erased copy of the column slice.

### Creating a Column of the Same Type

- [prototype](discontiguouscolumnslice/prototype.md): A prototype that creates type-erased columns with the same underlying type as the column slice.

### Creating Transformed Columns

- [map(\_:)](discontiguouscolumnslice/map%28__%29.md): Creates a new column by applying a transformation to each element.

### Inspecting a Column Slice

- [name](discontiguouscolumnslice/name.md): The name of the slice’s parent column.
- [count](discontiguouscolumnslice/count.md): The number of elements in the column slice.
- [wrappedElementType](discontiguouscolumnslice/wrappedelementtype.md): The underlying type of the column’s elements.
- [argmin()](discontiguouscolumnslice/argmin%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value, ignoring missing elements.
- [argmax()](discontiguouscolumnslice/argmax%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value, ignoring missing elements.
- [isNil(at:)](discontiguouscolumnslice/isnil%28at_%29.md): Returns a Boolean that indicates whether the element at the index is missing.

### Accessing Elements

- [subscript(\_:)](discontiguouscolumnslice/subscript%28__%29-9y37v.md): Accesses an element at an index.
- [subscript(\_:)](discontiguouscolumnslice/subscript%28__%29-8rd2f.md): Accesses a contiguous range of elements.
- [subscript(\_:)](discontiguouscolumnslice/subscript%28__%29-4k2lh.md): Accesses a contiguous range of elements with a range expression.
- [subscript(\_:)](discontiguouscolumnslice/subscript%28__%29-5xvit.md): Accesses a contiguous range of elements with an unbounded range.

### Summarizing a Column Slice

- [summary()](discontiguouscolumnslice/summary%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a categorical summary of the column slice’s elements.
- [numericSummary()](discontiguouscolumnslice/numericsummary%28%29-3r7pn.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column slice’s elements.
- [numericSummary()](discontiguouscolumnslice/numericsummary%28%29-4b7m0.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column slice’s elements.

### Getting Statistical Values

- [sum()](discontiguouscolumnslice/sum%28%29.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Returns the sum of the column slice’s elements, ignoring missing elements.
- [min()](discontiguouscolumnslice/min%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the lowest value, ignoring missing elements.
- [max()](discontiguouscolumnslice/max%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the highest value, ignoring missing elements.
- [mean()](discontiguouscolumnslice/mean%28%29-3y11c.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point slice’s elements, ignoring missing elements.
- [mean()](discontiguouscolumnslice/mean%28%29-49u93.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](discontiguouscolumnslice/standarddeviation%28deltadegreesoffreedom_%29-36nx2.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](discontiguouscolumnslice/standarddeviation%28deltadegreesoffreedom_%29-5vd4r.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column slice’s elements, ignoring missing elements.

### Describing a Column Slice

- [description](discontiguouscolumnslice/description.md): A text representation of the column slice.
- [debugDescription](discontiguouscolumnslice/debugdescription.md): A text representation of the column slice suitable for debugging.
- [customMirror](discontiguouscolumnslice/custommirror.md): A mirror that reflects the column slice.

### Comparing Two Column Slices

- [==(\_:\_:)](discontiguouscolumnslice/==%28____%29.md): Conforms when `WrappedElement` conforms to `Equatable`. Returns a Boolean that indicates whether the column slices are equal.

### Modifying a Column Slice with a Value

- [+=(\_:\_:)](discontiguouscolumnslice/+=%28____%29-1mzz0.md): Modifies a column slice by adding a value to each element.
- [-=(\_:\_:)](discontiguouscolumnslice/-=%28____%29-2yrui.md): Modifies a column slice by subtracting a value from each element.
- [\*=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-7gcqc.md): Modifies a column slice by multiplying each element by a value.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-1g0yb.md): Modifies an integer column slice by dividing each element by a value.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-6i7hx.md): Modifies a floating-point column slice by dividing each element by a value.

### Modifying a Column Slice with a Collection of Values

- [+=(\_:\_:)](discontiguouscolumnslice/+=%28____%29-2jxz1.md): Modifies a column slice by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](discontiguouscolumnslice/+=%28____%29-lpai.md): Modifies a column slice by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](discontiguouscolumnslice/-=%28____%29-9nkq6.md): Modifies a column slice by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](discontiguouscolumnslice/-=%28____%29-8a20q.md): Modifies a column slice by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-9jg9h.md): Modifies a column slice by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-18nlr.md): Modifies a column slice by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-6xf9s.md): Modifies an integer column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-1mzcg.md): Modifies an integer column slice by dividing each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-39wsi.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](discontiguouscolumnslice/_=%28____%29-6lzj.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding optional value in a collection.

### Hashing a Column Slice

- [hash(into:)](discontiguouscolumnslice/hash%28into_%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Hashes the essential components of the column slice by feeding them into a hasher.

### Supporting Types

- [DiscontiguousColumnSlice.Element](discontiguouscolumnslice/element.md): The type of the column slice’s elements.
- [DiscontiguousColumnSlice.Index](discontiguouscolumnslice/index.md): The type that represents a position in the column slice.

### Instance Properties

- [missingCount](discontiguouscolumnslice/missingcount.md): The number of missing elements in the column slice.

### Default Implementations

- [BidirectionalCollection Implementations](discontiguouscolumnslice/bidirectionalcollection-implementations.md)
- [Collection Implementations](discontiguouscolumnslice/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](discontiguouscolumnslice/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](discontiguouscolumnslice/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](discontiguouscolumnslice/customstringconvertible-implementations.md)
- [Equatable Implementations](discontiguouscolumnslice/equatable-implementations.md)
- [Hashable Implementations](discontiguouscolumnslice/hashable-implementations.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Typed Columns

- [Column](column.md): A column in a data frame.
- [ColumnSlice](columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [FilledColumn](filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [ColumnProtocol](columnprotocol.md): A type that represents a column.
- [OptionalColumnProtocol](optionalcolumnprotocol.md): A type that represents a column that has missing values.
