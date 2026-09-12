> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate)

# GKTurnBasedMatchmakerViewControllerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A protocol that handles when the status of turn-based matchmaking changes.

## Declaration

```swift
protocol GKTurnBasedMatchmakerViewControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

To receive notifications when a player cancels turn-based matchmaking or an error occurs, implement this protocol in the [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) object’s delegate.

## Topics

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewControllerWasCancelled(\_:)](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontrollerwascancelled%28__%29.md): Handles when the player dismisses the view controller without inviting players.
- [turnBasedMatchmakerViewController(\_:didFailWithError:)](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when an error occurs while the local player invites other players.

### Deprecated Methods

- [turnBasedMatchmakerViewController(\_:didFind:)](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfind_%29.md): Deprecated. Handles when the view controller finds participants for a turn-based match.
- [turnBasedMatchmakerViewController(\_:playerQuitFor:)](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__playerquitfor_%29.md): Deprecated. Handles when a player quits the match.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [turnBasedMatchmakerDelegate](gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate.md): The object that handles turn-based matchmaker view controller changes.

# GKTurnBasedMatchmakerViewControllerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A protocol that handles when the status of turn-based matchmaking changes.

## Declaration

```objectivec
@protocol GKTurnBasedMatchmakerViewControllerDelegate <NSObject>
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

To receive notifications when a player cancels turn-based matchmaking or an error occurs, implement this protocol in the [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) object’s delegate.

## Topics

### Handling Cancellation and Errors

- [turnBasedMatchmakerViewControllerWasCancelled:](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontrollerwascancelled%28__%29.md): Handles when the player dismisses the view controller without inviting players.
- [turnBasedMatchmakerViewController:didFailWithError:](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfailwitherror_%29.md): Handles when an error occurs while the local player invites other players.

### Deprecated Methods

- [turnBasedMatchmakerViewController:didFindMatch:](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__didfind_%29.md): Deprecated. Handles when the view controller finds participants for a turn-based match.
- [turnBasedMatchmakerViewController:playerQuitForMatch:](gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller%28__playerquitfor_%29.md): Deprecated. Handles when a player quits the match.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [turnBasedMatchmakerDelegate](gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate.md): The object that handles turn-based matchmaker view controller changes.
