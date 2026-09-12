> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/equipment(of:forentity:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/equipment(of:forentity:))

# equipment(of:forEntity:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Retrieves the specified equipment type associated with an entity if it exists.

## Declaration

```swift
func equipment<E>(of type: E.Type, forEntity entity: Entity) -> E? where E : EntityEquipment
```

## Parameters

- `type`: The type of equipment to retrieve.
- `entity`: The entity that’s associated with the equipment type you want to find.

<a id="return-value"></a>

## Return Value

The equipment associated with the entity if it exists; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

You can use this method to create custom interactions.

## See Also

### Adding equipment to the game

- [equipment](equipment.md)
- [equipmentIDs](equipmentids.md)
- [equipment(matching:)](equipment%28matching_%29.md)
- [equipment(of:)](equipment%28of_%29.md)
- [equipment(of:matching:)](equipment%28of_matching_%29.md)
