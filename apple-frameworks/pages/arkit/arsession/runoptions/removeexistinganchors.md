> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runoptions/removeexistinganchors](https://developer.apple.com/documentation/arkit/arsession/runoptions/removeexistinganchors)

# removeExistingAnchors (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An option to remove any anchor objects associated with the session’s previous run.

## Declaration

```swift
static var removeExistingAnchors: ARSession.RunOptions { get }
```

<a id="Discussion"></a>

## Discussion

By default, when you call the [run(\_:options:)](../run%28__options_%29.md) method on a session that has run before or is already running, the session keeps any [ARAnchor](../../aranchor.md) objects that you previously added. That is, objects in the AR scene keep their apparent real-world positions relative to the device (unless you enable the [resetTracking](resettracking.md) option).

Enable the [removeExistingAnchors](removeexistinganchors.md) option if changing session configurations should invalidate the apparent real-world positions of objects in the AR scene. For example, if you’ve added virtual content to the AR scene whose positions are correlated to real-world objects, remove those anchors so you can reevaluate appropriate real-world positions. On the other hand, if the virtual content in your scene needs to track real-world positions only when that content first appears and can move freely thereafter, you can disable this option to keep the anchors.

## See Also

### Run Options

- [resetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [stopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [resetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.

# ARSessionRunOptionRemoveExistingAnchors (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option to remove any anchor objects associated with the session’s previous run.

## Declaration

```objectivec
ARSessionRunOptionRemoveExistingAnchors
```

<a id="Discussion"></a>

## Discussion

By default, when you call the [runWithConfiguration:options:](../run%28__options_%29.md) method on a session that has run before or is already running, the session keeps any [ARAnchor](../../aranchor.md) objects that you previously added. That is, objects in the AR scene keep their apparent real-world positions relative to the device (unless you enable the [ARSessionRunOptionResetTracking](resettracking.md) option).

Enable the [ARSessionRunOptionRemoveExistingAnchors](removeexistinganchors.md) option if changing session configurations should invalidate the apparent real-world positions of objects in the AR scene. For example, if you’ve added virtual content to the AR scene whose positions are correlated to real-world objects, remove those anchors so you can reevaluate appropriate real-world positions. On the other hand, if the virtual content in your scene needs to track real-world positions only when that content first appears and can move freely thereafter, you can disable this option to keep the anchors.

## See Also

### Run Options

- [ARSessionRunOptionResetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [ARSessionRunOptionStopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [ARSessionRunOptionResetSceneReconstruction](resetscenereconstruction.md): An option to reset the scene mesh.
