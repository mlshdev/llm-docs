> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/prepare()](https://developer.apple.com/documentation/appkit/nsscrubberlayout/prepare())

# prepare() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.

## Declaration

```swift
func prepare()
```

<a id="Discussion"></a>

## Discussion

Use this method in subclasses to perform layout calculations and caching in advance of rendering the scrubber.

The system calls this method when the scrubber’s layout is invalidated.

The base implementation of this method does nothing.

## See Also

### Subclassing a scrubber layout

- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItems(in:)](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:)](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

# prepareLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.

## Declaration

```objectivec
- (void) prepareLayout;
```

<a id="Discussion"></a>

## Discussion

Use this method in subclasses to perform layout calculations and caching in advance of rendering the scrubber.

The system calls this method when the scrubber’s layout is invalidated.

The base implementation of this method does nothing.

## See Also

### Subclassing a scrubber layout

- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItemAtIndex:](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItemsInRect:](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.
