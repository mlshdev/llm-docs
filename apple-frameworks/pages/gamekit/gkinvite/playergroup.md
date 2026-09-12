> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite/playergroup](https://developer.apple.com/documentation/gamekit/gkinvite/playergroup)

# playerGroup (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The player group for the match.

## Declaration

```swift
var playerGroup: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property matches the [playerGroup](../gkmatchrequest/playergroup.md) property of the match request that the other player uses to create the match.

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [isHosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.

# playerGroup (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The player group for the match.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger playerGroup;
```

```objectivec
@property (atomic, readonly) NSUInteger playerGroup;
```

<a id="Discussion"></a>

## Discussion

The value of this property matches the [playerGroup](../gkmatchrequest/playergroup.md) property of the match request that the other player uses to create the match.

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [hosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.
