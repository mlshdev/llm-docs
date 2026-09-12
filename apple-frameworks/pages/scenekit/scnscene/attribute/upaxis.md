> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute/upaxis](https://developer.apple.com/documentation/scenekit/scnscene/attribute/upaxis)

# upAxis (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An `SCNVector3` structure specifying the orientation of the scene.

## Declaration

```swift
static let upAxis: SCNScene.Attribute
```

<a id="Discussion"></a>

## Discussion

The [SCNVector3](../../scnvector3.md)structure (in an [NSValue](../../../foundation/nsvalue.md) object) may be present in scenes loaded from scene files produced using external tools, but has no effect on SceneKit’s processing of the scene. Use this vector when combining elements from different scenes so that they appear in their expected orientation.

## See Also

### Type Properties

- [endTime](endtime.md)
- [frameRate](framerate.md): A floating-point value for the frame rate of the scene.
- [startTime](starttime.md)

# SCNSceneUpAxisAttributeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An `SCNVector3` structure specifying the orientation of the scene.

## Declaration

```objectivec
extern SCNSceneAttribute const SCNSceneUpAxisAttributeKey;
```

<a id="Discussion"></a>

## Discussion

The [SCNVector3](../../scnvector3.md)structure (in an [NSValue](../../../foundation/nsvalue.md) object) may be present in scenes loaded from scene files produced using external tools, but has no effect on SceneKit’s processing of the scene. Use this vector when combining elements from different scenes so that they appear in their expected orientation.

## See Also

### Type Properties

- [SCNSceneEndTimeAttributeKey](endtime.md)
- [SCNSceneFrameRateAttributeKey](framerate.md): A floating-point value for the frame rate of the scene.
- [SCNSceneStartTimeAttributeKey](starttime.md)
