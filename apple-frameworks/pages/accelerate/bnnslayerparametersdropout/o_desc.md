> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersdropout/o_desc](https://developer.apple.com/documentation/accelerate/bnnslayerparametersdropout/o_desc)

# o_desc (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The descriptor of the output.

> Use BNNSGraph\* APIs

## Declaration

```swift
var o_desc: BNNSNDArrayDescriptor
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [rate](rate.md): Deprecated. The probability that the layer drops out an element or a group of elements.
- [seed](seed.md): Deprecated. The seed for the random number generator which is ignored if zero.
- [control](control.md): Deprecated. An 8-bit bit mask that indicates the dimension of the grouping of the dropout decision.

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

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [rate](rate.md): Deprecated. The probability that the layer drops out an element or a group of elements.
- [seed](seed.md): Deprecated. The seed for the random number generator which is ignored if zero.
- [control](control.md): Deprecated. An 8-bit bit mask that indicates the dimension of the grouping of the dropout decision.
