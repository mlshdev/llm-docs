> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource/keypointswithannotations(targetframerate:)](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource/keypointswithannotations(targetframerate:))

# keypointsWithAnnotations(targetFrameRate:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 14.0)

Generates a data table with action annotations of the data source.

> Use extractKeypoints(targetFrameRate:)

## Declaration

```swift
func keypointsWithAnnotations(targetFrameRate: Double = MLActionClassifier.__Defaults.targetFrameRate) throws -> MLDataTable
```

## Parameters

- `targetFrameRate`: The number of frames per second the method uses to extract body landmarks from the data source. This no effect if the data source is an [MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md) or an [MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md).

<a id="return-value"></a>

## Return Value

A data table.

## See Also

### Generating data tables from a data source

- [videosWithAnnotations()](videoswithannotations%28%29.md): Deprecated. Generates a data table of the data source’s video URL locations and action annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
