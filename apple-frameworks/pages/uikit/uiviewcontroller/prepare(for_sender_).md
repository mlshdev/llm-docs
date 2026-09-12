> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/prepare(for:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/prepare(for:sender:))

# prepare(for:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Notifies the view controller that a segue is about to be performed.

## Declaration

```swift
func prepare(for segue: UIStoryboardSegue, sender: Any?)
```

## Parameters

- `segue`: The segue object containing information about the view controllers involved in the segue.
- `sender`: The object that initiated the segue. You might use this parameter to perform different actions based on which control (or other object) initiated the segue.

## Mentioned In

- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses override this method and use it to configure the new view controller prior to it being displayed. The segue object contains information about the transition, including references to both view controllers that are involved.

Because segues can be triggered from multiple sources, you can use the information in the `segue` and `sender` parameters to disambiguate between different logical paths in your app. For example, if the segue originated from a table view, the sender parameter would identify the table view cell that the user tapped. You could then use that information to set the data on the destination view controller.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# prepareForSegue:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Notifies the view controller that a segue is about to be performed.

## Declaration

```objectivec
- (void) prepareForSegue:(UIStoryboardSegue *) segue sender:(id) sender;
```

## Parameters

- `segue`: The segue object containing information about the view controllers involved in the segue.
- `sender`: The object that initiated the segue. You might use this parameter to perform different actions based on which control (or other object) initiated the segue.

## Mentioned In

- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses override this method and use it to configure the new view controller prior to it being displayed. The segue object contains information about the transition, including references to both view controllers that are involved.

Because segues can be triggered from multiple sources, you can use the information in the `segue` and `sender` parameters to disambiguate between different logical paths in your app. For example, if the segue originated from a table view, the sender parameter would identify the table view cell that the user tapped. You could then use that information to set the data on the destination view controller.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
