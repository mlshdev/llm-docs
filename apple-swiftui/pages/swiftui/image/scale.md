> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/scale](https://developer.apple.com/documentation/swiftui/image/scale)

# Image.Scale

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A scale to apply to vector images relative to text.

## Declaration

```swift
enum Scale
```

<a id="overview"></a>

## Overview

Use this type with the [imageScale(\_:)](../view/imagescale%28__%29.md) modifier, or the [imageScale](../environmentvalues/imagescale.md) environment key, to set the image scale.

The following example shows the three `Scale` values as applied to a system symbol image, each set against a text view:

```swift
HStack { Image(systemName: "swift").imageScale(.small); Text("Small") }
HStack { Image(systemName: "swift").imageScale(.medium); Text("Medium") }
HStack { Image(systemName: "swift").imageScale(.large); Text("Large") }
```

![Vertically arranged text views that read Small, Medium, and](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-EnvironmentAdditions-Image-scale@2x.png)

## Topics

### Getting image scales

- [Image.Scale.small](scale/small.md): A scale that produces small images.
- [Image.Scale.medium](scale/medium.md): A scale that produces medium-sized images.
- [Image.Scale.large](scale/large.md): A scale that produces large images.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring an image

- [Fitting images into available space](../fitting-images-into-available-space.md): Adjust the size and shape of images in your app’s user interface by applying view modifiers.
- [imageScale(\_:)](../view/imagescale%28__%29.md): Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.
- [imageScale](../environmentvalues/imagescale.md): The image scale for this environment.
- [Image.Orientation](orientation.md): The orientation of an image.
- [Image.ResizingMode](resizingmode.md): The modes that SwiftUI uses to resize an image to fit within its containing view.
