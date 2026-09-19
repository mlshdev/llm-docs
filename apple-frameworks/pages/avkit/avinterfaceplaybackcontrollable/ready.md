> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfaceplaybackcontrollable/ready

# ready

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the media source is ready for playback operations. Returns YES when the source has sufficient data and is prepared to begin playback. Use this property to determine when playback controls should be enabled and when the media can respond to play requests. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReady) BOOL ready;
```
