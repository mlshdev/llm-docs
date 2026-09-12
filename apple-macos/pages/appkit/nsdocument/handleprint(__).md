> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/handleprint(_:)](https://developer.apple.com/documentation/appkit/nsdocument/handleprint(_:))

# handlePrint(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Print AppleScript command by attempting to print the document.

## Declaration

```swift
func handlePrint(_ command: NSScriptCommand) -> Any?
```

## Parameters

- `command`: An AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Print command arguments from the `command` object and uses them to determine how to print the document—specifically, any print settings and whether to show the Print dialog. A Print AppleScript command may specify more than one document to print. If so, a message is sent to each document.

## See Also

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handleSave(\_:)](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

# handlePrintScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Print AppleScript command by attempting to print the document.

## Declaration

```objectivec
- (id) handlePrintScriptCommand:(NSScriptCommand *) command;
```

## Parameters

- `command`: An AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Print command arguments from the `command` object and uses them to determine how to print the document—specifically, any print settings and whether to show the Print dialog. A Print AppleScript command may specify more than one document to print. If so, a message is sent to each document.

## See Also

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.
