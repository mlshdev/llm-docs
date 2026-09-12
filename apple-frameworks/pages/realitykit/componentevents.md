> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/componentevents](https://developer.apple.com/documentation/realitykit/componentevents)

# ComponentEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Provides the events related to components.

## Declaration

```swift
enum ComponentEvents
```

<a id="overview"></a>

## Overview

For more information on subscribing to scene events, see `RealityKit/Scene/Event`.

## Topics

### Detecting component changes

- [ComponentEvents.DidAdd](componentevents/didadd.md): Event raised after a component has been added to an entity,
- [ComponentEvents.DidChange](componentevents/didchange.md): Event raised after a component has been modified.
- [ComponentEvents.WillRemove](componentevents/willremove.md): Event raised before a component is removed from an entity.

### Detecting component activations

- [ComponentEvents.DidActivate](componentevents/didactivate.md): Event raised after a component has been activated.
- [ComponentEvents.WillDeactivate](componentevents/willdeactivate.md): Event raised before a component is deactivated.

## See Also

### Scene and entity lifecycle events

- [SceneEvents](sceneevents.md): Events the scene invokes.
- [AnchorStateEvents](anchorstateevents.md): Events that trigger on an entity to indicate a change in anchor state.
