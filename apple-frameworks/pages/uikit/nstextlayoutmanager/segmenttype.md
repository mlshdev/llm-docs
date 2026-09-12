> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/segmenttype](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/segmenttype)

# NSTextLayoutManager.SegmentType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe the rendering of selection boundaries.

## Declaration

```swift
enum SegmentType
```

## Topics

### Kinds of text selection segments

- [NSTextLayoutManager.SegmentType.highlight](segmenttype/highlight.md): The segment behavior suitable for highlighting.
- [NSTextLayoutManager.SegmentType.selection](segmenttype/selection.md): The segment behavior suitable for selection rendering.
- [NSTextLayoutManager.SegmentType.standard](segmenttype/standard.md): The standard segment, matching the typographic bounds of the range.

### Initializers

- [init(rawValue:)](segmenttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

# NSTextLayoutManagerSegmentType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe the rendering of selection boundaries.

## Declaration

```objectivec
enum NSTextLayoutManagerSegmentType : NSInteger;
```

## Topics

### Kinds of text selection segments

- [NSTextLayoutManagerSegmentTypeHighlight](segmenttype/highlight.md): The segment behavior suitable for highlighting.
- [NSTextLayoutManagerSegmentTypeSelection](segmenttype/selection.md): The segment behavior suitable for selection rendering.
- [NSTextLayoutManagerSegmentTypeStandard](segmenttype/standard.md): The standard segment, matching the typographic bounds of the range.

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForLocation:](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragmentForPosition:](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayoutForBounds:](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayoutForRange:](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.
