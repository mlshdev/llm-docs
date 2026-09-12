> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/clearsonbeginediting](https://developer.apple.com/documentation/uikit/uitextfield/clearsonbeginediting)

# clearsOnBeginEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the text field removes old text when editing begins.

## Declaration

```swift
var clearsOnBeginEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the text field’s previous text is cleared when the user selects the text field to begin editing. If [false](https://developer.apple.com/documentation/swift/false), the text field places an insertion point at the place where the user tapped the field.

> **Note**

>  Even if this property is set to [true](https://developer.apple.com/documentation/swift/true), the text field delegate can override this behavior by returning [false](https://developer.apple.com/documentation/swift/false) from its [textFieldShouldClear(\_:)](../uitextfielddelegate/textfieldshouldclear%28__%29.md) method.

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextField.DidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [didEndEditingReasonUserInfoKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# clearsOnBeginEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the text field removes old text when editing begins.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsOnBeginEditing;
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the text field’s previous text is cleared when the user selects the text field to begin editing. If [false](https://developer.apple.com/documentation/swift/false), the text field places an insertion point at the place where the user tapped the field.

> **Note**

>  Even if this property is set to [true](https://developer.apple.com/documentation/swift/true), the text field delegate can override this behavior by returning [false](https://developer.apple.com/documentation/swift/false) from its [textFieldShouldClear:](../uitextfielddelegate/textfieldshouldclear%28__%29.md) method.

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that determines whether the user can edit the attributes of the text in the text field.
- [UITextFieldDidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [UITextFieldDidEndEditingReasonKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
