> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/makeviewcontroller(element:existingviewcontroller:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/makeviewcontroller(element:existingviewcontroller:))

# makeViewController(element:existingViewController:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a view controller for a view element.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func makeViewController(element: TVViewElement, existingViewController: UIViewController?) -> UIViewController?
```

## Parameters

- `element`: The view element requesting a view controller.
- `existingViewController`: The current view controller.

<a id="return-value"></a>

## Return Value

The new view controller associated with the view element. If the app doesn’t handle this event, you must return `nil`.

<a id="Discussion"></a>

## Discussion

When possible, update the view controller contained in the `existingViewController` parameter instead of creating a new view controller.

## See Also

### Updating View Information

- [makeView(element:existingView:)](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClass(for:)](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewController(for:)](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.

# viewControllerForElement:existingViewController: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a view controller for a view element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (UIViewController *) viewControllerForElement:(TVViewElement *) element existingViewController:(UIViewController *) existingViewController;
```

## Parameters

- `element`: The view element requesting a view controller.
- `existingViewController`: The current view controller.

<a id="return-value"></a>

## Return Value

The new view controller associated with the view element. If the app doesn’t handle this event, you must return `nil`.

<a id="Discussion"></a>

## Discussion

When possible, update the view controller contained in the `existingViewController` parameter instead of creating a new view controller.

## See Also

### Updating View Information

- [viewForElement:existingView:](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClassForElement:](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewControllerForPlayer:](playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.
