> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/-(_:_:)-95yoe](https://developer.apple.com/documentation/tabulardata/-(_:_:)-95yoe)

# -(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by subtracting each element in a column type from the corresponding elements of an optional column.

## Declaration

```swift
func - <L, R>(lhs: L, rhs: R) -> Column<R.Element> where L : OptionalColumnProtocol, R : ColumnProtocol, L.WrappedElement : AdditiveArithmetic, L.WrappedElement == R.Element
```

## Parameters

- `lhs`: An optional column type.
- `rhs`: A column type.

<a id="return-value"></a>

## Return Value

A new column with the same type as the right column.

## See Also

### Generating a Column by Subtracting Two Columns

- [-(\_:\_:)](columnprotocol/-%28____%29-36zol.md): Conforms when `Element` conforms to `AdditiveArithmetic`. Generates a column by subtracting each element in a column type from the corresponding elements of another.
- [-(\_:\_:)](-%28____%29-25cs6.md): Generates a column by subtracting each element in an optional column type from the corresponding elements of a column type.
