> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/beginsheetmodal(for:completionhandler:)](https://developer.apple.com/documentation/appkit/nsalert/beginsheetmodal(for:completionhandler:))

# beginSheetModal(for:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Runs the alert modally as a sheet attached to the specified window.

## Declaration

```swift
func beginSheetModal(for sheetWindow: NSWindow, completionHandler handler: ((NSApplication.ModalResponse) -> Void)? = nil)
```

```swift
func beginSheetModal(for sheetWindow: NSWindow) async -> NSApplication.ModalResponse
```

## Parameters

- `sheetWindow`: The window on which to display the sheet.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method uses the `NSWindow` sheet methods to display the alert (for more information, see Managing Sheets). If the alert has an alert style of [NSCriticalAlertStyle](../nscriticalalertstyle.md), it is presented as a critical sheet, which means that it can display on top of other sheets that might already be attached to the window. Otherwise, it is presented—or queued for presentation—as a standard sheet.

Note that [orderOut(\_:)](../nswindow/orderout%28__%29.md) no longer needs to be called in the completion handler. If you don’t dismiss the alert, it will be done for you after the completion handler finishes.

## See Also

### Displaying alerts

- [runModal()](runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [suppressionButton](suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.

# beginSheetModalForWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Runs the alert modally as a sheet attached to the specified window.

## Declaration

```objectivec
- (void) beginSheetModalForWindow:(NSWindow *) sheetWindow completionHandler:(void (^)(NSModalResponse returnCode)) handler;
```

## Parameters

- `sheetWindow`: The window on which to display the sheet.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method uses the `NSWindow` sheet methods to display the alert (for more information, see Managing Sheets). If the alert has an alert style of [NSCriticalAlertStyle](../nscriticalalertstyle.md), it is presented as a critical sheet, which means that it can display on top of other sheets that might already be attached to the window. Otherwise, it is presented—or queued for presentation—as a standard sheet.

Note that [orderOut:](../nswindow/orderout%28__%29.md) no longer needs to be called in the completion handler. If you don’t dismiss the alert, it will be done for you after the completion handler finishes.

## See Also

### Displaying alerts

- [runModal](runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [suppressionButton](suppressionbutton.md): The alert’s suppression checkbox.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.
