> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/invalidationcontext(forinteractivelymovingitems:withtargetposition:previousindexpaths:previousposition:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/invalidationcontext(forinteractivelymovingitems:withtargetposition:previousindexpaths:previousposition:))

# invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Retrieves a context object that identifies the items that are being interactively moved in the layout.

## Declaration

```swift
func invalidationContext(forInteractivelyMovingItems targetIndexPaths: [IndexPath], withTargetPosition targetPosition: CGPoint, previousIndexPaths: [IndexPath], previousPosition: CGPoint) -> UICollectionViewLayoutInvalidationContext
```

## Parameters

- `targetIndexPaths`: The current locations of the items being moved.
- `targetPosition`: The point in the collection view’s coordinate system that is the potential drop point for the items.
- `previousIndexPaths`: The previous locations of the items being moved.
- `previousPosition`: The previous point in the collection view’s coordinate system. This is the point that was previously used to determine the drop point for the items.

<a id="return-value"></a>

## Return Value

An invalidation context that includes information about what changes need to be made to the layout.

<a id="Discussion"></a>

## Discussion

The layout object uses this method to retrieve invalidation contexts when an interactive move of one or more items is in progress. The default implementation creates an instance of the class provided by the [invalidationContextClass](invalidationcontextclass.md) class method, fills it with the provided information, and returns it. If you want to use a custom invalidation context object with your layout, always override that method and return your custom class.

Subclasses can override this method and use it to perform additional configuration of the invalidation context before returning it. In your custom implementation, call `super` so that the parent class can perform the basic configuration of the object.

## See Also

### Invalidating the layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a context object that identifies the items that are being interactively moved in the layout.

## Declaration

```objectivec
- (UICollectionViewLayoutInvalidationContext *) invalidationContextForInteractivelyMovingItems:(NSArray<NSIndexPath *> *) targetIndexPaths withTargetPosition:(CGPoint) targetPosition previousIndexPaths:(NSArray<NSIndexPath *> *) previousIndexPaths previousPosition:(CGPoint) previousPosition;
```

## Parameters

- `targetIndexPaths`: The current locations of the items being moved.
- `targetPosition`: The point in the collection view’s coordinate system that is the potential drop point for the items.
- `previousIndexPaths`: The previous locations of the items being moved.
- `previousPosition`: The previous point in the collection view’s coordinate system. This is the point that was previously used to determine the drop point for the items.

<a id="return-value"></a>

## Return Value

An invalidation context that includes information about what changes need to be made to the layout.

<a id="Discussion"></a>

## Discussion

The layout object uses this method to retrieve invalidation contexts when an interactive move of one or more items is in progress. The default implementation creates an instance of the class provided by the [invalidationContextClass](invalidationcontextclass.md) class method, fills it with the provided information, and returns it. If you want to use a custom invalidation context object with your layout, always override that method and return your custom class.

Subclasses can override this method and use it to perform additional configuration of the invalidation context before returning it. In your custom implementation, call `super` so that the parent class can perform the basic configuration of the object.

## See Also

### Invalidating the layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
