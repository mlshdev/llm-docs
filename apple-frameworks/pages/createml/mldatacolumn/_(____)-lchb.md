> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/*(_:_:)-lchb](https://developer.apple.com/documentation/createml/mldatacolumn/*(_:_:)-lchb)

# \*(\_:\_:)

**Framework:** Create ML  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a column of doubles by multiplying each element in the first column by the corresponding element in the second column.

## Declaration

```swift
static func * (a: MLDataColumn<Double>, b: MLDataColumn<Double>) -> MLDataColumn<Double>
```

## Parameters

- `a`: A column of doubles.
- `b`: A column of doubles.

<a id="return-value"></a>

## Return Value

A new column of doubles if the columns are the same size; otherwise an invalid column.

## See Also

### Combining columns to generate a column

- [+(\_:\_:)](+%28____%29-24g38.md): Conforms when `Element` is `Int`. Creates a column of integers by adding each element in the first column to the corresponding element in the second column.
- [+(\_:\_:)](+%28____%29-q5bb.md): Conforms when `Element` is `Double`. Creates a column of doubles by adding each element in the first column to the corresponding element in the second column.
- [-(\_:\_:)](-%28____%29-11hbf.md): Conforms when `Element` is `Int`. Creates a column of integers by subtracting each element in the second column from the corresponding element in the first column.
- [-(\_:\_:)](-%28____%29-3mwsr.md): Conforms when `Element` is `Double`. Creates a column of doubles by subtracting each element in the second column from the corresponding element in the first column.
- [\*(\_:\_:)](_%28____%29-40smy.md): Conforms when `Element` is `Int`. Creates a column of integers by multiplying each element in the first column by the corresponding element in the second column.
- [/(\_:\_:)](_%28____%29-5uxby.md): Conforms when `Element` is `Int`. Creates a column of integers by dividing each element in the first column by the corresponding element in the second column.
- [/(\_:\_:)](_%28____%29-69vgc.md): Conforms when `Element` is `Double`. Creates a column of doubles by dividing each element in the first column by the corresponding element in the second column.
