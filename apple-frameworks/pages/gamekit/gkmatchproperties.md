> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchproperties](https://developer.apple.com/documentation/gamekit/gkmatchproperties)

# GKMatchProperties

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Type Alias  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

A type for game-specific properties that Game Center uses to find players when using matchmaking rules.

## Declaration

```objectivec
typedef NSDictionary<NSString *,id> GKMatchProperties;
```

<a id="Discussion"></a>

## Discussion

For more information, see [Matchmaking rules](matchmaking-rules.md).

## See Also

### Getting matchmaking properties

- [properties](gkmatch/properties.md): The local player’s properties that matchmaking rules used to find the players with some additions.
- [playerProperties](gkmatch/playerproperties.md): The properties for other players that matchmaking rules uses to find players, with some additions.
