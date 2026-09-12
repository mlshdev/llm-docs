> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/report(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/report(completionhandler:))

# report(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Reports the player’s progress to Game Center.

## Declaration

```swift
func report(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func report() async throws
```

## Parameters

- `completionHandler`: A block to be called after the operation completes.

  The block takes the following parameter:

  - ***error***: If the operation was successful, this value is `nil`; otherwise, this parameter holds an object that describes the problem that occurred.

<a id="Discussion"></a>

## Discussion

When the player makes progress towards completing an achievement, your game communicates the player’s progress to Game Center by calling this method. An achievement object is implicitly tied to the local player that was initialized when the object was created; your game should only report progress when the same local player is still on the device.

> **Note**

>  To avoid using network bandwidth unnecessarily, only report an achievement when the player has made more progress towards completing it.

When the progress is successfully reported, the achievement is made visible if it was previously hidden. The [percentComplete](percentcomplete.md) and [lastReportedDate](lastreporteddate.md) property values stored on Game Center are updated if the new [percentComplete](percentcomplete.md) value is greater than the value previously stored on Game Center. if the value of the [percentComplete](percentcomplete.md) property was equal to `100.0`, then the achievement is marked as completed and a banner may be shown to the player.

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. The background task automatically handles network errors, resending the data until the task completes. When the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Related Documentation

- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [isHidden](ishidden.md): Deprecated. A Boolean value that indicates whether the system hides this achievement from the player.
- [isCompleted](iscompleted.md): A Boolean value that states whether the player has completed the achievement.

### Deprecated Methods

- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues an achievement challenge to a list of players.
- [selectChallengeablePlayerIDs(\_:withCompletionHandler:)](selectchallengeableplayerids%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.

# reportAchievementWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Reports the player’s progress to Game Center.

## Declaration

```objectivec
- (void) reportAchievementWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to be called after the operation completes.

  The block takes the following parameter:

  - ***error***: If the operation was successful, this value is `nil`; otherwise, this parameter holds an object that describes the problem that occurred.

<a id="Discussion"></a>

## Discussion

When the player makes progress towards completing an achievement, your game communicates the player’s progress to Game Center by calling this method. An achievement object is implicitly tied to the local player that was initialized when the object was created; your game should only report progress when the same local player is still on the device.

> **Note**

>  To avoid using network bandwidth unnecessarily, only report an achievement when the player has made more progress towards completing it.

When the progress is successfully reported, the achievement is made visible if it was previously hidden. The [percentComplete](percentcomplete.md) and [lastReportedDate](lastreporteddate.md) property values stored on Game Center are updated if the new [percentComplete](percentcomplete.md) value is greater than the value previously stored on Game Center. if the value of the [percentComplete](percentcomplete.md) property was equal to `100.0`, then the achievement is marked as completed and a banner may be shown to the player.

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. The background task automatically handles network errors, resending the data until the task completes. When the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Related Documentation

- [showsCompletionBanner](showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [hidden](ishidden.md): Deprecated. A Boolean value that indicates whether the system hides this achievement from the player.
- [completed](iscompleted.md): A Boolean value that states whether the player has completed the achievement.

### Deprecated Methods

- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues an achievement challenge to a list of players.
- [selectChallengeablePlayerIDs:withCompletionHandler:](selectchallengeableplayerids%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
