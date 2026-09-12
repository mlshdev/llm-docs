> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/pixelformattype](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/pixelformattype)

# pixelFormatType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The pixel format type for this object’s internal matting image.

## Declaration

```swift
var pixelFormatType: OSType { get }
```

<a id="Discussion"></a>

## Discussion

Currently, the only supported pixel format type for the matting image is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatte.MatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.

# pixelFormatType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The pixel format type for this object’s internal matting image.

## Declaration

```objectivec
@property (readonly) OSType pixelFormatType;
```

<a id="Discussion"></a>

## Discussion

Currently, the only supported pixel format type for the matting image is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.
