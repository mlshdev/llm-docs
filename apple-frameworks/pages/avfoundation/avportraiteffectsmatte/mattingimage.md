> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/mattingimage](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/mattingimage)

# mattingImage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The portrait effects matte’s internal image, formatted as a pixel buffer.

## Declaration

```swift
var mattingImage: CVPixelBuffer { get }
```

<a id="Discussion"></a>

## Discussion

Query the pixel format using the [pixelFormatType](pixelformattype.md) property.

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [pixelFormatType](pixelformattype.md): The pixel format type of this portrait effects matte’s internal image.
- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): A dictionary of primitive map information used for writing an image file with a portrait effects matte.

# mattingImage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The portrait effects matte’s internal image, formatted as a pixel buffer.

## Declaration

```objectivec
@property (readonly) CVPixelBufferRef mattingImage;
```

<a id="Discussion"></a>

## Discussion

Query the pixel format using the [pixelFormatType](pixelformattype.md) property.

## See Also

### Examining a Portrait Effects matte

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md): Check for portrait effects matte metadata in existing images.
- [pixelFormatType](pixelformattype.md): The pixel format type of this portrait effects matte’s internal image.
- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): A dictionary of primitive map information used for writing an image file with a portrait effects matte.
