> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/scrolltoitem(at:at:animated:)](https://developer.apple.com/documentation/uikit/uicollectionview/scrolltoitem(at:at:animated:))

# scrollToItem(at:at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the collection view contents until the specified item is visible.

## Declaration

```swift
func scrollToItem(at indexPath: IndexPath, at scrollPosition: UICollectionView.ScrollPosition, animated: Bool)
```

## Parameters

- `indexPath`: The index path of the item to scroll into view.
- `scrollPosition`: An option that specifies where the item should be positioned when scrolling finishes. For a list of possible values, see [UICollectionView.ScrollPosition](scrollposition.md).
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the scrolling behavior or [false](https://developer.apple.com/documentation/swift/false) to adjust the scroll view’s visible content immediately.

## See Also

### Scrolling an item into view

- [UICollectionView.ScrollPosition](scrollposition.md): Constants that indicate how to scroll an item into the visible portion of the collection view.
- [UICollectionView.ScrollDirection](scrolldirection.md): Constants that indicate the direction of scrolling for the layout.

# scrollToItemAtIndexPath:atScrollPosition:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the collection view contents until the specified item is visible.

## Declaration

```objectivec
- (void) scrollToItemAtIndexPath:(NSIndexPath *) indexPath atScrollPosition:(UICollectionViewScrollPosition) scrollPosition animated:(BOOL) animated;
```

## Parameters

- `indexPath`: The index path of the item to scroll into view.
- `scrollPosition`: An option that specifies where the item should be positioned when scrolling finishes. For a list of possible values, see [UICollectionViewScrollPosition](scrollposition.md).
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the scrolling behavior or [false](https://developer.apple.com/documentation/swift/false) to adjust the scroll view’s visible content immediately.

## See Also

### Scrolling an item into view

- [UICollectionViewScrollPosition](scrollposition.md): Constants that indicate how to scroll an item into the visible portion of the collection view.
- [UICollectionViewScrollDirection](scrolldirection.md): Constants that indicate the direction of scrolling for the layout.
