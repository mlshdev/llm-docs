> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslstmgatedescriptor/iw_desc](https://developer.apple.com/documentation/accelerate/bnnslstmgatedescriptor/iw_desc)

# iw_desc (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The descriptor of the input weights.

> Use BNNSGraph\* APIs

## Declaration

```swift
var iw_desc: (BNNSNDArrayDescriptor, BNNSNDArrayDescriptor)
```

<a id="Discussion"></a>

## Discussion

Weights are ordered as `[num_layers][num_directions][hidden_size][input_size]` (C style multi array notation).

`iw_desc` is duplicated for the case where `num_layers > 1 && input_size != hidden_size`.

## See Also

### Instance Properties

- [hw_desc](hw_desc.md): Deprecated. The descriptor of the hidden weights.
- [cw_desc](cw_desc.md): Deprecated. The descriptor of the cell weights.
- [b_desc](b_desc.md): Deprecated. The descriptor of the bias.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.

# iw_desc (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The descriptor of the input weights.

## Declaration

```objectivec
BNNSNDArrayDescriptor iw_desc[2];
```

<a id="Discussion"></a>

## Discussion

Weights are ordered as `[num_layers][num_directions][hidden_size][input_size]` (C style multi array notation).

`iw_desc` is duplicated for the case where `num_layers > 1 && input_size != hidden_size`.

## See Also

### Instance Properties

- [hw_desc](hw_desc.md): Deprecated. The descriptor of the hidden weights.
- [cw_desc](cw_desc.md): Deprecated. The descriptor of the cell weights.
- [b_desc](b_desc.md): Deprecated. The descriptor of the bias.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
