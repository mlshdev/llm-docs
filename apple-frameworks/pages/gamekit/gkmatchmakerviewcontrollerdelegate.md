> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate)

# GKMatchmakerViewControllerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that handles when the status of matchmaking changes.

## Declaration

```swift
protocol GKMatchmakerViewControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)

<a id="overview"></a>

## Overview

The delegate of a [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) object implements this protocol to handle when players accept invitations, the player cancels matchmaking, or an error occurs. In all these cases, except when a hosted player accepts a invitation, for example, [matchmakerViewController(\_:hostedPlayerDidAccept:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md), the delegate needs to dismiss the view controller.

## Topics

### Starting matches

- [matchmakerViewController(\_:didFind:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.
- [matchmakerViewController(\_:didFindHostedPlayers:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindhostedplayers_%29.md): Handles when the view controller finds all requested players for a hosted match.

### Matching players using rules

- [matchmakerViewController(\_:getMatchPropertiesForRecipient:withCompletionHandler:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__getmatchpropertiesforrecipient_withcompletionhandler_%29.md): Returns the properties for another player that the local player invites using the view controller interface.

### Handling cancellations and errors

- [matchmakerViewControllerWasCancelled(\_:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontrollerwascancelled%28__%29.md): Handles when a player cancels a request to find players for a match.
- [matchmakerViewController(\_:didFailWithError:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when a view controller encounters an error while finding players for a match.

### Hosting matches

- [matchmakerViewController(\_:hostedPlayerDidAccept:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md): Handles when a player in a hosted match accepts the invitation.

### Deprecated Methods

- [matchmakerViewController(\_:didFindPlayers:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindplayers_%29.md): Deprecated. Called when a hosted match is found.
- [matchmakerViewController(\_:didReceiveAcceptFromHostedPlayer:)](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didreceiveacceptfromhostedplayer_%29.md): Deprecated. Called when a player in a hosted match accepts the invitation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [matchmakerDelegate](gkmatchmakerviewcontroller/matchmakerdelegate.md): The object that handles matchmaker view controller changes.

# GKMatchmakerViewControllerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that handles when the status of matchmaking changes.

## Declaration

```objectivec
@protocol GKMatchmakerViewControllerDelegate <NSObject>
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)

<a id="overview"></a>

## Overview

The delegate of a [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) object implements this protocol to handle when players accept invitations, the player cancels matchmaking, or an error occurs. In all these cases, except when a hosted player accepts a invitation, for example, [matchmakerViewController:hostedPlayerDidAccept:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md), the delegate needs to dismiss the view controller.

## Topics

### Starting matches

- [matchmakerViewController:didFindMatch:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.
- [matchmakerViewController:didFindHostedPlayers:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindhostedplayers_%29.md): Handles when the view controller finds all requested players for a hosted match.

### Matching players using rules

- [matchmakerViewController:getMatchPropertiesForRecipient:withCompletionHandler:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__getmatchpropertiesforrecipient_withcompletionhandler_%29.md): Returns the properties for another player that the local player invites using the view controller interface.

### Handling cancellations and errors

- [matchmakerViewControllerWasCancelled:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontrollerwascancelled%28__%29.md): Handles when a player cancels a request to find players for a match.
- [matchmakerViewController:didFailWithError:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when a view controller encounters an error while finding players for a match.

### Hosting matches

- [matchmakerViewController:hostedPlayerDidAccept:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md): Handles when a player in a hosted match accepts the invitation.

### Deprecated Methods

- [matchmakerViewController:didFindPlayers:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindplayers_%29.md): Deprecated. Called when a hosted match is found.
- [matchmakerViewController:didReceiveAcceptFromHostedPlayer:](gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didreceiveacceptfromhostedplayer_%29.md): Deprecated. Called when a player in a hosted match accepts the invitation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [matchmakerDelegate](gkmatchmakerviewcontroller/matchmakerdelegate.md): The object that handles matchmaker view controller changes.
