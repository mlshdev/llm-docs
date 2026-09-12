> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/willmove(toparent:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/willmove(toparent:))

# willMove(toParent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called just before the view controller is added or removed from a container view controller.

## Declaration

```swift
func willMove(toParent parent: UIViewController?)
```

## Parameters

- `parent`: The parent view controller, or `nil` if there is no parent.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Your view controller can override this method when it needs to know that it has been added to a container.

If you are implementing your own container view controller, it must call the [willMove(toParent:)](willmove%28toparent_%29.md) method of the child view controller before calling the [removeFromParent()](removefromparent%28%29.md) method, passing in a parent value of `nil`.

When your custom container calls the [addChild(\_:)](addchild%28__%29.md) method, it automatically calls the [willMove(toParent:)](willmove%28toparent_%29.md) method of the view controller to be added as a child before adding it.

## See Also

### Responding to containment events

- [didMove(toParent:)](didmove%28toparent_%29.md): Called after the view controller is added or removed from a container view controller.

# willMoveToParentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called just before the view controller is added or removed from a container view controller.

## Declaration

```objectivec
- (void) willMoveToParentViewController:(UIViewController *) parent;
```

## Parameters

- `parent`: The parent view controller, or `nil` if there is no parent.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

Your view controller can override this method when it needs to know that it has been added to a container.

If you are implementing your own container view controller, it must call the [willMoveToParentViewController:](willmove%28toparent_%29.md) method of the child view controller before calling the [removeFromParentViewController](removefromparent%28%29.md) method, passing in a parent value of `nil`.

When your custom container calls the [addChildViewController:](addchild%28__%29.md) method, it automatically calls the [willMoveToParentViewController:](willmove%28toparent_%29.md) method of the view controller to be added as a child before adding it.

## See Also

### Responding to containment events

- [didMoveToParentViewController:](didmove%28toparent_%29.md): Called after the view controller is added or removed from a container view controller.
