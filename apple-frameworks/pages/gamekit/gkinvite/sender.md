> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite/sender](https://developer.apple.com/documentation/gamekit/gkinvite/sender)

# sender (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The player who sends the invitation.

## Declaration

```swift
var sender: GKPlayer { get }
```

## See Also

### Getting Properties

- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [isHosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.

# sender (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The player who sends the invitation.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) GKPlayer * sender;
```

```objectivec
@property (atomic, retain, readonly) GKPlayer * sender;
```

## See Also

### Getting Properties

- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [hosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.
