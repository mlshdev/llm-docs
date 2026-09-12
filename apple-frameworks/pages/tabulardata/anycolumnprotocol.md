> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnprotocol](https://developer.apple.com/documentation/tabulardata/anycolumnprotocol)

# AnyColumnProtocol

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a type-erased column.

## Declaration

```swift
protocol AnyColumnProtocol
```

<a id="overview"></a>

## Overview

`AnyColumnProtocol` defines the common functionality for type-erased column types. Its typed counterpart is [ColumnProtocol](columnprotocol.md).

## Topics

### Inspecting a Type-Erased Column Type

- [name](anycolumnprotocol/name.md): The name of the column type.
- [count](anycolumnprotocol/count.md): The number of elements in the column type.
- [wrappedElementType](anycolumnprotocol/wrappedelementtype.md): The underlying type of the column type’s elements.

### Retrieving Elements

- [subscript(\_:)](anycolumnprotocol/subscript%28__%29-1dl8y.md): Retrieves an element at a position in the column type.
- [subscript(\_:)](anycolumnprotocol/subscript%28__%29-81v4q.md): Retrieves a contiguous subrange of the column type’s elements.

## Relationships

### Conforming Types

- [AnyColumn](anycolumn.md)
- [AnyColumnSlice](anycolumnslice.md)

## See Also

### Type-Erased Columns

- [AnyColumn](anycolumn.md): A type-erased column.
- [AnyColumnSlice](anycolumnslice.md): A type-erased column slice.
- [AnyColumnPrototype](anycolumnprototype.md): A prototype that creates type-erased columns.
