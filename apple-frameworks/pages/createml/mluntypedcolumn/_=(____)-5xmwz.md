> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/_=(_:_:)-5xmwz](https://developer.apple.com/documentation/createml/mluntypedcolumn/_=(_:_:)-5xmwz)

# \<=(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column of Booleans by testing whether each element in the first column is less than or equal to the corresponding element in the second column.

## Declaration

```swift
static func <= (a: MLUntypedColumn, b: MLUntypedColumn) -> MLUntypedColumn
```

## Parameters

- `a`: A column.\]
- `b`: A column.

<a id="return-value"></a>

## Return Value

A new column of Booleans if the columns have the same size and underlying type; otherwise an invalid column.

## See Also

### Comparing columns to generate an untyped column of booleans

- [==(\_:\_:)](==%28____%29-3o7mo.md): Creates a column of Booleans by testing whether each element in the first column is equal to the corresponding element in the second column.
- [!=(\_:\_:)](!=%28____%29-86hu4.md): Creates a column of Booleans by testing whether each element in the first column is not equal to the corresponding element in the second column.
- [\>(\_:\_:)](_%28____%29-9r2zq.md): Creates a column of Booleans by testing whether each element in the first column is greater than the corresponding element in the second column.
- [\<(\_:\_:)](_%28____%29-7zms0.md): Creates a column of Booleans by testing whether each element in the first column is less than the corresponding element in the second column.
- [\>=(\_:\_:)](_=%28____%29-4u3ir.md): Creates a column of Booleans by testing whether each element in the first column is greater than or equal to the corresponding element in the second column.
