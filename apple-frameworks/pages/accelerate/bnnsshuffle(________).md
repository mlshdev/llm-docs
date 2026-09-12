> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsshuffle(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsshuffle(_:_:_:_:))

# BNNSShuffle(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Rearranges elements in a tensor according to shuffle type.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSShuffle(_ type: BNNSShuffleType, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `type`: A constant that specifies the shuffle type.
- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSShuffle(\_:\_:\_:\_:)](bnnsshuffle%28________%29.md) to rearrange the elements in a tensor between the depth dimension and blocks of 2D spatial data.

Pass a shuffle type of [BNNSShuffleTypePixelShuffleNCHW](bnnsshuffletypepixelshufflenchw.md) to specify that the function rearranges elements in a tensor of shape `(N,C×r×r,H,W)` to a tensor of shape `(N,C,H×r,W×r)`, where `r` is an upscale factor.

Pass [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md) to specify that the function elements in a tensor of shape `(N,C,H×r,W×r)` to a tensor of shape `(N,C×r×r,H,W)`, where `r` is a downscale factor.

## See Also

### Errors

- [BNNS.Error](bnns/error.md)
- [BNNSBandPart(\_:\_:\_:\_:\_:)](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile(\_:\_:\_:)](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward(\_:\_:\_:)](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.

# BNNSShuffle (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Rearranges elements in a tensor according to shuffle type.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSShuffle(const BNNSShuffleType type, const BNNSNDArrayDescriptor *input, BNNSNDArrayDescriptor *output, const BNNSFilterParameters *filter_params);
```

## Parameters

- `type`: A constant that specifies the shuffle type.
- `input`: A pointer to the input descriptor.
- `output`: A pointer to the output descriptor.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use [BNNSShuffle](bnnsshuffle%28________%29.md) to rearrange the elements in a tensor between the depth dimension and blocks of 2D spatial data.

Pass a shuffle type of [BNNSShuffleTypePixelShuffleNCHW](bnnsshuffletypepixelshufflenchw.md) to specify that the function rearranges elements in a tensor of shape `(N,C×r×r,H,W)` to a tensor of shape `(N,C,H×r,W×r)`, where `r` is an upscale factor.

Pass [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md) to specify that the function elements in a tensor of shape `(N,C,H×r,W×r)` to a tensor of shape `(N,C×r×r,H,W)`, where `r` is a downscale factor.

## See Also

### Errors

- [BNNSBandPart](bnnsbandpart%28__________%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
- [BNNSShuffleType](bnnsshuffletype.md): Constants that specify a shuffle type.
- [BNNSTile](bnnstile%28______%29.md): Deprecated. Generates an output tensor by tiling an input tensor multiple times.
- [BNNSTileBackward](bnnstilebackward%28______%29.md): Deprecated. Applies a tile filter backward to generate an input gradient.
