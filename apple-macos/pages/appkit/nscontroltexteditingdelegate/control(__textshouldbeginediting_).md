> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/control(_:textshouldbeginediting:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/control(_:textshouldbeginediting:))

# control(\_:textShouldBeginEditing:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the user tries to enter a character in a cell of a control that allows editing of text (such as a text field or form field).

## Declaration

```swift
@MainActor optional func control(_ control: NSControl, textShouldBeginEditing fieldEditor: NSText) -> Bool
```

## Parameters

- `control`: The control whose content is about to be edited.
- `fieldEditor`: The field editor of the control.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control’s field editor should be allowed to start editing the text; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can use this method to allow or disallow editing in a control. This message is sent by the control directly to its delegate object.

## See Also

### Responding to Text Editing

- [control(\_:textShouldEndEditing:)](control%28__textshouldendediting_%29.md): Invoked when the insertion point tries to leave a cell of the control that has been edited.

# control:textShouldBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the user tries to enter a character in a cell of a control that allows editing of text (such as a text field or form field).

## Declaration

```objectivec
- (BOOL) control:(NSControl *) control textShouldBeginEditing:(NSText *) fieldEditor;
```

## Parameters

- `control`: The control whose content is about to be edited.
- `fieldEditor`: The field editor of the control.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control’s field editor should be allowed to start editing the text; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can use this method to allow or disallow editing in a control. This message is sent by the control directly to its delegate object.

## See Also

### Responding to Text Editing

- [control:textShouldEndEditing:](control%28__textshouldendediting_%29.md): Invoked when the insertion point tries to leave a cell of the control that has been edited.
