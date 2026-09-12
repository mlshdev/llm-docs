> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview/apply(_:)](https://developer.apple.com/documentation/uikit/uicollectionreusableview/apply(_:))

# apply(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Applies the specified layout attributes to the view.

## Declaration

```swift
func apply(_ layoutAttributes: UICollectionViewLayoutAttributes)
```

## Parameters

- `layoutAttributes`: The layout attributes to apply.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing.

If the layout object supports custom layout attributes, you can use this method to apply those attributes to the view. In such a case, the `layoutAttributes` parameter should contain an instance of a subclass of [UICollectionViewLayoutAttributes](../uicollectionviewlayoutattributes.md). You do not need to override this method to support the standard layout attributes of the [UICollectionViewLayoutAttributes](../uicollectionviewlayoutattributes.md) class. The collection view applies those attributes automatically.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.

# applyLayoutAttributes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Applies the specified layout attributes to the view.

## Declaration

```objectivec
- (void) applyLayoutAttributes:(UICollectionViewLayoutAttributes *) layoutAttributes;
```

## Parameters

- `layoutAttributes`: The layout attributes to apply.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing.

If the layout object supports custom layout attributes, you can use this method to apply those attributes to the view. In such a case, the `layoutAttributes` parameter should contain an instance of a subclass of [UICollectionViewLayoutAttributes](../uicollectionviewlayoutattributes.md). You do not need to override this method to support the standard layout attributes of the [UICollectionViewLayoutAttributes](../uicollectionviewlayoutattributes.md) class. The collection view applies those attributes automatically.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.
