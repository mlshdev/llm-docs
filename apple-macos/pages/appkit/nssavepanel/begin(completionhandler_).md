> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/begin(completionhandler:)](https://developer.apple.com/documentation/appkit/nssavepanel/begin(completionhandler:))

# begin(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Presents the panel as a modeless window.

## Declaration

```swift
func begin(completionHandler handler: @escaping (NSApplication.ModalResponse) -> Void)
```

```swift
func begin() async -> NSApplication.ModalResponse
```

## Parameters

- `handler`: The block to call after the user closes the panel. This block has no return value and takes a single parameter:

  - **result**: The action taken by the user. The value of this parameter is [NSFileHandlingPanelOKButton](../nsfilehandlingpanelokbutton.md) if the user chose the OK button or [NSFileHandlingPanelCancelButton](../nsfilehandlingpanelcancelbutton.md) if the user chose the Cancel button.

<a id="Discussion"></a>

## Discussion

Configure all of the relevant properties of the panel before you call this method.

## See Also

### Showing the Panel

- [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [runModal()](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns()](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.

# beginWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Presents the panel as a modeless window.

## Declaration

```objectivec
- (void) beginWithCompletionHandler:(void (^)(NSModalResponse result)) handler;
```

## Parameters

- `handler`: The block to call after the user closes the panel. This block has no return value and takes a single parameter:

  - **result**: The action taken by the user. The value of this parameter is [NSFileHandlingPanelOKButton](../nsfilehandlingpanelokbutton.md) if the user chose the OK button or [NSFileHandlingPanelCancelButton](../nsfilehandlingpanelcancelbutton.md) if the user chose the Cancel button.

<a id="Discussion"></a>

## Discussion

Configure all of the relevant properties of the panel before you call this method.

## See Also

### Showing the Panel

- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [runModal](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
- [validateVisibleColumns](validatevisiblecolumns%28%29.md): Validates and reloads the browser columns visible in the panel.
