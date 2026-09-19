> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfaceplaybackcontrollable/buffering

# buffering

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the media source is currently buffering content. Returns YES when the source is loading data and cannot immediately continue playback. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBuffering) BOOL buffering;
```
