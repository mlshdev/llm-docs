> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopgame/startinteraction(onequipmentid:)

# startInteraction(onEquipmentID:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Starts a local interaction. It will return `nil` if too many interactions are already happening at the same time.

## Declaration

```swift
func startInteraction(onEquipmentID equipmentID: EquipmentIdentifier) -> TabletopInteraction.Identifier?
```
