> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/containerview](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/containerview)

# containerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the view in which the transition takes place.

## Declaration

```swift
var containerView: UIView { get }
```

<a id="return-value"></a>

## Return Value

The container view for the transition animation.

<a id="Discussion"></a>

## Discussion

The container view acts as the host view for any animations between the transitioning view controllers. When animating your own custom views, add them to the container view if you want them to interoperate with the view controllers’ views.

## See Also

### Getting the views and view controllers

- [viewController(forKey:)](viewcontroller%28forkey_%29.md): Returns the view controllers involved in the transition.
- [view(forKey:)](view%28forkey_%29.md): Returns the specified view involved in the transition.

# containerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the view in which the transition takes place.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * containerView;
```

<a id="return-value"></a>

## Return Value

The container view for the transition animation.

<a id="Discussion"></a>

## Discussion

The container view acts as the host view for any animations between the transitioning view controllers. When animating your own custom views, add them to the container view if you want them to interoperate with the view controllers’ views.

## See Also

### Getting the views and view controllers

- [viewControllerForKey:](viewcontroller%28forkey_%29.md): Returns the view controllers involved in the transition.
- [viewForKey:](view%28forkey_%29.md): Returns the specified view involved in the transition.
