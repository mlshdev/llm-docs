> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersquantization/o_desc](https://developer.apple.com/documentation/accelerate/bnnslayerparametersquantization/o_desc)

# o_desc (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

The descriptor of the output.

> Use BNNSGraph\* APIs

## Declaration

```swift
var o_desc: BNNSNDArrayDescriptor
```

## See Also

### Instance Properties

- [axis_mask](axis_mask.md): Deprecated. A bitmask that defines the axis to which the function applies scale and bias.
- [function](function.md): Deprecated. The quantize function.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [scale](scale.md): Deprecated. The descriptor of the scale.
- [bias](bias.md): Deprecated. The descriptor of the bias.

# o_desc (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The descriptor of the output.

## Declaration

```objectivec
BNNSNDArrayDescriptor o_desc;
```

## See Also

### Instance Properties

- [axis_mask](axis_mask.md): Deprecated. A bitmask that defines the axis to which the function applies scale and bias.
- [function](function.md): Deprecated. The quantize function.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [scale](scale.md): Deprecated. The descriptor of the scale.
- [bias](bias.md): Deprecated. The descriptor of the bias.
