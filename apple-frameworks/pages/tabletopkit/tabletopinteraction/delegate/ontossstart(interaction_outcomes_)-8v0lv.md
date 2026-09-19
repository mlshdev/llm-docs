> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/delegate/ontossstart(interaction:outcomes:)-8v0lv

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
