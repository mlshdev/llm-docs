> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/fusedquantizationparameters/init(scale:bias:)

# init(scale:bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused quantization parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(scale: BNNSNDArrayDescriptor?, bias: BNNSNDArrayDescriptor?)
```

## Parameters

- `scale`: The descriptor of the scale.
- `bias`: The descriptor of the bias.
