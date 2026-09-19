> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/sceneevents/trackingstateupdate/state

# SceneEvents.TrackingStateUpdate.State

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Constants that specify the current tracking status.

## Declaration

```swift
enum State
```

## Topics

### Enumeration Cases

- [SceneEvents.TrackingStateUpdate.State.orientationTracked](state/orientationtracked.md): The device anchor is only tracking orientation.
- [SceneEvents.TrackingStateUpdate.State.tracked](state/tracked.md): The device anchor is tracking position and orientation.
- [SceneEvents.TrackingStateUpdate.State.untracked](state/untracked.md): The device anchor is untracked.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
