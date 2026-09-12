> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource/labeledkeypointsdataframe(_:sessionidcolumn:labelcolumn:featurecolumn:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource/labeledkeypointsdataframe(_:sessionidcolumn:labelcolumn:featurecolumn:))

# MLHandActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a data frame of hand action observations that each contain the locations of each hand joint and an annotation.

## Declaration

```swift
case labeledKeypointsDataFrame(DataFrame, sessionIdColumn: String = __Defaults.sessionIdColumnName, labelColumn: String = __Defaults.labelColumnName, featureColumn: String = __Defaults.featureColumnName)
```

## Parameters

- `dataFrame `: A data frame that contains the hand-joint locations and annotations for a set of hand actions.
- `sessionIdColumn`: The name of the column in the data frame that contains the session identifiers.
- `labelColumn`: The name of the column in the data frame that contains the hand action label names.
- `featureColumn`: The name of the column in the data frame that contains the hand-joint location data. Each entry in the column must be a [ShapedData](../../../tabulardata/shapeddata.md) instance that contains three dimensions:

  - The first dimension has a size of one.
  - The second dimension has three channels: the x-coordinate, the y-coordinate, and the confidence value, respectively.
  - The third dimension has 21 channels, one for each hand joint.

## See Also

### Creating a data source

- [MLHandActionClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain videos of a hand action.
- [MLHandActionClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains videos, each named after the hand action they represent.
- [MLHandActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a folder that contains videos and an annotation file.
- [MLHandActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. Creates a data source from a data table that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand action observations that each contain the locations of each hand joint and an annotation.
