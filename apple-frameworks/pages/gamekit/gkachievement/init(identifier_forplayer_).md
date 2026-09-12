> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/init(identifier:forplayer:)](https://developer.apple.com/documentation/gamekit/gkachievement/init(identifier:forplayer:))

# init(identifier:forPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes an achievement for a specific player.

## Declaration

```swift
init?(identifier: String?, forPlayer playerID: String)
```

## Parameters

- `identifier`: A string that matches the identifier string for an achievement you created for your game in App Store Connect.
- `playerID`: The identifier for the player associated with the specified achievement.

<a id="Discussion"></a>

## Discussion

Your game initializes a new achievement object for a specific player only when it has not previously reported progress for that achievement. Use this method to submit a participant’s achievement when ending a turn-based match.

# initWithIdentifier:forPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes an achievement for a specific player.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier forPlayer:(NSString *) playerID;
```

## Parameters

- `identifier`: A string that matches the identifier string for an achievement you created for your game in App Store Connect.
- `playerID`: The identifier for the player associated with the specified achievement.

<a id="Discussion"></a>

## Discussion

Your game initializes a new achievement object for a specific player only when it has not previously reported progress for that achievement. Use this method to submit a participant’s achievement when ending a turn-based match.
