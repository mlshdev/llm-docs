> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset/groupidentifier](https://developer.apple.com/documentation/gamekit/gkleaderboardset/groupidentifier)

# groupIdentifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group that the leaderboard set belongs to.

## Declaration

```swift
var groupIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

GameKit sets this property when the leaderboard set is part of a game group, and it calls `loadLeaderboardSetsWithCompletionHandler:` for leaderboards that support game groups.

## See Also

### Accessing Properties

- [title](title.md): The localized title for the leaderboard set.
- [identifier](identifier.md): The identifier for the leaderboard set.

# groupIdentifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group that the leaderboard set belongs to.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * groupIdentifier;
```

<a id="Discussion"></a>

## Discussion

GameKit sets this property when the leaderboard set is part of a game group, and it calls `loadLeaderboardSetsWithCompletionHandler:` for leaderboards that support game groups.

## See Also

### Accessing Properties

- [title](title.md): The localized title for the leaderboard set.
- [identifier](identifier.md): The identifier for the leaderboard set.
