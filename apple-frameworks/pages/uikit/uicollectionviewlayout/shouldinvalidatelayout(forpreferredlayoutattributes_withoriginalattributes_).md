> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/shouldinvalidatelayout(forpreferredlayoutattributes:withoriginalattributes:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/shouldinvalidatelayout(forpreferredlayoutattributes:withoriginalattributes:))

# shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the layout object if changes to a self-sizing cell require a layout update.

## Declaration

```swift
func shouldInvalidateLayout(forPreferredLayoutAttributes preferredAttributes: UICollectionViewLayoutAttributes, withOriginalAttributes originalAttributes: UICollectionViewLayoutAttributes) -> Bool
```

## Parameters

- `preferredAttributes`: The layout attributes returned by the cell’s [preferredLayoutAttributesFitting(\_:)](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.
- `originalAttributes`: The attributes that the layout object originally suggested for the cell.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layout should be invalidated or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

When a collection view includes self-sizing cells, the cells are given the opportunity to modify their own layout attributes before those attributes are applied. A self-sizing cell might do this to specify a different cell size than the one the layout object provides. When the cell provides a different set of attributes, the collection view calls this method to determine if the cell’s change requires a larger layout refresh.

If you are implementing a custom layout, you can override this method and use it to determine if your layout should be invalidated based on the specified attributes. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Invalidating the layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Asks the layout object if changes to a self-sizing cell require a layout update.

## Declaration

```objectivec
- (BOOL) shouldInvalidateLayoutForPreferredLayoutAttributes:(UICollectionViewLayoutAttributes *) preferredAttributes withOriginalAttributes:(UICollectionViewLayoutAttributes *) originalAttributes;
```

## Parameters

- `preferredAttributes`: The layout attributes returned by the cell’s [preferredLayoutAttributesFittingAttributes:](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.
- `originalAttributes`: The attributes that the layout object originally suggested for the cell.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layout should be invalidated or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

When a collection view includes self-sizing cells, the cells are given the opportunity to modify their own layout attributes before those attributes are applied. A self-sizing cell might do this to specify a different cell size than the one the layout object provides. When the cell provides a different set of attributes, the collection view calls this method to determine if the cell’s change requires a larger layout refresh.

If you are implementing a custom layout, you can override this method and use it to determine if your layout should be invalidated based on the specified attributes. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Invalidating the layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
