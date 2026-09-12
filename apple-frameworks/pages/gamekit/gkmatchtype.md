> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchtype](https://developer.apple.com/documentation/gamekit/gkmatchtype)

# GKMatchType (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The kind of match managed by Game Center.

## Declaration

```swift
enum GKMatchType
```

## Topics

### Types

- [GKMatchType.peerToPeer](gkmatchtype/peertopeer.md): A peer-to-peer match hosted by Game Center.
- [GKMatchType.hosted](gkmatchtype/hosted.md): A match hosted on your private server.
- [GKMatchType.turnBased](gkmatchtype/turnbased.md): A turn-based match hosted by Game Center.

### Initializers

- [init(rawValue:)](gkmatchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Restricting the number of players

- [maxPlayersAllowedForMatch(of:)](gkmatchrequest/maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [minPlayers](gkmatchrequest/minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](gkmatchrequest/maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](gkmatchrequest/defaultnumberofplayers.md): The default number of players for the match.

# GKMatchType (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The kind of match managed by Game Center.

## Declaration

```objectivec
enum GKMatchType : NSUInteger;
```

## Topics

### Types

- [GKMatchTypePeerToPeer](gkmatchtype/peertopeer.md): A peer-to-peer match hosted by Game Center.
- [GKMatchTypeHosted](gkmatchtype/hosted.md): A match hosted on your private server.
- [GKMatchTypeTurnBased](gkmatchtype/turnbased.md): A turn-based match hosted by Game Center.

## See Also

### Restricting the number of players

- [maxPlayersAllowedForMatchOfType:](gkmatchrequest/maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [minPlayers](gkmatchrequest/minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](gkmatchrequest/maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](gkmatchrequest/defaultnumberofplayers.md): The default number of players for the match.
