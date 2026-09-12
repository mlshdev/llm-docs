> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/replacingsemanticsegmentationmatte(with:)](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/replacingsemanticsegmentationmatte(with:))

# replacingSemanticSegmentationMatte(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.

## Declaration

```swift
func replacingSemanticSegmentationMatte(with pixelBuffer: CVPixelBuffer) throws -> Self
```

## Parameters

- `pixelBuffer`: A pixel buffer containing a semantic segmentation matting image, represented as [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) with a [kCVImageBufferTransferFunction_Linear](../../corevideo/kcvimagebuffertransferfunction_linear.md) transfer function.

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance, or `nil` if the pixel buffer is malformed.

<a id="Discussion"></a>

## Discussion

When applying complex edits to media containing a semantic segmentation matte, you may create a derivative matte with arbitrary transforms applied to it. You can then use this method to create a new semantic segmentation matte instance.

## See Also

### Creating a segmentation matte

- [init(fromImageSourceAuxiliaryDataType:dictionaryRepresentation:)](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

# semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.

## Declaration

```objectivec
- (instancetype) semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:(CVPixelBufferRef) pixelBuffer error:(NSError **) outError;
```

## Parameters

- `pixelBuffer`: A pixel buffer containing a semantic segmentation matting image, represented as [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) with a [kCVImageBufferTransferFunction_Linear](../../corevideo/kcvimagebuffertransferfunction_linear.md) transfer function.
- `outError`: A populated [NSError](../../foundation/nserror.md) if the semantic segmentation matte couldn’t be created.

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance, or `nil` if the pixel buffer is malformed.

<a id="Discussion"></a>

## Discussion

When applying complex edits to media containing a semantic segmentation matte, you may create a derivative matte with arbitrary transforms applied to it. You can then use this method to create a new semantic segmentation matte instance.

## See Also

### Creating a segmentation matte

- [semanticSegmentationMatteFromImageSourceAuxiliaryDataType:dictionaryRepresentation:error:](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [semanticSegmentationMatteByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.
