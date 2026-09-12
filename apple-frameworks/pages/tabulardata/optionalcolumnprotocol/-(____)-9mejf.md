> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/optionalcolumnprotocol/-(_:_:)-9mejf](https://developer.apple.com/documentation/tabulardata/optionalcolumnprotocol/-(_:_:)-9mejf)

# -(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by subtracting a value from each element in an optional column type.

## Declaration

```swift
static func - (lhs: Self, rhs: Self.WrappedElement) -> Column<Self.WrappedElement> where Self.WrappedElement : AdditiveArithmetic
```

## Parameters

- `lhs`: An optional column type.
- `rhs`: A value of the same type as the optional column’s type.

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Generating an Optional Column by Combining a Value

- [+(\_:\_:)](+%28____%29-501gg.md): Generates a column by adding a value to each element in an optional column.
- [+(\_:\_:)](+%28____%29-6ko8x.md): Generates a column by adding each element in an optional column to a value.
- [-(\_:\_:)](-%28____%29-5vffa.md): Generates a column by subtracting each element in an optional column from a value.
- [\*(\_:\_:)](_%28____%29-orkq.md): Conforms when `WrappedElement` conforms to `Numeric`. Generates a column by multiplying each element in an optional column by a value.
- [\*(\_:\_:)](_%28____%29-5vorv.md): Conforms when `WrappedElement` conforms to `Numeric`. Generates a column by multiplying a value by each element in an optional column type.
- [/(\_:\_:)](_%28____%29-7tbmq.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing each element in an optional column by a value.
- [/(\_:\_:)](_%28____%29-56h1d.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates an integer column by dividing a value by each element in an optional column type.
- [/(\_:\_:)](_%28____%29-5qhxr.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in an optional column by a value.
- [/(\_:\_:)](_%28____%29-2xfqa.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Generates a floating-point column by dividing a value by each element in an optional column type.
