> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/videoswithannotations()](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/videoswithannotations())

# videosWithAnnotations()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · visionOS 1.0+

Generates a data table that contains a column for the data source’s video file URLs and a column of annotations.

> Use gatherAnnotatedFileNames()

## Declaration

```swift
func videosWithAnnotations() throws -> MLDataTable
```

## See Also

### Exporting a data source

- [labeledMedia()](labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s video files.
- [keypointsWithAnnotations(targetFrameRate:)](keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and a column of hand action annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [gatherAnnotatedFileNames()](gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.
