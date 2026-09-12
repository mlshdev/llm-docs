> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/attachedsheet](https://developer.apple.com/documentation/appkit/nswindow/attachedsheet)

# attachedSheet (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sheet attached to the window.

## Declaration

```swift
var attachedSheet: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the window doesn’t have a sheet attached.

## See Also

### Managing Sheets

- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# attachedSheet (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sheet attached to the window.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSWindow * attachedSheet;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the window doesn’t have a sheet attached.

## See Also

### Managing Sheets

- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](sheetparent.md): The window to which the sheet is attached.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
