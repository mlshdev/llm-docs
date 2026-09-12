> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/selectchallengeableplayerids(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/selectchallengeableplayerids(_:withcompletionhandler:))

# selectChallengeablePlayerIDs(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Finds the subset of players who can earn an achievement.

> This method is obsolete.

## Declaration

```swift
func selectChallengeablePlayerIDs(_ playerIDs: [String]?, withCompletionHandler completionHandler: (@Sendable ([String]?, (any Error)?) -> Void)? = nil)
```

```swift
func selectChallengeablePlayerIDs(_ playerIDs: [String]?) async throws -> [String]
```

## Parameters

- `playerIDs`: An array of `NSString` objects containing a list of players. The list of players is used to find those players that are eligible to earn the achievement.
- `completionHandler`: A block to be called when the download is completed.

  The block receives the following parameters:

  - ***challengeablePlayerIDs***: An array of player identifiers representing the players in the original array that are able to complete the challenge. If an error occurred, this parameter may be non-`nil`, in which case the array holds whatever achievement information Game Kit was able to fetch.
  - ***error***: If an error occurred, this object describes the error. If the operation completed successfully, this value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues an achievement challenge to a list of players.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports the player’s progress to Game Center.

# selectChallengeablePlayerIDs:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Finds the subset of players who can earn an achievement.

> This method is obsolete.

## Declaration

```objectivec
- (void) selectChallengeablePlayerIDs:(NSArray<NSString *> *) playerIDs withCompletionHandler:(void (^)(NSArray<NSString *> *challengeablePlayerIDs, NSError *error)) completionHandler;
```

## Parameters

- `playerIDs`: An array of `NSString` objects containing a list of players. The list of players is used to find those players that are eligible to earn the achievement.
- `completionHandler`: A block to be called when the download is completed.

  The block receives the following parameters:

  - ***challengeablePlayerIDs***: An array of player identifiers representing the players in the original array that are able to complete the challenge. If an error occurred, this parameter may be non-`nil`, in which case the array holds whatever achievement information Game Kit was able to fetch.
  - ***error***: If an error occurred, this object describes the error. If the operation completed successfully, this value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues an achievement challenge to a list of players.
- [reportAchievementWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports the player’s progress to Game Center.
