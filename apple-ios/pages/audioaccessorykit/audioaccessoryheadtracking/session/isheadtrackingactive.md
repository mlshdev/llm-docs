> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/session/isheadtrackingactive

# isHeadTrackingActive

**Framework:** AudioAccessoryKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+

Returns `true` when head tracking is currently enabled for this accessory; `false` otherwise.

## Declaration

```swift
final var isHeadTrackingActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use this to bootstrap state at session start. After activation, prefer `headTrackingStateDidChange(isActive:)` for updates.
