> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource/directorywithimagesandjsonannotation(at:)](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/directorywithimagesandjsonannotation(at:))

# MLObjectDetector.DataSource.directoryWithImagesAndJsonAnnotation(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

An object-detector data source you create by selecting a directory that contains image files and exactly one JSON annotation file.

## Declaration

```swift
case directoryWithImagesAndJsonAnnotation(at: URL)
```

## Parameters

- `directoryWithImagesAndJsonAnnotation`: The location of a directory that contains exactly one JSON annotation file and all the image files the JSON file’s annotations refer to.

## See Also

### Creating a data source

- [MLObjectDetector.DataSource.directoryWithImages(at:annotationFile:)](directorywithimages%28at_annotationfile_%29.md): An object-detector data source you create by selecting the location of a directory of image files, and the location of a JSON annotation file.
- [MLObjectDetector.DataSource.table(\_:imageColumn:annotationColumn:)](table%28__imagecolumn_annotationcolumn_%29.md): Deprecated. An object-detector data source you create with a data table.
