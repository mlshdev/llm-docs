> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfielddidbeginediting(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfielddidbeginediting(_:))

# textFieldDidBeginEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when editing begins in the specified text field.

## Declaration

```swift
optional func textFieldDidBeginEditing(_ textField: UITextField)
```

## Parameters

- `textField`: The text field in which an editing session began.

<a id="Discussion"></a>

## Discussion

This method notifies the delegate that the specified text field just became the first responder. Use this method to update state information or perform other tasks. For example, you might use this method to show overlay views that are visible only while editing.

Implementation of this method by the delegate is optional.

## See Also

### Managing editing

- [textFieldShouldBeginEditing(\_:)](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldShouldEndEditing(\_:)](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing(\_:reason:)](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing(\_:)](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextField.DidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.

# textFieldDidBeginEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when editing begins in the specified text field.

## Declaration

```objectivec
- (void) textFieldDidBeginEditing:(UITextField *) textField;
```

## Parameters

- `textField`: The text field in which an editing session began.

<a id="Discussion"></a>

## Discussion

This method notifies the delegate that the specified text field just became the first responder. Use this method to update state information or perform other tasks. For example, you might use this method to show overlay views that are visible only while editing.

Implementation of this method by the delegate is optional.

## See Also

### Managing editing

- [textFieldShouldBeginEditing:](textfieldshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text field.
- [textFieldShouldEndEditing:](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing:reason:](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing:](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextFieldDidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
