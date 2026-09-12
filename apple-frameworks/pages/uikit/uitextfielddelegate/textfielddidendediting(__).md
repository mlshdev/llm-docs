> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfielddidendediting(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfielddidendediting(_:))

# textFieldDidEndEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when editing stops for the specified text field.

## Declaration

```swift
optional func textFieldDidEndEditing(_ textField: UITextField)
```

## Parameters

- `textField`: The text field for which editing ended.

<a id="Discussion"></a>

## Discussion

This method is called after the text field resigns its first responder status. You can use this method to update your delegate’s state information. For example, you might use this method to hide overlay views that should be visible only while editing.

Implementation of this method by the delegate is optional. If your delegate also implements the [textFieldDidEndEditing(\_:reason:)](textfielddidendediting%28__reason_%29.md) method, UIKit calls that method in preference to this one.

## See Also

### Managing editing

- [textFieldShouldBeginEditing(\_:)](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing(\_:)](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing(\_:)](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing(\_:reason:)](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [UITextField.DidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.

# textFieldDidEndEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when editing stops for the specified text field.

## Declaration

```objectivec
- (void) textFieldDidEndEditing:(UITextField *) textField;
```

## Parameters

- `textField`: The text field for which editing ended.

<a id="Discussion"></a>

## Discussion

This method is called after the text field resigns its first responder status. You can use this method to update your delegate’s state information. For example, you might use this method to hide overlay views that should be visible only while editing.

Implementation of this method by the delegate is optional. If your delegate also implements the [textFieldDidEndEditing:reason:](textfielddidendediting%28__reason_%29.md) method, UIKit calls that method in preference to this one.

## See Also

### Managing editing

- [textFieldShouldBeginEditing:](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldDidBeginEditing:](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing:](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing:reason:](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [UITextFieldDidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
