> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate/shouldshowbanner(forlocallycompletedchallenge:)](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate/shouldshowbanner(forlocallycompletedchallenge:))

# shouldShowBanner(forLocallyCompletedChallenge:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called to determine whether a banner should be shown when the local player completes a challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
optional func shouldShowBanner(forLocallyCompletedChallenge challenge: GKChallenge!) -> Bool
```

## Parameters

- `challenge`: The completed challenge.

<a id="return-value"></a>

## Return Value

Your delegate should return [true](https://developer.apple.com/documentation/swift/true) if it wants a banner to be displayed. Otherwise it should return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you do not implement this method, a banner is always shown.

## See Also

### Responding to Challenges Completed By the Local Player

- [localPlayerDidComplete(\_:)](localplayerdidcomplete%28__%29.md): Deprecated. Called when the local player completes a challenge.

# shouldShowBannerForLocallyCompletedChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called to determine whether a banner should be shown when the local player completes a challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
- (BOOL) shouldShowBannerForLocallyCompletedChallenge:(GKChallenge *) challenge;
```

## Parameters

- `challenge`: The completed challenge.

<a id="return-value"></a>

## Return Value

Your delegate should return [true](https://developer.apple.com/documentation/swift/true) if it wants a banner to be displayed. Otherwise it should return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you do not implement this method, a banner is always shown.

## See Also

### Responding to Challenges Completed By the Local Player

- [localPlayerDidCompleteChallenge:](localplayerdidcomplete%28__%29.md): Deprecated. Called when the local player completes a challenge.
