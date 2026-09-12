> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacetimelinesegment/timerange](https://developer.apple.com/documentation/avkit/avinterfacetimelinesegment/timerange)

# timeRange

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

The time range defining the segment’s position and duration within the overall timeline.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```

## See Also

### Inspecting the segment

- [identifier](identifier.md): Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.
- [requiresLinearPlayback](requireslinearplayback.md): Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.
