> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/invalidatelayout()](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/invalidatelayout())

# invalidateLayout() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the current layout and triggers a layout update.

## Declaration

```swift
func invalidateLayout()
```

<a id="Discussion"></a>

## Discussion

You can call this method at any time to update the layout information. This method invalidates the layout of the collection view itself and returns right away. Thus, you can call this method multiple times from the same block of code without triggering multiple layout updates. The actual layout update occurs during the next view layout update cycle.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the layout

- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# invalidateLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the current layout and triggers a layout update.

## Declaration

```objectivec
- (void) invalidateLayout;
```

<a id="Discussion"></a>

## Discussion

You can call this method at any time to update the layout information. This method invalidates the layout of the collection view itself and returns right away. Thus, you can call this method multiple times from the same block of code without triggering multiple layout updates. The actual layout update occurs during the next view layout update cycle.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Invalidating the layout

- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
