> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/isselectable](https://developer.apple.com/documentation/appkit/nstextfield/isselectable)

# isSelectable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the user can select the content of the text field.

## Declaration

```swift
var isSelectable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field becomes selectable but not editable. Use [isEditable](iseditable.md) to make the text field selectable and editable. If [false](https://developer.apple.com/documentation/swift/false), the text is neither editable nor selectable.

## See Also

### Controlling selection and editing

- [isEditable](iseditable.md): A Boolean value that controls whether the user can edit the value in the text field.

# selectable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the user can select the content of the text field.

## Declaration

```objectivec
@property (getter=isSelectable) BOOL selectable;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field becomes selectable but not editable. Use [editable](iseditable.md) to make the text field selectable and editable. If [false](https://developer.apple.com/documentation/swift/false), the text is neither editable nor selectable.

## See Also

### Controlling selection and editing

- [editable](iseditable.md): A Boolean value that controls whether the user can edit the value in the text field.
