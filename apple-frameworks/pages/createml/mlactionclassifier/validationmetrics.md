> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/validationmetrics

# validationMetrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

Measurements of the action classifier’s performance on the validation dataset.

## Declaration

```swift
var validationMetrics: MLClassifierMetrics { get }
```

## See Also

### Evaluating an action classifier

- [evaluation(on:)](evaluation%28on_%29.md): Generates metrics describing the action classifier’s performance on labeled videos represented by a data source.
- [trainingMetrics](trainingmetrics.md): Measurements of the action classifier’s performance on the training dataset.
