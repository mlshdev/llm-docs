> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfieldshouldendediting(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfieldshouldendediting(_:))

# textFieldShouldEndEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to stop editing in the specified text field.

## Declaration

```swift
optional func textFieldShouldEndEditing(_ textField: UITextField) -> Bool
```

## Parameters

- `textField`: The text field in which editing is about to end.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop or [false](https://developer.apple.com/documentation/swift/false) if it should continue.

<a id="Discussion"></a>

## Discussion

The text field calls this method when it is asked to resign the first responder status. This can happen when the user selects another control or when you call the text field’s [resignFirstResponder()](../uiresponder/resignfirstresponder%28%29.md) method. Before the focus change occurs, however, the text field calls this method and gives you a chance to prevent the change from happening.

Normally, you would return [true](https://developer.apple.com/documentation/swift/true) from this method to allow the text field to resign the first responder status. You might return [false](https://developer.apple.com/documentation/swift/false), however, in cases where your delegate detects invalid contents in the text field. Returning [false](https://developer.apple.com/documentation/swift/false) prevents the user from switching to another control until the text field contains a valid value.

> **Note**

>  If you use this method to validate the contents of the text field, you might also want to use an overlay view to provide feedback to that effect. For example, you might display a small icon indicating the text is invalid. For more information about adding overlays to text fields, see the methods of [UITextField](../uitextfield.md).

Be aware that this method provides only a recommendation about whether editing should end. Even if you return [false](https://developer.apple.com/documentation/swift/false), UIKit might still force an end to editing. For example, text fields always resign the first responder status when they are removed from their parent view or window.

Implementation of this method by the delegate is optional. If you do not implement this method, the text field resigns the first responder status as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing editing

- [textFieldShouldBeginEditing(\_:)](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing(\_:)](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldDidEndEditing(\_:reason:)](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing(\_:)](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextField.DidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.

# textFieldShouldEndEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to stop editing in the specified text field.

## Declaration

```objectivec
- (BOOL) textFieldShouldEndEditing:(UITextField *) textField;
```

## Parameters

- `textField`: The text field in which editing is about to end.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop or [false](https://developer.apple.com/documentation/swift/false) if it should continue.

<a id="Discussion"></a>

## Discussion

The text field calls this method when it is asked to resign the first responder status. This can happen when the user selects another control or when you call the text field’s [resignFirstResponder](../uiresponder/resignfirstresponder%28%29.md) method. Before the focus change occurs, however, the text field calls this method and gives you a chance to prevent the change from happening.

Normally, you would return [true](https://developer.apple.com/documentation/swift/true) from this method to allow the text field to resign the first responder status. You might return [false](https://developer.apple.com/documentation/swift/false), however, in cases where your delegate detects invalid contents in the text field. Returning [false](https://developer.apple.com/documentation/swift/false) prevents the user from switching to another control until the text field contains a valid value.

> **Note**

>  If you use this method to validate the contents of the text field, you might also want to use an overlay view to provide feedback to that effect. For example, you might display a small icon indicating the text is invalid. For more information about adding overlays to text fields, see the methods of [UITextField](../uitextfield.md).

Be aware that this method provides only a recommendation about whether editing should end. Even if you return [false](https://developer.apple.com/documentation/swift/false), UIKit might still force an end to editing. For example, text fields always resign the first responder status when they are removed from their parent view or window.

Implementation of this method by the delegate is optional. If you do not implement this method, the text field resigns the first responder status as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing editing

- [textFieldShouldBeginEditing:](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing:](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldDidEndEditing:reason:](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing:](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextFieldDidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
