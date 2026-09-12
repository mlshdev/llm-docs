> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/dismiss(withclickedbuttonindex:animated:)](https://developer.apple.com/documentation/uikit/uialertview/dismiss(withclickedbuttonindex:animated:))

# dismiss(withClickedButtonIndex:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Dismisses the receiver, optionally with animation.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
func dismiss(withClickedButtonIndex buttonIndex: Int, animated: Bool)
```

## Parameters

- `buttonIndex`: The index of the button that was clicked just before invoking this method. The button indices start at `0`.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the receiver should be removed by animating it first; otherwise, [false](https://developer.apple.com/documentation/swift/false) if it should be removed immediately with no animation.

<a id="Discussion"></a>

## Discussion

In iOS 4.0, you may want to call this method whenever your application moves to the background. An alert view is not dismissed automatically when an application moves to the background. This behavior differs from previous versions of the operating system, where they were canceled automatically when the application was terminated. Dismissing the alert view gives your application a chance to save changes or abort the operation and perform any necessary cleanup in case your application is terminated later.

# dismissWithClickedButtonIndex:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Dismisses the receiver, optionally with animation.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) dismissWithClickedButtonIndex:(NSInteger) buttonIndex animated:(BOOL) animated;
```

## Parameters

- `buttonIndex`: The index of the button that was clicked just before invoking this method. The button indices start at `0`.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the receiver should be removed by animating it first; otherwise, [false](https://developer.apple.com/documentation/swift/false) if it should be removed immediately with no animation.

<a id="Discussion"></a>

## Discussion

In iOS 4.0, you may want to call this method whenever your application moves to the background. An alert view is not dismissed automatically when an application moves to the background. This behavior differs from previous versions of the operating system, where they were canceled automatically when the application was terminated. Dismissing the alert view gives your application a chance to save changes or abort the operation and perform any necessary cleanup in case your application is terminated later.
