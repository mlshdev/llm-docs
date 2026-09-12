> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/handlesave(_:)](https://developer.apple.com/documentation/appkit/nsdocument/handlesave(_:))

# handleSave(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Save AppleScript command by attempting to save the document.

## Declaration

```swift
func handleSave(_ command: NSScriptCommand) -> Any?
```

## Parameters

- `command`: An AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Save command arguments from the `command` object and uses them to determine the file in which to save the document and the file type.

## See Also

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrint(\_:)](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

# handleSaveScriptCommand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles the Save AppleScript command by attempting to save the document.

## Declaration

```objectivec
- (id) handleSaveScriptCommand:(NSScriptCommand *) command;
```

## Parameters

- `command`: An AppleScript command object.

<a id="Discussion"></a>

## Discussion

Extracts Save command arguments from the `command` object and uses them to determine the file in which to save the document and the file type.

## See Also

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.
