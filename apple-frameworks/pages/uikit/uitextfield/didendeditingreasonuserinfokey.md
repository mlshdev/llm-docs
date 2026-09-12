> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/didendeditingreasonuserinfokey](https://developer.apple.com/documentation/uikit/uitextfield/didendeditingreasonuserinfokey)

# didEndEditingReasonUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the reason for ending editing in a text field.

## Declaration

```swift
nonisolated class let didEndEditingReasonUserInfoKey: String
```

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextField.DidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# UITextFieldDidEndEditingReasonKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the reason for ending editing in a text field.

## Declaration

```objectivec
extern NSString * const UITextFieldDidEndEditingReasonKey;
```

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextFieldDidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
