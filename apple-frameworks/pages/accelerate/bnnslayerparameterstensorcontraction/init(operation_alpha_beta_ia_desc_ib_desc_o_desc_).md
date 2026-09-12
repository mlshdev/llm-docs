> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterstensorcontraction/init(operation:alpha:beta:ia_desc:ib_desc:o_desc:)](https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/init(operation:alpha:beta:ia_desc:ib_desc:o_desc:))

# init(operation:alpha:beta:iA_desc:iB_desc:o_desc:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new tensor-contraction parameters structure.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(operation: UnsafePointer<CChar>, alpha: Float, beta: Float, iA_desc: BNNSNDArrayDescriptor, iB_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor)
```

## Parameters

- `operation`: The string that describes the operation.
- `alpha`: Scaling that the operation applies to the result.
- `beta`: A value, that must be either 0.0 or 1.0, you use to scale the existing output before the operation adds it to the result.
- `iA_desc`: The descriptor of input matrix *A*.
- `iB_desc`: The descriptor of input matrix *B*.
- `o_desc`: The descriptor of the output.
