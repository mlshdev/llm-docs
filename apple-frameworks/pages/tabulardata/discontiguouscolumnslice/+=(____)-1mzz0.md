> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/+=(_:_:)-1mzz0](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/+=(_:_:)-1mzz0)

# +=(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies a column slice by adding a value to each element.

## Declaration

```swift
static func += (lhs: inout DiscontiguousColumnSlice<WrappedElement>, rhs: WrappedElement) where WrappedElement : AdditiveArithmetic
```

## Parameters

- `lhs`: A column slice.
- `rhs`: A value of the same type as the column’s elements.

## See Also

### Modifying a Column Slice with a Value

- [-=(\_:\_:)](-=%28____%29-2yrui.md): Modifies a column slice by subtracting a value from each element.
- [\*=(\_:\_:)](_=%28____%29-7gcqc.md): Modifies a column slice by multiplying each element by a value.
- [/=(\_:\_:)](_=%28____%29-1g0yb.md): Modifies an integer column slice by dividing each element by a value.
- [/=(\_:\_:)](_=%28____%29-6i7hx.md): Modifies a floating-point column slice by dividing each element by a value.
