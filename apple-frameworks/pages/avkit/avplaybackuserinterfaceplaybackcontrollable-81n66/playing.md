> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-81n66/playing

# playing

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether playback is active. Setting this property to YES starts playback; setting it to NO pauses it. This property reflects playback intent — it should remain YES while `isBuffering` is YES, indicating that playback should resume automatically once sufficient data is available. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isPlaying) BOOL playing;
```
