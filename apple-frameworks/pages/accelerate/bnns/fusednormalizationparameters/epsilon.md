> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusednormalizationparameters/epsilon](https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters/epsilon)

# epsilon

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The epsilon in the computation of the standard deviation.

> Use the BNNSGraph API instead.

## Declaration

```swift
var epsilon: Float
```

## See Also

### Inspecting the Properties of a Fused Normalization Parameters Structure

- [type](type.md): Deprecated. An enumeration that specifies the normalization type.
- [beta](beta.md): Deprecated. The descriptor of the beta.
- [gamma](gamma.md): Deprecated. The descriptor of the gamma.
- [momentum](momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
