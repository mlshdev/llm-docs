> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsemanticsegmentationmatte](https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte)

# AVSemanticSegmentationMatte (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that wraps a matting image for a particular semantic segmentation.

## Declaration

```swift
class AVSemanticSegmentationMatte
```

<a id="overview"></a>

## Overview

The matting image stores its pixel data as [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) objects in [kCVPixelFormatType_OneComponent8](../corevideo/kcvpixelformattype_onecomponent8.md) format. The image file contains the semantic segmentation matte as an auxiliary image, accessible using the ImageIO framework’s [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.

## Topics

### Creating a segmentation matte

- [init(fromImageSourceAuxiliaryDataType:dictionaryRepresentation:)](avsemanticsegmentationmatte/init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [replacingSemanticSegmentationMatte(with:)](avsemanticsegmentationmatte/replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [applyingExifOrientation(\_:)](avsemanticsegmentationmatte/applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentation(forAuxiliaryDataType:)](avsemanticsegmentationmatte/dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

### Inspecting a segmentation matte

- [matteType](avsemanticsegmentationmatte/mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatte.MatteType](avsemanticsegmentationmatte/mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](avsemanticsegmentationmatte/mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](avsemanticsegmentationmatte/pixelformattype.md): The pixel format type for this object’s internal matting image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matte data

- [AVPortraitEffectsMatte](avportraiteffectsmatte.md): An auxiliary image used to separate foreground from background with high resolution.

# AVSemanticSegmentationMatte (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that wraps a matting image for a particular semantic segmentation.

## Declaration

```objectivec
@interface AVSemanticSegmentationMatte : NSObject
```

<a id="overview"></a>

## Overview

The matting image stores its pixel data as [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) objects in [kCVPixelFormatType_OneComponent8](../corevideo/kcvpixelformattype_onecomponent8.md) format. The image file contains the semantic segmentation matte as an auxiliary image, accessible using the ImageIO framework’s [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.

## Topics

### Creating a segmentation matte

- [semanticSegmentationMatteFromImageSourceAuxiliaryDataType:dictionaryRepresentation:error:](avsemanticsegmentationmatte/init%28fromimagesourceauxiliarydatatype_dictionaryrepresentation_%29.md): Returns a new semantic segmentation matte instance from auxiliary image information in an image file.
- [semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer:error:](avsemanticsegmentationmatte/replacingsemanticsegmentationmatte%28with_%29.md): Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.
- [semanticSegmentationMatteByApplyingExifOrientation:](avsemanticsegmentationmatte/applyingexiforientation%28__%29.md): Returns a new semantic segmentation matte instance with the specified Exif orientation applied.
- [dictionaryRepresentationForAuxiliaryDataType:](avsemanticsegmentationmatte/dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.

### Inspecting a segmentation matte

- [matteType](avsemanticsegmentationmatte/mattetype-swift.property.md): The semantic segmentation matte image type.
- [AVSemanticSegmentationMatteType](avsemanticsegmentationmatte/mattetype-swift.struct.md): A structure that defines the types of segmentation matte images that you can capture along with the primary image.
- [mattingImage](avsemanticsegmentationmatte/mattingimage.md): The semantic segmentation matte’s internal image.
- [pixelFormatType](avsemanticsegmentationmatte/pixelformattype.md): The pixel format type for this object’s internal matting image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Matte data

- [AVPortraitEffectsMatte](avportraiteffectsmatte.md): An auxiliary image used to separate foreground from background with high resolution.
