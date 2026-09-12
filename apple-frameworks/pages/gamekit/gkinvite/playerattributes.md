> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite/playerattributes](https://developer.apple.com/documentation/gamekit/gkinvite/playerattributes)

# playerAttributes (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The player attributes for the match.

## Declaration

```swift
var playerAttributes: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property matches the [playerAttributes](../gkmatchrequest/playerattributes.md) property of the match request that the other player uses to create the match.

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerGroup](playergroup.md): The player group for the match.
- [isHosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.

# playerAttributes (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The player attributes for the match.

## Declaration

```objectivec
@property (nonatomic, readonly) uint32_t playerAttributes;
```

```objectivec
@property (atomic, readonly) uint32_t playerAttributes;
```

<a id="Discussion"></a>

## Discussion

The value of this property matches the [playerAttributes](../gkmatchrequest/playerattributes.md) property of the match request that the other player uses to create the match.

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerGroup](playergroup.md): The player group for the match.
- [hosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.
