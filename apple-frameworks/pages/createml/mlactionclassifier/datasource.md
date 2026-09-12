> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/datasource](https://developer.apple.com/documentation/createml/mlactionclassifier/datasource)

# MLActionClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

A data source for an action classifier.

## Declaration

```swift
enum DataSource
```

## Mentioned In

- [Building an Action Classifier Data Source](../building-an-action-classifier-data-source.md)

## Topics

### Creating a data source

- [MLActionClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): The location of a folder with subfolders each of which contain sample videos of an action.
- [MLActionClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md): The location of a folder that contains video files whose names you use to label corresponding actions.
- [MLActionClassifier.DataSource.directoryWithVideosAndAnnotation(at:annotationFile:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/directorywithvideosandannotation%28at_annotationfile_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): The location of a directory of video files, and the location of an action annotation file.
- [MLActionClassifier.DataSource.labeledVideoData(table:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/labeledvideodata%28table_videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): Deprecated. A data table that contains the locations of the video files and the action annotations.

### Extracting key points

- [extractKeypoints(targetFrameRate:)](datasource/extractkeypoints%28targetframerate_%29.md): Extracts key points from video files if necessary.
- [MLActionClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): A data source made up of keypoints in a data frame.
- [MLActionClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. A data table that contains the human body landmark movement data.
- [MLActionClassifier.DataSource.labeledVideoDataFrame(\_:videoColumn:labelColumn:startTimeColumn:endTimeColumn:)](datasource/labeledvideodataframe%28__videocolumn_labelcolumn_starttimecolumn_endtimecolumn_%29.md): A data source made up of video references in a data frame.

### Getting annotated file names

- [gatherAnnotatedFileNames()](datasource/gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.

### Generating data tables from a data source

- [videosWithAnnotations()](datasource/videoswithannotations%28%29.md): Deprecated. Generates a data table of the data source’s video URL locations and action annotations.
- [keypointsWithAnnotations(targetFrameRate:)](datasource/keypointswithannotations%28targetframerate_%29.md): Deprecated. Generates a data table with action annotations of the data source.
- [stratifiedSplit(proportions:seed:labelColumn:)](datasource/stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.

## See Also

### Supporting types

- [MLActionClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the training process of an action classifier.
- [MLActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): The video augmentations for an action classifier training session.
