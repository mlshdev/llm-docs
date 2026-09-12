> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_copyconversionmatrix(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_copyconversionmatrix(_:_:_:))

# vImageCVImageFormat_CopyConversionMatrix(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.

## Declaration

```swift
func vImageCVImageFormat_CopyConversionMatrix(_ format: vImageCVImageFormat, _ matrix: UnsafeRawPointer, _ inType: vImageMatrixType) -> vImage_Error
```

## Parameters

- `format`: The destination [vImageCVImageFormat](vimagecvimageformat.md) instance.
- `matrix`: The matrix that the function copies to the destination image format.
- `inType`: The type of the matrix.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting the conversion matrix

- [vImageCVImageFormat_GetConversionMatrix(\_:\_:)](vimagecvimageformat_getconversionmatrix%28____%29.md): Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.

# vImageCVImageFormat_CopyConversionMatrix (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Copies an RGB-to-YpCbCr conversion matrix to an image format’s internal matrix.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_CopyConversionMatrix(vImageCVImageFormatRef format, const void *matrix, vImageMatrixType inType);
```

## Parameters

- `format`: The destination [vImageCVImageFormatRef](vimagecvimageformat.md) instance.
- `matrix`: The matrix that the function copies to the destination image format.
- `inType`: The type of the matrix.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting the conversion matrix

- [vImageCVImageFormat_GetConversionMatrix](vimagecvimageformat_getconversionmatrix%28____%29.md): Returns a pointer to the RGB-to-YpCbCr conversion matrix of a Core Video image format.
