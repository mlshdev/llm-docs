> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/delegate/shouldacceptinteraction(initialvalue:handoffvalue:)-7dm2w](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/delegate/shouldacceptinteraction(initialvalue:handoffvalue:)-7dm2w)

# shouldAcceptInteraction(initialValue:handoffValue:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.2+

Implement `shouldAcceptInteraction(initialValue:handoffValue)` to provide the initial configuration for new interactions, and to decide if a new interaction should be accepted or rejected. If this function is not implemented, the default implementation will be used which will reject all handoff interactions and will accept all other interactions providing the default configuration.

## Declaration

```swift
func shouldAcceptInteraction(initialValue: TabletopInteraction.Value, handoffValue: TabletopInteraction.Value?) -> TabletopInteraction.NewInteractionIntent
```

## Parameters

- `initialValue`: The initial `Value` for this interaction, calculated using the default configuration and constants.
- `handoffValue`: If not `nil`, this interaction is trying to take control of an equipment already controlled by another interaction, causing a “handoff” of the equipment. The value provides the most recent data of the interaction that is currently controlling the equipment.

<a id="return-value"></a>

## Return Value

The intent that describes the action to be taken on this new interaction (reject or accept with configuration)
