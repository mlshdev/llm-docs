> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/didendeditingreason](https://developer.apple.com/documentation/uikit/uitextfield/didendeditingreason)

# UITextField.DidEndEditingReason (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the reason for ending editing in a text field.

## Declaration

```swift
enum DidEndEditingReason
```

## Topics

### Constants

- [UITextField.DidEndEditingReason.committed](didendeditingreason/committed.md): The text field changes were accepted by the user.
- [UITextField.DidEndEditingReason.cancelled](didendeditingreason/cancelled.md): The text field changes were aborted.

### Initializers

- [init(rawValue:)](didendeditingreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [didEndEditingReasonUserInfoKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# UITextFieldDidEndEditingReason (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the reason for ending editing in a text field.

## Declaration

```objectivec
enum UITextFieldDidEndEditingReason : NSInteger;
```

## Topics

### Constants

- [UITextFieldDidEndEditingReasonCommitted](didendeditingreason/committed.md): The text field changes were accepted by the user.
- [UITextFieldDidEndEditingReasonCancelled](didendeditingreason/cancelled.md): The text field changes were aborted.

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextFieldDidEndEditingReasonKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
