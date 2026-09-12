> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/bounds(for:)](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/bounds(for:))

# bounds(for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.

## Declaration

```swift
func bounds(for equipment: some Equipment) -> TableVisualState.OrientedRect3D?
```

## See Also

### Representing 3D states

- [TableVisualState.OrientedRect3D](orientedrect3d.md): An object that represents the position and orientation of a 3D rectangle.
- [bounds(forEquipment:)](bounds%28forequipment_%29.md): Deprecated.
- [bounds(matching:)](bounds%28matching_%29.md)
- [goalBounds(forEquipment:)](goalbounds%28forequipment_%29.md): Deprecated.
- [goalBounds(matching:)](goalbounds%28matching_%29.md)
- [tableBounds](tablebounds.md)
