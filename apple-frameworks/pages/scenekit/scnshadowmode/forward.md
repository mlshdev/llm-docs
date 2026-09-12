> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadowmode/forward](https://developer.apple.com/documentation/scenekit/scnshadowmode/forward)

# SCNShadowMode.forward (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

SceneKit renders shadows during lighting computations.

## Declaration

```swift
case forward
```

<a id="Discussion"></a>

## Discussion

In this mode, the color components of the light’s [shadowColor](../scnlight/shadowcolor.md) property do not apply. The color’s alpha component determines the intensity of shadows.

## See Also

### Constants

- [SCNShadowMode.deferred](deferred.md): SceneKit renders shadows in a postprocessing pass.
- [SCNShadowMode.modulated](modulated.md): SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.

# SCNShadowModeForward (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

SceneKit renders shadows during lighting computations.

## Declaration

```objectivec
SCNShadowModeForward
```

<a id="Discussion"></a>

## Discussion

In this mode, the color components of the light’s [shadowColor](../scnlight/shadowcolor.md) property do not apply. The color’s alpha component determines the intensity of shadows.

## See Also

### Constants

- [SCNShadowModeDeferred](deferred.md): SceneKit renders shadows in a postprocessing pass.
- [SCNShadowModeModulated](modulated.md): SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.
