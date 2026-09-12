> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/ensurelayout(for:)-6ptsj](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/ensurelayout(for:)-6ptsj)

# ensureLayout(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Performs the layout for filling the bounds you specify inside the last text container.

## Declaration

```swift
func ensureLayout(for bounds: CGRect)
```

## Parameters

- `bounds`: A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the layout bounds.

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): The text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManager.SegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

# ensureLayoutForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Performs the layout for filling the bounds you specify inside the last text container.

## Declaration

```objectivec
- (void) ensureLayoutForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) that describes the layout bounds.

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): The text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForLocation:](textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragmentForPosition:](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayoutForRange:](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManagerSegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.
