> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/cancelinteraction(matching:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/cancelinteraction(matching:))

# cancelInteraction(matching:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Cancel the local or remote interaction matching the given identifier. This causes any actions added to it to be rolled back, and releases the controlled equipment and any tossed equipment.

## Declaration

```swift
func cancelInteraction(matching interactionID: TabletopInteraction.Identifier)
```

## See Also

### Canceling interactions

- [cancelAllInteractions()](cancelallinteractions%28%29.md): Cancels all local and remote interactions. This releases control of all the equipment and rolls back all the actions added to the canceled interaction.
