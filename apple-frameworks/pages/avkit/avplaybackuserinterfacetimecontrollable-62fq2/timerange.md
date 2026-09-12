> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/timerange](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/timerange)

# timeRange

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The time range representing the total duration and bounds of the media content. This defines the overall playable timeline, with all segments and seekable ranges falling within this range. For on-demand content, `start` is typically zero and `duration` is the total length of the content. For live content without DVR, set [timeRange](timerange.md) to a zero-duration range at the current live edge and advance it as the edge moves; [seekableTimeRanges](seekabletimeranges.md) must be nil or empty. For live content with DVR, set [timeRange](timerange.md) to the available DVR window and advance both `start` and `end` as the window rolls. Use [seekableTimeRanges](seekabletimeranges.md) to indicate which portion is seekable. The duration is always a finite, non-negative value. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```
