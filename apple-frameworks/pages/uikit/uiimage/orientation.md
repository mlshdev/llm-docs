> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/orientation](https://developer.apple.com/documentation/uikit/uiimage/orientation)

# UIImage.Orientation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that specify the intended display orientation for an image.

## Declaration

```swift
enum Orientation
```

<a id="overview"></a>

## Overview

Orientation values are commonly found in image metadata, and specifying image orientation correctly can be important both for displaying the image and for certain kinds of image processing.

The [UIImage](../uiimage.md) class automatically handles the transform necessary to present an image in the correct display orientation according to its orientation metadata, so an image object’s [imageOrientation](imageorientation.md) property simply indicates which transform was applied.

For example, an iOS device camera always encodes pixel data in the camera sensor’s native landscape orientation, along with metadata indicating the camera orientation. When UIImage loads a photo shot in portrait orientation, it automatically applies a 90° rotation before displaying the image data, and the image’s [imageOrientation](imageorientation.md) value of [UIImage.Orientation.right](orientation/right.md) indicates that this rotation has been applied.

![UIImage rotates an image with right orientation for correct display](https://developer.apple.com/images/com.apple.uikit/media-2948302.png)

> **Note**

>  Some frameworks describe image orientation using the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) type (or the raw TIFF/Exif numeric values that type defines symbols for). However, the underlying numeric values of that type are incompatible with [UIImage.Orientation](orientation.md). For conversion help, see the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) overview.

## Topics

### Image orientations

- [UIImage.Orientation.up](orientation/up.md): The original pixel data matches the image’s intended display orientation.
- [UIImage.Orientation.down](orientation/down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImage.Orientation.left](orientation/left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImage.Orientation.right](orientation/right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImage.Orientation.upMirrored](orientation/upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImage.Orientation.downMirrored](orientation/downmirrored.md): The image has been vertically flipped from the orientation of its original pixel data.
- [UIImage.Orientation.leftMirrored](orientation/leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.
- [UIImage.Orientation.rightMirrored](orientation/rightmirrored.md): The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

### Initializers

- [init(rawValue:)](orientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImage.ResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [isSymbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

# UIImageOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that specify the intended display orientation for an image.

## Declaration

```objectivec
enum UIImageOrientation : NSInteger;
```

<a id="overview"></a>

## Overview

Orientation values are commonly found in image metadata, and specifying image orientation correctly can be important both for displaying the image and for certain kinds of image processing.

The [UIImage](../uiimage.md) class automatically handles the transform necessary to present an image in the correct display orientation according to its orientation metadata, so an image object’s [imageOrientation](imageorientation.md) property simply indicates which transform was applied.

For example, an iOS device camera always encodes pixel data in the camera sensor’s native landscape orientation, along with metadata indicating the camera orientation. When UIImage loads a photo shot in portrait orientation, it automatically applies a 90° rotation before displaying the image data, and the image’s [imageOrientation](imageorientation.md) value of [UIImageOrientationRight](orientation/right.md) indicates that this rotation has been applied.

![UIImage rotates an image with right orientation for correct display](https://developer.apple.com/images/com.apple.uikit/media-2948302.png)

> **Note**

>  Some frameworks describe image orientation using the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) type (or the raw TIFF/Exif numeric values that type defines symbols for). However, the underlying numeric values of that type are incompatible with [UIImageOrientation](orientation.md). For conversion help, see the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) overview.

## Topics

### Image orientations

- [UIImageOrientationUp](orientation/up.md): The original pixel data matches the image’s intended display orientation.
- [UIImageOrientationDown](orientation/down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImageOrientationLeft](orientation/left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImageOrientationRight](orientation/right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImageOrientationUpMirrored](orientation/upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImageOrientationDownMirrored](orientation/downmirrored.md): The image has been vertically flipped from the orientation of its original pixel data.
- [UIImageOrientationLeftMirrored](orientation/leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.
- [UIImageOrientationRightMirrored](orientation/rightmirrored.md): The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

## See Also

### Related Documentation

- [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImageResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [symbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.
