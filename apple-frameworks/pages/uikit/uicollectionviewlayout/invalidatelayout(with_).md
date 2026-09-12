> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/invalidatelayout(with:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/invalidatelayout(with:))

# invalidateLayout(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the current layout using the information in the provided context object.

## Declaration

```swift
func invalidateLayout(with context: UICollectionViewLayoutInvalidationContext)
```

## Parameters

- `context`: The context object indicating which parts of the layout to refresh.

<a id="Discussion"></a>

## Discussion

The default implementation of this method optimizes the layout process using the base properties of the [UICollectionViewLayoutInvalidationContext](../uicollectionviewlayoutinvalidationcontext.md) class. If you define a custom context object for your layout, override this method and apply any custom properties of the context object to your layout computations.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# invalidateLayoutWithContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the current layout using the information in the provided context object.

## Declaration

```objectivec
- (void) invalidateLayoutWithContext:(UICollectionViewLayoutInvalidationContext *) context;
```

## Parameters

- `context`: The context object indicating which parts of the layout to refresh.

<a id="Discussion"></a>

## Discussion

The default implementation of this method optimizes the layout process using the base properties of the [UICollectionViewLayoutInvalidationContext](../uicollectionviewlayoutinvalidationcontext.md) class. If you define a custom context object for your layout, override this method and apply any custom properties of the context object to your layout computations.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
