> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/bounds(matching:)](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/bounds(matching:))

# bounds(matching:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func bounds(matching equipmentID: EquipmentIdentifier) -> TableVisualState.OrientedRect3D?
```

## See Also

### Representing 3D states

- [TableVisualState.OrientedRect3D](orientedrect3d.md): An object that represents the position and orientation of a 3D rectangle.
- [bounds(for:)](bounds%28for_%29.md): Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [bounds(forEquipment:)](bounds%28forequipment_%29.md): Deprecated.
- [goalBounds(forEquipment:)](goalbounds%28forequipment_%29.md): Deprecated.
- [goalBounds(matching:)](goalbounds%28matching_%29.md)
- [tableBounds](tablebounds.md)
