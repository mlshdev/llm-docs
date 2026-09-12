> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/scrubbercontentsize](https://developer.apple.com/documentation/appkit/nsscrubberlayout/scrubbercontentsize)

# scrubberContentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The size required to contain all elements within the scrubber.

## Declaration

```swift
var scrubberContentSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

The base implementation returns [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Subclassing a scrubber layout

- [prepare()](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItems(in:)](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:)](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

# scrubberContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The size required to contain all elements within the scrubber.

## Declaration

```objectivec
@property (readonly) NSSize scrubberContentSize;
```

<a id="Discussion"></a>

## Discussion

The base implementation returns [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Subclassing a scrubber layout

- [prepareLayout](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [layoutAttributesForItemAtIndex:](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItemsInRect:](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.
