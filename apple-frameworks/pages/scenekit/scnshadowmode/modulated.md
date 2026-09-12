> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadowmode/modulated](https://developer.apple.com/documentation/scenekit/scnshadowmode/modulated)

# SCNShadowMode.modulated (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.

## Declaration

```swift
case modulated
```

<a id="Discussion"></a>

## Discussion

Typically, you use this mode to create a low-accuracy, high-performance shadow under a game character or similar scene element: Use an image of a radial gradient (black to white) for the light’s [gobo](../scnlight/gobo.md) property, and use [categoryBitMask](../scnlight/categorybitmask.md) properties to prevent the shadow image from appearing on the character.

## See Also

### Constants

- [SCNShadowMode.forward](forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowMode.deferred](deferred.md): SceneKit renders shadows in a postprocessing pass.

# SCNShadowModeModulated (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

SceneKit renders shadows by projecting the light’s [gobo](../scnlight/gobo.md) image. The light does not illuminate the scene.

## Declaration

```objectivec
SCNShadowModeModulated
```

<a id="Discussion"></a>

## Discussion

Typically, you use this mode to create a low-accuracy, high-performance shadow under a game character or similar scene element: Use an image of a radial gradient (black to white) for the light’s [gobo](../scnlight/gobo.md) property, and use [categoryBitMask](../scnlight/categorybitmask.md) properties to prevent the shadow image from appearing on the character.

## See Also

### Constants

- [SCNShadowModeForward](forward.md): SceneKit renders shadows during lighting computations.
- [SCNShadowModeDeferred](deferred.md): SceneKit renders shadows in a postprocessing pass.
