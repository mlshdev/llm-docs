> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfielddidendediting(_:reason:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfielddidendediting(_:reason:))

# textFieldDidEndEditing(\_:reason:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate when editing stops for the specified text field, and the reason it stopped.

## Declaration

```swift
optional func textFieldDidEndEditing(_ textField: UITextField, reason: UITextField.DidEndEditingReason)
```

## Parameters

- `textField`: The text field for which editing ended.
- `reason`: The reason why editing ended. Use this field to determine whether to incorporate the text editing changes or abandon them.

<a id="Discussion"></a>

## Discussion

This method is called after the text field resigns its first responder status. You can use this method to update your delegate’s state information. For example, you might use this method to hide overlay views that should be visible only while editing.

Implementation of this method by the delegate is optional. UIKit calls this method in preference to the [textFieldDidEndEditing(\_:)](textfielddidendediting%28__%29.md) method.

## See Also

### Managing editing

- [textFieldShouldBeginEditing(\_:)](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing(\_:)](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing(\_:)](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing(\_:)](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextField.DidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.

# textFieldDidEndEditing:reason: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate when editing stops for the specified text field, and the reason it stopped.

## Declaration

```objectivec
- (void) textFieldDidEndEditing:(UITextField *) textField reason:(UITextFieldDidEndEditingReason) reason;
```

## Parameters

- `textField`: The text field for which editing ended.
- `reason`: The reason why editing ended. Use this field to determine whether to incorporate the text editing changes or abandon them.

<a id="Discussion"></a>

## Discussion

This method is called after the text field resigns its first responder status. You can use this method to update your delegate’s state information. For example, you might use this method to hide overlay views that should be visible only while editing.

Implementation of this method by the delegate is optional. UIKit calls this method in preference to the [textFieldDidEndEditing:](textfielddidendediting%28__%29.md) method.

## See Also

### Managing editing

- [textFieldShouldBeginEditing:](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing:](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing:](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing:](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextFieldDidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
