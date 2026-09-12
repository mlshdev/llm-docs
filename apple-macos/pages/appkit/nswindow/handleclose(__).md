> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/handleclose(_:)](https://developer.apple.com/documentation/appkit/nswindow/handleclose(_:))

# handleClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to close the window (and its associated document, if any).

## Declaration

```swift
func handleClose(_ command: NSCloseCommand) -> Any?
```

<a id="Discussion"></a>

## Discussion

Extracts `close` command arguments from the `command` object and uses them to determine how to close the associated document—specifically, whether to ignore unsaved changes, save changes automatically, or ask the user—and identifies the file to save the document to. By default, the window saves the document to the file that was opened or previously saved to. Otherwise, the window saves it with an “untitled” name.

If there’s a corresponding document and the window is the main window of the document, this function forwards the `close` command to the corresponding document; otherwise, the window sends itself a `performClose` message, if it has a close box.

## See Also

### Handling Script Commands

- [handlePrint(\_:)](handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).
- [handleSave(\_:)](handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).

# handleCloseScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to close the window (and its associated document, if any).

## Declaration

```objectivec
- (id) handleCloseScriptCommand:(NSCloseCommand *) command;
```

<a id="Discussion"></a>

## Discussion

Extracts `close` command arguments from the `command` object and uses them to determine how to close the associated document—specifically, whether to ignore unsaved changes, save changes automatically, or ask the user—and identifies the file to save the document to. By default, the window saves the document to the file that was opened or previously saved to. Otherwise, the window saves it with an “untitled” name.

If there’s a corresponding document and the window is the main window of the document, this function forwards the `close` command to the corresponding document; otherwise, the window sends itself a `performClose` message, if it has a close box.

## See Also

### Handling Script Commands

- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).
