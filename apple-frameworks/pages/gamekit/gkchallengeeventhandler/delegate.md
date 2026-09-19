> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkchallengeeventhandler/delegate

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The delegate for the event handler.

> No longer supported.

## Declaration

```swift
weak var delegate: (any GKChallengeEventHandlerDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Only access this property from your game’s main thread.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The delegate for the event handler.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, weak) id<GKChallengeEventHandlerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Only access this property from your game’s main thread.
