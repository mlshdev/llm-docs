> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor/reflectionresolutionscalefactor](https://developer.apple.com/documentation/scenekit/scnfloor/reflectionresolutionscalefactor)

# reflectionResolutionScaleFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.

## Declaration

```swift
var reflectionResolutionScaleFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit creates a reflection effect by rendering the scene twice. First, it renders the scene into an offscreen buffer, using a point of view whose position is the reflection of the camera’s position. Next, it renders the scene from the camera’s point of view, using the offscreen buffer as a texture map for the floor’s surface. Rendering the scene twice incurs a performance cost. Reducing the resolution of the offscreen buffer reduces this cost but causes the reflected image to appear blurry.

The default scale factor is `1.0` in macOS and `0.5` in iOS.

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.

# reflectionResolutionScaleFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The resolution scale factor of the offscreen buffer that SceneKit uses to render reflections.

## Declaration

```objectivec
@property (nonatomic) CGFloat reflectionResolutionScaleFactor;
```

<a id="Discussion"></a>

## Discussion

SceneKit creates a reflection effect by rendering the scene twice. First, it renders the scene into an offscreen buffer, using a point of view whose position is the reflection of the camera’s position. Next, it renders the scene from the camera’s point of view, using the offscreen buffer as a texture map for the floor’s surface. Rendering the scene twice incurs a performance cost. Reducing the resolution of the offscreen buffer reduces this cost but causes the reflected image to appear blurry.

The default scale factor is `1.0` in macOS and `0.5` in iOS.

## See Also

### Adding Reflections to a Floor

- [reflectivity](reflectivity.md): The intensity of the scene’s reflection on the floor. Animatable.
- [reflectionFalloffEnd](reflectionfalloffend.md): The distance from the floor at which scene contents are no longer reflected. Animatable.
- [reflectionFalloffStart](reflectionfalloffstart.md): The distance from the floor at which scene contents are reflected at full intensity. Animatable.
- [reflectionCategoryBitMask](reflectioncategorybitmask.md): A mask that defines which categories of other objects show reflections on the floor.
