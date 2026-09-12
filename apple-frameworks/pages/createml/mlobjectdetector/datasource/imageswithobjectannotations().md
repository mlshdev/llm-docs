> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource/imageswithobjectannotations()](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/imageswithobjectannotations())

# imagesWithObjectAnnotations()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a data table where each row represents an image, and its columns are the image file URLs and its annotations.

> Use gatherAnnotatedFileNames()

## Declaration

```swift
func imagesWithObjectAnnotations() throws -> MLDataTable
```

<a id="return-value"></a>

## Return Value

An [MLDataTable](../../mldatatable.md) containing the contents of the data source.
