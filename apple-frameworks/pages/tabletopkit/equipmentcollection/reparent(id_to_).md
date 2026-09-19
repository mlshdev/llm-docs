> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentcollection/reparent(id:to:)

# reparent(id:to:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Change the parent of the equipment matching the given identifier. The given equipment becomes the last of the parent’s children.

## Declaration

```swift
func reparent(id: EquipmentIdentifier, to parent: EquipmentIdentifier)
```

## Parameters

- `id`: The identifier of the equipment to reparent.
- `parent`: The identifier of the new parent.

## See Also

### Changing the parent

- [reparent(ids:to:)](reparent%28ids_to_%29.md): Change the parent of the equipment matching the given identifiers. The reparented equipment is appended at the end of the parent’s children.
