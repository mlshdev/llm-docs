> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/runmodal()](https://developer.apple.com/documentation/appkit/nsalert/runmodal())

# runModal() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.

## Declaration

```swift
func runModal() -> NSApplication.ModalResponse
```

<a id="return-value"></a>

## Return Value

A response to the alert. See this method’s “Special Considerations” section for details.

<a id="Discussion"></a>

## Discussion

You can create the alert either through the standard allocation and initialization procedure or, if necessary in your app, by using the deprecated compatibility method [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md).

<a id="Special-Considerations"></a>

### Special Considerations

This method can return values other than those specific to the alert buttons ([alertFirstButtonReturn](../nsapplication/modalresponse/alertfirstbuttonreturn.md), [alertSecondButtonReturn](../nsapplication/modalresponse/alertsecondbuttonreturn.md), and so on) if the alert is canceled programatically.

If you use `alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:` to create an alert, the `NSAlertDefaultReturn`, `NSAlertAlternateReturn`, and `NSAlertOtherReturn` constants identify the button used to dismiss the alert. Otherwise, the constants used are the ones described in [addButton(withTitle:)](addbutton%28withtitle_%29.md).

## See Also

### Displaying alerts

- [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [suppressionButton](suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.

# runModal (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.

## Declaration

```objectivec
- (NSModalResponse) runModal;
```

<a id="return-value"></a>

## Return Value

A response to the alert. See this method’s “Special Considerations” section for details.

<a id="Discussion"></a>

## Discussion

You can create the alert either through the standard allocation and initialization procedure or, if necessary in your app, by using the deprecated compatibility method [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md).

<a id="Special-Considerations"></a>

### Special Considerations

This method can return values other than those specific to the alert buttons ([NSAlertFirstButtonReturn](../nsapplication/modalresponse/alertfirstbuttonreturn.md), [NSAlertSecondButtonReturn](../nsapplication/modalresponse/alertsecondbuttonreturn.md), and so on) if the alert is canceled programatically.

If you use `alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:` to create an alert, the `NSAlertDefaultReturn`, `NSAlertAlternateReturn`, and `NSAlertOtherReturn` constants identify the button used to dismiss the alert. Otherwise, the constants used are the ones described in [addButtonWithTitle:](addbutton%28withtitle_%29.md).

## See Also

### Displaying alerts

- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [suppressionButton](suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.
