> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/segmentoptions/headsegmentextended](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/segmentoptions/headsegmentextended)

# headSegmentExtended (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

Returns the value that causes the framework to extend the segment to the tail edge.

## Declaration

```swift
static var headSegmentExtended: NSTextLayoutManager.SegmentOptions { get }
```

## See Also

### Getting segment options

- [middleFragmentsExcluded](middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [rangeNotRequired](rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [tailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [upstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.

# NSTextLayoutManagerSegmentOptionsHeadSegmentExtended (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

Returns the value that causes the framework to extend the segment to the tail edge.

## Declaration

```objectivec
NSTextLayoutManagerSegmentOptionsHeadSegmentExtended
```

## See Also

### Getting segment options

- [NSTextLayoutManagerSegmentOptionsMiddleFragmentsExcluded](middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [NSTextLayoutManagerSegmentOptionsRangeNotRequired](rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [NSTextLayoutManagerSegmentOptionsTailSegmentExtended](tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsUpstreamAffinity](upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.
