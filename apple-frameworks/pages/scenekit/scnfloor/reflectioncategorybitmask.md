> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor/reflectioncategorybitmask](https://developer.apple.com/documentation/scenekit/scnfloor/reflectioncategorybitmask)

# reflectionCategoryBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A mask that defines which categories of other objects show reflections on the floor.

## Declaration

```swift
var reflectionCategoryBitMask: Int { get set }
```

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.

# reflectionCategoryBitMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A mask that defines which categories of other objects show reflections on the floor.

## Declaration

```objectivec
@property (nonatomic) NSUInteger reflectionCategoryBitMask;
```

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionResolutionScaleFactor](reflectionresolutionscalefactor.md): The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.
