> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/delegate/ontossstart(interaction:outcomes:)](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/delegate/ontossstart(interaction:outcomes:))

# onTossStart(interaction:outcomes:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Implement `onTossStart(interaction:outcomes)` to be notified that the toss has just started simulating and to receive the outcome of the simulation. If the provided outcome is set to the equipment via actions, the equipment will retain the final state of the simulation even after the simulation ended.

## Declaration

```swift
func onTossStart(interaction: TabletopInteraction, outcomes: [TabletopInteraction.TossOutcome])
```

## Parameters

- `interaction`: The interaction corresponding to this toss.
- `outcomes`: The outcomes of all the equipment tossed.

## Default Implementations

### TabletopInteraction.Delegate Implementations

- [onTossStart(interaction:outcomes:)](ontossstart%28interaction_outcomes_%29-8v0lv.md): Implement `onTossStart(interaction:outcomes)` to be notified that the toss has just started simulating and to receive the outcome of the simulation. If the provided outcome is set to the equipment via actions, the equipment will retain the final state of the simulation even after the simulation ended.
