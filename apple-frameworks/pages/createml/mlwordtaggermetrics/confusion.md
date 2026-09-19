> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtaggermetrics/confusion

# confusion

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 14.0)

A table comparing the actual and predicted labels for each tagging category.

## Declaration

```swift
var confusion: MLDataTable { get }
```

## See Also

### Analyzing the tagger’s performance

- [taggingError](taggingerror.md): The fraction of incorrectly tagged examples.
- [precisionRecall](precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each category.
