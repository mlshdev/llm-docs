> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/textlayoutfragment(for:)-4dhrx](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/textlayoutfragment(for:)-4dhrx)

# textLayoutFragment(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text layout fragment at the position you specify in the text container.

## Declaration

```swift
func textLayoutFragment(for position: CGPoint) -> NSTextLayoutFragment?
```

## Parameters

- `position`: A [CGPoint](../../corefoundation/cgpoint.md) that describes the position in the coordinate system for the text container.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [ensureLayout(for:)](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManager.SegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

# textLayoutFragmentForPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text layout fragment at the position you specify in the text container.

## Declaration

```objectivec
- (NSTextLayoutFragment *) textLayoutFragmentForPosition:(CGPoint) position;
```

## Parameters

- `position`: A [CGPoint](../../corefoundation/cgpoint.md) that describes the position in the coordinate system for the text container.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForLocation:](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [ensureLayoutForBounds:](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayoutForRange:](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManagerSegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.
