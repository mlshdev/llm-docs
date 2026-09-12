> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentcollection/reparent(ids:to:)](https://developer.apple.com/documentation/tabletopkit/equipmentcollection/reparent(ids:to:))

# reparent(ids:to:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Change the parent of the equipment matching the given identifiers. The reparented equipment is appended at the end of the parent’s children.

## Declaration

```swift
func reparent(ids: [EquipmentIdentifier], to parent: EquipmentIdentifier)
```

## Parameters

- `ids`: The collection of equipment identifiers to corresponding to the equipment to reparent.
- `parent`: The identifier of the new parent.

## See Also

### Changing the parent

- [reparent(id:to:)](reparent%28id_to_%29.md): Change the parent of the equipment matching the given identifier. The given equipment becomes the last of the parent’s children.
