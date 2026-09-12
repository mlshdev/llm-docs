> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runoptions/resettracking](https://developer.apple.com/documentation/arkit/arsession/runoptions/resettracking)

# resetTracking (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An option to reset the device’s position from the session’s previous run.

## Declaration

```swift
static var resetTracking: ARSession.RunOptions { get }
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

By default, when you call the [run(\_:options:)](../run%28__options_%29.md) method on a session that has run before or is already running, the session resumes device position tracking from its last known state. (For example, an [ARAnchor](../../aranchor.md) object keeps its apparent position relative to the camera.) When you call the [run(\_:options:)](../run%28__options_%29.md) method with a configuration of the same type as the session’s current configuration, you can add this option to force device position tracking to return to its initial state.

When you call the [run(\_:options:)](../run%28__options_%29.md) method with a configuration of a different type than the session’s current configuration, the session always resets tracking (that is, this option is implicitly enabled).

In either case, when you reset tracking, ARKit also removes any existing anchors from the session.

## See Also

### Run Options

- [removeExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [stopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [resetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.

# ARSessionRunOptionResetTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option to reset the device’s position from the session’s previous run.

## Declaration

```objectivec
ARSessionRunOptionResetTracking
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

By default, when you call the [runWithConfiguration:options:](../run%28__options_%29.md) method on a session that has run before or is already running, the session resumes device position tracking from its last known state. (For example, an [ARAnchor](../../aranchor.md) object keeps its apparent position relative to the camera.) When you call the [runWithConfiguration:options:](../run%28__options_%29.md) method with a configuration of the same type as the session’s current configuration, you can add this option to force device position tracking to return to its initial state.

When you call the [runWithConfiguration:options:](../run%28__options_%29.md) method with a configuration of a different type than the session’s current configuration, the session always resets tracking (that is, this option is implicitly enabled).

In either case, when you reset tracking, ARKit also removes any existing anchors from the session.

## See Also

### Run Options

- [ARSessionRunOptionRemoveExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [ARSessionRunOptionStopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [ARSessionRunOptionResetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.
