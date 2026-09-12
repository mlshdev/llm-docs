> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/splitviewcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/splitviewcontroller)

# splitViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The nearest ancestor in the view controller hierarchy that is a split view controller.

## Declaration

```swift
var splitViewController: UISplitViewController? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is a child of a split view controller, this property contains the owning split view controller. This property is `nil` if the view controller is not embedded inside a split view controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [parent](parent.md): The parent view controller of the recipient.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.

# splitViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The nearest ancestor in the view controller hierarchy that is a split view controller.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UISplitViewController * splitViewController;
```

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is a child of a split view controller, this property contains the owning split view controller. This property is `nil` if the view controller is not embedded inside a split view controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [parentViewController](parent.md): The parent view controller of the recipient.
- [navigationController](navigationcontroller.md): The nearest ancestor in the view controller hierarchy that is a navigation controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.
