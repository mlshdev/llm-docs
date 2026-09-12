> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/shouldinvalidatelayoutforchange(fromvisiblerect:tovisiblerect:)](https://developer.apple.com/documentation/appkit/nsscrubberlayout/shouldinvalidatelayoutforchange(fromvisiblerect:tovisiblerect:))

# shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Determines whether the scrubber should refresh its layout in response to a change of its visible region.

## Declaration

```swift
func shouldInvalidateLayoutForChange(fromVisibleRect: NSRect, toVisibleRect: NSRect) -> Bool
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the scrubber invalidates its layout in response to a change of the visible region, in response to a user scroll action, or to the scrubber being resized. Subclasses that rely on the size or origin of the visible region should return [true](https://developer.apple.com/documentation/swift/true).

The base implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Subclassing a scrubber layout

- [prepare()](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItems(in:)](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

# shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Determines whether the scrubber should refresh its layout in response to a change of its visible region.

## Declaration

```objectivec
- (BOOL) shouldInvalidateLayoutForChangeFromVisibleRect:(NSRect) fromVisibleRect toVisibleRect:(NSRect) toVisibleRect;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the scrubber invalidates its layout in response to a change of the visible region, in response to a user scroll action, or to the scrubber being resized. Subclasses that rely on the size or origin of the visible region should return [true](https://developer.apple.com/documentation/swift/true).

The base implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Subclassing a scrubber layout

- [prepareLayout](prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItemAtIndex:](layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItemsInRect:](layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [automaticallyMirrorsInRightToLeftLayout](automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.
