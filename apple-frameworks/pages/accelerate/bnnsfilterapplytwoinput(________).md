> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterapplytwoinput(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfilterapplytwoinput(_:_:_:_:))

# BNNSFilterApplyTwoInput(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a filter to a pair of inputs, writing the result to a specified output.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterApplyTwoInput(_ filter: BNNSFilter?, _ inA: UnsafeRawPointer, _ inB: UnsafeRawPointer, _ out: UnsafeMutableRawPointer) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `inA`: Pointer to the first input data.
- `inB`: Pointer to the second input data.
- `out`: Pointer to the output data.

## See Also

### Forward Propagation Functions

- [BNNSFilterApply(\_:\_:\_:)](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.

# BNNSFilterApplyTwoInput (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a filter to a pair of inputs, writing the result to a specified output.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFilterApplyTwoInput(BNNSFilter filter, const void *inA, const void *inB, void *out);
```

## Parameters

- `filter`: The filter to apply.
- `inA`: Pointer to the first input data.
- `inB`: Pointer to the second input data.
- `out`: Pointer to the output data.

## See Also

### Forward Propagation Functions

- [BNNSFilterApply](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInputBatch](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.
