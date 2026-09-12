> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablestate](https://developer.apple.com/documentation/tabletopkit/tablestate)

# TableState

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The state of the table that can be queried and modified.

## Declaration

```swift
struct TableState
```

## Topics

### Getting the table state

- [counters](tablestate/counters.md): The collection of score counters.
- [equipment](tablestate/equipment.md): The collection of equipment.
- [turn](tablestate/turn.md): The seats that are currently in turn.

## See Also

### Seats

- [TableSeat](tableseat.md): A protocol for seats at the table that players occupy.
- [EntityTableSeat](entitytableseat.md): A protocol for seats at the table that you render using RealityKit.
- [TableSeatIdentifier](tableseatidentifier.md): A unique identifier for seats.
- [TableSeatState](tableseatstate.md): The data associated with a seat that a player occupies.
- [SeatState](seatstate.md): A protocol for seat data that TabletopKit syncs between players.
