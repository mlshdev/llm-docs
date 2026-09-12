> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/iseditable](https://developer.apple.com/documentation/appkit/nstext/iseditable)

# isEditable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to edit its text.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to edit text and attributes; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

You can change the receiver’s text programmatically regardless of this setting. If the receiver is made editable, it’s also made selectable. `NSText` objects are by default editable.

## See Also

### Setting behavioral attributes

- [isSelectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [isFieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [isRichText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

# editable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to edit its text.

## Declaration

```objectivec
@property (getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to edit text and attributes; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

You can change the receiver’s text programmatically regardless of this setting. If the receiver is made editable, it’s also made selectable. `NSText` objects are by default editable.

## See Also

### Setting behavioral attributes

- [selectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [fieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [richText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.
