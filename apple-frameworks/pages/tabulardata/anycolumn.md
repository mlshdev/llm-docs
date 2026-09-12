> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumn](https://developer.apple.com/documentation/tabulardata/anycolumn)

# AnyColumn

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type-erased column.

## Declaration

```swift
struct AnyColumn
```

<a id="overview"></a>

## Overview

`AnyColumn` is a column type that conceals the type of its elements, unlike [Column](column.md), its typed counterpart.

## Topics

### Inspecting a Type-Erased Column

- [name](anycolumn/name.md): The name of the column.
- [count](anycolumn/count.md): The number of elements in the column.
- [missingCount](anycolumn/missingcount.md): The number of missing elements in the column.
- [wrappedElementType](anycolumn/wrappedelementtype.md): The underlying type of the column’s elements.
- [isNil(at:)](anycolumn/isnil%28at_%29.md): Returns a Boolean that indicates whether the element at the index is missing.

### Creating a Column of the Same Type

- [prototype](anycolumn/prototype.md): A prototype that creates type-erased columns with the same underlying type as the column slice.

### Creating a Typed Column

- [assumingType(\_:)](anycolumn/assumingtype%28__%29.md): Returns the underlying typed column.

### Adding Elements

- [append(\_:)](anycolumn/append%28__%29.md): Appends an optional element to the column.
- [append(contentsOf:)](anycolumn/append%28contentsof_%29-2in58.md): Appends the contents of another column to the column.
- [append(contentsOf:)](anycolumn/append%28contentsof_%29-az5b.md): Appends the contents of a column slice to the column.

### Removing an Element

- [remove(at:)](anycolumn/remove%28at_%29.md): Removes an element from the column.

### Accessing Elements

- [subscript(\_:)](anycolumn/subscript%28__%29-6z1b5.md): Accesses an element at an index.
- [subscript(\_:)](anycolumn/subscript%28__%29-1n9t9.md): Accesses a contiguous subrange of the elements.

### Creating a Slice of Unique Elements

- [distinct()](anycolumn/distinct%28%29.md): Generates a column slice that contains unique elements.

### Creating a Slice by Masking Elements

- [subscript(\_:)](anycolumn/subscript%28__%29-3658g.md): Returns a slice of the column by selecting elements with a collection of Booleans.

### Encoding a Column

- [encode(\_:using:)](anycolumn/encode%28__using_%29.md): Encodes each element of the column.
- [encoded(\_:using:)](anycolumn/encoded%28__using_%29.md): Generates a column by encoding each element’s value.

### Decoding a Column

- [decode(\_:using:)](anycolumn/decode%28__using_%29.md): Decodes the data in each element of the column.
- [decoded(\_:using:)](anycolumn/decoded%28__using_%29.md): Decodes data for each element of the column.

### Describing a Column

- [description](anycolumn/description.md): A text representation of the column.
- [debugDescription](anycolumn/debugdescription.md): A text representation of the column suitable for debugging.
- [customMirror](anycolumn/custommirror.md): A mirror that reflects the column.

### Comparing Two Columns

- [==(\_:\_:)](anycolumn/==%28____%29.md): Returns a Boolean that indicates whether the columns are equal.

### Hashing a Column

- [hash(into:)](anycolumn/hash%28into_%29.md): Hashes the essential components of the column by feeding them into a hasher.

### Default Implementations

- [CustomDebugStringConvertible Implementations](anycolumn/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](anycolumn/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](anycolumn/customstringconvertible-implementations.md)
- [Equatable Implementations](anycolumn/equatable-implementations.md)
- [Hashable Implementations](anycolumn/hashable-implementations.md)
- [RandomAccessCollection Implementations](anycolumn/randomaccesscollection-implementations.md)

## Relationships

### Conforms To

- [AnyColumnProtocol](anycolumnprotocol.md)
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

### Type-Erased Columns

- [AnyColumnSlice](anycolumnslice.md): A type-erased column slice.
- [AnyColumnProtocol](anycolumnprotocol.md): A type that represents a type-erased column.
- [AnyColumnPrototype](anycolumnprototype.md): A prototype that creates type-erased columns.
