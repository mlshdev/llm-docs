> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/scanspeed

# scanSpeed

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The speed multiplier used during scanning (fast-forward or rewind). This is a transient override active only while `state` is scanning. It does not affect `playbackSpeed`. When scanning ends, playback resumes at `playbackSpeed`.

## Declaration

```swift
@MainActor var scanSpeed: Float { get set }
```
