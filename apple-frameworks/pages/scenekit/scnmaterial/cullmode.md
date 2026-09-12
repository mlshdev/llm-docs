> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/cullmode](https://developer.apple.com/documentation/scenekit/scnmaterial/cullmode)

# cullMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mode determining which faces of a surface SceneKit renders. Animatable.

## Declaration

```swift
var cullMode: SCNCullMode { get set }
```

<a id="Discussion"></a>

## Discussion

The vertex data and normal vectors in a geometry designate which side of each polygon is to be considered its front face, and the geometry’s orientation with respect to the camera determines which front surfaces are currently visible. Typically, back-facing surfaces are found only on the interior of a closed geometry, obscured by front-facing surfaces, so rendering these surfaces has a performance cost but no visible effect.

This property’s default value is [SCNCullBack](../scncullback.md), specifying that SceneKit should cull, or not render, back-facing surfaces. You can change this property’s value to cause SceneKit to render only the back surfaces of a material instead. See [SCNCullMode](../scncullmode.md) for available values.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state

## See Also

### Customizing Rendered Appearance

- [isLitPerPixel](islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [isDoubleSided](isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)

# cullMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode determining which faces of a surface SceneKit renders. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNCullMode cullMode;
```

<a id="Discussion"></a>

## Discussion

The vertex data and normal vectors in a geometry designate which side of each polygon is to be considered its front face, and the geometry’s orientation with respect to the camera determines which front surfaces are currently visible. Typically, back-facing surfaces are found only on the interior of a closed geometry, obscured by front-facing surfaces, so rendering these surfaces has a performance cost but no visible effect.

This property’s default value is [SCNCullBack](../scncullback.md), specifying that SceneKit should cull, or not render, back-facing surfaces. You can change this property’s value to cause SceneKit to render only the back surfaces of a material instead. See [SCNCullMode](../scncullmode.md) for available values.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state

## See Also

### Customizing Rendered Appearance

- [litPerPixel](islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [doubleSided](isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)
