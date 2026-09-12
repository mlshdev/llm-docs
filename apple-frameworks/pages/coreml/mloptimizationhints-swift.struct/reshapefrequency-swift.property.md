> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-swift.struct/reshapefrequency-swift.property](https://developer.apple.com/documentation/coreml/mloptimizationhints-swift.struct/reshapefrequency-swift.property)

# reshapeFrequency

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

The anticipated reshape frequency

## Declaration

```swift
var reshapeFrequency: MLOptimizationHints.ReshapeFrequency
```

<a id="discussion"></a>

## Discussion

CoreML framework needs to reshape the model with new shapes for models with flexible input. Specify the anticipated reshape frequency (frequent or infrequent), so that the framework can optimize for fast shape switching or fast prediction on seen shapes.

The default value is frequent, which means CoreML tries to switch to new shapes as fast as possible

## See Also

### Getting the reshape frequency

- [MLOptimizationHints.ReshapeFrequency](reshapefrequency-swift.enum.md): The anticipated frequency of changing input shapes.
