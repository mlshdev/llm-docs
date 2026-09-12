> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontroller](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontroller)

# GKTurnBasedMatchmakerViewController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.

## Declaration

```swift
class GKTurnBasedMatchmakerViewController
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

Before you create a `GKTurnBasedMatchmakerViewController` object, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then, pass the match request to the [init(matchRequest:)](gkmatchmakerviewcontroller/init%28matchrequest_%29.md) initializer to create the view controller.

Configure the view controller and set its delegate before you present it to the local player. The view controller allows the local player to choose other players and optionally fill empty slots using automatch. The interface also allows players to select an existing match, forfeit a match, or view a completed match.

Implement the [GKTurnBasedMatchmakerViewControllerDelegate](gkturnbasedmatchmakerviewcontrollerdelegate.md) protocol to handle when a player selects players, cancels matchmaking, or encounters an error. Implement the [turnBasedMatchmakerViewController(\_:didFind:)](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfind_%29.md) delegate method to dismiss the view controller when the local player invites players.

Register as a listener of the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol and implement [GKTurnBasedEventListener](gkturnbasedeventlistener.md) methods that handle other turn-based events. For example, implement the [player(\_:receivedTurnEventFor:didBecomeActive:)](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) to update match data and present the gameplay interface for the local player to take their turn.

In iOS, you present and dismiss the view controller from another view controller in your game, using the methods provided by the [UIViewController](../uikit/uiviewcontroller.md) class. If you use SwiftUI, you can get the root view controller from the [UIApplication](../uikit/uiapplication.md) object. In macOS, you use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller.

## Topics

### Creating and Configuring the View Controller

- [init(matchRequest:)](gkturnbasedmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [showExistingMatches](gkturnbasedmatchmakerviewcontroller/showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [matchmakingMode](gkturnbasedmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

### Setting the Delegate

- [turnBasedMatchmakerDelegate](gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate.md): The object that handles turn-based matchmaker view controller changes.
- [GKTurnBasedMatchmakerViewControllerDelegate](gkturnbasedmatchmakerviewcontrollerdelegate.md): A protocol that handles when the status of turn-based matchmaking changes.

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

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedMatchmakerViewController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.

## Declaration

```objectivec
@interface GKTurnBasedMatchmakerViewController : UINavigationController
```

```objectivec
@interface GKTurnBasedMatchmakerViewController : NSViewController
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

Before you create a `GKTurnBasedMatchmakerViewController` object, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then, pass the match request to the [initWithMatchRequest:](gkmatchmakerviewcontroller/init%28matchrequest_%29.md) initializer to create the view controller.

Configure the view controller and set its delegate before you present it to the local player. The view controller allows the local player to choose other players and optionally fill empty slots using automatch. The interface also allows players to select an existing match, forfeit a match, or view a completed match.

Implement the [GKTurnBasedMatchmakerViewControllerDelegate](gkturnbasedmatchmakerviewcontrollerdelegate.md) protocol to handle when a player selects players, cancels matchmaking, or encounters an error. Implement the [turnBasedMatchmakerViewController:didFindMatch:](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfind_%29.md) delegate method to dismiss the view controller when the local player invites players.

Register as a listener of the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol and implement [GKTurnBasedEventListener](gkturnbasedeventlistener.md) methods that handle other turn-based events. For example, implement the [player:receivedTurnEventForMatch:didBecomeActive:](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) to update match data and present the gameplay interface for the local player to take their turn.

In iOS, you present and dismiss the view controller from another view controller in your game, using the methods provided by the [UIViewController](../uikit/uiviewcontroller.md) class. If you use SwiftUI, you can get the root view controller from the [UIApplication](../uikit/uiapplication.md) object. In macOS, you use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller.

## Topics

### Creating and Configuring the View Controller

- [initWithMatchRequest:](gkturnbasedmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [showExistingMatches](gkturnbasedmatchmakerviewcontroller/showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [matchmakingMode](gkturnbasedmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

### Setting the Delegate

- [turnBasedMatchmakerDelegate](gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate.md): The object that handles turn-based matchmaker view controller changes.
- [GKTurnBasedMatchmakerViewControllerDelegate](gkturnbasedmatchmakerviewcontrollerdelegate.md): A protocol that handles when the status of turn-based matchmaking changes.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [GKViewController](gkviewcontroller.md)

## See Also

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
