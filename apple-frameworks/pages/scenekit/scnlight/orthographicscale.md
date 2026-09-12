> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/orthographicscale](https://developer.apple.com/documentation/scenekit/scnlight/orthographicscale)

# orthographicScale (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The orthographic scale SceneKit uses when rendering the shadow map for a directional light.

## Declaration

```swift
var orthographicScale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit draws a shadow map image by rendering the scene from the point of view of the node containing the light. Directional lights ignore the [position](../scnnode/position.md) property of the node containing them because their light has a constant direction. Therefore, rendering a shadow map for a directional light requires an orthographic projection. Like the [orthographicScale](../scncamera/orthographicscale.md) property of a camera object, this property specifies the extent of the scene “visible to” the light when rendering the shadow map.

This property applies only if the light’s [type](type.md) property is [directional](lighttype/directional.md).

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
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# orthographicScale (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The orthographic scale SceneKit uses when rendering the shadow map for a directional light.

## Declaration

```objectivec
@property (nonatomic) CGFloat orthographicScale;
```

<a id="Discussion"></a>

## Discussion

SceneKit draws a shadow map image by rendering the scene from the point of view of the node containing the light. Directional lights ignore the [position](../scnnode/position.md) property of the node containing them because their light has a constant direction. Therefore, rendering a shadow map for a directional light requires an orthographic projection. Like the [orthographicScale](../scncamera/orthographicscale.md) property of a camera object, this property specifies the extent of the scene “visible to” the light when rendering the shadow map.

This property applies only if the light’s [type](type.md) property is [SCNLightTypeDirectional](lighttype/directional.md).

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
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
