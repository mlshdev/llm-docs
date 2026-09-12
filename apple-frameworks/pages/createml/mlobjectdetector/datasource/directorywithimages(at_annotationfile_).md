> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource/directorywithimages(at:annotationfile:)](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/directorywithimages(at:annotationfile:))

# MLObjectDetector.DataSource.directoryWithImages(at:annotationFile:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

An object-detector data source you create by selecting the location of a directory of image files, and the location of a JSON annotation file.

## Declaration

```swift
case directoryWithImages(at: URL, annotationFile: URL)
```

## Parameters

- `directoryWithImages`: The location of a directory that contains image files.
- `annotationFile`: The location of a JSON file with object annotations for the images.

## See Also

### Creating a data source

- [MLObjectDetector.DataSource.directoryWithImagesAndJsonAnnotation(at:)](directorywithimagesandjsonannotation%28at_%29.md): An object-detector data source you create by selecting a directory that contains image files and exactly one JSON annotation file.
- [MLObjectDetector.DataSource.table(\_:imageColumn:annotationColumn:)](table%28__imagecolumn_annotationcolumn_%29.md): Deprecated. An object-detector data source you create with a data table.
