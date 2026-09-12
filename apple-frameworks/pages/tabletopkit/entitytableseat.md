> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/entitytableseat](https://developer.apple.com/documentation/tabletopkit/entitytableseat)

# EntityTableSeat

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for seats at the table that you render using RealityKit.

## Declaration

```swift
protocol EntityTableSeat : TableSeat
```

<a id="overview"></a>

## Overview

To render seats using an entity, follow these steps:

1. Create a structure that conforms to this protocol.
2. Set the [State](tableseat/state.md) type alias to [TableSeatState](tableseatstate.md).
3. Declare the `id` property as a [TableSeatIdentifier](tableseatidentifier.md) structure.
4. Declare the [initialState](tableseat/initialstate.md) property as a [State](tableseat/state.md) structure.
5. Implement an initializer that sets these properties and the [entity](entitytableseat/entity.md) property.

## Topics

### Rendering the equipment

- [entity](entitytableseat/entity.md): The entity associated with the seat.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [TableSeat](tableseat.md)

## See Also

### Seats

- [TableState](tablestate.md): The state of the table that can be queried and modified.
- [TableSeat](tableseat.md): A protocol for seats at the table that players occupy.
- [TableSeatIdentifier](tableseatidentifier.md): A unique identifier for seats.
- [TableSeatState](tableseatstate.md): The data associated with a seat that a player occupies.
- [SeatState](seatstate.md): A protocol for seat data that TabletopKit syncs between players.
