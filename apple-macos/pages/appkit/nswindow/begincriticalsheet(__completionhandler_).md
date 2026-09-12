> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/begincriticalsheet(_:completionhandler:)](https://developer.apple.com/documentation/appkit/nswindow/begincriticalsheet(_:completionhandler:))

# beginCriticalSheet(\_:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Starts a document-modal session and presents the specified critical sheet.

## Declaration

```swift
func beginCriticalSheet(_ sheetWindow: NSWindow, completionHandler handler: ((NSApplication.ModalResponse) -> Void)? = nil)
```

```swift
func beginCriticalSheet(_ sheetWindow: NSWindow) async -> NSApplication.ModalResponse
```

## Parameters

- `sheetWindow`: The window object that represents the critical sheet to present. A critical sheet contains content that is time-critical or very important to the user.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method displays the sheet—on top of the window’s current sheet, if one exists—makes it key and returns control to the caller. While the sheet remains visible, most events targeted at the receiver are prohibited. The runloop does not enter any special mode to accomplish this.

If the window already has a sheet when this method runs, the existing sheet is temporarily disabled while the critical sheet is presented. When the critical sheet is dismissed, the previously presented sheet continues its standard operation.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# beginCriticalSheet:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Starts a document-modal session and presents the specified critical sheet.

## Declaration

```objectivec
- (void) beginCriticalSheet:(NSWindow *) sheetWindow completionHandler:(void (^)(NSModalResponse returnCode)) handler;
```

## Parameters

- `sheetWindow`: The window object that represents the critical sheet to present. A critical sheet contains content that is time-critical or very important to the user.
- `handler`: The completion handler that gets called when the sheet’s modal session ends.

<a id="Discussion"></a>

## Discussion

This method displays the sheet—on top of the window’s current sheet, if one exists—makes it key and returns control to the caller. While the sheet remains visible, most events targeted at the receiver are prohibited. The runloop does not enter any special mode to accomplish this.

If the window already has a sheet when this method runs, the existing sheet is temporarily disabled while the critical sheet is presented. When the critical sheet is dismissed, the previously presented sheet continues its standard operation.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
