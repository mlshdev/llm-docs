> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/objectdetectionmetrics/defaultconfidencethreshold

# defaultConfidenceThreshold

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The default confidence threshold. It is used as the confidence threshold for any label which does not have an explicit confidence threshold, while calculating averagePrecision and meanAveragePrecision.

## Declaration

```swift
var defaultConfidenceThreshold: Float
```

## See Also

### Getting the properties Properties

- [labels](labels.md): A set of labels present in the dataset.
