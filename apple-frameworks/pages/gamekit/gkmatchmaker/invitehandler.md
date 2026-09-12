> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/invitehandler](https://developer.apple.com/documentation/gamekit/gkmatchmaker/invitehandler)

# inviteHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

A block that GameKit calls when an invitation to join a match is accepted by the local player.

> Use the [register(\_:)](../gklocalplayer/register%28__%29.md) method instead.

## Declaration

```swift
var inviteHandler: ((GKInvite, [Any]?) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- ***acceptedInvite***: The invitation accepted by the player.
- ***playerIDsToInvite***: An array of `NSString` objects containing player identifiers for additional players to invite into the game.

Your block needs to respond to the invitation in one of two ways:

- Display the standard user interface by initializing a new [GKMatchmakerViewController](../gkmatchmakerviewcontroller.md) object, passing the invitation object and the list of player identifiers as parameters.
- Create a match programmatically by calling the [match(for:completionHandler:)](match%28for_completionhandler_%29.md) method on the shared matchmaker instance.

If your game receives an invitation while it’s running, it needs to transition to multiplayer play. It must clean up any existing content, such as ending the current match the player is playing, and then process the invitation.

# inviteHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

A block that GameKit calls when an invitation to join a match is accepted by the local player.

> Use the [registerListener:](../gklocalplayer/register%28__%29.md) method instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^inviteHandler)(GKInvite *acceptedInvite, NSArray *playerIDsToInvite);
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- ***acceptedInvite***: The invitation accepted by the player.
- ***playerIDsToInvite***: An array of `NSString` objects containing player identifiers for additional players to invite into the game.

Your block needs to respond to the invitation in one of two ways:

- Display the standard user interface by initializing a new [GKMatchmakerViewController](../gkmatchmakerviewcontroller.md) object, passing the invitation object and the list of player identifiers as parameters.
- Create a match programmatically by calling the [matchForInvite:completionHandler:](match%28for_completionhandler_%29.md) method on the shared matchmaker instance.

If your game receives an invitation while it’s running, it needs to transition to multiplayer play. It must clean up any existing content, such as ending the current match the player is playing, and then process the invitation.
