> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/importsgraphics](https://developer.apple.com/documentation/appkit/nstext/importsgraphics)

# importsGraphics (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to import files by dragging.

## Declaration

```swift
var importsGraphics: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to import files by dragging; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

If the receiver is set to accept dragged files, it’s also made a rich text object. Subclasses may or may not accept dragged files by default.

## See Also

### Setting behavioral attributes

- [isEditable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [isSelectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [isFieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [isRichText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.

# importsGraphics (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver allows the user to import files by dragging.

## Declaration

```objectivec
@property BOOL importsGraphics;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver allows the user to import files by dragging; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

If the receiver is set to accept dragged files, it’s also made a rich text object. Subclasses may or may not accept dragged files by default.

## See Also

### Setting behavioral attributes

- [editable](iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [selectable](isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [fieldEditor](isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [richText](isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
