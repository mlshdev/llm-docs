> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/report(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkscore/report(_:withcompletionhandler:))

# report(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Reports a list of scores to Game Center

## Declaration

```swift
class func report(_ scores: [GKScore], withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func report(_ scores: [GKScore]) async throws
```

## Parameters

- `scores`: An array of scores to report to Game Center.
- `completionHandler`: A block that GameKit calls when it reports the scores.

  The block receives the following parameter:

  - ***error***: If an error occurred, this parameter holds an error object that describes the problem. If the score was successfully reported, this parameter’s value is `nil`.

<a id="Discussion"></a>

## Discussion

Use this class method whenever you need to submit scores to Game Center, whether you are reporting a single score or multiple scores. The method runs through the array of `GKScore` objects, submitting scores one at a time.

[report(\_:withCompletionHandler:)](report%28__withcompletionhandler_%29.md) provides a sample method to report a score. The `GKScore` object is initialized with the leaderboard ID for the leaderboard it reports its score to and then the [value](value.md) and [context](context.md) for the score are assigned. The leaderboard ID must be the identifier for a leaderboard you configured in App Store Connect. Scores are always reported for the current local player and never for friends.

```objc
- (void) reportScore: (int64_t) score forLeaderboardID: (NSString*) identifier
{
    GKScore *scoreReporter = [[GKScore alloc] initWithLeaderboardIdentifier: identifier];
    scoreReporter.value = score;
    scoreReporter.context = 0;
 
    NSArray *scores = @[scoreReporter];
    [GKScore reportScores:scores withCompletionHandler:^(NSError *error) {
    //Do something interesting here.
    }];
}
```

## See Also

### Reporting a New Score

- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [report(\_:withEligibleChallenges:withCompletionHandler:)](report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.

# reportScores:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Reports a list of scores to Game Center

## Declaration

```objectivec
+ (void) reportScores:(NSArray<GKScore *> *) scores withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `scores`: An array of scores to report to Game Center.
- `completionHandler`: A block that GameKit calls when it reports the scores.

  The block receives the following parameter:

  - ***error***: If an error occurred, this parameter holds an error object that describes the problem. If the score was successfully reported, this parameter’s value is `nil`.

<a id="Discussion"></a>

## Discussion

Use this class method whenever you need to submit scores to Game Center, whether you are reporting a single score or multiple scores. The method runs through the array of `GKScore` objects, submitting scores one at a time.

[reportScores:withCompletionHandler:](report%28__withcompletionhandler_%29.md) provides a sample method to report a score. The `GKScore` object is initialized with the leaderboard ID for the leaderboard it reports its score to and then the [value](value.md) and [context](context.md) for the score are assigned. The leaderboard ID must be the identifier for a leaderboard you configured in App Store Connect. Scores are always reported for the current local player and never for friends.

```objc
- (void) reportScore: (int64_t) score forLeaderboardID: (NSString*) identifier
{
    GKScore *scoreReporter = [[GKScore alloc] initWithLeaderboardIdentifier: identifier];
    scoreReporter.value = score;
    scoreReporter.context = 0;
 
    NSArray *scores = @[scoreReporter];
    [GKScore reportScores:scores withCompletionHandler:^(NSError *error) {
    //Do something interesting here.
    }];
}
```

## See Also

### Reporting a New Score

- [reportLeaderboardScores:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29-2tycl.md): Deprecated. Submits a list of scores and all eligible challenges.
- [reportScores:withEligibleChallenges:withCompletionHandler:](report%28__witheligiblechallenges_withcompletionhandler_%29-3c5lh.md): Deprecated. Submits a list of scores and all eligible challenges.
