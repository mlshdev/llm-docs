> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/publisher

# Scene.Publisher

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A publisher for the given event type in the scene.

## Declaration

```swift
struct Publisher<E> where E : Event
```

## Relationships

### Conforms To

- [Publisher](../../combine/publisher.md)

## See Also

### Event publishers and subscription

- [SceneEvents](../sceneevents.md): Events the scene invokes.
