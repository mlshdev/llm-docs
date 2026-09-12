> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/alertview(_:diddismisswithbuttonindex:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/alertview(_:diddismisswithbuttonindex:))

# alertView(\_:didDismissWithButtonIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an alert view is dismissed from the screen.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func alertView(_ alertView: UIAlertView, didDismissWithButtonIndex buttonIndex: Int)
```

## Parameters

- `alertView`: The alert view that was dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the alert view is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked after the animation ends and the view is hidden.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton(\_:)](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView(\_:willDismissWithButtonIndex:)](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.

# alertView:didDismissWithButtonIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an alert view is dismissed from the screen.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) alertView:(UIAlertView *) alertView didDismissWithButtonIndex:(NSInteger) buttonIndex;
```

## Parameters

- `alertView`: The alert view that was dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the alert view is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked after the animation ends and the view is hidden.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton:](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresentAlertView:](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresentAlertView:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView:willDismissWithButtonIndex:](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
