> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getcolorspace(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getcolorspace(_:))

# vImageCVImageFormat_GetColorSpace(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the color space of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetColorSpace(_ format: vImageConstCVImageFormat) -> Unmanaged<CGColorSpace>!
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The color space of the specified image format.

<a id="Discussion"></a>

## Discussion

For RGB, indexed, and grayscale images, the color space of a Core Video image format describes the image encoding.

For YpCbCr images, the color space describes the image encoding of the RGB image that’s the result of unapplying the RGB-to-YpCbCr conversion matrix.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetColorSpace(\_:)](vimagecvimageformat_getcolorspace%28__%29.md):

```swift
let colorSpace = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetColorSpace(format)
}
```

## See Also

### Related Documentation

- [colorSpace](vimagecvimageformat/colorspace.md): The color space of the Core Video image format.

### Querying and setting the color space

- [vImageCVImageFormat_SetColorSpace(\_:\_:)](vimagecvimageformat_setcolorspace%28____%29.md): Sets the color space of a Core Video image format.

# vImageCVImageFormat_GetColorSpace (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the color space of a Core Video image format.

## Declaration

```objectivec
CGColorSpaceRefvImageCVImageFormat_GetColorSpace(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The color space of the specified image format.

<a id="Discussion"></a>

## Discussion

For RGB, indexed, and grayscale images, the color space of a Core Video image format describes the image encoding.

For YpCbCr images, the color space describes the image encoding of the RGB image that’s the result of unapplying the RGB-to-YpCbCr conversion matrix.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetColorSpace](vimagecvimageformat_getcolorspace%28__%29.md):

```swift
let colorSpace = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetColorSpace(format)
}
```

## See Also

### Querying and setting the color space

- [vImageCVImageFormat_SetColorSpace](vimagecvimageformat_setcolorspace%28____%29.md): Sets the color space of a Core Video image format.
