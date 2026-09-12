> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksessioncoordinator](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksessioncoordinator)

# TabletopNetworkSessionCoordinator

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for objects that manage network sessions between peers.

## Declaration

```swift
protocol TabletopNetworkSessionCoordinator
```

<a id="overview"></a>

## Overview

Peers are networking participants that might or might not join a multiplayer game.

## Topics

### Starting network sessions

- [coordinateWithSession(\_:)](tabletopnetworksessioncoordinator/coordinatewithsession%28__%29.md)
- [TabletopNetworkSessionCoordinator.NetworkSession](tabletopnetworksessioncoordinator/networksession.md)

### Managing network session peers

- [peerJoinedGame(\_:)](tabletopnetworksessioncoordinator/peerjoinedgame%28__%29.md)
- [peerLeftGame(\_:)](tabletopnetworksessioncoordinator/peerleftgame%28__%29.md)
- [Peer](tabletopnetworksessioncoordinator/peer.md)

### Sending messages between peers

- [sendMessage(\_:to:completion:)](tabletopnetworksessioncoordinator/sendmessage%28__to_completion_%29.md)
- [sendMessageUnreliably(\_:to:completion:)](tabletopnetworksessioncoordinator/sendmessageunreliably%28__to_completion_%29.md)

## See Also

### Multiplayer network session

- [TabletopNetworkSession](tabletopnetworksession.md): An object that coordinates network-related tasks in multiplayer games.
- [TabletopSendMessageResult](tabletopsendmessageresult.md): The possible results of sending messages in a network session.
