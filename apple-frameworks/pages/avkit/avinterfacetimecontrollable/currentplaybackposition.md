> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacetimecontrollable/currentplaybackposition

# currentPlaybackPosition

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The current playback position within the media time, expressed in seconds from the start of the content. This value should be within the bounds defined by the start and duration properties and represents the exact temporal position of playback. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readwrite) CMTime currentPlaybackPosition;
```
