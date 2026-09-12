> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneevents](https://developer.apple.com/documentation/realitykit/sceneevents)

# SceneEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Events the scene invokes.

## Declaration

```swift
enum SceneEvents
```

<a id="overview"></a>

## Overview

For more information on subscribing to scene events, see `RealityKit/Scene/Event`.

## Topics

### Detecting scene-level updates

- [SceneEvents.Update](sceneevents/update.md): An event invoked once per frame interval that you can use to execute custom logic for each frame.
- [SceneEvents.AnchoredStateChanged](sceneevents/anchoredstatechanged.md): An event invoked when the anchored state of an anchoring entity changes.

### Detecting scene hierarchy changes

- [SceneEvents.DidAddEntity](sceneevents/didaddentity.md): Raised after an entity is added to the scene.
- [SceneEvents.DidReparentEntity](sceneevents/didreparententity.md): Raised after an entity has been reparented within the same scene.
- [SceneEvents.WillRemoveEntity](sceneevents/willremoveentity.md): Raised before an entity is removed from the scene.
- [SceneEvents.DidActivateEntity](sceneevents/didactivateentity.md): Raised after an entity becomes active.
- [SceneEvents.WillDeactivateEntity](sceneevents/willdeactivateentity.md): Raised before an entity becomes inactive.

### Structures

- [SceneEvents.TrackingStateUpdate](sceneevents/trackingstateupdate.md): An event type that signals a change of device tracking state.

## See Also

### Scene and entity lifecycle events

- [AnchorStateEvents](anchorstateevents.md): Events that trigger on an entity to indicate a change in anchor state.
- [ComponentEvents](componentevents.md): Provides the events related to components.
