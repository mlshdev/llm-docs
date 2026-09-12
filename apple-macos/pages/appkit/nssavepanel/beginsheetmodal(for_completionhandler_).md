> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/beginsheetmodal(for:completionhandler:)](https://developer.apple.com/documentation/appkit/nssavepanel/beginsheetmodal(for:completionhandler:))

# beginSheetModal(for:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Presents the panel as a sheet modal to the specified window.

## Declaration

```swift
func beginSheetModal(for window: NSWindow, completionHandler handler: @escaping (NSApplication.ModalResponse) -> Void)
```

```swift
func beginSheetModal(for window: NSWindow) async -> NSApplication.ModalResponse
```

## Parameters

- `window`: The window in which the panel will be presented.
- `handler`: The block called after the user dismisses the panel. The argument passed in will be [NSFileHandlingPanelOKButton](../nsfilehandlingpanelokbutton.md) if the user chose the OK button or [NSFileHandlingPanelCancelButton](../nsfilehandlingpanelcancelbutton.md) if the user chose the Cancel button.

<a id="Discussion"></a>

## Discussion

Configure all the relevant properties of the panel before you call this method. The completion handler block runs after the user dismisses the panel, but while the panel may still be onscreen. If you need to dismiss the panel from the screen—for example, if the completion block displays an alert—close the panel by calling its [orderOut(\_:)](../nswindow/orderout%28__%29.md) method with the value `nil`.

## See Also

### Showing the Panel

- [begin(completionHandler:)](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal()](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.

# beginSheetModalForWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Presents the panel as a sheet modal to the specified window.

## Declaration

```objectivec
- (void) beginSheetModalForWindow:(NSWindow *) window completionHandler:(void (^)(NSModalResponse result)) handler;
```

## Parameters

- `window`: The window in which the panel will be presented.
- `handler`: The block called after the user dismisses the panel. The argument passed in will be [NSFileHandlingPanelOKButton](../nsfilehandlingpanelokbutton.md) if the user chose the OK button or [NSFileHandlingPanelCancelButton](../nsfilehandlingpanelcancelbutton.md) if the user chose the Cancel button.

<a id="Discussion"></a>

## Discussion

Configure all the relevant properties of the panel before you call this method. The completion handler block runs after the user dismisses the panel, but while the panel may still be onscreen. If you need to dismiss the panel from the screen—for example, if the completion block displays an alert—close the panel by calling its [orderOut:](../nswindow/orderout%28__%29.md) method with the value `nil`.

## See Also

### Showing the Panel

- [beginWithCompletionHandler:](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.
