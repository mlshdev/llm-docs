> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/alertview(_:willdismisswithbuttonindex:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/alertview(_:willdismisswithbuttonindex:))

# alertView(\_:willDismissWithButtonIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an alert view is dismissed.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func alertView(_ alertView: UIAlertView, willDismissWithButtonIndex buttonIndex: Int)
```

## Parameters

- `alertView`: The alert view that is about to be dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the alert view is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked before the animation begins and the view is hidden.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton(\_:)](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView(\_:didDismissWithButtonIndex:)](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.

# alertView:willDismissWithButtonIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an alert view is dismissed.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) alertView:(UIAlertView *) alertView willDismissWithButtonIndex:(NSInteger) buttonIndex;
```

## Parameters

- `alertView`: The alert view that is about to be dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the alert view is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked before the animation begins and the view is hidden.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton:](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [willPresentAlertView:](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresentAlertView:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView:didDismissWithButtonIndex:](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.
