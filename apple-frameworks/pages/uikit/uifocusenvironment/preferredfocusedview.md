> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/preferredfocusedview](https://developer.apple.com/documentation/uikit/uifocusenvironment/preferredfocusedview)

# preferredFocusedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0)

Specifies the view that should be focused if this environment is focused.

> Use [preferredFocusEnvironments](preferredfocusenvironments.md) instead.

## Declaration

```swift
weak optional var preferredFocusedView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

Since [UIView](../uiview.md) conforms to [UIFocusEnvironment](../uifocusenvironment.md), any view returned from this property also has a preferred focused view. This creates a linked-list of views called the *preferred focus chain*. When focus updates to a new view, the focus engine will actually update focus to the deepest, focusable view in that new view’s preferred focus chain. Similarly, when setting initial focus, such as at application launch, the initial focused view is found by following the preferred focus chain from the root window.

By default, [UIView](../uiview.md) returns itself and [UIViewController](../uiviewcontroller.md) returns its root view. Returning `self` in a focusable view indicates that view should be focused. Returning `self` in an unfocusable view causes the focus engine to pick a default preferred focused view, by finding the closest focusable subview to the top-leading corner of the screen. Returning `nil` indicates that there is no preferred focused view.

## See Also

### Controlling user-generated focus movements

- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments, ordered by priority, to which this environment prefers focus to be directed during a focus update.

# preferredFocusedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0)

Specifies the view that should be focused if this environment is focused.

> Use [preferredFocusEnvironments](preferredfocusenvironments.md) instead.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIView * preferredFocusedView;
```

<a id="Discussion"></a>

## Discussion

Since [UIView](../uiview.md) conforms to [UIFocusEnvironment](../uifocusenvironment.md), any view returned from this property also has a preferred focused view. This creates a linked-list of views called the *preferred focus chain*. When focus updates to a new view, the focus engine will actually update focus to the deepest, focusable view in that new view’s preferred focus chain. Similarly, when setting initial focus, such as at application launch, the initial focused view is found by following the preferred focus chain from the root window.

By default, [UIView](../uiview.md) returns itself and [UIViewController](../uiviewcontroller.md) returns its root view. Returning `self` in a focusable view indicates that view should be focused. Returning `self` in an unfocusable view causes the focus engine to pick a default preferred focused view, by finding the closest focusable subview to the top-leading corner of the screen. Returning `nil` indicates that there is no preferred focused view.

## See Also

### Controlling user-generated focus movements

- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments, ordered by priority, to which this environment prefers focus to be directed during a focus update.
