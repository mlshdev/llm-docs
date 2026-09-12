> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedestimator/encodewithoptimizer(_:to:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedestimator/encodewithoptimizer(_:to:))

# encodeWithOptimizer(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes the transformer and optimizer to an encoder.

## Declaration

```swift
func encodeWithOptimizer(_ transformer: PreprocessingUpdatableSupervisedEstimator<Preprocessor, Estimator>.Transformer, to encoder: inout any EstimatorEncoder) throws
```

## Parameters

- `transformer`: A transformer this estimator creates.
- `encoder`: An encoder.

## See Also

### Encoding and decoding

- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.
