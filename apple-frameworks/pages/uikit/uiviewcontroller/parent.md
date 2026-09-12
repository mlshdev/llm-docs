> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/parent](https://developer.apple.com/documentation/uikit/uiviewcontroller/parent)

# parent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The parent view controller of the recipient.

## Declaration

```swift
weak var parent: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

If the recipient is a child of a container view controller, this property holds the view controller it is contained in. If the recipient has no parent, the value in this property is `nil`.

Prior to iOS 5.0, if a view did not have a parent view controller and was being presented, the presenting view controller would be returned. On iOS 5, this behavior no longer occurs. Instead, use the [presentingViewController](presentingviewcontroller.md) property to access the presenting view controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.

# parentViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The parent view controller of the recipient.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIViewController * parentViewController;
```

<a id="Discussion"></a>

## Discussion

If the recipient is a child of a container view controller, this property holds the view controller it is contained in. If the recipient has no parent, the value in this property is `nil`.

Prior to iOS 5.0, if a view did not have a parent view controller and was being presented, the presenting view controller would be returned. On iOS 5, this behavior no longer occurs. Instead, use the [presentingViewController](presentingviewcontroller.md) property to access the presenting view controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.
