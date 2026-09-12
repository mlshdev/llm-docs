> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit](https://developer.apple.com/documentation/tabletopkit)

# TabletopKit

**Framework:** TabletopKit  
**Kind:** Framework  
**Availability:** visionOS 2.0+

Create multiplayer spatial games on a virtual table surface and use FaceTime to invite players.

<a id="Overview"></a>

## Overview

TabletopKit helps you create a spatial multiplayer game on a table surface for visionOS, where players join your game using SharePlay. TabletopKit provides support for designing your game, implementing rules, rendering effects, and syncing multiplayer game state.

![A representation of a tabletop game in spatial mode in visionOS.](https://developer.apple.com/images/com.apple.tabletopkit/tabletopkit-framework-hero@2x.png)

Follow these steps to implement your TabletopKit game:

- Configure your game on the tabletop and create the game pieces or equipment that players interact with. You provide the renderer that draws your game and its pieces.
- Implement the game rules and player interactions with the equipment. TabletopKit processes and represents player gestures as interactions. You observe the interactions and append your game-specific actions.
- Add effects to the RealityKit entities of renderable equipment and trigger them during interactions. For example, play a sound effect when a player throws a piece or an animation when a player achieves a goal.
- Set up multiplayer using SharePlay. Start a Group Activities session and provide it to TabletopKit. Then customize the spatial experience of your game. For example,  place the players in their seats and spectators around the room.

To get started, create a [TabletopGame](tabletopkit/tabletopgame.md) object that represents your game instance and a [TableSetup](tabletopkit/tablesetup.md) object that represents your game layout and equipment.

## Topics

### Essentials

- [Creating tabletop games](tabletopkit/creating-tabletop-games.md): Develop a spatial board game where multiple players interact with pieces on a table.
- [Synchronizing group gameplay with TabletopKit](tabletopkit/synchronizing-group-gameplay-with-tabletopkit.md): Maintain game state across multiple players in a race to capture all the coins.
- [TabletopGame](tabletopkit/tabletopgame.md): An object that manages the setup and gameplay of a tabletop game.
- [TableSetup](tabletopkit/tablesetup.md): An object that represents the arrangement of seats, equipment, and counters around the game table.
- [Tabletop](tabletopkit/tabletop.md): A protocol for the table surface in your game.
- [EntityTabletop](tabletopkit/entitytabletop.md): A protocol for the table surface in your game when you render it using RealityKit.
- [TabletopShape](tabletopkit/tabletopshape.md): An object that represents the physical properties of the table.

### Seats

- [TableState](tabletopkit/tablestate.md): The state of the table that can be queried and modified.
- [TableSeat](tabletopkit/tableseat.md): A protocol for seats at the table that players occupy.
- [EntityTableSeat](tabletopkit/entitytableseat.md): A protocol for seats at the table that you render using RealityKit.
- [TableSeatIdentifier](tabletopkit/tableseatidentifier.md): A unique identifier for seats.
- [TableSeatState](tabletopkit/tableseatstate.md): The data associated with a seat that a player occupies.
- [SeatState](tabletopkit/seatstate.md): A protocol for seat data that TabletopKit syncs between players.

### Equipment

- [Implementing playing card overlap and physical characteristics](tabletopkit/implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](tabletopkit/equipment.md): A protocol for equipment that players directly interact with in a game.
- [EquipmentCollection](tabletopkit/equipmentcollection.md): A collection of equipment whose state can be inspected and modified.
- [EntityEquipment](tabletopkit/entityequipment.md): A protocol for equipment in a game that you render using RealityKit.
- [EquipmentIdentifier](tabletopkit/equipmentidentifier.md): A unique identifier for equipment.
- [EquipmentState](tabletopkit/equipmentstate.md): A protocol for the equipment data that TabletopKit syncs between players.
- [EquipmentStateCollection](tabletopkit/equipmentstatecollection.md): A collection of equipment states that can be inspected and modified.
- [BaseEquipmentState](tabletopkit/baseequipmentstate.md): A state for equipment that contains no equipment-specific data.
- [CustomEquipmentState](tabletopkit/customequipmentstate.md): A specialized protocol for the equipment state that allows to accommodate custom data that TabletopKit syncs between players.
- [MutableEquipmentState](tabletopkit/mutableequipmentstate.md): A protocol for equipment data that TabletopKit syncs between players, and that can be mutated.
- [CardState](tabletopkit/cardstate.md): A state for cards that contains face up and down information.
- [DieState](tabletopkit/diestate.md): A state for dice that contains the current value.
- [RawValueState](tabletopkit/rawvaluestate.md): A state for equipment that contains a game-specific value.
- [ControllingSeats](tabletopkit/controllingseats.md): The seats that can manipulate or interact with the equipment.

### Equipment layout

- [EquipmentLayout](tabletopkit/equipmentlayout.md): A protocol for objects that describe the layout of equipment.
- [DefaultEquipmentLayout](tabletopkit/defaultequipmentlayout.md): An object that provides a standard configuration for equipment layout.
- [EquipmentPose2D](tabletopkit/equipmentpose2d.md): An object that represents the position and rotation of equipment on the XZ plane.
- [EquipmentPose3D](tabletopkit/equipmentpose3d.md): An object that represents the 3D position and orientation of equipment on the table.

### Score counters

- [ScoreCounter](tabletopkit/scorecounter.md): An object that keeps a score in a tabletop game.
- [CounterCollection](tabletopkit/countercollection.md): A collection of score counters that can be inspected and modified.

### Players

- [Player](tabletopkit/player.md): A player in a tabletop game.
- [PlayerIdentifier](tabletopkit/playeridentifier.md): A unique identifier for players.

### Actions

- [TabletopAction](tabletopkit/tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [MoveEquipmentAction](tabletopkit/moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [UpdateEquipmentAction](tabletopkit/updateequipmentaction.md): An action that updates properties of equipment on the table.
- [SetTurnAction](tabletopkit/setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](tabletopkit/updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](tabletopkit/createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](tabletopkit/customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.

### Interactions

- [Simulating dice rolls as a component for your game](tabletopkit/simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopkit/tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TossableRepresentation](tabletopkit/tossablerepresentation.md): An object that represents geometric shapes that the player can throw during gameplay, such as dice.
- [TableSnapshot](tabletopkit/tablesnapshot.md): A snapshot of the current state of the table.
- [TableVisualState](tabletopkit/tablevisualstate.md): A structure that represents the appearance of an object on the table.
- [TableCursor](tabletopkit/tablecursor.md): A cursor conveys information about one equipment that is currently being controlled by an interaction.
- [TableCursorIdentifier](tabletopkit/tablecursoridentifier.md): A unique identifier for cursors.

### Bookmarks

- [StateBookmark](tabletopkit/statebookmark.md): A snapshot of the game state at a point in time.
- [StateBookmarkIdentifier](tabletopkit/statebookmarkidentifier.md): A unique identifier for bookmarks.

### Multiplayer network session

- [TabletopNetworkSession](tabletopkit/tabletopnetworksession.md): An object that coordinates network-related tasks in multiplayer games.
- [TabletopNetworkSessionCoordinator](tabletopkit/tabletopnetworksessioncoordinator.md): A protocol for objects that manage network sessions between peers.
- [TabletopSendMessageResult](tabletopkit/tabletopsendmessageresult.md): The possible results of sending messages in a network session.

### Debugging

- [DebugDrawOptions](tabletopkit/debugdrawoptions.md): Types of items in a rendering that you want to debug.
