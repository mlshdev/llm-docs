> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-81n66/buffering

# buffering

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the media source is currently stalled waiting for data. Returns YES when the source cannot immediately sustain continuous playback. This may occur both before `isReady` becomes YES during initial loading, and after `isReady` is YES during mid-playback stalls. When YES, `isPlaying` may still be YES, indicating that playback should resume automatically once sufficient data is available. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBuffering) BOOL buffering;
```
