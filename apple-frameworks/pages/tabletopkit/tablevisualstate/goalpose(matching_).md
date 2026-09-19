> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tablevisualstate/goalpose(matching:)

# goalPose(matching:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the goal pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.

## Declaration

```swift
func goalPose(matching equipmentID: EquipmentIdentifier) -> Pose3D?
```

## See Also

### Representing the goal

- [goalBounds(for:)](goalbounds%28for_%29.md): Returns the goal pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [goalPose(for:)](goalpose%28for_%29.md): Returns the goal pose for the given equipment. Returns `nil` if the equipment is not part of the game.
