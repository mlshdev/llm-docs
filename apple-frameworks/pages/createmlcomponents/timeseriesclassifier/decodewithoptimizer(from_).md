> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/decodewithoptimizer(from:)

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Reads the encoded model and optimizer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> TimeSeriesClassifier<Scalar, Label>.Transformer
```
