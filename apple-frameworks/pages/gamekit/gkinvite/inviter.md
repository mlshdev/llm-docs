> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite/inviter](https://developer.apple.com/documentation/gamekit/gkinvite/inviter)

# inviter (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The identifier for the player who sends the invitation.

> Use the [sender](sender.md) property instead.

## Declaration

```swift
var inviter: String { get }
```

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [isHosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.

# inviter (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The identifier for the player who sends the invitation.

> Use the [sender](sender.md) property instead.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSString * inviter;
```

```objectivec
@property (atomic, retain, readonly) NSString * inviter;
```

## See Also

### Getting Properties

- [sender](sender.md): The player who sends the invitation.
- [playerAttributes](playerattributes.md): The player attributes for the match.
- [playerGroup](playergroup.md): The player group for the match.
- [hosted](ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
