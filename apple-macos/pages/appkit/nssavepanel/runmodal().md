> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/runmodal()](https://developer.apple.com/documentation/appkit/nssavepanel/runmodal())

# runModal() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.

## Declaration

```swift
func runModal() -> NSApplication.ModalResponse
```

<a id="return-value"></a>

## Return Value

`NSFileHandlingPanelOKButton` (if the user clicks the OK button) or `NSFileHandlingPanelCancelButton` (if the user clicks the Cancel button).

<a id="Discussion"></a>

## Discussion

This method invokes `NSApplication`’s [runModal(for:)](../nsapplication/runmodal%28for_%29.md) method with `self` as the argument.

## See Also

### Related Documentation

- [runModal(for:)](../nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Showing the Panel

- [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [begin(completionHandler:)](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.

# runModal (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.

## Declaration

```objectivec
- (NSModalResponse) runModal;
```

<a id="return-value"></a>

## Return Value

`NSFileHandlingPanelOKButton` (if the user clicks the OK button) or `NSFileHandlingPanelCancelButton` (if the user clicks the Cancel button).

<a id="Discussion"></a>

## Discussion

This method invokes `NSApplication`’s [runModalForWindow:](../nsapplication/runmodal%28for_%29.md) method with `self` as the argument.

## See Also

### Related Documentation

- [runModalForWindow:](../nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Showing the Panel

- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [beginWithCompletionHandler:](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.
