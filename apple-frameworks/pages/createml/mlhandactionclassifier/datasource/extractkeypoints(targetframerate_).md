> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/extractkeypoints(targetframerate:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/extractkeypoints(targetframerate:))

# extractKeypoints(targetFrameRate:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Extracts key points from video files if necessary.

## Declaration

```swift
func extractKeypoints(targetFrameRate: Double = MLHandActionClassifier.__Defaults.targetFrameRate) throws -> DataFrame
```

## Parameters

- `targetFrameRate`: The number of frames per second the method uses to extract body landmarks from the data source.

<a id="return-value"></a>

## Return Value

A data frame that contains a column for hand joint locations and a column of hand action annotations.

<a id="discussion"></a>

## Discussion

If the data source already contains keypoints, this method just renames the data frame columns to the defaults.

## See Also

### Exporting a data source

- [labeledMedia()](labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s video files.
- [videosWithAnnotations()](videoswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s video file URLs and a column of annotations.
- [keypointsWithAnnotations(targetFrameRate:)](keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and a column of hand action annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
- [gatherAnnotatedFileNames()](gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.
