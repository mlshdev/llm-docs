> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/textlayoutfragment(for:)-68dez](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/textlayoutfragment(for:)-68dez)

# textLayoutFragment(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text layout fragment from the document at the specified location.

## Declaration

```swift
func textLayoutFragment(for location: any NSTextLocation) -> NSTextLayoutFragment?
```

## Parameters

- `location`: The starting location.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): The text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayout(for:)](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManager.SegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

# textLayoutFragmentForLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text layout fragment from the document at the specified location.

## Declaration

```objectivec
- (NSTextLayoutFragment *) textLayoutFragmentForLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: The starting location.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

## See Also

### Causing layout generation

- [textViewportLayoutController](textviewportlayoutcontroller.md): The text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForPosition:](textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayoutForBounds:](ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayoutForRange:](ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentType](segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManagerSegmentOptions](segmentoptions.md): Values that describe where and how the framework extends segments of a selection.
