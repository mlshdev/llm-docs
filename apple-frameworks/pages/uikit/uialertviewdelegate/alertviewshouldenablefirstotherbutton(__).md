> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/alertviewshouldenablefirstotherbutton(_:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/alertviewshouldenablefirstotherbutton(_:))

# alertViewShouldEnableFirstOtherButton(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func alertViewShouldEnableFirstOtherButton(_ alertView: UIAlertView) -> Bool
```

## Parameters

- `alertView`: The alert view that is being configured.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the button should be enabled, no if the button should be disabled.

## See Also

### Customizing behavior

- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView(\_:willDismissWithButtonIndex:)](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView(\_:didDismissWithButtonIndex:)](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.

# alertViewShouldEnableFirstOtherButton: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate to determine whether the first non-cancel button in the alert should be enabled.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (BOOL) alertViewShouldEnableFirstOtherButton:(UIAlertView *) alertView;
```

## Parameters

- `alertView`: The alert view that is being configured.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the button should be enabled, no if the button should be disabled.

## See Also

### Customizing behavior

- [willPresentAlertView:](willpresent%28__%29.md): Deprecated. Sent to the delegate before a model view is presented to the user.
- [didPresentAlertView:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an alert view is presented to the user.
- [alertView:willDismissWithButtonIndex:](alertview%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an alert view is dismissed.
- [alertView:didDismissWithButtonIndex:](alertview%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an alert view is dismissed from the screen.
