> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/equipment(of:matching:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/equipment(of:matching:))

# equipment(of:matching:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func equipment<E>(of type: E.Type, matching id: EquipmentIdentifier) -> E? where E : Equipment
```

## See Also

### Adding equipment to the game

- [equipment](equipment.md)
- [equipmentIDs](equipmentids.md)
- [equipment(matching:)](equipment%28matching_%29.md)
- [equipment(of:)](equipment%28of_%29.md)
- [equipment(of:forEntity:)](equipment%28of_forentity_%29.md): Retrieves the specified equipment type associated with an entity if it exists.
