> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute/starttime](https://developer.apple.com/documentation/scenekit/scnscene/attribute/starttime)

# startTime (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
static let startTime: SCNScene.Attribute
```

<a id="Discussion"></a>

## Discussion

A floating-point value (in an [NSNumber](../../../foundation/nsnumber.md) object) for the start time of the scene.

## See Also

### Type Properties

- [endTime](endtime.md)
- [frameRate](framerate.md): A floating-point value for the frame rate of the scene.
- [upAxis](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.

# SCNSceneStartTimeAttributeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern SCNSceneAttribute const SCNSceneStartTimeAttributeKey;
```

<a id="Discussion"></a>

## Discussion

A floating-point value (in an [NSNumber](../../../foundation/nsnumber.md) object) for the start time of the scene.

## See Also

### Type Properties

- [SCNSceneEndTimeAttributeKey](endtime.md)
- [SCNSceneFrameRateAttributeKey](framerate.md): A floating-point value for the frame rate of the scene.
- [SCNSceneUpAxisAttributeKey](upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.
