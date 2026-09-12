> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/currentsegment](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/currentsegment)

# currentSegment

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The segment containing the current playback position. This property automatically updates as playback progresses through different timeline segments. Use this to determine the current content type (primary vs. secondary) and any special playback characteristics that apply to the current position. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) AVPlaybackUserInterfaceTimelineSegment * currentSegment;
```
