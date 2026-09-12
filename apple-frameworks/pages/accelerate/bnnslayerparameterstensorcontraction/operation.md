> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterstensorcontraction/operation](https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/operation)

# operation (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The string that describes the operation.

> Use BNNSGraph\* APIs

## Declaration

```swift
var operation: UnsafePointer<CChar>
```

## See Also

### Instance Properties

- [alpha](alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [iB_desc](ib_desc.md): Deprecated. The descriptor of input matrix *B*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.

# operation (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The string that describes the operation.

## Declaration

```objectivec
const char * operation;
```

## See Also

### Instance Properties

- [alpha](alpha.md): Deprecated. Scaling that the operation applies to the result.
- [beta](beta.md): Deprecated. A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- [iA_desc](ia_desc.md): Deprecated. The descriptor of input matrix *A*.
- [iB_desc](ib_desc.md): Deprecated. The descriptor of input matrix *B*.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
