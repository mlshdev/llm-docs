> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterapply(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfilterapply(_:_:_:))

# BNNSFilterApply(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Applies a filter to an input, writing the result to a specified output.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterApply(_ filter: BNNSFilter?, _ in: UnsafeRawPointer, _ out: UnsafeMutableRawPointer) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `in`: Pointer to the input data.
- `out`: Pointer to the output data.

<a id="return-value"></a>

## Return Value

Returns 0 on success, -1 on failure.

## See Also

### Forward Propagation Functions

- [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput(\_:\_:\_:\_:)](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.

# BNNSFilterApply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.12+ (deprecated in 15.0) · tvOS 10.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Applies a filter to an input, writing the result to a specified output.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFilterApply(BNNSFilter filter, const void *in, void *out);
```

## Parameters

- `filter`: The filter to apply.
- `in`: Pointer to the input data.
- `out`: Pointer to the output data.

<a id="return-value"></a>

## Return Value

Returns 0 on success, -1 on failure.

## See Also

### Forward Propagation Functions

- [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.
