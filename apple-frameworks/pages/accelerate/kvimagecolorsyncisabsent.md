> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagecolorsyncisabsent](https://developer.apple.com/documentation/accelerate/kvimagecolorsyncisabsent)

# kvImageColorSyncIsAbsent (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
var kvImageColorSyncIsAbsent: Int { get }
```

## See Also

### Constants

- [vImage.Error](vimage/error.md): An error that occurs during a vImage operation.
- [kvImageNoError](kvimagenoerror.md): The vImage function completed without error.
- [kvImageRoiLargerThanInputBuffer](kvimageroilargerthaninputbuffer.md): The region of interest, as specified by the `srcOffsetToROI_X` and `srcOffsetToROI_Y` parameters and the height and width of the destination buffer, extends beyond the bottom edge or right edge of the source buffer.
- [kvImageInvalidKernelSize](kvimageinvalidkernelsize.md): Either the kernel height, the kernel width, or both, are even.
- [kvImageInvalidEdgeStyle](kvimageinvalidedgestyle.md): The edge style specified is invalid.
- [kvImageInvalidOffset_X](kvimageinvalidoffset_x.md): The `srcOffsetToROI_X` parameter that specifies the left edge of the region of interest is greater than the width of the source image.
- [kvImageInvalidOffset_Y](kvimageinvalidoffset_y.md): The `srcOffsetToROI_Y` parameter that specifies the top edge of the region of interest is greater than the height of the source image.
- [kvImageMemoryAllocationError](kvimagememoryallocationerror.md): An attempt to allocate memory failed.
- [kvImageNullPointerArgument](kvimagenullpointerargument.md): A pointer parameter is `NULL` and it must not be.
- [kvImageInvalidParameter](kvimageinvalidparameter.md): Invalid parameter.
- [kvImageBufferSizeMismatch](kvimagebuffersizemismatch.md): The function requires the source and destination buffers to have the same height and the same width, but they do not.
- [kvImageUnknownFlagsBit](kvimageunknownflagsbit.md): The flag is not recognized.
- [kvImageCoreVideoIsAbsent](kvimagecorevideoisabsent.md)
- [kvImageInternalError](kvimageinternalerror.md): A serious error occured inside vImage, which prevented vImage from continuing.
- [kvImageInvalidCVImageFormat](kvimageinvalidcvimageformat.md)

# kvImageColorSyncIsAbsent (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
kvImageColorSyncIsAbsent
```

## See Also

### Constants

- [kvImageNoError](kvimagenoerror.md): The vImage function completed without error.
- [kvImageRoiLargerThanInputBuffer](kvimageroilargerthaninputbuffer.md): The region of interest, as specified by the `srcOffsetToROI_X` and `srcOffsetToROI_Y` parameters and the height and width of the destination buffer, extends beyond the bottom edge or right edge of the source buffer.
- [kvImageInvalidKernelSize](kvimageinvalidkernelsize.md): Either the kernel height, the kernel width, or both, are even.
- [kvImageInvalidEdgeStyle](kvimageinvalidedgestyle.md): The edge style specified is invalid.
- [kvImageInvalidOffset_X](kvimageinvalidoffset_x.md): The `srcOffsetToROI_X` parameter that specifies the left edge of the region of interest is greater than the width of the source image.
- [kvImageInvalidOffset_Y](kvimageinvalidoffset_y.md): The `srcOffsetToROI_Y` parameter that specifies the top edge of the region of interest is greater than the height of the source image.
- [kvImageMemoryAllocationError](kvimagememoryallocationerror.md): An attempt to allocate memory failed.
- [kvImageNullPointerArgument](kvimagenullpointerargument.md): A pointer parameter is `NULL` and it must not be.
- [kvImageInvalidParameter](kvimageinvalidparameter.md): Invalid parameter.
- [kvImageBufferSizeMismatch](kvimagebuffersizemismatch.md): The function requires the source and destination buffers to have the same height and the same width, but they do not.
- [kvImageUnknownFlagsBit](kvimageunknownflagsbit.md): The flag is not recognized.
- [kvImageCoreVideoIsAbsent](kvimagecorevideoisabsent.md)
- [kvImageInternalError](kvimageinternalerror.md): A serious error occured inside vImage, which prevented vImage from continuing.
- [kvImageInvalidCVImageFormat](kvimageinvalidcvimageformat.md)
- [kvImageInvalidImageFormat](kvimageinvalidimageformat.md)
