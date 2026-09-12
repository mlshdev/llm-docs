> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadowmode](https://developer.apple.com/documentation/scenekit/scnshadowmode)

# SCNShadowMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](scnlight/shadowmode.md) property.

## Declaration

```swift
enum SCNShadowMode
```

<a id="overview"></a>

## Overview

Each shadow mode may have a positive or negative effect on rendering performance, depending on the contents of the scene. Test your app to determine which shadow mode provides the best balance between performance and quality for the scenes you want to render.

## Topics

### Constants

- [SCNShadowMode.forward](scnshadowmode/forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowMode.deferred](scnshadowmode/deferred.md): SceneKit renders shadows in a postprocessing pass.
- [SCNShadowMode.modulated](scnshadowmode/modulated.md): SceneKit renders shadows by projecting the light’s [gobo](scnlight/gobo.md) image. The light does not illuminate the scene.

### Initializers

- [init(rawValue:)](scnshadowmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](scnlight/castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](scnlight/shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](scnlight/shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](scnlight/shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](scnlight/shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](scnlight/shadowmode.md): The mode SceneKit uses to render shadows.
- [shadowBias](scnlight/shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](scnlight/orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](scnlight/zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](scnlight/znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# SCNShadowMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](scnlight/shadowmode.md) property.

## Declaration

```objectivec
enum SCNShadowMode : NSInteger;
```

<a id="overview"></a>

## Overview

Each shadow mode may have a positive or negative effect on rendering performance, depending on the contents of the scene. Test your app to determine which shadow mode provides the best balance between performance and quality for the scenes you want to render.

## Topics

### Constants

- [SCNShadowModeForward](scnshadowmode/forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowModeDeferred](scnshadowmode/deferred.md): SceneKit renders shadows in a postprocessing pass.
- [SCNShadowModeModulated](scnshadowmode/modulated.md): SceneKit renders shadows by projecting the light’s [gobo](scnlight/gobo.md) image. The light does not illuminate the scene.

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](scnlight/castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](scnlight/shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](scnlight/shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](scnlight/shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](scnlight/shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](scnlight/shadowmode.md): The mode SceneKit uses to render shadows.
- [shadowBias](scnlight/shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](scnlight/orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](scnlight/zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](scnlight/znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
