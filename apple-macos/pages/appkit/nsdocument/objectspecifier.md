> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/objectspecifier](https://developer.apple.com/documentation/appkit/nsdocument/objectspecifier)

# objectSpecifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the object specifier that represents the document.

## Declaration

```swift
var objectSpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

The document object specifier.

<a id="Discussion"></a>

## Discussion

An object specifier represents an AppleScript reference form, which is a natural-language expression such as `words 10 through 20` or `front document`. During script processing, an object contained by a document (such as the `second paragraph` or the `third rectangle`) may need to specify its container (the document).

## See Also

### Handling Script Commands

- [handleClose(\_:)](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrint(\_:)](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSave(\_:)](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

# objectSpecifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the object specifier that represents the document.

## Declaration

```objectivec
@property (strong, readonly) NSScriptObjectSpecifier * objectSpecifier;
```

<a id="return-value"></a>

## Return Value

The document object specifier.

<a id="Discussion"></a>

## Discussion

An object specifier represents an AppleScript reference form, which is a natural-language expression such as `words 10 through 20` or `front document`. During script processing, an object contained by a document (such as the `second paragraph` or the `third rectangle`) may need to specify its container (the document).

## See Also

### Handling Script Commands

- [handleCloseScriptCommand:](handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrintScriptCommand:](handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSaveScriptCommand:](handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [lastComponentOfFileName](lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.
