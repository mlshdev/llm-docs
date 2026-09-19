> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/synchronizationevents

# SynchronizationEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Events associated with network synchronization of scene information.

## Declaration

```swift
enum SynchronizationEvents
```

<a id="overview"></a>

## Overview

For more information on subscribing to scene events, see `RealityKit/Scene/Event`.

## Topics

### Detecting ownership updates

- [SynchronizationEvents.OwnershipChanged](synchronizationevents/ownershipchanged.md): The event raised when ownership of an entity changes.
- [SynchronizationEvents.OwnershipRequest](synchronizationevents/ownershiprequest.md): The event raised when a network peer wants to gain ownership of an entity.
