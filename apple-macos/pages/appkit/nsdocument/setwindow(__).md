> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/setwindow(_:)](https://developer.apple.com/documentation/appkit/nsdocument/setwindow(_:))

# setWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window outlet of this document to the specified value.

## Declaration

```swift
func setWindow(_ window: NSWindow?)
```

## Parameters

- `window`: The window to which the receiver’s `window` outlet points.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically during the loading of any nib for which this document is the file’s owner, if the file’s owner `window` outlet is connected in the nib. You should not invoke this method directly, and typically you would not override it either.

## See Also

### Managing Document Windows

- [showWindows()](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName()](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

# setWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window outlet of this document to the specified value.

## Declaration

```objectivec
- (void) setWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window to which the receiver’s `window` outlet points.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically during the loading of any nib for which this document is the file’s owner, if the file’s owner `window` outlet is connected in the nib. You should not invoke this method directly, and typically you would not override it either.

## See Also

### Managing Document Windows

- [showWindows](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName](defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.
