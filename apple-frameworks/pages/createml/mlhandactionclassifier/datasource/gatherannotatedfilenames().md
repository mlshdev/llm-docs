> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/gatherannotatedfilenames()](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/gatherannotatedfilenames())

# gatherAnnotatedFileNames()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Processes the data source and returns a data frame that contains file URLs and annotations.

## Declaration

```swift
func gatherAnnotatedFileNames() throws -> DataFrame?
```

<a id="discussion"></a>

## Discussion

This method collects file names from the filesystem if necessary. If the data source is already in table format it renames the columns to the default column names. This method returns nil if the data source contains key points.

## See Also

### Exporting a data source

- [labeledMedia()](labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s video files.
- [videosWithAnnotations()](videoswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s video file URLs and a column of annotations.
- [keypointsWithAnnotations(targetFrameRate:)](keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and a column of hand action annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
- [extractKeypoints(targetFrameRate:)](extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
