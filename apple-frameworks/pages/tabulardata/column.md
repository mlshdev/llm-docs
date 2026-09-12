> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column](https://developer.apple.com/documentation/tabulardata/column)

# Column

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A column in a data frame.

## Declaration

```swift
struct Column<WrappedElement>
```

<a id="overview"></a>

## Overview

A column is a [Collection](https://developer.apple.com/documentation/swift/collection) that contains values of a specific type, including:

- [Int](https://developer.apple.com/documentation/swift/int)
- [Double](https://developer.apple.com/documentation/swift/double)
- [String](https://developer.apple.com/documentation/swift/string)

Each element in a column is an [Optional](https://developer.apple.com/documentation/swift/optional) of the column’s type. Each `nil` element represents a missing value.

## Topics

### Creating a Column

- [init(name:capacity:)](column/init%28name_capacity_%29.md): Creates a column with a name and a capacity.
- [init(\_:capacity:)](column/init%28__capacity_%29.md): Creates a column with a column identifier and a capacity.
- [init(name:contents:)](column/init%28name_contents_%29-6okx3.md): Creates a column with a name and a sequence of nonoptional values.
- [init(name:contents:)](column/init%28name_contents_%29-8nxtj.md): Creates a column with a name and a sequence of optional values.
- [init(\_:contents:)](column/init%28__contents_%29-1871a.md): Creates a column with an identifier and a sequence of nonoptional values.
- [init(\_:contents:)](column/init%28__contents_%29-7z5ji.md): Creates a column with a column identifier and a sequence of optional values.
- [init(\_:)](column/init%28__%29.md): Creates a column from a column slice.

### Creating a Column of the Same Type

- [prototype](column/prototype.md): A prototype that creates type-erased columns with the same underlying type as the column slice.

### Creating a Type-Erased Column

- [eraseToAnyColumn()](column/erasetoanycolumn%28%29.md): Generates a type-erased copy of the column.

### Creating Transformed Columns

- [map(\_:)](column/map%28__%29.md): Creates a new column by applying a transformation to every element.
- [mapNonNil(\_:)](column/mapnonnil%28__%29.md): Creates a new column by applying the transformation to every element that isn’t missing.

### Inspecting a Column

- [name](column/name.md): The name of the column.
- [count](column/count.md): The number of elements in the column.
- [missingCount](column/missingcount.md): The number of missing elements in the column.
- [Column.Element](column/element.md): The type of the column’s elements, which is an optional type of the column’s type.
- [wrappedElementType](column/wrappedelementtype.md): The underlying type of the column’s elements.

### Transforming a Column

- [transform(\_:)](column/transform%28__%29-271dd.md): Applies a transformation to every element that isn’t missing.
- [transform(\_:)](column/transform%28__%29-6mrwg.md): Applies a transformation to every element in the column.

### Adding Elements

- [append(\_:)](column/append%28__%29-qycj.md): Appends a nonoptional value to the column.
- [append(\_:)](column/append%28__%29-4t2pt.md): Appends an optional value to the column.
- [append(contentsOf:)](column/append%28contentsof_%29-qb4p.md): Appends a sequence of nonoptional values to the column.
- [append(contentsOf:)](column/append%28contentsof_%29-42y1d.md): Appends a sequence of optional values to the column.

### Finding an Element Index

- [argmin()](column/argmin%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value, ignoring missing elements.
- [argmax()](column/argmax%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value, ignoring missing elements.

### Removing an Element

- [remove(at:)](column/remove%28at_%29.md): Removes an element from the column.

### Accessing Elements

- [subscript(\_:)](column/subscript%28__%29-qm4d.md): Accesses an element at an index.
- [subscript(\_:)](column/subscript%28__%29-52xy1.md): Accesses a contiguous range of elements with a range expression.
- [subscript(\_:)](column/subscript%28__%29-gne9.md): Accesses a contiguous range of elements.

### Creating a Slice of Unique Elements

- [distinct()](column/distinct%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a discontiguous slice that contains unique elements.

### Creating a Slice by Masking Elements

- [subscript(\_:)](column/subscript%28__%29-56i2s.md): Returns a column slice that includes elements that correspond to a collection of Booleans.

### Encoding a Column

- [encoded(using:)](column/encoded%28using_%29.md): Conforms when `WrappedElement` conforms to `Encodable`. Generates a column by encoding each element’s value.

### Decoding a Column

- [decoded(\_:using:)](column/decoded%28__using_%29.md): Generates a column by decoding each element’s data.

### Summarizing a Column

- [summary()](column/summary%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a categorical summary of the column’s elements.
- [numericSummary()](column/numericsummary%28%29-2m0sr.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column’s elements.
- [numericSummary()](column/numericsummary%28%29-8laeo.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column’s elements.

### Getting Statistical Values

- [sum()](column/sum%28%29.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Returns the sum of the column’s elements, ignoring missing elements.
- [min()](column/min%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the lowest value, ignoring missing elements.
- [max()](column/max%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the highest value, ignoring missing elements.
- [mean()](column/mean%28%29-2si7j.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer column’s elements, ignoring missing elements.
- [mean()](column/mean%28%29-ic5z.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point column’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](column/standarddeviation%28deltadegreesoffreedom_%29-9ffqu.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](column/standarddeviation%28deltadegreesoffreedom_%29-4kc16.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column’s elements, ignoring missing elements.

### Describing a Column

- [description](column/description.md): A text representation of the column.
- [debugDescription](column/debugdescription.md): A text representation of the column suitable for debugging.
- [customMirror](column/custommirror.md): A mirror that reflects the column.

### Modifying a Column with a Value

- [+=(\_:\_:)](column/+=%28____%29-94q8g.md): Modifies a column by adding a value to each element.
- [-=(\_:\_:)](column/-=%28____%29-8arlr.md): Modifies a column by subtracting a value from each element.
- [\*=(\_:\_:)](column/_=%28____%29-4rraw.md): Modifies a column by multiplying each element by a value.
- [/=(\_:\_:)](column/_=%28____%29-8jmir.md): Modifies an integer column by dividing each element by a value.
- [/=(\_:\_:)](column/_=%28____%29-3hfr5.md): Modifies a floating-point column by dividing each element by a value.

### Modifying a Column with a Collection of Values

- [+=(\_:\_:)](column/+=%28____%29-2w5o4.md): Modifies a column by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](column/+=%28____%29-2scuy.md): Modifies a column by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](column/-=%28____%29-8rgjq.md): Modifies a column by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](column/-=%28____%29-3v0hh.md): Modifies a column by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](column/_=%28____%29-8mmnn.md): Modifies a column by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](column/_=%28____%29-6kp11.md): Modifies a column by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](column/_=%28____%29-dnma.md): Modifies an integer column by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](column/_=%28____%29-8xhzg.md): Modifies an integer column by dividing each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](column/_=%28____%29-86t1j.md): Modifies a floating-point column by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](column/_=%28____%29-3acz8.md): Modifies a floating-point column by dividing each element in the column by the corresponding optional value in a collection.

### Instance Methods

- [withContiguousMutableStorageIfAvailable(\_:)](column/withcontiguousmutablestorageifavailable%28__%29-9j9p8.md): Call `body(buffer)`, where `buffer` provides access to the non-optional contiguous mutable storage of the entire column. If the column contains missing values, `body` is not called and `nil` is returned.
- [withContiguousStorageIfAvailable(\_:)](column/withcontiguousstorageifavailable%28__%29-6nbz3.md): Call `body(buffer)`, where `buffer` provides access to the non-optional contiguous storage of the entire column. If the column contains missing values, `body` is not called and `nil` is returned.

### Default Implementations

- [BidirectionalCollection Implementations](column/bidirectionalcollection-implementations.md)
- [CustomDebugStringConvertible Implementations](column/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](column/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](column/customstringconvertible-implementations.md)
- [MutableCollection Implementations](column/mutablecollection-implementations.md)
- [Sequence Implementations](column/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ColumnProtocol](columnprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
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

- [ColumnSlice](columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [FilledColumn](filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [ColumnProtocol](columnprotocol.md): A type that represents a column.
- [OptionalColumnProtocol](optionalcolumnprotocol.md): A type that represents a column that has missing values.
