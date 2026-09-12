> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/allowedchildrenforunwinding(from:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/allowedchildrenforunwinding(from:))

# allowedChildrenForUnwinding(from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Returns an array of child view controllers to search for an unwind segue destination.

## Declaration

```swift
func allowedChildrenForUnwinding(from source: UIStoryboardUnwindSegueSource) -> [UIViewController]
```

## Parameters

- `source`: The unwind segue source object containing information about the unwind segue.

<a id="return-value"></a>

## Return Value

An array of view controllers representing the child view controllers to search. The order of the items in the array determines the search order.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when searching for the destination of an unwind segue. The default implementation returns the contents of the [children](children.md) property minus the view controller returned by the [childContaining(\_:)](childcontaining%28__%29.md) method. You can override this method as needed in your custom container view controllers to change the search order. For example, a navigation controller reverses the order so that the search starts with the view controller at the top of the navigation stack.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# allowedChildViewControllersForUnwindingFromSource: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Returns an array of child view controllers to search for an unwind segue destination.

## Declaration

```objectivec
- (NSArray<UIViewController *> *) allowedChildViewControllersForUnwindingFromSource:(UIStoryboardUnwindSegueSource *) source;
```

## Parameters

- `source`: The unwind segue source object containing information about the unwind segue.

<a id="return-value"></a>

## Return Value

An array of view controllers representing the child view controllers to search. The order of the items in the array determines the search order.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when searching for the destination of an unwind segue. The default implementation returns the contents of the [childViewControllers](children.md) property minus the view controller returned by the [childViewControllerContainingSegueSource:](childcontaining%28__%29.md) method. You can override this method as needed in your custom container view controllers to change the search order. For example, a navigation controller reverses the order so that the search starts with the view controller at the top of the navigation stack.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
