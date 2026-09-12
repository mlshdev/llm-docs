> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayout](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayout)

# TVCollectionViewFullScreenLayout (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A collection view layout that organizes items into a browsable, full-screen display format.

## Declaration

```swift
class TVCollectionViewFullScreenLayout
```

<a id="overview"></a>

## Overview

Use this class to create a full-screen browsing experience. Full-screen layouts are an immersive way to present and navigate through content.

![A diagram showing the TVCollectionViewFullScreenLayout. One cell is centered, and two cells are peeking from the left and right sides.](https://developer.apple.com/images/com.apple.tvuikit/media-3332103@2x.png)

## Topics

### Managing a collection view’s appearance

- [interitemSpacing](tvcollectionviewfullscreenlayout/interitemspacing.md): The spacing between each cell in a collection view.

### Accessing collection view items

- [centerIndexPath](tvcollectionviewfullscreenlayout/centerindexpath.md): The index path of the currently centered item.

### Configuring cell masks

- [maskAmount](tvcollectionviewfullscreenlayout/maskamount.md): The amount by which to mask the cells in a collection view.
- [maskInset](tvcollectionviewfullscreenlayout/maskinset.md): The edge insets of the cell mask.

### Managing cell appearance

- [cornerRadius](tvcollectionviewfullscreenlayout/cornerradius.md): The radius to use when drawing rounded corners for the cell.

### Managing transitions

- [parallaxFactor](tvcollectionviewfullscreenlayout/parallaxfactor.md): A value that specifies how slowly the background should move relative to the foreground.
- [isTransitioningToCenterIndexPath](tvcollectionviewfullscreenlayout/istransitioningtocenterindexpath.md): A Boolean value that indicates whether the cell is changing index paths.

## Relationships

### Inherits From

- [UICollectionViewLayout](../uikit/uicollectionviewlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Collections of content

- [Creating immersive experiences using a full-screen layout](creating-immersive-experiences-using-a-full-screen-layout.md): Display content with a collection view that maximizes the tvOS experience.
- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.

# TVCollectionViewFullScreenLayout (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A collection view layout that organizes items into a browsable, full-screen display format.

## Declaration

```objectivec
@interface TVCollectionViewFullScreenLayout : UICollectionViewLayout
```

<a id="overview"></a>

## Overview

Use this class to create a full-screen browsing experience. Full-screen layouts are an immersive way to present and navigate through content.

![A diagram showing the TVCollectionViewFullScreenLayout. One cell is centered, and two cells are peeking from the left and right sides.](https://developer.apple.com/images/com.apple.tvuikit/media-3332103@2x.png)

## Topics

### Managing a collection view’s appearance

- [interitemSpacing](tvcollectionviewfullscreenlayout/interitemspacing.md): The spacing between each cell in a collection view.

### Accessing collection view items

- [centerIndexPath](tvcollectionviewfullscreenlayout/centerindexpath.md): The index path of the currently centered item.

### Configuring cell masks

- [maskAmount](tvcollectionviewfullscreenlayout/maskamount.md): The amount by which to mask the cells in a collection view.
- [maskInset](tvcollectionviewfullscreenlayout/maskinset.md): The edge insets of the cell mask.

### Managing cell appearance

- [cornerRadius](tvcollectionviewfullscreenlayout/cornerradius.md): The radius to use when drawing rounded corners for the cell.

### Managing transitions

- [parallaxFactor](tvcollectionviewfullscreenlayout/parallaxfactor.md): A value that specifies how slowly the background should move relative to the foreground.
- [transitioningToCenterIndexPath](tvcollectionviewfullscreenlayout/istransitioningtocenterindexpath.md): A Boolean value that indicates whether the cell is changing index paths.

## Relationships

### Inherits From

- [UICollectionViewLayout](../uikit/uicollectionviewlayout.md)

## See Also

### Collections of content

- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.
