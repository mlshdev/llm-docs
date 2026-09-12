> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/shouldperformsegue(withidentifier:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/shouldperformsegue(withidentifier:sender:))

# shouldPerformSegue(withIdentifier:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Determines whether the segue with the specified identifier should be performed.

## Declaration

```swift
func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool
```

## Parameters

- `identifier`: The string that identifies the triggered segue. In Interface Builder, you specify the segue’s identifier string in the attributes inspector. This string is used only for locating the segue inside the storyboard.
- `sender`: The object that initiated the segue. This object is made available for informational purposes during the actual segue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segue should be performed or [false](https://developer.apple.com/documentation/swift/false) if it should be ignored.

## Mentioned In

- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and use it to perform segues conditionally based on current conditions. If you do not implement this method, all segues are performed.

## See Also

### Performing segues

- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# shouldPerformSegueWithIdentifier:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Determines whether the segue with the specified identifier should be performed.

## Declaration

```objectivec
- (BOOL) shouldPerformSegueWithIdentifier:(NSString *) identifier sender:(id) sender;
```

## Parameters

- `identifier`: The string that identifies the triggered segue. In Interface Builder, you specify the segue’s identifier string in the attributes inspector. This string is used only for locating the segue inside the storyboard.
- `sender`: The object that initiated the segue. This object is made available for informational purposes during the actual segue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segue should be performed or [false](https://developer.apple.com/documentation/swift/false) if it should be ignored.

## Mentioned In

- [Customizing the behavior of segue-based presentations](../customizing-the-behavior-of-segue-based-presentations.md)

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and use it to perform segues conditionally based on current conditions. If you do not implement this method, all segues are performed.

## See Also

### Performing segues

- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Deprecated. Initiates the segue with the specified identifier from the current view controller’s storyboard file.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
