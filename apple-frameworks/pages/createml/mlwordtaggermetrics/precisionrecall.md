> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtaggermetrics/precisionrecall](https://developer.apple.com/documentation/createml/mlwordtaggermetrics/precisionrecall)

# precisionRecall

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 14.0)

A data table listing the precision and recall percentages for each category.

## Declaration

```swift
var precisionRecall: MLDataTable { get }
```

## See Also

### Analyzing the tagger’s performance

- [taggingError](taggingerror.md): The fraction of incorrectly tagged examples.
- [confusion](confusion.md): Deprecated. A table comparing the actual and predicted labels for each tagging category.
