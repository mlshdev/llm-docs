> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/+(_:_:)-4se2l](https://developer.apple.com/documentation/createml/mldatacolumn/+(_:_:)-4se2l)

# +(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column of doubles by adding each element of the given column to the given double.

## Declaration

```swift
static func + (a: MLDataColumn<Double>, b: Double) -> MLDataColumn<Double>
```

## Parameters

- `a`: A column of doubles.
- `b`: A double.

<a id="return-value"></a>

## Return Value

A new column of doubles.

## See Also

### Combining a column with a value to generate a column

- [+(\_:\_:)](+%28____%29-7tghu.md): Conforms when `Element` is `Int`. Creates a column of integers by adding each element of the given column to the given integer.
- [-(\_:\_:)](-%28____%29-2sddu.md): Conforms when `Element` is `Int`. Creates a column of integers by subtracting the given integer from each element of the given column.
- [-(\_:\_:)](-%28____%29-9smok.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting the given double from each element of the given column.
- [\*(\_:\_:)](_%28____%29-2zih0.md): Conforms when `Element` is `Int`. Creates a column of integers by multiplying each element of the given column by the given integer.
- [\*(\_:\_:)](_%28____%29-4ilhj.md): Conforms when `Element` is `Double`. Creates a column of doubles by multiplying each element of the given column by the given double.
- [/(\_:\_:)](_%28____%29-3ea6t.md): Conforms when `Element` is `Int`. Creates a column of integers by dividing each element of the given column by the given integer.
- [/(\_:\_:)](_%28____%29-8k8ao.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing each element of the given column by the given double.
