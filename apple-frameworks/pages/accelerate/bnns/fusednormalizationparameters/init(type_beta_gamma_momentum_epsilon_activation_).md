> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusednormalizationparameters/init(type:beta:gamma:momentum:epsilon:activation:)](https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters/init(type:beta:gamma:momentum:epsilon:activation:))

# init(type:beta:gamma:momentum:epsilon:activation:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused normalization parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(type: BNNS.NormalizationType, beta: BNNSNDArrayDescriptor? = nil, gamma: BNNSNDArrayDescriptor? = nil, momentum: Float = 0, epsilon: Float, activation: BNNS.ActivationFunction)
```

## Parameters

- `type`: An enumeration that specifies the normalization type.
- `beta`: The descriptor of the beta.
- `gamma`: The descriptor of the gamma.
- `momentum`: A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- `epsilon`: The epsilon in the computation of the standard deviation.
- `activation`: The activation function that the layer applies to the output.
