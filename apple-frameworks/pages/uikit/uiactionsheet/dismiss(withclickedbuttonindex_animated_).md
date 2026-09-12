> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/dismiss(withclickedbuttonindex:animated:)](https://developer.apple.com/documentation/uikit/uiactionsheet/dismiss(withclickedbuttonindex:animated:))

# dismiss(withClickedButtonIndex:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Dismisses the action sheet immediately using an optional animation.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
func dismiss(withClickedButtonIndex buttonIndex: Int, animated: Bool)
```

## Parameters

- `buttonIndex`: The index of the button that was clicked. Button indices start at `0`.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to remove the action sheet without an animation.

<a id="Discussion"></a>

## Discussion

You can use this method to dismiss the action sheet programmatically as needed. The action sheet also calls this method itself in response to the user tapping one of the buttons in the action sheet.

In iOS 4.0, you may want to call this method whenever your application moves to the background. An action sheet is not dismissed automatically when an application moves to the background. This behavior differs from previous versions of the operating system, where they were canceled automatically when the application was terminated. Dismissing the action sheet gives your application a chance to save changes or abort the operation and perform any necessary cleanup in case your application is terminated later.

# dismissWithClickedButtonIndex:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Dismisses the action sheet immediately using an optional animation.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) dismissWithClickedButtonIndex:(NSInteger) buttonIndex animated:(BOOL) animated;
```

## Parameters

- `buttonIndex`: The index of the button that was clicked. Button indices start at `0`.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the action sheet or [false](https://developer.apple.com/documentation/swift/false) to remove the action sheet without an animation.

<a id="Discussion"></a>

## Discussion

You can use this method to dismiss the action sheet programmatically as needed. The action sheet also calls this method itself in response to the user tapping one of the buttons in the action sheet.

In iOS 4.0, you may want to call this method whenever your application moves to the background. An action sheet is not dismissed automatically when an application moves to the background. This behavior differs from previous versions of the operating system, where they were canceled automatically when the application was terminated. Dismissing the action sheet gives your application a chance to save changes or abort the operation and perform any necessary cleanup in case your application is terminated later.
