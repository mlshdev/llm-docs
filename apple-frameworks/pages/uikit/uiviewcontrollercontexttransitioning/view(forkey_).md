> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/view(forkey:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/view(forkey:))

# view(forKey:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the specified view involved in the transition.

## Declaration

```swift
func view(forKey key: UITransitionContextViewKey) -> UIView?
```

## Parameters

- `key`: The key identifying the view you want. For a list of possible keys, see `View Transition Keys`.

<a id="return-value"></a>

## Return Value

The view object for the specified key or `nil` if the view could not be found.

<a id="Discussion"></a>

## Discussion

The view returned by this method may or may not be the root view of the corresponding view controller. A situation where the views may not be the same is when a system-provided presentation controller installs another view underneath the presented view controller’s view.

## See Also

### Accessing the transition objects

- [containerView](containerview.md): The view that acts as the superview for the views involved in the transition.
- [viewController(forKey:)](viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.

# viewForKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the specified view involved in the transition.

## Declaration

```objectivec
- (UIView *) viewForKey:(UITransitionContextViewKey) key;
```

## Parameters

- `key`: The key identifying the view you want. For a list of possible keys, see `View Transition Keys`.

<a id="return-value"></a>

## Return Value

The view object for the specified key or `nil` if the view could not be found.

<a id="Discussion"></a>

## Discussion

The view returned by this method may or may not be the root view of the corresponding view controller. A situation where the views may not be the same is when a system-provided presentation controller installs another view underneath the presented view controller’s view.

## See Also

### Accessing the transition objects

- [containerView](containerview.md): The view that acts as the superview for the views involved in the transition.
- [viewControllerForKey:](viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.
