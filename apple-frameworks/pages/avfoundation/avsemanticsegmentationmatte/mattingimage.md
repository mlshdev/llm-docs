> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/mattingimage](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/mattingimage)

# mattingImage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The semantic segmentation matte’s internal image.

## Declaration

```swift
var mattingImage: CVPixelBuffer { get }
```

<a id="Discussion"></a>

## Discussion

You can determine the pixel buffer’s format type using the [pixelFormatType](pixelformattype.md) property.

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatte.MatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.

# mattingImage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The semantic segmentation matte’s internal image.

## Declaration

```objectivec
@property (readonly) CVPixelBufferRef mattingImage;
```

<a id="Discussion"></a>

## Discussion

You can determine the pixel buffer’s format type using the [pixelFormatType](pixelformattype.md) property.

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.
