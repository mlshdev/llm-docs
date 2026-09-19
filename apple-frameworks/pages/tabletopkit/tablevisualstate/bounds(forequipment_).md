> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tablevisualstate/bounds(forequipment:)

# bounds(forEquipment:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+ (deprecated in 26.0)

## Declaration

```swift
func bounds(forEquipment equipment: some Equipment) -> TableVisualState.OrientedRect3D?
```

## See Also

### Representing 3D states

- [TableVisualState.OrientedRect3D](orientedrect3d.md): An object that represents the position and orientation of a 3D rectangle.
- [bounds(for:)](bounds%28for_%29.md): Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [bounds(matching:)](bounds%28matching_%29.md)
- [goalBounds(forEquipment:)](goalbounds%28forequipment_%29.md): Deprecated.
- [goalBounds(matching:)](goalbounds%28matching_%29.md)
- [tableBounds](tablebounds.md)
