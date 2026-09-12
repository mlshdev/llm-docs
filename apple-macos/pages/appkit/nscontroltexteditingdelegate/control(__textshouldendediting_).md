> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/control(_:textshouldendediting:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/control(_:textshouldendediting:))

# control(\_:textShouldEndEditing:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the insertion point tries to leave a cell of the control that has been edited.

## Declaration

```swift
@MainActor optional func control(_ control: NSControl, textShouldEndEditing fieldEditor: NSText) -> Bool
```

## Parameters

- `control`: The control for which editing is about to end.
- `fieldEditor`: The field editor of the control. You can use this parameter to get the edited text.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the insertion point should be allowed to end the editing session; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This message is sent only by controls that allow editing of text (such as a text field or a form field). This message is sent by the control directly to its delegate object.

## See Also

### Responding to Text Editing

- [control(\_:textShouldBeginEditing:)](control%28__textshouldbeginediting_%29.md): Invoked when the user tries to enter a character in a cell of a control that allows editing of text (such as a text field or form field).

# control:textShouldEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the insertion point tries to leave a cell of the control that has been edited.

## Declaration

```objectivec
- (BOOL) control:(NSControl *) control textShouldEndEditing:(NSText *) fieldEditor;
```

## Parameters

- `control`: The control for which editing is about to end.
- `fieldEditor`: The field editor of the control. You can use this parameter to get the edited text.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the insertion point should be allowed to end the editing session; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This message is sent only by controls that allow editing of text (such as a text field or a form field). This message is sent by the control directly to its delegate object.

## See Also

### Responding to Text Editing

- [control:textShouldBeginEditing:](control%28__textshouldbeginediting_%29.md): Invoked when the user tries to enter a character in a cell of a control that allows editing of text (such as a text field or form field).
