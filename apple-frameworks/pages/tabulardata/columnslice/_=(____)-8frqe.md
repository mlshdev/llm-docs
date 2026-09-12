> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice/_=(_:_:)-8frqe](https://developer.apple.com/documentation/tabulardata/columnslice/_=(_:_:)-8frqe)

# /=(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies an integer column slice by dividing each element in the column by the corresponding optional value in a collection.

## Declaration

```swift
static func /= <C>(lhs: inout ColumnSlice<WrappedElement>, rhs: C) where WrappedElement : BinaryInteger, C : Collection, C.Element == WrappedElement?
```

## Parameters

- `lhs`: A column.
- `rhs`: A collection that contains elements of the same type as the column’s elements.

## See Also

### Modifying a Column Slice with a Collection of Values

- [+=(\_:\_:)](+=%28____%29-47cwm.md): Modifies a column slice by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](+=%28____%29-4bgdt.md): Modifies a column slice by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-3kauw.md): Modifies a column slice by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-1bqy4.md): Modifies a column slice by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](_=%28____%29-7lz8l.md): Modifies a column slice by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](_=%28____%29-3v2q0.md): Modifies a column slice by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](_=%28____%29-46jci.md): Modifies an integer column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](_=%28____%29-1fciw.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](_=%28____%29-6ujes.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding optional value in a collection.
