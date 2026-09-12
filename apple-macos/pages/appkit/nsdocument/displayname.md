> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/displayname](https://developer.apple.com/documentation/appkit/nsdocument/displayname)

# displayName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.

## Declaration

```swift
var displayName: String! { get set }
```

<a id="Discussion"></a>

## Discussion

If the document has been saved, the display name is the last component of the directory location of the saved file (for example, “`MyDocument`” if the path is “`/tmp/MyDocument.rtf`”). If the document is new, `NSDocument` makes the display name “Untitled n,” where n is a number in a sequence of new and unsaved documents. The displayable name also takes into account whether the document’s filename extension should be hidden. Subclasses of `NSWindowController` can override [windowTitle(forDocumentDisplayName:)](../nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md) to modify the display name as it appears in window titles.

## See Also

### Managing Document Windows

- [showWindows()](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow(\_:)](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [defaultDraftName()](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

# displayName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

If the document has been saved, the display name is the last component of the directory location of the saved file (for example, “`MyDocument`” if the path is “`/tmp/MyDocument.rtf`”). If the document is new, `NSDocument` makes the display name “Untitled n,” where n is a number in a sequence of new and unsaved documents. The displayable name also takes into account whether the document’s filename extension should be hidden. Subclasses of `NSWindowController` can override [windowTitleForDocumentDisplayName:](../nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md) to modify the display name as it appears in window titles.

## See Also

### Managing Document Windows

- [showWindows](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow:](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [defaultDraftName](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.
