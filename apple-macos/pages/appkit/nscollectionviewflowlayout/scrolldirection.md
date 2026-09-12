> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/scrolldirection](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/scrolldirection)

# scrollDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The scroll direction of the layout.

## Declaration

```swift
var scrollDirection: NSCollectionView.ScrollDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The flow layout scrolls along one axis only, either horizontally or vertically. When the scroll direction is [NSCollectionView.ScrollDirection.vertical](../nscollectionview/scrolldirection/vertical.md), the width of the content never exceeds the width of the collection view itself but the height grows as needed to accommodate the current items. When the scroll direction is [NSCollectionView.ScrollDirection.horizontal](../nscollectionview/scrolldirection/horizontal.md), the height never exceeds the height of the collection view but the width grows as needed.

The default value of this property is [NSCollectionView.ScrollDirection.vertical](../nscollectionview/scrolldirection/vertical.md).

# scrollDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The scroll direction of the layout.

## Declaration

```objectivec
@property NSCollectionViewScrollDirection scrollDirection;
```

<a id="Discussion"></a>

## Discussion

The flow layout scrolls along one axis only, either horizontally or vertically. When the scroll direction is [NSCollectionViewScrollDirectionVertical](../nscollectionview/scrolldirection/vertical.md), the width of the content never exceeds the width of the collection view itself but the height grows as needed to accommodate the current items. When the scroll direction is [NSCollectionViewScrollDirectionHorizontal](../nscollectionview/scrolldirection/horizontal.md), the height never exceeds the height of the collection view but the width grows as needed.

The default value of this property is [NSCollectionViewScrollDirectionVertical](../nscollectionview/scrolldirection/vertical.md).
