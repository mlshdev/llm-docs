> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentstatecollection/subscript(of:ids:)](https://developer.apple.com/documentation/tabletopkit/equipmentstatecollection/subscript(of:ids:))

# subscript(of:ids:)

**Framework:** TabletopKit  
**Kind:** Instance Subscript  
**Availability:** visionOS 26.0+

Returns and/or modifies the state for the equipment with given identifier and matching type.

## Declaration

```swift
subscript<E>(of type: E.Type, ids equipmentIDs: some Sequence<EquipmentIdentifier>) -> [E.State?] where E : Equipment { get set }
```

## Parameters

- `type`: The type of the equipment.

## See Also

### Accessing the subscript

- [subscript(id:)](subscript%28id_%29.md): Returns and/or modifies the state for the equipment with given identifier.
- [subscript(ids:)](subscript%28ids_%29.md): Returns and/or modifies the states for the equipment with given identifiers.
- [subscript(of:id:)](subscript%28of_id_%29.md): Returns and/or modifies the state for the equipment with given identifier and matching type.
