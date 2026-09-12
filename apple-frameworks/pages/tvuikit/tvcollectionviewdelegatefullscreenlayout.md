> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout](https://developer.apple.com/documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout)

# TVCollectionViewDelegateFullScreenLayout (Swift)

**Framework:** TVUIKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods that send notifications of events during cell transitions.

## Declaration

```swift
protocol TVCollectionViewDelegateFullScreenLayout : UICollectionViewDelegate
```

<a id="overview"></a>

## Overview

The methods contained in this protocol help you manage and control cell transitions.

## Topics

### Managing Cell Transitions

- [collectionView(\_:layout:willCenterCellAt:)](tvcollectionviewdelegatefullscreenlayout/collectionview%28__layout_willcentercellat_%29.md): Tells the delegate when a cell is to be the center cell.
- [collectionView(\_:layout:didCenterCellAt:)](tvcollectionviewdelegatefullscreenlayout/collectionview%28__layout_didcentercellat_%29.md): Tells the delegate when a cell has completed the transition and has become the center cell.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UICollectionViewDelegate](../uikit/uicollectionviewdelegate.md)
- [UIScrollViewDelegate](../uikit/uiscrollviewdelegate.md)

## See Also

### Collections of content

- [Creating immersive experiences using a full-screen layout](creating-immersive-experiences-using-a-full-screen-layout.md): Display content with a collection view that maximizes the tvOS experience.
- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.

# TVCollectionViewDelegateFullScreenLayout (Objective-C)

**Framework:** TVUIKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods that send notifications of events during cell transitions.

## Declaration

```objectivec
@protocol TVCollectionViewDelegateFullScreenLayout <UICollectionViewDelegate>
```

<a id="overview"></a>

## Overview

The methods contained in this protocol help you manage and control cell transitions.

## Topics

### Managing Cell Transitions

- [collectionView:layout:willCenterCellAtIndexPath:](tvcollectionviewdelegatefullscreenlayout/collectionview%28__layout_willcentercellat_%29.md): Tells the delegate when a cell is to be the center cell.
- [collectionView:layout:didCenterCellAtIndexPath:](tvcollectionviewdelegatefullscreenlayout/collectionview%28__layout_didcentercellat_%29.md): Tells the delegate when a cell has completed the transition and has become the center cell.

## Relationships

### Inherits From

- [UICollectionViewDelegate](../uikit/uicollectionviewdelegate.md)

## See Also

### Collections of content

- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.
