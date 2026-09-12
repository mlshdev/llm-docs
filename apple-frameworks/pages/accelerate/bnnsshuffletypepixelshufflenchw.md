> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsshuffletypepixelshufflenchw](https://developer.apple.com/documentation/accelerate/bnnsshuffletypepixelshufflenchw)

# BNNSShuffleTypePixelShuffleNCHW (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The pixel shuffle for the NCHW (batch, channels, height, width) format, equivalent to depth-to-space in Column Row Depth (CRD) mode.

## Declaration

```swift
var BNNSShuffleTypePixelShuffleNCHW: BNNSShuffleType { get }
```

<a id="Discussion"></a>

## Discussion

Use this shuffle type to rearrange the elements in a tensor of shape `(N,C×rxr,H,W)` to a tensor of shape `(N,C,H×r,W×r)`, where `r` is an upscale factor.

## See Also

### Constants

- [init(\_:)](bnnsshuffletype/init%28__%29.md)
- [init(rawValue:)](bnnsshuffletype/init%28rawvalue_%29.md)
- [rawValue](bnnsshuffletype/rawvalue.md)
- [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md): The pixel unshuffle for the NCHW (batch, channels, height, width) format, equivalent to space-to-depth in Column Row Depth (CRD) mode.
- [BNNSShuffleTypeDepthToSpaceNCHW](bnnsshuffletypedepthtospacenchw.md)
- [BNNSShuffleTypeSpaceToDepthNCHW](bnnsshuffletypespacetodepthnchw.md)

# BNNSShuffleTypePixelShuffleNCHW (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The pixel shuffle for the NCHW (batch, channels, height, width) format, equivalent to depth-to-space in Column Row Depth (CRD) mode.

## Declaration

```objectivec
BNNSShuffleTypePixelShuffleNCHW
```

<a id="Discussion"></a>

## Discussion

Use this shuffle type to rearrange the elements in a tensor of shape `(N,C×rxr,H,W)` to a tensor of shape `(N,C,H×r,W×r)`, where `r` is an upscale factor.

## See Also

### Constants

- [BNNSShuffleTypePixelUnshuffleNCHW](bnnsshuffletypepixelunshufflenchw.md): The pixel unshuffle for the NCHW (batch, channels, height, width) format, equivalent to space-to-depth in Column Row Depth (CRD) mode.
- [BNNSShuffleTypeDepthToSpaceNCHW](bnnsshuffletypedepthtospacenchw.md)
- [BNNSShuffleTypeSpaceToDepthNCHW](bnnsshuffletypespacetodepthnchw.md)
