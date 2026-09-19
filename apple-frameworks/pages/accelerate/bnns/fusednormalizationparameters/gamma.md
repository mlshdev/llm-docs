> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters/gamma

# gamma

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The descriptor of the gamma.

> Use the BNNSGraph API instead.

## Declaration

```swift
var gamma: BNNSNDArrayDescriptor?
```

## See Also

### Inspecting the Properties of a Fused Normalization Parameters Structure

- [type](type.md): Deprecated. An enumeration that specifies the normalization type.
- [beta](beta.md): Deprecated. The descriptor of the beta.
- [momentum](momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
