> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/scrolldirection](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/scrolldirection)

# scrollDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The scroll direction of the grid.

## Declaration

```swift
var scrollDirection: UICollectionView.ScrollDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The grid layout scrolls along one axis only, either horizontally or vertically. For the non scrolling axis, the width of the collection view in that dimension serves as starting width of the content.

The default value of this property is [UICollectionView.ScrollDirection.vertical](../uicollectionview/scrolldirection/vertical.md).

## See Also

### Configuring the scroll direction

- [UICollectionView.ScrollDirection](../uicollectionview/scrolldirection.md): Constants that indicate the direction of scrolling for the layout.

# scrollDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The scroll direction of the grid.

## Declaration

```objectivec
@property (nonatomic) UICollectionViewScrollDirection scrollDirection;
```

<a id="Discussion"></a>

## Discussion

The grid layout scrolls along one axis only, either horizontally or vertically. For the non scrolling axis, the width of the collection view in that dimension serves as starting width of the content.

The default value of this property is [UICollectionViewScrollDirectionVertical](../uicollectionview/scrolldirection/vertical.md).

## See Also

### Configuring the scroll direction

- [UICollectionViewScrollDirection](../uicollectionview/scrolldirection.md): Constants that indicate the direction of scrolling for the layout.
