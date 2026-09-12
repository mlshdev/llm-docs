> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/directorywithimagesandannotation(at:annotationfile:imagecolumn:labelcolumn:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/directorywithimagesandannotation(at:annotationfile:imagecolumn:labelcolumn:))

# MLHandPoseClassifier.DataSource.directoryWithImagesAndAnnotation(at:annotationFile:imageColumn:labelColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a data source from a folder that contains images and an annotation file.

## Declaration

```swift
case directoryWithImagesAndAnnotation(at: URL, annotationFile: URL, imageColumn: String, labelColumn: String)
```

## Parameters

- `at`: A URL to a folder in the file system that contains images.

<a id="discussion"></a>

## Discussion

- annotationFile: A URL to a JSON or CSV file that contains annotations for the hand pose images.
- imageColumn: The name of the column or key name in the annotation file that contains the image filenames.
- labelColumn: The name of the column or key name in the annotation file that contains the hand pose label names.

## See Also

### Creating a data source

- [MLHandPoseClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain images of a hand pose.
- [MLHandPoseClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains images, each named after the hand pose it represents.
- [MLHandPoseClassifier.DataSource.labeledImageDataFrame(\_:imageColumn:labelColumn:)](labeledimagedataframe%28__imagecolumn_labelcolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand pose observations that each contain the locations of each hand joint and an annotation.
- [MLHandPoseClassifier.DataSource.labeledImageData(table:imageColumn:labelColumn:)](labeledimagedata%28table_imagecolumn_labelcolumn_%29.md): Deprecated. Creates a data source from a data table that contains the hand joint locations and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdata%28table_sessionidcolumn_labelcolumn_featurecolumn_%29.md): Deprecated. Creates a data source from a data table of hand pose observations that each contain the locations of each hand joint and an annotation.
