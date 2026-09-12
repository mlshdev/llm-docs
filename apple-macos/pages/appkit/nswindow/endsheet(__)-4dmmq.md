> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/endsheet(_:)-4dmmq](https://developer.apple.com/documentation/appkit/nswindow/endsheet(_:)-4dmmq)

# endSheet(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Ends a document-modal session and dismisses the specified sheet.

## Declaration

```swift
func endSheet(_ sheetWindow: NSWindow)
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to be dismissed.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the return code `NSModalResponseStop`.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# endSheet: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Ends a document-modal session and dismisses the specified sheet.

## Declaration

```objectivec
- (void) endSheet:(NSWindow *) sheetWindow;
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to be dismissed.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the return code `NSModalResponseStop`.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
