> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/sheets](https://developer.apple.com/documentation/appkit/nswindow/sheets)

# sheets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of the sheets currently attached to the window.

## Declaration

```swift
var sheets: [NSWindow] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an ordered array that contains—in top-to-bottom order—the presented sheets that are attached to the window, followed by queued sheets, in the order they were queued. The array doesn’t include nested sheets or subsheets.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.

# sheets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of the sheets currently attached to the window.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSWindow *> * sheets;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an ordered array that contains—in top-to-bottom order—the presented sheets that are attached to the window, followed by queued sheets, in the order they were queued. The array doesn’t include nested sheets or subsheets.

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
