> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayoutattributes](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayoutattributes)

# TVCollectionViewFullScreenLayoutAttributes (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

Attributes to manage the appearance of the collection view’s layout.

## Declaration

```swift
class TVCollectionViewFullScreenLayoutAttributes
```

## Topics

### Modifying Cell Appearance

- [contentBleed](tvcollectionviewfullscreenlayoutattributes/contentbleed.md): The amount of content that bleeds into the masked portions of the cell.
- [cornerRadius](tvcollectionviewfullscreenlayoutattributes/cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](tvcollectionviewfullscreenlayoutattributes/maskamount.md): The amount of masking to apply to the cell.

### Modifying the Parallax Effect

- [parallaxOffset](tvcollectionviewfullscreenlayoutattributes/parallaxoffset.md): The number of points by which to shift the background from the center when moving focus.

### Managing Cell Position

- [normalizedPosition](tvcollectionviewfullscreenlayoutattributes/normalizedposition.md): A value that indicates the distance of the current cell from the collection view’s center cell.

## Relationships

### Inherits From

- [UICollectionViewLayoutAttributes](../uikit/uicollectionviewlayoutattributes.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)

## See Also

### Collections of content

- [Creating immersive experiences using a full-screen layout](creating-immersive-experiences-using-a-full-screen-layout.md): Display content with a collection view that maximizes the tvOS experience.
- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.

# TVCollectionViewFullScreenLayoutAttributes (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

Attributes to manage the appearance of the collection view’s layout.

## Declaration

```objectivec
@interface TVCollectionViewFullScreenLayoutAttributes : UICollectionViewLayoutAttributes
```

## Topics

### Modifying Cell Appearance

- [contentBleed](tvcollectionviewfullscreenlayoutattributes/contentbleed.md): The amount of content that bleeds into the masked portions of the cell.
- [cornerRadius](tvcollectionviewfullscreenlayoutattributes/cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](tvcollectionviewfullscreenlayoutattributes/maskamount.md): The amount of masking to apply to the cell.

### Modifying the Parallax Effect

- [parallaxOffset](tvcollectionviewfullscreenlayoutattributes/parallaxoffset.md): The number of points by which to shift the background from the center when moving focus.

### Managing Cell Position

- [normalizedPosition](tvcollectionviewfullscreenlayoutattributes/normalizedposition.md): A value that indicates the distance of the current cell from the collection view’s center cell.

## Relationships

### Inherits From

- [UICollectionViewLayoutAttributes](../uikit/uicollectionviewlayoutattributes.md)

## See Also

### Collections of content

- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenCell](tvcollectionviewfullscreencell.md): A full-screen cell to use in full-screen display format.
