> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/report(_:witheligiblechallenges:withcompletionhandler:)-2tycl](https://developer.apple.com/documentation/gamekit/gkscore/report(_:witheligiblechallenges:withcompletionhandler:)-2tycl)

# report(\_:withEligibleChallenges:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0) · macOS 11.0+ (deprecated in 26.0) · tvOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Submits a list of scores and all eligible challenges.

## Declaration

```swift
class func report(_ scores: [GKLeaderboardScore], withEligibleChallenges challenges: [GKChallenge], withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func report(_ scores: [GKLeaderboardScore], withEligibleChallenges challenges: [GKChallenge]) async throws
```

## Parameters

- `scores`: An array of scores to report.
- `challenges`: An array of challenges that GameKit associates with the reported scores.
- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameter:

  - ***error***: If an error occurs, this object describes the error. If the operation completed successfully, this value is `nil`.

## See Also

### Reporting a New Score

- [report(\_:withCompletionHandler:)](report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center
- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.

# reportLeaderboardScores:withEligibleChallenges:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0) · macOS 11.0+ (deprecated in 26.0) · tvOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Submits a list of scores and all eligible challenges.

## Declaration

```objectivec
+ (void) reportLeaderboardScores:(NSArray<GKLeaderboardScore *> *) scores withEligibleChallenges:(NSArray<GKChallenge *> *) challenges withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `scores`: An array of scores to report.
- `challenges`: An array of challenges that GameKit associates with the reported scores.
- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameter:

  - ***error***: If an error occurs, this object describes the error. If the operation completed successfully, this value is `nil`.

## See Also

### Reporting a New Score

- [reportScores:withCompletionHandler:](report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center
- [reportScores:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.
