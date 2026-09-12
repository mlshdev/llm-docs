> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/didmove(toparent:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/didmove(toparent:))

# didMove(toParent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called after the view controller is added or removed from a container view controller.

## Declaration

```swift
func didMove(toParent parent: UIViewController?)
```

## Parameters

- `parent`: The parent view controller, or `nil` if there is no parent.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Your view controller can override this method when it wants to react to being added to a container.

If you are implementing your own container view controller, it must call the [didMove(toParent:)](didmove%28toparent_%29.md) method of the child view controller after the transition to the new controller is complete or, if there is no transition, immediately after calling the [addChild(\_:)](addchild%28__%29.md) method.

The [removeFromParent()](removefromparent%28%29.md) method automatically calls the [didMove(toParent:)](didmove%28toparent_%29.md) method of the child view controller after it removes the child.

## See Also

### Responding to containment events

- [willMove(toParent:)](willmove%28toparent_%29.md): Called just before the view controller is added or removed from a container view controller.

# didMoveToParentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called after the view controller is added or removed from a container view controller.

## Declaration

```objectivec
- (void) didMoveToParentViewController:(UIViewController *) parent;
```

## Parameters

- `parent`: The parent view controller, or `nil` if there is no parent.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Your view controller can override this method when it wants to react to being added to a container.

If you are implementing your own container view controller, it must call the [didMoveToParentViewController:](didmove%28toparent_%29.md) method of the child view controller after the transition to the new controller is complete or, if there is no transition, immediately after calling the [addChildViewController:](addchild%28__%29.md) method.

The [removeFromParentViewController](removefromparent%28%29.md) method automatically calls the [didMoveToParentViewController:](didmove%28toparent_%29.md) method of the child view controller after it removes the child.

## See Also

### Responding to containment events

- [willMoveToParentViewController:](willmove%28toparent_%29.md): Called just before the view controller is added or removed from a container view controller.
