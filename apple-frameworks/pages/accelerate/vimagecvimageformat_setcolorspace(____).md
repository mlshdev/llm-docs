> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_setcolorspace(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_setcolorspace(_:_:))

# vImageCVImageFormat_SetColorSpace(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the color space of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_SetColorSpace(_ format: vImageCVImageFormat, _ colorspace: CGColorSpace!) -> vImage_Error
```

## Parameters

- `format`: The Core Video image format to update.
- `colorspace`: The new color space for the format.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

For RGB, indexed, and grayscale images, the color space of a Core Video image format describes the image encoding.

For YpCbCr images, the color space describes the image encoding of the RGB image that’s the result of unapplying the RGB-to-YpCbCr conversion matrix.

## See Also

### Related Documentation

- [colorSpace](vimagecvimageformat/colorspace.md): The color space of the Core Video image format.

### Querying and setting the color space

- [vImageCVImageFormat_GetColorSpace(\_:)](vimagecvimageformat_getcolorspace%28__%29.md): Returns the color space of a Core Video image format.

# vImageCVImageFormat_SetColorSpace (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the color space of a Core Video image format.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_SetColorSpace(vImageCVImageFormatRef format, CGColorSpaceRef colorspace);
```

## Parameters

- `format`: The Core Video image format to update.
- `colorspace`: The new color space for the format.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

For RGB, indexed, and grayscale images, the color space of a Core Video image format describes the image encoding.

For YpCbCr images, the color space describes the image encoding of the RGB image that’s the result of unapplying the RGB-to-YpCbCr conversion matrix.

## See Also

### Querying and setting the color space

- [vImageCVImageFormat_GetColorSpace](vimagecvimageformat_getcolorspace%28__%29.md): Returns the color space of a Core Video image format.
