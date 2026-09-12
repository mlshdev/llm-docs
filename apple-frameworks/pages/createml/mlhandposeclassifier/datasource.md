> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource)

# MLHandPoseClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A hand pose classifier dataset that contains annotated images or hand joint location data.

## Declaration

```swift
enum DataSource
```

## Topics

### Creating a data source

- [MLHandPoseClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain images of a hand pose.
- [MLHandPoseClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md): Creates a data source from a folder that contains images, each named after the hand pose it represents.
- [MLHandPoseClassifier.DataSource.directoryWithImagesAndAnnotation(at:annotationFile:imageColumn:labelColumn:)](datasource/directorywithimagesandannotation%28at_annotationfile_imagecolumn_labelcolumn_%29.md): Creates a data source from a folder that contains images and an annotation file.
- [MLHandPoseClassifier.DataSource.labeledImageDataFrame(\_:imageColumn:labelColumn:)](datasource/labeledimagedataframe%28__imagecolumn_labelcolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand pose observations that each contain the locations of each hand joint and an annotation.
- [MLHandPoseClassifier.DataSource.labeledImageData(table:imageColumn:labelColumn:)](datasource/labeledimagedata%28table_imagecolumn_labelcolumn_%29.md): Deprecated. Creates a data source from a data table that contains the hand joint locations and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](datasource/labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand pose observations that each contain the locations of each hand joint and an annotation.

### Extracting keypoints

- [extractKeypoints()](datasource/extractkeypoints%28%29.md): Extracts key points from video files if necessary.

### Getting annotated file names

- [gatherAnnotatedFileNames()](datasource/gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.

### Exporting a data source

- [labeledMedia()](datasource/labeledmedia%28%29.md): Generates a dictionary that contains the data source’s classification labels paired with an array of URLs to the label’s image files.
- [imagesWithAnnotations()](datasource/imageswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for the data source’s image file URLs and a column of annotations.
- [keypointsWithAnnotations()](datasource/keypointswithannotations%28%29.md): Deprecated. Generates a data table that contains a column for hand joint locations and hand pose annotations.
- [stratifiedSplit(proportions:seed:labelColumn:)](datasource/stratifiedsplit%28proportions_seed_labelcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.

## See Also

### Supporting types

- [MLHandPoseClassifier.ModelParameters](modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand pose classifier task.
- [MLHandPoseClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): Options a hand pose classification training session can use to generate additional training data from the images you provide.
