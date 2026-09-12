> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/mattetype-swift.property](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/mattetype-swift.property)

# matteType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The semantic segmentation matte image type.

## Declaration

```swift
var matteType: AVSemanticSegmentationMatte.MatteType { get }
```

<a id="Discussion"></a>

## Discussion

A semantic segmentation matte’s [matteType](mattetype-swift.property.md) is immutable for the life of the object.

## See Also

### Inspecting a segmentation matte

- [AVSemanticSegmentationMatte.MatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.

# matteType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The semantic segmentation matte image type.

## Declaration

```objectivec
@property (readonly) AVSemanticSegmentationMatteType matteType;
```

<a id="Discussion"></a>

## Discussion

A semantic segmentation matte’s [matteType](mattetype-swift.property.md) is immutable for the life of the object.

## See Also

### Inspecting a segmentation matte

- [AVSemanticSegmentationMatteType](mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.
