> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadowmode/deferred](https://developer.apple.com/documentation/scenekit/scnshadowmode/deferred)

# SCNShadowMode.deferred (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

SceneKit renders shadows in a postprocessing pass.

## Declaration

```swift
case deferred
```

<a id="Discussion"></a>

## Discussion

In the mode, SceneKit blends shadows into the final image after the main rendering pass, so shadows can be of any color.

## See Also

### Constants

- [SCNShadowMode.forward](forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowMode.modulated](modulated.md): SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.

# SCNShadowModeDeferred (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

SceneKit renders shadows in a postprocessing pass.

## Declaration

```objectivec
SCNShadowModeDeferred
```

<a id="Discussion"></a>

## Discussion

In the mode, SceneKit blends shadows into the final image after the main rendering pass, so shadows can be of any color.

## See Also

### Constants

- [SCNShadowModeForward](forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowModeModulated](modulated.md): SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.
