> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneevents/anchoredstatechanged](https://developer.apple.com/documentation/realitykit/sceneevents/anchoredstatechanged)

# SceneEvents.AnchoredStateChanged

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An event invoked when the anchored state of an anchoring entity changes.

## Declaration

```swift
struct AnchoredStateChanged
```

## Topics

### Characterizing an update

- [anchor](anchoredstatechanged/anchor.md): The entity whose anchoring state changed.
- [isAnchored](anchoredstatechanged/isanchored.md): The current anchoring state of the entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting scene-level updates

- [SceneEvents.Update](update.md): An event invoked once per frame interval that you can use to execute custom logic for each frame.
