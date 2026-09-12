> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/lastcomponentoffilename](https://developer.apple.com/documentation/appkit/nsdocument/lastcomponentoffilename)

# lastComponentOfFileName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document seen by the user in AppleScript.

## Declaration

```swift
var lastComponentOfFileName: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the document name used during scripting. Note that this name may be different than the name used in [fileURL](fileurl.md).

## See Also

### Related Documentation

- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrint(\_:)](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSave(\_:)](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.

# lastComponentOfFileName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document seen by the user in AppleScript.

## Declaration

```objectivec
@property (copy) NSString * lastComponentOfFileName;
```

<a id="Discussion"></a>

## Discussion

This property contains the document name used during scripting. Note that this name may be different than the name used in [fileURL](fileurl.md).

## See Also

### Related Documentation

- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](objectspecifier.md): Returns the object specifier that represents the document.
