> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersbroadcastmatmul/b_is_weights](https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul/b_is_weights)

# b_is_weights (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A Boolean value that determines whether to treat matrix *B* as weights.

> Use BNNSGraph\* APIs

## Declaration

```swift
var b_is_weights: Bool
```

## See Also

### Instance Properties

- [alpha](alpha.md): Deprecated. A value to scale the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [transA](transa.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *A*.
- [transB](transb.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *B*.
- [quadratic](quadratic.md): Deprecated. A Boolean value that determines whether the operation multiplies matrix *A* by itself.
- [a_is_weights](a_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *A* as weights.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of matrix *A*.
- [iB_desc](ib_desc.md): Deprecated. The descriptor of matrix *B*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.

# b_is_weights (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether to treat matrix *B* as weights.

## Declaration

```objectivec
bool b_is_weights;
```

## See Also

### Instance Properties

- [alpha](alpha.md): Deprecated. A value to scale the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [transA](transa.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *A*.
- [transB](transb.md): Deprecated. A Boolean value that transposes the last two dimensions of matrix *B*.
- [quadratic](quadratic.md): Deprecated. A Boolean value that determines whether the operation multiplies matrix *A* by itself.
- [a_is_weights](a_is_weights.md): Deprecated. A Boolean value that determines whether to treat matrix *A* as weights.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of matrix *A*.
- [iB_desc](ib_desc.md): Deprecated. The descriptor of matrix *B*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
