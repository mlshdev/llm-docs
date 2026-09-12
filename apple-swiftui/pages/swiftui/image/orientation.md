> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/orientation](https://developer.apple.com/documentation/swiftui/image/orientation)

# Image.Orientation

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The orientation of an image.

## Declaration

```swift
@frozen enum Orientation
```

<a id="overview"></a>

## Overview

Many image formats such as JPEG include orientation metadata in the image data. In other cases, you can specify image orientation in code. Properly specifying orientation is often important both for displaying the image and for certain kinds of image processing.

In SwiftUI, you provide an orientation value when initializing an [Image](../image.md) from an existing [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage).

## Topics

### Getting image orientations

- [Image.Orientation.up](orientation/up.md): A value that indicates the original pixel data matches the image’s intended display orientation.
- [Image.Orientation.down](orientation/down.md): A value that indicates a 180° rotation of the image from the orientation of its original pixel data.
- [Image.Orientation.left](orientation/left.md): A value that indicates a 90° counterclockwise rotation from the orientation of its original pixel data.
- [Image.Orientation.right](orientation/right.md): A value that indicates a 90° clockwise rotation of the image from the orientation of its original pixel data.

### Getting mirrored image orientation

- [Image.Orientation.upMirrored](orientation/upmirrored.md): A value that indicates a horizontal flip of the image from the orientation of its original pixel data.
- [Image.Orientation.downMirrored](orientation/downmirrored.md): A value that indicates a vertical flip of the image from the orientation of its original pixel data.
- [Image.Orientation.leftMirrored](orientation/leftmirrored.md): A value that indicates a 90° clockwise rotation and horizontal flip of the image from the orientation of its original pixel data.
- [Image.Orientation.rightMirrored](orientation/rightmirrored.md): A value that indicates a 90° counterclockwise rotation and horizontal flip from the orientation of its original pixel data.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring an image

- [Fitting images into available space](../fitting-images-into-available-space.md): Adjust the size and shape of images in your app’s user interface by applying view modifiers.
- [imageScale(\_:)](../view/imagescale%28__%29.md): Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.
- [imageScale](../environmentvalues/imagescale.md): The image scale for this environment.
- [Image.Scale](scale.md): A scale to apply to vector images relative to text.
- [Image.ResizingMode](resizingmode.md): The modes that SwiftUI uses to resize an image to fit within its containing view.
