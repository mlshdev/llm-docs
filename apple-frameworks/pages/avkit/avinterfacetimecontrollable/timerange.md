> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacetimecontrollable/timerange

# timeRange

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The time range representing the total duration and bounds of the media content. This defines the overall playable timeline, with all segments and seekable ranges falling within this range. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```
