> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/islitperpixel](https://developer.apple.com/documentation/scenekit/scnmaterial/islitperpixel)

# isLitPerPixel (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.

## Declaration

```swift
var isLitPerPixel: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit performs lighting calculations independently for each rendered pixel. This approach provides better rendering quality, but can adversely impact rendering performance.

If you change this property’s value to [false](https://developer.apple.com/documentation/swift/false), SceneKit performs lighting calculations for each vertex in a geometry, and allows the GPU to interpolate lighting results across the pixels in between vertices. Depending on the shape and vertex count of a geometry’s surface and the material properties being rendered, this approach may improve rendering performance without much noticeable impact on visual quality.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Customizing Rendered Appearance

- [isDoubleSided](isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)

# litPerPixel (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.

## Declaration

```objectivec
@property (nonatomic, getter=isLitPerPixel) BOOL litPerPixel;
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit performs lighting calculations independently for each rendered pixel. This approach provides better rendering quality, but can adversely impact rendering performance.

If you change this property’s value to [false](https://developer.apple.com/documentation/swift/false), SceneKit performs lighting calculations for each vertex in a geometry, and allows the GPU to interpolate lighting results across the pixels in between vertices. Depending on the shape and vertex count of a geometry’s surface and the material properties being rendered, this approach may improve rendering performance without much noticeable impact on visual quality.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Customizing Rendered Appearance

- [doubleSided](isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)
