> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:viewcontrollerforadaptivepresentationstyle:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:viewcontrollerforadaptivepresentationstyle:))

# presentationController(\_:viewControllerForAdaptivePresentationStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the view controller to display when adapting to the specified presentation style.

## Declaration

```swift
optional func presentationController(_ controller: UIPresentationController, viewControllerForAdaptivePresentationStyle style: UIModalPresentationStyle) -> UIViewController?
```

## Parameters

- `controller`: The presentation controller that is managing the size class change.
- `style`: The new presentation style that is about to be employed to display the view controller.

<a id="return-value"></a>

## Return Value

The view controller to display in place of the existing presented view controller.

<a id="Discussion"></a>

## Discussion

When a size class change causes a change to the underlying presentation style, the presentation controller calls this method to ask for the view controller to display in that new style. This method is your opportunity to replace the current view controller with one that is better suited for the new presentation style. For example, you might use this method to insert a navigation controller into your view hierarchy to facilitate pushing new view controllers more easily in the compact environment. In that instance, you would return a navigation controller whose root view controller is the currently presented view controller. You could also return an entirely different view controller if you prefer.

If you do not implement this method or your implementation returns `nil`, the presentation controller uses its existing presented view controller.

# presentationController:viewControllerForAdaptivePresentationStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the view controller to display when adapting to the specified presentation style.

## Declaration

```objectivec
- (UIViewController *) presentationController:(UIPresentationController *) controller viewControllerForAdaptivePresentationStyle:(UIModalPresentationStyle) style;
```

## Parameters

- `controller`: The presentation controller that is managing the size class change.
- `style`: The new presentation style that is about to be employed to display the view controller.

<a id="return-value"></a>

## Return Value

The view controller to display in place of the existing presented view controller.

<a id="Discussion"></a>

## Discussion

When a size class change causes a change to the underlying presentation style, the presentation controller calls this method to ask for the view controller to display in that new style. This method is your opportunity to replace the current view controller with one that is better suited for the new presentation style. For example, you might use this method to insert a navigation controller into your view hierarchy to facilitate pushing new view controllers more easily in the compact environment. In that instance, you would return a navigation controller whose root view controller is the currently presented view controller. You could also return an entirely different view controller if you prefer.

If you do not implement this method or your implementation returns `nil`, the presentation controller uses its existing presented view controller.
