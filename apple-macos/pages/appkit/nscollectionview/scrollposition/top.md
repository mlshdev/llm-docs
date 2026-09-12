> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/scrollposition/top](https://developer.apple.com/documentation/appkit/nscollectionview/scrollposition/top)

# top (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Scroll so that the top edge of the selected items’ bounding box is adjacent to the top edge of the collection view’s bounds. This option must not be combined with the [centeredVertically](centeredvertically.md), [bottom](bottom.md), and [nearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.

## Declaration

```swift
static var top: NSCollectionView.ScrollPosition { get }
```

## See Also

### Constants

- [centeredVertically](centeredvertically.md): Scroll so that the bounding box of the selected items is centered vertically in the collection view’s bounds. This option must not be combined with the [top](top.md), [bottom](bottom.md), or [nearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.
- [bottom](bottom.md): Scroll so that the bottom edge of the bounding box is adjacent to the bottom of the collection view’s bounds. This option must not be combined with the [top](top.md), [centeredVertically](centeredvertically.md), or [nearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.
- [nearestHorizontalEdge](nearesthorizontaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (top or bottom) of the collection view. This option must not be combined with the [top](top.md), [centeredVertically](centeredvertically.md), or [bottom](bottom.md) options, but may be combined with other options.
- [left](left.md): Scroll so that the left edge of the selected items’ bounding box is adjacent to the left edge of the collection view’s bounds. This option must not be combined with the [centeredHorizontally](centeredhorizontally.md), [right](right.md), [leadingEdge](leadingedge.md), [trailingEdge](trailingedge.md), or [nearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [centeredHorizontally](centeredhorizontally.md): Scroll so that the selected items’ bounding box is centered horizontally in the collection view’s bounds. This option must not be combined with the [left](left.md), [right](right.md), [leadingEdge](leadingedge.md), [trailingEdge](trailingedge.md), or [nearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [right](right.md): Scroll so that the right edge of the selected items’ bounding box is adjacent to the right edge of the collection view’s bounds. This option must not be combined with the [left](left.md), [centeredHorizontally](centeredhorizontally.md), [leadingEdge](leadingedge.md), [trailingEdge](trailingedge.md), or [nearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [leadingEdge](leadingedge.md): Scroll so that the leading edge of the selected items’ bounding box is adjacent to the leading edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](left.md), [centeredHorizontally](centeredhorizontally.md), [right](right.md), [trailingEdge](trailingedge.md), or [nearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [trailingEdge](trailingedge.md): Scroll so that the trailing edge of the selected items’ bounding box is adjacent to the trailing edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](left.md), [centeredHorizontally](centeredhorizontally.md), [right](right.md), [leadingEdge](leadingedge.md), or [nearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [nearestVerticalEdge](nearestverticaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (leading or trailing) of the collection view. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](left.md), [centeredHorizontally](centeredhorizontally.md), [right](right.md), [leadingEdge](leadingedge.md), or [trailingEdge](trailingedge.md) options, but may be combined with other options.

# NSCollectionViewScrollPositionTop (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Scroll so that the top edge of the selected items’ bounding box is adjacent to the top edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionCenteredVertically](centeredvertically.md), [NSCollectionViewScrollPositionBottom](bottom.md), and [NSCollectionViewScrollPositionNearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.

## Declaration

```objectivec
NSCollectionViewScrollPositionTop
```

## See Also

### Constants

- [NSCollectionViewScrollPositionCenteredVertically](centeredvertically.md): Scroll so that the bounding box of the selected items is centered vertically in the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionTop](top.md), [NSCollectionViewScrollPositionBottom](bottom.md), or [NSCollectionViewScrollPositionNearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionBottom](bottom.md): Scroll so that the bottom edge of the bounding box is adjacent to the bottom of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionTop](top.md), [NSCollectionViewScrollPositionCenteredVertically](centeredvertically.md), or [NSCollectionViewScrollPositionNearestHorizontalEdge](nearesthorizontaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNearestHorizontalEdge](nearesthorizontaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (top or bottom) of the collection view. This option must not be combined with the [NSCollectionViewScrollPositionTop](top.md), [NSCollectionViewScrollPositionCenteredVertically](centeredvertically.md), or [NSCollectionViewScrollPositionBottom](bottom.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionLeft](left.md): Scroll so that the left edge of the selected items’ bounding box is adjacent to the left edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md), [NSCollectionViewScrollPositionRight](right.md), [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md): Scroll so that the selected items’ bounding box is centered horizontally in the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionLeft](left.md), [NSCollectionViewScrollPositionRight](right.md), [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionRight](right.md): Scroll so that the right edge of the selected items’ bounding box is adjacent to the right edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionLeft](left.md), [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md), [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md): Scroll so that the leading edge of the selected items’ bounding box is adjacent to the leading edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](left.md), [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md), [NSCollectionViewScrollPositionRight](right.md), [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md): Scroll so that the trailing edge of the selected items’ bounding box is adjacent to the trailing edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](left.md), [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md), [NSCollectionViewScrollPositionRight](right.md), [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNearestVerticalEdge](nearestverticaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (leading or trailing) of the collection view. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](left.md), [NSCollectionViewScrollPositionCenteredHorizontally](centeredhorizontally.md), [NSCollectionViewScrollPositionRight](right.md), [NSCollectionViewScrollPositionLeadingEdge](leadingedge.md), or [NSCollectionViewScrollPositionTrailingEdge](trailingedge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNone](../../nscollectionviewscrollposition/nscollectionviewscrollpositionnone.md): Do not scroll.
