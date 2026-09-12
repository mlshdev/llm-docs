> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/dictionaryrepresentation(forauxiliarydatatype:)](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/dictionaryrepresentation(forauxiliarydatatype:))

# dictionaryRepresentation(forAuxiliaryDataType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

## Declaration

```swift
func dictionaryRepresentation(forAuxiliaryDataType outAuxDataType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> [AnyHashable : Any]?
```

## Parameters

- `outAuxDataType`: On output, the auxiliary data type to be used when calling the ImageIO framework’s [CGImageDestinationAddAuxiliaryDataInfo(\_:\_:\_:)](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md) function. Currently supported auxiliary data types are enumerated in `CGImageProperties`.

<a id="return-value"></a>

## Return Value

A dictionary of `CGImageDestination`-compatible semantic segmentation matte information, or `nil` if the auxiliary data type is unsupported.

## See Also

### Creating a segmentation matte

- [init(fromImageSourceAuxiliaryDataType:dictionaryRepresentation:)](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [replacingSemanticSegmentationMatte(with:)](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.

# dictionaryRepresentationForAuxiliaryDataType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentationForAuxiliaryDataType:(NSString **) outAuxDataType;
```

## Parameters

- `outAuxDataType`: On output, the auxiliary data type to be used when calling the ImageIO framework’s [CGImageDestinationAddAuxiliaryDataInfo](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md) function. Currently supported auxiliary data types are enumerated in `CGImageProperties`.

<a id="return-value"></a>

## Return Value

A dictionary of `CGImageDestination`-compatible semantic segmentation matte information, or `nil` if the auxiliary data type is unsupported.

## See Also

### Creating a segmentation matte

- [semanticSegmentationMatteFromImageSourceAuxiliaryDataType:dictionaryRepresentation:error:](init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:error:](replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [semanticSegmentationMatteByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
