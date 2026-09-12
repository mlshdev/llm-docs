> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/_=(_:_:)-6lzj](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/_=(_:_:)-6lzj)

# /=(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies a floating-point column slice by dividing each element in the column by the corresponding optional value in a collection.

## Declaration

```swift
static func /= <C>(lhs: inout DiscontiguousColumnSlice<WrappedElement>, rhs: C) where WrappedElement : FloatingPoint, C : Collection, C.Element == WrappedElement?
```

## Parameters

- `lhs`: A column.
- `rhs`: A collection that contains elements of the same type as the column’s elements.

## See Also

### Modifying a Column Slice with a Collection of Values

- [+=(\_:\_:)](+=%28____%29-2jxz1.md): Modifies a column slice by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](+=%28____%29-lpai.md): Modifies a column slice by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-9nkq6.md): Modifies a column slice by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-8a20q.md): Modifies a column slice by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](_=%28____%29-9jg9h.md): Modifies a column slice by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](_=%28____%29-18nlr.md): Modifies a column slice by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](_=%28____%29-6xf9s.md): Modifies an integer column slice by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](_=%28____%29-1mzcg.md): Modifies an integer column slice by dividing each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](_=%28____%29-39wsi.md): Modifies a floating-point column slice by dividing each element in the column by the corresponding value in a collection.
