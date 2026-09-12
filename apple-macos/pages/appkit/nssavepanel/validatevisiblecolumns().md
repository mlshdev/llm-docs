> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/validatevisiblecolumns()](https://developer.apple.com/documentation/appkit/nssavepanel/validatevisiblecolumns())

# validateVisibleColumns() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates and reloads the browser columns visible in the panel.

## Declaration

```swift
func validateVisibleColumns()
```

<a id="Discussion"></a>

## Discussion

Call this method to validate the contents of the panel. For example, you might call it to allow the selection of files with certain extensions based on the selection made in an accessory-view pop-up list. When the user changes the selection, invoke this method to revalidate the visible columns.

## See Also

### Showing the Panel

- [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [begin(completionHandler:)](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal()](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.

# validateVisibleColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates and reloads the browser columns visible in the panel.

## Declaration

```objectivec
- (void) validateVisibleColumns;
```

<a id="Discussion"></a>

## Discussion

Call this method to validate the contents of the panel. For example, you might call it to allow the selection of files with certain extensions based on the selection made in an accessory-view pop-up list. When the user changes the selection, invoke this method to revalidate the visible columns.

## See Also

### Showing the Panel

- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.
- [beginWithCompletionHandler:](begin%28completionhandler_%29.md): Presents the panel as a modeless window.
- [runModal](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.
