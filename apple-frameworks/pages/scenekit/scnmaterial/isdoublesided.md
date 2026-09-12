> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/isdoublesided](https://developer.apple.com/documentation/scenekit/scnmaterial/isdoublesided)

# isDoubleSided (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit renders both front and back faces of a surface.

## Declaration

```swift
var isDoubleSided: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Polygons in a SceneKit mesh are, by default, single-sided. Each one contain a *normal vector*, which identifies the side of the polygon that’s the visible side. SceneKit uses that normal vector to determine which polygons are *front faces* that point toward the camera, and which are *back faces* that point away from it. When `doubleSided` is [false](https://developer.apple.com/documentation/swift/false) (the default value), SceneKit only renders front faces to improve performance.

If you change this property’s value to [true](https://developer.apple.com/documentation/swift/true), SceneKit renders both the front and back surfaces of every polygon.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Customizing Rendered Appearance

- [isLitPerPixel](islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [cullMode](cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)

# doubleSided (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit renders both front and back faces of a surface.

## Declaration

```objectivec
@property (nonatomic, getter=isDoubleSided) BOOL doubleSided;
```

<a id="Discussion"></a>

## Discussion

Polygons in a SceneKit mesh are, by default, single-sided. Each one contain a *normal vector*, which identifies the side of the polygon that’s the visible side. SceneKit uses that normal vector to determine which polygons are *front faces* that point toward the camera, and which are *back faces* that point away from it. When `doubleSided` is [false](https://developer.apple.com/documentation/swift/false) (the default value), SceneKit only renders front faces to improve performance.

If you change this property’s value to [true](https://developer.apple.com/documentation/swift/true), SceneKit renders both the front and back surfaces of every polygon.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Customizing Rendered Appearance

- [litPerPixel](islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [cullMode](cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](../scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](cullmode.md) property.
- [fillMode](fillmode.md)
- [SCNFillMode](../scnfillmode.md)
