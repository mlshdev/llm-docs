> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource/table(_:imagecolumn:annotationcolumn:)](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/table(_:imagecolumn:annotationcolumn:))

# MLObjectDetector.DataSource.table(\_:imageColumn:annotationColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+ (deprecated in 14.0)

An object-detector data source you create with a data table.

## Declaration

```swift
case table(MLDataTable, imageColumn: String, annotationColumn: String)
```

## Parameters

- `table`: An [MLDataTable](../../mldatatable.md) instance that contains a column of image file locations and a column of object annotations.
- `imageColumn`: The name of the column in the data table that contains the URL for an image.
- `annotationColumn`: The name of the column in the data table that contains the object annotations for an image.

## See Also

### Creating a data source

- [MLObjectDetector.DataSource.directoryWithImagesAndJsonAnnotation(at:)](directorywithimagesandjsonannotation%28at_%29.md): An object-detector data source you create by selecting a directory that contains image files and exactly one JSON annotation file.
- [MLObjectDetector.DataSource.directoryWithImages(at:annotationFile:)](directorywithimages%28at_annotationfile_%29.md): An object-detector data source you create by selecting the location of a directory of image files, and the location of a JSON annotation file.
