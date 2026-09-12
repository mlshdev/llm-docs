> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/unwind(for:towards:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/unwind(for:towards:))

# unwind(for:towards:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Called when an unwind segue transitions to a new view controller.

## Declaration

```swift
func unwind(for unwindSegue: UIStoryboardSegue, towards subsequentVC: UIViewController)
```

## Parameters

- `unwindSegue`: The unwind segue being performed.
- `subsequentVC`: The view controller closest to the current controller that represents the transition direction. Container view controllers should configure themselves so that this view controller is displayed.

<a id="Discussion"></a>

## Discussion

During the execution of an unwind segue, UIKit calls this method on any view controllers in the unwind path to give them an opportunity to reconfigure themselves. Container view controllers must implement this method and use to display the view controller in the `subsequentVC` parameter. For example, a tab bar controller selects the tab containing the specified view controller. Noncontainer view controllers should not override this method.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.

# unwindForSegue:towardsViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Called when an unwind segue transitions to a new view controller.

## Declaration

```objectivec
- (void) unwindForSegue:(UIStoryboardSegue *) unwindSegue towardsViewController:(UIViewController *) subsequentVC;
```

## Parameters

- `unwindSegue`: The unwind segue being performed.
- `subsequentVC`: The view controller closest to the current controller that represents the transition direction. Container view controllers should configure themselves so that this view controller is displayed.

<a id="Discussion"></a>

## Discussion

During the execution of an unwind segue, UIKit calls this method on any view controllers in the unwind path to give them an opportunity to reconfigure themselves. Container view controllers must implement this method and use to display the view controller in the `subsequentVC` parameter. For example, a tab bar controller selects the tab containing the specified view controller. Noncontainer view controllers should not override this method.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
