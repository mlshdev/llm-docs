> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity](https://developer.apple.com/documentation/gamekit/gkgameactivity)

# GKGameActivity (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a single instance of a game activity for the current game.

## Declaration

```swift
class GKGameActivity
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)

## Topics

### Creating an activity

- [init(definition:)](gkgameactivity/init%28definition_%29.md): Creates a game activity with definition.
- [start(definition:)](gkgameactivity/start%28definition_%29.md): Creates and starts a game activity with a definition.
- [start(definition:partyCode:)](gkgameactivity/start%28definition_partycode_%29.md): Creates and starts a new game activity with a custom party code.

### Getting the activity definition

- [activityDefinition](gkgameactivity/activitydefinition.md): The activity definition that this activity instance is based on.

### Getting the activity state

- [state](gkgameactivity/state-swift.property.md): The state of the game activity.
- [GKGameActivity.State](gkgameactivity/state-swift.enum.md): The state of a game activity.

### Updating the activity state

- [start()](gkgameactivity/start%28%29.md): Starts the game activity if it’s not already started.
- [pause()](gkgameactivity/pause%28%29.md): Pauses the game activity if it’s not already paused.
- [resume()](gkgameactivity/resume%28%29.md): Resumes the game activity if it was paused.
- [end()](gkgameactivity/end%28%29.md): Ends the game activity if it’s not already ended.

### Getting and removing achievements

- [achievements](gkgameactivity/achievements.md): All achievements that have been associated with this activity.
- [removeAchievements(\_:)](gkgameactivity/removeachievements%28__%29.md): Removes all achievements if they exist.
- [progress(on:)](gkgameactivity/progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgress(on:to:)](gkgameactivity/setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted(\_:)](gkgameactivity/setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

### Getting and removing leaderboard scores

- [leaderboardScores](gkgameactivity/leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [score(on:)](gkgameactivity/score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScore(on:to:)](gkgameactivity/setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScore(on:to:context:)](gkgameactivity/setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScores(from:)](gkgameactivity/removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.

### Getting and verifying the party code

- [partyCode](gkgameactivity/partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](gkgameactivity/partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](gkgameactivity/validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode(\_:)](gkgameactivity/isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.

### Getting the activity properties

- [duration](gkgameactivity/duration.md): The total time elapsed while in active state.
- [startDate](gkgameactivity/startdate.md): The date when the activity was initially started.
- [endDate](gkgameactivity/enddate.md): The date when the activity was officially ended.
- [creationDate](gkgameactivity/creationdate.md): The date when the activity was created.
- [lastResumeDate](gkgameactivity/lastresumedate.md): The date when the activity was last resumed.

### Getting the custom user data

- [properties](gkgameactivity/properties.md): Properties that contain additional information about the activity.

### Getting the activity identifiers

- [identifier](gkgameactivity/identifier.md): The identifier of this activity instance.

### Checking for an activity

- [checkPendingGameActivityExistence(completionHandler:)](gkgameactivity/checkpendinggameactivityexistence%28completionhandler_%29.md): Checks whether there is a pending activity to handle for the current game.

### Creating a matchmaking request

- [makeMatchRequest()](gkgameactivity/makematchrequest%28%29.md): Makes a match request object with information from the activity, which you can use to find matches for the local player.

### Performing a matchmaking request

- [findMatch(completionHandler:)](gkgameactivity/findmatch%28completionhandler_%29.md): Use information from the activity to find matches for the local player.
- [findPlayersForHostedMatch(completionHandler:)](gkgameactivity/findplayersforhostedmatch%28completionhandler_%29.md): Use information from the activity to find server hosted players for the local player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivityDefinition](gkgameactivitydefinition.md): An object that represents the static metadata you define for the activity.
- [GKGameActivityListener](gkgameactivitylistener.md): An object that responds to activity events.

# GKGameActivity (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a single instance of a game activity for the current game.

## Declaration

```objectivec
@interface GKGameActivity : NSObject
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)

## Topics

### Creating an activity

