> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/makeview(element:existingview:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/makeview(element:existingview:))

# makeView(element:existingView:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a view for a view element.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func makeView(element: TVViewElement, existingView: UIView?) -> UIView?
```

## Parameters

- `element`: The view element requesting a new view.
- `existingView`: The current view.

<a id="return-value"></a>

## Return Value

The new view associated with the view element. If the app doesn’t handle the event, you must return `nil`.

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

When possible, update the view contained in the `existingView` parameter instead of creating a new view. However, if the existing view is an instance of [UICollectionViewCell](../../uikit/uicollectionviewcell.md), you must configure the cell instead of creating a new instance.

## See Also

### Updating View Information

- [makeViewController(element:existingViewController:)](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [collectionViewCellClass(for:)](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewController(for:)](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.

# viewForElement:existingView: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a view for a view element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (UIView *) viewForElement:(TVViewElement *) element existingView:(UIView *) existingView;
```

## Parameters

- `element`: The view element requesting a new view.
- `existingView`: The current view.

<a id="return-value"></a>

## Return Value

The new view associated with the view element. If the app doesn’t handle the event, you must return `nil`.

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

When possible, update the view contained in the `existingView` parameter instead of creating a new view. However, if the existing view is an instance of [UICollectionViewCell](../../uikit/uicollectionviewcell.md), you must configure the cell instead of creating a new instance.

## See Also

### Updating View Information

- [viewControllerForElement:existingViewController:](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [collectionViewCellClassForElement:](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewControllerForPlayer:](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.
