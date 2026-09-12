> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/entitytabletop](https://developer.apple.com/documentation/tabletopkit/entitytabletop)

# EntityTabletop

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for the table surface in your game when you render it using RealityKit.

## Declaration

```swift
protocol EntityTabletop : Tabletop
```

<a id="overview"></a>

## Overview

To create a [TableSetup](tablesetup.md) object that configures your game table, pass an object that conforms to either the [Tabletop](tabletop.md) or `EntityTabletop` protocol to the `TableSetup` initializer. If you render your table surface using RealityKit, conform to the `EntityTabletop` protocol. Implement your `EntityTabletop` structure to set the protocol properties, such as the `shape`, `entity`, and `id` properties.

```swift
struct Table: EntityTabletop {
    var shape: TabletopShape
    var entity: Entity
    var id: EquipmentIdentifier
    
    init() {
        self.entity = try! Entity.load(named: "table/table", in: contentBundle)
        self.shape = .round(entity: entity)
        self.id = .table
    }
}
```

## Topics

### Creating a round or rectangular table

- [shape](entitytabletop/shape.md): The shape of the table.

### Displaying the tabletop

- [entity](entitytabletop/entity.md): The entity associated with the equipment.

### Default Implementations

- [Tabletop Implementations](entitytabletop/tabletop-implementations.md)

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Tabletop](tabletop.md)

## See Also

### Essentials

- [Creating tabletop games](creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TabletopGame](tabletopgame.md): An object that manages the setup and gameplay of a tabletop game.
- [TableSetup](tablesetup.md): An object that represents the arrangement of seats, equipment, and counters around the game table.
- [Tabletop](tabletop.md): A protocol for the table surface in your game.
- [TabletopShape](tabletopshape.md): An object that represents the physical properties of the table.
