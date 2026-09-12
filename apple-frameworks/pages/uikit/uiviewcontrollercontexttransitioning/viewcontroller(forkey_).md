> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/viewcontroller(forkey:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/viewcontroller(forkey:))

# viewController(forKey:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a view controller involved in the transition.

## Declaration

```swift
func viewController(forKey key: UITransitionContextViewControllerKey) -> UIViewController?
```

## Parameters

- `key`: The key identifying the view controller you want. For a list of possible keys, see `View Controller Transition Keys`.

<a id="return-value"></a>

## Return Value

The view controller object for the specified key or `nil` if the view controller could not be found.

## See Also

### Accessing the transition objects

- [containerView](containerview.md): The view that acts as the superview for the views involved in the transition.
- [view(forKey:)](view%28forkey_%29.md): Returns the specified view involved in the transition.

# viewControllerForKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a view controller involved in the transition.

## Declaration

```objectivec
- (UIViewController *) viewControllerForKey:(UITransitionContextViewControllerKey) key;
```

## Parameters

- `key`: The key identifying the view controller you want. For a list of possible keys, see `View Controller Transition Keys`.

<a id="return-value"></a>

## Return Value

The view controller object for the specified key or `nil` if the view controller could not be found.

## See Also

### Accessing the transition objects

- [containerView](containerview.md): The view that acts as the superview for the views involved in the transition.
- [viewForKey:](view%28forkey_%29.md): Returns the specified view involved in the transition.
