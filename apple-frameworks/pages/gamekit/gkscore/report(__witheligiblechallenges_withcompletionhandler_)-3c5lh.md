> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/report(_:witheligiblechallenges:withcompletionhandler:)-3c5lh](https://developer.apple.com/documentation/gamekit/gkscore/report(_:witheligiblechallenges:withcompletionhandler:)-3c5lh)

# report(\_:withEligibleChallenges:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Submits a list of scores and all eligible challenges.

## Declaration

```swift
class func report(_ scores: [GKScore], withEligibleChallenges challenges: [GKChallenge], withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func report(_ scores: [GKScore], withEligibleChallenges challenges: [GKChallenge]) async throws
```

## Parameters

- `scores`: An array of scores to report.
- `challenges`: An array of challenges that GameKit associates with the reported scores.
- `completionHandler`: A block that GameKit calls when the download completes.

  The block receives the following parameter:

  - ***error***: If an error occurred, this object describes the error. If the operation completed successfully, this value is `nil`.

## See Also

### Reporting a New Score

- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [report(\_:withCompletionHandler:)](report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center

# reportScores:withEligibleChallenges:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS  (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Submits a list of scores and all eligible challenges.

## Declaration

```objectivec
+ (void) reportScores:(NSArray<GKScore *> *) scores withEligibleChallenges:(NSArray<GKChallenge *> *) challenges withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `scores`: An array of scores to report.
- `challenges`: An array of challenges that GameKit associates with the reported scores.
- `completionHandler`: A block that GameKit calls when the download completes.

  The block receives the following parameter:

  - ***error***: If an error occurred, this object describes the error. If the operation completed successfully, this value is `nil`.

## See Also

### Reporting a New Score

- [reportLeaderboardScores:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [reportScores:withCompletionHandler:](report%28__withcompletionhandler_%29.md): Deprecated. Reports a list of scores to Game Center
