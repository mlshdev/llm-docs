> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice](https://developer.apple.com/documentation/tabulardata/dataframe/slice)

# DataFrame.Slice

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of a data frame’s rows you create by using a method from a data frame instance or another data frame slice.

## Declaration

```swift
@dynamicMemberLookup struct Slice
```

<a id="overview"></a>

## Overview

A slice is an arbitrary set of rows from a data frame. For example, a slice might contain rows 0–3, 5–9, and 101 from its underlying data frame.

## Topics

### Inspecting a Slice

- [shape](slice/shape.md): The number of rows and columns in the slice.
- [columns](slice/columns.md): The entire slice as a collection of columns.
- [rows](slice/rows.md): The entire slice as a collection of rows.
- [base](slice/base.md): The underlying data frame.

### Creating a Slice by Selecting a Column

- [subscript(\_:)](slice/subscript%28__%29-32h9z.md): Returns a column you select by its column identifier.
- [subscript(column:\_:)](slice/subscript%28column___%29.md): Returns a column you select by its index.
- [subscript(\_:\_:)](slice/subscript%28____%29.md): Returns a column you select by its name and type.
- [subscript(\_:)](slice/subscript%28__%29-18kdy.md): Returns a column you select by its name.
- [subscript(dynamicMember:)](slice/subscript%28dynamicmember_%29.md): Returns a column you select by its name to support dynamic-member lookup.

### Creating a Slice by Selecting Multiple Columns

- [subscript(\_:)](slice/subscript%28__%29-5y42o.md): Generates a data frame slice that includes the columns in a sequence of column names.
- [selecting(columnNames:)](slice/selecting%28columnnames_%29-9l8oe.md): Generates a data frame slice that includes the columns you select with a sequence of names.
- [selecting(columnNames:)](slice/selecting%28columnnames_%29-48kji.md): Generates a data frame slice that includes the columns you select with a list of names.

### Creating a Slice by Selecting Rows

- [prefix(\_:)](slice/prefix%28__%29.md): Returns a new slice that contains the initial elements of the original slice.
- [prefix(upTo:)](slice/prefix%28upto_%29.md): Returns a new slice that contains the initial elements of the original slice up to, but not including, the element at a position.
- [prefix(through:)](slice/prefix%28through_%29.md): Returns a new slice that contains the initial elements of the original slice up to and including the element at a position.
- [suffix(\_:)](slice/suffix%28__%29.md): Returns a new slice that contains the final elements of the original slice.
- [suffix(from:)](slice/suffix%28from_%29.md): Returns a new slice that contains the final elements of the original slice beginning with the element at a position.

### Creating a Slice by Filtering Rows

- [filter(on:\_:)](slice/filter%28on___%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by column identifier.
- [filter(on:\_:\_:)](slice/filter%28on_____%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by name.

### Grouping Rows

- [RowGrouping](../rowgrouping.md): A collection of row selections that have the same value in a column.
- [grouped(by:)](slice/grouped%28by_%29.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
- [RowGroupingProtocol](../rowgroupingprotocol.md): A type that represents a collection of row selections that have the same value in a column.

### Summarizing a Slice

- [summary()](slice/summary%28%29.md): Generates a data frame that summarizes the columns of the data frame slice.
- [summary(of:)](slice/summary%28of_%29.md): Generates a data frame that summarizes the columns you select by name.
- [summary(ofColumns:)](slice/summary%28ofcolumns_%29.md): Generates a data frame that summarizes the columns you select by index.
- [SummaryColumnIDs](../summarycolumnids.md): The summary data frame column identifiers.

### Comparing Slices

- [==(\_:\_:)](slice/==%28____%29.md): Returns a Boolean that indicates whether the slices are equal.

### Describing a Slice

- [description](slice/description.md): A text representation of the data frame slice.
- [debugDescription](slice/debugdescription.md): A text representation of the data frame slice suitable for debugging.
- [customMirror](slice/custommirror.md): A mirror that reflects the data frame slice.

### Hashing a Slice

- [hash(into:)](slice/hash%28into_%29.md): Hashes the essential components of the data frame slice by feeding them into a hasher.

### Default Implementations

- [CustomDebugStringConvertible Implementations](slice/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](slice/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](slice/customstringconvertible-implementations.md)
- [Equatable Implementations](slice/equatable-implementations.md)
- [Hashable Implementations](slice/hashable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataFrameProtocol](../dataframeprotocol.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating a Data Frame from Other Data Frames

- [init(\_:)](init%28__%29.md): Creates a new data frame with a slice of rows from another data frame.
