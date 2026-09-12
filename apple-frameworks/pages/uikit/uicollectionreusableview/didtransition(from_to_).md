> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview/didtransition(from:to:)](https://developer.apple.com/documentation/uikit/uicollectionreusableview/didtransition(from:to:))

# didTransition(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your view that the layout object of the collection view changed.

## Declaration

```swift
func didTransition(from oldLayout: UICollectionViewLayout, to newLayout: UICollectionViewLayout)
```

## Parameters

- `oldLayout`: The collection view’s previous layout object.
- `newLayout`: The current layout object associated with the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to finalize any behaviors associated with the change in layouts.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.

# didTransitionFromLayout:toLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells your view that the layout object of the collection view changed.

## Declaration

```objectivec
- (void) didTransitionFromLayout:(UICollectionViewLayout *) oldLayout toLayout:(UICollectionViewLayout *) newLayout;
```

## Parameters

- `oldLayout`: The collection view’s previous layout object.
- `newLayout`: The current layout object associated with the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to finalize any behaviors associated with the change in layouts.

## See Also

### Managing layout changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Gives the cell a chance to modify the attributes provided by the layout object.
- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
