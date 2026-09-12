> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/optionalcolumnprotocol](https://developer.apple.com/documentation/tabulardata/optionalcolumnprotocol)

# OptionalColumnProtocol

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a column that has missing values.

## Declaration

```swift
protocol OptionalColumnProtocol<WrappedElement> : ColumnProtocol
```

<a id="overview"></a>

## Overview

`OptionalColumnProtocol` defines the common functionality for column types that support missing values.

## Topics

### Filling an Optional Column

- [filled(with:)](optionalcolumnprotocol/filled%28with_%29.md): Generates a filled column by replacing missing elements with a value.

### Generating an Optional Column by Adding Two Columns

- [+(\_:\_:)](optionalcolumnprotocol/+%28____%29-2qex0.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Generates a column by adding each element in an optional column type to the corresponding elements of another.
- [+(\_:\_:)](+%28____%29-1i7oh.md): Generates a column by adding each element in a column type to the corresponding elements of an optional column type.
- [+(\_:\_:)](+%28____%29-3exmp.md): Generates a column by adding each element in an optional column type to the corresponding elements of a column type.

### Generating an Optional Column by Subtracting Two Columns

- [-(\_:\_:)](optionalcolumnprotocol/-%28____%29-5xfkx.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Generates a column by subtracting each element in an optional column type from the corresponding elements of another.
- [-(\_:\_:)](-%28____%29-25cs6.md): Generates a column by subtracting each element in an optional column type from the corresponding elements of a column type.
- [-(\_:\_:)](-%28____%29-95yoe.md): Generates a column by subtracting each element in a column type from the corresponding elements of an optional column.

### Generating an Optional Column by Multiplying Two Columns

- [\*(\_:\_:)](optionalcolumnprotocol/_%28____%29-5f5kx.md): Conforms when `WrappedElement` conforms to `Numeric`. Generates a column by multiplying each element in an optional column type by the corresponding elements of another.
- [\*(\_:\_:)](_%28____%29-2toor.md): Generates a column by multiplying each element in an optional column type by the corresponding elements of a column type.
- [\*(\_:\_:)](_%28____%29-l9r3.md): Generates a column by multiplying each element in a column type by the corresponding elements of an optional column type.

### Generating an Optional Column by Dividing Two Columns

- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-4nmnl.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing each element in an optional column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-9v3nw.md): Generates an integer column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](_%28____%29-4igyw.md): Generates an integer column by dividing each element in an optional column type by the corresponding elements of a column type.
- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-3rlo3.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-4pr65.md): Generates a floating-point column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](_%28____%29-58kg6.md): Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of a column type.

### Generating an Optional Column by Combining a Value

- [+(\_:\_:)](optionalcolumnprotocol/+%28____%29-501gg.md): Generates a column by adding a value to each element in an optional column.
- [+(\_:\_:)](optionalcolumnprotocol/+%28____%29-6ko8x.md): Generates a column by adding each element in an optional column to a value.
- [-(\_:\_:)](optionalcolumnprotocol/-%28____%29-9mejf.md): Generates a column by subtracting a value from each element in an optional column type.
- [-(\_:\_:)](optionalcolumnprotocol/-%28____%29-5vffa.md): Generates a column by subtracting each element in an optional column from a value.
- [\*(\_:\_:)](optionalcolumnprotocol/_%28____%29-orkq.md): Conforms when `WrappedElement` conforms to `Numeric`. Generates a column by multiplying each element in an optional column by a value.
- [\*(\_:\_:)](optionalcolumnprotocol/_%28____%29-5vorv.md): Conforms when `WrappedElement` conforms to `Numeric`. Generates a column by multiplying a value by each element in an optional column type.
- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-7tbmq.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing each element in an optional column by a value.
- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-56h1d.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing a value by each element in an optional column type.
- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-5qhxr.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in an optional column by a value.
- [/(\_:\_:)](optionalcolumnprotocol/_%28____%29-2xfqa.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Generates a floating-point column by dividing a value by each element in an optional column type.

### Describing an Optional Column

- [description(options:)](optionalcolumnprotocol/description%28options_%29.md): Generates a string description of the optional column type.

### Supporting Types

- [WrappedElement](optionalcolumnprotocol/wrappedelement.md): The type of the optional column type’s elements.

## Relationships

### Inherits From

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ColumnProtocol](columnprotocol.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [Column](column.md)
- [ColumnSlice](columnslice.md)
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md)

## See Also

### Typed Columns

- [Column](column.md): A column in a data frame.
- [ColumnSlice](columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [FilledColumn](filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [ColumnProtocol](columnprotocol.md): A type that represents a column.
