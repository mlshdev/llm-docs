> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/fusedfullyconnectedparameters/init(weights:bias:)

# init(weights:bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused dequantization parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(weights: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor?)
```

## Parameters

- `weights`: The descriptor of the weights.
- `bias`: The descriptor of the bias.
