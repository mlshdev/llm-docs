> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/*(_:_:)-2toor](https://developer.apple.com/documentation/tabulardata/*(_:_:)-2toor)

# \*(\_:\_:)

**Framework:** TabularData  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by multiplying each element in an optional column type by the corresponding elements of a column type.

## Declaration

```swift
func * <L, R>(lhs: L, rhs: R) -> Column<R.Element> where L : OptionalColumnProtocol, R : ColumnProtocol, L.WrappedElement : Numeric, L.WrappedElement == R.Element
```

## Parameters

- `lhs`: An optional column type.
- `rhs`: A column type.

<a id="return-value"></a>

## Return Value

A new column with the same type as the right column.

## See Also

### Generating a Column by Multiplying Two Columns

- [\*(\_:\_:)](columnprotocol/_%28____%29-9db1q.md): Conforms when `Element` conforms to `Numeric`. Generates a column by multiplying each element in a column type by the corresponding elements of another.
- [\*(\_:\_:)](_%28____%29-l9r3.md): Generates a column by multiplying each element in a column type by the corresponding elements of an optional column type.
