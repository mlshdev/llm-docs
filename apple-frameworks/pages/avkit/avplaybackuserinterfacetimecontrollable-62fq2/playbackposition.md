> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/playbackposition](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/playbackposition)

# playbackPosition

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A snapshot of the current playback position. Must be updated — with a fresh `hostTime` — on play, pause, seek, scan, and buffering state changes. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) AVPlaybackUserInterfacePlaybackPosition * playbackPosition;
```
