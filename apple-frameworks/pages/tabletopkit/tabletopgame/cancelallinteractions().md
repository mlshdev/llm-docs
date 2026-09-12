> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/cancelallinteractions()](https://developer.apple.com/documentation/tabletopkit/tabletopgame/cancelallinteractions())

# cancelAllInteractions()

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Cancels all local and remote interactions. This releases control of all the equipment and rolls back all the actions added to the canceled interaction.

## Declaration

```swift
func cancelAllInteractions()
```

## See Also

### Canceling interactions

- [cancelInteraction(matching:)](cancelinteraction%28matching_%29.md): Cancel the local or remote interaction matching the given identifier. This causes any actions added to it to be rolled back, and releases the controlled equipment and any tossed equipment.
