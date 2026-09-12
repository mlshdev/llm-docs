> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionrepresentable/devices](https://developer.apple.com/documentation/nowplaying/remotemediasessionrepresentable/devices)

# devices

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The devices currently playing as part of this session.

## Declaration

```swift
@MainActor var devices: [MediaDevice] { get }
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

Return an empty array when no devices are actively playing. The framework uses this list to surface per-device volume controls.
