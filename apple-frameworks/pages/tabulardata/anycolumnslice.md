> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnslice](https://developer.apple.com/documentation/tabulardata/anycolumnslice)

# AnyColumnSlice

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type-erased column slice.

## Declaration

```swift
struct AnyColumnSlice
```

## Topics

### Inspecting a Type-Erased Column Slice

- [name](anycolumnslice/name.md): The name of the slice’s parent column.
- [count](anycolumnslice/count.md): The number of elements in the column slice.
- [missingCount](anycolumnslice/missingcount.md): The number of missing elements in the column slice.
- [wrappedElementType](anycolumnslice/wrappedelementtype.md): The underlying type of the column’s elements.
- [isNil(at:)](anycolumnslice/isnil%28at_%29.md): Returns a Boolean that indicates whether the element at the index is missing.

### Converting to a Typed Column Slice

- [assumingType(\_:)](anycolumnslice/assumingtype%28__%29.md): Returns a slice of the underlying typed column.

### Accessing Elements

- [subscript(\_:)](anycolumnslice/subscript%28__%29-g0gb.md): Accesses an element at an index.
- [subscript(\_:)](anycolumnslice/subscript%28__%29-3qisq.md): Accesses a contiguous range of elements.

### Creating a Slice of Unique Elements

- [distinct()](anycolumnslice/distinct%28%29.md): Generates a column slice that contains unique elements.

### Summarizing a Column Slice

- [summary()](anycolumnslice/summary%28%29.md): Generates a categorical summary of the column slice’s elements.

### Describing a Column Slice

- [description](anycolumnslice/description.md): A text representation of the column slice.
- [debugDescription](anycolumnslice/debugdescription.md): A text representation of the column slice suitable for debugging.
- [customMirror](anycolumnslice/custommirror.md): A mirror that reflects the column slice.

### Comparing Two Column Slices

- [==(\_:\_:)](anycolumnslice/==%28____%29.md): Returns a Boolean that indicates whether the column slices are equal.

### Hashing a Column Slice

- [hash(into:)](anycolumnslice/hash%28into_%29.md): Hashes the essential components of the column slice by feeding them into a hasher.

### Default Implementations

- [CustomDebugStringConvertible Implementations](anycolumnslice/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](anycolumnslice/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](anycolumnslice/customstringconvertible-implementations.md)
- [Equatable Implementations](anycolumnslice/equatable-implementations.md)
- [Hashable Implementations](anycolumnslice/hashable-implementations.md)
- [RandomAccessCollection Implementations](anycolumnslice/randomaccesscollection-implementations.md)

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

- [AnyColumn](anycolumn.md): A type-erased column.
- [AnyColumnProtocol](anycolumnprotocol.md): A type that represents a type-erased column.
- [AnyColumnPrototype](anycolumnprototype.md): A prototype that creates type-erased columns.
