> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getconversionmatrix(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getconversionmatrix(_:_:))

# vImageCVImageFormat_GetConversionMatrix(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetConversionMatrix(_ format: vImageConstCVImageFormat, _ outType: UnsafeMutablePointer<vImageMatrixType>!) -> UnsafeRawPointer!
```

## Parameters

- `format`: The Core Video image format to query.
- `outType`: A pointer to a `vImageMatrixType`.

<a id="return-value"></a>

## Return Value

A pointer to the conversion matrix.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetConversionMatrix(\_:\_:)](vimagecvimageformat_getconversionmatrix%28____%29.md):

```swift
let conversionMatrixPointer = withUnsafeBytes(of: cvImageFormat) { bytes in
    var outType = UInt32()
    
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetConversionMatrix(format, &outType)
}
```

## See Also

### Querying and setting the conversion matrix

- [vImageCVImageFormat_CopyConversionMatrix(\_:\_:\_:)](vimagecvimageformat_copyconversionmatrix%28______%29.md): Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.

# vImageCVImageFormat_GetConversionMatrix (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.

## Declaration

```objectivec
const void *vImageCVImageFormat_GetConversionMatrix(vImageConstCVImageFormatRef format, vImageMatrixType *outType);
```

## Parameters

- `format`: The Core Video image format to query.
- `outType`: A pointer to a `vImageMatrixType`.

<a id="return-value"></a>

## Return Value

A pointer to the conversion matrix.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetConversionMatrix](vimagecvimageformat_getconversionmatrix%28____%29.md):

```swift
let conversionMatrixPointer = withUnsafeBytes(of: cvImageFormat) { bytes in
    var outType = UInt32()
    
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetConversionMatrix(format, &outType)
}
```

## See Also

### Querying and setting the conversion matrix

- [vImageCVImageFormat_CopyConversionMatrix](vimagecvimageformat_copyconversionmatrix%28______%29.md): Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.
