> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/iseditable](https://developer.apple.com/documentation/appkit/nstextfield/iseditable)

# isEditable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the user can edit the value in the text field.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user can select and edit text. If [false](https://developer.apple.com/documentation/swift/false), the user can’t edit text, and the ability to select the text field’s content is dependent on the value of [isSelectable](isselectable.md).

For example, if an `NSTextField` object is selectable but uneditable, becomes editable for a time, and then becomes uneditable again, it remains selectable. To ensure that text is neither editable nor selectable, use [isSelectable](isselectable.md) to disable text selection.

## See Also

### Controlling selection and editing

- [isSelectable](isselectable.md): A Boolean value that determines whether the user can select the content of the text field.

# editable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the user can edit the value in the text field.

## Declaration

```objectivec
@property (getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user can select and edit text. If [false](https://developer.apple.com/documentation/swift/false), the user can’t edit text, and the ability to select the text field’s content is dependent on the value of [selectable](isselectable.md).

For example, if an `NSTextField` object is selectable but uneditable, becomes editable for a time, and then becomes uneditable again, it remains selectable. To ensure that text is neither editable nor selectable, use [selectable](isselectable.md) to disable text selection.

## See Also

### Controlling selection and editing

- [selectable](isselectable.md): A Boolean value that determines whether the user can select the content of the text field.
