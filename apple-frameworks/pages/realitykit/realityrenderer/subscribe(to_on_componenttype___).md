> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/subscribe(to:on:componenttype:_:)](https://developer.apple.com/documentation/realitykit/realityrenderer/subscribe(to:on:componenttype:_:))

# subscribe(to:on:componentType:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.

## Declaration

```swift
func subscribe<E>(to event: E.Type, on sourceObject: (any EventSource)? = nil, componentType: (any Component.Type)? = nil, _ handler: @escaping (E) -> Void) -> EventSubscription where E : Event
```

## Parameters

- `event`: The event type to subscribe to. For example [SceneEvents.Update](../sceneevents/update.md) or [ComponentEvents.DidAdd](../componentevents/didadd.md).
- `sourceObject`: An optional source for the event, such as an entity or a scene. Set to `nil` to listen for all events of the event type within the [RealityRenderer](../realityrenderer.md).
- `componentType`: An optional component type to filter events to if the event is of the type [ComponentEvents](../componentevents.md). Set to `nil` to listen for all events of the event type within the [RealityRenderer](../realityrenderer.md).
- `handler`: A closure that runs when the `event` occurs.

<a id="return-value"></a>

## Return Value

An object that represents the subscription to this event stream.
