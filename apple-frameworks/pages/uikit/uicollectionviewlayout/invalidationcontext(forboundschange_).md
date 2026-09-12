> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/invalidationcontext(forboundschange:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/invalidationcontext(forboundschange:))

# invalidationContext(forBoundsChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.

## Declaration

```swift
func invalidationContext(forBoundsChange newBounds: CGRect) -> UICollectionViewLayoutInvalidationContext
```

## Parameters

- `newBounds`: The new bounds for the collection view.

<a id="return-value"></a>

## Return Value

An invalidation context that describes the changes that need to be made. Do not return nil.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an instance of the class provided by the [invalidationContextClass](invalidationcontextclass.md) class method and returns it. If you want to use a custom invalidation context object with your layout, always override that method and return your custom class.

You can override this method if you want to create and configure your custom invalidation context in response to a bounds change. If you override this method, you must call `super` first to get the invalidation context object to return. After getting this object, set any custom properties and return it.

## See Also

### Invalidating the layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# invalidationContextForBoundsChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.

## Declaration

```objectivec
- (UICollectionViewLayoutInvalidationContext *) invalidationContextForBoundsChange:(CGRect) newBounds;
```

## Parameters

- `newBounds`: The new bounds for the collection view.

<a id="return-value"></a>

## Return Value

An invalidation context that describes the changes that need to be made. Do not return nil.

<a id="Discussion"></a>

## Discussion

The default implementation of this method creates an instance of the class provided by the [invalidationContextClass](invalidationcontextclass.md) class method and returns it. If you want to use a custom invalidation context object with your layout, always override that method and return your custom class.

You can override this method if you want to create and configure your custom invalidation context in response to a bounds change. If you override this method, you must call `super` first to get the invalidation context object to return. After getting this object, set any custom properties and return it.

## See Also

### Invalidating the layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
