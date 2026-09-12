> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.property](https://developer.apple.com/documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.property)

# specializationStrategy

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Optimization strategy for the model specialization.

## Declaration

```swift
var specializationStrategy: MLOptimizationHints.SpecializationStrategy
```

<a id="discussion"></a>

## Discussion

Core ML segments the model’s compute graph and specializes each segment for the target compute device. This process can affect the model loading time and the prediction latency.

Use this option to tailor the specialization strategy for your model.

## See Also

### Getting the specialization strategy

- [MLOptimizationHints.SpecializationStrategy](specializationstrategy-swift.enum.md): The optimization strategy for the model specialization.
