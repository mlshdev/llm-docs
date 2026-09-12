> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview/willtransition(from:to:)](https://developer.apple.com/documentation/uikit/uicollectionreusableview/willtransition(from:to:))

# willTransition(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your view that the layout object of the collection view is about to change.

## Declaration

```swift
func willTransition(from oldLayout: UICollectionViewLayout, to newLayout: UICollectionViewLayout)
```

## Parameters

- `oldLayout`: The current layout object associated with the collection view.
- `newLayout`: The new layout object that is about to be applied to the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to prepare for the change in layouts.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the view.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.

# willTransitionFromLayout:toLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your view that the layout object of the collection view is about to change.

## Declaration

```objectivec
- (void) willTransitionFromLayout:(UICollectionViewLayout *) oldLayout toLayout:(UICollectionViewLayout *) newLayout;
```

## Parameters

- `oldLayout`: The current layout object associated with the collection view.
- `newLayout`: The new layout object that is about to be applied to the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to prepare for the change in layouts.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the view.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.
