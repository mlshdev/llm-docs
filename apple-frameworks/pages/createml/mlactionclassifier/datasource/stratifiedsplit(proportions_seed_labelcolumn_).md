> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/stratifiedsplit(proportions:seed:labelcolumn:))

# stratifiedSplit(proportions:seed:labelColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 14.0)

Generates a data table by splitting the data source into strata.

> Use DataFrame.stratifiedSplit(on:by:)

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed(), labelColumn: String) throws -> MLDataTable
```

## Parameters

- `proportions`: An array of proportions, each in the range `[0.0, 1.0]`.
- `seed`: A seed number for the random-number generator.
- `labelColumn`: The name of the column that you want to stratify.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Generating data tables from a data source

- [videosWithAnnotations()](videoswithannotations%28%29.md): Deprecated. Generates a data table of the data source’s video URL locations and action annotations.
- [keypointsWithAnnotations(targetFrameRate:)](keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table with action annotations of the data source.
