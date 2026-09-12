> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewcontentprotocol/subscribe(to:componenttype:_:)](https://developer.apple.com/documentation/realitykit/realityviewcontentprotocol/subscribe(to:componenttype:_:))

# subscribe(to:componentType:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Subscribes to an event type, optionally limited to a specific component type for component events.

## Declaration

```swift
func subscribe<E>(to event: E.Type, componentType: (any Component.Type)? = nil, _ handler: @escaping (E) -> Void) -> EventSubscription where E : Event
```

## Parameters

- `event`: The event type to subscribe to. For example, [SceneEvents.Update](../sceneevents/update.md) or [ComponentEvents.DidActivate](../componentevents/didactivate.md).
- `componentType`: An optional component type to filter events to if the event is of the type [ComponentEvents](../componentevents.md). Set to `nil` to listen for all events of the event type within the view content.
- `handler`: A closure that runs when the `event` occurs.

<a id="return-value"></a>

## Return Value

An object that represents the subscription to this event stream.

<a id="discussion"></a>

## Discussion

Events you can subscribe to including scene updates, [SceneEvents.Update](../sceneevents/update.md), or when an animation ends, [AnimationEvents.PlaybackCompleted](../animationevents/playbackcompleted.md).

## See Also

### Handling subscriptions

- [subscribe(to:on:\_:)](subscribe%28to_on___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene.
- [subscribe(to:on:componentType:\_:)](subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or a specific component type for component events.
