> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/labeleddirectories(at:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/labeleddirectories(at:))

# MLHandPoseClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a folder with subfolders that each contain images of a hand pose.

## Declaration

```swift
case labeledDirectories(at: URL)
```

<a id="discussion"></a>

## Discussion

- at: The URL to a folder in the file system that contains folders of hand pose images. The data source uses the name of each folder as the classification label for the hand pose images it contains.

## See Also

### Creating a data source

- [MLHandPoseClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains images, each named after the hand pose it represents.
- [MLHandPoseClassifier.DataSource.directoryWithImagesAndAnnotation(at:annotationFile:imageColumn:labelColumn:)](directorywithimagesandannotation%28at_annotationfile_imagecolumn_labelcolumn_%29.md): Creates a data source from a folder that contains images and an annotation file.
- [MLHandPoseClassifier.DataSource.labeledImageDataFrame(\_:imageColumn:labelColumn:)](labeledimagedataframe%28__imagecolumn_labelcolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand pose observations that each contain the locations of each hand joint and an annotation.
- [MLHandPoseClassifier.DataSource.labeledImageData(table:imageColumn:labelColumn:)](labeledimagedata%28table_imagecolumn_labelcolumn_%29.md): Deprecated. Creates a data source from a data table that contains the hand joint locations and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand pose observations that each contain the locations of each hand joint and an annotation.
