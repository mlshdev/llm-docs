> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersactivation/init(i_desc:o_desc:activation:axis_flags:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersactivation/init(i_desc:o_desc:activation:axis_flags:))

# init(i_desc:o_desc:activation:axis_flags:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new activation layer parameters structure from the supplied descriptors, activation function, and axis flags.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, activation: BNNSActivation, axis_flags: UInt32)
```

## Parameters

- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `activation`: The activation function that the layer applies to the output.
- `axis_flags`: Flags that indicate axes on which the layer applies certain activation functions.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input dimensions must be equal to the output dimensions. For activation types other than identity, the input and output must be `float`.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new activation layer parameters structure.
