> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterstensorcontraction/ib_desc](https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/ib_desc)

# iB_desc (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The descriptor of input matrix *B*.

> Use BNNSGraph\* APIs

## Declaration

```swift
var iB_desc: BNNSNDArrayDescriptor
```

## See Also

### Instance Properties

- [operation](operation.md): Deprecated. The string that describes the operation.
- [alpha](alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.

# iB_desc (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The descriptor of input matrix *B*.

## Declaration

```objectivec
BNNSNDArrayDescriptor iB_desc;
```

## See Also

### Instance Properties

- [operation](operation.md): Deprecated. The string that describes the operation.
- [alpha](alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
