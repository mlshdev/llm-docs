> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopshape](https://developer.apple.com/documentation/tabletopkit/tabletopshape)

# TabletopShape

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the physical properties of the table.

## Declaration

```swift
struct TabletopShape
```

<a id="overview"></a>

## Overview

To create a round table, use the [round(center:radius:thickness:in:)](tabletopshape/round%28center_radius_thickness_in_%29.md) initializer, or if you render the table using RealityKit, the [round(entity:)](tabletopshape/round%28entity_%29.md) initializer. For a rectangular table, use the equivalent [rectangular(center:width:height:thickness:in:)](tabletopshape/rectangular%28center_width_height_thickness_in_%29.md) or [rectangular(entity:)](tabletopshape/rectangular%28entity_%29.md) initializer.

## Topics

### Creating a round or rectangular table

- [rectangular(center:width:height:thickness:in:)](tabletopshape/rectangular%28center_width_height_thickness_in_%29.md): Creates a rectangular tabletop shape with the specified center and dimensions.
- [round(center:radius:thickness:in:)](tabletopshape/round%28center_radius_thickness_in_%29.md): Creates a round tabletop shape with the specified center, radius, and thickness.

### Creating a table that you render using an entity

- [rectangular(entity:)](tabletopshape/rectangular%28entity_%29.md)
- [round(entity:)](tabletopshape/round%28entity_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Creating tabletop games](creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TabletopGame](tabletopgame.md): An object that manages the setup and gameplay of a tabletop game.
- [TableSetup](tablesetup.md): An object that represents the arrangement of seats, equipment, and counters around the game table.
- [Tabletop](tabletop.md): A protocol for the table surface in your game.
- [EntityTabletop](entitytabletop.md): A protocol for the table surface in your game when you render it using RealityKit.
