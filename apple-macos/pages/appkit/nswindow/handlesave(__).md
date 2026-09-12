> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/handlesave(_:)](https://developer.apple.com/documentation/appkit/nswindow/handlesave(_:))

# handleSave(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to save the window (and its associated document, if any).

## Declaration

```swift
func handleSave(_ command: NSScriptCommand) -> Any?
```

<a id="Discussion"></a>

## Discussion

If there’s a corresponding document and the window is the main window of the document, it forwards the `save` command to the corresponding document. Otherwise, this method does nothing.

## See Also

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handlePrint(\_:)](handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).

# handleSaveScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to save the window (and its associated document, if any).

## Declaration

```objectivec
- (id) handleSaveScriptCommand:(NSScriptCommand *) command;
```

<a id="Discussion"></a>

## Discussion

If there’s a corresponding document and the window is the main window of the document, it forwards the `save` command to the corresponding document. Otherwise, this method does nothing.

## See Also

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).
