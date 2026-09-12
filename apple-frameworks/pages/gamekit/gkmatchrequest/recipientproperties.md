> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/recipientproperties](https://developer.apple.com/documentation/gamekit/gkmatchrequest/recipientproperties)

# recipientProperties (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.

## Declaration

```swift
var recipientProperties: [GKPlayer : [String : Any]]? { get set }
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Troubleshooting matchmaking rules using metrics](../troubleshooting-matchmaking-rules-using-metrics.md)

<a id="Discussion"></a>

## Discussion

Matchmaking rules may use these properties to improve matchmaking results and reduce wait times. You set rules in App Store Connect to find players that best match one or more of the recipient’s properties in a reasonable amount of time by loosening the criteria over time.

This property contains key-value pairs where the keys are the recipient player objects and the values are the recipient’s properties. The recipient’s properties are key-value pairs with game-specific meanings where keys may be any string, except `gc`, which GameKit reserves. The values need to be types that the [JSONSerialization](../../foundation/jsonserialization.md) class can convert to JSON data.

```swift
// Create a match request.
let request = GKMatchRequest()
var invitedPlayer: GKPlayer

// Set the matchmaking rules queue name.
request.queueName = "com.example.mygame.SkillBasedQueue"

// To balance matches by skill levels, add skill to the properties.
request.properties = [ "skill": 11]

// Set the recipients of this match request.
request.recipients = [ invitedPlayer ]

// Then set the skill levels of the recipients if known.
request.recipientProperties = [ invitedPlayer: [
    "skill": 10
]]
```

If the player objects aren’t in the [recipients](recipients.md) property, an error occurs. If this property is `nil`, matchmaking rules use the local player’s properties to find the best match instead.

For hosted games, if you set this property, use the [findMatchedPlayers(\_:withCompletionHandler:)](../gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md) method to submit the match request so Game Center returns other player properties in the matchmaking results.

If the [queueName](queuename.md) property is `nil`, Game Center doesn’t use matchmaking rules and ignores the [recipientProperties](recipientproperties.md) property.

For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players using rules

- [queueName](queuename.md): The name of the queue that Game Center places the match request in.
- [properties](properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.

# recipientProperties (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<GKPlayer *,NSDictionary<NSString *,id> *> * recipientProperties;
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Troubleshooting matchmaking rules using metrics](../troubleshooting-matchmaking-rules-using-metrics.md)

<a id="Discussion"></a>

## Discussion

Matchmaking rules may use these properties to improve matchmaking results and reduce wait times. You set rules in App Store Connect to find players that best match one or more of the recipient’s properties in a reasonable amount of time by loosening the criteria over time.

This property contains key-value pairs where the keys are the recipient player objects and the values are the recipient’s properties. The recipient’s properties are key-value pairs with game-specific meanings where keys may be any string, except `gc`, which GameKit reserves. The values need to be types that the [NSJSONSerialization](../../foundation/jsonserialization.md) class can convert to JSON data.

```swift
// Create a match request.
let request = GKMatchRequest()
var invitedPlayer: GKPlayer

// Set the matchmaking rules queue name.
request.queueName = "com.example.mygame.SkillBasedQueue"

// To balance matches by skill levels, add skill to the properties.
request.properties = [ "skill": 11]

// Set the recipients of this match request.
request.recipients = [ invitedPlayer ]

// Then set the skill levels of the recipients if known.
request.recipientProperties = [ invitedPlayer: [
    "skill": 10
]]
```

If the player objects aren’t in the [recipients](recipients.md) property, an error occurs. If this property is `nil`, matchmaking rules use the local player’s properties to find the best match instead.

For hosted games, if you set this property, use the [findMatchedPlayers:withCompletionHandler:](../gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md) method to submit the match request so Game Center returns other player properties in the matchmaking results.

If the [queueName](queuename.md) property is `nil`, Game Center doesn’t use matchmaking rules and ignores the [recipientProperties](recipientproperties.md) property.

For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players using rules

- [queueName](queuename.md): The name of the queue that Game Center places the match request in.
- [properties](properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.
- [GKMatchProperties](../gkmatchproperties.md): A type for game-specific properties that Game Center uses to find players when using matchmaking rules.
