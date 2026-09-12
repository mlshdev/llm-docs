> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/labeledfiles(at:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/labeledfiles(at:))

# MLHandActionClassifier.DataSource.labeledFiles(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a folder that contains videos, each named after the hand action they represent.

## Declaration

```swift
case labeledFiles(at: URL)
```

## Parameters

- `at`: The URL to a folder in the file system that contains folders of hand action videos. The data source uses each file’s name before the first period as its classification label.

<a id="discussion"></a>

## Discussion

Create a hand action data source from a directory of videos with the `labeledFiles` case. You must name each video file with a hand action label, followed by a period and an arbitrary string, ending with the video file’s extension. For example, you can name a hand action classifier’s training files `Wave.3.mov`, `MoveCloser.1.mov`, `MoveCloser.2.mov`, and so on.

In this example, a hand action classifier would have at least two class labels:

- `Wave`
- `MoveCloser`

## See Also

### Creating a data source

- [MLHandActionClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain videos of a hand action.
- [MLHandActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a folder that contains videos and an annotation file.
- [MLHandActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. Creates a data source from a data table that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand action observations that each contain the locations of each hand joint and an annotation.
- [MLHandActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand action observations that each contain the locations of each hand joint and an annotation.
