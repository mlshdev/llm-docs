> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/presentedviewcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/presentedviewcontroller)

# presentedViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.

## Declaration

```swift
var presentedViewController: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

When you present a view controller modally (either explicitly or implicitly) using the [present(\_:animated:completion:)](present%28__animated_completion_%29.md) method, the view controller that called the method has this property set to the view controller that it presented. If the current view controller did not present another view controller modally, the value in this property is `nil`.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [parent](parent.md): The parent view controller of the recipient.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.

# presentedViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * presentedViewController;
```

<a id="Discussion"></a>

## Discussion

When you present a view controller modally (either explicitly or implicitly) using the [presentViewController:animated:completion:](present%28__animated_completion_%29.md) method, the view controller that called the method has this property set to the view controller that it presented. If the current view controller did not present another view controller modally, the value in this property is `nil`.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [parentViewController](parent.md): The parent view controller of the recipient.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.
