> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/scrollposition](https://developer.apple.com/documentation/appkit/nscollectionview/scrollposition)

# NSCollectionView.ScrollPosition (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants indicating the options for scrolling the collection view’s content.

## Declaration

```swift
struct ScrollPosition
```

## Topics

### Constants

- [top](scrollposition/top.md): Scroll so that the top edge of the selected items’ bounding box is adjacent to the top edge of the collection view’s bounds. This option must not be combined with the [centeredVertically](scrollposition/centeredvertically.md), [bottom](scrollposition/bottom.md), and [nearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [centeredVertically](scrollposition/centeredvertically.md): Scroll so that the bounding box of the selected items is centered vertically in the collection view’s bounds. This option must not be combined with the [top](scrollposition/top.md), [bottom](scrollposition/bottom.md), or [nearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [bottom](scrollposition/bottom.md): Scroll so that the bottom edge of the bounding box is adjacent to the bottom of the collection view’s bounds. This option must not be combined with the [top](scrollposition/top.md), [centeredVertically](scrollposition/centeredvertically.md), or [nearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [nearestHorizontalEdge](scrollposition/nearesthorizontaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (top or bottom) of the collection view. This option must not be combined with the [top](scrollposition/top.md), [centeredVertically](scrollposition/centeredvertically.md), or [bottom](scrollposition/bottom.md) options, but may be combined with other options.
- [left](scrollposition/left.md): Scroll so that the left edge of the selected items’ bounding box is adjacent to the left edge of the collection view’s bounds. This option must not be combined with the [centeredHorizontally](scrollposition/centeredhorizontally.md), [right](scrollposition/right.md), [leadingEdge](scrollposition/leadingedge.md), [trailingEdge](scrollposition/trailingedge.md), or [nearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [centeredHorizontally](scrollposition/centeredhorizontally.md): Scroll so that the selected items’ bounding box is centered horizontally in the collection view’s bounds. This option must not be combined with the [left](scrollposition/left.md), [right](scrollposition/right.md), [leadingEdge](scrollposition/leadingedge.md), [trailingEdge](scrollposition/trailingedge.md), or [nearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [right](scrollposition/right.md): Scroll so that the right edge of the selected items’ bounding box is adjacent to the right edge of the collection view’s bounds. This option must not be combined with the [left](scrollposition/left.md), [centeredHorizontally](scrollposition/centeredhorizontally.md), [leadingEdge](scrollposition/leadingedge.md), [trailingEdge](scrollposition/trailingedge.md), or [nearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [leadingEdge](scrollposition/leadingedge.md): Scroll so that the leading edge of the selected items’ bounding box is adjacent to the leading edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](scrollposition/left.md), [centeredHorizontally](scrollposition/centeredhorizontally.md), [right](scrollposition/right.md), [trailingEdge](scrollposition/trailingedge.md), or [nearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [trailingEdge](scrollposition/trailingedge.md): Scroll so that the trailing edge of the selected items’ bounding box is adjacent to the trailing edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](scrollposition/left.md), [centeredHorizontally](scrollposition/centeredhorizontally.md), [right](scrollposition/right.md), [leadingEdge](scrollposition/leadingedge.md), or [nearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [nearestVerticalEdge](scrollposition/nearestverticaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (leading or trailing) of the collection view. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [left](scrollposition/left.md), [centeredHorizontally](scrollposition/centeredhorizontally.md), [right](scrollposition/right.md), [leadingEdge](scrollposition/leadingedge.md), or [trailingEdge](scrollposition/trailingedge.md) options, but may be combined with other options.

### Initializers

- [init(rawValue:)](scrollposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSCollectionView.DropOperation](dropoperation.md): These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the [collectionView(\_:acceptDrop:index:dropOperation:)](../nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](../nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](../nscollectionviewdelegate.md)

# NSCollectionViewScrollPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants indicating the options for scrolling the collection view’s content.

## Declaration

```objectivec
enum NSCollectionViewScrollPosition : NSUInteger;
```

## Topics

### Constants

- [NSCollectionViewScrollPositionTop](scrollposition/top.md): Scroll so that the top edge of the selected items’ bounding box is adjacent to the top edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionCenteredVertically](scrollposition/centeredvertically.md), [NSCollectionViewScrollPositionBottom](scrollposition/bottom.md), and [NSCollectionViewScrollPositionNearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionCenteredVertically](scrollposition/centeredvertically.md): Scroll so that the bounding box of the selected items is centered vertically in the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionTop](scrollposition/top.md), [NSCollectionViewScrollPositionBottom](scrollposition/bottom.md), or [NSCollectionViewScrollPositionNearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionBottom](scrollposition/bottom.md): Scroll so that the bottom edge of the bounding box is adjacent to the bottom of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionTop](scrollposition/top.md), [NSCollectionViewScrollPositionCenteredVertically](scrollposition/centeredvertically.md), or [NSCollectionViewScrollPositionNearestHorizontalEdge](scrollposition/nearesthorizontaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNearestHorizontalEdge](scrollposition/nearesthorizontaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (top or bottom) of the collection view. This option must not be combined with the [NSCollectionViewScrollPositionTop](scrollposition/top.md), [NSCollectionViewScrollPositionCenteredVertically](scrollposition/centeredvertically.md), or [NSCollectionViewScrollPositionBottom](scrollposition/bottom.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionLeft](scrollposition/left.md): Scroll so that the left edge of the selected items’ bounding box is adjacent to the left edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md), [NSCollectionViewScrollPositionRight](scrollposition/right.md), [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md): Scroll so that the selected items’ bounding box is centered horizontally in the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionLeft](scrollposition/left.md), [NSCollectionViewScrollPositionRight](scrollposition/right.md), [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionRight](scrollposition/right.md): Scroll so that the right edge of the selected items’ bounding box is adjacent to the right edge of the collection view’s bounds. This option must not be combined with the [NSCollectionViewScrollPositionLeft](scrollposition/left.md), [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md), [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md), [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md): Scroll so that the leading edge of the selected items’ bounding box is adjacent to the leading edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](scrollposition/left.md), [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md), [NSCollectionViewScrollPositionRight](scrollposition/right.md), [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md): Scroll so that the trailing edge of the selected items’ bounding box is adjacent to the trailing edge of the collection view’s bounds. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](scrollposition/left.md), [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md), [NSCollectionViewScrollPositionRight](scrollposition/right.md), [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md), or [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNearestVerticalEdge](scrollposition/nearestverticaledge.md): Scroll so that the bounding box is adjacent to the nearest edge (leading or trailing) of the collection view. Use this option to support both left-to-right and right-to-left layouts appropriately. This option must not be combined with the [NSCollectionViewScrollPositionLeft](scrollposition/left.md), [NSCollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md), [NSCollectionViewScrollPositionRight](scrollposition/right.md), [NSCollectionViewScrollPositionLeadingEdge](scrollposition/leadingedge.md), or [NSCollectionViewScrollPositionTrailingEdge](scrollposition/trailingedge.md) options, but may be combined with other options.
- [NSCollectionViewScrollPositionNone](../nscollectionviewscrollposition/nscollectionviewscrollpositionnone.md): Do not scroll.

## See Also

### Constants

- [NSCollectionViewDropOperation](dropoperation.md): These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the [collectionView:acceptDrop:index:dropOperation:](../nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView:validateDrop:proposedIndex:dropOperation:](../nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](../nscollectionviewdelegate.md)
