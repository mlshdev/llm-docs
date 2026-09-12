> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate/remoteplayerdidcomplete(_:)](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate/remoteplayerdidcomplete(_:))

# remotePlayerDidComplete(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a remote player completes a challenge issued by the local player.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
optional func remotePlayerDidComplete(_ challenge: GKChallenge!)
```

## Parameters

- `challenge`: The completed challenge.

## See Also

### Responding to Challenges Issued by the Local Player

- [shouldShowBanner(forRemotelyCompletedChallenge:)](shouldshowbanner%28forremotelycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when a remote player completes a challenge.

# remotePlayerDidCompleteChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a remote player completes a challenge issued by the local player.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
- (void) remotePlayerDidCompleteChallenge:(GKChallenge *) challenge;
```

## Parameters

- `challenge`: The completed challenge.

## See Also

### Responding to Challenges Issued by the Local Player

- [shouldShowBannerForRemotelyCompletedChallenge:](shouldshowbanner%28forremotelycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when a remote player completes a challenge.
