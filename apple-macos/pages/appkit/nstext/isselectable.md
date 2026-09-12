> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/isselectable](https://developer.apple.com/documentation/appkit/nstext/isselectable)

# isSelectable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to select its text.

## Declaration

```swift
var isSelectable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to select text; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

You can set selections programmatically regardless of this setting. If the receiver is made not selectable, it’s also made not editable. `NSText` objects are by default editable and selectable.

## See Also

### Setting behavioral attributes

- [isEditable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [isFieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [isRichText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

# selectable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to select its text.

## Declaration

```objectivec
@property (getter=isSelectable) BOOL selectable;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to select text; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

You can set selections programmatically regardless of this setting. If the receiver is made not selectable, it’s also made not editable. `NSText` objects are by default editable and selectable.

## See Also

### Setting behavioral attributes

- [editable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [fieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [richText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.
