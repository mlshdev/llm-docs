> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/publisher(for:on:)](https://developer.apple.com/documentation/realitykit/scene/publisher(for:on:))

# publisher(for:on:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Generates a publisher for events of the specified type.

## Declaration

```swift
@MainActor @preconcurrency func publisher<E>(for event: E.Type, on sourceObject: (any EventSource)? = nil) -> Scene.Publisher<E> where E : Event
```

## Parameters

- `event`: The event, like `SceneEvents.Update.self`.
- `sourceObject`: The source of the event. Set to `nil` to publish all events of the given type within the scene.

<a id="return-value"></a>

## Return Value

A publisher for events of the specified type.

## See Also

### Publishing and subscribing to events

- [subscribe(to:on:\_:)](subscribe%28to_on___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene.
- [publisher(for:on:componentType:)](publisher%28for_on_componenttype_%29.md): Returns a `Publisher` for events of the specified type in a `Scene`.
- [subscribe(to:on:componentType:\_:)](subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.
