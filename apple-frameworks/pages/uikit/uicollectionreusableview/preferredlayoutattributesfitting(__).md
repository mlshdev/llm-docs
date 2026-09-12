> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview/preferredlayoutattributesfitting(_:)](https://developer.apple.com/documentation/uikit/uicollectionreusableview/preferredlayoutattributesfitting(_:))

# preferredLayoutAttributesFitting(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gives the cell a chance to modify the attributes provided by the layout object.

## Declaration

```swift
func preferredLayoutAttributesFitting(_ layoutAttributes: UICollectionViewLayoutAttributes) -> UICollectionViewLayoutAttributes
```

## Parameters

- `layoutAttributes`: The attributes provided by the layout object. These attributes represent the values that the layout intends to apply to the cell.

<a id="return-value"></a>

## Return Value

The final attributes to apply to the cell.

<a id="Discussion"></a>

## Discussion

The default implementation of this method adjusts the size values to accommodate changes made by a self-sizing cell. Subclasses can override this method and use it to adjust other layout attributes too. If you override this method and want the cell size adjustments, call `super` first and make your own modifications to the returned attributes.

## See Also

### Managing layout changes

- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.

# preferredLayoutAttributesFittingAttributes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gives the cell a chance to modify the attributes provided by the layout object.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) preferredLayoutAttributesFittingAttributes:(UICollectionViewLayoutAttributes *) layoutAttributes;
```

## Parameters

- `layoutAttributes`: The attributes provided by the layout object. These attributes represent the values that the layout intends to apply to the cell.

<a id="return-value"></a>

## Return Value

The final attributes to apply to the cell.

<a id="Discussion"></a>

## Discussion

The default implementation of this method adjusts the size values to accommodate changes made by a self-sizing cell. Subclasses can override this method and use it to adjust other layout attributes too. If you override this method and want the cell size adjustments, call `super` first and make your own modifications to the returned attributes.

## See Also

### Managing layout changes

- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the view.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells your view that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells your view that the layout object of the collection view changed.
