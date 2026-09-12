> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/shadowbias](https://developer.apple.com/documentation/scenekit/scnlight/shadowbias)

# shadowBias (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The amount of correction to apply to the shadow to prevent rendering artifacts.

## Declaration

```swift
var shadowBias: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Rendering shadows from a shadow map can result in artifacts where the shadow color does not appear on all pixels in a shadowed surface as intended. (This effect is typically called *shadow acne*.) This property specifies the error margin SceneKit uses to correct such artifacts.

The default value is `1.0`.

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

# shadowBias (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The amount of correction to apply to the shadow to prevent rendering artifacts.

## Declaration

```objectivec
@property (nonatomic) CGFloat shadowBias;
```

<a id="Discussion"></a>

## Discussion

Rendering shadows from a shadow map can result in artifacts where the shadow color does not appear on all pixels in a shadowed surface as intended. (This effect is typically called *shadow acne*.) This property specifies the error margin SceneKit uses to correct such artifacts.

The default value is `1.0`.

## See Also

### Managing Shadows Cast by the Light

- [castsShadow](castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](../scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](shadowmode.md) property.
- [orthographicScale](orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.
