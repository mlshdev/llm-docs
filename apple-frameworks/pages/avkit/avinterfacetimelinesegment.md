> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacetimelinesegment](https://developer.apple.com/documentation/avkit/avinterfacetimelinesegment)

# AVInterfaceTimelineSegment

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Class

Represents a contiguous segment of timeline content with specific playback characteristics.

## Declaration

```objectivec
@interface AVInterfaceTimelineSegment : NSObject
```

<a id="overview"></a>

## Overview

Timeline segments divide media content into distinct regions, each with its own classification and behavior rules. Segments are typically used to distinguish between primary content and auxiliary content such as advertisements or bonus material, and to control whether users can seek or skip through specific portions of the timeline.

## Topics

### Inspecting the segment

- [timeRange](avinterfacetimelinesegment/timerange.md): The time range defining the segment’s position and duration within the overall timeline.
- [identifier](avinterfacetimelinesegment/identifier.md): Optional external identifier for tracking or analytics purposes. May correspond to advertisement IDs, chapter markers, or other external systems.
- [requiresLinearPlayback](avinterfacetimelinesegment/requireslinearplayback.md): Indicates whether this segment must be played sequentially without seeking or skipping. Typically used for advertisements or important announcements.

### Instance Properties

- [auxiliaryContent](avinterfacetimelinesegment/auxiliarycontent.md): Indicates whether this segment consists of auxiliary or main content. Returns YES for auxiliary content, such as advertisements, interludes, or bonus material, and NO for main content, such as the main program material.
- [marked](avinterfacetimelinesegment/marked.md): Indicates whether this segment should be visually highlighted or marked in the timeline UI.

### Instance Methods

- [initWithTimeRange:auxiliaryContent:marked:requiresLinearPlayback:identifier:](avinterfacetimelinesegment/initwithtimerange_auxiliarycontent_marked_requireslinearplayback_identifier_.md): Initializes a new timeline segment with the specified characteristics.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
