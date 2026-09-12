> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/pixelformattype](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/pixelformattype)

# pixelFormatType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The pixel format type of this portrait effects matte’s internal image.

## Declaration

```swift
var pixelFormatType: OSType { get }
```

<a id="Discussion"></a>

## Discussion

The only supported pixel format type for the matting image is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [mattingImage](mattingimage.md): The portrait effects matte’s internal image, formatted as a pixel buffer.
- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): A dictionary of primitive map information used for writing an image file with a portrait effects matte.

# pixelFormatType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The pixel format type of this portrait effects matte’s internal image.

## Declaration

```objectivec
@property (readonly) OSType pixelFormatType;
```

<a id="Discussion"></a>

## Discussion

The only supported pixel format type for the matting image is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [mattingImage](mattingimage.md): The portrait effects matte’s internal image, formatted as a pixel buffer.
- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): A dictionary of primitive map information used for writing an image file with a portrait effects matte.
