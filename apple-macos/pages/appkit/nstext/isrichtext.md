> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/isrichtext](https://developer.apple.com/documentation/appkit/nstext/isrichtext)

# isRichText (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.

## Declaration

```swift
var isRichText: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) the receiver allows the user to apply attributes to specific ranges of the text; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t.

## See Also

### Setting behavioral attributes

- [isEditable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [isSelectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [isFieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

# richText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.

## Declaration

```objectivec
@property (getter=isRichText) BOOL richText;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) the receiver allows the user to apply attributes to specific ranges of the text; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t.

## See Also

### Setting behavioral attributes

- [editable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [selectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [fieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.
