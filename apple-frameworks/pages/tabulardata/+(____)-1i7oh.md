> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/+(_:_:)-1i7oh](https://developer.apple.com/documentation/tabulardata/+(_:_:)-1i7oh)

# +(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by adding each element in a column type to the corresponding elements of an optional column type.

## Declaration

```swift
func + <L, R>(lhs: L, rhs: R) -> Column<L.Element> where L : ColumnProtocol, R : OptionalColumnProtocol, L.Element : AdditiveArithmetic, L.Element == R.WrappedElement
```

## Parameters

- `lhs`: A column type.
- `rhs`: An optional column type.

<a id="return-value"></a>

## Return Value

A new column with the same type as the left column.

## See Also

### Generating a Column by Adding Two Columns

- [+(\_:\_:)](columnprotocol/+%28____%29-yc11.md): Conforms when `Element` conforms to `AdditiveArithmetic`. Generates a column by adding each element in a column type to the corresponding elements of another.
- [+(\_:\_:)](+%28____%29-3exmp.md): Generates a column by adding each element in an optional column type to the corresponding elements of a column type.
