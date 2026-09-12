> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterapplytwoinputbatch(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfilterapplytwoinputbatch(_:_:_:_:_:_:_:_:))

# BNNSFilterApplyTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a filter to a set of input object pairs, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterApplyTwoInputBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ inA: UnsafeRawPointer, _ inA_stride: Int, _ inB: UnsafeRawPointer, _ inB_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `inA`: Pointer to the first input data.
- `inA_stride`: Increment, in values, between first input objects.
- `inB`: Pointer to the second input data.
- `inB_stride`: Increment, in values, between second input objects.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between output objects.

## See Also

### Forward Propagation Functions

- [BNNSFilterApply(\_:\_:\_:)](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput(\_:\_:\_:\_:)](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.

# BNNSFilterApplyTwoInputBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a filter to a set of input object pairs, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFilterApplyTwoInputBatch(BNNSFilter filter, size_t batch_size, const void *inA, size_t inA_stride, const void *inB, size_t inB_stride, void *out, size_t out_stride);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `inA`: Pointer to the first input data.
- `inA_stride`: Increment, in values, between first input objects.
- `inB`: Pointer to the second input data.
- `inB_stride`: Increment, in values, between second input objects.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between output objects.

## See Also

### Forward Propagation Functions

- [BNNSFilterApply](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
