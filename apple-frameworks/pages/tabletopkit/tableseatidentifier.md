> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tableseatidentifier](https://developer.apple.com/documentation/tabletopkit/tableseatidentifier)

# TableSeatIdentifier

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A unique identifier for seats.

## Declaration

```swift
struct TableSeatIdentifier
```

<a id="overview"></a>

## Overview

The seat identifier needs to be unique across all instances of the same tabletop game.

## Topics

### Creating seat identifiers

- [init(\_:)](tableseatidentifier/init%28__%29.md)

### Getting identifier values

- [rawValue](tableseatidentifier/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Seats

- [TableState](tablestate.md): The state of the table that can be queried and modified.
- [TableSeat](tableseat.md): A protocol for seats at the table that players occupy.
- [EntityTableSeat](entitytableseat.md): A protocol for seats at the table that you render using RealityKit.
- [TableSeatState](tableseatstate.md): The data associated with a seat that a player occupies.
- [SeatState](seatstate.md): A protocol for seat data that TabletopKit syncs between players.
