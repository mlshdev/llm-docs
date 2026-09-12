> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacetimelinesegment/requireslinearplayback](https://developer.apple.com/documentation/avkit/avinterfacetimelinesegment/requireslinearplayback)

# requiresLinearPlayback

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL requiresLinearPlayback;
```

## See Also

### Inspecting the segment

- [timeRange](timerange.md): The time range defining the segment’s position and duration within the overall timeline.
- [identifier](identifier.md): Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.
