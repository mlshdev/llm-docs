> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/name-swift.struct/findpboard](https://developer.apple.com/documentation/appkit/nspasteboard/name-swift.struct/findpboard)

# findPboard (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The pasteboard that holds information about the current state of the active application’s find panel.

## Declaration

```swift
static let findPboard: NSPasteboard.Name
```

<a id="Discussion"></a>

## Discussion

This information permits users to enter a search string into the find panel, then switch to another application to conduct another search.

## See Also

### Deprecated

- [dragPboard](dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [fontPboard](fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [generalPboard](generalpboard.md): Deprecated. The pasteboard used for ordinary cut, copy, and paste operations.
- [rulerPboard](rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.

# NSFindPboard (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The pasteboard that holds information about the current state of the active application’s find panel.

## Declaration

```objectivec
extern NSPasteboardName NSFindPboard;
```

<a id="Discussion"></a>

## Discussion

This information permits users to enter a search string into the find panel, then switch to another application to conduct another search.

## See Also

### Deprecated

- [NSDragPboard](dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [NSFontPboard](fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [NSGeneralPboard](generalpboard.md): Deprecated. The pasteboard used for ordinary cut, copy, and paste operations.
- [NSRulerPboard](rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.
