> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/groupidentifier](https://developer.apple.com/documentation/gamekit/gkleaderboard/groupidentifier)

# groupIdentifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group the leaderboard belongs to.

## Declaration

```swift
var groupIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

If you add the leaderboard to a group in App Store Connect, this property is the leaderboard group ID you enter in App Store Connect.

## See Also

### Accessing Identifier and Type Properties

- [baseLeaderboardID](baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](title.md): The localized title for the leaderboard.
- [type](type.md): The type of leaderboard, classic or recurring.
- [GKLeaderboard.LeaderboardType](leaderboardtype.md): Specifies whether a leaderboard is recurring.

# groupIdentifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group the leaderboard belongs to.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * groupIdentifier;
```

<a id="Discussion"></a>

## Discussion

If you add the leaderboard to a group in App Store Connect, this property is the leaderboard group ID you enter in App Store Connect.

## See Also

### Accessing Identifier and Type Properties

- [baseLeaderboardID](baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](title.md): The localized title for the leaderboard.
- [type](type.md): The type of leaderboard, classic or recurring.
- [GKLeaderboardType](leaderboardtype.md): Specifies whether a leaderboard is recurring.
