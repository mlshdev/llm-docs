> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/beginsheetmodal(for:modaldelegate:didend:contextinfo:)](https://developer.apple.com/documentation/appkit/nsalert/beginsheetmodal(for:modaldelegate:didend:contextinfo:))

# beginSheetModal(for:modalDelegate:didEnd:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Runs the alert modally as an alert sheet attached to a specified window.

> Use [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func beginSheetModal(for window: NSWindow, modalDelegate delegate: Any?, didEnd didEndSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `window`: The parent window for the sheet.
- `delegate`: The delegate for the modal-dialog session.
- `didEndSelector`: Message the alert sends to `modalDelegate` after the user responds but before the sheet is dismissed.
- `contextInfo`: Contextual data passed to `modalDelegate` in `didEndSelector` message.

<a id="Discussion"></a>

## Discussion

You can create the required `NSAlert` object either through the standard allocate-initialize procedure or by using the compatibility method [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md).

The `alertDidEndSelector` argument must be a selector that takes three arguments, and the corresponding method should have a declaration modeled on the following example:

```objc
- (void) alertDidEnd:(NSAlert *)alert returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
```

where `alert` is the `NSAlert` object, `returnCode` specifies which button the user clicked, and `contextInfo` is the same `contextInfo` passed in the original message. The `returnCode` argument identifies which button was used to dismiss the alert (see this method’s “Special Considerations” section). The modal delegate determines which button was clicked (“OK”, “Cancel”, and so on) and proceeds accordingly.

If you want to dismiss the sheet from within the `alertDidEndSelector` method before the modal delegate carries out an action in response to the return value, send [orderOut(\_:)](../nswindow/orderout%28__%29.md) ([NSWindow](../nswindow.md)) to the window object obtained by sending [window](window.md) to the `alert` argument. This allows you to chain sheets, for example, by dismissing one sheet before showing the next from within the `alertDidEndSelector` method. Note that you should be careful not to call [orderOut(\_:)](../nswindow/orderout%28__%29.md) on the sheet from elsewhere in your program before the `alertDidEndSelector` method is invoked because the parent window can hang when another alert is requested. If you need to do this, use the `NSApplication` method [endSheet(\_:)](../nsapplication/endsheet%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

If you use [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md) to create an alert, the following constants are used to identify the button used to dismiss the alert: `NSAlertDefaultReturn`, `NSAlertAlternateReturn`, and `NSAlertOtherReturn`. Otherwise, the constants used are the ones described in `Button Return Values`.

# beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Runs the alert modally as an alert sheet attached to a specified window.

> Use [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) beginSheetModalForWindow:(NSWindow *) window modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `window`: The parent window for the sheet.
- `delegate`: The delegate for the modal-dialog session.
- `didEndSelector`: Message the alert sends to `modalDelegate` after the user responds but before the sheet is dismissed.
- `contextInfo`: Contextual data passed to `modalDelegate` in `didEndSelector` message.

<a id="Discussion"></a>

## Discussion

You can create the required `NSAlert` object either through the standard allocate-initialize procedure or by using the compatibility method [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md).

The `alertDidEndSelector` argument must be a selector that takes three arguments, and the corresponding method should have a declaration modeled on the following example:

```objc
- (void) alertDidEnd:(NSAlert *)alert returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
```

where `alert` is the `NSAlert` object, `returnCode` specifies which button the user clicked, and `contextInfo` is the same `contextInfo` passed in the original message. The `returnCode` argument identifies which button was used to dismiss the alert (see this method’s “Special Considerations” section). The modal delegate determines which button was clicked (“OK”, “Cancel”, and so on) and proceeds accordingly.

If you want to dismiss the sheet from within the `alertDidEndSelector` method before the modal delegate carries out an action in response to the return value, send [orderOut:](../nswindow/orderout%28__%29.md) ([NSWindow](../nswindow.md)) to the window object obtained by sending [window](window.md) to the `alert` argument. This allows you to chain sheets, for example, by dismissing one sheet before showing the next from within the `alertDidEndSelector` method. Note that you should be careful not to call [orderOut:](../nswindow/orderout%28__%29.md) on the sheet from elsewhere in your program before the `alertDidEndSelector` method is invoked because the parent window can hang when another alert is requested. If you need to do this, use the `NSApplication` method [endSheet:](../nsapplication/endsheet%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

If you use [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md) to create an alert, the following constants are used to identify the button used to dismiss the alert: `NSAlertDefaultReturn`, `NSAlertAlternateReturn`, and `NSAlertOtherReturn`. Otherwise, the constants used are the ones described in `Button Return Values`.
