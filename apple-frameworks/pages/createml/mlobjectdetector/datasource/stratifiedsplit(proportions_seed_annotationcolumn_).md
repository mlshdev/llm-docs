> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource/stratifiedsplit(proportions:seed:annotationcolumn:)](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/stratifiedsplit(proportions:seed:annotationcolumn:))

# stratifiedSplit(proportions:seed:annotationColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a new data table by splitting the data source using the specified proportions.

> Use DataFrame.stratifiedSplit(on:by:)

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed(), annotationColumn: String) throws -> MLDataTable
```

## Parameters

- `proportions`: An array of doubles, each representing a portion of the data source. If these values don’t add up to `1.0`, the method normalizes the numbers so that they do.
- `seed`: The value the method uses to initialize the random-number generator, which affects how the method splits the data.
- `annotationColumn`: The name of the column the method uses to split the data.

<a id="return-value"></a>

## Return Value

An [MLDataTable](../../mldatatable.md) containing the data source’s split contents.
