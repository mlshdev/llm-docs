> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/presentalert(withtitle:message:preferredstyle:actions:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/presentalert(withtitle:message:preferredstyle:actions:))

# presentAlert(withTitle:message:preferredStyle:actions:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Presents an alert or action sheet over the current interface controller.

## Declaration

```swift
func presentAlert(withTitle title: String?, message: String?, preferredStyle: WKAlertControllerStyle, actions: [WKAlertAction])
```

## Parameters

- `title`: The title of the alert. Use this string to convey the intent of your alert.
- `message`: The text to display for the body of the alert. Use this string to display secondary information related to the alert.
- `preferredStyle`: The preferred style of the sheet. Use the available constants to specify the type of sheet (alert or action) to display and the configuration of the buttons.
- `actions`: An array of [WKAlertAction](../wkalertaction.md) objects that describe the custom buttons to display. The array must contain at least one button. For the [WKAlertControllerStyle.sideBySideButtonsAlert](../wkalertcontrollerstyle/sidebysidebuttonsalert.md) style, the array must contain exactly two buttons. The block associated with each button should dismiss the sheet in addition to performing any other tasks.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use action and alert sheets to interrupt the current workflow temporarily and display a message to the user. The sheet itself places a blurred layer over your interface controller and displays the title and message text on top of that. If you provided action buttons, those buttons are displayed at the bottom of the sheet. When the user taps one of your buttons, WatchKit dismisses the sheet automatically and executes your button’s handler block. You can also dismiss the sheet programmatically by calling the [dismiss()](dismiss%28%29.md) method.

For the [WKAlertControllerStyle.actionSheet](../wkalertcontrollerstyle/actionsheet.md) style, this method automatically includes a localized Cancel button at the top of the sheet if you do not specify one in the `actions` array. If one of your buttons is configured to be a Cancel button—that is, you initialize it with the [WKAlertActionStyle.cancel](../wkalertactionstyle/cancel.md) style—the sheet displays your button’s text in place of the default Cancel button text.

Only one action or alert sheet may be visible at a time. If you call this method and a sheet is already visible, this method dismisses the previous sheet before displaying the new one.

## See Also

### Presenting interface controllers modally

- [presentController(withName:context:)](presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentController(withNames:contexts:)](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [presentController(withNamesAndContexts:)](presentcontroller%28withnamesandcontexts_%29.md): Presents a page-based interface modally.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismiss()](dismiss%28%29.md): Dismisses the current interface controller from the screen.

# presentAlertControllerWithTitle:message:preferredStyle:actions: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Presents an alert or action sheet over the current interface controller.

## Declaration

```objectivec
- (void) presentAlertControllerWithTitle:(NSString *) title message:(NSString *) message preferredStyle:(WKAlertControllerStyle) preferredStyle actions:(NSArray<WKAlertAction *> *) actions;
```

## Parameters

- `title`: The title of the alert. Use this string to convey the intent of your alert.
- `message`: The text to display for the body of the alert. Use this string to display secondary information related to the alert.
- `preferredStyle`: The preferred style of the sheet. Use the available constants to specify the type of sheet (alert or action) to display and the configuration of the buttons.
- `actions`: An array of [WKAlertAction](../wkalertaction.md) objects that describe the custom buttons to display. The array must contain at least one button. For the [WKAlertControllerStyleSideBySideButtonsAlert](../wkalertcontrollerstyle/sidebysidebuttonsalert.md) style, the array must contain exactly two buttons. The block associated with each button should dismiss the sheet in addition to performing any other tasks.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use action and alert sheets to interrupt the current workflow temporarily and display a message to the user. The sheet itself places a blurred layer over your interface controller and displays the title and message text on top of that. If you provided action buttons, those buttons are displayed at the bottom of the sheet. When the user taps one of your buttons, WatchKit dismisses the sheet automatically and executes your button’s handler block. You can also dismiss the sheet programmatically by calling the [dismissController](dismiss%28%29.md) method.

For the [WKAlertControllerStyleActionSheet](../wkalertcontrollerstyle/actionsheet.md) style, this method automatically includes a localized Cancel button at the top of the sheet if you do not specify one in the `actions` array. If one of your buttons is configured to be a Cancel button—that is, you initialize it with the [WKAlertActionStyleCancel](../wkalertactionstyle/cancel.md) style—the sheet displays your button’s text in place of the default Cancel button text.

Only one action or alert sheet may be visible at a time. If you call this method and a sheet is already visible, this method dismisses the previous sheet before displaying the new one.

## See Also

### Presenting interface controllers modally

- [presentControllerWithName:context:](presentcontroller%28withname_context_%29.md): Presents a single interface controller modally.
- [presentControllerWithNames:contexts:](presentcontroller%28withnames_contexts_%29.md): Presents a page-based interface modally.
- [WKAlertControllerStyle](../wkalertcontrollerstyle.md): Constants indicating the styles for standard system alerts.
- [dismissController](dismiss%28%29.md): Dismisses the current interface controller from the screen.
