> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/pose(for:)-8pm0h](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/pose(for:)-8pm0h)

# pose(for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the pose for the given seat. Returns `nil` if the seat is not part of the game.

## Declaration

```swift
func pose(for seat: some TableSeat) -> Pose3D?
```

## See Also

### Representing seat states

- [pose(for:)](pose%28for_%29-50h4r.md): Returns the current pose for the given equipment. Returns `nil` if the equipment is not part of the game.
- [pose(forSeat:)](pose%28forseat_%29.md): Deprecated.
- [pose(matching:)](pose%28matching_%29-6bo29.md)
- [pose(matching:)](pose%28matching_%29-8nqm2.md): Returns the current pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.
