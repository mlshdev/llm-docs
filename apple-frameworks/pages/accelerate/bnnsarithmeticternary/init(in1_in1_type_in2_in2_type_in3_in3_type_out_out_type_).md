> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticternary/init(in1:in1_type:in2:in2_type:in3:in3_type:out:out_type:)](https://developer.apple.com/documentation/accelerate/bnnsarithmeticternary/init(in1:in1_type:in2:in2_type:in3:in3_type:out:out_type:))

# init(in1:in1_type:in2:in2_type:in3:in3_type:out:out_type:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new arithmetic structure that takes three inputs from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(in1: BNNSNDArrayDescriptor, in1_type: BNNSDescriptorType, in2: BNNSNDArrayDescriptor, in2_type: BNNSDescriptorType, in3: BNNSNDArrayDescriptor, in3_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)
```

## Parameters

- `in1`: The descriptor of the first input.
- `in1_type`: The descriptor type of the first input.
- `in2`: The descriptor of the second input.
- `in2_type`: The descriptor type of the second input.
- `in3`: The descriptor of the third input.
- `in3_type`: The descriptor type of the third input.
- `out`: The descriptor of the output.
- `out_type`: The descriptor type of the output.

## See Also

### Creating an Arithmetic Structure

- [init()](init%28%29.md): Deprecated. Returns a new arithmetic structure that takes three inputs.
