> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/delegate/shouldacceptindirectinteraction(initialvalue:handoffvalue:)-4a1g0

# shouldAcceptIndirectInteraction(initialValue:handoffValue:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Implement `shouldAcceptIndirectInteraction(initialValue:handoffValue)` to provide the constants and initial configuration for the new indirect interaction, and to decide if the new interaction should be accepted or rejected. If the function is not implemented, the default implementation will be used, which will call into the more generic `shouldAcceptInteraction(initialValue:handoffValue)`.

## Declaration

```swift
func shouldAcceptIndirectInteraction(initialValue: TabletopInteraction.Value, handoffValue: TabletopInteraction.Value?) -> TabletopInteraction.NewIndirectInteractionIntent
```

## Parameters

- `initialValue`: The initial `Value` for this interaction, using the default configuration and constants.
- `handoffValue`: If not `nil`, this interaction is trying to take control of an equipment already controlled by another interaction, causing a “handoff” of the equipment. The value provides the most recent data of the interaction that is currently controlling the equipment.

<a id="return-value"></a>

## Return Value

The intent that describes the action to be taken on this new interaction (reject or accept with constants and configuration)
