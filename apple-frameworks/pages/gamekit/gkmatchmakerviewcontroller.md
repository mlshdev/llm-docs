> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller)

# GKMatchmakerViewController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.

## Declaration

```swift
class GKMatchmakerViewController
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md)
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)
- [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)

<a id="overview"></a>

## Overview

Before you create a `GKMatchmakerViewController` object, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then pass the match request to the [init(matchRequest:)](gkmatchmakerviewcontroller/init%28matchrequest_%29.md) initializer to create the view controller.

Configure the view controller and set its delegate before you present it to the local player. The view controller allows the local player to choose other players and, optionally, fill empty slots using automatch. If you add the Group Activities capability to your Xcode project, the player can invite others using SharePlay. See [Configuring Group Activities](https://developer.apple.com/documentation/xcode/configuring-group-activities).

Implement the [GKLocalPlayerListener](gklocalplayerlistener.md) and [GKMatchmakerViewControllerDelegate](gkmatchmakerviewcontrollerdelegate.md) protocols to handle when players send and accept invitations. Implement the [player(\_:didAccept:)](gkinviteeventlistener/player%28__didaccept_%29.md) delegate method to present a `GKMatchmakerViewController` object, which you create using the [init(invite:)](gkmatchmakerviewcontroller/init%28invite_%29.md) initializer, to the player who accepts an invitation. Then, implement the [matchmakerViewController(\_:didFind:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md) delegate method to dismiss the view controller and start the game when all players accept their invitations.

In iOS, you present and dismiss the view controller from another view controller in your game, using the methods from the [UIViewController](../uikit/uiviewcontroller.md) class. If you use SwiftUI, you can get the root view controller from the [UIApplication](../uikit/uiapplication.md) object.

```swift
let rootViewController = UIApplication.shared.windows.first!.rootViewController
```

For visionOS games, the view controller appears anchored to the window, scene, or view relative to where you present the view controller. For immersive games, set the parent window to a separate window group than the immersive space window group.

For macOS games, use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller.

For the complete matchmaking flow with code fragments, see [Finding multiple players for a game](finding-multiple-players-for-a-game.md).

## Topics

### Creating and configuring the view controller

- [init(matchRequest:)](gkmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [init(invite:)](gkmatchmakerviewcontroller/init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](gkmatchmakerviewcontroller/matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](gkmatchmakerviewcontroller/canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](gkmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

### Setting the delegate

- [matchmakerDelegate](gkmatchmakerviewcontroller/matchmakerdelegate.md): The object that handles matchmaker view controller changes.
- [GKMatchmakerViewControllerDelegate](gkmatchmakerviewcontrollerdelegate.md): An object that handles when the status of matchmaking changes.

### Adding players to matches

- [addPlayers(to:)](gkmatchmakerviewcontroller/addplayers%28to_%29.md): Invites additional players to join an existing match.

### Hosting matches

- [isHosted](gkmatchmakerviewcontroller/ishosted.md): A Boolean value that indicates whether the match is hosted or peer-to-peer.
- [setHostedPlayer(\_:didConnect:)](gkmatchmakerviewcontroller/sethostedplayer%28__didconnect_%29.md): Updates the connection status of a player in a hosted game.

### Deprecated

- [setHostedPlayer(\_:connected:)](gkmatchmakerviewcontroller/sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [setHostedPlayerReady(\_:)](gkmatchmakerviewcontroller/sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.
- [defaultInvitationMessage](gkmatchmakerviewcontroller/defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKViewController](gkviewcontroller.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.

# GKMatchmakerViewController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.

## Declaration

```objectivec
@interface GKMatchmakerViewController : UINavigationController
```

```objectivec
@interface GKMatchmakerViewController : NSViewController
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md)
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)
- [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)

<a id="overview"></a>

## Overview

Before you create a `GKMatchmakerViewController` object, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then pass the match request to the [initWithMatchRequest:](gkmatchmakerviewcontroller/init%28matchrequest_%29.md) initializer to create the view controller.

Configure the view controller and set its delegate before you present it to the local player. The view controller allows the local player to choose other players and, optionally, fill empty slots using automatch. If you add the Group Activities capability to your Xcode project, the player can invite others using SharePlay. See [Configuring Group Activities](https://developer.apple.com/documentation/xcode/configuring-group-activities).

Implement the [GKLocalPlayerListener](gklocalplayerlistener.md) and [GKMatchmakerViewControllerDelegate](gkmatchmakerviewcontrollerdelegate.md) protocols to handle when players send and accept invitations. Implement the [player:didAcceptInvite:](gkinviteeventlistener/player%28__didaccept_%29.md) delegate method to present a `GKMatchmakerViewController` object, which you create using the [initWithInvite:](gkmatchmakerviewcontroller/init%28invite_%29.md) initializer, to the player who accepts an invitation. Then, implement the [matchmakerViewController:didFindMatch:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md) delegate method to dismiss the view controller and start the game when all players accept their invitations.

In iOS, you present and dismiss the view controller from another view controller in your game, using the methods from the [UIViewController](../uikit/uiviewcontroller.md) class. If you use SwiftUI, you can get the root view controller from the [UIApplication](../uikit/uiapplication.md) object.

```swift
let rootViewController = UIApplication.shared.windows.first!.rootViewController
```

For visionOS games, the view controller appears anchored to the window, scene, or view relative to where you present the view controller. For immersive games, set the parent window to a separate window group than the immersive space window group.

For macOS games, use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller.

For the complete matchmaking flow with code fragments, see [Finding multiple players for a game](finding-multiple-players-for-a-game.md).

## Topics

### Creating and configuring the view controller

- [initWithMatchRequest:](gkmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [initWithInvite:](gkmatchmakerviewcontroller/init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](gkmatchmakerviewcontroller/matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](gkmatchmakerviewcontroller/canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](gkmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

### Setting the delegate

- [matchmakerDelegate](gkmatchmakerviewcontroller/matchmakerdelegate.md): The object that handles matchmaker view controller changes.
- [GKMatchmakerViewControllerDelegate](gkmatchmakerviewcontrollerdelegate.md): An object that handles when the status of matchmaking changes.

### Adding players to matches

- [addPlayersToMatch:](gkmatchmakerviewcontroller/addplayers%28to_%29.md): Invites additional players to join an existing match.

### Hosting matches

- [hosted](gkmatchmakerviewcontroller/ishosted.md): A Boolean value that indicates whether the match is hosted or peer-to-peer.
- [setHostedPlayer:didConnect:](gkmatchmakerviewcontroller/sethostedplayer%28__didconnect_%29.md): Updates the connection status of a player in a hosted game.

### Deprecated

- [setHostedPlayer:connected:](gkmatchmakerviewcontroller/sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [setHostedPlayerReady:](gkmatchmakerviewcontroller/sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.
- [defaultInvitationMessage](gkmatchmakerviewcontroller/defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [GKViewController](gkviewcontroller.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.
