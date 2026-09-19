> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandactionclassifier/prediction/results

# results

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An array of prediction labels and their confidences for a hand action.

## Declaration

```swift
var results: [(label: String, confidence: Double)]
```

## See Also

### Inspecting a prediction

- [frameRange](framerange.md): The range of frame rates the hand action classifier used to make its prediction.
