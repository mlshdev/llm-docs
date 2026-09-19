> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/navigationcontroller

# navigationController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The nearest ancestor in the view controller hierarchy that is a navigation controller.

## Declaration

```swift
var navigationController: UINavigationController? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is a child of a navigation controller, this property contains the owning navigation controller. This property is `nil` if the view controller is not embedded inside a navigation controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [parent](parent.md): The parent view controller of the recipient.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.
- [arrangementViewController](arrangementviewcontroller.md): Beta. The nearest ancestor arrangement view controller.

# navigationController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The nearest ancestor in the view controller hierarchy that is a navigation controller.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UINavigationController * navigationController;
```

<a id="Discussion"></a>

## Discussion

If the view controller or one of its ancestors is a child of a navigation controller, this property contains the owning navigation controller. This property is `nil` if the view controller is not embedded inside a navigation controller.

## See Also

### Getting other related view controllers

- [presentingViewController](presentingviewcontroller.md): The view controller that presented this view controller.
- [presentedViewController](presentedviewcontroller.md): The view controller that is presented by this view controller, or one of its ancestors in the view controller hierarchy.
- [parentViewController](parent.md): The parent view controller of the recipient.
- [splitViewController](splitviewcontroller.md): The nearest ancestor in the view controller hierarchy that is a split view controller.
- [tabBarController](tabbarcontroller.md): The nearest ancestor in the view controller hierarchy that is a tab bar controller.
- [arrangementViewController](arrangementviewcontroller.md): Beta. The nearest ancestor arrangement view controller.
