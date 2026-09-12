> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/segmentoptions/rangenotrequired](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/segmentoptions/rangenotrequired)

# rangeNotRequired (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.

## Declaration

```swift
static var rangeNotRequired: NSTextLayoutManager.SegmentOptions { get }
```

## See Also

### Getting segment options

- [headSegmentExtended](headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [middleFragmentsExcluded](middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [tailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [upstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.

# NSTextLayoutManagerSegmentOptionsRangeNotRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.

## Declaration

```objectivec
NSTextLayoutManagerSegmentOptionsRangeNotRequired
```

## See Also

### Getting segment options

- [NSTextLayoutManagerSegmentOptionsHeadSegmentExtended](headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsMiddleFragmentsExcluded](middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [NSTextLayoutManagerSegmentOptionsTailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsUpstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.
