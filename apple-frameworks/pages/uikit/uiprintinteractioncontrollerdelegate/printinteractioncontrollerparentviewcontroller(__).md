> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller(_:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller(_:))

# printInteractionControllerParentViewController(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a parent view controller for managing the printing-options view.

## Declaration

```swift
optional func printInteractionControllerParentViewController(_ printInteractionController: UIPrintInteractionController) -> UIViewController?
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="return-value"></a>

## Return Value

The view controller that is to be the parent of the print-interaction controller managing the printing-options view. Return `nil` for the standard presentation behavior.

<a id="Discussion"></a>

## Discussion

This method allows an application to present the print-options view from a view controller of their own choosing. The parent view controller returned must be a [UIViewController](../uiviewcontroller.md) object, such as a [UINavigationController](../uinavigationcontroller.md) object or a generic view controller. A common strategy for embedding is to create a [UINavigationController](../uinavigationcontroller.md) object as the content view controller ([contentViewController](../uipopovercontroller/contentviewcontroller.md) property) of a [UIPopoverController](../uipopovercontroller.md) object and return that. UIKit can push the returned view controller onto the stack if its parent is a navigation controller or present it modally if it isn’t.

This method is invoked in any of the `present...` methods of the [UIPrintInteractionController](../uiprintinteractioncontroller.md) class (for example, [present(animated:completionHandler:)](../uiprintinteractioncontroller/present%28animated_completionhandler_%29.md)).

# printInteractionControllerParentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a parent view controller for managing the printing-options view.

## Declaration

```objectivec
- (UIViewController *) printInteractionControllerParentViewController:(UIPrintInteractionController *) printInteractionController;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="return-value"></a>

## Return Value

The view controller that is to be the parent of the print-interaction controller managing the printing-options view. Return `nil` for the standard presentation behavior.

<a id="Discussion"></a>

## Discussion

This method allows an application to present the print-options view from a view controller of their own choosing. The parent view controller returned must be a [UIViewController](../uiviewcontroller.md) object, such as a [UINavigationController](../uinavigationcontroller.md) object or a generic view controller. A common strategy for embedding is to create a [UINavigationController](../uinavigationcontroller.md) object as the content view controller ([contentViewController](../uipopovercontroller/contentviewcontroller.md) property) of a [UIPopoverController](../uipopovercontroller.md) object and return that. UIKit can push the returned view controller onto the stack if its parent is a navigation controller or present it modally if it isn’t.

This method is invoked in any of the `present...` methods of the [UIPrintInteractionController](../uiprintinteractioncontroller.md) class (for example, [presentAnimated:completionHandler:](../uiprintinteractioncontroller/present%28animated_completionhandler_%29.md)).
