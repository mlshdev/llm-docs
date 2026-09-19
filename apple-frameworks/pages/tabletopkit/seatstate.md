> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/seatstate

# SeatState

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for seat data that TabletopKit syncs between players.

## Declaration

```swift
protocol SeatState
```

## Topics

### Setting the data that syncs

- [context](seatstate/context.md): An integer value that your game uses.
- [playerID](seatstate/playerid.md): The identifier for the player that occupies the seat.
- [pose](seatstate/pose.md): The position and orientation of the seat in table space.

## Relationships

### Conforming Types

- [TableSeatState](tableseatstate.md)

## See Also

### Seats

- [TableState](tablestate.md): The state of the table that can be queried and modified.
- [TableSeat](tableseat.md): A protocol for seats at the table that players occupy.
- [EntityTableSeat](entitytableseat.md): A protocol for seats at the table that you render using RealityKit.
- [TableSeatIdentifier](tableseatidentifier.md): A unique identifier for seats.
- [TableSeatState](tableseatstate.md): The data associated with a seat that a player occupies.
