> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidreceive(_:)](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidreceive(_:))

# localPlayerDidReceive(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player receives a new challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
optional func localPlayerDidReceive(_ challenge: GKChallenge!)
```

## Parameters

- `challenge`: The received challenge.

## See Also

### Responding When a New Challenge is Received

- [shouldShowBanner(forLocallyReceivedChallenge:)](shouldshowbanner%28forlocallyreceivedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player receives a challenge.

# localPlayerDidReceiveChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player receives a new challenge.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
- (void) localPlayerDidReceiveChallenge:(GKChallenge *) challenge;
```

## Parameters

- `challenge`: The received challenge.

## See Also

### Responding When a New Challenge is Received

- [shouldShowBannerForLocallyReceivedChallenge:](shouldshowbanner%28forlocallyreceivedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player receives a challenge.
