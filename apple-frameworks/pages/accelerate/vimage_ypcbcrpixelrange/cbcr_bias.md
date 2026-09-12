> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrpixelrange/cbcr_bias](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrpixelrange/cbcr_bias)

# CbCr_bias (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The encoding for `{Cb, Cr} = 0.0` for this video format.

## Declaration

```swift
var CbCr_bias: Int32
```

<a id="Discussion"></a>

## Discussion

This value is usually the middle of the range of CbCr, not the low end.

## See Also

### Pixel Range Properties

- [Yp_bias](yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [YpRangeMax](yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.
- [CbCrMin](cbcrmin.md): The encoding of the minimum allowed `{Cb, Cr}` value.

# CbCr_bias (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The encoding for `{Cb, Cr} = 0.0` for this video format.

## Declaration

```objectivec
int32_t CbCr_bias;
```

<a id="Discussion"></a>

## Discussion

This value is usually the middle of the range of CbCr, not the low end.

## See Also

### Pixel Range Properties

- [Yp_bias](yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [YpRangeMax](yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.
- [CbCrMin](cbcrmin.md): The encoding of the minimum allowed `{Cb, Cr}` value.
