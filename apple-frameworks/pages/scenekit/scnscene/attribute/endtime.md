> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute/endtime](https://developer.apple.com/documentation/scenekit/scnscene/attribute/endtime)

# endTime (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
static let endTime: SCNScene.Attribute
```

<a id="Discussion"></a>

## Discussion

A floating-point value (in an [NSNumber](../../../foundation/nsnumber.md) object) for the end time of the scene.

## See Also

### Type Properties

- [frameRate](framerate.md): A floating-point value for the frame rate of the scene.
- [startTime](starttime.md)
- [upAxis](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.

# SCNSceneEndTimeAttributeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern SCNSceneAttribute const SCNSceneEndTimeAttributeKey;
```

<a id="Discussion"></a>

## Discussion

A floating-point value (in an [NSNumber](../../../foundation/nsnumber.md) object) for the end time of the scene.

## See Also

### Type Properties

- [SCNSceneFrameRateAttributeKey](framerate.md): A floating-point value for the frame rate of the scene.
- [SCNSceneStartTimeAttributeKey](starttime.md)
- [SCNSceneUpAxisAttributeKey](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.
