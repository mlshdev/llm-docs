> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/castsshadow](https://developer.apple.com/documentation/scenekit/scnlight/castsshadow)

# castsShadow (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the light casts shadows.

## Declaration

```swift
var castsShadow: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Geometries illuminated by the light cast shadows only if the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the [type](type.md) property of the light is [spot](lighttype/spot.md) or [directional](lighttype/directional.md). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Shadows Cast by the Light

- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# castsShadow (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the light casts shadows.

## Declaration

```objectivec
@property (nonatomic) BOOL castsShadow;
```

<a id="Discussion"></a>

## Discussion

Geometries illuminated by the light cast shadows only if the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the [type](type.md) property of the light is [SCNLightTypeSpot](lighttype/spot.md) or [SCNLightTypeDirectional](lighttype/directional.md). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Shadows Cast by the Light

- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
