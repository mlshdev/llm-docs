> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_setalphahint(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_setalphahint(_:_:))

# vImageCVImageFormat_SetAlphaHint(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the alpha hint of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_SetAlphaHint(_ format: vImageCVImageFormat, _ alphaIsOne: Int32) -> vImage_Error
```

## Parameters

- `format`: The Core Video image format to update.
- `alphaIsOne`: The new value of the alpha hint.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

When an image format contains an alpha channel, but the image is fully opaque, set this property to a nonzero value.

## See Also

### Related Documentation

- [alphaIsOpaqueHint](vimagecvimageformat/alphaisopaquehint.md): The alpha hint of the Core Video image format.

### Querying and setting the alpha hint

- [vImageCVImageFormat_GetAlphaHint(\_:)](vimagecvimageformat_getalphahint%28__%29.md): Returns the alpha hint of a Core Video image format.

# vImageCVImageFormat_SetAlphaHint (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the alpha hint of a Core Video image format.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_SetAlphaHint(vImageCVImageFormatRef format, int alphaIsOne);
```

## Parameters

- `format`: The Core Video image format to update.
- `alphaIsOne`: The new value of the alpha hint.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

When an image format contains an alpha channel, but the image is fully opaque, set this property to a nonzero value.

## See Also

### Querying and setting the alpha hint

- [vImageCVImageFormat_GetAlphaHint](vimagecvimageformat_getalphahint%28__%29.md): Returns the alpha hint of a Core Video image format.
