> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/leaderboardtype](https://developer.apple.com/documentation/gamekit/gkleaderboard/leaderboardtype)

# GKLeaderboard.LeaderboardType (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies whether a leaderboard is recurring.

## Declaration

```swift
enum LeaderboardType
```

## Topics

### Constants

- [GKLeaderboard.LeaderboardType.classic](leaderboardtype/classic.md): A leaderboard that never expires, showing all-time rankings of all players.
- [GKLeaderboard.LeaderboardType.recurring](leaderboardtype/recurring.md): A leaderboard that recurs, allowing players a fresh start to compete and earn higher ranks in each ocurrence.

### Initializers

- [init(rawValue:)](leaderboardtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Identifier and Type Properties

- [baseLeaderboardID](baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](title.md): The localized title for the leaderboard.
- [type](type.md): The type of leaderboard, classic or recurring.
- [groupIdentifier](groupidentifier.md): The identifier for the group the leaderboard belongs to.

# GKLeaderboardType (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Specifies whether a leaderboard is recurring.

## Declaration

```objectivec
enum GKLeaderboardType : NSInteger;
```

## Topics

### Constants

- [GKLeaderboardTypeClassic](leaderboardtype/classic.md): A leaderboard that never expires, showing all-time rankings of all players.
- [GKLeaderboardTypeRecurring](leaderboardtype/recurring.md): A leaderboard that recurs, allowing players a fresh start to compete and earn higher ranks in each ocurrence.

## See Also

### Accessing Identifier and Type Properties

- [baseLeaderboardID](baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](title.md): The localized title for the leaderboard.
- [type](type.md): The type of leaderboard, classic or recurring.
- [groupIdentifier](groupidentifier.md): The identifier for the group the leaderboard belongs to.
