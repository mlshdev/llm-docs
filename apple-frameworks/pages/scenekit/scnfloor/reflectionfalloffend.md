> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor/reflectionfalloffend](https://developer.apple.com/documentation/scenekit/scnfloor/reflectionfalloffend)

# reflectionFalloffEnd (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance from the floor at which scene contents are no longer reflected. Animatable.

## Declaration

```swift
var reflectionFalloffEnd: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit can render reflections on a floor using an opacity gradient (or falloff). With this gradient, the reflections of scene contents closer to the floor are more visible than those of scene contents farther from it. This property marks the distance at which the opacity gradient ends. Scene contents farther away from the floor than this distance do not appear in the reflection.

If this property’s value is `0.0` (the default), SceneKit does not render the reflection with an opacity falloff—all scene contents are visible in the reflection regardless of their distance from the floor.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.

# reflectionFalloffEnd (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The distance from the floor at which scene contents are no longer reflected. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat reflectionFalloffEnd;
```

<a id="Discussion"></a>

## Discussion

SceneKit can render reflections on a floor using an opacity gradient (or falloff). With this gradient, the reflections of scene contents closer to the floor are more visible than those of scene contents farther from it. This property marks the distance at which the opacity gradient ends. Scene contents farther away from the floor than this distance do not appear in the reflection.

If this property’s value is `0.0` (the default), SceneKit does not render the reflection with an opacity falloff—all scene contents are visible in the reflection regardless of their distance from the floor.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.
