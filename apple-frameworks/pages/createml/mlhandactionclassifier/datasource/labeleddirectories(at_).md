> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/labeleddirectories(at:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/labeleddirectories(at:))

# MLHandActionClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a folder with subfolders that each contain videos of a hand action.

## Declaration

```swift
case labeledDirectories(at: URL)
```

## Parameters

- `at`: The URL to a folder in the file system that contains folders of hand action videos. The data source uses the name of each folder as the classification label for the hand action videos it contains.

## See Also

### Creating a data source

- [MLHandActionClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains videos, each named after the hand action they represent.
- [MLHandActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a folder that contains videos and an annotation file.
- [MLHandActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. Creates a data source from a data table that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand action observations that each contain the locations of each hand joint and an annotation.
- [MLHandActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand action observations that each contain the locations of each hand joint and an annotation.
