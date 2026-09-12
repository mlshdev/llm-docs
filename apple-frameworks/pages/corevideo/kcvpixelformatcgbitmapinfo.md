> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelformatcgbitmapinfo](https://developer.apple.com/documentation/corevideo/kcvpixelformatcgbitmapinfo)

# kCVPixelFormatCGBitmapInfo (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Core Graphics bitmap information for this pixel format (if applicable).

## Declaration

```swift
let kCVPixelFormatCGBitmapInfo: CFString
```

## See Also

### Constants

- [kCVPixelFormatComponentRange](kcvpixelformatcomponentrange.md)
- [kCVPixelFormatComponentRange_FullRange](kcvpixelformatcomponentrange_fullrange.md)
- [kCVPixelFormatComponentRange_VideoRange](kcvpixelformatcomponentrange_videorange.md)
- [kCVPixelFormatComponentRange_WideRange](kcvpixelformatcomponentrange_widerange.md)
- [kCVPixelFormatContainsRGB](kcvpixelformatcontainsrgb.md)
- [kCVPixelFormatContainsYCbCr](kcvpixelformatcontainsycbcr.md)
- [kCVPixelFormatName](kcvpixelformatname.md): The name of the pixel format (type `CFString`). This should be the same as the codec name you would use in QuickTime.
- [kCVPixelFormatConstant](kcvpixelformatconstant.md): The pixel format constant for QuickTime.
- [kCVPixelFormatCodecType](kcvpixelformatcodectype.md): The codec type (type `CFString`). For example, `'2vuy'` or `k422YpCbCr8CodecType`.
- [kCVPixelFormatFourCC](kcvpixelformatfourcc.md): The Microsoft FourCC equivalent code for this pixel format (type `CFString`).
- [kCVPixelFormatContainsAlpha](kcvpixelformatcontainsalpha.md): A Boolean value where [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the format contains alpha and some images may be considered transparent; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that there is no alpha and images are always opaque.
- [kCVPixelFormatPlanes](kcvpixelformatplanes.md)
- [kCVPixelFormatBlockWidth](kcvpixelformatblockwidth.md)
- [kCVPixelFormatBlockHeight](kcvpixelformatblockheight.md): The height, in pixels, of the smallest byte-addressable group of pixels (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBitsPerBlock](kcvpixelformatbitsperblock.md)

# kCVPixelFormatCGBitmapInfo (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Core Graphics bitmap information for this pixel format (if applicable).

## Declaration

```objectivec
extern CFStringRef const kCVPixelFormatCGBitmapInfo;
```

## See Also

### Constants

- [kCVPixelFormatComponentRange](kcvpixelformatcomponentrange.md)
- [kCVPixelFormatComponentRange_FullRange](kcvpixelformatcomponentrange_fullrange.md)
- [kCVPixelFormatComponentRange_VideoRange](kcvpixelformatcomponentrange_videorange.md)
- [kCVPixelFormatComponentRange_WideRange](kcvpixelformatcomponentrange_widerange.md)
- [kCVPixelFormatContainsRGB](kcvpixelformatcontainsrgb.md)
- [kCVPixelFormatContainsYCbCr](kcvpixelformatcontainsycbcr.md)
- [kCVPixelFormatName](kcvpixelformatname.md): The name of the pixel format (type `CFString`). This should be the same as the codec name you would use in QuickTime.
- [kCVPixelFormatConstant](kcvpixelformatconstant.md): The pixel format constant for QuickTime.
- [kCVPixelFormatCodecType](kcvpixelformatcodectype.md): The codec type (type `CFString`). For example, `'2vuy'` or `k422YpCbCr8CodecType`.
- [kCVPixelFormatFourCC](kcvpixelformatfourcc.md): The Microsoft FourCC equivalent code for this pixel format (type `CFString`).
- [kCVPixelFormatContainsAlpha](kcvpixelformatcontainsalpha.md): A Boolean value where [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the format contains alpha and some images may be considered transparent; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that there is no alpha and images are always opaque.
- [kCVPixelFormatPlanes](kcvpixelformatplanes.md)
- [kCVPixelFormatBlockWidth](kcvpixelformatblockwidth.md)
- [kCVPixelFormatBlockHeight](kcvpixelformatblockheight.md): The height, in pixels, of the smallest byte-addressable group of pixels (type `CFNumber`). Assumed to be 1 if this key is not present.
- [kCVPixelFormatBitsPerBlock](kcvpixelformatbitsperblock.md)
