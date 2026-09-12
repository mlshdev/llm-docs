> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/textdidchangenotification](https://developer.apple.com/documentation/uikit/uitextfield/textdidchangenotification)

# textDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the text in a text field changes.

## Declaration

```swift
nonisolated class let textDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The affected text field is stored in the `object` parameter of the notification.

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextField.DidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [didEndEditingReasonUserInfoKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# UITextFieldTextDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the text in a text field changes.

## Declaration

```objectivec
extern NSNotificationName const UITextFieldTextDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The affected text field is stored in the `object` parameter of the notification.

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextFieldDidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [UITextFieldDidEndEditingReasonKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
