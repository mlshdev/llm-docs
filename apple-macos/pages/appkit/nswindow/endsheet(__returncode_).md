> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/endsheet(_:returncode:)](https://developer.apple.com/documentation/appkit/nswindow/endsheet(_:returncode:))

# endSheet(\_:returnCode:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Ends a document-modal session and dismisses the specified sheet.

## Declaration

```swift
func endSheet(_ sheetWindow: NSWindow, returnCode: NSApplication.ModalResponse)
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to dismiss.
- `returnCode`: The return code to send to the completion handler. You can use  a custom value that you define or one of the return codes defined in the [NSApplication.ModalResponse](../nsapplication/modalresponse.md) enumeration or  `Additional NSModalResponse Values`.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the specified return code.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# endSheet:returnCode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Ends a document-modal session and dismisses the specified sheet.

## Declaration

```objectivec
- (void) endSheet:(NSWindow *) sheetWindow returnCode:(NSModalResponse) returnCode;
```

## Parameters

- `sheetWindow`: The window object that represents the sheet to dismiss.
- `returnCode`: The return code to send to the completion handler. You can use  a custom value that you define or one of the return codes defined in the [NSModalResponse](../nsapplication/modalresponse.md) enumeration or  `Additional NSModalResponse Values`.

<a id="Discussion"></a>

## Discussion

This method ends the modal session with the specified return code.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
