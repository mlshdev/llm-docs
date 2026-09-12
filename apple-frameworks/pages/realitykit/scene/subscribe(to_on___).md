> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/subscribe(to:on:_:)](https://developer.apple.com/documentation/realitykit/scene/subscribe(to:on:_:))

# subscribe(to:on:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Subscribes to an event type, optionally limited to events affecting a source entity or scene.

## Declaration

```swift
@MainActor @preconcurrency func subscribe<E>(to event: E.Type, on sourceObject: (any EventSource)? = nil, _ handler: @escaping (E) -> Void) -> any Cancellable where E : Event
```

## Parameters

- `event`: The event type to subscribe to. For example [SceneEvents.Update](../sceneevents/update.md) or [ComponentEvents.DidAdd](../componentevents/didadd.md).
- `sourceObject`: An optional source for the event, such as an entity or a scene. Set to `nil` to listen for all events of the event type within the [Scene](../scene.md).
- `handler`: A closure that runs when the `event` occurs.

<a id="return-value"></a>

## Return Value

An object that represents the subscription to this event stream.

## See Also

### Publishing and subscribing to events

- [publisher(for:on:)](publisher%28for_on_%29.md): Generates a publisher for events of the specified type.
- [publisher(for:on:componentType:)](publisher%28for_on_componenttype_%29.md): Returns a `Publisher` for events of the specified type in a `Scene`.
- [subscribe(to:on:componentType:\_:)](subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.
