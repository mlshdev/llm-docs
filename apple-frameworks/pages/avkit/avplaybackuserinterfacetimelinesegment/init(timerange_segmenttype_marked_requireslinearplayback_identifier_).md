> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimelinesegment/init(timerange:segmenttype:marked:requireslinearplayback:identifier:)](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimelinesegment/init(timerange:segmenttype:marked:requireslinearplayback:identifier:))

# init(timeRange:segmentType:marked:requiresLinearPlayback:identifier:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new timeline segment with the specified characteristics.

## Declaration

```swift
init(timeRange: CMTimeRange, segmentType: AVPlaybackUserInterfaceTimelineSegmentType, marked: Bool, requiresLinearPlayback: Bool, identifier: String?)
```

## Parameters

- `timeRange`: The time range defining the segment’s position and duration within the timeline.
- `segmentType`: The type of content this segment represents.
- `marked`: Whether the segment should be visually highlighted in the timeline UI.
- `requiresLinearPlayback`: Whether the segment must be played sequentially without seeking or skipping.
- `identifier`: External identifier for tracking or analytics purposes.

# initWithTimeRange:segmentType:marked:requiresLinearPlayback:identifier: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new timeline segment with the specified characteristics.

## Declaration

```objectivec
- (instancetype) initWithTimeRange:(CMTimeRange) timeRange segmentType:(AVPlaybackUserInterfaceTimelineSegmentType) segmentType marked:(BOOL) marked requiresLinearPlayback:(BOOL) requiresLinearPlayback identifier:(NSString *) identifier;
```

## Parameters

- `timeRange`: The time range defining the segment’s position and duration within the timeline.
- `segmentType`: The type of content this segment represents.
- `marked`: Whether the segment should be visually highlighted in the timeline UI.
- `requiresLinearPlayback`: Whether the segment must be played sequentially without seeking or skipping.
- `identifier`: External identifier for tracking or analytics purposes.
