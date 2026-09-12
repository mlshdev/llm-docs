> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncullmode](https://developer.apple.com/documentation/scenekit/scncullmode)

# SCNCullMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.

## Declaration

```swift
enum SCNCullMode
```

<a id="overview"></a>

## Overview

The vertex data and normal vectors in a geometry designate which side of each polygon is to be considered its front face, and the geometry’s orientation with respect to the camera determines which front surfaces are currently visible. Typically, back-facing surfaces are found only on the interior of a closed geometry, obscured by front-facing surfaces, so rendering these surfaces has a performance cost but no visible effect.

## Topics

### Enumeration Cases

- [SCNCullMode.back](scncullmode/back.md)
- [SCNCullMode.front](scncullmode/front.md)

### Initializers

- [init(rawValue:)](scncullmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Rendered Appearance

- [isLitPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [isDoubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [fillMode](scnmaterial/fillmode.md)
- [SCNFillMode](scnfillmode.md)

# SCNCullMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.

## Declaration

```objectivec
enum SCNCullMode : NSInteger;
```

<a id="overview"></a>

## Overview

The vertex data and normal vectors in a geometry designate which side of each polygon is to be considered its front face, and the geometry’s orientation with respect to the camera determines which front surfaces are currently visible. Typically, back-facing surfaces are found only on the interior of a closed geometry, obscured by front-facing surfaces, so rendering these surfaces has a performance cost but no visible effect.

## Topics

### Enumeration Cases

- [SCNCullModeBack](scncullmode/back.md)
- [SCNCullModeFront](scncullmode/front.md)

## See Also

### Customizing Rendered Appearance

- [litPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [doubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [fillMode](scnmaterial/fillmode.md)
- [SCNFillMode](scnfillmode.md)
