> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/dictionaryrepresentation(forauxiliarydatatype:)](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/dictionaryrepresentation(forauxiliarydatatype:))

# dictionaryRepresentation(forAuxiliaryDataType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary of primitive map information used for writing an image file with a portrait effects matte.

## Declaration

```swift
func dictionaryRepresentation(forAuxiliaryDataType outAuxDataType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> [AnyHashable : Any]?
```

## Parameters

- `outAuxDataType`: Must be [kCGImageAuxiliaryDataTypePortraitEffectsMatte](../../imageio/kcgimageauxiliarydatatypeportraiteffectsmatte.md).

<a id="return-value"></a>

## Return Value

A dictionary of primitive map information for [CGImageDestinationAddAuxiliaryDataInfo(\_:\_:\_:)](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md).

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [mattingImage](mattingimage.md): The portrait effects matte’s internal image, formatted as a pixel buffer.
- [pixelFormatType](pixelformattype.md): The pixel format type of this portrait effects matte’s internal image.

# dictionaryRepresentationForAuxiliaryDataType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary of primitive map information used for writing an image file with a portrait effects matte.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentationForAuxiliaryDataType:(NSString **) outAuxDataType;
```

## Parameters

- `outAuxDataType`: Must be [kCGImageAuxiliaryDataTypePortraitEffectsMatte](../../imageio/kcgimageauxiliarydatatypeportraiteffectsmatte.md).

<a id="return-value"></a>

## Return Value

A dictionary of primitive map information for [CGImageDestinationAddAuxiliaryDataInfo](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md).

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [mattingImage](mattingimage.md): The portrait effects matte’s internal image, formatted as a pixel buffer.
- [pixelFormatType](pixelformattype.md): The pixel format type of this portrait effects matte’s internal image.
