> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame](https://developer.apple.com/documentation/tabletopkit/tabletopgame)

# TabletopGame

**Framework:** TabletopKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

An object that manages the setup and gameplay of a tabletop game.

## Declaration

```swift
class TabletopGame
```

<a id="overview"></a>

## Overview

First, create a [TableSetup](tablesetup.md) object that represents your game layout and equipment. Add seats for players to occupy, conforming to the [TableSeat](tableseat.md) protocol, and equipment for them to manipulate, conforming to the [Equipment](equipment.md) protocol.

Pass an object that conforms to the [Tabletop](tabletop.md) or [EntityTabletop](entitytabletop.md) protocol to the [TableSetup](tablesetup.md) initializer.

```swift
let table = Table()
root = createRootEntity(table: table.entity)
var setup = TableSetup(tabletop: table)
```

Implement your structure to initialize the protocol properties, such as `shape`, `entity`, and `id` properties for the `EntityTabletop` protocol.

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

Then, create the `TabletopGame` object that represents your game instance by passing the `TableSetup` object to the [init(tableSetup:version:)](tabletopgame/init%28tablesetup_version_%29.md) initializer.

```swift
game = TabletopGame(tableSetup: setup)
```

Place the [localPlayer](tabletopgame/localplayer.md) in a seat at the table using [claimSeat(\_:)](tabletopgame/claimseat%28__%29.md) or a similar method.

```swift
game.claimAnySeat()
```

Next, implement an object that renders your game layout and equipment. Set the game’s renderer, conforming to the [TabletopGame.RenderDelegate](tabletopgame/renderdelegate.md) protocol, using the [addRenderDelegate(\_:)](tabletopgame/addrenderdelegate%28__%29.md) method. Implement the [onUpdate(timeInterval:snapshot:visualState:)](tabletopgame/renderdelegate/onupdate%28timeinterval_snapshot_visualstate_%29.md) method to render the current state of the game. Alternatively, conform to the [EntityRenderDelegate](entityrenderdelegate.md) protocol.

```swift
game.addRenderDelegate(self)
```

If needed, you can draw a debug representation of selected items in the game using the [debugDraw(options:)](tabletopgame/debugdraw%28options_%29.md) method.

```swift
game.debugDraw(options: [.drawTable, .drawSeats, .drawEquipment])
```

Then, add actions to the equipment that controls gameplay using the [addAction(\_:)](tabletopgame/addaction%28__%29-10j8v.md) and [addActions(\_:)](tabletopgame/addactions%28__%29.md) methods.

Finally, pass an object to the [addObserver(\_:)](tabletopgame/addobserver%28__%29.md) method that conforms to the [TabletopGame.Observer](tabletopgame/observer.md) protocol. Implement the `Observer` protocol methods to progress gameplay when players interact with the equipment.

## Topics

### Creating a tabletop game

- [init(tableSetup:version:)](tabletopgame/init%28tablesetup_version_%29.md): Creates a tabletop game with the specified table configuration and version of rules.
- [rootPose](tabletopgame/rootpose.md): Update the root pose for the current player
- [update(deltaTime:)](tabletopgame/update%28deltatime_%29.md): Update the game manually. Call this function if `automaticUpdate` was not set when registering the Tabletop instance.
- [withCurrentSnapshot(\_:)](tabletopgame/withcurrentsnapshot%28__%29.md)

### Adding equipment to the game

- [equipment](tabletopgame/equipment.md)
- [equipmentIDs](tabletopgame/equipmentids.md)
- [equipment(matching:)](tabletopgame/equipment%28matching_%29.md)
- [equipment(of:)](tabletopgame/equipment%28of_%29.md)
- [equipment(of:forEntity:)](tabletopgame/equipment%28of_forentity_%29.md): Retrieves the specified equipment type associated with an entity if it exists.
- [equipment(of:matching:)](tabletopgame/equipment%28of_matching_%29.md)

### Managing seats

- [claimAnySeat()](tabletopgame/claimanyseat%28%29.md): Claims any free seat. Has no effect if the player is already seated or if there are no free seats.
- [claimSeat(\_:)](tabletopgame/claimseat%28__%29.md): Claims the given seat. If provided Seat is not part of the table, it has no effect
- [claimSeat(matching:)](tabletopgame/claimseat%28matching_%29.md): Claims the given seat. If provided ID does not exist, it has no effect
- [releaseSeat()](tabletopgame/releaseseat%28%29.md): Releases the seat for this player. If the player is not seated it has no effect

### Getting the player

- [localPlayer](tabletopgame/localplayer.md): The player who runs this tabletop game instance on their device.

### Adding actions

- [addAction(\_:)](tabletopgame/addaction%28__%29-10j8v.md)
- [addAction(\_:)](tabletopgame/addaction%28__%29-9zgsy.md)
- [addActions(\_:)](tabletopgame/addactions%28__%29.md)

### Observing actions

- [TabletopGame.Observer](tabletopgame/observer.md): A protocol for objects that progress gameplay when players take actions.
- [addObserver(\_:)](tabletopgame/addobserver%28__%29.md)
- [removeObserver(\_:)](tabletopgame/removeobserver%28__%29.md)
- [TabletopGame.ActionCancellationReason](tabletopgame/actioncancellationreason.md): The possible reasons for cancelling an action or an interaction.

### Jumping to bookmarks

- [jumpToBookmark(\_:)](tabletopgame/jumptobookmark%28__%29.md): Restores game to the given bookmark
- [jumpToBookmark(matching:)](tabletopgame/jumptobookmark%28matching_%29.md): Restores game to the given bookmark
- [bookmarks](tabletopgame/bookmarks.md)

### Starting interactions

- [startInteraction(onEquipmentID:)](tabletopgame/startinteraction%28onequipmentid_%29.md): Starts a local interaction. It will return `nil` if too many interactions are already happening at the same time.

### Canceling interactions

- [cancelAllInteractions()](tabletopgame/cancelallinteractions%28%29.md): Cancels all local and remote interactions. This releases control of all the equipment and rolls back all the actions added to the canceled interaction.
- [cancelInteraction(matching:)](tabletopgame/cancelinteraction%28matching_%29.md): Cancel the local or remote interaction matching the given identifier. This causes any actions added to it to be rolled back, and releases the controlled equipment and any tossed equipment.

### Rendering the table

- [addRenderDelegate(\_:)](tabletopgame/addrenderdelegate%28__%29.md)
- [removeRenderDelegate(\_:)](tabletopgame/removerenderdelegate%28__%29.md)
- [TabletopGame.RenderDelegate](tabletopgame/renderdelegate.md): A protocol for the object that renders your entire game.
- [EntityRenderDelegate](entityrenderdelegate.md): A protocol for the object that renders your entire game using RealityKit.

### Supporting multiple players

- [attachNetworkCoordinator(\_:)](tabletopgame/attachnetworkcoordinator%28__%29.md)
- [detachNetworkCoordinator()](tabletopgame/detachnetworkcoordinator%28%29.md)
- [multiplayerDelegate](tabletopgame/multiplayerdelegate-swift.property.md)
- [TabletopGame.MultiplayerDelegate](tabletopgame/multiplayerdelegate-swift.protocol.md): An object that handles players joining multiplayer games.

### Enabling group activities

- [coordinateWithSession(\_:)](tabletopgame/coordinatewithsession%28__%29.md): Begins coordination of the game with a group session

### Drawing debug representations

- [debugDraw(options:)](tabletopgame/debugdraw%28options_%29.md): Enable or disable debug visualizations

## See Also

### Essentials

- [Creating tabletop games](creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TableSetup](tablesetup.md): An object that represents the arrangement of seats, equipment, and counters around the game table.
- [Tabletop](tabletop.md): A protocol for the table surface in your game.
- [EntityTabletop](entitytabletop.md): A protocol for the table surface in your game when you render it using RealityKit.
- [TabletopShape](tabletopshape.md): An object that represents the physical properties of the table.
