> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslosshuber/reduction](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslosshuber/reduction)

# reduction (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The function that’s used to reduce the computed loss.

> Use BNNSGraph\* APIs

## Declaration

```swift
var reduction: BNNSLossReductionFunction
```

## See Also

### Instance Properties

- [function](function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [huber_delta](huber_delta.md): Deprecated. The boundary value that defines where Huber loss returns mean absolute error or mean square error.

# reduction (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function that’s used to reduce the computed loss.

## Declaration

```objectivec
BNNSLossReductionFunction reduction;
```

## See Also

### Instance Properties

- [function](function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [huber_delta](huber_delta.md): Deprecated. The boundary value that defines where Huber loss returns mean absolute error or mean square error.
