> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/cancel()](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/cancel())

# cancel()

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Cancels the current interaction. All actions added to the interaction will also be cancelled.

## Declaration

```swift
func cancel()
```

## See Also

### Performing actions

- [TabletopInteraction.Delegate](delegate.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TabletopInteraction.TossOutcome](tossoutcome.md): An object representing the final outcome of tossing one equipment, as it appears at the end of its simulation.
- [addAction(\_:)](addaction%28__%29-1cety.md): Submit an action tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [addAction(\_:)](addaction%28__%29-4rx16.md): Submit a custom action tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [addActions(\_:)](addactions%28__%29.md): Submit a collection of actions tied to this interaction. If the interaction gets canceled, all the associated actions will be automatically rolled back.
- [toss(equipmentID:as:linearVelocity:angularVelocity:)](toss%28equipmentid_as_linearvelocity_angularvelocity_%29.md): Begins a simulation of a toss of the equipment with the specificied parameters. Equipment that begins a toss in the same TabletopInteraction may interact with each other as well as the game’s boundary.
- [end()](end%28%29.md): Ends the current interaction.
