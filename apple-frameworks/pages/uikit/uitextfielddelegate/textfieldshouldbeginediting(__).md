> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfieldshouldbeginediting(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfieldshouldbeginediting(_:))

# textFieldShouldBeginEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to begin editing in the specified text field.

## Declaration

```swift
optional func textFieldShouldBeginEditing(_ textField: UITextField) -> Bool
```

## Parameters

- `textField`: The text field in which editing is about to begin.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should begin or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The text field calls this method when the user performs an action that would normally initiate the editing of the text field’s text. Implement this method if you want to prevent editing from happening in some situations. For example, you could use this method to prevent the user from editing the text field’s contents more than once. Most of the time, you should return [true](https://developer.apple.com/documentation/swift/true) to allow editing to proceed.

If you do not implement this method, the text field acts as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing editing

- [textFieldDidBeginEditing(\_:)](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing(\_:)](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing(\_:reason:)](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing(\_:)](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextField.DidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.

# textFieldShouldBeginEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to begin editing in the specified text field.

## Declaration

```objectivec
- (BOOL) textFieldShouldBeginEditing:(UITextField *) textField;
```

## Parameters

- `textField`: The text field in which editing is about to begin.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should begin or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

The text field calls this method when the user performs an action that would normally initiate the editing of the text field’s text. Implement this method if you want to prevent editing from happening in some situations. For example, you could use this method to prevent the user from editing the text field’s contents more than once. Most of the time, you should return [true](https://developer.apple.com/documentation/swift/true) to allow editing to proceed.

If you do not implement this method, the text field acts as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing editing

- [textFieldDidBeginEditing:](textfielddidbeginediting%28__%29.md): Tells the delegate when editing begins in the specified text field.
- [textFieldShouldEndEditing:](textfieldshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text field.
- [textFieldDidEndEditing:reason:](textfielddidendediting%28__reason_%29.md): Tells the delegate when editing stops for the specified text field, and the reason it stopped.
- [textFieldDidEndEditing:](textfielddidendediting%28__%29.md): Tells the delegate when editing stops for the specified text field.
- [UITextFieldDidEndEditingReason](../uitextfield/didendeditingreason.md): Constants that indicate the reason for ending editing in a text field.
