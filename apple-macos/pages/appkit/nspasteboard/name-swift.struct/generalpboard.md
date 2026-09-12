> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/name-swift.struct/generalpboard](https://developer.apple.com/documentation/appkit/nspasteboard/name-swift.struct/generalpboard)

# generalPboard (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The pasteboard used for ordinary cut, copy, and paste operations.

## Declaration

```swift
static let generalPboard: NSPasteboard.Name
```

<a id="Discussion"></a>

## Discussion

This pasteboard holds the contents of the last selection that’s been cut or copied.

## See Also

### Deprecated

- [dragPboard](dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [findPboard](findpboard.md): Deprecated. The pasteboard that holds information about the current state of the active application’s find panel.
- [fontPboard](fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [rulerPboard](rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.

# NSGeneralPboard (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The pasteboard used for ordinary cut, copy, and paste operations.

## Declaration

```objectivec
extern NSPasteboardName NSGeneralPboard;
```

<a id="Discussion"></a>

## Discussion

This pasteboard holds the contents of the last selection that’s been cut or copied.

## See Also

### Deprecated

- [NSDragPboard](dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [NSFindPboard](findpboard.md): Deprecated. The pasteboard that holds information about the current state of the active application’s find panel.
- [NSFontPboard](fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [NSRulerPboard](rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.
