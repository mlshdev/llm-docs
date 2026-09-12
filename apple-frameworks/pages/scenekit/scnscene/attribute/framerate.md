> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute/framerate](https://developer.apple.com/documentation/scenekit/scnscene/attribute/framerate)

# frameRate (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A floating-point value for the frame rate of the scene.

## Declaration

```swift
static let frameRate: SCNScene.Attribute
```

<a id="Discussion"></a>

## Discussion

This value (in an [NSNumber](../../../foundation/nsnumber.md) object) may be present in scenes loaded from scene files produced using external tools, but has no effect on SceneKit’s rendering of the scene.

## See Also

### Type Properties

- [endTime](endtime.md)
- [startTime](starttime.md)
- [upAxis](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.

# SCNSceneFrameRateAttributeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A floating-point value for the frame rate of the scene.

## Declaration

```objectivec
extern SCNSceneAttribute const SCNSceneFrameRateAttributeKey;
```

<a id="Discussion"></a>

## Discussion

This value (in an [NSNumber](../../../foundation/nsnumber.md) object) may be present in scenes loaded from scene files produced using external tools, but has no effect on SceneKit’s rendering of the scene.

## See Also

### Type Properties

- [SCNSceneEndTimeAttributeKey](endtime.md)
- [SCNSceneStartTimeAttributeKey](starttime.md)
- [SCNSceneUpAxisAttributeKey](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.
