> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/_(_:_:)-aw9o](https://developer.apple.com/documentation/createml/mluntypedcolumn/_(_:_:)-aw9o)

# /(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column by dividing the given value by each element of the given column.

## Declaration

```swift
static func / (a: any MLDataValueConvertible, b: MLUntypedColumn) -> MLUntypedColumn
```

## Parameters

- `a`: An value.
- `b`: A column.

<a id="return-value"></a>

## Return Value

A new column if the column and value have the same underlying type; otherwise an invalid column.

## See Also

### Combining a value with a column to generate an untyped column

- [+(\_:\_:)](+%28____%29-miqp.md): Creates a column by adding the given value to each element of the given column.
- [-(\_:\_:)](-%28____%29-9gm9i.md): Creates a column by subtracting each element of the given column from the given value.
- [\*(\_:\_:)](_%28____%29-7svdc.md): Creates a column by multiplying the given value by each element of the given column.
