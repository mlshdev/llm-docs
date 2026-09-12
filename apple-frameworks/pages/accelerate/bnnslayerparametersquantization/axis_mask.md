> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersquantization/axis_mask](https://developer.apple.com/documentation/accelerate/bnnslayerparametersquantization/axis_mask)

# axis_mask (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

A bitmask that defines the axis  to which the function applies scale and bias.

> Use BNNSGraph\* APIs

## Declaration

```swift
var axis_mask: Int
```

<a id="Discussion"></a>

## Discussion

Set to `0` to apply scale and bias to the entire tensor.

## See Also

### Instance Properties

- [function](function.md): Deprecated. The quantize function.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [scale](scale.md): Deprecated. The descriptor of the scale.
- [bias](bias.md): Deprecated. The descriptor of the bias.

# axis_mask (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A bitmask that defines the axis  to which the function applies scale and bias.

## Declaration

```objectivec
size_t axis_mask;
```

<a id="Discussion"></a>

## Discussion

Set to `0` to apply scale and bias to the entire tensor.

## See Also

### Instance Properties

- [function](function.md): Deprecated. The quantize function.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [scale](scale.md): Deprecated. The descriptor of the scale.
- [bias](bias.md): Deprecated. The descriptor of the bias.
