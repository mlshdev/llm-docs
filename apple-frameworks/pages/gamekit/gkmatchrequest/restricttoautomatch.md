> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/restricttoautomatch](https://developer.apple.com/documentation/gamekit/gkmatchrequest/restricttoautomatch)

# restrictToAutomatch (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 11.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

> Use the [matchmakingMode](../gkmatchmakerviewcontroller/matchmakingmode.md) property instead.

## Declaration

```swift
var restrictToAutomatch: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to match the local player only with players who are also actively looking for a match. If [true](https://developer.apple.com/documentation/swift/true), the local player can’t invite contacts, friends, or nearby players. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated methods and properties

- [inviteeResponseHandler](inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.

# restrictToAutomatch (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 11.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

> Use the [matchmakingMode](../gkmatchmakerviewcontroller/matchmakingmode.md) property instead.

## Declaration

```objectivec
@property (assign) BOOL restrictToAutomatch;
```

<a id="Discussion"></a>

## Discussion

Use this property to match the local player only with players who are also actively looking for a match. If [true](https://developer.apple.com/documentation/swift/true), the local player can’t invite contacts, friends, or nearby players. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated methods and properties

- [inviteeResponseHandler](inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.
