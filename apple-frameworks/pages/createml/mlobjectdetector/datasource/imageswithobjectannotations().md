> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/imageswithobjectannotations()

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
