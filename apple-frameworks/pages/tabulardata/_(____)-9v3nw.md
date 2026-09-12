> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/_(_:_:)-9v3nw](https://developer.apple.com/documentation/tabulardata/_(_:_:)-9v3nw)

# /(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates an integer column by dividing each element in a column type by the corresponding elements of an optional column type.

## Declaration

```swift
func / <L, R>(lhs: L, rhs: R) -> Column<L.Element> where L : ColumnProtocol, R : OptionalColumnProtocol, L.Element : BinaryInteger, L.Element == R.WrappedElement
```

## Parameters

- `lhs`: A column type.
- `rhs`: An optional column type.

<a id="return-value"></a>

## Return Value

A new column with the same type as the left column.

## See Also

### Generating a Column by Dividing Two Columns

- [/(\_:\_:)](columnprotocol/_%28____%29-922ku.md): Conforms when `Element` conforms to `BinaryInteger`. Generates an integer column by dividing each element in a column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-4igyw.md): Generates an integer column by dividing each element in an optional column type by the corresponding elements of a column type.
- [/(\_:\_:)](columnprotocol/_%28____%29-2urf0.md): Conforms when `Element` conforms to `FloatingPoint`. Generates a floating-point column by dividing each element in a column type by the corresponding elements of another.
- [/(\_:\_:)](_%28____%29-4pr65.md): Generates a floating-point column by dividing each element in a column type by the corresponding elements of an optional column type.
- [/(\_:\_:)](_%28____%29-58kg6.md): Generates a floating-point column by dividing each element in an optional column type by the corresponding elements of a column type.
