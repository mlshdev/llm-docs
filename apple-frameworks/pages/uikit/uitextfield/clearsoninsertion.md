> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/clearsoninsertion](https://developer.apple.com/documentation/uikit/uitextfield/clearsoninsertion)

# clearsOnInsertion (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether inserting text replaces the previous contents.

## Declaration

```swift
var clearsOnInsertion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the text field is in editing mode, the selection UI is hidden and inserting new text clears the contents of the text field and sets the value of this property back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextField.DidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [didEndEditingReasonUserInfoKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# clearsOnInsertion (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether inserting text replaces the previous contents.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsOnInsertion;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the text field is in editing mode, the selection UI is hidden and inserting new text clears the contents of the text field and sets the value of this property back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextFieldDidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [UITextFieldDidEndEditingReasonKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
