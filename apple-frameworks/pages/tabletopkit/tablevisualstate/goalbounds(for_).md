> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/goalbounds(for:)](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/goalbounds(for:))

# goalBounds(for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the goal pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.

## Declaration

```swift
func goalBounds(for equipment: some Equipment) -> TableVisualState.OrientedRect3D?
```

## See Also

### Representing the goal

- [goalPose(for:)](goalpose%28for_%29.md): Returns the goal pose for the given equipment. Returns `nil` if the equipment is not part of the game.
- [goalPose(matching:)](goalpose%28matching_%29.md): Returns the goal pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.
