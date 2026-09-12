> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/handleclose(_:)](https://developer.apple.com/documentation/appkit/nsdocument/handleclose(_:))

# handleClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Close AppleScript command by attempting to close the document.

## Declaration

```swift
func handleClose(_ command: NSCloseCommand) -> Any?
```

## Parameters

- `command`: A Close AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Close command arguments from the `command` object and uses them to determine how to close the document—specifically, whether to ignore unsaved changes, save changes automatically, or ask the user and to identify the file in which to save the document (by default, the file that was opened or previously saved to). A Close AppleScript command may specify more than one document to close. If so, a message is sent to each document object.

## See Also

### Handling Script Commands

- [handlePrint(\_:)](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSave(\_:)](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

# handleCloseScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Close AppleScript command by attempting to close the document.

## Declaration

```objectivec
- (id) handleCloseScriptCommand:(NSCloseCommand *) command;
```

## Parameters

- `command`: A Close AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Close command arguments from the `command` object and uses them to determine how to close the document—specifically, whether to ignore unsaved changes, save changes automatically, or ask the user and to identify the file in which to save the document (by default, the file that was opened or previously saved to). A Close AppleScript command may specify more than one document to close. If so, a message is sent to each document object.

## See Also

### Handling Script Commands

- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.
