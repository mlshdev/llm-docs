> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte/mattetype-swift.struct](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/mattetype-swift.struct)

# AVSemanticSegmentationMatte.MatteType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines the types of segmentation matte images that you can capture along with the primary image.

## Declaration

```swift
struct MatteType
```

## Topics

### Matte types

- [hair](mattetype-swift.struct/hair.md): A matting image that segments the hair from all people in the visible field of view of an image.
- [skin](mattetype-swift.struct/skin.md): A matting image that segments the skin from all people in the visible field of view of an image.
- [teeth](mattetype-swift.struct/teeth.md): A matting image that segments the teeth from all people in the visible field of view of an image.
- [glasses](mattetype-swift.struct/glasses.md): A matting image that segments eyeglasses and sunglasses from all people in the visible field of view of an image.

### Initializers

- [init(rawValue:)](mattetype-swift.struct/init%28rawvalue_%29.md): Creates a matte type with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.

# AVSemanticSegmentationMatteType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines the types of segmentation matte images that you can capture along with the primary image.

## Declaration

```objectivec
typedef NSString * AVSemanticSegmentationMatteType;
```

## Topics

### Matte types

- [AVSemanticSegmentationMatteTypeHair](mattetype-swift.struct/hair.md): A matting image that segments the hair from all people in the visible field of view of an image.
- [AVSemanticSegmentationMatteTypeSkin](mattetype-swift.struct/skin.md): A matting image that segments the skin from all people in the visible field of view of an image.
- [AVSemanticSegmentationMatteTypeTeeth](mattetype-swift.struct/teeth.md): A matting image that segments the teeth from all people in the visible field of view of an image.
- [AVSemanticSegmentationMatteTypeGlasses](mattetype-swift.struct/glasses.md): A matting image that segments eyeglasses and sunglasses from all people in the visible field of view of an image.

## See Also

### Inspecting a segmentation matte

- [matteType](mattetype-swift.property.md): The semantic segmentation matte image type.
- [mattingImage](mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](pixelformattype.md): The pixel format type for this object’s internal matting image.
