> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidcomplete(_:)](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidcomplete(_:))

# localPlayerDidComplete(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player completes a challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
optional func localPlayerDidComplete(_ challenge: GKChallenge!)
```

## Parameters

- `challenge`: The completed challenge.

## See Also

### Responding to Challenges Completed By the Local Player

- [shouldShowBanner(forLocallyCompletedChallenge:)](shouldshowbanner%28forlocallycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player completes a challenge.

# localPlayerDidCompleteChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player completes a challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
- (void) localPlayerDidCompleteChallenge:(GKChallenge *) challenge;
```

## Parameters

- `challenge`: The completed challenge.

## See Also

### Responding to Challenges Completed By the Local Player

- [shouldShowBannerForLocallyCompletedChallenge:](shouldshowbanner%28forlocallycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player completes a challenge.
