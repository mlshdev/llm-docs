> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/players

# players (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

The array of players associated with the session.

## Declaration

```swift
var players: [AVPlayer] { get }
```

## See Also

### Managing players

- [addPlayer(\_:)](addplayer%28__%29.md): Adds a player to the session.
- [removePlayer(\_:)](removeplayer%28__%29.md): Removes a player from the session.

# players (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

The array of players associated with the session.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<AVPlayer *> * players;
```

## See Also

### Managing players

- [addPlayer:](addplayer%28__%29.md): Adds a player to the session.
- [removePlayer:](removeplayer%28__%29.md): Removes a player from the session.
