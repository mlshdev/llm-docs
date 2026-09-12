> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedquantizationparameters/bias](https://developer.apple.com/documentation/accelerate/bnns/fusedquantizationparameters/bias)

# bias

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The descriptor of the bias.

> Use the BNNSGraph API instead.

## Declaration

```swift
var bias: BNNSNDArrayDescriptor?
```

## See Also

### Inspecting the Properties of a Fused Quantization Parameters Structure

- [scale](scale.md): Deprecated. The descriptor of the scale.
- [axis](axis.md): Deprecated. The index of the axis on which the function applies scale and bias.