- [initWithDefinition:](gkgameactivity/init%28definition_%29.md): Creates a game activity with definition.
- [startWithDefinition:error:](gkgameactivity/start%28definition_%29.md): Creates and starts a game activity with a definition.
- [startWithDefinition:partyCode:error:](gkgameactivity/start%28definition_partycode_%29.md): Creates and starts a new game activity with a custom party code.

### Getting the activity definition

- [activityDefinition](gkgameactivity/activitydefinition.md): The activity definition that this activity instance is based on.

### Getting the activity state

- [state](gkgameactivity/state-swift.property.md): The state of the game activity.
- [GKGameActivityState](gkgameactivity/state-swift.enum.md): The state of a game activity.

### Updating the activity state

- [start](gkgameactivity/start%28%29.md): Starts the game activity if it’s not already started.
- [pause](gkgameactivity/pause%28%29.md): Pauses the game activity if it’s not already paused.
- [resume](gkgameactivity/resume%28%29.md): Resumes the game activity if it was paused.
- [end](gkgameactivity/end%28%29.md): Ends the game activity if it’s not already ended.

### Getting and removing achievements

- [achievements](gkgameactivity/achievements.md): All achievements that have been associated with this activity.
- [removeAchievements:](gkgameactivity/removeachievements%28__%29.md): Removes all achievements if they exist.
- [getProgressOnAchievement:](gkgameactivity/progress%28on_%29.md): Get the achievement progress from a specific achievement of the local player if previously set.
- [setProgressOnAchievement:toPercentComplete:](gkgameactivity/setprogress%28on_to_%29.md): Set a progress for an achievement for a player.
- [setAchievementCompleted:](gkgameactivity/setachievementcompleted%28__%29.md): Set progress to 100% for an achievement for a player.

### Getting and removing leaderboard scores

- [leaderboardScores](gkgameactivity/leaderboardscores.md): All leaderboard scores that have been associated with this activity.
- [getScoreOnLeaderboard:](gkgameactivity/score%28on_%29.md): Get the leaderboard score from a specific leaderboard of the local player if previously set.
- [setScoreOnLeaderboard:toScore:](gkgameactivity/setscore%28on_to_%29.md): Set a score of a leaderboard for a player.
- [setScoreOnLeaderboard:toScore:context:](gkgameactivity/setscore%28on_to_context_%29.md): Set a score of a leaderboard with a context for a player.
- [removeScoresFromLeaderboards:](gkgameactivity/removescores%28from_%29.md): Removes all scores from leaderboards for a player if exist.

### Getting and verifying the party code

- [partyCode](gkgameactivity/partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](gkgameactivity/partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](gkgameactivity/validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode:](gkgameactivity/isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.

### Getting the activity properties

- [duration](gkgameactivity/duration.md): The total time elapsed while in active state.
- [startDate](gkgameactivity/startdate.md): The date when the activity was initially started.
- [endDate](gkgameactivity/enddate.md): The date when the activity was officially ended.
- [creationDate](gkgameactivity/creationdate.md): The date when the activity was created.
- [lastResumeDate](gkgameactivity/lastresumedate.md): The date when the activity was last resumed.

### Getting the custom user data

- [properties](gkgameactivity/properties.md): Properties that contain additional information about the activity.

### Getting the activity identifiers

- [identifier](gkgameactivity/identifier.md): The identifier of this activity instance.

### Checking for an activity

- [checkPendingGameActivityExistenceWithCompletionHandler:](gkgameactivity/checkpendinggameactivityexistence%28completionhandler_%29.md): Checks whether there is a pending activity to handle for the current game.

### Creating a matchmaking request

- [makeMatchRequest](gkgameactivity/makematchrequest%28%29.md): Makes a match request object with information from the activity, which you can use to find matches for the local player.

### Performing a matchmaking request

- [findMatchWithCompletionHandler:](gkgameactivity/findmatch%28completionhandler_%29.md): Use information from the activity to find matches for the local player.
- [findPlayersForHostedMatchWithCompletionHandler:](gkgameactivity/findplayersforhostedmatch%28completionhandler_%29.md): Use information from the activity to find server hosted players for the local player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivityDefinition](gkgameactivitydefinition.md): An object that represents the static metadata you define for the activity.
- [GKGameActivityListener](gkgameactivitylistener.md): An object that responds to activity events.
