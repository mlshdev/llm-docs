> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/labeledfiles(at:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/labeledfiles(at:))

# MLHandPoseClassifier.DataSource.labeledFiles(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a folder that contains images, each named after the hand pose it represents.

## Declaration

```swift
case labeledFiles(at: URL)
```

<a id="discussion"></a>

## Discussion

Create a hand-pose data source from a directory of images with the `labeledFiles` case. You must name each image file with a hand-pose label, followed by a period and an arbitrary string, ending with the image file’s extension. For example, you can name a hand-pose classifier’s training files as `Peace.3.png`, `ThumbsUp.1.jpg`, `ThumbsUp.2.jpg`, and so on.

In this example, these image names give a hand-pose classifier at least two class labels:

- `Peace` \- `ThumbsUp`
- at: The URL to a folder in the file system that contains folders of hand pose images. The data source uses each file’s name before the first period as its classification label.

## See Also

### Creating a data source

- [MLHandPoseClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain images of a hand pose.
- [MLHandPoseClassifier.DataSource.directoryWithImagesAndAnnotation(at:annotationFile:imageColumn:labelColumn:)](directorywithimagesandannotation%28at_annotationfile_imagecolumn_labelcolumn_%29.md): Creates a data source from a folder that contains images and an annotation file.
- [MLHandPoseClassifier.DataSource.labeledImageDataFrame(\_:imageColumn:labelColumn:)](labeledimagedataframe%28__imagecolumn_labelcolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand pose observations that each contain the locations of each hand joint and an annotation.
- [MLHandPoseClassifier.DataSource.labeledImageData(table:imageColumn:labelColumn:)](labeledimagedata%28table_imagecolumn_labelcolumn_%29.md): Deprecated. Creates a data source from a data table that contains the hand joint locations and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand pose observations that each contain the locations of each hand joint and an annotation.
