> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/keypointswithannotations(targetframerate:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/keypointswithannotations(targetframerate:))

# keypointsWithAnnotations(targetFrameRate:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · visionOS 1.0+

Generates a data table that contains a column for hand joint locations and a column of hand action annotations.

> Use extractKeypoints(targetFrameRate:)

## Declaration

```swift
func keypointsWithAnnotations(targetFrameRate: Double = MLHandActionClassifier.__Defaults.targetFrameRate) throws -> MLDataTable
```

## Parameters

- `targetFrameRate`: The number of frames per second the method uses to extract body landmarks from the data source.

  This parameter has no effect if the data source is either:

  - [MLHandActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md)
  - [MLHandActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md)

## See Also

### Exporting a data source

- [labeledMedia()](labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s video files.
- [videosWithAnnotations()](videoswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s video file URLs and a column of annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [gatherAnnotatedFileNames()](gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.
