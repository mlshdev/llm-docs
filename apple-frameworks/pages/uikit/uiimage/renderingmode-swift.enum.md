> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/renderingmode-swift.enum](https://developer.apple.com/documentation/uikit/uiimage/renderingmode-swift.enum)

# UIImage.RenderingMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the possible rendering modes for an image.

## Declaration

```swift
enum RenderingMode
```

<a id="overview"></a>

## Overview

The rendering mode controls how UIKit uses color information to display an image. See [Providing images for different appearances](../providing-images-for-different-appearances.md) for creating tintable images with template mode.

## Topics

### Rendering modes

- [UIImage.RenderingMode.automatic](renderingmode-swift.enum/automatic.md): Draw the image using the context’s default rendering mode.
- [UIImage.RenderingMode.alwaysOriginal](renderingmode-swift.enum/alwaysoriginal.md): Always draw the original image, without treating it as a template.
- [UIImage.RenderingMode.alwaysTemplate](renderingmode-swift.enum/alwaystemplate.md): Always draw the image as a template image, ignoring its color information.

### Initializers

- [init(rawValue:)](renderingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting rendering information

- [renderingMode](renderingmode-swift.property.md): A setting that determines how the app renders an image.
- [imageRendererFormat](imagerendererformat.md): The preferred image renderer format for the image.

# UIImageRenderingMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the possible rendering modes for an image.

## Declaration

```objectivec
enum UIImageRenderingMode : NSInteger;
```

<a id="overview"></a>

## Overview

The rendering mode controls how UIKit uses color information to display an image. See [Providing images for different appearances](../providing-images-for-different-appearances.md) for creating tintable images with template mode.

## Topics

### Rendering modes

- [UIImageRenderingModeAutomatic](renderingmode-swift.enum/automatic.md): Draw the image using the context’s default rendering mode.
- [UIImageRenderingModeAlwaysOriginal](renderingmode-swift.enum/alwaysoriginal.md): Always draw the original image, without treating it as a template.
- [UIImageRenderingModeAlwaysTemplate](renderingmode-swift.enum/alwaystemplate.md): Always draw the image as a template image, ignoring its color information.

## See Also

### Getting rendering information

- [renderingMode](renderingmode-swift.property.md): A setting that determines how the app renders an image.
- [imageRendererFormat](imagerendererformat.md): The preferred image renderer format for the image.
