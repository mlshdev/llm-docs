> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/sheetparent](https://developer.apple.com/documentation/appkit/nswindow/sheetparent)

# sheetParent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The window to which the sheet is attached.

## Declaration

```swift
var sheetParent: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the receiver is not a sheet or has no sheet parent.

The window object in this property refers to the window to which the sheet is logically attached, regardless of appearance. The parent window–sheet relationship begins with the beginning of the sheet (for example, through [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md)) and ends with the sheet’s dismissal (for example, through [endSheet(\_:)](endsheet%28__%29-4dmmq.md)).

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [isSheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheets](sheets.md): An array of the sheets currently attached to the window.

# sheetParent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The window to which the sheet is attached.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSWindow * sheetParent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the receiver is not a sheet or has no sheet parent.

The window object in this property refers to the window to which the sheet is logically attached, regardless of appearance. The parent window–sheet relationship begins with the beginning of the sheet (for example, through [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md)) and ends with the sheet’s dismissal (for example, through [endSheet:](endsheet%28__%29-4dmmq.md)).

## See Also

### Managing Sheets

- [attachedSheet](attachedsheet.md): The sheet attached to the window.
- [sheet](issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheets](sheets.md): An array of the sheets currently attached to the window.
