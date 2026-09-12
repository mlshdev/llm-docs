> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/fogenddistance](https://developer.apple.com/documentation/scenekit/scnscene/fogenddistance)

# fogEndDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.

## Declaration

```swift
var fogEndDistance: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A fog effect causes scene contents to become less visible the farther they are from the [pointOfView](../scnscenerenderer/pointofview.md) node currently used for rendering. At distances less than the value of the [fogStartDistance](fogstartdistance.md) property, scene contents are fully visible. At greater distances, SceneKit blends the rendered scene contents with a constant color (specified by the [fogColor](fogcolor.md) property). At distances greater than the [fogEndDistance](fogenddistance.md) property, the scene contents fade away completely and only the fog color is visible. Use fog to add atmospheric effects to your app or game, or to improve rendering performance by hiding parts of the scene that are far away from the current point of view.

The default end distance of `0.0` disables the fog effect. Change this property’s value to enable fog.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Fog to a Scene

- [fogStartDistance](fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogDensityExponent](fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.
- [fogColor](fogcolor.md): The color of the fog effect to be rendered with the scene. Animatable.

# fogEndDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat fogEndDistance;
```

<a id="Discussion"></a>

## Discussion

A fog effect causes scene contents to become less visible the farther they are from the [pointOfView](../scnscenerenderer/pointofview.md) node currently used for rendering. At distances less than the value of the [fogStartDistance](fogstartdistance.md) property, scene contents are fully visible. At greater distances, SceneKit blends the rendered scene contents with a constant color (specified by the [fogColor](fogcolor.md) property). At distances greater than the [fogEndDistance](fogenddistance.md) property, the scene contents fade away completely and only the fog color is visible. Use fog to add atmospheric effects to your app or game, or to improve rendering performance by hiding parts of the scene that are far away from the current point of view.

The default end distance of `0.0` disables the fog effect. Change this property’s value to enable fog.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Fog to a Scene

- [fogStartDistance](fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogDensityExponent](fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.
- [fogColor](fogcolor.md): The color of the fog effect to be rendered with the scene. Animatable.
