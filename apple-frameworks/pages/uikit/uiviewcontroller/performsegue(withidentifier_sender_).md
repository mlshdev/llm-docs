> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/performsegue(withidentifier:sender:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/performsegue(withidentifier:sender:))

# performSegue(withIdentifier:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Initiates the segue with the specified identifier from the current view controller’s storyboard file.

## Declaration

```swift
func performSegue(withIdentifier identifier: String, sender: Any?)
```

## Parameters

- `identifier`: The string that identifies the triggered segue. In Interface Builder, you specify the segue’s identifier string in the attributes inspector.

  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier.
- `sender`: The object that you want to use to initiate the segue. This object is made available for informational purposes during the actual segue.

<a id="Discussion"></a>

## Discussion

Normally, segues are initiated automatically and not using this method. However, you can use this method in cases where the segue could not be configured in your storyboard file. For example, you might call it from a custom action handler used in response to shake or accelerometer events.

The current view controller must have been loaded from a storyboard. If its [storyboard](storyboard.md) property is `nil`, perhaps because you allocated and initialized the view controller yourself, this method throws an exception.

## See Also

### Performing segues

- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [allowedChildrenForUnwinding(from:)](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childContaining(\_:)](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction(\_:from:sender:)](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwind(for:towards:)](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.

# performSegueWithIdentifier:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Initiates the segue with the specified identifier from the current view controller’s storyboard file.

## Declaration

```objectivec
- (void) performSegueWithIdentifier:(NSString *) identifier sender:(id) sender;
```

## Parameters

- `identifier`: The string that identifies the triggered segue. In Interface Builder, you specify the segue’s identifier string in the attributes inspector.

  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier.
- `sender`: The object that you want to use to initiate the segue. This object is made available for informational purposes during the actual segue.

<a id="Discussion"></a>

## Discussion

Normally, segues are initiated automatically and not using this method. However, you can use this method in cases where the segue could not be configured in your storyboard file. For example, you might call it from a custom action handler used in response to shake or accelerometer events.

The current view controller must have been loaded from a storyboard. If its [storyboard](storyboard.md) property is `nil`, perhaps because you allocated and initialized the view controller yourself, this method throws an exception.

## See Also

### Performing segues

- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Deprecated. Determines whether the segue with the specified identifier should be performed.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Deprecated. Notifies the view controller that a segue is about to be performed.
- [allowedChildViewControllersForUnwindingFromSource:](allowedchildrenforunwinding%28from_%29.md): Deprecated. Returns an array of child view controllers to search for an unwind segue destination.
- [childViewControllerContainingSegueSource:](childcontaining%28__%29.md): Deprecated. Returns the child view controller that contains the source of the unwind segue.
- [canPerformUnwindSegueAction:fromViewController:sender:](canperformunwindsegueaction%28__from_sender_%29.md): Deprecated. Called on a view controller to determine whether it responds to an unwind action.
- [unwindForSegue:towardsViewController:](unwind%28for_towards_%29.md): Deprecated. Called when an unwind segue transitions to a new view controller.
