> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/sceneevents/update

# SceneEvents.Update

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An event invoked once per frame interval that you can use to execute custom logic for each frame.

## Declaration

```swift
struct Update
```

## Topics

### Characterizing an update

- [scene](update/scene.md): The updated scene.
- [deltaTime](update/deltatime.md): The elapsed time since the last update.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting scene-level updates

- [SceneEvents.AnchoredStateChanged](anchoredstatechanged.md): An event invoked when the anchored state of an anchoring entity changes.
