> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/containerview](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/containerview)

# containerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that acts as the superview for the views involved in the transition.

## Declaration

```swift
var containerView: UIView { get }
```

<a id="return-value"></a>

## Return Value

The view that contains both views involved in the transition.

<a id="Discussion"></a>

## Discussion

The container view acts as the superview of all other views (including those of the presenting and presented view controllers) during the animation sequence. UIKit sets this view for you and automatically adds the view of the presenting view controller to it. The animator object is responsible for adding the view of the presented view controller, and the animator object or presentation controller must use this view as the container for all other views involved in the transition.

## See Also

### Accessing the transition objects

- [viewController(forKey:)](viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.
- [view(forKey:)](view%28forkey_%29.md): Returns the specified view involved in the transition.

# containerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The view that acts as the superview for the views involved in the transition.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * containerView;
```

<a id="return-value"></a>

## Return Value

The view that contains both views involved in the transition.

<a id="Discussion"></a>

## Discussion

The container view acts as the superview of all other views (including those of the presenting and presented view controllers) during the animation sequence. UIKit sets this view for you and automatically adds the view of the presenting view controller to it. The animator object is responsible for adding the view of the presented view controller, and the animator object or presentation controller must use this view as the container for all other views involved in the transition.

## See Also

### Accessing the transition objects

- [viewControllerForKey:](viewcontroller%28forkey_%29.md): Returns a view controller involved in the transition.
- [viewForKey:](view%28forkey_%29.md): Returns the specified view involved in the transition.
