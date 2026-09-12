> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/viewcontroller(forkey:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/viewcontroller(forkey:))

# viewController(forKey:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view controllers involved in the transition.

## Declaration

```swift
func viewController(forKey key: UITransitionContextViewControllerKey) -> UIViewController?
```

## Parameters

- `key`: The key indicating which view controller you want. For a list of possible values, see [UITransitionContextViewControllerKey](../uitransitioncontextviewcontrollerkey.md).

<a id="return-value"></a>

## Return Value

The view controller associated with the key.

<a id="Discussion"></a>

## Discussion

The view controller associated with the [from](../uitransitioncontextviewcontrollerkey/from.md) key corresponds to the view controller that’s already onscreen. The view controller associated with the [to](../uitransitioncontextviewcontrollerkey/to.md) key corresponds to the view controller that’s to be animated onscreen.

## See Also

### Getting the views and view controllers

- [view(forKey:)](view%28forkey_%29.md): Returns the specified view involved in the transition.
- [containerView](containerview.md): Returns the view in which the transition takes place.

# viewControllerForKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the view controllers involved in the transition.

## Declaration

```objectivec
- (UIViewController *) viewControllerForKey:(UITransitionContextViewControllerKey) key;
```

## Parameters

- `key`: The key indicating which view controller you want. For a list of possible values, see [UITransitionContextViewControllerKey](../uitransitioncontextviewcontrollerkey.md).

<a id="return-value"></a>

## Return Value

The view controller associated with the key.

<a id="Discussion"></a>

## Discussion

The view controller associated with the [UITransitionContextFromViewControllerKey](../uitransitioncontextviewcontrollerkey/from.md) key corresponds to the view controller that’s already onscreen. The view controller associated with the [UITransitionContextToViewControllerKey](../uitransitioncontextviewcontrollerkey/to.md) key corresponds to the view controller that’s to be animated onscreen.

## See Also

### Getting the views and view controllers

- [viewForKey:](view%28forkey_%29.md): Returns the specified view involved in the transition.
- [containerView](containerview.md): Returns the view in which the transition takes place.
