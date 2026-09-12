> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/layoutattributesforitems(in:)](https://developer.apple.com/documentation/appkit/nsscrubberlayout/layoutattributesforitems(in:))

# layoutAttributesForItems(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

The set of layout attributes for all items within the provided rectangle.

## Declaration

```swift
func layoutAttributesForItems(in rect: NSRect) -> Set<NSScrubberLayoutAttributes>
```

<a id="Discussion"></a>

## Discussion

The base implementation returns an empty [NSSet](https://developer.apple.com/documentation/foundation/nsset).

## See Also

### Subclassing a scrubber layout

- [prepare()](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:)](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

# layoutAttributesForItemsInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

The set of layout attributes for all items within the provided rectangle.

## Declaration

```objectivec
- (NSSet<__kindof NSScrubberLayoutAttributes *> *) layoutAttributesForItemsInRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

The base implementation returns an empty [NSSet](https://developer.apple.com/documentation/foundation/nsset).

## See Also

### Subclassing a scrubber layout

- [prepareLayout](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItemAtIndex:](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:](shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.
