> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/maxplayers](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/maxplayers)

# maxPlayers

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The maximum number of participants that can join the activity. Returns nil when no maximum is set (unlimited players) or when player range is undefined. When not nil, the value is always greater than or equal to `minPlayers`.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * maxPlayers;
```
