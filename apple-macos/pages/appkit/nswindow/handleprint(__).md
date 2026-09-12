> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/handleprint(_:)](https://developer.apple.com/documentation/appkit/nswindow/handleprint(_:))

# handlePrint(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to print the contents of the window (or its associated document, if any).

## Declaration

```swift
func handlePrint(_ command: NSScriptCommand) -> Any?
```

<a id="Discussion"></a>

## Discussion

If there’s a corresponding document and the window is the main window of the document, it forwards the `print` command to the corresponding document. Otherwise, the window sends itself a `print` message.

## See Also

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handleSave(\_:)](handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).

# handlePrintScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the AppleScript command to print the contents of the window (or its associated document, if any).

## Declaration

```objectivec
- (id) handlePrintScriptCommand:(NSScriptCommand *) command;
```

<a id="Discussion"></a>

## Discussion

If there’s a corresponding document and the window is the main window of the document, it forwards the `print` command to the corresponding document. Otherwise, the window sends itself a `print` message.

## See Also

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).
