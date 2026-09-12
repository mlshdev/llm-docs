> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/scrollposition](https://developer.apple.com/documentation/uikit/uicollectionview/scrollposition)

# UICollectionView.ScrollPosition (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate how to scroll an item into the visible portion of the collection view.

## Declaration

```swift
struct ScrollPosition
```

## Topics

### Constants

- [top](scrollposition/top.md): Scroll so that the item is positioned at the top of the collection view’s bounds.
- [centeredVertically](scrollposition/centeredvertically.md): Scroll so that the item is centered vertically in the collection view.
- [bottom](scrollposition/bottom.md): Scroll so that the item is positioned at the bottom of the collection view’s bounds.
- [left](scrollposition/left.md): Scroll so that the item is positioned at the left edge of the collection view’s bounds.
- [centeredHorizontally](scrollposition/centeredhorizontally.md): Scroll so that the item is centered horizontally in the collection view.
- [right](scrollposition/right.md): Scroll so that the item is positioned at the right edge of the collection view’s bounds.

### Initializers

- [init(rawValue:)](scrollposition/init%28rawvalue_%29.md): Creates a scroll-position structure with the specified raw value.

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

### Scrolling an item into view

- [scrollToItem(at:at:animated:)](scrolltoitem%28at_at_animated_%29.md): Scrolls the collection view contents until the specified item is visible.
- [UICollectionView.ScrollDirection](scrolldirection.md): Constants that indicate the direction of scrolling for the layout.

# UICollectionViewScrollPosition (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate how to scroll an item into the visible portion of the collection view.

## Declaration

```objectivec
enum UICollectionViewScrollPosition : NSUInteger;
```

## Topics

### Constants

- [UICollectionViewScrollPositionNone](../uicollectionviewscrollposition/uicollectionviewscrollpositionnone.md): Don’t scroll the item into view.
- [UICollectionViewScrollPositionTop](scrollposition/top.md): Scroll so that the item is positioned at the top of the collection view’s bounds.
- [UICollectionViewScrollPositionCenteredVertically](scrollposition/centeredvertically.md): Scroll so that the item is centered vertically in the collection view.
- [UICollectionViewScrollPositionBottom](scrollposition/bottom.md): Scroll so that the item is positioned at the bottom of the collection view’s bounds.
- [UICollectionViewScrollPositionLeft](scrollposition/left.md): Scroll so that the item is positioned at the left edge of the collection view’s bounds.
- [UICollectionViewScrollPositionCenteredHorizontally](scrollposition/centeredhorizontally.md): Scroll so that the item is centered horizontally in the collection view.
- [UICollectionViewScrollPositionRight](scrollposition/right.md): Scroll so that the item is positioned at the right edge of the collection view’s bounds.

## See Also

### Scrolling an item into view

- [scrollToItemAtIndexPath:atScrollPosition:animated:](scrolltoitem%28at_at_animated_%29.md): Scrolls the collection view contents until the specified item is visible.
- [UICollectionViewScrollDirection](scrolldirection.md): Constants that indicate the direction of scrolling for the layout.
