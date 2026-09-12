> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/windowforsheet](https://developer.apple.com/documentation/appkit/nsdocument/windowforsheet)

# windowForSheet (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the document window to use as the parent of a document-modal sheet.

## Declaration

```swift
var windowForSheet: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

This method searches the document’s window controllers for the most suitable window to use when displaying the sheet.

The value of this property may be `nil`, in which case the sender should present an app-modal panel. The `NSDocument` implementation of this property sets the value to the window of the first window controller, or `[NSApp mainWindow]` if there are no window controllers or if the first window controller has no window.

## See Also

### Managing Document Windows

- [showWindows()](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow(\_:)](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName()](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

# windowForSheet (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the document window to use as the parent of a document-modal sheet.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSWindow * windowForSheet;
```

<a id="Discussion"></a>

## Discussion

This method searches the document’s window controllers for the most suitable window to use when displaying the sheet.

The value of this property may be `nil`, in which case the sender should present an app-modal panel. The `NSDocument` implementation of this property sets the value to the window of the first window controller, or `[NSApp mainWindow]` if there are no window controllers or if the first window controller has no window.

## See Also

### Managing Document Windows

- [showWindows](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow:](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.
