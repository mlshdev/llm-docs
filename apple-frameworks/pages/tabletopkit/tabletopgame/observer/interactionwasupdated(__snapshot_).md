> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/observer/interactionwasupdated(_:snapshot:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/interactionwasupdated(_:snapshot:))

# interactionWasUpdated(\_:snapshot:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+ (deprecated in 26.0)

Called whenever any interaction (local or remote) is updated. For local interactions, each `interactionWasUpdated` callback occurs immediately before the `TabletopInteraction.Delegate.update()` callback with the same `TabletopInteraction.Value` and the same snapshot as is accessed by `game.withCurrentSnapshot`. For remote interactions, `interactionWasUpdated` callbacks are only guaranteed to occur when the `phase` or `controlledEquipment` are updated and the `TabletopInteraction.Value` indicates only the limited information available about remote interactions viewed over the network. Due to network shared state resolution, remote interactions may not always present interactionWasUpdated callbacks with a completely coherent phase order (i.e. .started then .update(s) then .ended/.cancelled) or present a final value matching the corresponding TableCursor API value.

> Use the TableCursor API to poll the information

## Declaration

```swift
func interactionWasUpdated(_ value: TabletopInteraction.Value, snapshot: TableSnapshot)
```

## Default Implementations

### TabletopGame.Observer Implementations

- [interactionWasUpdated(\_:snapshot:)](interactionwasupdated%28__snapshot_%29-1dvgk.md): Called whenever any interaction (local or remote) is updated. For local interactions, each `interactionWasUpdated` callback occurs immediately before the `TabletopInteraction.Delegate.update()` callback with the same `TabletopInteraction.Value` and the same snapshot as is accessed by `game.withCurrentSnapshot`. For remote interactions, `interactionWasUpdated` callbacks are only guaranteed to occur when the `phase` or `controlledEquipment` are updated and the `TabletopInteraction.Value` indicates only the limited information available about remote interactions viewed over the network. Due to network shared state resolution, remote interactions may not always present interactionWasUpdated callbacks with a completely coherent phase order (i.e. .started then .update(s) then .ended/.cancelled) or present a final value matching the corresponding TableCursor API value.
