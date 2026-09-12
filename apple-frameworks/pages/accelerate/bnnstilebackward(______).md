> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstilebackward(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnstilebackward(_:_:_:))

# BNNSTileBackward(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a tile filter backward to generate an input gradient.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSTileBackward(_ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `in_delta`: A pointer to the input delta descriptor.
- `out_delta`: A pointer to the output delta descriptor.
- `filter_params`: The filter runtime parameters.

## See Also

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.

# BNNSTileBackward (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a tile filter backward to generate an input gradient.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSTileBackward(BNNSNDArrayDescriptor *in_delta, const BNNSNDArrayDescriptor *out_delta, const BNNSFilterParameters *filter_params);
```

## Parameters

- `in_delta`: A pointer to the input delta descriptor.
- `out_delta`: A pointer to the output delta descriptor.
- `filter_params`: The filter runtime parameters.

## See Also

### Errors

- [BNNSBandPart](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffle](bnnsshuffle%28________%29.md): Deprecated. Rearranges elements in a tensor according to shuffle type.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
