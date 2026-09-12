> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/session/isheadtrackingactive](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/session/isheadtrackingactive)

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
