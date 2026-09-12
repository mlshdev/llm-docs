> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/goalpose(for:)](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/goalpose(for:))

# goalPose(for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the goal pose for the given equipment. Returns `nil` if the equipment is not part of the game.

## Declaration

```swift
func goalPose(for equipment: some Equipment) -> Pose3D?
```

## See Also

### Representing the goal

- [goalBounds(for:)](goalbounds%28for_%29.md): Returns the goal pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [goalPose(matching:)](goalpose%28matching_%29.md): Returns the goal pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.
