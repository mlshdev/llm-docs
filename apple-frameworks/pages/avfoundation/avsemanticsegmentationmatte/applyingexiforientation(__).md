> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/applyingexiforientation(_:)](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/applyingexiforientation(_:))

# applyingExifOrientation(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new semantic segmentation matte instance with the specified Exif orientation applied.

## Declaration

```swift
func applyingExifOrientation(_ exifOrientation: CGImagePropertyOrientation) -> Self
```

## Parameters

- `exifOrientation`: A [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) value expressing how the matte should be rotated or mirrored.

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance.

<a id="Discussion"></a>

## Discussion

This method throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if you pass an unrecognized `exifOrientation`.

## See Also

### Creating a segmentation matte

- [init(fromImageSourceAuxiliaryDataType:dictionaryRepresentation:)](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [replacingSemanticSegmentationMatte(with:)](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

# semanticSegmentationMatteByApplyingExifOrientation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new semantic segmentation matte instance with the specified Exif orientation applied.

## Declaration

```objectivec
- (instancetype) semanticSegmentationMatteByApplyingExifOrientation:(CGImagePropertyOrientation) exifOrientation;
```

## Parameters

- `exifOrientation`: A [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) value expressing how the matte should be rotated or mirrored.

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance.

<a id="Discussion"></a>

## Discussion

This method throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if you pass an unrecognized `exifOrientation`.

## See Also

### Creating a segmentation matte

- [semanticSegmentationMatteFromImageSourceAuxiliaryDataType:dictionaryRepresentation:error:](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:error:](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.
