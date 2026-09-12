> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/queuename](https://developer.apple.com/documentation/gamekit/gkmatchrequest/queuename)

# queueName (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The name of the queue that Game Center places the match request in.

## Declaration

```swift
var queueName: String? { get set }
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Assigning players to teams using rules](../assigning-players-to-teams-using-rules.md)
- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)
- [Troubleshooting matchmaking rules using metrics](../troubleshooting-matchmaking-rules-using-metrics.md)

<a id="Discussion"></a>

## Discussion

To use matchmaking rules, set the [queueName](queuename.md) property to a queue name that you configure in App Store Connect. Then set [properties](properties.md) and optionally [recipientProperties](recipientproperties.md) to game-specific criteria.

A *queue name* is a uniform type identifier (UTI) that contains only alphanumeric characters (A-Z, a-z, 0-9), hyphens (-), or periods (.). The string should be in reverse-DNS format. Queue names are case sensitive.

Matchmaking rules evaluate the properties of match requests in the same queue to find the best match according to the rules that you set in App Store Connect for the queue. An error occurs if the queue doesn’t exist.

If this property is `nil`, Game Center doesn’t use matchmaking rules to find other players.

For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Related Documentation

- [Create a Queue](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingqueues): Create a queue and add it to a rule set.

### Matching players using rules

- [properties](properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.
- [recipientProperties](recipientproperties.md): The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.

# queueName (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The name of the queue that Game Center places the match request in.

## Declaration

```objectivec
@property (copy, nullable) NSString * queueName;
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Assigning players to teams using rules](../assigning-players-to-teams-using-rules.md)
- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)
- [Troubleshooting matchmaking rules using metrics](../troubleshooting-matchmaking-rules-using-metrics.md)

<a id="Discussion"></a>

## Discussion

To use matchmaking rules, set the [queueName](queuename.md) property to a queue name that you configure in App Store Connect. Then set [properties](properties.md) and optionally [recipientProperties](recipientproperties.md) to game-specific criteria.

A *queue name* is a uniform type identifier (UTI) that contains only alphanumeric characters (A-Z, a-z, 0-9), hyphens (-), or periods (.). The string should be in reverse-DNS format. Queue names are case sensitive.

Matchmaking rules evaluate the properties of match requests in the same queue to find the best match according to the rules that you set in App Store Connect for the queue. An error occurs if the queue doesn’t exist.

If this property is `nil`, Game Center doesn’t use matchmaking rules to find other players.

For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Related Documentation

- [Create a Queue](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingqueues): Create a queue and add it to a rule set.

### Matching players using rules

- [properties](properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.
- [recipientProperties](recipientproperties.md): The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.
- [GKMatchProperties](../gkmatchproperties.md): A type for game-specific properties that Game Center uses to find players when using matchmaking rules.
