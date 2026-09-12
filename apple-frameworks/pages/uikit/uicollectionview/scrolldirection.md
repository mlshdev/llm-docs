> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/scrolldirection](https://developer.apple.com/documentation/uikit/uicollectionview/scrolldirection)

# UICollectionView.ScrollDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the direction of scrolling for the layout.

## Declaration

```swift
enum ScrollDirection
```

## Topics

### Constants

- [UICollectionView.ScrollDirection.vertical](scrolldirection/vertical.md): The layout scrolls content vertically.
- [UICollectionView.ScrollDirection.horizontal](scrolldirection/horizontal.md): The layout scrolls content horizontally.

### Initializers

- [init(rawValue:)](scrolldirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scrolling an item into view

- [scrollToItem(at:at:animated:)](scrolltoitem%28at_at_animated_%29.md): Scrolls the collection view contents until the specified item is visible.
- [UICollectionView.ScrollPosition](scrollposition.md): Constants that indicate how to scroll an item into the visible portion of the collection view.

# UICollectionViewScrollDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the direction of scrolling for the layout.

## Declaration

```objectivec
enum UICollectionViewScrollDirection : NSInteger;
```

## Topics

### Constants

- [UICollectionViewScrollDirectionVertical](scrolldirection/vertical.md): The layout scrolls content vertically.
- [UICollectionViewScrollDirectionHorizontal](scrolldirection/horizontal.md): The layout scrolls content horizontally.

## See Also

### Scrolling an item into view

- [scrollToItemAtIndexPath:atScrollPosition:animated:](scrolltoitem%28at_at_animated_%29.md): Scrolls the collection view contents until the specified item is visible.
- [UICollectionViewScrollPosition](scrollposition.md): Constants that indicate how to scroll an item into the visible portion of the collection view.
