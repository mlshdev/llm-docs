> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tablevisualstate/goalbounds(matching:)

# goalBounds(matching:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func goalBounds(matching equipmentID: EquipmentIdentifier) -> TableVisualState.OrientedRect3D?
```

## See Also

### Representing 3D states

- [TableVisualState.OrientedRect3D](orientedrect3d.md): An object that represents the position and orientation of a 3D rectangle.
- [bounds(for:)](bounds%28for_%29.md): Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [bounds(forEquipment:)](bounds%28forequipment_%29.md): Deprecated.
- [bounds(matching:)](bounds%28matching_%29.md)
- [goalBounds(forEquipment:)](goalbounds%28forequipment_%29.md): Deprecated.
- [tableBounds](tablebounds.md)
