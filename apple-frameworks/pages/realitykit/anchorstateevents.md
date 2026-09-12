> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorstateevents](https://developer.apple.com/documentation/realitykit/anchorstateevents)

# AnchorStateEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Events that trigger on an entity to indicate a change in anchor state.

## Declaration

```swift
enum AnchorStateEvents
```

<a id="overview"></a>

## Overview

You need to set up [SpatialTrackingSession](spatialtrackingsession.md) to listen for this event.

## Topics

### Structures

- [AnchorStateEvents.DidAnchor](anchorstateevents/didanchor.md): Event that triggers on an entity after the entity is anchored with certain reasons.
- [AnchorStateEvents.DidFailToAnchor](anchorstateevents/didfailtoanchor.md): Event that triggers on an entity when pending anchor encounters an error.
- [AnchorStateEvents.WillUnanchor](anchorstateevents/willunanchor.md): Event that triggers on an entity before the entity is unanchored with certain reasons.

## See Also

### Scene and entity lifecycle events

- [SceneEvents](sceneevents.md): Events the scene invokes.
- [ComponentEvents](componentevents.md): Provides the events related to components.
