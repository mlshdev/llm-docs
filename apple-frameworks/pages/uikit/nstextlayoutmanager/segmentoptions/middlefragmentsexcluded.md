> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/segmentoptions/middlefragmentsexcluded](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/segmentoptions/middlefragmentsexcluded)

# middleFragmentsExcluded (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the value that causes the framework to enumerate segments in only the first and last line fragments.

## Declaration

```swift
static var middleFragmentsExcluded: NSTextLayoutManager.SegmentOptions { get }
```

## See Also

### Getting segment options

- [headSegmentExtended](headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [rangeNotRequired](rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [tailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [upstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.

# NSTextLayoutManagerSegmentOptionsMiddleFragmentsExcluded (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the value that causes the framework to enumerate segments in only the first and last line fragments.

## Declaration

```objectivec
NSTextLayoutManagerSegmentOptionsMiddleFragmentsExcluded
```

## See Also

### Getting segment options

- [NSTextLayoutManagerSegmentOptionsHeadSegmentExtended](headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsRangeNotRequired](rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [NSTextLayoutManagerSegmentOptionsTailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsUpstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.
