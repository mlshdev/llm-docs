> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/layoutattributesforitem(at:)](https://developer.apple.com/documentation/appkit/nsscrubberlayout/layoutattributesforitem(at:))

# layoutAttributesForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

The layout attributes for the item with the specified index.

## Declaration

```swift
func layoutAttributesForItem(at index: Int) -> NSScrubberLayoutAttributes?
```

<a id="Discussion"></a>

## Discussion

The base implementation returns `nil`.

## See Also

### Subclassing a scrubber layout

- [prepare()](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItems(in:)](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:)](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

# layoutAttributesForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

The layout attributes for the item with the specified index.

## Declaration

```objectivec
- (NSScrubberLayoutAttributes *) layoutAttributesForItemAtIndex:(NSInteger) index;
```

<a id="Discussion"></a>

## Discussion

The base implementation returns `nil`.

## See Also

### Subclassing a scrubber layout

- [prepareLayout](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItemsInRect:](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.
