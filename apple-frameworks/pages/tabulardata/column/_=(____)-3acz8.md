> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/_=(_:_:)-3acz8](https://developer.apple.com/documentation/tabulardata/column/_=(_:_:)-3acz8)

# /=(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies a floating-point column by dividing each element in the column by the corresponding optional value in a collection.

## Declaration

```swift
static func /= <C>(lhs: inout Column<WrappedElement>, rhs: C) where WrappedElement : FloatingPoint, C : Collection, C.Element == WrappedElement?
```

## Parameters

- `lhs`: A column.
- `rhs`: A collection that contains elements of the same type as the column’s elements.

## See Also

### Modifying a Column with a Collection of Values

- [+=(\_:\_:)](+=%28____%29-2w5o4.md): Modifies a column by adding each value in a collection to the corresponding element in the column.
- [+=(\_:\_:)](+=%28____%29-2scuy.md): Modifies a column by adding each optional value in a collection to the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-8rgjq.md): Modifies a column by subtracting each value in a collection from the corresponding element in the column.
- [-=(\_:\_:)](-=%28____%29-3v0hh.md): Modifies a column by subtracting each optional value in a collection from the corresponding element in the column.
- [\*=(\_:\_:)](_=%28____%29-8mmnn.md): Modifies a column by multiplying each element in the column by the corresponding value in a collection.
- [\*=(\_:\_:)](_=%28____%29-6kp11.md): Modifies a column by multiplying each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](_=%28____%29-dnma.md): Modifies an integer column by dividing each element in the column by the corresponding value in a collection.
- [/=(\_:\_:)](_=%28____%29-8xhzg.md): Modifies an integer column by dividing each element in the column by the corresponding optional value in a collection.
- [/=(\_:\_:)](_=%28____%29-86t1j.md): Modifies a floating-point column by dividing each element in the column by the corresponding value in a collection.
