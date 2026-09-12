> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession](https://developer.apple.com/documentation/gamekit/gksession)

# GKSession (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.

## Declaration

```swift
class GKSession
```

<a id="overview"></a>

## Overview

Sessions primarily work with *peers*. A peer is any iOS device made visible by creating and configuring a [GKSession](gksession.md) object. Each peer is identified by a unique identifier, called a peer id ([peerID](gksession/peerid.md)) string. Your application can use a [peerID](gksession/peerid.md) string to obtain a user-readable name for a remote peer and to attempt to connect to that peer. Similarly, your session’s peer ID is visible to other nearby peers. After a connection is established, your application uses the remote peer’s ID to address data packets that it wants to send.

Peers discover other peers by using a unique string to identify the service they implement, called a session ID ([sessionID](gksession/sessionid.md)). Sessions can be configured to broadcast a session ID (as a *server*), to search for other peers advertising with that session ID (as a *client*), or to act as both a server and a client simultaneously (as a *peer*.

Your application controls the behavior of a session through a delegate that implements the [GKSessionDelegate](gksessiondelegate.md) protocol. The delegate is called when remote peers are discovered, when those peers attempt to connect to the session, and when the state of a remote peer changes. Your application also provides a data handler to the session so that the session can forward data it receives from remote peers. The data handler can be a separate object or the same object as the delegate.

When Bluetooth is turned on, Wi-Fi download speeds drastically decrease while the device is searching for other Bluetooth enabled devices. After the Bluetooth discovery time has completed, Wi-Fi speeds return to normal.

[GKSession](gksession.md) methods are thread-safe and may be called from any thread. However, the session always calls its delegate on the main thread.

## Topics

### Creating a Session

- [init(sessionID:displayName:sessionMode:)](gksession/init%28sessionid_displayname_sessionmode_%29.md): Deprecated. Initializes and returns a newly allocated session.

### Setting and Getting the Delegate

- [delegate](gksession/delegate.md): Deprecated. The delegate of the session object.

### Searching for Other Peers

- [isAvailable](gksession/isavailable.md): Deprecated. A Boolean value that determines whether or not the session wants to connect to new peers.

### Obtaining Information About Other Peers

- [peers(with:)](gksession/peers%28with_%29.md): Deprecated. Returns a list of peers in the specified connection state.
- [displayName(forPeer:)](gksession/displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.

### Connecting to a Remote Peer

- [connect(toPeer:withTimeout:)](gksession/connect%28topeer_withtimeout_%29.md): Deprecated. Creates a connection to another iOS device.
- [cancelConnect(toPeer:)](gksession/cancelconnect%28topeer_%29.md): Deprecated. Cancels a pending request to connect to another iOS device.

### Receiving Connections from a Remote Peer

- [acceptConnection(fromPeer:)](gksession/acceptconnection%28frompeer_%29.md): Deprecated. Called by the delegate to accept a connection request received from a remote peer.
- [denyConnection(fromPeer:)](gksession/denyconnection%28frompeer_%29.md): Deprecated. Called by the delegate to reject a connection request received from a remote peer.

### Working with Connected Peers

- [setDataReceiveHandler(\_:withContext:)](gksession/setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [send(\_:toPeers:with:)](gksession/send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendData(toAllPeers:with:)](gksession/senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](gksession/disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers()](gksession/disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeer(fromAllPeers:)](gksession/disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.

### Information about the Session

- [displayName](gksession/displayname.md): Deprecated. The name of the user.
- [peerID](gksession/peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](gksession/sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.
- [sessionMode](gksession/sessionmode.md): Deprecated. The mode the session uses to find other peers.

### Constants

- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [The Session Error Domain](the-session-error-domain.md): The [GKSession](gksession.md) error domain.
- [GKSessionError.Code](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKSession (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.

## Declaration

```objectivec
@interface GKSession : NSObject
```

<a id="overview"></a>

## Overview

Sessions primarily work with *peers*. A peer is any iOS device made visible by creating and configuring a [GKSession](gksession.md) object. Each peer is identified by a unique identifier, called a peer id ([peerID](gksession/peerid.md)) string. Your application can use a [peerID](gksession/peerid.md) string to obtain a user-readable name for a remote peer and to attempt to connect to that peer. Similarly, your session’s peer ID is visible to other nearby peers. After a connection is established, your application uses the remote peer’s ID to address data packets that it wants to send.

Peers discover other peers by using a unique string to identify the service they implement, called a session ID ([sessionID](gksession/sessionid.md)). Sessions can be configured to broadcast a session ID (as a *server*), to search for other peers advertising with that session ID (as a *client*), or to act as both a server and a client simultaneously (as a *peer*.

Your application controls the behavior of a session through a delegate that implements the [GKSessionDelegate](gksessiondelegate.md) protocol. The delegate is called when remote peers are discovered, when those peers attempt to connect to the session, and when the state of a remote peer changes. Your application also provides a data handler to the session so that the session can forward data it receives from remote peers. The data handler can be a separate object or the same object as the delegate.

When Bluetooth is turned on, Wi-Fi download speeds drastically decrease while the device is searching for other Bluetooth enabled devices. After the Bluetooth discovery time has completed, Wi-Fi speeds return to normal.

[GKSession](gksession.md) methods are thread-safe and may be called from any thread. However, the session always calls its delegate on the main thread.

## Topics

### Creating a Session

- [initWithSessionID:displayName:sessionMode:](gksession/init%28sessionid_displayname_sessionmode_%29.md): Deprecated. Initializes and returns a newly allocated session.

### Setting and Getting the Delegate

- [delegate](gksession/delegate.md): Deprecated. The delegate of the session object.

### Searching for Other Peers

- [available](gksession/isavailable.md): Deprecated. A Boolean value that determines whether or not the session wants to connect to new peers.

### Obtaining Information About Other Peers

- [peersWithConnectionState:](gksession/peers%28with_%29.md): Deprecated. Returns a list of peers in the specified connection state.
- [displayNameForPeer:](gksession/displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.

### Connecting to a Remote Peer

- [connectToPeer:withTimeout:](gksession/connect%28topeer_withtimeout_%29.md): Deprecated. Creates a connection to another iOS device.
- [cancelConnectToPeer:](gksession/cancelconnect%28topeer_%29.md): Deprecated. Cancels a pending request to connect to another iOS device.

### Receiving Connections from a Remote Peer

- [acceptConnectionFromPeer:error:](gksession/acceptconnection%28frompeer_%29.md): Deprecated. Called by the delegate to accept a connection request received from a remote peer.
- [denyConnectionFromPeer:](gksession/denyconnection%28frompeer_%29.md): Deprecated. Called by the delegate to reject a connection request received from a remote peer.

### Working with Connected Peers

- [setDataReceiveHandler:withContext:](gksession/setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [sendData:toPeers:withDataMode:error:](gksession/send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [sendDataToAllPeers:withDataMode:error:](gksession/senddata%28toallpeers_with_%29.md): Deprecated. Transmits a collection of bytes to all connected peers.
- [disconnectTimeout](gksession/disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers](gksession/disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeerFromAllPeers:](gksession/disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.

### Information about the Session

- [displayName](gksession/displayname.md): Deprecated. The name of the user.
- [peerID](gksession/peerid.md): Deprecated. A string that identifies your session to other peers.
- [sessionID](gksession/sessionid.md): Deprecated. A string used to filter the list of peers who are allowed to see your session.
- [sessionMode](gksession/sessionmode.md): Deprecated. The mode the session uses to find other peers.

### Constants

- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [The Session Error Domain](the-session-error-domain.md): The [GKSession](gksession.md) error domain.
- [GKSessionError](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
