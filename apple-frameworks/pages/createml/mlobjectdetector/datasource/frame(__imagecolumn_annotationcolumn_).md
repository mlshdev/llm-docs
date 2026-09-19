> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/datasource/frame(_:imagecolumn:annotationcolumn:)

# MLObjectDetector.DataSource.frame(\_:imageColumn:annotationColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 12.0+

Data specified by a `DataFrame` containing a column for image file paths and a column with annotations.

## Declaration

```swift
case frame(DataFrame, imageColumn: String, annotationColumn: String)
```
