> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/willpresent(_:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/willpresent(_:))

# willPresent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before a model view is presented to the user.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func willPresent(_ alertView: UIAlertView)
```

## Parameters

- `alertView`: The alert view that is about to be displayed.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton(\_:)](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView(\_:willDismissWithButtonIndex:)](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView(\_:didDismissWithButtonIndex:)](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.

# willPresentAlertView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before a model view is presented to the user.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) willPresentAlertView:(UIAlertView *) alertView;
```

## Parameters

- `alertView`: The alert view that is about to be displayed.

## See Also

### Customizing behavior

- [alertViewShouldEnableFirstOtherButton:](alertviewshouldenablefirstotherbutton%28__%29.md): Deprecated. Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.
- [didPresentAlertView:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView:willDismissWithButtonIndex:](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView:didDismissWithButtonIndex:](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.
