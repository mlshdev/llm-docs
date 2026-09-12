> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getformatcode(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getformatcode(_:))

# vImageCVImageFormat_GetFormatCode(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the four-character code that encodes the pixel format of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetFormatCode(_ format: vImageConstCVImageFormat) -> UInt32
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The four-character code of the image format, such as [kCVPixelFormatType_420YpCbCr8Planar](../corevideo/kcvpixelformattype_420ypcbcr8planar.md).

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetFormatCode(\_:)](vimagecvimageformat_getformatcode%28__%29.md):

```swift
let formatCode = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetFormatCode(format)
}
```

## See Also

### Related Documentation

- [formatCode](vimagecvimageformat/formatcode.md): The four-character code that encodes the pixel format of the Core Video image format.

# vImageCVImageFormat_GetFormatCode (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the four-character code that encodes the pixel format of a Core Video image format.

## Declaration

```objectivec
uint32_t vImageCVImageFormat_GetFormatCode(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The four-character code of the image format, such as [kCVPixelFormatType_420YpCbCr8Planar](../corevideo/kcvpixelformattype_420ypcbcr8planar.md).

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetFormatCode](vimagecvimageformat_getformatcode%28__%29.md):

```swift
let formatCode = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetFormatCode(format)
}
```
