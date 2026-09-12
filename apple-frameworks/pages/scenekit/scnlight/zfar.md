> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/zfar](https://developer.apple.com/documentation/scenekit/scnlight/zfar)

# zFar (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum distance between the light and a visible surface for casting shadows.

## Declaration

```swift
var zFar: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A spotlight casts shadows if its [castsShadow](castsshadow.md) property is [true](https://developer.apple.com/documentation/swift/true). If a surface is farther from the light than this distance, shadows are not cast against the surface.

The default value is `100.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# zFar (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The maximum distance between the light and a visible surface for casting shadows.

## Declaration

```objectivec
@property (nonatomic) CGFloat zFar;
```

<a id="Discussion"></a>

## Discussion

A spotlight casts shadows if its [castsShadow](castsshadow.md) property is [true](https://developer.apple.com/documentation/swift/true). If a surface is farther from the light than this distance, shadows are not cast against the surface.

The default value is `100.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
