> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/allowseditingtextattributes](https://developer.apple.com/documentation/uikit/uitextfield/allowseditingtextattributes)

# allowsEditingTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the user can edit the attributes of the text in the text field.

## Declaration

```swift
var allowsEditingTextAttributes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the user may edit the style information of the text. In addition, pasting styled text into the text field retains any embedded style information. If [false](https://developer.apple.com/documentation/swift/false), the text field prohibits the editing of style information and strips style information from any pasted text. However, you can still set the style information programmatically using the methods of this class.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [UITextField.DidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [didEndEditingReasonUserInfoKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.

# allowsEditingTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the user can edit the attributes of the text in the text field.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsEditingTextAttributes;
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the user may edit the style information of the text. In addition, pasting styled text into the text field retains any embedded style information. If [false](https://developer.apple.com/documentation/swift/false), the text field prohibits the editing of style information and strips style information from any pasted text. However, you can still set the style information programmatically using the methods of this class.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.
- [clearsOnBeginEditing](clearsonbeginediting.md): A Boolean value that determines whether the text field removes old text when editing begins.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that determines whether inserting text replaces the previous contents.
- [UITextFieldDidEndEditingReason](didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
- [UITextFieldDidEndEditingReasonKey](didendeditingreasonuserinfokey.md): A key that indicates the reason for ending editing in a text field.
- [UITextFieldTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
