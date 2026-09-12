> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/startinteraction(onequipmentid:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/startinteraction(onequipmentid:))

# startInteraction(onEquipmentID:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Starts a local interaction. It will return `nil` if too many interactions are already happening at the same time.

## Declaration

```swift
func startInteraction(onEquipmentID equipmentID: EquipmentIdentifier) -> TabletopInteraction.Identifier?
```
