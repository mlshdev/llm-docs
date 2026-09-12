> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/controllingseats/restricted(_:)](https://developer.apple.com/documentation/tabletopkit/controllingseats/restricted(_:))

# ControllingSeats.restricted(\_:)

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

Lets players in specific seats interact with the equipment.

## Declaration

```swift
case restricted([TableSeatIdentifier])
```

## See Also

### Seats

- [ControllingSeats.any](any.md): Lets players in all seats interact with the equipment.
- [ControllingSeats.restrictedCurrent(\_:)](restrictedcurrent%28__%29.md): Lets players in specific seats interact with the equipment if they are currently in turn.
- [ControllingSeats.inherited](inherited.md): The value is inherited from the parent. The table implicit value is considered to be `.any`.
- [ControllingSeats.current](current.md): Lets only seats currently in turn interact with the equipment.
