> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runoptions/stoptrackedraycasts](https://developer.apple.com/documentation/arkit/arsession/runoptions/stoptrackedraycasts)

# stopTrackedRaycasts (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An option to stop all active tracked raycasts.

## Declaration

```swift
static var stopTrackedRaycasts: ARSession.RunOptions { get }
```

<a id="Discussion"></a>

## Discussion

By default, when you call the [run(\_:options:)](../run%28__options_%29.md) method on a session that is running or has run before, the session keeps tracking any [ARTrackedRaycast](../../artrackedraycast.md) objects that you previously added by calling [trackedRaycast(\_:updateHandler:)](../trackedraycast%28__updatehandler_%29.md).

Use [stopTrackedRaycasts](stoptrackedraycasts.md) if you want to stop all active tracked raycasts. Alternatively, you can stop individual raycasts by calling [stopTracking()](../../artrackedraycast/stoptracking%28%29.md) on individual raycasts.

## See Also

### Run Options

- [resetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [removeExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [resetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.

# ARSessionRunOptionStopTrackedRaycasts (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option to stop all active tracked raycasts.

## Declaration

```objectivec
ARSessionRunOptionStopTrackedRaycasts
```

<a id="Discussion"></a>

## Discussion

By default, when you call the [runWithConfiguration:options:](../run%28__options_%29.md) method on a session that is running or has run before, the session keeps tracking any [ARTrackedRaycast](../../artrackedraycast.md) objects that you previously added by calling [trackedRaycast:updateHandler:](../trackedraycast%28__updatehandler_%29.md).

Use [ARSessionRunOptionStopTrackedRaycasts](stoptrackedraycasts.md) if you want to stop all active tracked raycasts. Alternatively, you can stop individual raycasts by calling [stopTracking](../../artrackedraycast/stoptracking%28%29.md) on individual raycasts.

## See Also

### Run Options

- [ARSessionRunOptionResetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [ARSessionRunOptionRemoveExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [ARSessionRunOptionResetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.
