> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/shouldinvalidatelayout(forboundschange:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/shouldinvalidatelayout(forboundschange:))

# shouldInvalidateLayout(forBoundsChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the layout object if the new bounds require a layout update.

## Declaration

```swift
func shouldInvalidateLayout(forBoundsChange newBounds: CGRect) -> Bool
```

## Parameters

- `newBounds`: The new bounds of the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the collection view requires a layout update or [false](https://developer.apple.com/documentation/swift/false) if the layout does not need to change.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). Subclasses can override it and return an appropriate value based on whether changes in the bounds of the collection view require changes to the layout of cells and supplementary views.

If the bounds of the collection view change and this method returns [true](https://developer.apple.com/documentation/swift/true), the collection view invalidates the layout by calling the [invalidateLayout(with:)](invalidatelayout%28with_%29.md) method.

## See Also

### Invalidating the layout

- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayout(with:)](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [invalidationContext(forBoundsChange:)](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

# shouldInvalidateLayoutForBoundsChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Asks the layout object if the new bounds require a layout update.

## Declaration

```objectivec
- (BOOL) shouldInvalidateLayoutForBoundsChange:(CGRect) newBounds;
```

## Parameters

- `newBounds`: The new bounds of the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the collection view requires a layout update or [false](https://developer.apple.com/documentation/swift/false) if the layout does not need to change.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). Subclasses can override it and return an appropriate value based on whether changes in the bounds of the collection view require changes to the layout of cells and supplementary views.

If the bounds of the collection view change and this method returns [true](https://developer.apple.com/documentation/swift/true), the collection view invalidates the layout by calling the [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md) method.

## See Also

### Invalidating the layout

- [invalidateLayout](invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayoutWithContext:](invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [invalidationContextForBoundsChange:](invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved
