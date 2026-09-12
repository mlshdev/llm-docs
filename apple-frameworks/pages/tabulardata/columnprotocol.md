> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnprotocol](https://developer.apple.com/documentation/tabulardata/columnprotocol)

# ColumnProtocol

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a column.

## Declaration

```swift
protocol ColumnProtocol<Element> : BidirectionalCollection
```

<a id="overview"></a>

## Overview

`ColumnProtocol` defines the common functionality for typed column types. Its type-erased counterpart is [AnyColumnProtocol](anycolumnprotocol.md).

## Topics

### Inspecting a Column Type

- [name](columnprotocol/name.md): The name of the column.

### Generating a Column by Adding Two Columns

- [+(\_:\_:)](columnprotocol/+%28____%29-yc11.md): Conforms when `Element` conforms to `AdditiveArithmetic`. Generates a column by adding each element in a column type to the corresponding elements of another.
- [+(\_:\_:)](+%28____%29-1i7oh.md): Generates a column by adding each element in a column type to the corresponding elements of an optional column type.
- [+(\_:\_:)](+%28____%29-3exmp.md): Generates a column by adding each element in an optional column type to the corresponding elements of a column type.

### Generating a Column by Subtracting Two Columns

- [-(\_:\_:)](columnprotocol/-%28____%29-36zol.md): Conforms when `Element` conforms to `AdditiveArithmetic`. Generates a column by subtracting each element in a column type from the corresponding elements of another.
- [-(\_:\_:)](-%28____%29-25cs6.md): Generates a column by subtracting each element in an optional column type from the corresponding elements of a column type.
- [-(\_:\_:)](-%28____%29-95yoe.md): Generates a column by subtracting each element in a column type from the corresponding elements of an optional column.

### Generating a Column by Multiplying Two Columns

- [\*(\_:\_:)](columnprotocol/_%28____%29-9db1q.md): Conforms when `Element` conforms to `Numeric`. Generates a column by multiplying each element in a column type by the corresponding elements of another.
- [\*(\_:\_:)](_%28____%29-l9r3.md): Generates a column by multiplying each element in a column type by the corresponding elements of an optional column type.
- [\*(\_:\_:)](_%28____%29-2toor.md): Generates a column by multiplying each element in an optional column type by the corresponding elements of a column type.

### Generating a Column by Dividing Two Columns

- [/(\_:\_:)](columnprotocol/_%28____%29-922ku.md): Conforms when `Element` conforms to `BinaryInteger`. Generates an integer column by dividing each element in a column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-9v3nw.md): Generates an integer column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](_%28____%29-4igyw.md): Generates an integer column by dividing each element in an optional column type by the corresponding elements of a column type.
- [/(\_:\_:)](columnprotocol/_%28____%29-2urf0.md): Conforms when `Element` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in a column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-4pr65.md): Generates a floating-point column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](_%28____%29-58kg6.md): Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of a column type.

### Generating a Column by Combining a Value

- [+(\_:\_:)](columnprotocol/+%28____%29-39k8v.md): Generates a column by adding a value to each element in a column.
- [+(\_:\_:)](columnprotocol/+%28____%29-94kiv.md): Generates a column by adding each element in a column to a value.
- [-(\_:\_:)](columnprotocol/-%28____%29-4fynh.md): Generates a column by subtracting each element in a column from a value.
- [-(\_:\_:)](columnprotocol/-%28____%29-6up21.md): Generates a column by subtracting a value from each element in a column.
- [\*(\_:\_:)](columnprotocol/_%28____%29-17vqd.md): Conforms when `Element` conforms to `Numeric`. Generates a column by multiplying each element in a column by a value.
- [\*(\_:\_:)](columnprotocol/_%28____%29-3d6lu.md): Conforms when `Element` conforms to `Numeric`. Generates a column by multiplying a value by each element in a column.
- [/(\_:\_:)](columnprotocol/_%28____%29-4a632.md): Conforms when `Element` conforms to `BinaryInteger`. Generates an integer column by dividing each element in a column by a value.
- [/(\_:\_:)](columnprotocol/_%28____%29-7pe3t.md): Conforms when `Element` conforms to `BinaryInteger`. Generates an integer column by dividing a value by each element in a column.
- [/(\_:\_:)](columnprotocol/_%28____%29-6zigz.md): Conforms when `Element` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in a column by a value.
- [/(\_:\_:)](columnprotocol/_%28____%29-4iv15.md): Conforms when `Element` conforms to `FloatingPoint`. Generates a floating-point column by dividing a value by each element in a column.

### Comparing a Column with a Value

- [==(\_:\_:)](columnprotocol/==%28____%29-5jc0x.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is equal to a value.
- [==(\_:\_:)](columnprotocol/==%28____%29-4hx04.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is equal to the corresponding element of a column type.
- [!=(\_:\_:)](columnprotocol/!=%28____%29-557vb.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type isn’t equal to a value.
- [!=(\_:\_:)](columnprotocol/!=%28____%29-72ddh.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value isn’t equal to the corresponding element of a column type.

### Operators

- [\>(\_:\_:)](columnprotocol/_%28____%29-68any.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is greater than the corresponding element of a column type.
- [\<(\_:\_:)](columnprotocol/_%28____%29-70vl1.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is less than the corresponding element of a column type.
- [\<(\_:\_:)](columnprotocol/_%28____%29-7gy2j.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is less than a value.
- [\>(\_:\_:)](columnprotocol/_%28____%29-9rct2.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is greater than a value.
- [\<=(\_:\_:)](columnprotocol/_=%28____%29-17m6l.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is less than or equal to the corresponding element of a column type.
- [\>=(\_:\_:)](columnprotocol/_=%28____%29-2w8gt.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is greater than or equal to a value.
- [\>=(\_:\_:)](columnprotocol/_=%28____%29-8jak4.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the value is greater than or equal to the corresponding element of a column type.
- [\<=(\_:\_:)](columnprotocol/_=%28____%29-9wr8s.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean array that indicates whether the corresponding element of a column type is less than or equal to a value.

## Relationships

### Inherits From

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Inherited By

- [OptionalColumnProtocol](optionalcolumnprotocol.md)

### Conforming Types

- [Column](column.md)
- [ColumnSlice](columnslice.md)
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md)
- [FilledColumn](filledcolumn.md)

## See Also

### Typed Columns

- [Column](column.md): A column in a data frame.
- [ColumnSlice](columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [FilledColumn](filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [DiscontiguousColumnSlice](discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [OptionalColumnProtocol](optionalcolumnprotocol.md): A type that represents a column that has missing values.
