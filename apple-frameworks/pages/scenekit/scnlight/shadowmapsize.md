> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/shadowmapsize](https://developer.apple.com/documentation/scenekit/scnlight/shadowmapsize)

# shadowMapSize (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The size of the shadow map image that SceneKit renders when creating shadows.

## Declaration

```swift
var shadowMapSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit produces shadows by rendering the silhouettes of scene geometry into a 2D shadow map image and then projecting that image into the rendered scene. A larger shadow map image produces more detailed shadows at a higher cost to rendering performance; a smaller shadow map renders more quickly but results in pixelation at the edges of shadows.

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md), specifying that SceneKit chooses a shadow map size automatically.

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# shadowMapSize (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The size of the shadow map image that SceneKit renders when creating shadows.

## Declaration

```objectivec
@property (nonatomic) CGSize shadowMapSize;
```

<a id="Discussion"></a>

## Discussion

SceneKit produces shadows by rendering the silhouettes of scene geometry into a 2D shadow map image and then projecting that image into the rendered scene. A larger shadow map image produces more detailed shadows at a higher cost to rendering performance; a smaller shadow map renders more quickly but results in pixelation at the edges of shadows.

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md), specifying that SceneKit chooses a shadow map size automatically.

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [shadowBias](shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
