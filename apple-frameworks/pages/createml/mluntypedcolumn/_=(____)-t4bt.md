> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/_=(_:_:)-t4bt](https://developer.apple.com/documentation/createml/mluntypedcolumn/_=(_:_:)-t4bt)

# \<=(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column of Booleans by testing whether the given value is less than or equal to each element in the given column.

## Declaration

```swift
static func <= (a: any MLDataValueConvertible, b: MLUntypedColumn) -> MLUntypedColumn
```

## Parameters

- `a`: A value.
- `b`: A column.

<a id="return-value"></a>

## Return Value

A new column of Booleans if the column and value have the same underlying type; otherwise an invalid column.

## See Also

### Comparing a value with a column to generate an untyped column of booleans

- [==(\_:\_:)](==%28____%29-6z88q.md): Creates a column of Booleans by testing whether the given value is equal to each element in the given column.
- [!=(\_:\_:)](!=%28____%29-6k3p6.md): Creates a column of Booleans by testing whether the given value is not equal to each element in the given column.
- [\>(\_:\_:)](_%28____%29-52drj.md): Creates a column of Booleans by testing whether the given value is greater than each element in the given column.
- [\<(\_:\_:)](_%28____%29-6qou9.md): Creates a column of Booleans by testing whether the given value is less than each element in the given column.
- [\>=(\_:\_:)](_=%28____%29-6yycf.md): Creates a column of Booleans by testing whether the given value is greater than or equal to each element in the given column.
