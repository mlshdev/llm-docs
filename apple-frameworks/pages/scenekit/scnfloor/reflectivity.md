> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor/reflectivity](https://developer.apple.com/documentation/scenekit/scnfloor/reflectivity)

# reflectivity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The intensity of the scene’s reflection on the floor. Animatable.

## Declaration

```swift
var reflectivity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is greater than zero, SceneKit renders a reflection for all contents of the scene located above the floor.

A lower reflectivity causes the rendered reflection to appear with less intensity, allowing the floor’s material to be more visible. At higher reflectivity values, the rendered reflection appears with greater intensity than the floor’s own material. The default reflectivity is `0.25`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Reflections to a Floor

- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.

# reflectivity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The intensity of the scene’s reflection on the floor. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat reflectivity;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is greater than zero, SceneKit renders a reflection for all contents of the scene located above the floor.

A lower reflectivity causes the rendered reflection to appear with less intensity, allowing the floor’s material to be more visible. At higher reflectivity values, the rendered reflection appears with greater intensity than the floor’s own material. The default reflectivity is `0.25`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Reflections to a Floor

- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.
