> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_createwithcvpixelbuffer(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_createwithcvpixelbuffer(_:))

# vImageCVImageFormat_CreateWithCVPixelBuffer(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates the description of the image encoding in an existing Core Video pixel buffer.

## Declaration

```swift
func vImageCVImageFormat_CreateWithCVPixelBuffer(_ buffer: CVPixelBuffer!) -> Unmanaged<vImageCVImageFormat>!
```

## Parameters

- `buffer`: The source Core Video pixel buffer.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](vimagecvimageformat.md) instance that describes the specified pixel buffer’s pixel format.

## Mentioned In

- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

## See Also

### Related Documentation

- [make(buffer:)](vimagecvimageformat/make%28buffer_%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.

### Creating Core Video image formats

- [vImageCVImageFormat](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormat](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

# vImageCVImageFormat_CreateWithCVPixelBuffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Creates the description of the image encoding in an existing Core Video pixel buffer.

## Declaration

```objectivec
vImageCVImageFormatRefvImageCVImageFormat_CreateWithCVPixelBuffer(CVPixelBufferRef buffer);
```

## Parameters

- `buffer`: The source Core Video pixel buffer.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormatRef](vimagecvimageformat.md) instance that describes the specified pixel buffer’s pixel format.

## Mentioned In

- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)

## See Also

### Creating Core Video image formats

- [vImageCVImageFormatRef](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageConstCVImageFormatRef](vimageconstcvimageformat.md): An immutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_Create](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
