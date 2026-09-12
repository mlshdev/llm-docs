> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/alertviewcancel(_:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/alertviewcancel(_:))

# alertViewCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an alert view is canceled.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func alertViewCancel(_ alertView: UIAlertView)
```

## Parameters

- `alertView`: The alert view that will be canceled.

<a id="Discussion"></a>

## Discussion

If the alert view’s delegate does not implement this method, clicking the cancel button is simulated and the alert view is dismissed. Implement this method if you need to perform some actions before an alert view is canceled. An alert view can be canceled at any time by the system—for example, when the user taps the Home button. The [alertView(\_:willDismissWithButtonIndex:)](alertview%28__willdismisswithbuttonindex_%29.md) and [alertView(\_:didDismissWithButtonIndex:)](alertview%28__diddismisswithbuttonindex_%29.md) methods are invoked after this method.

# alertViewCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an alert view is canceled.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) alertViewCancel:(UIAlertView *) alertView;
```

## Parameters

- `alertView`: The alert view that will be canceled.

<a id="Discussion"></a>

## Discussion

If the alert view’s delegate does not implement this method, clicking the cancel button is simulated and the alert view is dismissed. Implement this method if you need to perform some actions before an alert view is canceled. An alert view can be canceled at any time by the system—for example, when the user taps the Home button. The [alertView:willDismissWithButtonIndex:](alertview%28__willdismisswithbuttonindex_%29.md) and [alertView:didDismissWithButtonIndex:](alertview%28__diddismisswithbuttonindex_%29.md) methods are invoked after this method.
