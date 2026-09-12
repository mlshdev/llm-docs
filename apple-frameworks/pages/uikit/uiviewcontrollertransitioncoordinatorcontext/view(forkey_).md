> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/view(forkey:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/view(forkey:))

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

- `key`: The key identifying the view you want. For a list of possible keys, see [UITransitionContextViewKey](../uitransitioncontextviewkey.md).

<a id="return-value"></a>

## Return Value

The view object for the specified key or `nil` if the view could not be found.

## See Also

### Getting the views and view controllers

- [viewController(forKey:)](viewcontroller%28forkey_%29.md): Returns the view controllers involved in the transition.
- [containerView](containerview.md): Returns the view in which the transition takes place.

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

- `key`: The key identifying the view you want. For a list of possible keys, see [UITransitionContextViewKey](../uitransitioncontextviewkey.md).

<a id="return-value"></a>

## Return Value

The view object for the specified key or `nil` if the view could not be found.

## See Also

### Getting the views and view controllers

- [viewControllerForKey:](viewcontroller%28forkey_%29.md): Returns the view controllers involved in the transition.
- [containerView](containerview.md): Returns the view in which the transition takes place.
