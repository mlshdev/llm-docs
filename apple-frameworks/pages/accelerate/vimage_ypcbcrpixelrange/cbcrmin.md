> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrpixelrange/cbcrmin](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrpixelrange/cbcrmin)

# CbCrMin (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The encoding of the minimum allowed `{Cb, Cr}` value.

## Declaration

```swift
var CbCrMin: Int32
```

<a id="Discussion"></a>

## Discussion

All chroma values less than this value will be clamped to this value.

## See Also

### Pixel Range Properties

- [Yp_bias](yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [CbCr_bias](cbcr_bias.md): The encoding for `{Cb, Cr} = 0.0` for this video format.
- [YpRangeMax](yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.

# CbCrMin (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The encoding of the minimum allowed `{Cb, Cr}` value.

## Declaration

```objectivec
int32_t CbCrMin;
```

<a id="Discussion"></a>

## Discussion

All chroma values less than this value will be clamped to this value.

## See Also

### Pixel Range Properties

- [Yp_bias](yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [CbCr_bias](cbcr_bias.md): The encoding for `{Cb, Cr} = 0.0` for this video format.
- [YpRangeMax](yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.
