> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childcontaining(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/childcontaining(_:))

# childContaining(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Returns the child view controller that contains the source of the unwind segue.

## Declaration

```swift
func childContaining(_ source: UIStoryboardUnwindSegueSource) -> UIViewController?
```

## Parameters

- `source`: The unwind segue source object containing information about the unwind segue.

<a id="return-value"></a>

## Return Value

The view controller that contains the segue source.

<a id="Discussion"></a>

## Discussion

Container view controllers call this method to identify the child view controller that is the source of the unwind segue. Typically, you call this method from your [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md) method so that you can remove the corresponding view controller from the returned list of children.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# childViewControllerContainingSegueSource: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Returns the child view controller that contains the source of the unwind segue.

## Declaration

```objectivec
- (UIViewController *) childViewControllerContainingSegueSource:(UIStoryboardUnwindSegueSource *) source;
```

## Parameters

- `source`: The unwind segue source object containing information about the unwind segue.

<a id="return-value"></a>

## Return Value

The view controller that contains the segue source.

<a id="Discussion"></a>

## Discussion

Container view controllers call this method to identify the child view controller that is the source of the unwind segue. Typically, you call this method from your [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md) method so that you can remove the corresponding view controller from the returned list of children.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
