> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/publisher(for:on:componenttype:)](https://developer.apple.com/documentation/realitykit/scene/publisher(for:on:componenttype:))

# publisher(for:on:componentType:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns a `Publisher` for events of the specified type in a `Scene`.

## Declaration

```swift
@MainActor @preconcurrency func publisher<E>(for event: E.Type, on sourceObject: (any EventSource)? = nil, componentType: (any Component.Type)?) -> Scene.Publisher<E> where E : Event
```

## Parameters

- `event`: The event type to subscribe to. For example, [SceneEvents.Update](../sceneevents/update.md).
- `sourceObject`: The event source – usually the entity you are interested in. `nil` to listen all events of this type that occur in the scene.
- `componentType`: The component type, or `nil` for all (for ComponentEvents).

<a id="return-value"></a>

## Return Value

A `Publisher` for events of the specified type.

## See Also

### Publishing and subscribing to events

- [publisher(for:on:)](publisher%28for_on_%29.md): Generates a publisher for events of the specified type.
- [subscribe(to:on:\_:)](subscribe%28to_on___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene.
- [subscribe(to:on:componentType:\_:)](subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.
