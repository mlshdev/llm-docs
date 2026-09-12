> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacetimelinesegment/identifier](https://developer.apple.com/documentation/avkit/avinterfacetimelinesegment/identifier)

# identifier

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

## See Also

### Inspecting the segment

- [timeRange](timerange.md): The time range defining the segment’s position and duration within the overall timeline.
- [requiresLinearPlayback](requireslinearplayback.md): Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.
