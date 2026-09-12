> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablesetup](https://developer.apple.com/documentation/tabletopkit/tablesetup)

# TableSetup

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the arrangement of seats, equipment, and counters around the game table.

## Declaration

```swift
struct TableSetup
```

<a id="overview"></a>

## Overview

To create a `TableSetup` object, pass an object that conforms to the [Tabletop](tabletop.md) or [EntityTabletop](entitytabletop.md) protocol to the [init(tabletop:)](tablesetup/init%28tabletop_%29-4cfut.md) initializer. For example, implement a `Table` structure that conforms to the `EntityTabletop` protocol and pass an instance of it to the initializer.

```swift
let table = Table()
root = createRootEntity(table: table.entity)
var setup = TableSetup(tabletop: table)
```

Set the protocol properties, such as `shape`, `entity`, and `id` properties for the `EntityTabletop` protocol, in the initializer.

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

Then add seats, equipment, and counters to the `TableSetup` object.

To represent seats, create structures that conform to a seat protocol. To render seats using RealityKit, conform to the [EntityTableSeat](entitytableseat.md) protocol and use the [add(seat:)](tablesetup/add%28seat_%29-4alrc.md) or a similar method to add seats. Otherwise, conform to the [TableSeat](tableseat.md) protocol and use the [add(seat:)](tablesetup/add%28seat_%29-a9qw.md) or a similar method to add seats.

```swift
setup.add(seat: Seat(index: 0, position: .init(x: 0, z: -0.5)))
setup.add(seat: Seat(index: 1, position: .init(x: 0, z: +0.5)))
```

To represent equipment, create structures that conform to an equipment protocol. To render equipment using RealityKit, conform to the [EntityEquipment](entityequipment.md) protocol and use the [add(equipment:)](tablesetup/add%28equipment_%29-24tv6.md) or a similar method to add equipment. Otherwise, conform to the [Equipment](equipment.md) protocol and use the [add(equipment:)](tablesetup/add%28equipment_%29-29pef.md) or a similar method to add equipment.

```swift
setup.add(equipment: Piece(position: .init(x: 0, z: 0.1)))
setup.add(equipment: Card(index: 0, faceUp: true, position: .init(x: -0.1, z: 0)))
setup.add(equipment: Card(index: 1, faceUp: true, position: .init(x: +0.1, z: 0)))
setup.add(equipment: Die(index: 0, position: .init(x: 0, z: 0.2)))
```

Some equipment can represent a group, such as a player’s hand in a card game. To organize equipment hierarchically, set the [parentID](equipmentstate/parentid.md) property of the [State](equipment/state.md) property during gameplay. In your equipment structure implementation, you can override the [layoutChildren(for:visualState:)](equipment/layoutchildren%28for_visualstate_%29.md) method to lay out the containing equipment.

Optionally, add one or more [ScoreCounter](scorecounter.md) objects to the `TableSetup` object to keep score of the game. Use either the [add(counter:)](tablesetup/add%28counter_%29.md) or [add(counters:)](tablesetup/add%28counters_%29.md) method to add score counters.

Finally, create the [TabletopGame](tabletopgame.md) instance from the `TableSetup` object by passing it to the [init(tableSetup:version:)](tabletopgame/init%28tablesetup_version_%29.md) initializer.

```swift
game = TabletopGame(tableSetup: setup)
```

## Topics

### Creating a setup object from a table

- [init(tabletop:)](tablesetup/init%28tabletop_%29-4cfut.md)
- [init(tabletop:)](tablesetup/init%28tabletop_%29-7ima6.md)

### Adding seats to place players

- [add(seat:)](tablesetup/add%28seat_%29-a9qw.md): Add the given seat to the table setup.
- [add(seat:)](tablesetup/add%28seat_%29-4alrc.md)
- [add(seats:)](tablesetup/add%28seats_%29-4068d.md): Add the given seats to the table setup.
- [add(seats:)](tablesetup/add%28seats_%29-4asnu.md)

### Adding equipment for gameplay

- [add(equipment:)](tablesetup/add%28equipment_%29-29pef.md): Add the given equipment to the table setup.
- [add(equipment:)](tablesetup/add%28equipment_%29-294gb.md)
- [add(equipment:)](tablesetup/add%28equipment_%29-24tv6.md)
- [add(equipment:)](tablesetup/add%28equipment_%29-7qwj2.md): Add the given equipment to the table setup.
- [add(equipment:)](tablesetup/add%28equipment_%29-4k6m6.md): Add the given equipment to the table setup.
- [add(equipment:)](tablesetup/add%28equipment_%29-3d7h9.md)
- [add(equipment:)](tablesetup/add%28equipment_%29-9syh2.md)
- [add(equipment:)](tablesetup/add%28equipment_%29-9h887.md): Add the given equipment to the table setup.

### Adding counters to keep score

- [add(counter:)](tablesetup/add%28counter_%29.md)
- [add(counters:)](tablesetup/add%28counters_%29.md)

### Registering an action

- [register(action:)](tablesetup/register%28action_%29.md): Register a custom action of given type. Each type of custom action needs to be registered before it can be used.

## See Also

### Essentials

- [Creating tabletop games](creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TabletopGame](tabletopgame.md): An object that manages the setup and gameplay of a tabletop game.
- [Tabletop](tabletop.md): A protocol for the table surface in your game.
- [EntityTabletop](entitytabletop.md): A protocol for the table surface in your game when you render it using RealityKit.
- [TabletopShape](tabletopshape.md): An object that represents the physical properties of the table.
