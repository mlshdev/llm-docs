> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/segmentoptions/rangenotrequired](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/segmentoptions/rangenotrequired)

# rangeNotRequired (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

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
