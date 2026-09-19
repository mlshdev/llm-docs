> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacetimecontrollable/currentsegment

# currentSegment

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The segment containing the current playback position. This property automatically updates as playback progresses through different timeline segments. Use this to determine the current content type (primary vs. secondary) and any special playback characteristics that apply to the current position. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) AVInterfaceTimelineSegment * currentSegment;
```
