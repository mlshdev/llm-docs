> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/init(fromimagesourceauxiliarydatatype:dictionaryrepresentation:)](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/init(fromimagesourceauxiliarydatatype:dictionaryrepresentation:))

# init(fromImageSourceAuxiliaryDataType:dictionaryRepresentation:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new semantic segmentation matte instance from auxiliary image information in an image file.

## Declaration

```swift
convenience init(fromImageSourceAuxiliaryDataType imageSourceAuxiliaryDataType: CFString, dictionaryRepresentation imageSourceAuxiliaryDataInfoDictionary: [AnyHashable : Any]) throws
```

## Parameters

- `imageSourceAuxiliaryDataType`: The `kCGImageAuxiliaryDataType` constants corresponding to the semantic segmentation matte being created (see `CGImageProperties`).
- `imageSourceAuxiliaryDataInfoDictionary`: A dictionary of primitive semantic segmentation matte information obtained from [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md).

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance, or `nil` if the auxiliary data info dictionary is malformed.

## See Also

### Creating a segmentation matte

- [replacingSemanticSegmentationMatte(with:)](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

# semanticSegmentationMatteFromImageSourceAuxiliaryDataType:dictionaryRepresentation:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new semantic segmentation matte instance from auxiliary image information in an image file.

## Declaration

```objectivec
+ (instancetype) semanticSegmentationMatteFromImageSourceAuxiliaryDataType:(CFStringRef) imageSourceAuxiliaryDataType dictionaryRepresentation:(NSDictionary *) imageSourceAuxiliaryDataInfoDictionary error:(NSError **) outError;
```

## Parameters

- `imageSourceAuxiliaryDataType`: The `kCGImageAuxiliaryDataType` constants corresponding to the semantic segmentation matte being created (see `CGImageProperties`).
- `imageSourceAuxiliaryDataInfoDictionary`: A dictionary of primitive semantic segmentation matte information obtained from [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md).
- `outError`: On return, if the semantic segmentation matte cannot be created, points to an error object that describes the problem.

<a id="return-value"></a>

## Return Value

A new semantic segmentation matte instance, or `nil` if the auxiliary data info dictionary is malformed.

## See Also

### Creating a segmentation matte

- [semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:error:](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [semanticSegmentationMatteByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.
