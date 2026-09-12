> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/datasource](https://developer.apple.com/documentation/createml/mlhandactionclassifier/datasource)

# MLHandActionClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A hand action classifier dataset that contains annotated videos or hand joint location data.

## Declaration

```swift
enum DataSource
```

## Topics

### Creating a data source

- [MLHandActionClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain videos of a hand action.
- [MLHandActionClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md): Creates a data source from a folder that contains videos, each named after the hand action they represent.
- [MLHandActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a folder that contains videos and an annotation file.
- [MLHandActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. Creates a data source from a data table that contains the location and annotation for a set of video files.
- [MLHandActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand action observations that each contain the locations of each hand joint and an annotation.
- [MLHandActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand action observations that each contain the locations of each hand joint and an annotation.

### Exporting a data source

- [labeledMedia()](datasource/labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s video files.
- [videosWithAnnotations()](datasource/videoswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s video file URLs and a column of annotations.
- [keypointsWithAnnotations(targetFrameRate:)](datasource/keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and a column of hand action annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](datasource/stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
- [extractKeypoints(targetFrameRate:)](datasource/extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [gatherAnnotatedFileNames()](datasource/gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.

## See Also

### Supporting types

- [MLHandActionClassifier.ModelParameters](modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand action classifier task.
- [MLHandActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.
