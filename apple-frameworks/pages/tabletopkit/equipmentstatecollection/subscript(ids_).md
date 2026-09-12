> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentstatecollection/subscript(ids:)](https://developer.apple.com/documentation/tabletopkit/equipmentstatecollection/subscript(ids:))

# subscript(ids:)

**Framework:** TabletopKit  
**Kind:** Instance Subscript  
**Availability:** visionOS 26.0+

Returns and/or modifies the states for the equipment with given identifiers.

## Declaration

```swift
subscript(ids equipmentIDs: some Sequence<EquipmentIdentifier>) -> [(any MutableEquipmentState)?] { get set }
```

## See Also

### Accessing the subscript

- [subscript(id:)](subscript%28id_%29.md): Returns and/or modifies the state for the equipment with given identifier.
- [subscript(of:id:)](subscript%28of_id_%29.md): Returns and/or modifies the state for the equipment with given identifier and matching type.
- [subscript(of:ids:)](subscript%28of_ids_%29.md): Returns and/or modifies the state for the equipment with given identifier and matching type.
