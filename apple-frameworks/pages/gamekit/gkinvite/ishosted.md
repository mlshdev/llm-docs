> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite/ishosted](https://developer.apple.com/documentation/gamekit/gkinvite/ishosted)

# isHosted (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you host the game on your own servers.

## Declaration

```swift
var isHosted: Bool { get }
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), you host the game on your own servers. If the value is [false](https://developer.apple.com/documentation/swift/false), Game Center hosts the peer-to-peer match on its servers. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.

# hosted (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you host the game on your own servers.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHosted) BOOL hosted;
```

```objectivec
@property (atomic, readonly, getter=isHosted) BOOL hosted;
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), you host the game on your own servers. If the value is [false](https://developer.apple.com/documentation/swift/false), Game Center hosts the peer-to-peer match on its servers. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [inviter](inviter.md): Deprecated. The identifier for the player who sends the invitation.
