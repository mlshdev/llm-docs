> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/delegate](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/delegate)

# TabletopInteraction.Delegate

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for objects that manage the entire flow of players interacting with equipment.

## Declaration

```swift
protocol Delegate
```

<a id="overview"></a>

## Overview

Implement the [update(interaction:)](delegate/update%28interaction_%29.md) method to take an appropriate action depending on the equipment and the phase of the interaction. For example, turn a card face up if a player flips it over or toss a die when a gesture ends.

## Topics

### Taking actions

- [update(interaction:)](delegate/update%28interaction_%29.md)

### Starting a toss

- [onTossStart(interaction:outcomes:)](delegate/ontossstart%28interaction_outcomes_%29.md): Implement `onTossStart(interaction:outcomes)` to be notified that the toss has just started simulating and to receive the outcome of the simulation. If the provided outcome is set to the equipment via actions, the equipment will retain the final state of the simulation even after the simulation ended.

### Accepting interactions

- [shouldAcceptDirectInteraction(initialValue:handoffValue:)](delegate/shouldacceptdirectinteraction%28initialvalue_handoffvalue_%29.md): Implement `shouldAcceptDirectInteraction(initialValue:handoffValue)` to provide the constants and initial configuration for the new direct interaction, and to decide if the new interaction should be accepted or rejected. If the function is not implemented, the default implementation will be used, which will call into the more generic `shouldAcceptInteraction(initialValue:handoffValue)`.
- [shouldAcceptIndirectInteraction(initialValue:handoffValue:)](delegate/shouldacceptindirectinteraction%28initialvalue_handoffvalue_%29.md): Implement `shouldAcceptIndirectInteraction(initialValue:handoffValue)` to provide the constants and initial configuration for the new indirect interaction, and to decide if the new interaction should be accepted or rejected. If the function is not implemented, the default implementation will be used, which will call into the more generic `shouldAcceptInteraction(initialValue:handoffValue)`.
- [shouldAcceptInteraction(initialValue:handoffValue:)](delegate/shouldacceptinteraction%28initialvalue_handoffvalue_%29.md): Implement `shouldAcceptInteraction(initialValue:handoffValue)` to provide the initial configuration for new interactions, and to decide if a new interaction should be accepted or rejected. If this function is not implemented, the default implementation will be used which will reject all handoff interactions and will accept all other interactions providing the default configuration.

## See Also

### Performing actions

- [TabletopInteraction.TossOutcome](tossoutcome.md): An object representing the final outcome of tossing one equipment, as it appears at the end of its simulation.
- [addAction(\_:)](addaction%28__%29-1cety.md): Submit an action tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [addAction(\_:)](addaction%28__%29-4rx16.md): Submit a custom action tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [addActions(\_:)](addactions%28__%29.md): Submit a collection of actions tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [toss(equipmentID:as:linearVelocity:angularVelocity:)](toss%28equipmentid_as_linearvelocity_angularvelocity_%29.md): Begins a simulation of a toss of the equipment with the specificied parameters. Equipment that begins a toss in the same TabletopInteraction may interact with each other as well as the game’s boundary.
- [end()](end%28%29.md): Ends the current interaction.
- [cancel()](cancel%28%29.md): Cancels the current interaction. All actions added to the interaction will also be cancelled.
