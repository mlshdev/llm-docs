> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletop](https://developer.apple.com/documentation/tabletopkit/tabletop)

# Tabletop

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for the table surface in your game.

## Declaration

```swift
protocol Tabletop : Identifiable where Self.ID == EquipmentIdentifier
```

<a id="overview"></a>

## Overview

To create a [TableSetup](tablesetup.md) object that configures your game table, pass an object that conforms to either the `Tabletop` or ```EntityTabletop`` protocol to the ```TableSetup`initializer. Implement your`Tabletop`structure to set the protocol properties, such as the`shape`and`id\` properties.

```swift
struct Table: Tabletop {
    var shape = .rectangular(width: 100, height: 60, thickness: 5, in: .centimeters)
    var id = .table
}
```

To create a round table, use one of the [TabletopShape](tabletopshape.md) round initializers.

To render the table surface using RealityKit, conform to the [EntityTabletop](entitytabletop.md) protocol instead.

## Topics

### Creating a round or rectangular table

- [shape](tabletop/shape.md): The shape of the table.

### Displaying the equipment

- [layoutChildren(for:visualState:)](tabletop/layoutchildren%28for_visualstate_%29.md): This function provides the layout of the direct children of this equipment and is called whenever the snapshot changes. Override it to provide a custom layout. The output of this function is considered to be only a function of its inputs. Reaching out to data outside what is provided might result in undefined behavior.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

### Inherited By

- [EntityTabletop](entitytabletop.md)

## See Also

### Essentials

- [Creating tabletop games](creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TabletopGame](tabletopgame.md): An object that manages the setup and gameplay of a tabletop game.
- [TableSetup](tablesetup.md): An object that represents the arrangement of seats, equipment, and counters around the game table.
- [EntityTabletop](entitytabletop.md): A protocol for the table surface in your game when you render it using RealityKit.
- [TabletopShape](tabletopshape.md): An object that represents the physical properties of the table.
