> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/isfieldeditor](https://developer.apple.com/documentation/appkit/nstext/isfieldeditor)

# isFieldEditor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.

## Declaration

```swift
var isFieldEditor: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t, instead accepting these characters as text input.

See the [NSWindow](../nswindow.md) class specification for more information on field editors. By default, `NSText` objects don’t behave as field editors.

## See Also

### Setting behavioral attributes

- [isEditable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [isSelectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [isRichText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

# fieldEditor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.

## Declaration

```objectivec
@property (getter=isFieldEditor) BOOL fieldEditor;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t, instead accepting these characters as text input.

See the [NSWindow](../nswindow.md) class specification for more information on field editors. By default, `NSText` objects don’t behave as field editors.

## See Also

### Setting behavioral attributes

- [editable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [selectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [richText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.
