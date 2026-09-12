> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/beginsheet(_:completionhandler:)](https://developer.apple.com/documentation/appkit/nswindow/beginsheet(_:completionhandler:))

# beginSheet(\_:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Starts a document-modal session and presents—or queues for presentation—a sheet.

## Declaration

```swift
func beginSheet(_ sheetWindow: NSWindow, completionHandler handler: ((NSApplication.ModalResponse) -> Void)? = nil)
```

```swift
func beginSheet(_ sheetWindow: NSWindow) async -> NSApplication.ModalResponse
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to present.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

If the window already has a presented sheet, this method queues the specified sheet for presentation after the current sheet is dismissed and then returns control to the caller.

If the window has no presented sheets, this method displays the specified sheet, makes it key, and returns control to the caller. While the sheet remains visible, most events targeted at the receiver are prohibited.  The runloop does not enter any special mode to accomplish this.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# beginSheet:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Starts a document-modal session and presents—or queues for presentation—a sheet.

## Declaration

```objectivec
- (void) beginSheet:(NSWindow *) sheetWindow completionHandler:(void (^)(NSModalResponse returnCode)) handler;
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to present.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

If the window already has a presented sheet, this method queues the specified sheet for presentation after the current sheet is dismissed and then returns control to the caller.

If the window has no presented sheets, this method displays the specified sheet, makes it key, and returns control to the caller. While the sheet remains visible, most events targeted at the receiver are prohibited.  The runloop does not enter any special mode to accomplish this.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
