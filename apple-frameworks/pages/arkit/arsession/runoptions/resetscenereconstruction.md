> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runoptions/resetscenereconstruction](https://developer.apple.com/documentation/arkit/arsession/runoptions/resetscenereconstruction)

# resetSceneReconstruction (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An option to reset the scene mesh.

## Declaration

```swift
static var resetSceneReconstruction: ARSession.RunOptions { get }
```

<a id="Discussion"></a>

## Discussion

When you reset scene reconstruction, ARKit removes any existing mesh anchors ([ARMeshAnchor](../../armeshanchor.md)) from the session.

## See Also

### Run Options

- [resetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [removeExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [stopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.

# ARSessionRunOptionResetSceneReconstruction (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option to reset the scene mesh.

## Declaration

```objectivec
ARSessionRunOptionResetSceneReconstruction
```

<a id="Discussion"></a>

## Discussion

When you reset scene reconstruction, ARKit removes any existing mesh anchors ([ARMeshAnchor](../../armeshanchor.md)) from the session.

## See Also

### Run Options

- [ARSessionRunOptionResetTracking](resettracking.md): An option to reset the device’s position from the session’s previous run.
- [ARSessionRunOptionRemoveExistingAnchors](removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [ARSessionRunOptionStopTrackedRaycasts](stoptrackedraycasts.md): An option to stop all active tracked raycasts.
