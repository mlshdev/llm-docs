> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tableseatstate](https://developer.apple.com/documentation/tabletopkit/tableseatstate)

# TableSeatState

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The data associated with a seat that a player occupies.

## Declaration

```swift
struct TableSeatState
```

## Topics

### Creating a seat state structure

- [init(pose:context:)](tableseatstate/init%28pose_context_%29.md): Creates the state of a seat using the specified pose and optional, game-specific data.

### Setting the data that syncs

- [playerID](tableseatstate/playerid.md): The identifier for the player who occupies the seat.
- [pose](tableseatstate/pose.md): The position and orientation of the seat around the table.

## Relationships

### Conforms To

- [SeatState](seatstate.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Seats

- [TableState](tablestate.md): The state of the table that can be queried and modified.
- [TableSeat](tableseat.md): A protocol for seats at the table that players occupy.
- [EntityTableSeat](entitytableseat.md): A protocol for seats at the table that you render using RealityKit.
- [TableSeatIdentifier](tableseatidentifier.md): A unique identifier for seats.
- [SeatState](seatstate.md): A protocol for seat data that TabletopKit syncs between players.
