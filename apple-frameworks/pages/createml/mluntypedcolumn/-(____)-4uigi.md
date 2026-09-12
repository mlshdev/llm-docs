> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/-(_:_:)-4uigi](https://developer.apple.com/documentation/createml/mluntypedcolumn/-(_:_:)-4uigi)

# -(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column by subtracting the given value from each element of the given column.

## Declaration

```swift
static func - (a: MLUntypedColumn, b: any MLDataValueConvertible) -> MLUntypedColumn
```

## Parameters

- `a`: An column.
- `b`: A value.

<a id="return-value"></a>

## Return Value

A new column if the column and value have the same underlying type; otherwise an invalid column.

## See Also

### Combining a column with a value to generate an untyped column

- [+(\_:\_:)](+%28____%29-4vnbk.md): Creates a column by adding each element of the given column to the given value.
- [\*(\_:\_:)](_%28____%29-6gnlx.md): Creates a column by multiplying each element of the given column by the given value.
- [/(\_:\_:)](_%28____%29-18srk.md): Creates a column by dividing each element of the given column by the given value.
