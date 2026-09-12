> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterapplybatch(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfilterapplybatch(_:_:_:_:_:_:))

# BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Applies a filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to input object.
- `in_stride`: Increment, in values, between input objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.

<a id="return-value"></a>

## Return Value

## See Also

### Forward Propagation Functions

- [BNNSFilterApply(\_:\_:\_:)](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyTwoInput(\_:\_:\_:\_:)](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.

# BNNSFilterApplyBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Applies a filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFilterApplyBatch(BNNSFilter filter, size_t batch_size, const void *in, size_t in_stride, void *out, size_t out_stride);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to input object.
- `in_stride`: Increment, in values, between input objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.

<a id="return-value"></a>

## Return Value

## See Also

### Forward Propagation Functions

- [BNNSFilterApply](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyTwoInput](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.
