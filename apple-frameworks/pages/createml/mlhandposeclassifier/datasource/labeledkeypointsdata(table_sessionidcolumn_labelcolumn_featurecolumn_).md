> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/datasource/labeledkeypointsdata(table:sessionidcolumn:labelcolumn:featurecolumn:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/datasource/labeledkeypointsdata(table:sessionidcolumn:labelcolumn:featurecolumn:))

# MLHandPoseClassifier.DataSource.labeledKeypointsData(table:sessionIdColumn:labelColumn:featureColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · visionOS 1.0+

Creates a data source from a data table of hand pose observations that each contain the locations of each hand joint and an annotation.

## Declaration

```swift
case labeledKeypointsData(table: MLDataTable, sessionIdColumn: String = __Defaults.sessionIdColumnName, labelColumn: String = __Defaults.labelColumnName, featureColumn: String = __Defaults.featureColumnName)
```

<a id="discussion"></a>

## Discussion

- table : A data table that contains the hand-joint locations and annotations for a set of hand poses.
- sessionIdColumn: The name of the column in the data table that contains the session identifiers.
- labelColumn: The name of the column in the data table that contains the hand pose label names.
- featureColumn: The name of the column in the data table that contains the hand-joint location data. Each entry in the column must be an [MLMultiArray](../../../coreml/mlmultiarray.md) instance — which you must wrap in an [MLDataValue.MultiArrayType](../../mldatavalue/multiarraytype.md) — that contains three dimensions:

  - The first dimension has a size of one.
- The second dimension has three channels: the x-coordinate, the y-coordinate, and the confidence value, respectively. - The third dimension has 21 channels, one for each hand joint.

## See Also

### Creating a data source

- [MLHandPoseClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md): Creates a data source from a folder with subfolders that each contain images of a hand pose.
- [MLHandPoseClassifier.DataSource.labeledFiles(at:)](labeledfiles%28at_%29.md): Creates a data source from a folder that contains images, each named after the hand pose it represents.
- [MLHandPoseClassifier.DataSource.directoryWithImagesAndAnnotation(at:annotationFile:imageColumn:labelColumn:)](directorywithimagesandannotation%28at_annotationfile_imagecolumn_labelcolumn_%29.md): Creates a data source from a folder that contains images and an annotation file.
- [MLHandPoseClassifier.DataSource.labeledImageDataFrame(\_:imageColumn:labelColumn:)](labeledimagedataframe%28__imagecolumn_labelcolumn_%29.md): Creates a data source from a data frame that contains the location and annotation for a set of image files.
- [MLHandPoseClassifier.DataSource.labeledKeypointsDataFrame(\_:sessionIdColumn:labelColumn:featureColumn:)](labeledkeypointsdataframe%28__sessionidcolumn_labelcolumn_featurecolumn_%29.md): Creates a data source from a data frame of hand pose observations that each contain the locations of each hand joint and an annotation.
- [MLHandPoseClassifier.DataSource.labeledImageData(table:imageColumn:labelColumn:)](labeledimagedata%28table_imagecolumn_labelcolumn_%29.md): Deprecated. Creates a data source from a data table that contains the hand joint locations and annotation for a set of image files.
