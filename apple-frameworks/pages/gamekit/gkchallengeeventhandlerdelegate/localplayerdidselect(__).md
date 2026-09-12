> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidselect(_:)](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate/localplayerdidselect(_:))

# localPlayerDidSelect(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player selects a challenge banner displayed by GameKit.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
optional func localPlayerDidSelect(_ challenge: GKChallenge!)
```

## Parameters

- `challenge`: The selected challenge.

# localPlayerDidSelectChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the local player selects a challenge banner displayed by GameKit.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
- (void) localPlayerDidSelectChallenge:(GKChallenge *) challenge;
```

## Parameters

- `challenge`: The selected challenge.
