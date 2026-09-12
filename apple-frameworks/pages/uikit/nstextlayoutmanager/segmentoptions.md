> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/segmentoptions](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/segmentoptions)

# NSTextLayoutManager.SegmentOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe where and how the framework extends segments of a selection.

## Declaration

```swift
struct SegmentOptions
```

## Topics

### Creating segment options

- [init(rawValue:)](segmentoptions/init%28rawvalue_%29.md): Cceates a new segment option using the value you provide.

### Getting segment options

- [headSegmentExtended](segmentoptions/headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [middleFragmentsExcluded](segmentoptions/middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [rangeNotRequired](segmentoptions/rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [tailSegmentExtended](segmentoptions/tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [upstreamAffinity](segmentoptions/upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.

# NSTextLayoutManagerSegmentOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe where and how the framework extends segments of a selection.

## Declaration

```objectivec
enum NSTextLayoutManagerSegmentOptions : NSUInteger;
```

## Topics

### Getting segment options

- [NSTextLayoutManagerSegmentOptionsHeadSegmentExtended](segmentoptions/headsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsMiddleFragmentsExcluded](segmentoptions/middlefragmentsexcluded.md): Returns the value that causes the framework to enumerate segments in only the first and last line fragments.
- [NSTextLayoutManagerSegmentOptionsRangeNotRequired](segmentoptions/rangenotrequired.md): Returns the value that causes the framework enumerate text segment rectangles, but avoids preparing a range object.
- [NSTextLayoutManagerSegmentOptionsTailSegmentExtended](segmentoptions/tailsegmentextended.md): Returns the value that causes the framework to extend the segment to the tail edge.
- [NSTextLayoutManagerSegmentOptionsUpstreamAffinity](segmentoptions/upstreamaffinity.md): Returns the value that causes the framework to the place the segment based on the upstream affinity for an empty range.

### Constants that describe segment options

- [NSTextLayoutManagerSegmentOptionsNone](../nstextlayoutmanagersegmentoptions/nstextlayoutmanagersegmentoptionsnone.md): The value that represents the empty options set.

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForLocation:](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragmentForPosition:](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayoutForBounds:](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayoutForRange:](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
